"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/lib/motion";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { Arrow } from "@/components/ui/Arrow";
import { ProductDrum } from "@/components/ui/ProductDrum";
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
  const searchParams = useSearchParams();
  // the nav search box submits to /catalogue?q=… — honour it here
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const byCategory =
    filter === "all" ? products : products.filter((p) => p.category === filter);
  const shown = query
    ? byCategory.filter((p) =>
        [p.name, p.tagline, p.sku ?? "", ...p.tags].some((v) =>
          v.toLowerCase().includes(query)
        )
      )
    : byCategory;

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

      {query && (
        <p className="mb-6 text-center text-[13px] text-muted-3">
          Showing {shown.length} result{shown.length === 1 ? "" : "s"} for{" "}
          <span className="font-semibold text-navy">&ldquo;{query}&rdquo;</span>{" "}
          <a
            href="/catalogue"
            className="font-semibold text-green-deep underline-offset-4 hover:underline"
          >
            clear
          </a>
        </p>
      )}
      {shown.length === 0 && (
        <p className="mb-8 text-center text-[14px] text-muted-3">
          No products matched. Try a product code such as{" "}
          <span className="font-mono text-navy">XL</span> or{" "}
          <span className="font-mono text-navy">845</span>, or{" "}
          <a
            href="/contact"
            className="font-semibold text-green-deep underline-offset-4 hover:underline"
          >
            tell us your soils and substrates
          </a>{" "}
          and we will match the grade for you.
        </p>
      )}

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
      className="group relative flex h-full flex-col overflow-hidden rounded-card bg-[linear-gradient(170deg,#ffffff_0%,#fbfdfc_60%,#f3faf6_100%)] p-6 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow,ring-color] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg hover:ring-green/25"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green/[0.06] transition-transform duration-500 group-hover:scale-125"
      />
      {/* pack shot — every product ships as a labelled Power Clean drum */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-7 w-[78px] opacity-[0.95] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.06]"
      >
        <ProductDrum
          name={product.name}
          sku={product.sku}
          accent={cat.accent}
          size="sm"
          className="h-auto w-full drop-shadow-[0_8px_16px_rgba(29,31,35,.16)]"
        />
      </span>
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="flex items-center gap-2">
          <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-green" />
          <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
            {cat.short}
          </span>
        </span>
      </div>
      <h3 className="mb-2 max-w-[calc(100%-72px)] text-[18px] font-semibold leading-[1.25] text-navy">
        {product.name}
      </h3>
      <p className="mb-4 max-w-[calc(100%-64px)] flex-1 text-[13px] leading-[1.6] text-muted">
        {product.tagline}
      </p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {product.specs.filter((sp) => sp.label !== "SKU").slice(0, 2).map((s) => (
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
