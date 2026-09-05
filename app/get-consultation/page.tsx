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
  title: "Free Cleaning Consultation & Trial",
  description:
    "Send a sample part and get a matched cleaning chemical, dilution and trial plan — free, run on your own line, with pass/fail criteria agreed up front.",
  keywords: [
    "free cleaning trial india",
    "industrial cleaning consultation",
    "degreaser sample request",
    "cleaning chemical trial",
  ],
  alternates: { canonical: "/get-consultation" },
  openGraph: {
    type: "website",
    title: "Free Cleaning Consultation · Power Clean",
    description:
      "A matched formulation, a dosing plan and a supervised trial on your own equipment.",
    url: `${SITE_URL}/get-consultation`,
  },
};

const INCLUDED = [
  {
    title: "Your part, tested",
    body: "Send a sample component with the soil and substrate. Compatibility and cleaning are validated in the lab on the actual part, not on a generic coupon.",
  },
  {
    title: "A matched formulation",
    body: "One grade from the 41-product range, with the working strength, wash temperature and application method set for your equipment.",
  },
  {
    title: "Pass/fail agreed first",
    body: "Cleanliness standard, cycle time and cost target are set before the trial runs, so the result is a measurement rather than an opinion.",
  },
  {
    title: "A supervised trial",
    body: "Run on your own line, from a single 20 L pail, with our engineer present. You move forward only if the numbers clear the bar.",
  },
  {
    title: "Documentation from day one",
    body: "A safety data sheet, dosing and PPE guidance, and a batch reference — the file an audit will ask for.",
  },
  {
    title: "No obligation",
    body: "The consultation and the trial plan cost nothing. If the answer is that your current process is already right, we will say so.",
  },
];

const STEPS = [
  { name: "Tell us about the line", text: "Component, soil, substrate, wash equipment and the cleanliness standard you have to meet." },
  { name: "Send a sample part", text: "Posted to the Bangalore lab, where substrate and soil compatibility are tested on your actual component." },
  { name: "Receive a matched plan", text: "A grade, a working strength, a temperature and an application method, with agreed pass/fail criteria." },
  { name: "Run the trial", text: "Supervised, on your own equipment, from a 20 L pail — then scale to bulk packing only once it is proved." },
];

const FAQS = [
  {
    q: "Is the consultation really free?",
    a: "Yes. The lab assessment and the trial plan cost nothing, and trials normally start from a single 20 L pail. If your existing process is already the right one, we will tell you that rather than sell you a change.",
  },
  {
    q: "What do I need to send?",
    a: "A sample component, and a description of the soil, the substrate, the wash equipment and the cleanliness standard you have to meet. The more specific that is, the fewer rounds the trial takes.",
  },
  {
    q: "How long does it take?",
    a: "Enquiries are answered within 24 hours. The lab match depends on how unusual the soil and substrate combination is; the trial itself is scheduled around your line rather than ours.",
  },
  {
    q: "Do you supply outside Bangalore?",
    a: "Yes — Karnataka, Tamil Nadu, Maharashtra, Telangana and Gujarat are covered from the Bangalore plant, in packs from 20 L to 1000 L. Remote trials work the same way: sample part in, matched plan and pail out.",
  },
  {
    q: "What documentation comes with the product?",
    a: "A safety data sheet plus dosing and PPE guidance with every product, and production runs to an ISO 9001 certified system with batch-wise quality control, so the drum traces back to a quality record.",
  },
];

export default function GetConsultationPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Free consultation", url: `${SITE_URL}/get-consultation` },
          ]),
          faqJsonLd(FAQS),
          howToJsonLd({
            name: "How to get a free industrial cleaning consultation",
            description:
              "Send a sample part and receive a matched cleaning chemical, dilution and supervised trial plan.",
            steps: STEPS,
          }),
          webPageJsonLd({
            name: "Free cleaning consultation and plant trial",
            description:
              "A matched formulation, dosing plan and supervised trial on your own line, at no cost.",
            path: "/get-consultation",
            about: ["Industrial cleaning chemicals", "Plant trial"],
          }),
        ]}
      />
      <PageHero
        title="Free Consultation & Plant Trial"
        eyebrow="GET STARTED"
        blurb="Send us the part. We match the chemistry, agree the criteria, and prove it on your own line before you commit to anything."
        minHeight="min(52vh, 460px)"
        image="/photos/qc-lab.webp"
        imageAlt="Chemist holding a beaker of cleaning solution during batch quality control"
      />

      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <div className="page-answer mx-auto mb-12 max-w-[860px]">
          <p className="text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-muted-3 [text-wrap:pretty]">
            A Power Clean consultation is a lab assessment of your actual
            component followed by a supervised trial on your own equipment,
            free and without obligation. You get a matched grade from the
            41-product range, a working strength and temperature, agreed
            pass/fail criteria, and a safety data sheet — before any volume
            commitment.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-9">
          <div>
            <SectionHeading
              eyebrow="WHAT IT INCLUDES"
              title="What You Actually Get"
              className="mb-7 max-w-[520px]"
            />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
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

            <Reveal dir="up" className="mt-9">
              <h3 className="mb-4 border-b border-line-2 pb-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
                How it runs
              </h3>
              <ol className="flex flex-col gap-4 pl-0">
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
            </Reveal>
          </div>

          {/* Someone who tapped "Request a free sample" wants the form, not a
              pitch. On a phone the grid is one column, so the form is pulled
              above the explanatory cards; from md up it sits in its own
              column anyway and normal order applies. */}
          <Reveal
            dir="right"
            id="request"
            className="order-first scroll-mt-24 rounded-card-lg bg-white p-[clamp(24px,3vw,36px)] shadow-card-lg ring-1 ring-inset ring-line-2 md:order-none lg:sticky lg:top-28"
          >
            <h2 className="mb-2 text-[clamp(20px,2.2vw,26px)] font-semibold leading-[1.2] text-navy">
              Request your consultation
            </h2>
            <p className="mb-6 text-[13.5px] leading-[1.6] text-muted-3">
              Tell us about your line. Every enquiry is answered within 24
              hours.
            </p>
            <InquiryForm variant="contact" />
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-line-2 pt-5 text-[13px] text-muted-3">
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
          </Reveal>
        </div>
      </SectionPanel>

      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="QUESTIONS"
          title="Before You Send a Part"
          className="mb-9 max-w-[620px]"
        />
        <div className="mx-auto max-w-[880px]">
          <FaqList faqs={FAQS} />
        </div>

        <Reveal dir="up" delay={140} className="mx-auto mt-10 flex max-w-[880px] flex-wrap items-center justify-between gap-5 rounded-card-lg bg-white p-7 ring-1 ring-inset ring-line-2">
          <p className="max-w-[520px] text-[13.5px] leading-[1.65] text-muted-3">
            Want to see what a trial produced elsewhere first? The case studies
            carry the measured results and the wash parameters behind them.
          </p>
          <TransitionLink
            href="/resources/case-studies"
            className="group rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
          >
            Read the case studies <Arrow />
          </TransitionLink>
        </Reveal>
      </SectionPanel>
    </>
  );
}
