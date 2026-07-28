"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

type KaraokeProps = {
  text: string;
  base?: string;
  hi?: string;
  className?: string;
};

/**
 * Word-by-word scroll highlight — port of motion.js `karaoke`.
 * Words are split into spans at render (SSR-safe); scroll position drives
 * how many spans carry the highlight color.
 */
export function Karaoke({
  text,
  base = "var(--color-karaoke-base)",
  hi = "var(--color-navy)",
  className,
}: KaraokeProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = usePrefersReducedMotion();
  const words = useMemo(() => text.trim().split(/\s+/), [text]);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (reduced) {
      setLit(words.length);
      return;
    }
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.82 - r.top) / (vh * 0.55)));
      setLit(Math.round(p * words.length));
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, [words.length, reduced]);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            color: i < lit || reduced ? hi : base,
            transition: "color .35s",
          }}
        >
          {w}{" "}
        </span>
      ))}
    </p>
  );
}
