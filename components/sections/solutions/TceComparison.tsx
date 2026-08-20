import { Reveal } from "@/components/motion/Reveal";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Magnetic } from "@/components/motion/Magnetic";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { Arrow } from "@/components/ui/Arrow";

/**
 * REAL content from powerclean.in/replace-tce.aspx — why POWER CLEAN beats
 * trichloroethylene, row by row. Roovel has replaced TCE and other toxic
 * solvents in India since 2000.
 */
const ROWS: { pc: string; tce: string }[] = [
  {
    pc: "Multi-purpose, versatile cleaner / degreaser — metals and non-metals",
    tce: "A specific metal degreaser with no other use",
  },
  {
    pc: "Eco-friendly, non-toxic chemical",
    tce: "Emits hazardous toxic vapours",
  },
  {
    pc: "Economical — completely soluble in water, used diluted",
    tce: "Used in concentrated form",
  },
  {
    pc: "Safe for operators and the environment; non-corrosive",
    tce: "Corrosive; needs secluded areas with special exhaust",
  },
  {
    pc: "Non-hazardous in normal use",
    tce: "Long-term health concerns — liver, kidney, cancer risk",
  },
  {
    pc: "Non-explosive; easy to handle, mix and dilute",
    tce: "Barrels known to explode in storage",
  },
  {
    pc: "Best performance at just 55–65 °C",
    tce: "Needs 90–100 °C for comparable performance",
  },
  {
    pc: "Can be recycled; indefinite shelf life",
    tce: "Cannot be recycled; evaporates in storage",
  },
];

export function TceComparison() {
  return (
    <SectionPanel tone="tint" outerClassName="p-3" id="replace-tce">
      <SectionHeading
        eyebrow="REPLACING TCE SINCE 2000"
        title="POWER CLEAN vs Trichloroethylene"
        lede="Industries across India are switching from TCE, diesel, kerosene and naphtha to eco-friendly aqueous cleaning. Here is the head-to-head — one litre of TCE can pollute a million litres of river water."
        className="mb-9 max-w-[700px]"
      />
      <div className="mx-auto max-w-[980px] overflow-hidden rounded-card ring-1 ring-inset ring-line-2">
        <div className="grid grid-cols-2 bg-navy text-center">
          <div className="border-r border-white/15 px-4 py-3.5 text-[13.5px] font-bold tracking-[0.04em] text-green-bright">
            POWER CLEAN
          </div>
          <div className="px-4 py-3.5 text-[13.5px] font-bold tracking-[0.04em] text-white/70">
            TRICHLOROETHYLENE (TCE)
          </div>
        </div>
        {ROWS.map((r, i) => (
          <Reveal
            key={i}
            dir="up"
            delay={Math.min(i, 5) * 60}
            className={`grid grid-cols-2 ${i % 2 ? "bg-card-tint" : "bg-white"}`}
          >
            <div className="flex items-start gap-2.5 border-r border-line-2 px-4 py-3.5 sm:px-5">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-green-tint text-[10px] font-bold text-green-deep"
              >
                ✓
              </span>
              <span className="text-[13px] leading-[1.55] text-ink">
                {r.pc}
              </span>
            </div>
            <div className="flex items-start gap-2.5 px-4 py-3.5 sm:px-5">
              <span
                aria-hidden="true"
                className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#fdecec] text-[10px] font-bold text-[#b3261e]"
              >
                ✕
              </span>
              <span className="text-[13px] leading-[1.55] text-muted-3">
                {r.tce}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center gap-3 text-center">
        <p className="max-w-[640px] text-[13.5px] leading-[1.7] text-muted-3">
          Switching cuts cost per component, improves compliance, simplifies
          waste management and consolidates inventory — one multi-metal product
          instead of many. We come to your plant, study your process, and walk
          the replacement through with you.
        </p>
        <Magnetic>
          <TransitionLink
            href="/contact"
            className="group inline-block rounded-full bg-green-cta px-7 py-[13px] text-sm font-semibold text-white no-underline shadow-cta transition-colors hover:bg-green-cta-dark"
          >
            Plan Your TCE Replacement <Arrow />
          </TransitionLink>
        </Magnetic>
      </div>
    </SectionPanel>
  );
}
