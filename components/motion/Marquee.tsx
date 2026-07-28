"use client";

import {
  Children,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

type MarqueeProps = {
  children: ReactNode;
  /** base px per frame (motion.js data-speed) */
  speed?: number;
  /** degrees (motion.js data-skew) */
  skew?: number;
  /** react to scroll velocity + direction (skewed statement band) */
  reactive?: boolean;
  className?: string;
  style?: CSSProperties;
  trackClassName?: string;
  trackStyle?: CSSProperties;
};

/**
 * Infinite marquee — port of motion.js `marquee`. Children are duplicated ×4
 * at render (SSR-safe). Speed spikes with scroll velocity (capped +7, decay
 * ×.9) and direction follows scroll direction when `reactive`.
 */
export function Marquee({
  children,
  speed = 1.1,
  skew = 0,
  reactive = true,
  className,
  style,
  trackClassName,
  trackStyle,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const items = Children.toArray(children);

  useEffect(() => {
    if (reduced) return;
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let dir = -1;
    let vel = 0;
    let lastY = scrollY;
    let raf = 0;
    let half = track.scrollWidth / 2;
    const remeasure = () => {
      half = track.scrollWidth / 2;
    };
    document.fonts?.ready.then(remeasure);
    addEventListener("resize", remeasure);
    const onScroll = () => {
      if (!reactive) return;
      const y = scrollY;
      vel = y - lastY;
      lastY = y;
      if (vel > 0) dir = -1;
      else if (vel < 0) dir = 1;
    };
    addEventListener("scroll", onScroll, { passive: true });
    const step = () => {
      const s = speed + Math.min(7, Math.abs(vel) * 0.12);
      vel *= 0.9;
      pos += dir * s;
      if (pos <= -half) pos += half;
      if (pos > 0) pos -= half;
      track.style.transform = `skewY(${skew}deg) translate3d(${pos}px,0,0)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", remeasure);
    };
  }, [reduced, speed, skew, reactive]);

  return (
    <div className={className} style={{ overflow: "hidden", ...style }}>
      <div
        ref={trackRef}
        className={trackClassName}
        style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          width: "max-content",
          willChange: "transform",
          transform: skew ? `skewY(${skew}deg)` : undefined,
          ...trackStyle,
        }}
      >
        {[0, 1, 2, 3].map((copy) =>
          items.map((item, i) => (
            <span
              key={`${copy}-${i}`}
              aria-hidden={copy > 0 || undefined}
              style={{ display: "contents" }}
            >
              {item}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
