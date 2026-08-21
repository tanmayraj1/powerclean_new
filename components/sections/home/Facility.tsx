import { Reveal } from "@/components/motion/Reveal";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { TransitionLink } from "@/components/layout/TransitionLink";

const CHECKLIST = [
  "In-house formulation & application lab",
  "Batch-wise quality control on every run",
  "Substrate & soil testing before recommendation",
  "ISO 9001–certified production processes", // REAL — Roovel is ISO 9001 certified
];

/** Facility split: checklist + outline CTA / two stacked photos. */
export function Facility() {
  return (
    <SectionPanel outerClassName="px-3 pb-3">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-9">
        <Reveal dir="left">
          <Eyebrow label="FACILITY" className="mb-3.5" />
          <h2 className="mb-[18px] text-[clamp(28px,3.4vw,42px)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy">
            Manufacturing &amp; R&amp;D, Under One Roof
          </h2>
          <p className="mb-6 text-[15px] leading-[1.65] text-muted [text-wrap:pretty]">
            Every batch is formulated, tested, and validated in-house before it
            reaches your plant — so what worked in the trial is what arrives in
            the drum.
          </p>
          <div className="mb-7 flex flex-col gap-3.5">
            {CHECKLIST.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-tint text-xs font-bold text-green">
                  ✓
                </span>
                <span className="text-sm font-medium text-ink">{item}</span>
              </div>
            ))}
          </div>
          <TransitionLink
            href="/about"
            className="inline-block rounded-full border-[1.5px] border-navy px-[26px] py-3 text-sm font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
          >
            Visit Our Facility
          </TransitionLink>
        </Reveal>
        <Reveal dir="right" className="grid gap-4">
          <div className="relative h-[240px] overflow-hidden rounded-card">
            <ImageSlot
              brief="Photo — R&D lab, technician testing a formulation"
              src="/lab-beaker.png"
              alt="Power Clean industrial degreaser being measured in a beaker in the applications lab"
              sizes="(max-width: 940px) 100vw, 50vw"
              className="absolute inset-0"
            />
          </div>
          <div className="relative h-[190px] overflow-hidden rounded-card">
            <ImageSlot
              brief="Photo — blending / filling line in production"
              src="/photos/blending-line.webp"
              alt="Stainless steel blending vessels and piping on the production line"
              className="absolute inset-0"
            />
          </div>
        </Reveal>
      </div>
    </SectionPanel>
  );
}
