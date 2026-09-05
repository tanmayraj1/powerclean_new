"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useScrollLock } from "./LenisProvider";

type Stage = "counting" | "rings" | "exit" | "done";

/**
 * Once-per-session intro — port of motion.js `intro()`: green curtain, white
 * logo (76px), IBM Plex Mono counter 000→100 labeled "CONCENTRATION READOUT ·
 * % ACTIVE", 3 rings expand scale(0→9), panel wipes up. ~2s total.
 * Gated with sessionStorage key `pc-intro`.
 */
export function IntroCurtain() {
  const reduced = usePrefersReducedMotion();
  const [stage, setStage] = useState<Stage | null>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    let seen: string | null = null;
    try {
      seen = sessionStorage.getItem("pc-intro");
    } catch {}
    if (seen || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage("done");
      return;
    }
    try {
      sessionStorage.setItem("pc-intro", "1");
    } catch {}
    setStage("counting");
  }, []);

  const running = stage !== null && stage !== "done" && !reduced;

  // lock the page while the curtain is up (shared, ref-counted)
  useScrollLock(running);

  // 000 → 100 counter (1050ms, ease-out cubic)
  useEffect(() => {
    if (stage !== "counting") return;
    const d = 1050;
    const s = performance.now();
    let raf = 0;
    const frame = (n: number) => {
      const p = Math.min(1, (n - s) / d);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(frame);
      else setStage("rings");
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [stage]);

  // rings expand while the 620ms hold runs, then the panel wipes up
  useEffect(() => {
    if (stage !== "rings") return;
    const t = setTimeout(() => setStage("exit"), 620);
    return () => clearTimeout(t);
  }, [stage]);

  // Hard deadline on the whole sequence.
  //
  // The counter and the wipe are both rAF-driven, and rAF stops in a
  // backgrounded tab. Anyone who opened the site and glanced at another tab
  // during the ~2.4s intro could come back to a curtain that never finished —
  // holding the scroll lock, with no way out but a reload. setTimeout keeps
  // running when rAF does not, so this always fires.
  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => setStage("done"), 4000);
    return () => clearTimeout(t);
  }, [running]);

  if (stage === null || stage === "done" || reduced) return null;

  return (
    <AnimatePresence>
      {stage !== ("done" as Stage) && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center gap-[22px] bg-green"
          animate={stage === "exit" ? { y: "-101%" } : { y: 0 }}
          transition={{ duration: 0.75, ease: EASE }}
          onAnimationComplete={() => {
            if (stage === "exit") setStage("done");
          }}
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute h-[120px] w-[120px] rounded-full border-[1.5px] border-white/55"
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  stage === "rings" || stage === "exit"
                    ? { scale: 9, opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  scale: { duration: 1, ease: EASE, delay: 0.12 * i },
                  opacity: { duration: 0.9, delay: 0.12 * i },
                }}
              />
            ))}
          </div>
          <Image
            src="/logo.png"
            alt="Power Clean — industrial cleaning chemicals by Roovel Solutions"
            width={253}
            height={76}
            className="h-[76px] w-auto brightness-0 invert"
            loading="eager"
          />
          <div className="font-mono text-[64px] font-semibold tracking-[-0.02em] text-white">
            {String(count).padStart(3, "0")}
          </div>
          <div className="font-mono text-[11px] font-medium tracking-[0.3em] text-white/80">
            CONCENTRATION READOUT · % ACTIVE
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
