"use client";

import dynamic from "next/dynamic";

/**
 * Lazy-loaded custom cursor — keeps the GSAP lerp-follow code out of the
 * initial JS bundle. Desktop-only anyway (pointer:fine media query), so this
 * is a pure win for mobile PageSpeed.
 */
const Lazy = dynamic(
  () =>
    import("@/components/providers/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false },
);

export function LazyCustomCursor() {
  return <Lazy />;
}
