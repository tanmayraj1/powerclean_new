import { SectionPanel } from "@/components/ui/SectionPanel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";

/** The old site's replace-harmful-solvents pitch, on a navy band. */

const SOLVENTS = [
  "Petrol",
  "Diesel",
  "Kerosene",
  "Trichloroethylene (TCE)",
  "Perchloroethylene",
  "Naphtha",
  "Caustic Soda",
];

export function ReplaceSolvents() {
  return (
    <SectionPanel tone="navy" outerClassName="p-3">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-x-12 gap-y-8">
        <Reveal dir="left">
          <Eyebrow label="REPLACING TCE SINCE 2000" light className="mb-3.5" />
          <h2 className="mb-4 text-[clamp(26px,3.4vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-white [text-wrap:balance]">
            Retire the Harmful Solvents
          </h2>
          <p className="mb-6 max-w-[520px] text-[14.5px] leading-[1.75] text-white/80">
            Power Clean safely and effectively replaces the solvents Indian
            plants still lean on — at a lower cost of ownership, legally and
            safely, with a proven changeover process we have run since the
            year 2000. Our team comes to your plant, studies the process with
            you, and guides the switch end to end.
          </p>
          <TransitionLink
            href="/solutions#replace-tce"
            className="group inline-block rounded-full bg-green-cta px-7 py-3.5 text-sm font-semibold text-white no-underline shadow-cta transition-colors hover:bg-green-cta-dark"
          >
            See the head-to-head comparison <Arrow />
          </TransitionLink>
        </Reveal>
        <Reveal dir="right">
          <div className="mb-6 flex flex-wrap gap-2">
            {SOLVENTS.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/25 px-4 py-2 text-[13px] font-semibold text-white/90 line-through decoration-green decoration-2"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="rounded-card-lg bg-white/10 p-6 backdrop-blur-[2px]">
            <div className="mb-1 font-mono text-[26px] font-bold text-green">
              1 L → 1,000,000 L
            </div>
            <p className="text-[13px] leading-[1.65] text-white/80">
              One litre of TCE can pollute a million litres of river water.
              Every line we convert takes a hazardous solvent out of
              circulation — and cuts the wash cost while doing it.
            </p>
          </div>
        </Reveal>
      </div>
    </SectionPanel>
  );
}
