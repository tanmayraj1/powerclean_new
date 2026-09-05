"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/lib/motion";
import { ScrollTrigger } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useLenis } from "./LenisProvider";

type Phase = "idle" | "covering" | "revealing";

const TransitionContext = createContext<{
  navigateTo: (href: string) => void;
}>({ navigateTo: () => {} });

export function usePageTransition() {
  return useContext(TransitionContext);
}

/**
 * Route choreography — port of motion.js `transitions()` + `entryWipe()`:
 * green panel slides up over the old page, the new page reveals through a
 * collapsing circle (ripple) wipe. In-memory state machine replaces the
 * prototype's sessionStorage handshake.
 */
export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const targetRef = useRef<string | null>(null);
  const coveredPathRef = useRef<string | null>(null);

  const navigateTo = useCallback(
    (href: string) => {
      if (reduced) {
        router.push(href);
        return;
      }
      if (phase !== "idle") return;
      targetRef.current = href;
      coveredPathRef.current = pathname;
      setPhase("covering");
    },
    [reduced, phase, pathname, router]
  );

  // When the route actually changes underneath the cover, start the reveal.
  useEffect(() => {
    if (phase === "covering" && coveredPathRef.current !== null && pathname !== coveredPathRef.current) {
      lenis?.current?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
      setPhase("revealing");
      // Refresh after the new page has painted. Measuring synchronously here
      // reads the outgoing DOM, which left every scroll-driven effect on the
      // incoming page working from stale bounds.
      requestAnimationFrame(() => requestAnimationFrame(() => ScrollTrigger.refresh()));
    }
  }, [pathname, phase, lenis]);

  // Safety net for BOTH non-idle phases.
  //
  // `navigateTo` refuses to start while `phase !== "idle"`, and each phase
  // leaves it only from an `onAnimationComplete`. A backgrounded tab throttles
  // rAF, so that callback can simply never arrive — which stranded the overlay
  // on screen and killed every link on the page. Each phase now has a deadline
  // comfortably past its own animation (0.5s cover, 0.8s reveal).
  //
  // The covering deadline also catches a push that resolves to the pathname we
  // started from (an internal link that hits a redirect), where the reveal
  // above can never fire.
  useEffect(() => {
    if (phase === "idle") return;
    const t = setTimeout(
      () => {
        setPhase("idle");
        targetRef.current = null;
        coveredPathRef.current = null;
      },
      phase === "covering" ? 4000 : 2000
    );
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}
      <AnimatePresence>
        {phase === "covering" && (
          <motion.div
            key="cover"
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-green"
            initial={{ y: "101%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            onAnimationComplete={() => {
              const href = targetRef.current;
              if (href) router.push(href);
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <Image
                src="/logo.png"
                alt=""
                width={240}
                height={72}
                className="h-[72px] w-auto brightness-0 invert"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        )}
        {phase === "revealing" && (
          <motion.div
            key="reveal"
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-green"
            initial={{ clipPath: "circle(130% at 50% 50%)" }}
            animate={{ clipPath: "circle(0% at 50% 50%)" }}
            transition={{ duration: 0.8, ease: EASE }}
            onAnimationComplete={() => {
              setPhase("idle");
              targetRef.current = null;
              coveredPathRef.current = null;
            }}
          >
            <Image
              src="/logo.png"
              alt=""
              width={240}
              height={72}
              className="h-[72px] w-auto brightness-0 invert"
              loading="eager"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
