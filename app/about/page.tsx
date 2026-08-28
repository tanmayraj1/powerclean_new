import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RippleDivider } from "@/components/ui/RippleDivider";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { DrawPath } from "@/components/motion/DrawPath";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { Milestones } from "@/components/sections/about/Milestones";
import { Capabilities } from "@/components/sections/about/Capabilities";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Industrial Cleaning Chemical Manufacturer in Bangalore",
  description:
    "Power Clean is a brand of Roovel Solutions Pvt. Ltd. — ISO 9001 certified, Bangalore-based, with 25+ years of precision cleaning solutions for Indian manufacturing.",
  alternates: { canonical: "/about" },
};

const MISSION_POINTS = [
  "Replace hazardous solvents with safer, water-based chemistry.",
  "Prove every recommendation with a measured plant trial.",
  "Cut cost-per-part through dosing control and bath life extension.",
  "Keep every customer audit-ready with complete documentation.",
];

const STATS = [
  {
    count: siteConfig.stats.yearsOfPrecisionCleaning,
    suffix: "+",
    caption: "Years of precision cleaning", // REAL
  },
  {
    count: siteConfig.stats.productLines,
    suffix: "",
    caption: "Products in the range", // REAL
  },
  {
    count: siteConfig.stats.seriesCount,
    suffix: "",
    caption: "Product series",
  },
  {
    count: siteConfig.stats.applicationsServed,
    suffix: "",
    caption: "Applications served",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Engineering Cleaner Manufacturing"
        eyebrow="ABOUT POWER CLEAN"
        blurb="Helping Indian manufacturers clean better, spend less, and meet every compliance bar — with chemistry built in-house."
        minHeight="min(66vh, 560px)"
        image="/photos/production-hall.webp"
        imageAlt=""
      />

      {/* VISION / MISSION */}
      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <SectionHeading
          eyebrow="VISION & MISSION"
          title="Precision With Purpose"
          lede="We believe industrial cleaning should be measured, sustainable, and engineered — never guessed."
          className="mb-[42px] max-w-[620px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-stretch gap-5">
          <Reveal
            dir="left"
            className="flex flex-col justify-between gap-[30px] rounded-card-lg bg-azure p-[30px]"
          >
            <p className="text-[clamp(19px,1.9vw,24px)] font-medium leading-[1.45] text-navy [text-wrap:pretty]">
              To be the most trusted partner for sustainable industrial
              cleaning — advancing how modern plants clean, protect, and
              perform.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-navy">
                Our Vision
              </span>
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white">
                ↗
              </span>
            </div>
          </Reveal>
          <Reveal
            dir="up"
            delay={120}
            className="rounded-card-lg bg-card-tint p-7"
          >
            <div className="mb-5 text-sm font-semibold text-navy">
              Process Economics
            </div>
            <svg
              viewBox="0 0 300 100"
              className="mb-[18px] h-auto w-full"
              aria-hidden="true"
            >
              <path d="M0,88 L300,88" stroke="#e2e6ec" strokeWidth="1" />
              <DrawPath
                d="M4,80 C40,76 60,50 95,54 C130,58 152,26 195,32 C238,38 262,12 296,16"
                stroke="#00A651"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <div className="flex gap-8">
              <div>
                <div className="text-[30px] font-bold text-navy">
                  <CountUp to={100} prefix="1:" />
                </div>
                <div className="text-xs text-muted">maximum dilution ratio</div>
              </div>
              <div>
                <div className="text-[30px] font-bold text-navy">
                  <CountUp to={65} suffix="°C" />
                </div>
                <div className="text-xs text-muted">
                  optimum wash temperature, vs 100 °C for TCE
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal
            dir="right"
            delay={200}
            className="rounded-card-lg bg-card-tint p-7"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[15px] font-semibold text-navy">
                Performance-Driven Mission
              </span>
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-green-tint text-green">
                ◎
              </span>
            </div>
            <div className="flex flex-col gap-3.5">
              {MISSION_POINTS.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <span className="font-bold text-green">+</span>
                  <span className="text-[13.5px] leading-[1.55] text-muted-3">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionPanel>

      {/* STORY + STATS */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-9">
          <Reveal dir="left">
            <Eyebrow label="OUR STORY" className="mb-3.5" />
            <p className="mb-[22px] text-[clamp(19px,2vw,25px)] font-medium leading-[1.5] text-ink [text-wrap:pretty]">
              For over 25 years, Power Clean has helped Indian plants achieve
              precision cleaning — with technical know-how originally sourced
              from the USA and chemistry engineered in-house.
            </p>
            <p className="mb-7 text-[14.5px] leading-[1.7] text-muted-3">
              We don&apos;t just sell a chemical. Roovel Solutions engineers the
              complete cleaning process — the right chemical, the right
              machine, and the right process, delivered as one solution — down
              to millipore-level cleanliness on your components.
            </p>
            <TransitionLink
              href="/solutions"
              className="inline-block rounded-full border-[1.5px] border-navy px-[26px] py-3 text-sm font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              Explore Our Solutions
            </TransitionLink>
          </Reveal>
          <Reveal dir="right">
            <div className="mb-[26px] grid grid-cols-2 gap-[26px]">
              {STATS.map((s) => (
                <div key={s.caption}>
                  <div className="text-[clamp(34px,3.4vw,46px)] font-bold text-navy">
                    <CountUp to={s.count} suffix={s.suffix} />
                  </div>
                  <div className="text-[13px] text-muted-3">{s.caption}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              <div className="relative h-[170px] overflow-hidden rounded-img-lg">
                <ImageSlot
                  brief="Photo — early lab bench, formulation work"
                  src="/photos/story-lab.webp"
                  alt="Archive photograph of early formulation work in the chemistry laboratory"
                  className="absolute inset-0"
                />
              </div>
              <div className="relative h-[170px] overflow-hidden rounded-img-lg">
                <ImageSlot
                  brief="Photo — today's production facility"
                  src="/photos/story-facility.webp"
                  alt="Chemists developing industrial degreaser formulations in the Power Clean laboratory"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </SectionPanel>

      {/* CTA STRIP */}
      <CtaBanner
        eyebrow="TALK TO US"
        heading="Bring Us Your Hardest Cleaning Problem"
        body="Send a sample part or describe your process — our lab will respond with a matched approach."
        ctaLabel="Contact Our Team"
        ctaHref="/contact"
        imageBrief="Photo — wide shot of cleaning solution application, dramatic light"
        extra={
          <span className="text-[13.5px] text-muted-3">
            ✉ {siteConfig.contact.email}
          </span>
        }
        image="/photos/story-facility.webp"
      />

      <RippleDivider />

      <Capabilities />

      {/* MILESTONES — real anchors from company records */}
      <Milestones />

      {/* FACILITIES + MAP */}
      <div className="mx-auto max-w-[1320px] px-5 py-[clamp(40px,6vw,80px)]">
        <SectionHeading
          eyebrow="FACILITIES"
          title="Where Power Clean Is Made"
          className="mb-10 max-w-[620px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-stretch gap-5">
          <Reveal
            dir="left"
            className="relative min-h-[340px] overflow-hidden rounded-card-lg"
          >
            <ImageSlot
              brief="Photo — production hall interior, blending vessels"
              src="/photos/production-hall.webp"
              alt="Production hall with stainless process vessels at the Bangalore manufacturing facility"
              className="absolute inset-0"
            />
            <div className="pointer-events-none absolute bottom-3.5 left-3.5 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-navy backdrop-blur-[8px]">
              Production Hall — Unit 1
            </div>
          </Reveal>
          <Reveal
            dir="up"
            className="flex flex-col gap-3.5 rounded-card-lg bg-white p-7"
          >
            <h3 className="text-xl font-semibold text-navy">
              Roovel Solutions — Manufacturing &amp; R&amp;D
            </h3>
            <div className="flex items-center gap-2.5 text-[13.5px] text-muted-3">
              ✉ &nbsp;{siteConfig.contact.email}
            </div>
            <div className="flex items-center gap-2.5 text-[13.5px] text-muted-3">
              ◎ &nbsp;ISO 9001 Certified · Formulation Lab · QC Lab
            </div>
            <div className="flex items-start gap-2.5 text-[13.5px] leading-[1.6] text-muted-3">
              ⌂ &nbsp;{siteConfig.contact.address}
            </div>
            <div className="mt-1.5 min-h-[180px] flex-1 overflow-hidden rounded-img-md">
              <MapEmbed
                bbox={siteConfig.maps.facilityBbox}
                title="Facility location map"
                className="h-full min-h-[180px] w-full"
              />
            </div>
          </Reveal>
          <Reveal dir="right" className="grid gap-3.5">
            <div className="relative min-h-[160px] overflow-hidden rounded-img-lg">
              <ImageSlot
                brief="Photo — QC laboratory"
                src="/photos/qc-lab.webp"
                alt="Quality control chemist testing a Power Clean cleaning chemical batch in the laboratory"
                className="absolute inset-0"
              />
            </div>
            <div className="relative min-h-[160px] overflow-hidden rounded-img-lg">
              <ImageSlot
                brief="Photo — drum filling & dispatch bay"
                src="/photos/dispatch-bay.webp"
                alt="IBC totes and industrial containers staged for dispatch to customer plants"
                className="absolute inset-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
