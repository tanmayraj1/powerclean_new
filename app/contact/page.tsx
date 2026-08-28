import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RippleDivider } from "@/components/ui/RippleDivider";
import { RippleField } from "@/components/ui/RippleField";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { FaqFilter } from "@/components/ui/FaqFilter";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { contactFaqs, siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Industrial Cleaning Chemicals, Bangalore & Chennai",
  description:
    "Reach Power Clean (Roovel Solutions Pvt. Ltd., Bangalore) for program inquiries, free chemical samples, and supervised plant trials.",
  alternates: { canonical: "/contact" },
};

const CAPABILITY_CHIPS = [
  "◎ Technical Support",
  "⚗ Custom Formulation",
  "⛟ Nationwide Supply",
];

const FAQ_CHIPS = ["Products & Trials", "Company Details", "Supply & Logistics"];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqJsonLd([...contactFaqs])} />
      <PageHero
        title="Let's Solve Your Cleaning Challenge"
        eyebrow="GET IN TOUCH"
        blurb="Program inquiries, trial requests, and partnership opportunities — our technical team replies within one business day."
        minHeight="min(56vh, 480px)"
        image="/photos/gallery-1.webp"
        imageAlt=""
        titleClassName="text-[clamp(34px,4.8vw,70px)]"
      />

      {/* FORM SECTION */}
      <div className="mx-auto max-w-[1320px] px-5 pb-5 pt-[clamp(36px,5vw,64px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-stretch gap-8">
          <Reveal
            dir="left"
            className="relative min-h-[420px] overflow-hidden rounded-card-lg"
          >
            <ImageSlot
              brief="Photo — engineer testing a formulation sample"
              src="/photos/story-facility.webp"
              alt="Chemists developing industrial degreaser formulations in the Power Clean laboratory"
              className="absolute inset-0"
            />
            <div className="pointer-events-none absolute left-3.5 top-3.5 rounded-full bg-white/85 px-[15px] py-[7px] text-xs font-semibold text-navy backdrop-blur-[8px]">
              Since 2000 — Replacing TCE
            </div>
            <div className="pointer-events-none absolute right-3.5 top-3.5 rounded-full bg-white/85 px-[15px] py-[7px] text-xs font-semibold text-navy backdrop-blur-[8px]">
              Industrial Cleaning
            </div>
            <div className="pointer-events-none absolute bottom-3.5 left-3.5 right-3.5 flex flex-wrap gap-2">
              {CAPABILITY_CHIPS.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-ink/65 px-3.5 py-[7px] text-[11.5px] font-medium text-white backdrop-blur-[8px]"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal dir="right">
            <Eyebrow label="SEND A MESSAGE" className="mb-3.5" />
            <h2 className="mb-2.5 text-[clamp(28px,3.4vw,42px)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy">
              Get a Custom Cleaning Solution
            </h2>
            <p className="mb-[26px] text-sm leading-[1.6] text-muted">
              Tell us about your process — parts, soils, current chemistry —
              and we&apos;ll respond with a matched approach.
            </p>
            <InquiryForm variant="contact" />
          </Reveal>
        </div>
      </div>

      {/* CONTACT INFO + MAP */}
      <div className="p-3">
        <div
          className="relative mx-auto max-w-[1320px] overflow-hidden rounded-section bg-white p-[clamp(28px,4.5vw,60px)]"
          style={{
            backgroundImage: "url('/pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "320px",
          }}
        >
          <RippleField />
          <SectionHeading
            eyebrow="CONTACT INFO"
            title="Reach Out to Power Clean"
            lede="Program inquiries, sample requests, or partnership opportunities."
            size="md"
            className="mb-9 max-w-[620px]"
          />
          <Reveal
            dir="clip"
            className="mb-5 h-[clamp(240px,32vw,360px)] overflow-hidden rounded-card"
          >
            <MapEmbed
              bbox={siteConfig.maps.cityBbox}
              title="Power Clean location map — Bangalore"
              className="h-full w-full"
            />
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            <Reveal
              dir="up"
              className="rounded-img-lg bg-card-tint p-[26px] text-center transition-transform duration-300 hover:-translate-y-[5px]"
            >
              <div className="mx-auto mb-3.5 flex h-11 w-11 items-center justify-center rounded-full bg-green-tint">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#292F6E" strokeWidth="1.8" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="M2 7l10 7L22 7" />
                </svg>
              </div>
              <div className="mb-1.5 text-[15px] font-semibold text-navy">
                {siteConfig.contact.email}
              </div>
              <div className="text-[12.5px] leading-[1.6] text-muted">
                Email us for product information and trial requests.
              </div>
            </Reveal>
            <Reveal
              dir="up"
              delay={120}
              className="rounded-img-lg bg-card-tint p-[26px] text-center transition-transform duration-300 hover:-translate-y-[5px]"
            >
              <div className="mx-auto mb-3.5 flex h-11 w-11 items-center justify-center rounded-full bg-green-tint">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#292F6E" strokeWidth="1.8" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.13.96.36 1.9.7 2.8a2 2 0 01-.45 2.1L8 10a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0122 16.9z" />
                </svg>
              </div>
              <div className="mb-1.5 text-[15px] font-semibold text-navy">
                {siteConfig.contact.phones.join(" / ")}
              </div>
              <div className="text-[12.5px] leading-[1.6] text-muted">
                Call or WhatsApp our team for supply, scheduling, and support.
              </div>
            </Reveal>
            <Reveal
              dir="up"
              delay={240}
              className="rounded-img-lg bg-card-tint p-[26px] text-center transition-transform duration-300 hover:-translate-y-[5px]"
            >
              <div className="mx-auto mb-3.5 flex h-11 w-11 items-center justify-center rounded-full bg-green-tint">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#292F6E" strokeWidth="1.8" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1116 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="mb-1.5 text-[15px] font-semibold text-navy">
                {siteConfig.contact.offices[0].label}
              </div>
              <div className="text-[12.5px] leading-[1.6] text-muted">
                {siteConfig.contact.offices[0].address}
                <br />
                {siteConfig.contact.offices[0].phone}
              </div>
            </Reveal>
            <Reveal
              dir="up"
              delay={360}
              className="rounded-img-lg bg-card-tint p-[26px] text-center transition-transform duration-300 hover:-translate-y-[5px]"
            >
              <div className="mx-auto mb-3.5 flex h-11 w-11 items-center justify-center rounded-full bg-green-tint">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#292F6E" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="8" width="18" height="13" rx="2" />
                  <path d="M8 8V5a2 2 0 012-2h4a2 2 0 012 2v3M3 13h18" />
                </svg>
              </div>
              <div className="mb-1.5 text-[15px] font-semibold text-navy">
                {siteConfig.contact.offices[1].label}
              </div>
              <div className="text-[12.5px] leading-[1.6] text-muted">
                {siteConfig.contact.offices[1].address}
                <br />
                {siteConfig.contact.offices[1].phone}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <RippleDivider />

      {/* FAQ */}
      <div className="mx-auto max-w-[1320px] px-5 py-[clamp(36px,6vw,72px)]">
        <Reveal dir="up" className="mb-3.5">
          <Eyebrow label="FAQ" />
        </Reveal>
        <Reveal
          dir="up"
          as="h2"
          className="mb-3 text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em] text-navy"
        >
          Working With Power Clean
        </Reveal>
        <Reveal
          dir="up"
          as="p"
          className="mb-8 max-w-[560px] text-[14.5px] text-muted"
        >
          Quick answers about products, trials, and supply.
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-7">
          <Reveal dir="left">
            <FaqFilter faqs={contactFaqs} chips={FAQ_CHIPS} />
          </Reveal>
          <Reveal dir="right" className="flex flex-col gap-4">

            <div className="relative overflow-hidden rounded-card bg-navy p-7">
              <div className="animate-pc-float absolute -bottom-[30px] -right-[30px] h-[150px] w-[150px] rounded-full bg-green/28" />
              <div className="relative">
                <div className="mb-2 text-[19px] font-semibold leading-[1.35] text-white">
                  Ready to take the next step?
                </div>
                <p className="mb-5 text-[13px] leading-[1.6] text-white/75">
                  Explore the full solutions range or start with a sample
                  trial.
                </p>
                <Magnetic>
                  <TransitionLink
                    href="/solutions"
                    className="group inline-block rounded-full bg-green-cta px-6 py-3 text-[13.5px] font-semibold text-white no-underline transition-colors hover:bg-green-bright"
                  >
                    Explore Our Solutions <Arrow />
                  </TransitionLink>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
