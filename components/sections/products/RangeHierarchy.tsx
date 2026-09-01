"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/lib/motion";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { Arrow } from "@/components/ui/Arrow";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import {
  categories,
  productsBySeries,
  seriesByCategory,
  type CategoryKey,
} from "@/lib/products";

/**
 * The Range at a Glance — the whole catalogue as one navigable hierarchy:
 * Category → Series → Product. Each category band carries its own accent
 * colour; series rails expand to product chips that link to detail pages.
 */
export function RangeHierarchy() {
  const reduced = usePrefersReducedMotion();
  // Aqueous holds 30 of the 41 products, so leaving a band open by default
  // pushed roughly 1,600px of desktop height (and three phone screens) onto
  // the page before the reader had chosen anything — on a page that already
  // shows the same 41 products in the chart above, the card grid below and
  // the selection matrix after it. Every band now starts closed: four
  // labelled bars read as an index and invite a tap. Nothing is removed;
  // each family is one tap away, and the card grid below keeps all 41 links
  // in the DOM for crawlers regardless of what is open here.
  const [openCat, setOpenCat] = useState<CategoryKey | null>(null);
  // set once the reader (or a deep link) chooses a band, after which their
  // choice wins over the default
  const [chosen, setChosen] = useState(false);

  const effectiveOpen: CategoryKey | null = chosen ? openCat : null;

  // The RangeMap chart above (same page) dispatches pc-open-category; QR
  // landing links arrive cross-page as /products#range-<key>. Both open
  // the right family band and bring it into view.
  useEffect(() => {
    const isKey = (k: string): k is CategoryKey =>
      categories.some((c) => c.key === k);
    const bringIntoView = (key: string, delay: number) => {
      setTimeout(() => {
        const el = document.getElementById(`range-${key}`);
        if (!el) return;
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 96,
          behavior: "smooth",
        });
      }, delay);
    };
    const fromHash = () => {
      const key = window.location.hash.replace("#range-", "");
      if (window.location.hash.startsWith("#range-") && isKey(key)) {
        setChosen(true);
        setOpenCat(key);
        // wait out the page-transition reveal before scrolling
        bringIntoView(key, 750);
      }
    };
    const onOpen = (e: Event) => {
      const key = (e as CustomEvent<string>).detail;
      if (!isKey(key)) return;
      setChosen(true);
      setOpenCat(key);
      // wait for the previously-open band to finish collapsing (0.45s), or
      // the target's position is measured too early and we overshoot
      bringIntoView(key, 520);
    };
    fromHash();
    window.addEventListener("pc-open-category", onOpen);
    window.addEventListener("hashchange", fromHash);
    return () => {
      window.removeEventListener("pc-open-category", onOpen);
      window.removeEventListener("hashchange", fromHash);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {categories.map((cat) => {
        const catSeries = seriesByCategory(cat.key);
        const count = catSeries.reduce(
          (n, s) => n + productsBySeries(s.key).length,
          0
        );
        const open = effectiveOpen === cat.key;
        return (
          <div
            key={cat.key}
            id={`range-${cat.key}`}
            className="scroll-mt-24 overflow-hidden rounded-card bg-white ring-1 ring-inset ring-line-2 transition-shadow duration-300"
            style={open ? { boxShadow: `0 18px 44px -28px ${cat.accent}66` } : undefined}
          >
            {/* Category band */}
            <button
              onClick={() => {
                setChosen(true);
                setOpenCat(open ? null : cat.key);
              }}
              aria-expanded={open}
              className="flex w-full cursor-pointer items-center gap-4 border-none bg-transparent px-5 py-[18px] text-left font-sans sm:px-6"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-[15px] font-bold text-white"
                style={{ background: cat.accent }}
              >
                {String(count).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[16.5px] font-semibold leading-tight text-navy">
                  {cat.label}
                </span>
                <span className="mt-0.5 block text-[12.5px] leading-[1.5] text-muted">
                  {catSeries.length}{" "}
                  {catSeries.length === 1 ? "series" : "series"} ·{" "}
                  {count} products
                </span>
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 text-lg text-navy transition-transform duration-[350ms]"
                style={{ transform: open ? "rotate(180deg)" : "none" }}
              >
                ⌄
              </span>
            </button>

            {/* Series rails */}
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="body"
                  initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  animate={
                    reduced ? { opacity: 1 } : { height: "auto", opacity: 1 }
                  }
                  exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <div
                    className="border-t px-5 pb-6 pt-1 sm:px-6"
                    style={{ borderColor: `${cat.accent}22` }}
                  >
                    <p className="mb-4 mt-4 max-w-[760px] text-[13px] leading-[1.65] text-muted-3">
                      {cat.blurb}
                    </p>
                    <div className="flex flex-col gap-4">
                      {catSeries.map((s) => {
                        const prods = productsBySeries(s.key);
                        if (prods.length === 0) return null;
                        return (
                          <div
                            key={s.key}
                            className="rounded-img-lg p-4 sm:p-5"
                            style={{ background: cat.accentSoft }}
                          >
                            <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                              <h3 className="text-[14.5px] font-semibold text-navy">
                                {s.label}
                              </h3>
                              <span className="text-[12px] text-muted-3">
                                {s.blurb}
                              </span>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {prods.map((p) => (
                                <TransitionLink
                                  key={p.slug}
                                  href={`/products/${p.slug}`}
                                  className="group inline-flex items-center gap-2 rounded-full bg-white py-[7px] pl-3.5 pr-2.5 text-[12.5px] font-semibold text-navy no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow,color] duration-300 hover:-translate-y-0.5 hover:text-green-deep hover:shadow-[0_8px_18px_-8px_rgba(29,31,35,.35)]"
                                >
                                  {p.name.replace("POWER CLEAN ", "")}
                                  {p.sku && (
                                    <span className="font-mono text-[10px] font-medium text-muted-2">
                                      #{p.sku}
                                    </span>
                                  )}
                                  <span
                                    className="flex h-[18px] w-[18px] items-center justify-center rounded-full text-[10px] text-white"
                                    style={{ background: cat.accent }}
                                  >
                                    <Arrow />
                                  </span>
                                </TransitionLink>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
