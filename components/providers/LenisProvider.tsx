"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

const LenisContext = createContext<RefObject<Lenis | null> | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

/* ------------------------------------------------------------------ *
 * Shared scroll lock
 *
 * The intro curtain and the mobile menu both need to freeze the page,
 * and each used to write `document.body.style.overflow` on its own.
 * Whenever their lock/unlock pairs interleaved, the second unlock
 * restored the value the first one had captured — `"hidden"` — and the
 * page stayed frozen with no overlay on screen to explain why.
 *
 * One module-level counter, one captured value, one owner of
 * `lenis.stop()`. Lives here because the lock has to reach the Lenis
 * instance, and this module already owns it.
 * ------------------------------------------------------------------ */
let lockCount = 0;
let restoreOverflow = "";
let activeLenis: Lenis | null = null;

/** Freeze page scroll while `active`, releasing only when every locker has. */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    if (lockCount++ === 0) {
      restoreOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      activeLenis?.stop();
    }
    return () => {
      if (--lockCount === 0) {
        document.body.style.overflow = restoreOverflow;
        restoreOverflow = "";
        activeLenis?.start();
      }
    };
  }, [active]);
}

/**
 * Smooth scroll via Lenis, driven from gsap's ticker and synced with
 * ScrollTrigger (required to keep scrubbed effects jitter-free).
 */
export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    // `allowNestedScroll` lets Lenis hand a gesture back to whatever
    // scrollable element is under the pointer instead of swallowing it.
    // Without it Lenis preventDefault()s every wheel and touchmove, so the
    // spec tables, matrices and scrollable panels across the site could not
    // be scrolled at all — the page moved instead.
    const lenis = new Lenis({ allowNestedScroll: true });
    lenisRef.current = lenis;
    activeLenis = lenis;
    // a lock may already be held (intro curtain mounts before this effect)
    if (lockCount > 0) lenis.stop();
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
      activeLenis = null;
    };
  }, [reduced]);

  // Reduced-motion users get native scrolling, so a lock taken while Lenis
  // is absent must still release the body style — handled by useScrollLock.

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}
