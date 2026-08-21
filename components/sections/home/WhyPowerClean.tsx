import { SectionPanel } from "@/components/ui/SectionPanel";
import { Backdrop } from "@/components/ui/Backdrop";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";

/**
 * The old powerclean.in homepage pitch, rebuilt as crawlable editorial prose:
 * active-colloid chemistry, concentrate economics, and the precision-cleaning
 * guarantee — every claim ported from the live site.
 */

const PROOF_CHIPS = [
  "ISO 9001 Certified",
  "Know-how from the USA",
  "Replacing TCE since 2000",
  "25+ years of precision cleaning",
];

export function WhyPowerClean() {
  return (
    <SectionPanel outerClassName="px-3 pb-3 pt-10">
      <div className="relative isolate">
        <Backdrop />
        <Backdrop
          variant="rings"
          className="right-[-10%] top-[-6%] h-[480px] w-[480px]"
        />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-x-12 gap-y-9">
        <Reveal dir="left">
          <Eyebrow label="WHY POWER CLEAN" className="mb-3.5" />
          <h2 className="mb-5 text-[clamp(28px,3.6vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy [text-wrap:balance]">
            Cleaning Chemicals That Actually Work
          </h2>
          <p className="mb-5 text-[clamp(17px,1.8vw,21px)] font-medium leading-[1.5] text-ink [text-wrap:pretty]">
            Finally — environment-friendly industrial cleaning and degreasing
            chemicals that actually work.
          </p>
          <div className="flex flex-wrap gap-2">
            {PROOF_CHIPS.map((c) => (
              <span
                key={c}
                className="rounded-full bg-green-tint px-3.5 py-1.5 text-[12px] font-semibold text-navy ring-1 ring-inset ring-green/15"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal dir="right" className="flex flex-col gap-4">
          <p className="text-[14.5px] leading-[1.75] text-muted-3">
            POWER CLEAN aqueous cleaners use a unique active-colloid chemistry
            that replaces dangerous petroleum distillates, hazardous chemicals
            and solvents. Every formulation is biodegradable, safe for people
            and the environment, and manufactured in India by Roovel Solutions
            Pvt. Ltd. — an ISO 9001 certified company — with technical
            know-how from the USA.
          </p>
          <p className="text-[14.5px] leading-[1.75] text-muted-3">
            Unlike mineral spirits, high-alkaline powders and other hazardous
            chemistry, Power Clean uses the power of water. Products are
            supplied as concentrates and diluted before use — as far as 1:100
            — so every litre goes further: lower cost per wash, longer bath
            life, fewer bath changes. Most grades run on regular tap water and
            stay effective even at low concentrations.
          </p>
          <p className="text-[14.5px] leading-[1.75] text-muted-3">
            Roovel Solutions are leaders in precision cleaning — we have
            helped manufacturers reach millipore-level cleanliness on their
            components. Buying a cleaning machine or a chemical alone does not
            guarantee results: we put together the right machine, the right
            chemical and the right process, delivered as one solution.
          </p>
        </Reveal>
      </div>

      {/* real old-site differentiators */}
      <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        <Reveal
          dir="up"
          className="flex flex-col justify-between gap-4 rounded-card-lg bg-green-tint p-6 transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card"
        >
          <div>
            <h3 className="mb-2 text-[16px] font-semibold text-navy">
              Free Validation Trial
            </h3>
            <p className="text-[13.5px] leading-[1.65] text-muted-3">
              Send your components to us — we will clean them and send them
              back, so you can validate our cleaning before you buy a single
              litre.
            </p>
          </div>
          <TransitionLink
            href="/contact"
            className="group inline-flex items-center gap-2 text-[13.5px] font-semibold text-green-deep no-underline"
          >
            Arrange a trial <Arrow />
          </TransitionLink>
        </Reveal>
        <Reveal
          dir="up"
          delay={120}
          className="flex flex-col justify-between gap-4 rounded-card-lg bg-azure p-6 transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card"
        >
          <div>
            <h3 className="mb-2 text-[16px] font-semibold text-navy">
              Custom Formulation
            </h3>
            <p className="text-[13.5px] leading-[1.65] text-muted-3">
              Have a new product idea for your cleaning need? We work closely
              with customers to develop custom formulations matched to your
              substrate, soils and process — often avoiding costly equipment
              upgrades.
            </p>
          </div>
          <TransitionLink
            href="/contact"
            className="group inline-flex items-center gap-2 text-[13.5px] font-semibold text-green-deep no-underline"
          >
            Talk to our chemists <Arrow />
          </TransitionLink>
        </Reveal>
      </div>
      </div>
    </SectionPanel>
  );
}
