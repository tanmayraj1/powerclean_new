"use client";

import { useState, type ReactNode } from "react";
import { EASE_CSS } from "@/lib/motion";

export function useAccordion(initial = 0) {
  const [open, setOpen] = useState(initial);
  const toggle = (i: number) => setOpen((cur) => (cur === i ? -1 : i));
  return { open, toggle };
}

/** Accordion body: max-height + opacity, .45s site easing (design-exact). */
export function AccordionBody({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        maxHeight: open ? 220 : 0,
        opacity: open ? 1 : 0,
        overflow: "hidden",
        transition: `max-height .45s ${EASE_CSS}, opacity .35s`,
      }}
    >
      {children}
    </div>
  );
}
