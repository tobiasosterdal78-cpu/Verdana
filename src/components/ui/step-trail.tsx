"use client";

import { useEffect, useRef } from "react";

/**
 * Numbered steps that light up one after another as the list scrolls
 * through the viewport, joined by a rule that fills from step to step.
 * Without JavaScript, or with reduced motion, every step shows lit.
 */
export function StepTrail({ steps, className = "" }: { steps: string[]; className?: string }) {
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const element = list.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const items = [...element.querySelectorAll<HTMLElement>(":scope > li")];
    const last = Math.max(1, items.length - 1);
    // Where along the scroll each step lights: the first as the list
    // comes in, the last by the time it reaches the middle of the screen.
    const stops = items.map((_, index) => 0.12 + (index / last) * 0.8);
    let frame = 0;

    const update = () => {
      frame = 0;
      const box = element.getBoundingClientRect();
      const start = window.innerHeight * 0.92;
      const end = window.innerHeight * 0.55 - box.height / 2;
      const progress = Math.min(1, Math.max(0, (start - box.top) / (start - end)));
      items.forEach((item, index) => {
        item.toggleAttribute("data-lit", progress >= stops[index]);
        const next = stops[index + 1] ?? 1;
        const fill = Math.min(1, Math.max(0, (progress - stops[index]) / (next - stops[index])));
        item.style.setProperty("--fill", fill.toFixed(3));
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    element.dataset.trail = "live";
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <ol ref={list} className={`step-trail ${className}`}>
      {steps.map((step, index) => (
        <li key={step} className="step-trail-item">
          <span aria-hidden="true" className="step-trail-node">
            {index + 1}
          </span>
          <span className="step-trail-text">{step}</span>
        </li>
      ))}
    </ol>
  );
}
