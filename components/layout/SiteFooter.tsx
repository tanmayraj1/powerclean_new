import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site-config";
import { Arrow } from "@/components/ui/Arrow";
import { TransitionLink } from "./TransitionLink";
import { NewsletterForm } from "./NewsletterForm";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

/** Knowledge hubs — the answer surfaces, kept out of the top nav to keep it short. */
const LEARN_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Glossary", href: "/glossary" },
  { label: "FAQ", href: "/faq" },
  { label: "Cleaning videos", href: "/cleaning-videos" },
  { label: "Case studies", href: "/resources/case-studies" },
  { label: "Free consultation", href: "/get-consultation" },
  { label: "Request a cleanup", href: "/request-cleanup" },
  { label: "Chemical questionnaire", href: "/questionnaire" },
  { label: "Where we supply", href: "/industrial-cleaning-chemicals" },
  { label: "QR range map", href: "/range" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: siteConfig.contact.social.facebook },
  { label: "X (Twitter)", href: siteConfig.contact.social.twitter },
  { label: "WhatsApp", href: siteConfig.contact.whatsapp },
];

/** Shared footer with the giant green SVG "POWERCLEAN" wordmark. */
export function SiteFooter() {
  return (
    <footer className="bg-azure p-3 font-sans">
      <Reveal
        dir="up"
        className="mx-auto max-w-[1320px] rounded-section bg-white p-[clamp(28px,5vw,64px)]"
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-10">
          <div>
            <Image
              src="/logo.png"
              alt="Power Clean — industrial cleaning chemicals by Roovel Solutions"
              width={173}
              height={52}
              className="mb-5 block h-[52px] w-auto"
            />
            <p className="mb-1.5 max-w-[420px] text-[clamp(18px,2vw,22px)] font-medium leading-[1.45] text-ink [text-wrap:pretty]">
              {siteConfig.tagline}
            </p>
            <p className="mb-[22px] text-[13px] font-semibold uppercase tracking-[0.14em] text-green-deep">
              {siteConfig.motto}
            </p>
            <NewsletterForm />
            <p className="mt-3.5 max-w-[380px] text-xs text-muted-2">
              Subscribe for application notes, product announcements, and Power
              Clean updates.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-7 sm:grid-cols-3">
            <div>
              <h3 className="mb-3.5 text-[15px] font-semibold text-navy">
                Quick Links
              </h3>
              <div className="flex flex-col gap-2.5">
                {QUICK_LINKS.map((l) => (
                  <TransitionLink
                    key={l.label}
                    href={l.href}
                    className="group text-sm text-muted-3 no-underline transition-colors hover:text-green"
                  >
                    {l.label} <Arrow />
                  </TransitionLink>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3.5 text-[15px] font-semibold text-navy">
                Learn
              </h3>
              <div className="flex flex-col gap-2.5">
                {LEARN_LINKS.map((l) => (
                  <TransitionLink
                    key={l.label}
                    href={l.href}
                    className="group text-sm text-muted-3 no-underline transition-colors hover:text-green"
                  >
                    {l.label} <Arrow />
                  </TransitionLink>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3.5 text-[15px] font-semibold text-navy">
                Social Media
              </h3>
              <div className="flex flex-col gap-2.5">
                {SOCIAL_LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-sm text-muted-3 no-underline transition-colors hover:text-green"
                  >
                    {l.label} <Arrow />
                  </a>
                ))}
              </div>
              <p className="mt-[22px] text-xs leading-[1.6] text-muted-2">
                © 2026 Power Clean.
                <br />A brand of {siteConfig.company}
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Giant company wordmark — Roovel Solutions logo (background
            removed), stretched edge-to-edge like the old type lockup. */}
        <Reveal
          dir="up"
          delay={120}
          className="mt-[clamp(28px,5vw,56px)] overflow-hidden"
        >
          {/* unoptimized: sharp palettizes large flat-colour PNGs at q75,
              which mottles the blue fills — the hand-tuned WebP stays clean */}
          <Image
            src="/roovel-wordmark.webp"
            alt="Roovel Solutions Pvt. Ltd."
            width={1890}
            height={308}
            unoptimized
            className="block h-auto w-full"
          />
        </Reveal>

        <div className="mt-[26px] flex flex-wrap justify-between gap-x-8 gap-y-3.5 border-t border-line-2 pt-[22px]">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-[13px] text-muted no-underline hover:text-green"
          >
            {siteConfig.contact.email}
          </a>
          <span className="text-[13px] text-muted">
            {siteConfig.contact.phones.join(" / ")}
          </span>
          <span className="max-w-[560px] text-[13px] leading-[1.6] text-muted">
            {siteConfig.company} — {siteConfig.contact.address}
            <br />
            Registered office: {siteConfig.contact.offices[1].address}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap justify-between gap-x-8 gap-y-2">
          <span className="text-xs text-muted-2">
            GST# {siteConfig.contact.gst}
          </span>
          <TransitionLink
            href="/privacy"
            className="text-xs text-muted-2 no-underline transition-colors hover:text-green-deep"
          >
            Privacy Policy
          </TransitionLink>
          <span className="text-xs text-muted-2">
            CIN# {siteConfig.contact.cin}
          </span>
        </div>
      </Reveal>
    </footer>
  );
}
