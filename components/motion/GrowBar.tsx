"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { EASE_CSS } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useRevealFired } from "./Reveal";

type GrowBarProps = {
  axis?: "x" | "y";
  delay?: number; // seconds
  duration?: number; // seconds
  className?: string;
  style?: CSSProperties;
};

/**
 * Bar/gauge grow (scaleX/scaleY 0 → 1) — port of motion.js `data-grow`.
 * Fires with its parent Reveal.
 */
export function GrowBar({
  axis = "x",
  delay = 0.3,
  duration = 1.4,
  className,
  style,
}: GrowBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const revealFired = useRevealFired();
  const [selfFired, setSelfFired] = useState(false);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) setArmed(true);
  }, []);

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
  const hidden = armed && !fired && !reduced;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: hidden ? (axis === "x" ? "scaleX(0)" : "scaleY(0)") : "none",
        transformOrigin: axis === "x" ? "left" : "top",
        opacity: hidden ? 0 : 1,
        transition: armed
          ? `transform ${duration}s ${EASE_CSS} ${delay}s, opacity .4s`
          : undefined,
      }}
    />
  );
}
