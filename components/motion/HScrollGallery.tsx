"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import {
  useIsDesktop,
  usePrefersReducedMotion,
} from "@/hooks/useMediaQuery";

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

/**
 * Scroll-driven horizontal gallery — port of motion.js `hscroll`: vertical
 * scroll progress drives the track's translateX (no pinning). Desktop only;
 * mobile falls back to native horizontal scrolling.
 *
 * The custom cursor shows a green "DRAG" chip over this element. It used to be
 * telling the truth about the intent and not about the behaviour — the track
 * was driven purely by scroll position, so dragging did nothing. Pointer drag
 * now applies a user offset on top of the scroll-driven position: the ambient
 * motion is unchanged, and the affordance is honest.
 */
export function HScrollGallery({
  children,
  className,
  label = "Image gallery",
}: {
  children: ReactNode;
  className?: string;
  /** accessible name for the scrollable region on the non-desktop fallback */
  label?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const desktop = useIsDesktop();
  const enabled = desktop && !reduced;

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track || !enabled) return;

      // How far the visitor has dragged, relative to the scroll-driven
      // position. Kept as an offset rather than an absolute x so scrolling
      // keeps working while a drag is held.
      let dragOffset = 0;
      let baseX = 0;
      let maxX = 0;
      let curX = 0;

      const update = () => {
        const r = wrap.getBoundingClientRect();
        const vh = innerHeight;
        const p = clamp((vh - r.top) / (vh + r.height), 0, 1);
        maxX = Math.max(0, track.scrollWidth - wrap.clientWidth);
        baseX = -p * maxX;
        curX = clamp(baseX + dragOffset, -maxX, 0);
        gsap.set(track, { x: curX });
      };

      const st = ScrollTrigger.create({
        trigger: wrap,
        start: "top bottom",
        end: "bottom top",
        onUpdate: update,
      });
      update();

      let pointerId: number | null = null;
      let lastX = 0;

      const onDown = (e: PointerEvent) => {
        // Mouse and pen only — on touch the wrapper scrolls natively and
        // hijacking the gesture would break vertical page scrolling.
        if (e.pointerType === "touch") return;
        pointerId = e.pointerId;
        lastX = e.clientX;
        wrap.setPointerCapture(e.pointerId);
        track.style.cursor = "grabbing";
      };

      const onMove = (e: PointerEvent) => {
        if (pointerId !== e.pointerId) return;
        const dx = e.clientX - lastX;
        lastX = e.clientX;
        dragOffset = clamp(curX + dx, -maxX, 0) - baseX;
        update();
        e.preventDefault();
      };

      const onUp = (e: PointerEvent) => {
        if (pointerId !== e.pointerId) return;
        pointerId = null;
        if (wrap.hasPointerCapture(e.pointerId))
          wrap.releasePointerCapture(e.pointerId);
        track.style.cursor = "";
      };

      wrap.addEventListener("pointerdown", onDown);
      wrap.addEventListener("pointermove", onMove);
      wrap.addEventListener("pointerup", onUp);
      wrap.addEventListener("pointercancel", onUp);
      // Native image dragging would otherwise take over mid-gesture.
      const onDragStart = (e: Event) => e.preventDefault();
      wrap.addEventListener("dragstart", onDragStart);

      return () => {
        st.kill();
        wrap.removeEventListener("pointerdown", onDown);
        wrap.removeEventListener("pointermove", onMove);
        wrap.removeEventListener("pointerup", onUp);
        wrap.removeEventListener("pointercancel", onUp);
        wrap.removeEventListener("dragstart", onDragStart);
      };
    },
    { dependencies: [enabled] }
  );

  return (
    <div
      ref={wrapRef}
      data-cursor="drag"
      className={className}
      /* On the fallback path this is a real scroll container, so it has to be
         reachable and named — a keyboard user otherwise cannot reach the
         images at all. On desktop overflow is hidden and the scroll-driven
         motion reveals everything, so a focus stop there would be noise. */
      {...(enabled
        ? {}
        : { role: "region", "aria-label": label, tabIndex: 0 })}
      style={{
        overflow: enabled ? "hidden" : "auto hidden",
        cursor: enabled ? "grab" : undefined,
        touchAction: "pan-y",
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: 14,
          width: "max-content",
          willChange: "transform",
          userSelect: "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}
