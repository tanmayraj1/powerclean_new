"use client";

import { useCallback, useSyncExternalStore } from "react";

/** SSR-safe media query — returns `false` on the server. */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (cb: () => void) => {
      const mql = matchMedia(query);
      mql.addEventListener("change", cb);
      return () => mql.removeEventListener("change", cb);
    },
    [query]
  );
  return useSyncExternalStore(
    subscribe,
    () => matchMedia(query).matches,
    () => false
  );
}

/** Desktop = nav breakpoint and up. Tilt/cursor/parallax/pinning gate on this. */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 940px)");
}

export function usePointerFine(): boolean {
  return useMediaQuery("(pointer: fine)");
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
