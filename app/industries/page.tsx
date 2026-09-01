import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { industryPages } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Cleaning Chemicals by Industry",
  description:
    "Cleaning chemistry matched by sector — automotive, bearings, aerospace, foundry, electronics, railways, general engineering and plant care.",
  keywords: [
    "industrial cleaning chemicals by industry",
    "automotive cleaning chemicals",
    "bearing cleaning chemical",
    "foundry cleaning chemical india",
  ],
  alternates: { canonical: "/industries" },
  openGraph: {
    type: "website",
    title: "Industries Served — Power Clean",
    description:
      "Cleaning chemistry matched to the soils, metals and specifications of eight manufacturing sectors.",
    url: `${SITE_URL}/industries`,
  },
};

export default function IndustriesIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Industries", url: `${SITE_URL}/industries` },
          ]),
          itemListJsonLd({
            name: "Industries served by Power Clean",
            description:
              "Manufacturing sectors supplied with matched industrial cleaning chemistry.",
            url: `${SITE_URL}/industries`,
            items: industryPages.map((i) => ({
              name: i.name,
              url: `${SITE_URL}/industries/${i.slug}`,
            })),
          }),
          webPageJsonLd({
            name: "Industries We Serve",
            description:
              "Industrial cleaning chemistry matched by manufacturing sector across India.",
            path: "/industries",
            about: industryPages.map((i) => i.name),
          }),
        ]}
      />
      <PageHero
        title="Chemistry Matched to Your Sector"
        eyebrow="INDUSTRIES"
        blurb="Every industry brings its own metals, soils and specifications. These are the eight we work in most, and what each one actually needs."
        minHeight="min(52vh, 460px)"
        image="/photos/production-hall.webp"
        imageAlt="Industrial manufacturing plant served by Power Clean cleaning chemicals"
      />

      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <div className="page-answer mb-10 max-w-[840px]">
          <p className="text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-muted-3 [text-wrap:pretty]">
            The variables that decide a cleaning programme — substrate, soil,
            wash equipment, foam tolerance and cleanliness specification —
            cluster by industry. An automotive line and a bearing plant have
            different failure modes, and they need different chemistry even
            when both are washing steel.
          </p>
        </div>

        <SectionHeading
          eyebrow="BY SECTOR"
          title="Find Your Application"
          lede="Each page covers the real problems in that sector, the matched grades, and a process specification you can compare against your own line."
          className="mb-10 max-w-[660px]"
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {industryPages.map((ind, i) => (
            <Reveal key={ind.slug} dir="up" delay={Math.min(i, 5) * 70}>
              <TransitionLink
                href={`/industries/${ind.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-card bg-white no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow,ring-color] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg hover:ring-green/25"
              >
                <div className="relative h-[168px] overflow-hidden">
                  <ImageSlot
                    brief={ind.photoAlt}
                    src={ind.photo}
                    alt={ind.photoAlt}
                    sizes="(max-width: 940px) 100vw, 33vw"
                    className="absolute inset-0"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-2.5 text-[17px] font-semibold leading-[1.32] text-navy">
                    {ind.name}
                  </h2>
                  <p className="mb-5 flex-1 text-[13px] leading-[1.65] text-muted-3">
                    {ind.answer.split(". ")[0]}.
                  </p>
                  <span className="flex items-center justify-between text-[13px] font-semibold text-navy transition-colors group-hover:text-green">
                    See the chemistry
                    <span className="font-mono text-[11px] font-normal text-muted">
                      {ind.applications.length} applications
                    </span>
                  </span>
                </div>
              </TransitionLink>
            </Reveal>
          ))}
        </div>

        <Reveal
          dir="up"
          delay={140}
          className="mt-10 rounded-card-lg bg-card-tint p-7"
        >
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="max-w-[560px]">
              <h2 className="mb-1.5 text-[17px] font-semibold text-navy">
                Not listed here?
              </h2>
              <p className="text-[13.5px] leading-[1.65] text-muted-3">
                The full catalogue runs to 41 products across four families, and
                the selection matrix filters them by substrate, soil and wash
                process.
              </p>
            </div>
            <TransitionLink
              href="/products"
              className="group rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              Open the catalogue <Arrow />
            </TransitionLink>
          </div>
        </Reveal>
      </SectionPanel>

      <CtaBanner
        eyebrow="TALK TO US"
        heading="Bring Us Your Hardest Cleaning Problem"
        body="Send a sample part or describe your process — our lab replies with a matched approach and a trial plan."
        ctaLabel="Contact Our Team"
        ctaHref="/contact"
        image="/photos/qc-lab.webp"
      />
    </>
  );
}
