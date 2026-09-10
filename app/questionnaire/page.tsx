import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { QuestionnaireForm } from "@/components/ui/QuestionnaireForm";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  faqJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { questionnaireSteps } from "@/lib/questionnaire";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cleaning Chemical Questionnaire",
  description:
    "Two minutes: tell us your components, soils, metal grade and wash equipment, and get a matched cleaning chemical, dilution and temperature within one business day.",
  keywords: [
    "cleaning chemical questionnaire",
    "degreaser selection questionnaire",
    "industrial cleaning requirement form",
    "cleaning chemical selection by metal grade",
    "component cleaning enquiry form",
  ],
  alternates: { canonical: "/questionnaire" },
  openGraph: {
    type: "website",
    title: "Cleaning Chemical Questionnaire · Power Clean",
    description:
      "The questions our applications lab needs answered to match a grade to your line.",
    url: `${SITE_URL}/questionnaire`,
  },
};

const FAQS = [
  {
    q: "How long does the questionnaire take?",
    a: "About two minutes for the essentials — company, name, phone and email are the only required fields, and you can submit from any step. Answering everything takes five to ten minutes if you have your wash parameters to hand. Leave anything you are unsure of blank rather than guessing: a wrong number is worse than a missing one.",
  },
  {
    q: "What happens after I submit it?",
    a: "It reaches the applications lab as a filled-in questionnaire. You get a response within one business day: either a matched grade with the working strength and temperature, or the questions we still need answered to get there.",
  },
  {
    q: "What if I do not know my dilution or temperature?",
    a: "Leave them blank. Those are exactly the figures a trial establishes, and half the plants we work with have never measured them. The soil, the metal and the equipment matter more at this stage.",
  },
  {
    q: "Can I send parts instead of filling this in?",
    a: "Yes, and it is often faster. A dirty component tells us more than a form does — send two or three through the free cleanup trial and we will work backwards from what we see.",
  },
];

export default function QuestionnairePage() {
  const fieldCount = questionnaireSteps.flatMap((s) => s.fields).length;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Questionnaire", url: `${SITE_URL}/questionnaire` },
          ]),
          faqJsonLd(FAQS),
          webPageJsonLd({
            name: "Cleaning chemical questionnaire",
            description:
              "A structured questionnaire covering parts, soils, equipment and wash parameters, used to match a cleaning chemical to a line.",
            path: "/questionnaire",
            about: ["Industrial cleaning chemicals", "Process assessment"],
          }),
        ]}
      />
      <PageHero
        title="Cleaning Chemical Questionnaire"
        eyebrow="TELL US ABOUT YOUR LINE"
        blurb="The questions our applications lab actually needs answered — your components, your soils, your equipment and your wash parameters. Four short steps, about two minutes, and an assured response within one business day."
        minHeight="min(50vh, 440px)"
        titleClassName="text-[clamp(28px,3.8vw,52px)]"
        image="/photos/qc-lab.webp"
        imageAlt="Chemist holding a beaker of cleaning solution during batch quality control"
      />

      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <div className="page-answer mx-auto mb-10 max-w-[860px]">
          {/* The lead sentence is the whole pitch — four steps, two minutes,
              only four required fields. The detail that used to open this
              block still follows; it just no longer stands between a visitor
              and the decision to start. */}
          <p className="text-[clamp(19px,2.3vw,25px)] font-medium leading-[1.4] tracking-[-0.01em] text-navy [text-wrap:balance]">
            {questionnaireSteps.length} short steps. About two minutes for the
            essentials — only company, name, phone and email are required.
          </p>
          <p className="mt-3.5 text-[clamp(14px,1.6vw,16px)] leading-[1.65] text-muted-3 [text-wrap:pretty]">
            The full {fieldCount} questions cover what you clean, what is on
            it, the equipment you run and the wash parameters you hold. Answer
            what you know and leave the rest blank — a wrong figure sends us
            down the wrong route, while a blank one simply tells us what the
            trial needs to establish.
          </p>
        </div>

        <div className="mx-auto max-w-[900px]">
          <QuestionnaireForm />
        </div>

        <Reveal
          dir="up"
          delay={120}
          className="mx-auto mt-8 flex max-w-[900px] flex-wrap items-center justify-between gap-5 rounded-card-lg bg-card-tint p-7"
        >
          <p className="max-w-[540px] text-[13.5px] leading-[1.65] text-muted-3">
            A picture is worth a thousand words. If you can, email a photograph
            of the dirty component to{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-semibold text-navy underline decoration-line-3 underline-offset-4 hover:text-green"
            >
              {siteConfig.contact.email}
            </a>{" "}
            — or send the part itself for a free cleanup trial.
          </p>
          <TransitionLink
            href="/request-cleanup"
            className="group rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
          >
            Send parts instead <Arrow />
          </TransitionLink>
        </Reveal>
      </SectionPanel>

      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="QUESTIONS ABOUT THE QUESTIONS"
          title="Before You Start"
          className="mb-9 max-w-[620px]"
        />
        <div className="mx-auto grid max-w-[900px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {FAQS.map((f, i) => (
            <Reveal
              key={f.q}
              dir="up"
              delay={Math.min(i, 4) * 70}
              className="rounded-card bg-white p-7 ring-1 ring-inset ring-line-2"
            >
              <h3 className="mb-2.5 text-[15.5px] font-semibold leading-[1.4] text-navy">
                {f.q}
              </h3>
              <p className="text-[13.5px] leading-[1.7] text-muted-3 [text-wrap:pretty]">
                {f.a}
              </p>
            </Reveal>
          ))}
        </div>
      </SectionPanel>
    </>
  );
}
