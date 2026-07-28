"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { EASE_CSS } from "@/lib/motion";
import {
  usePrefersReducedMotion,
  usePointerFine,
} from "@/hooks/useMediaQuery";

/**
 * Magnetic hover (offset ×.18/.22, spring release) — port of motion.js `magnetic`.
 * Wraps a single interactive child; the wrapper carries the transform.
 */
export function Magnetic({
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
  const fine = usePointerFine();
  const enabled = fine && !reduced;

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: "inline-block", ...style }}
      onMouseMove={
        enabled
          ? (e) => {
              const el = ref.current;
              if (!el) return;
              const r = el.getBoundingClientRect();
              const x = e.clientX - r.left - r.width / 2;
              const y = e.clientY - r.top - r.height / 2;
              el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
            }
          : undefined
      }
      onMouseLeave={
        enabled
          ? () => {
              const el = ref.current;
              if (!el) return;
              el.style.transition = `transform .45s ${EASE_CSS}`;
              el.style.transform = "";
              setTimeout(() => {
                el.style.transition = "";
              }, 460);
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
