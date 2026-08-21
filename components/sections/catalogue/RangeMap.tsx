"use client";

import { Reveal } from "@/components/motion/Reveal";
import { GrowBar } from "@/components/motion/GrowBar";
import { DrawPath } from "@/components/motion/DrawPath";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { Arrow } from "@/components/ui/Arrow";
import {
  categories,
  products,
  productsBySeries,
  seriesByCategory,
  type CategoryKey,
} from "@/lib/catalogue";

/**
 * The whole range as one chart: a hub node fanning out to the four product
 * families, each card charting its series as proportional bars. On desktop
 * the fan is drawn with animated connectors; on mobile the cards stack and
 * the hub sits on top. Two navigation modes:
 *  - "scroll" (catalogue page): opens that family in RangeHierarchy below
 *  - "link" (QR landing): navigates to /catalogue#range-<key>
 */
export function RangeMap({ mode = "scroll" }: { mode?: "scroll" | "link" }) {
  // widest series across the whole range sets the bar scale, so bar lengths
  // are comparable between family cards
  const maxSeries = Math.max(
    ...categories.flatMap((c) =>
      seriesByCategory(c.key).map((s) => productsBySeries(s.key).length)
    )
  );

  const openCategory = (key: CategoryKey) => {
    window.dispatchEvent(
      new CustomEvent("pc-open-category", { detail: key })
    );
  };

  return (
    <div>
      {/* HUB */}
      <Reveal dir="up" className="flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-full bg-navy px-6 py-3.5 text-center shadow-[0_18px_44px_-20px_rgba(41,47,110,.55)] sm:px-8">
          <span className="text-[13.5px] font-semibold tracking-[0.08em] text-white">
            THE POWER CLEAN RANGE
          </span>
          <span className="font-mono text-[11.5px] text-white/70">
            {products.length} PRODUCTS · 12 SERIES · 4 FAMILIES
          </span>
        </div>
      </Reveal>

      {/* CONNECTOR FAN — desktop only; mobile stacks with a spine */}
      <Reveal dir="up" className="hidden xl:block">
        <svg
          viewBox="0 0 1000 84"
          preserveAspectRatio="none"
          className="block h-[72px] w-full"
          aria-hidden="true"
        >
          {categories.map((c, i) => {
            const x = 125 + i * 250;
            return (
              <DrawPath
                key={c.key}
                d={`M500,4 C500,52 ${x},30 ${x},80`}
                fill="none"
                stroke={c.accent}
                strokeWidth={1.75}
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </Reveal>

      {/* FAMILY CARDS */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:mt-0 xl:grid-cols-4">
        {categories.map((cat, i) => {
          const catSeries = seriesByCategory(cat.key).filter(
            (s) => productsBySeries(s.key).length > 0
          );
          const count = catSeries.reduce(
            (n, s) => n + productsBySeries(s.key).length,
            0
          );

          const inner = (
            <>
              {/* header */}
              <div
                className="flex items-center gap-3 border-b px-5 pb-3.5 pt-5"
                style={{ borderColor: `${cat.accent}26` }}
              >
                <span
                  aria-hidden="true"
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ background: cat.accent }}
                />
                <span className="min-w-0 flex-1 text-[14.5px] font-semibold leading-tight text-navy">
                  {cat.short}
                </span>
                <span
                  className="font-mono text-[20px] font-semibold leading-none"
                  style={{ color: cat.accentText }}
                >
                  {String(count).padStart(2, "0")}
                </span>
              </div>

              {/* series bar chart */}
              <div className="flex flex-1 flex-col gap-2.5 px-5 py-4">
                {catSeries.map((s, j) => {
                  const n = productsBySeries(s.key).length;
                  return (
                    <div key={s.key}>
                      <div className="mb-1 flex items-baseline justify-between gap-3">
                        <span className="truncate text-[11.5px] font-medium text-muted-3">
                          {s.label}
                        </span>
                        <span className="font-mono text-[10.5px] text-muted-2">
                          {n}
                        </span>
                      </div>
                      <div
                        aria-hidden="true"
                        className="h-[5px] overflow-hidden rounded-full"
                        style={{ background: `${cat.accent}1f` }}
                      >
                        <GrowBar
                          delay={0.25 + j * 0.08}
                          duration={1.1}
                          className="h-full rounded-full"
                          style={{
                            width: `${(n / maxSeries) * 100}%`,
                            background: cat.accent,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* footer */}
              <div className="flex items-center justify-between px-5 pb-4">
                <span className="text-[12px] font-semibold text-navy transition-colors group-hover:text-green-deep">
                  {mode === "link" ? "Open this family" : "See every product"}
                </span>
                <span
                  className="flex h-[22px] w-[22px] items-center justify-center rounded-full text-[11px] text-white"
                  style={{ background: cat.accent }}
                >
                  <Arrow />
                </span>
              </div>
            </>
          );

          const cardClass =
            "group flex h-full w-full cursor-pointer flex-col rounded-card border-none bg-white p-0 text-left font-sans no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg";

          return (
            <Reveal key={cat.key} dir="up" delay={i * 90}>
              {/* mobile connector — the fan collapses into a vertical spine:
                  a coloured drop line ties each stacked card back to the hub */}
              <div
                aria-hidden="true"
                className="flex flex-col items-center xl:hidden"
              >
                <span
                  className="block h-6 w-[2px] rounded-full"
                  style={{
                    background: `linear-gradient(#292F6E, ${cat.accent})`,
                  }}
                />
                <span
                  className="mb-1.5 block h-[7px] w-[7px] rounded-full"
                  style={{ background: cat.accent }}
                />
              </div>
              {mode === "link" ? (
                <TransitionLink
                  href={`/catalogue#range-${cat.key}`}
                  className={cardClass}
                  aria-label={`${cat.label} — ${count} products`}
                >
                  {inner}
                </TransitionLink>
              ) : (
                <button
                  type="button"
                  onClick={() => openCategory(cat.key)}
                  className={cardClass}
                  aria-label={`${cat.label} — open ${count} products below`}
                >
                  {inner}
                </button>
              )}
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
