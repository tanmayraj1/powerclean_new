"use client";

import { useEffect, useRef, useState } from "react";
import { COUNT_DURATION } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useRevealFired } from "./Reveal";

type CountUpProps = {
  to: number;
  dec?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/**
 * Ease-out cubic count-up (1.5s) — port of motion.js `countUp`.
 * SSRs the final value; fires with its parent Reveal (or self-observes at 50%).
 */
export function CountUp({
  to,
  dec = 0,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();
  const revealFired = useRevealFired();
  const [selfFired, setSelfFired] = useState(false);
  const [display, setDisplay] = useState<string | null>(null);
  const done = useRef(false);

  // Self-observe only when not nested inside a Reveal.
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
    if (!fired || done.current) return;
    done.current = true;
    if (reduced) return;
    const start = performance.now();
    let raf = 0;
    const frame = (now: number) => {
      const p = Math.min(1, (now - start) / COUNT_DURATION);
      const e = 1 - Math.pow(1 - p, 3);
      setDisplay(prefix + (to * e).toFixed(dec) + suffix);
      if (p < 1) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [fired, reduced, to, dec, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {display ?? prefix + to.toFixed(dec) + suffix}
    </span>
  );
}
