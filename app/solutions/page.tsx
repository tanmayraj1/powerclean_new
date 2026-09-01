import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { RippleDivider } from "@/components/ui/RippleDivider";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/lib/site-config";
import { solutions } from "@/lib/solutions";
import { methods } from "@/lib/methods";
import { Arrow } from "@/components/ui/Arrow";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { IndustryIcon } from "@/components/sections/solutions/IndustryIcon";
import { TactPrinciple } from "@/components/sections/solutions/TactPrinciple";
import { TceComparison } from "@/components/sections/solutions/TceComparison";

export const metadata: Metadata = {
  title: "Industrial Cleaning Solutions by Process",
  description:
    "Water-based cleaners, degreasers, solvent replacements and rust preventives — matched to your metals, soils, wash equipment and compliance.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Solutions", url: `${SITE_URL}/solutions` }]),
          itemListJsonLd({
            name: "Power Clean cleaning solutions",
            description:
              "Four cleaning methods and six flagship products, with dilution, process and packaging detail.",
            url: `${SITE_URL}/solutions`,
            items: [
              ...methods.map((m) => ({
                name: m.name,
                url: `${SITE_URL}/solutions/${m.slug}`,
              })),
              ...solutions.map((s) => ({
                name: s.name,
                url: `${SITE_URL}/solutions/${s.slug}`,
              })),
            ],
          }),
          webPageJsonLd({
            name: "Industrial Cleaning Solutions",
            description:
              "Six flagship Power Clean products, each with the substrate, soil, wash process and dilution it is built for.",
            path: "/solutions",
            about: ["Industrial cleaning chemicals", "Degreasers"],
          }),
        ]}
      />
      <PageHero
        title="Solutions Built Around Your Line"
        eyebrow="POWER CLEAN SOLUTIONS"
        blurb="Water-based chemistry, solvent replacements, and rust protection — matched to your metals, soils, equipment, and compliance requirements."
        minHeight="min(62vh, 540px)"
        image="/photos/solution-lf.webp"
        imageAlt="CNC machining centre flooding a steel component with cutting coolant"
      />

      {/* BY METHOD — the client's architecture organises Solutions by cleaning
          method; these four sit above the product deep-dives because most
          people arrive knowing their process, not our product codes. */}
      <div className="mx-auto max-w-[1320px] px-5 pb-5 pt-[clamp(40px,6vw,72px)]">
        <SectionHeading
          eyebrow="BY METHOD"
          title="Start With Your Process"
          lede="Ultrasonic, spray, solvent replacement or a cleanliness specification — each page covers how the method works, what goes wrong, and the grades that suit it."
          className="mb-10 max-w-[680px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {methods.map((m, i) => (
            <Reveal key={m.slug} dir="up" delay={Math.min(i, 4) * 70}>
              <TransitionLink
                href={`/solutions/${m.slug}`}
                className="group flex h-full flex-col rounded-card bg-white p-6 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow,ring-color] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg hover:ring-green/25"
              >
                <h3 className="mb-2.5 text-[17px] font-semibold leading-[1.3] text-navy">
                  {m.name}
                </h3>
                <p className="mb-5 flex-1 text-[13px] leading-[1.62] text-muted-3">
                  {m.answer.split(". ")[0]}.
                </p>
                <span className="flex items-center gap-1.5 text-[12.5px] font-semibold text-navy transition-colors group-hover:text-green">
                  Open the method <Arrow />
                </span>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ALL SOLUTIONS */}
      <div className="mx-auto max-w-[1320px] px-5 pb-5 pt-[clamp(24px,3vw,40px)]">
        <SectionHeading
          eyebrow="FEATURED PRODUCTS"
          title="Six Grades in Depth"
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
            />
          ))}
        </div>
      </div>

      {/* TACT PRINCIPLE — real methodology */}
      <TactPrinciple />

      <RippleDivider />

      {/* INDUSTRIES — navy dark moment */}
      <SectionPanel id="industries" tone="navy" outerClassName="p-3">
        <SectionHeading
          eyebrow="INDUSTRIES"
          title="Every Industry, One Standard"
          lede="Different soils, substrates, and compliance regimes — the same measured approach."
          light
          className="mb-[42px] max-w-[620px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.title}
              dir="up"
              delay={(i % 3) * 80}
              className="rounded-img-lg bg-white/6 p-6 ring-1 ring-white/10 transition-[transform,background] duration-300 hover:-translate-y-[5px] hover:bg-white/10"
            >
              <div className="mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-green/20">
                <IndustryIcon name={ind.icon} light />
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">
                {ind.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-white/65">
                {ind.body}
              </p>
            </Reveal>
          ))}
        </div>
      </SectionPanel>

      {/* TCE COMPARISON — real replace-tce content */}
      <TceComparison />

      {/* CTA */}
      <CtaBanner
        eyebrow="NOT SURE WHERE TO START?"
        heading="Send Us a Sample Part"
        body="Our lab will test it against your soils and come back with a matched formulation, dilution, and trial plan."
        ctaLabel="Request a Consultation"
        ctaHref="/contact"
        imageBrief="Photo — mist of solution across a metal panel, backlit"
        wedge
        image="/photos/gallery-4.webp"
      />
    </>
  );
}
