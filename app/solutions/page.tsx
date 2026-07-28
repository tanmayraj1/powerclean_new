import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { RippleDivider } from "@/components/ui/RippleDivider";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/motion/Reveal";
import { heroImages, industries } from "@/lib/site-config";
import { solutions } from "@/lib/solutions";
import { IndustryIcon } from "@/components/sections/solutions/IndustryIcon";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Water-based cleaners, degreasers, solvent replacements, and rust preventives from Power Clean — matched to your metals, soils, equipment, and compliance requirements.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Solutions Built Around Your Line"
        eyebrow="POWER CLEAN SOLUTIONS"
        blurb="Water-based chemistry, solvent replacements, and rust protection — matched to your metals, soils, equipment, and compliance requirements."
        image={{
          src: heroImages.solutions,
          brief: "Hero photo — parts washer in operation, components in solution",
        }}
        minHeight="min(62vh, 540px)"
      />

      {/* ALL SOLUTIONS */}
      <div className="mx-auto max-w-[1320px] px-5 pb-5 pt-[clamp(40px,6vw,72px)]">
        <SectionHeading
          eyebrow="ALL SOLUTIONS"
          title="Chemistry for Every Process"
          lede="Each product is available in multiple grades and dilutions — and every recommendation starts with your sample parts in our lab."
          className="mb-11"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-5">
          {solutions.map((s, i) => (
            <SolutionCard
              key={s.slug}
              solution={s}
              delay={(i % 3) * 120}
              imageHeight={210}
              surface="white"
            />
          ))}
        </div>
      </div>

      <RippleDivider />

      {/* INDUSTRIES */}
      <SectionPanel id="industries" outerClassName="p-3">
        <SectionHeading
          eyebrow="INDUSTRIES"
          title="Every Industry, One Standard"
          lede="Different soils, substrates, and compliance regimes — the same measured approach."
          className="mb-[42px] max-w-[620px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.title}
              dir="up"
              delay={(i % 3) * 80}
              className="rounded-img-lg bg-card-tint p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-[5px] hover:shadow-[0_14px_32px_rgba(29,31,35,.08)]"
            >
              <div className="mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-green-tint">
                <IndustryIcon name={ind.icon} />
              </div>
              <h3 className="mb-2 text-base font-semibold text-navy">
                {ind.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-muted">{ind.body}</p>
            </Reveal>
          ))}
        </div>
      </SectionPanel>

      {/* CTA */}
      <CtaBanner
        eyebrow="NOT SURE WHERE TO START?"
        heading="Send Us a Sample Part"
        body="Our lab will test it against your soils and come back with a matched formulation, dilution, and trial plan."
        ctaLabel="Request a Consultation"
        ctaHref="/contact"
        imageBrief="Photo — mist of solution across a metal panel, backlit"
        wedge
      />
    </>
  );
}
