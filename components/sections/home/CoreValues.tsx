import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { DrawPath } from "@/components/motion/DrawPath";
import { GrowBar } from "@/components/motion/GrowBar";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageSlot } from "@/components/ui/ImageSlot";

/** Core values panel: efficiency chart, 0-VOC gauge card, macro photo card. */
export function CoreValues() {
  return (
    <SectionPanel outerClassName="px-3 pb-3 pt-10">
      <div className="mb-10 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] items-start gap-6">
        <Reveal dir="left">
          <Eyebrow label="CORE VALUES" />
        </Reveal>
        <Reveal
          dir="right"
          as="p"
          className="text-[clamp(18px,2vw,24px)] font-medium leading-[1.45] text-navy [text-wrap:pretty]"
        >
          Power Clean is built on chemistry, process control, and partnership —
          helping plants cut downtime, cost, and environmental load.
        </Reveal>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {/* Cleaning Efficiency Index chart */}
        <Reveal
          dir="up"
          className="flex flex-col gap-[18px] rounded-card-lg bg-azure p-[26px] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-card-lg"
        >
          <div className="text-sm font-semibold text-navy">
            Cleaning Efficiency Index
          </div>
          <svg viewBox="0 0 320 110" className="h-auto w-full" aria-hidden="true">
            <path d="M0,96 L320,96" stroke="#e2e6ec" strokeWidth="1" />
            <path
              d="M0,60 L320,60"
              stroke="#e2e6ec"
              strokeWidth="1"
              strokeDasharray="4 5"
            />
            <DrawPath
              d="M4,92 C40,86 58,58 92,62 C126,66 148,30 190,38 C232,46 262,16 316,22"
              stroke="#00A651"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="316" cy="22" r="5" fill="#00A651" />
          </svg>
          <div className="flex flex-wrap gap-7">
            <div>
              <div className="text-[26px] font-bold text-navy">
                <CountUp to={40} suffix="%" />
              </div>
              <div className="text-xs text-muted">faster wash cycles</div>
            </div>
            <div>
              <div className="text-[26px] font-bold text-navy">
                <CountUp to={98.6} dec={1} suffix="%" />
              </div>
              <div className="text-xs text-muted">residue-free finish</div>
            </div>
          </div>
        </Reveal>

        {/* Safety & compliance card — Zero VOC is a REAL product property */}
        <Reveal
          dir="up"
          delay={140}
          className="flex flex-col justify-between gap-[26px] rounded-card-lg bg-green-tint p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-card-lg"
        >
          <p className="text-[clamp(19px,1.8vw,23px)] font-medium leading-[1.45] text-ink [text-wrap:pretty]">
            Effective industrial cleaning is chemistry, engineering &amp;
            process control — working as one system.
          </p>
          <div className="flex items-center gap-[18px]">
            <svg viewBox="0 0 120 68" className="w-[112px] shrink-0" aria-hidden="true">
              <path
                d="M12,62 A48,48 0 0 1 108,62"
                fill="none"
                stroke="#ffffff"
                strokeWidth="9"
                strokeLinecap="round"
              />
              <DrawPath
                d="M12,62 A48,48 0 0 1 108,62"
                stroke="#00A651"
                strokeWidth="9"
                strokeLinecap="round"
              />
              <text
                x="60"
                y="58"
                textAnchor="middle"
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="700"
                fontSize="15"
                fill="#292F6E"
              >
                0 VOC
              </text>
            </svg>
            <div>
              <div className="text-2xl font-bold text-navy">
                <CountUp to={100} suffix="%" />
              </div>
              <div className="text-xs text-muted-3">
                SDS &amp; PPE documentation coverage
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-navy">
              Safety &amp; Compliance First
            </span>
            <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#292F6E"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
          </div>
        </Reveal>

        {/* Macro photo card with precision stat overlay */}
        <Reveal
          dir="clip"
          delay={240}
          className="relative min-h-[320px] overflow-hidden rounded-card-lg"
        >
          <ImageSlot
            brief="Macro photo — foam breaking down grime on brushed steel"
            className="absolute inset-0"
          />
          <div className="pointer-events-none absolute bottom-3.5 left-3.5 right-3.5 rounded-img-md bg-white/90 px-4 py-3.5 backdrop-blur-[10px]">
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-[12.5px] font-semibold text-navy">
                Precision Engineering
              </span>
              <span className="text-sm font-bold text-green">
                <CountUp to={5} prefix="< " suffix=" µm" />
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-line">
              <GrowBar
                axis="x"
                className="h-full w-[94%] rounded-full bg-green"
              />
            </div>
            <div className="mt-1.5 text-[11px] text-muted">
              residual film after final rinse
            </div>
          </div>
        </Reveal>
      </div>
    </SectionPanel>
  );
}
