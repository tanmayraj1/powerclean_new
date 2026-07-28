"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import {
  useIsDesktop,
  usePrefersReducedMotion,
} from "@/hooks/useMediaQuery";

/**
 * Scroll-driven horizontal gallery — port of motion.js `hscroll`: vertical
 * scroll progress drives the track's translateX (no pinning). Desktop only;
 * mobile falls back to native horizontal scrolling.
 */
export function HScrollGallery({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const desktop = useIsDesktop();
  const enabled = desktop && !reduced;

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track || !enabled) return;
      const update = () => {
        const r = wrap.getBoundingClientRect();
        const vh = innerHeight;
        const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
        const max = Math.max(0, track.scrollWidth - wrap.clientWidth);
        gsap.set(track, { x: -p * max });
      };
      const st = ScrollTrigger.create({
        trigger: wrap,
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
    <div
      ref={wrapRef}
      data-cursor="drag"
      className={className}
      style={{ overflow: enabled ? "hidden" : "auto hidden" }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: 14,
          width: "max-content",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
