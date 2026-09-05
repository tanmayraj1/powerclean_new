"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useScrollLock } from "@/components/providers/LenisProvider";
import { siteConfig } from "@/lib/site-config";
import { Arrow } from "@/components/ui/Arrow";
import { TransitionLink } from "./TransitionLink";

export type NavLink = {
  key: string;
  label: string;
  href: string;
  /** desktop shows these in a dropdown; on mobile they nest under the link */
  menu?: { label: string; href: string; hint: string }[];
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  active: string;
};

/**
 * Full-screen mobile menu.
 *
 * Rendered as a SIBLING of <header> on purpose: the header carries
 * `backdrop-filter` when scrolled, which makes it a containing block for
 * `position: fixed` children — nesting the panel there collapsed it to the
 * height of the header bar.
 *
 * Motion: the panel wipes down via clip-path, links stagger in behind it, and
 * everything degrades to a plain fade under prefers-reduced-motion.
 */
const CONTACT_LINKS = [
  { label: "Questionnaire", href: "/questionnaire" },
  { label: "Free consultation", href: "/get-consultation" },
  { label: "Contact us", href: "/contact" },
];

export function MobileMenu({ open, onClose, links, active }: MobileMenuProps) {
  const reduced = usePrefersReducedMotion();

  // Esc closes the menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // lock the page behind the panel (shared, ref-counted)
  useScrollLock(open);

  const panel = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { clipPath: "inset(0 0 100% 0)" },
        animate: { clipPath: "inset(0 0 0% 0)" },
        exit: { clipPath: "inset(0 0 100% 0)" },
      };

  const list = {
    hidden: {},
    show: { transition: { staggerChildren: 0.055, delayChildren: 0.14 } },
    out: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  };
  const item = reduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1 }, out: { opacity: 0 } }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
        out: { opacity: 0, y: 10, transition: { duration: 0.2 } },
      };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          id="mobile-menu"
          /* Lenis preventDefault()s every wheel/touchmove while stopped, which
             froze this panel too — it is taller than the viewport and has to
             scroll. `data-lenis-prevent` makes Lenis skip gestures that start
             inside it; `overscroll-contain` stops the page chaining behind. */
          data-lenis-prevent
          className="fixed inset-0 z-[995] flex flex-col overflow-y-auto overscroll-contain bg-[linear-gradient(160deg,#23273f,#292F6E_60%,#1d1f23)] px-7 pb-10 pt-28 nav:hidden"
          {...panel}
          transition={{ duration: 0.55, ease: EASE }}
        >
          {/* ambient ripple rings, same language as the hero backdrop */}
          <svg
            viewBox="0 0 600 600"
            className="pointer-events-none absolute -right-[30%] top-[8%] h-[520px] w-[520px] opacity-[0.13]"
            aria-hidden="true"
          >
            {[70, 130, 190, 250].map((r) => (
              <circle
                key={r}
                cx="300"
                cy="300"
                r={r}
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.4"
              />
            ))}
          </svg>

          <motion.nav
            className="relative flex flex-col"
            variants={list}
            initial="hidden"
            animate="show"
            exit="out"
          >
            {links.map((l) => (
              <motion.div key={l.key} variants={item}>
                <TransitionLink
                  href={l.href}
                  onClick={onClose}
                  aria-current={active === l.key ? "page" : undefined}
                  className="group flex items-center justify-between border-b border-white/12 py-4 text-[26px] font-semibold text-white no-underline"
                >
                  <span className="flex items-center gap-3">
                    {active === l.key && (
                      <span className="h-2 w-2 shrink-0 rounded-full bg-green" />
                    )}
                    {l.label}
                  </span>
                  <span className="text-white/45">
                    <Arrow />
                  </span>
                </TransitionLink>
                {l.menu && (
                  <div className="flex flex-col border-b border-white/12">
                    {l.menu.slice(1).map((m) => (
                      <TransitionLink
                        key={m.href}
                        href={m.href}
                        onClick={onClose}
                        className="py-2.5 pl-4 text-[15px] font-medium text-white/70 no-underline transition-colors hover:text-white"
                      >
                        {m.label}
                      </TransitionLink>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div variants={item} className="mt-8 flex flex-col gap-2.5">
              <TransitionLink
                href="/request-cleanup"
                onClick={onClose}
                className="block rounded-full bg-green-cta px-7 py-[15px] text-center text-[17px] font-semibold text-white no-underline shadow-cta"
              >
                Request a Cleanup
              </TransitionLink>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 pt-1">
                {CONTACT_LINKS.map((c) => (
                  <TransitionLink
                    key={c.href}
                    href={c.href}
                    onClick={onClose}
                    className="text-[14px] font-medium text-white/70 no-underline transition-colors hover:text-white"
                  >
                    {c.label}
                  </TransitionLink>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-1.5 text-[13px] text-white/60"
            >
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-white/80 no-underline"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phones[0].replace(/\s/g, "")}`}
                className="text-white/80 no-underline"
              >
                {siteConfig.contact.phones[0]}
              </a>
              <span className="mt-1 leading-[1.55]">
                {siteConfig.contact.addressShort}
              </span>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
