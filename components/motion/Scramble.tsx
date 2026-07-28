"use client";

import { useEffect, useRef, useState } from "react";
import { SCRAMBLE_GLYPHS } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

/**
 * Eyebrow decode-through-glyphs (~16 frames) — port of motion.js `scramble`.
 * SSRs the real text; scrambles post-mount only. Screen readers get the real
 * text via an sr-only twin; the animated glyphs stay aria-hidden.
 */
export function Scramble({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    if (reduced || started.current) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (en) => {
        if (!en.some((e) => e.isIntersecting) || started.current) return;
        started.current = true;
        io.disconnect();
        let frame = 0;
        const total = 16;
        let timer: ReturnType<typeof setTimeout>;
        const tick = () => {
          frame++;
          const lock = Math.floor((frame / total) * text.length);
          setDisplay(
            text
              .split("")
              .map((c, i) =>
                i < lock || c === " "
                  ? c
                  : SCRAMBLE_GLYPHS[
                      Math.floor(Math.random() * SCRAMBLE_GLYPHS.length)
                    ]
              )
              .join("")
          );
          if (frame < total) timer = setTimeout(tick, 34);
          else setDisplay(text);
        };
        tick();
        return () => clearTimeout(timer);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text, reduced]);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
