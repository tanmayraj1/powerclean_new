import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { Arrow } from "@/components/ui/Arrow";
import { Magnetic } from "@/components/motion/Magnetic";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { RangeMap } from "@/components/sections/catalogue/RangeMap";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";
import { products } from "@/lib/catalogue";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Explore the Full Range",
  description:
    "Scanned our card or brochure? This is the complete Power Clean range — aqueous cleaners, cooling-water treatment, solvent degreasers and rust protection — one tap from every product.",
  alternates: { canonical: "/range" },
};

/**
 * QR gateway — the URL printed on visiting cards and brochures. Mobile-first:
 * a compact welcome, the range chart, then big tap targets for catalogue,
 * WhatsApp, phone and email.
 */
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
        ]}
      />
      <PageHero
        title="The Complete Power Clean Range"
        eyebrow="WELCOME — YOU FOUND US"
        blurb={`${products.length} industrial cleaning products across four families. Cleaner. Safer. Better. Tap any family to open every series and product inside it.`}
        minHeight="min(46vh, 420px)"
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
              href="/catalogue"
              className="group inline-block rounded-full bg-green-cta px-8 py-4 text-[15px] font-semibold text-white no-underline shadow-cta transition-colors hover:bg-green-cta-dark"
            >
              Browse the Full Catalogue <Arrow />
            </TransitionLink>
          </Magnetic>
        </Reveal>
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
