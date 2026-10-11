"use client";

import { useEffect, useRef } from "react";

/**
 * Reading progress, drawn as a hairline along the bottom edge of the header.
 * It eases toward the scroll position (about 0.3 s) so it glides instead of
 * stepping. The bar is clipped rather than scaled, so its gradient and its
 * leading edge stay sharp at every length.
 * Hidden when reduced motion is preferred, as on Cryvanta.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let shown = 0;
    let frame = 0;

    const target = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };

    function tick() {
      frame = 0;
      const goal = target();
      shown += (goal - shown) * 0.22;
      if (Math.abs(goal - shown) < 0.0005) shown = goal;
      else frame = requestAnimationFrame(tick);
      bar!.style.setProperty("--progress", String(shown));
    }

    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    shown = target();
    bar.style.setProperty("--progress", String(shown));
    bar.dataset.ready = "";
    window.addEventListener("scroll", start, { passive: true });
    window.addEventListener("resize", start);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", start);
      window.removeEventListener("resize", start);
    };
  }, []);

  return <span ref={barRef} aria-hidden="true" className="scroll-progress" />;
}
