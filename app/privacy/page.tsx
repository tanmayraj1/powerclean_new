import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, breadcrumbJsonLd, webPageJsonLd, metaDesc } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: metaDesc(
    "How Power Clean and Roovel Solutions collect, use and store the details you send through this website, and how to have them corrected or erased."
  ),
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Privacy Policy — Power Clean",
    description:
      "What we collect through the enquiry forms on this site, why, where it is stored, and your rights over it.",
    url: `${SITE_URL}/privacy`,
  },
};

/** Last substantive revision. Shown on the page so it is not a silent edit. */
const UPDATED = "6 September 2026";

type Section = { id: string; heading: string; body: React.ReactNode };

const SECTIONS: Section[] = [
  {
    id: "who-we-are",
    heading: "Who we are",
    body: (
      <>
        <p>
          This website is operated by <strong>{siteConfig.company}</strong>,
          which manufactures and supplies industrial cleaning chemicals under
          the Power Clean brand.
        </p>
        <p>
          Manufacturing unit: {siteConfig.contact.address}.<br />
          Registered office: {siteConfig.contact.offices[1].address}.<br />
          CIN {siteConfig.contact.cin} · GST {siteConfig.contact.gst}.
        </p>
        <p>
          For anything in this policy, write to{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>{" "}
          or call {siteConfig.contact.phones.join(" / ")}.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    heading: "What we collect, and when",
    body: (
      <>
        <p>
          We only collect what you type into a form. There is no account to
          create, and we do not buy contact lists.
        </p>
        <ul>
          <li>
            <strong>Enquiry and consultation forms</strong> — your name,
            company, email address, phone number, industry, and whatever you
            write in the message field.
          </li>
          <li>
            <strong>The inline enquiry form</strong> on product, industry and
            location pages — your name, phone number, and what you are
            cleaning. It also records which page you sent it from, so we can
            answer with the right grade.
          </li>
          <li>
            <strong>The{" "}
            <TransitionLink href="/questionnaire">
              chemical questionnaire
            </TransitionLink></strong>{" "}
            — the above plus the technical details you choose to give about
            your parts, soils, equipment, bath conditions and volumes.
          </li>
          <li>
            <strong>Newsletter</strong> — your email address only.
          </li>
        </ul>
        <p>
          Every one of those fields is optional except the minimum we need to
          reply to you: an email address or a phone number.
        </p>
      </>
    ),
  },
  {
    id: "why",
    heading: "Why we use it",
    body: (
      <>
        <p>
          To answer your enquiry — recommending a product, quoting, arranging a
          free cleaning trial, or sending a technical data sheet — and to keep
          a record of that conversation so you do not have to repeat yourself
          the next time you contact us.
        </p>
        <p>
          We do not sell your details, share them with advertisers, or use them
          to build a profile of you. We will not send you marketing you did not
          ask for.
        </p>
      </>
    ),
  },
  {
    id: "consent",
    heading: "Your consent",
    body: (
      <>
        <p>
          Every form asks you to tick a box before it is sent. That tick is
          your consent under India&rsquo;s{" "}
          <em>Digital Personal Data Protection Act, 2023</em> for us to store
          the details and contact you about that enquiry. Nothing is
          pre-ticked, and the box is never bundled with anything else.
        </p>
        <p>
          You can withdraw consent at any time by emailing{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
          . Withdrawing it is as easy as giving it, and we will not ask you to
          justify the request.
        </p>
      </>
    ),
  },
  {
    id: "where-it-goes",
    heading: "Where your details are stored",
    body: (
      <>
        <ul>
          <li>
            <strong>Zoho CRM</strong> — enquiries are recorded in our customer
            relationship system, run by Zoho Corporation, so the right person
            picks them up. Where our account is hosted in India, your data
            stays on Indian servers.
          </li>
          <li>
            <strong>Email</strong> — a copy reaches our sales inbox at{" "}
            {siteConfig.contact.email}.
          </li>
          <li>
            <strong>Vercel</strong> — this website is hosted by Vercel Inc.,
            whose servers process the request that carries your form
            submission. Vercel keeps short-lived operational logs.
          </li>
        </ul>
        <p>
          If you choose to reply to us on WhatsApp instead, that conversation is
          governed by WhatsApp&rsquo;s own privacy terms, not this policy.
        </p>
      </>
    ),
  },
  {
    id: "how-long",
    heading: "How long we keep it",
    body: (
      <>
        <p>
          Enquiries are kept for as long as we have an active or prospective
          business relationship with you, and then for as long as tax and
          company law requires us to keep commercial records. When neither
          applies any more, the record is deleted.
        </p>
        <p>
          You do not have to wait for that. Ask us to erase your details and we
          will, subject only to records we are legally obliged to retain.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and analytics",
    body: (
      <>
        <p>
          This site sets no advertising cookies and runs no third-party
          tracking or re-marketing pixels. Nothing about your visit is sold or
          shared with an ad network.
        </p>
        <p>
          Where website analytics are enabled, they are used only to count
          visits and understand which pages are useful — never to identify you
          personally.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    heading: "Your rights",
    body: (
      <>
        <p>Under the DPDP Act 2023 you may ask us to:</p>
        <ul>
          <li>tell you what personal data of yours we hold, and what we did with it;</li>
          <li>correct anything inaccurate, or complete anything missing;</li>
          <li>erase it, where we are not legally required to keep it;</li>
          <li>nominate someone to exercise these rights if you cannot; and</li>
          <li>have a grievance addressed.</li>
        </ul>
        <p>
          Write to{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>{" "}
          with &ldquo;Data request&rdquo; in the subject line. We will respond
          within 30 days. If you are not satisfied with our response, you may
          escalate to the Data Protection Board of India.
        </p>
      </>
    ),
  },
  {
    id: "children",
    heading: "Children",
    body: (
      <p>
        This is a business-to-business site for industrial buyers. It is not
        directed at children, and we do not knowingly collect data from anyone
        under 18. If you believe a child has sent us details, tell us and we
        will delete them.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: (
      <p>
        If we change how we handle your details, we will update this page and
        the date at the top. Material changes affecting enquiries already sent
        to us will be notified by email where we hold one.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Privacy Policy", url: `${SITE_URL}/privacy` },
          ]),
          webPageJsonLd({
            name: "Privacy Policy",
            description:
              "How Roovel Solutions collects, uses, stores and erases the details sent through the Power Clean website.",
            path: "/privacy",
            about: ["Privacy", "Data protection", "DPDP Act 2023"],
          }),
        ]}
      />

      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        blurb="What we collect through this website, why we collect it, where it is stored, and how to have it corrected or erased."
        minHeight="min(46vh,380px)"
      />

      <SectionPanel tone="white">
        <Reveal dir="up">
          <p className="mb-8 text-[13px] font-semibold uppercase tracking-[0.12em] text-green-deep">
            Last updated {UPDATED}
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
          {/* on this page */}
          <Reveal dir="up" className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-2">
              On this page
            </h2>
            <ul className="flex flex-col gap-1.5 pl-0">
              {SECTIONS.map((s) => (
                <li key={s.id} className="list-none">
                  <a
                    href={`#${s.id}`}
                    className="text-[13.5px] font-medium leading-[1.5] text-muted-3 no-underline transition-colors hover:text-green-deep"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="max-w-[720px]">
            {SECTIONS.map((s) => (
              <Reveal key={s.id} dir="up" id={s.id} className="mb-10 scroll-mt-28">
                <h2 className="mb-3 text-[clamp(19px,2.1vw,24px)] font-semibold leading-[1.25] tracking-[-0.01em] text-navy">
                  {s.heading}
                </h2>
                <div className="prose-legal">{s.body}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionPanel>

      <CtaBanner
        eyebrow="Your data"
        heading="Questions about your details?"
        body="Write to us and a person will answer — no ticket system, no form to fill in."
        ctaLabel="Contact our team"
        ctaHref="/contact"
      />
    </>
  );
}
