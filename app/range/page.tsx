import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Arrow } from "@/components/ui/Arrow";
import { Magnetic } from "@/components/motion/Magnetic";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { RangeMap } from "@/components/sections/products/RangeMap";
import { MicroForm } from "@/components/ui/MicroForm";
import { BROWSE_BY } from "@/lib/browse-by";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "The Complete Industrial Cleaning Product Range",
  description:
    "Scanned our card? The complete Power Clean range — aqueous cleaners, cooling-water treatment, solvent degreasers and rust protection.",
  keywords: [
    "power clean product range",
    "industrial cleaning chemicals list",
    "industrial degreaser range india",
    "cleaning chemical catalogue qr",
  ],
  alternates: { canonical: "/range" },
};

/**
 * QR gateway — the URL printed on visiting cards and brochures. Mobile-first:
 * a compact welcome, the range chart, then big tap targets for catalogue,
 * WhatsApp, phone and email.
 */
/** Real published figures — the numbers a buyer asks for first. */
const AT_A_GLANCE = [
  { label: "Products", value: "41 across 4 families" },
  { label: "Working strength", value: "1–5% (1:100 to 5:100)" },
  { label: "Wash temperature", value: "55–65 °C" },
  { label: "Rust protection", value: "7–15 days indoors" },
  { label: "Packing", value: "20 L to 1000 L" },
  { label: "Quality system", value: "ISO 9001 certified" },
];

const TRIAL_STEPS = [
  {
    name: "Send a sample part",
    text: "With the soil, the substrate and the wash equipment it runs through today.",
  },
  {
    name: "The lab matches a formulation",
    text: "Compatibility is tested on your actual component, not on a generic coupon.",
  },
  {
    name: "Agree pass/fail up front",
    text: "Cleanliness standard, cycle time and cost target set before the trial runs.",
  },
  {
    name: "Run it on your own line",
    text: "Supervised, from a single 20 L pail. Scale to bulk only once it is proved.",
  },
];

