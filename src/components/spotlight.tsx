"use client";

import { useEffect } from "react";

/**
 * Keeps --spot-x/--spot-y on the .spotlight element under a mouse pointer,
 * for the wash of blue that follows the hand across cards. One listener
 * serves the whole page, and touch or pen input never lights a card.
 */
export function Spotlight() {
  useEffect(() => {
    let frame = 0;
    let latest: PointerEvent | undefined;

    const paint = () => {
      frame = 0;
      const target = latest?.target;
      if (!latest || !(target instanceof Element)) return;
      const card = target.closest<HTMLElement>(".spotlight");
      if (!card) return;
      const box = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${latest.clientX - box.left}px`);
      card.style.setProperty("--spot-y", `${latest.clientY - box.top}px`);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      latest = event;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
