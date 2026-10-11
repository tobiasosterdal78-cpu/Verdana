"use client";

import { useEffect, useRef } from "react";

/* ------------------------------------------------------------------ *
 * A field of long, thin pins that are always there but invisible. Moving
 * the pointer reveals them one by one: each pin lights up while the
 * pointer moves close by, about 5 cm above to 5 cm below and a few columns
 * to either side, then fades out over roughly a second. Nothing is drawn
 * at rest, and nothing at all when reduced motion is preferred.
 * ------------------------------------------------------------------ */

const COLUMN = 46; // px between pins
const ROW = 240; // px between rows of pins
const LENGTH = 168; // px pin length
const REACH_X = 150; // horizontal reveal radius
const REACH_Y = 190; // vertical reveal radius, about 5 cm
const RISE = 0.22; // how fast a pin brightens toward its target
const FADE = 0.955; // per-frame fade once the pointer has moved on

type Pin = { x: number; top: number; level: number };

const smooth = (t: number) => (t >= 1 ? 0 : t <= 0 ? 1 : 1 - t * t * (3 - 2 * t));

export function PinField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let pins: Pin[] = [];
    let width = 0;
    let height = 0;
    let ratio = 1;
    let pointer: { x: number; y: number } | null = null;
    // Pins only rise while the pointer is moving; a resting pointer lets them fade.
    let moved = false;
    let frame = 0;
    let color = "#0f2a78";
    let strength = 0.8;

    const readColor = () => {
      const styles = getComputedStyle(document.documentElement);
      color = styles.getPropertyValue("--pin").trim() || color;
      strength = document.documentElement.getAttribute("data-theme") === "dark" ? 1 : 0.85;
    };

    const layout = () => {
      const rect = host.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      const previous = new Map(pins.map((pin) => [`${pin.x}:${pin.top}`, pin.level]));
      pins = [];
      const columns = Math.ceil(width / COLUMN) + 1;
      const offsetX = (width - (columns - 1) * COLUMN) / 2;
      for (let c = 0; c < columns; c++) {
        // Alternate columns are shifted half a row, so the pins stagger.
        const shift = c % 2 === 0 ? 0 : ROW / 2;
        for (let top = -LENGTH + shift; top < height; top += ROW) {
          const x = Math.round(offsetX + c * COLUMN) + 0.5;
          pins.push({ x, top, level: previous.get(`${x}:${top}`) ?? 0 });
        }
      }
      draw();
    };

    const draw = () => {
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);
      context.lineWidth = 1.5;
      context.lineCap = "round";
      for (const pin of pins) {
        if (pin.level < 0.01) continue;
        const gradient = context.createLinearGradient(0, pin.top, 0, pin.top + LENGTH);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.18, color);
        gradient.addColorStop(0.82, color);
        gradient.addColorStop(1, "transparent");
        context.globalAlpha = pin.level * strength;
        context.strokeStyle = gradient;
        context.beginPath();
        context.moveTo(pin.x, pin.top);
        context.lineTo(pin.x, pin.top + LENGTH);
        context.stroke();
      }
      context.globalAlpha = 1;
    };

    const tick = () => {
      frame = 0;
      let active = false;
      for (const pin of pins) {
        let target = 0;
        if (pointer && moved) {
          const dx = Math.abs(pin.x - pointer.x) / REACH_X;
          // Distance from the pointer to the nearest point of the pin.
          const nearest = Math.min(Math.max(pointer.y, pin.top), pin.top + LENGTH);
          const dy = Math.abs(nearest - pointer.y) / REACH_Y;
          target = smooth(dx) * smooth(dy);
        }
        if (target > pin.level) pin.level += (target - pin.level) * RISE;
        else pin.level *= FADE;
        if (pin.level < 0.004) pin.level = 0;
        else active = true;
      }
      moved = false;
      draw();
      if (active) frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      moved = true;
      start();
    };
    const onLeave = () => {
      pointer = null;
      start();
    };

    readColor();
    layout();
    const resize = new ResizeObserver(layout);
    resize.observe(host);
    const theme = new MutationObserver(() => {
      readColor();
      draw();
    });
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      theme.disconnect();
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 size-full ${className}`}
    />
  );
}
