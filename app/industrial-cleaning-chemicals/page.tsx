import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
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
import { locationPages } from "@/lib/locations";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cleaning Chemicals Supplier in India",
  description:
    "Industrial cleaning chemicals made in Bangalore and supplied across Karnataka, Tamil Nadu, Maharashtra, Telangana and Gujarat in 20 L–1000 L packs.",
  keywords: [
    "industrial cleaning chemicals india",
    "industrial cleaning chemicals supplier",
    "degreaser manufacturer india",
    "industrial cleaning solutions india",
  ],
  alternates: { canonical: "/industrial-cleaning-chemicals" },
  openGraph: {
    type: "website",
    title: "Industrial Cleaning Chemicals Across India — Power Clean",
    description:
      "Manufactured in Bangalore, supplied to manufacturing clusters across Karnataka, Tamil Nadu, Maharashtra, Telangana and Gujarat.",
    url: `${SITE_URL}/industrial-cleaning-chemicals`,
  },
};

export default function LocationsIndexPage() {
  const premises = locationPages.filter((l) => l.hasPremises);
  const areas = locationPages.filter((l) => !l.hasPremises);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            {
              name: "Industrial Cleaning Chemicals in India",
              url: `${SITE_URL}/industrial-cleaning-chemicals`,
            },
          ]),
          itemListJsonLd({
            name: "Power Clean service areas",
            description:
              "Cities and industrial clusters supplied with Power Clean industrial cleaning chemicals.",
            url: `${SITE_URL}/industrial-cleaning-chemicals`,
            items: locationPages.map((l) => ({
              name: `Industrial cleaning chemicals in ${l.city}`,
              url: `${SITE_URL}/industrial-cleaning-chemicals/${l.slug}`,
            })),
          }),
          webPageJsonLd({
            name: "Industrial Cleaning Chemicals Supplier in India",
            description:
              "Where Power Clean industrial cleaning chemicals are manufactured and which markets they are supplied to.",
            path: "/industrial-cleaning-chemicals",
            about: ["Industrial cleaning chemicals", "India"],
          }),
        ]}
      />
      <PageHero
        title="Industrial Cleaning Chemicals Across India"
        eyebrow="WHERE WE SUPPLY"
        blurb="Made in Bangalore, shipped to the manufacturing clusters that need it — with the same lab, the same batch control and the same trial process wherever your plant is."
        minHeight="min(54vh, 480px)"
        titleClassName="text-[clamp(30px,4.2vw,58px)]"
        image="/photos/dispatch-bay.webp"
        imageAlt="Industrial containers staged for dispatch to customer plants across India"
      />

      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <div className="page-answer mb-11 max-w-[860px]">
          <p className="text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-muted-3 [text-wrap:pretty]">
            Power Clean is manufactured by Roovel Solutions Pvt. Ltd. at its
            ISO 9001 certified plant in Bangalore, and supplied across
            Karnataka, Tamil Nadu, Maharashtra, Telangana and Gujarat in packs
            from 20&nbsp;litre pails to 1000&nbsp;litre containers. Formulation,
            batch-wise quality control and production all sit on one site, so
            the chemistry that passes a trial is the chemistry that ships.
          </p>
        </div>

        {/* REAL PREMISES */}
        <SectionHeading
          eyebrow="OUR PREMISES"
          title="Two Addresses, One Plant"
          lede="Roovel Solutions has a manufacturing site in Bangalore and its registered office in Chennai. Everything else below is a market we ship to, not a branch."
          className="mb-9 max-w-[680px]"
        />
        <div className="mb-14 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {premises.map((l, i) => (
            <Reveal key={l.slug} dir="up" delay={i * 90}>
              <TransitionLink
                href={`/industrial-cleaning-chemicals/${l.slug}`}
                className="group flex h-full flex-col rounded-card-lg bg-navy p-8 no-underline transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg"
              >
                <span className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[#4FD98A]">
                  {l.premisesLabel}
                </span>
                <h2 className="mb-2.5 text-[clamp(22px,2.4vw,28px)] font-semibold text-white">
                  {l.city}
                </h2>
                <p className="mb-6 flex-1 text-[13.5px] leading-[1.68] text-white/75">
                  {l.intro}
                </p>
                <span className="flex items-center gap-2 text-[13.5px] font-semibold text-white">
                  See {l.city} details <Arrow />
                </span>
              </TransitionLink>
            </Reveal>
          ))}
        </div>

        {/* SERVICE AREAS */}
        <SectionHeading
          eyebrow="SERVICE AREAS"
          title="Markets We Ship To"
          lede="Supplied from the Bangalore plant. Each page covers the industrial clusters in that market, the sectors that dominate it, and the chemistry those plants ask for."
          className="mb-9 max-w-[680px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
          {areas.map((l, i) => (
            <Reveal key={l.slug} dir="up" delay={Math.min(i, 5) * 60}>
              <TransitionLink
                href={`/industrial-cleaning-chemicals/${l.slug}`}
                className="group flex h-full flex-col rounded-card bg-white p-6 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow,ring-color] duration-[350ms] hover:-translate-y-1 hover:shadow-card-lg hover:ring-green/25"
              >
                <h2 className="mb-1 text-[17px] font-semibold text-navy">
                  {l.city}
                </h2>
                <span className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                  {l.region}
                </span>
                <p className="mb-5 flex-1 text-[12.5px] leading-[1.6] text-muted-3">
                  {l.clusters.slice(0, 3).join(" · ")}
                </p>
                <span className="flex items-center gap-1.5 text-[12.5px] font-semibold text-navy transition-colors group-hover:text-green">
                  View {l.city} <Arrow />
                </span>
              </TransitionLink>
            </Reveal>
          ))}
        </div>

        <Reveal dir="up" delay={140} className="mt-10 rounded-card-lg bg-card-tint p-7">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="max-w-[600px]">
              <h2 className="mb-1.5 text-[17px] font-semibold text-navy">
                Somewhere else in India?
              </h2>
              <p className="text-[13.5px] leading-[1.65] text-muted-3">
                These are the markets we ship to most. If your plant is
                elsewhere, tell us where and what you are cleaning — supply is
                arranged case by case. Reach us on {siteConfig.contact.email}.
              </p>
            </div>
            <TransitionLink
              href="/contact"
              className="group rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              Ask about supply <Arrow />
            </TransitionLink>
          </div>
        </Reveal>
      </SectionPanel>

      <CtaBanner
        eyebrow="START HERE"
        heading="Trial It on Your Own Line"
        body="Trials normally start with a single 20 L pail, after the lab has matched a formulation to your part and soil."
        ctaLabel="Request a Trial"
        ctaHref="/contact"
        image="/photos/packaging.webp"
      />
    </>
  );
}
