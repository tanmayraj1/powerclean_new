"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import {
  useIsDesktop,
  usePrefersReducedMotion,
} from "@/hooks/useMediaQuery";

/**
 * Scroll-linked product-image inspect — port of motion.js `inspect`:
 * rotate ±3° and scale .95 → 1.03 with scroll progress.
 */
export function InspectImage({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const desktop = useIsDesktop();
  const enabled = desktop && !reduced;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !enabled) return;
      const update = () => {
        const r = el.getBoundingClientRect();
        const vh = innerHeight;
        const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
        gsap.set(el, { rotate: (p - 0.5) * 6, scale: 0.95 + p * 0.08 });
      };
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        onUpdate: update,
      });
      update();
      return () => st.kill();
    },
    { dependencies: [enabled] }
  );

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
