"use client";

import { useEffect, useRef } from "react";
import {
  useIsDesktop,
  usePointerFine,
  usePrefersReducedMotion,
} from "@/hooks/useMediaQuery";

/**
 * Custom ring cursor — port of motion.js `cursor()`: 30px ring lerp-follows
 * the pointer, scales + green-tints over interactive elements, and becomes a
 * green "DRAG" chip over the horizontal gallery. pointer:fine + desktop only.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const fine = usePointerFine();
  const desktop = useIsDesktop();
  const enabled = fine && desktop && !reduced;

  useEffect(() => {
    if (!enabled) return;
    const c = ref.current;
    if (!c) return;
    let mx = -100,
      my = -100,
      x = -100,
      y = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      c.style.opacity = "1";
      const t = e.target as Element | null;
      const drag = t?.closest?.('[data-cursor="drag"]');
      const act = t?.closest?.(
        'a, button, [data-tilt], input, select, textarea, [role="button"]'
      );
      if (drag) {
        c.style.width = "52px";
        c.style.height = "52px";
        c.style.background = "rgba(0,166,81,.9)";
        c.style.borderColor = "#00A651";
        c.style.color = "#fff";
        c.textContent = "DRAG";
      } else if (act) {
        c.style.width = "46px";
        c.style.height = "46px";
        c.style.background = "rgba(0,166,81,.14)";
        c.style.borderColor = "#00A651";
        c.style.color = "#292F6E";
        c.textContent = "";
      } else {
        c.style.width = "30px";
        c.style.height = "30px";
        c.style.background = "transparent";
        c.style.borderColor = "#292F6E";
        c.textContent = "";
      }
    };
    const onLeave = () => {
      c.style.opacity = "0";
    };
    const step = () => {
      x += (mx - x) * 0.2;
      y += (my - y) * 0.2;
      c.style.left = `${x}px`;
      c.style.top = `${y}px`;
      raf = requestAnimationFrame(step);
    };
    document.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(step);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[99990] flex h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-navy font-mono text-[8px] font-semibold tracking-[0.08em] text-navy opacity-0"
      style={{
        transition:
          "width .25s, height .25s, background .25s, border-color .25s, opacity .3s",
      }}
    />
  );
}
