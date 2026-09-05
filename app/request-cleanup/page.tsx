import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  faqJsonLd,
  howToJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Request a Free Cleanup Trial",
  description:
    "Send your components to our Bangalore lab for a free wash and cleaning trial. We clean them, report what worked, and return them — before you buy anything.",
  keywords: [
    "free cleaning trial india",
    "send components for cleaning trial",
    "free sample cleaning chemical",
    "parts washing trial bangalore",
  ],
  alternates: { canonical: "/request-cleanup" },
  openGraph: {
    type: "website",
    title: "Request a Free Cleanup · Power Clean",
    description:
      "Send us your parts. We clean them in our lab, report the result, and send them back.",
    url: `${SITE_URL}/request-cleanup`,
  },
};

const STEPS = [
  {
    name: "Tell us what you are sending",
    text: "Component, metal, the soil on it, and the wash equipment you run today. A photograph of the dirty part is worth more than a paragraph.",
  },
  {
    name: "Post the components",
    text: "Send two or three representative parts — dirty, exactly as they come off your line. Do not clean them first; we need to see the real soil.",
  },
  {
    name: "We clean them in the lab",
    text: "Chemistry is matched to your metal and soil, then the parts are washed under controlled conditions with the dilution, temperature and cycle recorded.",
  },
  {
    name: "You get the parts and the report back",
    text: "Cleaned components returned, with the grade, working strength, temperature and cycle time that produced the result — and an honest note if we could not fully clear it.",
  },
];

const INCLUDED = [
  {
    title: "It costs nothing",
    body: "No fee for the trial, the report or the returned parts. If your current process is already right, we will tell you that instead of selling you a change.",
  },
  {
    title: "Cleaned on your actual components",
    body: "Not a coupon, not a demo part. Compatibility and cleaning are proved on the metal and the soil you actually run.",
  },
  {
    title: "The full process, not just a product",
    body: "You get the grade, the dilution, the temperature, the cycle time and the equipment it suits — everything needed to reproduce the result on your line.",
  },
  {
    title: "Before-and-after evidence",
    body: "Photographs of the components as received and as cleaned, so the result is something you can show internally.",
  },
  {
    title: "A pail to repeat it",
    body: "If the trial passes, the next step is a 20 L pail and a supervised run on your own equipment before any bulk commitment.",
  },
  {
    title: "Documentation from the start",
    body: "A safety data sheet and dosing guidance travel with the recommendation, so procurement and safety have what they need.",
  },
];

const FAQS = [
  {
    q: "Is the cleaning trial really free?",
    a: "Yes. There is no charge for the lab trial, the report or returning your components. Trials normally move on to a single 20 L pail only once the result has cleared the bar you set.",
  },
  {
    q: "What should I send, and how many parts?",
    a: "Two or three representative components, dirty and exactly as they come off the line. Do not clean or wipe them first — the soil is what we need to work against. A photograph of the part in situ helps a lot.",
  },
  {
    q: "Where do I send the components?",
    a: `To the Bangalore plant: ${siteConfig.contact.address}. Email ${siteConfig.contact.email} first so we know what is coming and can log it against your enquiry.`,
  },
  {
    q: "How long does it take?",
    a: "Enquiries are answered within one business day. The trial itself depends on how unusual the soil and substrate combination is — a straightforward machining oil is quick; baked carbon or a mixed-metal assembly takes longer because it needs more than one route tested.",
  },
  {
    q: "Do I get the components back?",
    a: "Yes, cleaned, along with the report. Tell us if a part is a production item you need returned urgently and we will prioritise the turnaround.",
  },
  {
    q: "What if you cannot clean it?",
    a: "We say so, and explain why. Some soils need a process change rather than a chemical change — a different wash method, a filtration stage, or mechanical work. That answer is more useful than a product that will not hold up on your line.",
  },
];

