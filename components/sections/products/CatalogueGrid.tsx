"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
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
} from "@/lib/products";

type Filter = "all" | CategoryKey;

/** How many cards are visible before the reader asks for the rest. */
const FIRST_BATCH = 9;

/**
 * The full catalogue, browsable without an endless scroll.
 *
 * Forty-one cards stacked in one column ran to roughly thirteen phone screens,
 * which is not a list anyone reads — it is a wall. Three things fix it without
 * hiding anything from search engines:
 *
 *  1. Every matching product is ALWAYS rendered into the DOM. The collapse is
 *     `display:none` on the overflow, so crawlers still see all 41 links and
 *     the ItemList schema still matches the markup.
 *  2. A type-ahead filter, so finding a known product code is one keystroke
 *     rather than a scroll.
 *  3. A compact row layout below `sm` — the tagline and spec chips are the
 *     tallest part of the card and the least useful when scanning for a name.
 */
export function CatalogueGrid() {
  const reduced = usePrefersReducedMotion();
  const searchParams = useSearchParams();
  // the nav search box submits to /products?q=… — seed the local box from it
  const initialQuery = (searchParams.get("q") ?? "").trim();
  // industry and location pages deep-link in as /products?category=aqueous
  const requested = searchParams.get("category");
  const initialFilter: Filter =
    requested && categories.some((c) => c.key === requested)
      ? (requested as Filter)
      : "all";

  const [filter, setFilter] = useState<Filter>(initialFilter);
  const [query, setQuery] = useState(initialQuery);
  const [expanded, setExpanded] = useState(false);

  const q = query.trim().toLowerCase();

  const shown = useMemo(() => {
    const byCategory =
      filter === "all"
        ? products
        : products.filter((p) => p.category === filter);
    if (!q) return byCategory;
    return byCategory.filter((p) =>
      [p.name, p.tagline, p.sku ?? "", ...p.tags].some((v) =>
        v.toLowerCase().includes(q)
      )
    );
  }, [filter, q]);

  // a narrowed list is already short — only the unfiltered view needs collapsing
  const narrowed = Boolean(q) || filter !== "all";
  const limit = expanded || narrowed ? shown.length : FIRST_BATCH;
  const hiddenCount = Math.max(0, shown.length - limit);

  const chips: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "All products", count: products.length },
    ...categories.map((c) => ({
      key: c.key as Filter,
      label: c.short,
      count: products.filter((p) => p.category === c.key).length,
    })),
  ];

  const reset = () => {
    setFilter("all");
    setQuery("");
    setExpanded(false);
  };

  return (
    <>
      {/* CONTROLS — filter chips and type-ahead, sticky under the nav so the
          reader can re-filter from anywhere in the list */}
      <div className="sticky top-[72px] z-[20] -mx-2 mb-8 rounded-card bg-white/85 px-2 py-3 backdrop-blur-[12px] supports-[backdrop-filter]:bg-white/70">
        <div
          role="group"
          aria-label="Filter products by category"
          className="mb-3 flex flex-wrap justify-center gap-2"
        >
          {chips.map((c) => {
            const on = filter === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => {
                  setFilter(c.key);
                  setExpanded(false);
                }}
                aria-pressed={on}
                className={`cursor-pointer rounded-full px-[16px] py-2 text-[13px] font-semibold transition-[background,color,transform] duration-300 ${
                  on
                    ? "scale-[1.04] bg-navy text-white"
                    : "bg-white text-muted-3 ring-1 ring-inset ring-line-2 hover:bg-green-tint hover:text-navy"
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

        <div className="mx-auto flex max-w-[420px] items-center gap-2 rounded-full bg-azure py-2 pl-4 pr-2">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6a7080"
            strokeWidth="2.2"
            aria-hidden="true"
            className="shrink-0"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setExpanded(false);
            }}
            placeholder="Search by name, code or use — try XL, 845, aluminium"
            aria-label="Search the product catalogue"
            className="w-full border-none bg-transparent font-sans text-[13px] text-navy outline-none placeholder:text-muted"
          />
          {(query || filter !== "all") && (
            <button
              type="button"
              onClick={reset}
              className="shrink-0 cursor-pointer rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-navy ring-1 ring-inset ring-line-2 transition-colors hover:bg-green-tint"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* live region so filtering announces itself to screen readers */}
      <p aria-live="polite" className="sr-only">
        {shown.length} products match.
      </p>

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
        className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(auto-fill,minmax(290px,1fr))] sm:gap-5"
      >
        {shown.map((p, i) => (
          <motion.div
            key={p.slug}
            layout={!reduced}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.36,
              ease: EASE,
              delay: reduced ? 0 : Math.min(i, 8) * 0.03,
            }}
            // hidden rather than unmounted: the links stay in the HTML for
            // crawlers even while the list is collapsed. h-full so the card
            // fills its grid row and neighbouring cards align at the bottom.
            className={i >= limit ? "hidden" : "h-full"}
          >
            <ProductCard product={p} />
          </motion.div>
        ))}
      </motion.div>

      {hiddenCount > 0 && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="cursor-pointer rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-green-cta"
          >
            Show all {shown.length} products
            <span className="ml-2 font-normal text-white/60">
              +{hiddenCount} more
            </span>
          </button>
          <p className="text-[12.5px] text-muted">
            or filter by family above to narrow the list
          </p>
        </div>
      )}

      {expanded && !narrowed && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => {
              setExpanded(false);
              document
                .getElementById("all-products")
                ?.scrollIntoView({ block: "start" });
            }}
            className="cursor-pointer rounded-full border-[1.5px] border-navy px-7 py-3 text-[13.5px] font-semibold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
          >
            Collapse the list
          </button>
        </div>
      )}

      <p className="mt-8 text-center text-[13px] text-muted">
        Showing {Math.min(limit, shown.length)} of {products.length} products ·
        every product is supplied with an SDS and dosing guidance.
      </p>
    </>
  );
}

function ProductCard({ product }: { product: CatalogueProduct }) {
  const cat = categories.find((c) => c.key === product.category)!;
  return (
    <TransitionLink
      href={`/products/${product.slug}`}
      className="group relative flex h-full items-center gap-3 overflow-hidden rounded-card bg-[linear-gradient(170deg,#ffffff_0%,#fbfdfc_60%,#f3faf6_100%)] p-4 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow,ring-color] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg hover:ring-green/25 sm:block sm:p-6"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 hidden h-28 w-28 rounded-full bg-green/[0.06] transition-transform duration-500 group-hover:scale-125 sm:block"
      />
      {/* pack shot — every product ships as a labelled Power Clean drum.
          Inline on mobile so the row stays short; absolute on the full card. */}
      <span
        aria-hidden="true"
        className="pointer-events-none w-[46px] shrink-0 sm:absolute sm:right-3 sm:top-7 sm:w-[78px] sm:opacity-[0.95] sm:transition-transform sm:duration-500 sm:group-hover:-translate-y-1 sm:group-hover:scale-[1.06]"
      >
        <ProductDrum
          name={product.name}
          sku={product.sku}
          accent={cat.accent}
          size="sm"
          className="h-auto w-full drop-shadow-[0_8px_16px_rgba(29,31,35,.16)]"
        />
      </span>

      <span className="min-w-0 flex-1 sm:block">
        <span className="mb-1 flex items-center gap-2 sm:mb-3">
          <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-green" />
          <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted">
            {cat.short}
          </span>
          {product.sku && (
            <span className="font-mono text-[10.5px] text-muted-2 sm:hidden">
              · {product.sku}
            </span>
          )}
        </span>
        <h3 className="mb-0 text-[15.5px] font-semibold leading-[1.25] text-navy sm:mb-2 sm:max-w-[calc(100%-72px)] sm:text-[18px]">
          {product.name}
        </h3>
        {/* the tagline and spec chips are the tallest part of the card and the
            least useful when scanning a list of names — dropped on mobile */}
        <p className="mt-1 line-clamp-1 text-[12.5px] leading-[1.5] text-muted sm:mb-4 sm:mt-0 sm:line-clamp-none sm:max-w-[calc(100%-64px)] sm:flex-1 sm:text-[13px] sm:leading-[1.6]">
          {product.tagline}
        </p>
        <span className="mb-4 hidden flex-wrap gap-1.5 sm:flex">
          {product.specs
            .filter((sp) => sp.label !== "SKU")
            .slice(0, 2)
            .map((s) => (
              <span
                key={s.label}
                className="rounded-full bg-azure px-2.5 py-1 font-mono text-[10.5px] text-muted-3"
              >
                {s.value}
              </span>
            ))}
        </span>
        <span className="hidden items-center justify-between text-[13px] font-semibold text-navy transition-colors group-hover:text-green sm:flex">
          View product
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-green-cta text-white">
            <Arrow />
          </span>
        </span>
      </span>

      {/* mobile-only affordance */}
      <span
        aria-hidden="true"
        className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-green-cta text-white sm:hidden"
      >
        <Arrow />
      </span>
    </TransitionLink>
  );
}
