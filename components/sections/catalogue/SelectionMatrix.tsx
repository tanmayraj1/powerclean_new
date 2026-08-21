import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { categories, getProduct } from "@/lib/catalogue";
import { dutySpectrum, matrixBySlug, matrixRows } from "@/lib/matrix";

/**
 * Technical selection matrix — the whole range as one engineering spec
 * sheet: metal compatibility, process window, application methods and
 * corrosion protection per product, grouped by family. Values are typical;
 * "—" means the figure is supplied on request via the TDS. The duty
 * spectrum strip below mirrors classic selection-sheet capability charts.
 */

const TICK_COLS: {
  key: string;
  label: string;
  group: "metals" | "apps";
  field: string;
}[] = [
  { key: "fe", label: "Ferrous & steel", group: "metals", field: "ferrous" },
  { key: "al", label: "Aluminium", group: "metals", field: "aluminium" },
  { key: "cu", label: "Copper & brass", group: "metals", field: "copperBrass" },
  { key: "pl", label: "Plastics & bins", group: "metals", field: "plastics" },
  { key: "spray", label: "Spray / jet", group: "apps", field: "spray" },
  { key: "soak", label: "Immersion / soak", group: "apps", field: "immersion" },
  { key: "ultra", label: "Ultrasonic", group: "apps", field: "ultrasonic" },
  { key: "manual", label: "Manual / wipe", group: "apps", field: "manual" },
];

function Tick({ on, label }: { on?: boolean; label: string }) {
  return on ? (
    <span className="font-bold text-green-deep">
      ✓<span className="sr-only"> {label}</span>
    </span>
  ) : (
    <span aria-hidden="true" className="text-line-3">
      ·
    </span>
  );
}

function Val({ v }: { v?: string }) {
  return v ? (
    <span className="whitespace-nowrap font-mono text-[11px] tracking-[-0.02em] text-ink">
      {v}
    </span>
  ) : (
    <span className="text-line-3">—</span>
  );
}

