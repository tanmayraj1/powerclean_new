"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { EASE_CSS } from "@/lib/motion";
import {
  useIsDesktop,
  usePointerFine,
  usePrefersReducedMotion,
} from "@/hooks/useMediaQuery";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onPointerEnter?: () => void;
};

/**
 * Pointer tilt (±5°/±7°, perspective 900px, translateY(-5px)) — port of
 * motion.js `tilt`. Desktop + pointer:fine only; off under reduced motion.
 * Adds `group` so ↗ arrows nudge when hovering the whole card.
 */
export function TiltCard({
  children,
  className,
  style,
  onPointerEnter,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const fine = usePointerFine();
  const desktop = useIsDesktop();
  const enabled = fine && desktop && !reduced;

  return (
    <div
      ref={ref}
      className={`group ${className ?? ""}`}
      style={style}
      onPointerEnter={onPointerEnter}
      onPointerMove={
        enabled
          ? (e) => {
              const el = ref.current;
              if (!el) return;
              const r = el.getBoundingClientRect();
              const rx = -((e.clientY - r.top) / r.height - 0.5) * 5;
              const ry = ((e.clientX - r.left) / r.width - 0.5) * 7;
              el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-5px)`;
            }
          : undefined
      }
      onPointerLeave={
        enabled
          ? () => {
              const el = ref.current;
              if (!el) return;
              el.style.transition = `transform .5s ${EASE_CSS}`;
              el.style.transform = "";
              setTimeout(() => {
                el.style.transition = "";
              }, 520);
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
