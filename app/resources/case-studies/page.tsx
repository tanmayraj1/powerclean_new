import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { MicroForm } from "@/components/ui/MicroForm";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { caseStudies } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Industrial Cleaning Case Studies",
  description:
    "Measured results from Power Clean plant trials — white-rust rejection cut from 3.2% to 0.4%, TCE eliminated, bath life extended and cost per part reduced.",
  keywords: [
    "industrial cleaning case study",
    "degreaser trial results",
    "white rust reduction case study",
    "TCE replacement case study",
  ],
  alternates: { canonical: "/resources/case-studies" },
  openGraph: {
    type: "website",
    title: "Case Studies · Power Clean",
    description:
      "Measured results from real plant trials, with the wash parameters that produced them.",
    url: `${SITE_URL}/resources/case-studies`,
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Resources", url: `${SITE_URL}/resources` },
            {
              name: "Case studies",
              url: `${SITE_URL}/resources/case-studies`,
            },
          ]),
          itemListJsonLd({
            name: "Power Clean case studies",
            description:
              "Measured results from industrial cleaning trials on customer lines.",
            url: `${SITE_URL}/resources/case-studies`,
            items: caseStudies.map((c) => ({
              name: c.title,
              url: `${SITE_URL}/resources/case-studies`,
            })),
          }),
          webPageJsonLd({
            name: "Industrial cleaning case studies",
            description:
              "Measured outcomes from Power Clean plant trials across Indian manufacturing.",
            path: "/resources/case-studies",
            about: ["Industrial cleaning chemicals", "Plant trials"],
          }),
        ]}
      />
      <PageHero
        title="Results From Real Plant Trials"
        eyebrow="CASE STUDIES"
        blurb="Every recommendation we make is proved on the customer's own line. These are the outcomes they measured."
        minHeight="min(50vh, 440px)"
        image="/photos/gallery-3.webp"
        imageAlt="Rows of machined steel bearing races after degreasing"
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1320px] px-5 pt-6 text-[12.5px] text-muted"
      >
        <TransitionLink href="/resources" className="hover:text-green">
          Resources
        </TransitionLink>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">Case studies</span>
      </nav>

      <SectionPanel outerClassName="px-3 pb-3 pt-6">
        <div className="page-answer mx-auto mb-11 max-w-[860px]">
          <p className="text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-muted-3 [text-wrap:pretty]">
            A trial starts with a sample part, agreed pass/fail criteria and an
            engineer on site. The results below are as reported by the plants
            that ran them — defect rates, solvent elimination and process
            consolidation, measured against what the line was doing before.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {caseStudies.map((cs, i) => (
            <Reveal
              key={cs.title}
              dir="up"
              delay={Math.min(i, 4) * 80}
              className="flex h-full flex-col rounded-card-lg bg-white p-8 ring-1 ring-inset ring-line-2"
            >
              <span className="mb-4 inline-flex w-fit rounded-full bg-green-tint px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
                {cs.kind}
              </span>
              <h2 className="mb-3 text-[clamp(18px,2vw,22px)] font-semibold leading-[1.28] text-navy">
                {cs.title}
              </h2>
              <p className="text-[14px] leading-[1.72] text-muted-3 [text-wrap:pretty]">
                {cs.body}
              </p>
            </Reveal>
          ))}
        </div>
      </SectionPanel>

      {/* HOW A TRIAL WORKS + LEAD CAPTURE */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-9">
          <Reveal dir="left">
            <SectionHeading
              eyebrow="HOW A TRIAL WORKS"
              title="Proved Before You Commit"
              className="mb-7 max-w-[520px]"
            />
            <ol className="flex flex-col gap-4 pl-0">
              {TRIAL_STEPS.map((s, i) => (
                <li key={s.name} className="flex list-none gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy font-mono text-[11.5px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="mb-1 block text-[15px] font-semibold text-navy">
                      {s.name}
                    </span>
                    <span className="block text-[13.5px] leading-[1.65] text-muted-3">
                      {s.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <TransitionLink
              href="/get-consultation"
              className="group mt-7 inline-block rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              Book a free consultation <Arrow />
            </TransitionLink>
          </Reveal>
          <Reveal dir="right">
            <MicroForm
              context="Case studies"
              heading="Want a result like these on your line?"
              blurb="Tell us what you are cleaning today and we will come back with a matched grade and a trial plan."
            />
          </Reveal>
        </div>
      </SectionPanel>

      <CtaBanner
        eyebrow="TALK TO US"
        heading="Bring Us Your Hardest Cleaning Problem"
        body="Send a sample part or describe your process — our lab replies with a matched approach and measurable criteria."
        ctaLabel="Contact Our Team"
        ctaHref="/contact"
        image="/photos/production-hall.webp"
      />
    </>
  );
}

/** The real four-step trial process, as run on customer lines. */
const TRIAL_STEPS = [
  {
    name: "Send a sample part",
    text: "With a description of the soil, the substrate and the wash equipment it runs through today.",
  },
  {
    name: "The lab matches a formulation",
    text: "Substrate and soil compatibility are tested on your actual component before anything is recommended.",
  },
  {
    name: "Agree pass/fail up front",
    text: "Cleanliness standard, cycle time and cost target are set before the trial, not argued afterwards.",
  },
  {
    name: "Run it on your own line",
    text: "Supervised, from a 20 L pail, on your equipment. You move forward only if the numbers clear the bar.",
  },
];