export function SelectionMatrix() {
  return (
    <div>
      <Reveal dir="up">
        <div className="overflow-x-auto rounded-card ring-1 ring-inset ring-line-2 [scrollbar-width:thin]">
          <table className="w-full min-w-[1080px] border-collapse bg-white text-left">
            <thead>
              {/* group bands */}
              <tr className="bg-navy text-white">
                <th className="sticky left-0 z-20 bg-navy px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em]">
                  Product
                </th>
                <th
                  colSpan={4}
                  className="border-l border-white/15 px-3 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.1em]"
                >
                  Metal compatibility*
                </th>
                <th
                  colSpan={4}
                  className="border-l border-white/15 px-3 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.1em]"
                >
                  Process window
                </th>
                <th
                  colSpan={4}
                  className="border-l border-white/15 px-3 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.1em]"
                >
                  Application
                </th>
                <th className="border-l border-white/15 px-3 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.1em]">
                  Protection
                </th>
              </tr>
              {/* column labels */}
              <tr className="border-b border-line-2 bg-azure">
                <th className="sticky left-0 z-20 bg-azure px-4 py-2 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-muted-3">
                  Name · SKU
                </th>
                {TICK_COLS.slice(0, 4).map((c) => (
                  <th key={c.key} className="px-1 pb-3 pt-4 text-center align-bottom">
                    <span className="inline-block rotate-180 whitespace-nowrap text-[10.5px] font-semibold text-muted-3 [writing-mode:vertical-rl]">
                      {c.label}
                    </span>
                  </th>
                ))}
                {(["Operating temp", "Dilution", "Chemistry", "Foam"] as const).map(
                  (l) => (
                    <th
                      key={l}
                      className="whitespace-nowrap px-3 py-2 text-center text-[10.5px] font-semibold uppercase tracking-[0.06em] text-muted-3"
                    >
                      {l}
                    </th>
                  )
                )}
                {TICK_COLS.slice(4).map((c) => (
                  <th key={c.key} className="px-1 pb-3 pt-4 text-center align-bottom">
                    <span className="inline-block rotate-180 whitespace-nowrap text-[10.5px] font-semibold text-muted-3 [writing-mode:vertical-rl]">
                      {c.label}
                    </span>
                  </th>
                ))}
                <th className="whitespace-nowrap px-3 py-2 text-center text-[10.5px] font-semibold uppercase tracking-[0.06em] text-muted-3">
                  Rust protection
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => {
                const rows = matrixRows.filter(
                  (r) => getProduct(r.slug)?.category === cat.key
                );
                if (rows.length === 0) return null;
                return [
                  <tr key={`${cat.key}-band`}>
                    <th
                      colSpan={14}
                      className="p-0 text-left"
                      style={{ background: cat.accentSoft }}
                    >
                      {/* label pins to the visible edge while the wide row scrolls */}
                      <span
                        className="sticky left-0 inline-block whitespace-nowrap px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em]"
                        style={{ color: cat.accentText }}
                      >
                        {cat.label}
                      </span>
                    </th>
                  </tr>,
                  ...rows.map((r, i) => {
                    const p = getProduct(r.slug)!;
                    const zebra = i % 2 === 1;
                    return (
                      <tr
                        key={r.slug}
                        className={`border-t border-line-2/70 text-center transition-colors hover:bg-green-tint/40 ${
                          zebra ? "bg-card-tint" : "bg-white"
                        }`}
                      >
                        <th
                          className={`sticky left-0 z-10 whitespace-nowrap px-4 py-[9px] text-left shadow-[6px_0_8px_-8px_rgba(29,31,35,.25)] ${
                            zebra ? "bg-card-tint" : "bg-white"
                          }`}
                        >
                          <TransitionLink
                            href={`/catalogue/${r.slug}`}
                            className="text-[12px] font-semibold text-navy no-underline hover:text-green-deep"
                          >
                            {p.name.replace("POWER CLEAN ", "")}
                          </TransitionLink>
                          {p.sku && (
                            <span className="ml-2 font-mono text-[10px] text-muted-3">
                              #{p.sku}
                            </span>
                          )}
                        </th>
                        {TICK_COLS.slice(0, 4).map((c) => (
                          <td key={c.key} className="px-1 py-[9px] text-[12px]">
                            <Tick
                              on={
                                r.metals[
                                  c.field as keyof typeof r.metals
                                ]
                              }
                              label={c.label}
                            />
                          </td>
                        ))}
                        <td className="px-3 py-[9px]">
                          <Val v={r.temp} />
                        </td>
                        <td className="px-3 py-[9px]">
                          <Val v={r.dilution} />
                        </td>
                        <td className="px-3 py-[9px]">
                          <Val v={r.ph} />
                        </td>
                        <td className="px-3 py-[9px]">
                          <Val v={r.foam} />
                        </td>
                        {TICK_COLS.slice(4).map((c) => (
                          <td key={c.key} className="px-1 py-[9px] text-[12px]">
                            <Tick
                              on={r.apps[c.field as keyof typeof r.apps]}
                              label={c.label}
                            />
                          </td>
                        ))}
                        <td className="px-3 py-[9px]">
                          <Val v={r.rust} />
                        </td>
                      </tr>
                    );
                  }),
                ];
              })}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal dir="up" delay={80} className="mt-3 flex flex-col gap-1">
        <p className="text-[11.5px] leading-[1.6] text-muted">
          * Typical values at recommended dilution — confirm against the
          product TDS/SDS for your parts and process. Some products are safe
          on further substrates at lower concentrations and temperatures.
        </p>
        <p className="text-[11.5px] leading-[1.6] text-muted">
          For cast iron, ductile or sintered parts, test before use. “—” =
          figure supplied on request with the technical data sheet.
        </p>
      </Reveal>

      {/* DUTY SPECTRUM */}
      <Reveal dir="up" delay={120} className="mt-10">
        <h3 className="mb-5 text-center text-[15px] font-semibold text-navy">
          Cleaning Duty Spectrum — Light to Heavy
        </h3>
        <div className="overflow-x-auto pb-1 [scrollbar-width:thin]">
          <div className="mx-auto min-w-[860px] max-w-[1080px]">
            <div className="mb-2 flex justify-between text-[10.5px] font-bold uppercase tracking-[0.08em] text-navy">
              <span>Light duty · hydrocarbon soils</span>
              <span>Medium duty</span>
              <span>Heavy duty · hydrocarbon soils</span>
            </div>
            <div className="flex gap-1.5">
              {dutySpectrum.map((b) => (
                <div key={b.products.join("-")} className="flex-1">
                  <div
                    className="h-[44px] rounded-md"
                    style={{ background: b.color }}
                  />
                  <div className="mt-1.5 text-center">
                    <span
                      aria-hidden="true"
                      className="block text-[10px] leading-none text-muted-3"
                    >
                      ▲
                    </span>
                    <span className="mt-1 block whitespace-nowrap font-mono text-[10.5px] font-semibold leading-snug text-navy">
                      {b.products.join(" · ")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
