"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { EASE_CSS, REVEAL_OFFSETS } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

/**
 * Nested counters / chart draws / bar grows fire when their parent Reveal
 * shows (mirrors motion.js `fire()`), never on their own observers.
 * `null` context = not inside a Reveal → self-observe.
 */
export const RevealContext = createContext<boolean | null>(null);

export function useRevealFired(): boolean | null {
  return useContext(RevealContext);
}

type RevealProps = {
  dir?: "up" | "down" | "left" | "right" | "scale" | "clip";
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  as?: "div" | "section" | "p" | "h2" | "span";
  id?: string;
};

/**
 * Directional scroll reveal — exact port of motion.js `initMotion` reveals:
 * hidden state applied only after hydration (no-JS users always see content),
 * IntersectionObserver at 12% / -6% bottom margin, .9s site easing,
 * clip variant animates `inset(14% round 32px → 0)` over 1.15s.
 */
export function Reveal({
  dir = "up",
  delay = 0,
  className,
  style,
  children,
  as: Tag = "div",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const [armed, setArmed] = useState(false); // hidden state active
  const [shown, setShown] = useState(false);

  // Arm the hidden state before first paint post-hydration.
  useLayoutEffect(() => {
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setArmed(true);
    } else {
      setShown(true);
    }
  }, []);

  useEffect(() => {
    if (!armed || shown) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [armed, shown]);

  const hidden = armed && !shown && !reduced;

  const hiddenStyle: CSSProperties = {};
  if (dir === "clip") {
    hiddenStyle.clipPath = hidden
      ? "inset(14% 14% 14% 14% round 32px)"
      : "inset(0% 0% 0% 0% round 0px)";
    hiddenStyle.opacity = hidden ? 0 : 1;
  } else {
    const o = REVEAL_OFFSETS[dir] ?? { y: 42 };
    hiddenStyle.opacity = hidden ? 0 : 1;
    hiddenStyle.transform = hidden
      ? o.scale
        ? `scale(${o.scale})`
        : `translate(${o.x ?? 0}px, ${o.y ?? 0}px)`
      : "none";
  }

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      id={id}
      className={className}
      style={{
        ...style,
        ...hiddenStyle,
        transition: armed
          ? `opacity .9s ${EASE_CSS}, transform .9s ${EASE_CSS}, clip-path 1.15s ${EASE_CSS}`
          : undefined,
        transitionDelay: armed ? `${delay}ms` : undefined,
      }}
    >
      <RevealContext.Provider value={shown || reduced}>
        {children}
      </RevealContext.Provider>
    </Tag>
  );
}
