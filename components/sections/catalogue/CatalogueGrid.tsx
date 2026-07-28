"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/lib/motion";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { Arrow } from "@/components/ui/Arrow";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import {
  categories,
  products,
  type CatalogueProduct,
  type CategoryKey,
} from "@/lib/catalogue";

type Filter = "all" | CategoryKey;

/** Full product catalogue with category filtering. */
export function CatalogueGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const reduced = usePrefersReducedMotion();

  const shown =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  const chips: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "All products", count: products.length },
    ...categories.map((c) => ({
      key: c.key as Filter,
      label: c.short,
      count: products.filter((p) => p.category === c.key).length,
    })),
  ];

  return (
    <>
      <div
        role="group"
        aria-label="Filter products by category"
        className="mb-9 flex flex-wrap justify-center gap-2"
      >
        {chips.map((c) => {
          const on = filter === c.key;
          return (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              aria-pressed={on}
              className={`cursor-pointer rounded-full px-[18px] py-2.5 text-[13px] font-semibold transition-[background,color,transform] duration-300 ${
                on
                  ? "scale-[1.04] bg-navy text-white"
                  : "bg-white text-muted-3 hover:bg-green-tint hover:text-navy"
              }`}
            >
              {c.label}
              <span className={on ? "text-white/60" : "text-muted-2"}>
                {" "}
                {c.count}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div
        layout={!reduced}
        className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5"
      >
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.div
              key={p.slug}
              layout={!reduced}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              transition={{
                duration: 0.4,
                ease: EASE,
                delay: reduced ? 0 : Math.min(i, 8) * 0.03,
              }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-8 text-center text-[13px] text-muted">
        Showing {shown.length} of {products.length} products · every product is
        supplied with an SDS and dosing guidance.
      </p>
    </>
  );
}

function ProductCard({ product }: { product: CatalogueProduct }) {
  const cat = categories.find((c) => c.key === product.category)!;
  return (
    <TransitionLink
      href={`/catalogue/${product.slug}`}
      className="group flex h-full flex-col rounded-card border border-line-2 bg-white p-6 no-underline transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-green" />
        <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
          {cat.short}
        </span>
      </div>
      <h3 className="mb-2 text-[18px] font-semibold leading-[1.25] text-navy">
        {product.name}
      </h3>
      <p className="mb-4 flex-1 text-[13px] leading-[1.6] text-muted">
        {product.tagline}
      </p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {product.specs.slice(0, 2).map((s) => (
          <span
            key={s.label}
            className="rounded-full bg-azure px-2.5 py-1 font-mono text-[10.5px] text-muted-3"
          >
            {s.value}
          </span>
        ))}
      </div>
      <span className="flex items-center justify-between text-[13px] font-semibold text-navy transition-colors group-hover:text-green">
        View product
        <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-green-cta text-white">
          <Arrow />
        </span>
      </span>
    </TransitionLink>
  );
}
