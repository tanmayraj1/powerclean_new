import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { MicroForm } from "@/components/ui/MicroForm";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  faqJsonLd,
  localServiceJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { locationPages, getLocation } from "@/lib/locations";
import { siteConfig } from "@/lib/site-config";
import { categories } from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return locationPages.map((l) => ({ city: l.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await props.params;
  const loc = getLocation(city);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    keywords: loc.keywords,
    alternates: { canonical: `/industrial-cleaning-chemicals/${loc.slug}` },
    openGraph: {
      type: "website",
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `${SITE_URL}/industrial-cleaning-chemicals/${loc.slug}`,
    },
    other: {
      "geo.placename": loc.city,
      "geo.position": `${loc.latitude};${loc.longitude}`,
      ICBM: `${loc.latitude}, ${loc.longitude}`,
    },
  };
}

export default async function LocationPage(props: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await props.params;
  const loc = getLocation(city);
  if (!loc) notFound();

  return (
    <>
      <JsonLd
        // NOTE: no LocalBusiness here. The root layout already emits both real
        // premises (Bangalore, Chennai) site-wide, so repeating one on its own
        // city page produced a duplicate @id. Service areas never get
        // LocalBusiness at all — only the Service entity below — because
        // claiming a branch that does not exist is dishonest and reads to
        // Google as doorway-page spam.
        data={[
          breadcrumbJsonLd([
            {
              name: "Where we supply",
              url: `${SITE_URL}/industrial-cleaning-chemicals`,
            },
            {
              name: loc.city,
              url: `${SITE_URL}/industrial-cleaning-chemicals/${loc.slug}`,
            },
          ]),
          localServiceJsonLd({
            city: loc.city,
            region: loc.region,
            slug: loc.slug,
            description: loc.answer,
            latitude: loc.latitude,
            longitude: loc.longitude,
          }),
          faqJsonLd(loc.faqs),
          webPageJsonLd({
            name: loc.metaTitle,
            description: loc.metaDescription,
            path: `/industrial-cleaning-chemicals/${loc.slug}`,
            about: ["Industrial cleaning chemicals", loc.city, loc.region],
          }),
        ]}
      />
      <PageHero
        title={`Industrial Cleaning Chemicals in ${loc.city}`}
        eyebrow={`${loc.region.toUpperCase()} · ${
          loc.hasPremises ? "OUR PREMISES" : "SERVICE AREA"
        }`}
        blurb={loc.intro}
        minHeight="min(54vh, 470px)"
        titleClassName="text-[clamp(28px,3.8vw,54px)]"
        image="/photos/dispatch-bay.webp"
        imageAlt={`Industrial cleaning chemicals supplied to plants in ${loc.city}`}
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1320px] px-5 pt-6 text-[12.5px] text-muted"
      >
        <TransitionLink
          href="/industrial-cleaning-chemicals"
          className="hover:text-green"
        >
          Where we supply
        </TransitionLink>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">{loc.city}</span>
      </nav>

      <SectionPanel outerClassName="px-3 pb-3 pt-6">
        {/* THE ANSWER */}
        <Reveal dir="up" as="div">
          <div className="page-answer mb-9 rounded-card-lg bg-navy p-[clamp(22px,3vw,36px)]">
            <h2 className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4FD98A]">
              The short answer
            </h2>
            <p className="max-w-[760px] text-[clamp(15.5px,1.7vw,18px)] font-medium leading-[1.6] text-white [text-wrap:pretty]">
              {loc.answer}
            </p>
          </div>
        </Reveal>

        {/* SUPPLY — stated plainly so no branch is implied */}
        <Reveal
          dir="up"
          as="div"
          className="mb-12 flex flex-wrap items-start gap-x-8 gap-y-4 rounded-card bg-green-tint p-7"
        >
          <div className="min-w-[220px] flex-1">
            <span className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-[0.1em] text-green-deep">
              How supply works
            </span>
            <p className="text-[14px] font-medium leading-[1.6] text-navy">
              {loc.supply}
            </p>
          </div>
          <div className="min-w-[200px]">
            <span className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-[0.1em] text-green-deep">
              Talk to us
            </span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="block text-[14px] font-semibold text-navy underline decoration-line-3 underline-offset-4 transition-colors hover:text-green"
            >
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.offices[0].phone.replace(/\s/g, "")}`}
              className="mt-1 block text-[14px] font-semibold text-navy underline decoration-line-3 underline-offset-4 transition-colors hover:text-green"
            >
              {siteConfig.contact.offices[0].phone}
            </a>
          </div>
        </Reveal>

        {/* CLUSTERS + SECTORS */}
        <div className="mb-14 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-9">
          <Reveal dir="left">
            <SectionHeading
              eyebrow="INDUSTRIAL AREAS"
              title={`Clusters We Supply Around ${loc.city}`}
              className="mb-6 max-w-[520px]"
            />
            <ul className="flex flex-wrap gap-2.5 pl-0">
              {loc.clusters.map((c) => (
                <li
                  key={c}
                  className="list-none rounded-full bg-white px-4 py-2 text-[13px] font-medium text-navy ring-1 ring-inset ring-line-2"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal dir="right">
            <SectionHeading
              eyebrow="SECTORS"
              title="What These Plants Make"
              className="mb-6 max-w-[520px]"
            />
            <div className="flex flex-col gap-2.5">
              {loc.sectors.map((s) => (
                <TransitionLink
                  key={s.href}
                  href={s.href}
                  className="group flex items-center justify-between gap-4 rounded-card bg-white px-5 py-4 text-[14px] font-semibold text-navy no-underline ring-1 ring-inset ring-line-2 transition-colors duration-300 hover:ring-green/30"
                >
                  {s.name}
                  <span className="text-green transition-transform group-hover:translate-x-0.5">
                    <Arrow />
                  </span>
                </TransitionLink>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionPanel>

      {/* RANGE */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="THE RANGE"
          title={`What Ships to ${loc.city}`}
          lede="Four product families, 41 products — supplied with dosing guidance and a safety data sheet, in packs from 35 L to 1000 L."
          className="mb-9 max-w-[660px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {categories.map((c, i) => (
            <Reveal key={c.key} dir="up" delay={i * 70}>
              <TransitionLink
                href={`/products?category=${c.key}`}
                className="group flex h-full flex-col rounded-card bg-white p-6 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1 hover:shadow-card-lg"
              >
                <span
                  className="mb-3 h-1.5 w-10 rounded-full"
                  style={{ background: c.accent }}
                />
                <h3 className="mb-2 text-[15.5px] font-semibold leading-[1.35] text-navy">
                  {c.label}
                </h3>
                <p className="mb-4 flex-1 text-[12.5px] leading-[1.6] text-muted-3">
                  {c.blurb.split(". ")[0]}.
                </p>
                <span
                  className="flex items-center gap-1.5 text-[12.5px] font-semibold"
                  style={{ color: c.accentText }}
                >
                  View products <Arrow />
                </span>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </SectionPanel>

      {/* MAP — only for the two real premises */}
      {loc.hasPremises ? (
        <div className="mx-auto max-w-[1320px] px-5 py-[clamp(40px,6vw,80px)]">
          <SectionHeading
            eyebrow="FIND US"
            title={`${loc.city} — ${loc.premisesLabel}`}
            className="mb-8 max-w-[620px]"
          />
          <Reveal dir="up" className="overflow-hidden rounded-card-lg">
            <MapEmbed
              bbox={siteConfig.maps.facilityBbox}
              title={`${loc.city} location map`}
              className="h-[380px] w-full"
            />
          </Reveal>
        </div>
      ) : null}

      {/* FAQ */}
      <div className="mx-auto max-w-[900px] px-5 py-[clamp(40px,6vw,80px)]">
        <SectionHeading
          eyebrow="QUESTIONS"
          title={`Supplying ${loc.city} — FAQ`}
          className="mb-9 max-w-[620px]"
        />
        <div className="flex flex-col gap-4">
          {loc.faqs.map((f, i) => (
            <Reveal
              key={f.q}
              dir="up"
              delay={Math.min(i, 4) * 70}
              className="rounded-card bg-white p-7 ring-1 ring-inset ring-line-2"
            >
              <h3 className="mb-2.5 text-[16px] font-semibold leading-[1.4] text-navy">
                {f.q}
              </h3>
              <p className="text-[14px] leading-[1.7] text-muted-3 [text-wrap:pretty]">
                {f.a}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* lead capture */}
      <div className="mx-auto max-w-[900px] px-5 pb-[clamp(30px,4vw,56px)]">
        <Reveal dir="up">
          <MicroForm
            context={`Location: ${loc.city}`}
            heading={`Supplying ${loc.city}`}
            blurb="Leave a number and tell us what you are cleaning — we will come back with a matched grade and a trial plan."
          />
        </Reveal>
      </div>

      <CtaBanner
        eyebrow="NEXT STEP"
        heading={`Run a Trial at Your ${loc.city} Plant`}
        body="Send a sample part with your soil and wash equipment details. The Bangalore lab matches a formulation and returns a dosing and trial plan before anything ships in volume."
        ctaLabel="Request a Trial"
        ctaHref="/contact"
        image="/photos/packaging.webp"
      />
    </>
  );
}