export default function RangePage() {
  const QUICK_ACTIONS = [
    {
      label: "Chat on WhatsApp",
      sub: "Fastest reply for enquiries",
      href: siteConfig.contact.whatsapp,
      external: true,
      icon: "✆",
    },
    {
      label: `Call ${siteConfig.contact.phones[0]}`,
      sub: "Sales & technical support",
      href: `tel:${siteConfig.contact.phones[0].replace(/-/g, "")}`,
      external: true,
      icon: "☏",
    },
    {
      label: siteConfig.contact.email,
      sub: "Replies within 24 hours",
      href: `mailto:${siteConfig.contact.email}`,
      external: true,
      icon: "✉",
    },
    {
      label: "Visit the Website",
      sub: "About us, solutions & case studies",
      href: "/",
      external: false,
      icon: "⌂",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Explore the Range", url: `${SITE_URL}/range` },
          ]),
          webPageJsonLd({
            name: "The complete Power Clean product range",
            description:
              "41 industrial cleaning products across four families, with dilutions, temperatures and pack sizes.",
            path: "/range",
            about: ["Industrial cleaning chemicals", "Power Clean"],
          }),
        ]}
      />
      <PageHero
        title="The Complete Power Clean Range"
        eyebrow="WELCOME — YOU FOUND US"
        blurb={`${products.length} industrial cleaning products across four families. Cleaner. Safer. Better. Tap any family to open every series and product inside it.`}
        minHeight="min(46vh, 420px)"
        image="/photos/blending-line.webp"
        imageAlt="Stainless blending vessels where Power Clean cleaning chemicals are made"
      />

      {/* THE RANGE CHART */}
      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <SectionHeading
          eyebrow="THE RANGE AT A GLANCE"
          title="Pick a Family to Dive In"
          lede="Each card opens the full catalogue at that family — every series, every product, every SKU."
          className="mb-10 max-w-[620px]"
        />
        <RangeMap mode="link" />

        <Reveal dir="up" delay={120} className="mt-8 flex justify-center">
          <Magnetic style={{ display: "inline-block" }}>
            <TransitionLink
              href="/products"
              className="group inline-block rounded-full bg-green-cta px-8 py-4 text-[15px] font-semibold text-white no-underline shadow-cta transition-colors hover:bg-green-cta-dark"
            >
              Browse the Full Catalogue <Arrow />
            </TransitionLink>
          </Magnetic>
        </Reveal>
      </SectionPanel>

      {/* AT A GLANCE — a scan lands here from a card or brochure, so the
          numbers a buyer actually asks for come before anything else */}
      <SectionPanel outerClassName="px-3 pb-3 pt-2">
        <Reveal dir="up" as="div">
          <dl className="mx-auto grid max-w-[1000px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-6 gap-y-5 rounded-card bg-green-tint p-7">
            {AT_A_GLANCE.map((f) => (
              <div key={f.label}>
                <dt className="mb-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-green-deep">
                  {f.label}
                </dt>
                <dd className="text-[15px] font-semibold text-navy">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </SectionPanel>

      {/* WHICH GRADE DO I NEED */}
      <div className="mx-auto max-w-[1320px] px-5 py-[clamp(32px,4.5vw,56px)]">
        <SectionHeading
          eyebrow="WHICH GRADE DO I NEED?"
          title="Start From the Problem"
          lede="Most people arrive knowing what is wrong, not which product code fixes it. These are the routes in."
          className="mb-9 max-w-[660px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-8 gap-y-7">
          {BROWSE_BY.map((group, gi) => (
            <Reveal key={group.title} dir="up" delay={gi * 70}>
              <h3 className="mb-3 border-b border-line-2 pb-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-1.5 pl-0">
                {group.links.map((l) => (
                  <li key={l.href} className="list-none">
                    <TransitionLink
                      href={l.href}
                      className="block text-[13px] leading-[1.45] text-muted-3 no-underline transition-colors hover:text-green"
                    >
                      {l.label}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      {/* HOW A TRIAL WORKS — the conversion path a brochure scan should land on */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-9">
          <Reveal dir="left">
            <SectionHeading
              eyebrow="HOW A TRIAL WORKS"
              title="Free, and Proved on Your Line"
              className="mb-7 max-w-[520px]"
            />
            <ol className="flex flex-col gap-4 pl-0">
              {TRIAL_STEPS.map((st, i) => (
                <li key={st.name} className="flex list-none gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy font-mono text-[11.5px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="mb-1 block text-[15px] font-semibold text-navy">
                      {st.name}
                    </span>
                    <span className="block text-[13.5px] leading-[1.65] text-muted-3">
                      {st.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
            <TransitionLink
              href="/get-consultation"
              className="group mt-7 inline-block rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              Request a free sample <Arrow />
            </TransitionLink>
          </Reveal>
          <Reveal dir="right">
            <MicroForm
              context="QR range page"
              heading="Scanned our card?"
              blurb="Leave a number and tell us what you are cleaning — we will come back with a matched grade and a trial plan."
            />
          </Reveal>
        </div>
      </SectionPanel>

      {/* QUICK ACTIONS */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="TALK TO US"
          title="One Tap Away"
          size="md"
          className="mb-9 max-w-[620px]"
        />
        <div className="mx-auto grid max-w-[880px] grid-cols-1 gap-3.5 sm:grid-cols-2">
          {QUICK_ACTIONS.map((a, i) => {
            const inner = (
              <>
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-tint text-[18px] text-green-deep"
                >
                  {a.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[14.5px] font-semibold text-navy">
                    {a.label}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-muted">
                    {a.sub}
                  </span>
                </span>
                <Arrow />
              </>
            );
            const cls =
              "group flex w-full items-center gap-4 rounded-card bg-white px-5 py-4 text-left no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card";
            return (
              <Reveal key={a.label} dir="up" delay={i * 80}>
                {a.external ? (
                  <a
                    href={a.href}
                    className={cls}
                    {...(a.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <TransitionLink href={a.href} className={cls}>
                    {inner}
                  </TransitionLink>
                )}
              </Reveal>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-[560px] text-center text-[13px] leading-[1.7] text-muted-3">
          {siteConfig.company} · ISO 9001 certified · Serving Indian
          manufacturing for 25+ years — trusted by BOSCH, TVS, Bharat Forge
          and the Murugappa Group.
        </p>
      </SectionPanel>
    </>
  );
}
