"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import {
  useIsDesktop,
  usePrefersReducedMotion,
} from "@/hooks/useMediaQuery";

type ParallaxProps = {
  /** parallax factor (motion.js data-plx, hero uses 0.16) */
  k?: number;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

/**
 * Hero image parallax — port of motion.js `initParallax`: layer translates at
 * k× the parent's viewport-center offset with a constant scale(1.14).
 * Desktop only; off under reduced motion.
 */
export function Parallax({ k = 0.16, children, className, style }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const desktop = useIsDesktop();
  const enabled = desktop && !reduced;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !enabled) return;
      const host = el.parentElement;
      if (!host) return;
      const update = () => {
        const r = host.getBoundingClientRect();
        const off = (r.top + r.height / 2 - innerHeight / 2) * -k;
        gsap.set(el, { y: off, scale: 1.14 });
      };
      const st = ScrollTrigger.create({
        trigger: host,
        start: "top bottom",
        end: "bottom top",
        onUpdate: update,
      });
      update();
      return () => st.kill();
    },
    { dependencies: [enabled, k] }
  );

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: enabled ? "transform" : undefined, ...style }}
    >
      {children}
    </div>
  );
}
