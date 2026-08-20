"use client";

import { useState } from "react";
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
} from "@/lib/catalogue";

/**
 * The Range at a Glance — the whole catalogue as one navigable hierarchy:
 * Category → Series → Product. Each category band carries its own accent
 * colour; series rails expand to product chips that link to detail pages.
 */
export function RangeHierarchy() {
  const reduced = usePrefersReducedMotion();
  const [openCat, setOpenCat] = useState<CategoryKey>("aqueous");

  return (
    <div className="flex flex-col gap-4">
      {categories.map((cat) => {
        const catSeries = seriesByCategory(cat.key);
        const count = catSeries.reduce(
          (n, s) => n + productsBySeries(s.key).length,
          0
        );
        const open = openCat === cat.key;
        return (
          <div
            key={cat.key}
            className="overflow-hidden rounded-card bg-white ring-1 ring-inset ring-line-2 transition-shadow duration-300"
            style={open ? { boxShadow: `0 18px 44px -28px ${cat.accent}66` } : undefined}
          >
            {/* Category band */}
            <button
              onClick={() => setOpenCat(cat.key)}
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
                                  href={`/catalogue/${p.slug}`}
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