export default function RequestCleanupPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Request a cleanup", url: `${SITE_URL}/request-cleanup` },
          ]),
          faqJsonLd(FAQS),
          howToJsonLd({
            name: "How to request a free cleaning trial",
            description:
              "Send your components to the Power Clean lab for a free wash trial and receive the cleaned parts plus the process that produced the result.",
            steps: STEPS,
          }),
          webPageJsonLd({
            name: "Request a free cleanup and cleaning trial",
            description:
              "Send components for a free lab wash trial. Cleaned parts and the full process returned, at no cost.",
            path: "/request-cleanup",
            about: ["Industrial cleaning chemicals", "Cleaning trial"],
          }),
        ]}
      />
      <PageHero
        title="Send Us Your Parts. We'll Clean Them."
        eyebrow="FREE CLEANUP TRIAL"
        blurb="Post two or three dirty components to our Bangalore lab. We wash them, record exactly what worked, and send them back with the report — before you buy anything."
        minHeight="min(54vh, 470px)"
        titleClassName="text-[clamp(28px,3.8vw,54px)]"
        image="/photos/before-soiled.webp"
        imageAlt="Soiled machined components as received, before a cleaning trial"
      />

      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <div className="page-answer mx-auto mb-12 max-w-[860px]">
          <p className="text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-muted-3 [text-wrap:pretty]">
            A cleanup trial is exactly what it sounds like: you send us dirty
            parts, we clean them in the lab, and you get them back with the
            grade, dilution, temperature and cycle time that did it. It is
            free, it runs on your actual components rather than a test coupon,
            and it ends in a recommendation you can reproduce — or an honest
            answer that the fix is a process change, not a chemical.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-9">
          {/* form first on a phone — someone who tapped "Request a Cleanup"
              wants the form, not the pitch */}
          <Reveal
            dir="right"
            id="request"
            className="order-first scroll-mt-24 rounded-card-lg bg-white p-[clamp(24px,3vw,36px)] shadow-card-lg ring-1 ring-inset ring-line-2 md:order-none lg:sticky lg:top-28"
          >
            <h2 className="mb-2 text-[clamp(20px,2.2vw,26px)] font-semibold leading-[1.2] text-navy">
              Start your cleanup trial
            </h2>
            <p className="mb-6 text-[13.5px] leading-[1.6] text-muted-3">
              Describe the part and the soil. We will confirm what to send and
              where, usually the same day.
            </p>
            <InquiryForm variant="contact" />
            <div className="mt-6 border-t border-line-2 pt-5 text-[13px] leading-[1.7] text-muted-3">
              <span className="mb-1.5 block font-mono text-[10.5px] uppercase tracking-[0.1em] text-green-deep">
                Send components to
              </span>
              {siteConfig.contact.address}
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-semibold text-navy no-underline hover:text-green"
                >
                  ✉ {siteConfig.contact.email}
                </a>
                <a
                  href={`tel:${siteConfig.contact.phones[0].replace(/[^+\d]/g, "")}`}
                  className="font-semibold text-navy no-underline hover:text-green"
                >
                  ☏ {siteConfig.contact.phones[0]}
                </a>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="HOW IT RUNS"
              title="Four Steps, No Cost"
              className="mb-7 max-w-[520px]"
            />
            <ol className="mb-10 flex flex-col gap-4 pl-0">
              {STEPS.map((s, i) => (
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

            <SectionHeading
              eyebrow="WHAT YOU GET"
              title="What Comes Back"
              className="mb-7 max-w-[520px]"
            />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
              {INCLUDED.map((f, i) => (
                <Reveal
                  key={f.title}
                  dir="up"
                  delay={Math.min(i, 5) * 60}
                  className="rounded-card bg-white p-6 ring-1 ring-inset ring-line-2"
                >
                  <h3 className="mb-2 text-[15px] font-semibold text-navy">
                    {f.title}
                  </h3>
                  <p className="text-[13px] leading-[1.65] text-muted-3">
                    {f.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </SectionPanel>

      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="QUESTIONS"
          title="Before You Post Anything"
          className="mb-9 max-w-[620px]"
        />
        <div className="mx-auto max-w-[880px]">
          <FaqList faqs={FAQS} />
        </div>

        <Reveal
          dir="up"
          delay={140}
          className="mx-auto mt-10 flex max-w-[880px] flex-wrap items-center justify-between gap-5 rounded-card-lg bg-white p-7 ring-1 ring-inset ring-line-2"
        >
          <p className="max-w-[520px] text-[13.5px] leading-[1.65] text-muted-3">
            Rather answer a few questions than write it out? The chemical
            questionnaire covers the same ground in a structured form.
          </p>
          <TransitionLink
            href="/questionnaire"
            className="group rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
          >
            Open the questionnaire <Arrow />
          </TransitionLink>
        </Reveal>
      </SectionPanel>
    </>
  );
}
