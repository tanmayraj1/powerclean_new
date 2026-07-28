"use client";

import { useEffect, useRef, useState, type SVGProps } from "react";
import { DRAW_DURATION, EASE_CSS } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useRevealFired } from "./Reveal";

/**
 * SVG stroke draw-in (1.8s) — port of motion.js `drawPath`.
 * Use inside an inline <svg>; fires with its parent Reveal.
 */
export function DrawPath(props: SVGProps<SVGPathElement>) {
  const ref = useRef<SVGPathElement>(null);
  const reduced = usePrefersReducedMotion();
  const revealFired = useRevealFired();
  const [selfFired, setSelfFired] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    if (revealFired !== null || selfFired) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (en) => {
        if (en.some((e) => e.isIntersecting)) {
          setSelfFired(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [revealFired, selfFired]);

  const fired = revealFired === null ? selfFired : revealFired;

  useEffect(() => {
    const p = ref.current;
    if (!p || done.current) return;
    if (reduced) return;
    try {
      const l = p.getTotalLength();
      if (!fired) {
        p.style.strokeDasharray = String(l);
        p.style.strokeDashoffset = String(l);
        return;
      }
      done.current = true;
      p.style.transition = `stroke-dashoffset ${DRAW_DURATION}s ${EASE_CSS} .15s`;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          p.style.strokeDashoffset = "0";
        })
      );
    } catch {
      /* non-rendered path */
    }
  }, [fired, reduced]);

  return <path ref={ref} fill="none" {...props} />;
}
