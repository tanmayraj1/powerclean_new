import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { siteConfig, testimonials, caseStudies } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Clients & Testimonials",
  description:
    "Manufacturers using Power Clean industrial cleaning chemicals — BOSCH, TVS, Bharat Forge and the Murugappa Group among them, with results in their own words.",
  keywords: [
    "power clean customers",
    "industrial cleaning chemical clients india",
    "roovel solutions customers",
  ],
  alternates: { canonical: "/clients" },
  openGraph: {
    type: "website",
    title: "Clients & Testimonials · Power Clean",
    description:
      "The manufacturers running Power Clean chemistry on their lines, and what changed when they switched.",
    url: `${SITE_URL}/clients`,
  },
};

export default function ClientsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Clients", url: `${SITE_URL}/clients` }]),
          itemListJsonLd({
            name: "Power Clean clients",
            description:
              "Manufacturers using Power Clean industrial cleaning chemicals.",
            url: `${SITE_URL}/clients`,
            items: siteConfig.clients.map((c) => ({
              name: c.name,
              url: `${SITE_URL}/clients`,
            })),
          }),
          webPageJsonLd({
            name: "Power Clean clients and testimonials",
            description:
              "The manufacturers running Power Clean chemistry, and results reported by them.",
            path: "/clients",
            about: ["Power Clean", "Industrial cleaning chemicals"],
          }),
        ]}
      />
      <PageHero
        title="The Plants That Run On It"
        eyebrow="CLIENTS"
        blurb="Power Clean chemistry runs in some of India's most demanding manufacturing plants. These are the names, and the results they reported."
        minHeight="min(52vh, 460px)"
        image="/photos/production-hall.webp"
        imageAlt="Production hall with stainless process vessels at the Bangalore facility"
      />

      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <div className="page-answer mx-auto mb-11 max-w-[860px]">
          <p className="text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-muted-3 [text-wrap:pretty]">
            Power Clean is trusted by BOSCH, TVS, Bharat Forge and the
            Murugappa Group, among others, across automotive, bearing,
            aerospace and general engineering manufacturing. Roovel Solutions
            has been replacing trichloroethylene and other toxic solvents in
            Indian plants since 2000, and manufactures to an ISO 9001 certified
            system in Bangalore.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-6">
          {siteConfig.clients.map((c, i) => (
            <Reveal key={c.name} dir="up" delay={(i % 4) * 60}>
              <ClientLogo name={c.name} file={c.file} />
            </Reveal>
          ))}
        </div>

        <Reveal dir="up" as="p" className="mx-auto max-w-[680px] text-center text-[12.5px] leading-[1.7] text-muted">
          Company names and marks are the property of their respective owners
          and are shown to identify customers of Roovel Solutions Pvt. Ltd.
        </Reveal>
      </SectionPanel>

      {/* WHAT THEY REPORTED */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="IN THEIR WORDS"
          title="What Changed on the Line"
          lede="Results as reported by the plants that ran the trials."
          className="mb-10 max-w-[620px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              dir="up"
              delay={Math.min(i, 5) * 70}
              className="flex h-full flex-col rounded-card-lg bg-white p-7 ring-1 ring-inset ring-line-2"
            >
              <p className="mb-5 flex-1 text-[14.5px] leading-[1.7] text-ink [text-wrap:pretty]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="text-[14px] font-semibold text-navy">
                  {t.name}
                </div>
                <div className="text-[12.5px] text-muted">{t.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionPanel>

      {/* MEASURED RESULTS */}
      <div className="mx-auto max-w-[1320px] px-5 py-[clamp(40px,6vw,72px)]">
        <SectionHeading
          eyebrow="MEASURED RESULTS"
          title="Numbers From Real Trials"
          className="mb-10 max-w-[620px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {caseStudies.map((cs, i) => (
            <Reveal
              key={cs.title}
              dir="up"
              delay={Math.min(i, 4) * 70}
              className="rounded-card-lg bg-white p-7 ring-1 ring-inset ring-line-2"
            >
              <span className="mb-3 block font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
                {cs.kind}
              </span>
              <h3 className="mb-2.5 text-[16.5px] font-semibold leading-[1.32] text-navy">
                {cs.title}
              </h3>
              <p className="text-[13.5px] leading-[1.68] text-muted-3">
                {cs.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal dir="up" delay={140} className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-card-lg bg-card-tint p-7">
          <div className="max-w-[560px]">
            <div className="mb-1 text-[34px] font-bold leading-none text-navy">
              <CountUp to={siteConfig.stats.yearsOfPrecisionCleaning} suffix="+" />
              <span className="ml-2 text-[15px] font-semibold text-green-deep">
                years of precision cleaning
              </span>
            </div>
            <p className="text-[13.5px] leading-[1.65] text-muted-3">
              Read the full case studies, including the wash parameters that
              produced each result.
            </p>
          </div>
          <TransitionLink
            href="/resources/case-studies"
            className="group rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
          >
            Read the case studies <Arrow />
          </TransitionLink>
        </Reveal>
      </div>

      <CtaBanner
        eyebrow="JOIN THEM"
        heading="Run the Same Trial on Your Line"
        body="Send a sample part and we will match a formulation, agree pass/fail criteria up front, and run the trial on your own equipment."
        ctaLabel="Request a Free Consultation"
        ctaHref="/get-consultation"
        image="/photos/qc-lab.webp"
      />
    </>
  );
}
