import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { Magnetic } from "@/components/motion/Magnetic";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqList } from "@/components/ui/FaqList";
import { Arrow } from "@/components/ui/Arrow";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { homeFaqs, siteConfig } from "@/lib/site-config";

const CHIPS = ["Products", "Safety", "Supply & Logistics"];

/** FAQ accordion + filter chips + navy promo card. */
export function HomeFaq() {
  return (
    <div className="mx-auto max-w-[1320px] px-5 py-[clamp(36px,6vw,72px)]">
      <Reveal dir="up" className="mb-3.5">
        <Eyebrow label="FAQ" />
      </Reveal>
      <Reveal
        dir="up"
        as="h2"
        className="mb-8 text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em] text-navy"
      >
        Helpful Information &amp; Answers
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-7">
        <Reveal dir="left">
          <FaqList faqs={homeFaqs} />
        </Reveal>
        <Reveal dir="right" className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {CHIPS.map((c, i) => (
              <span
                key={c}
                className={`cursor-pointer rounded-full px-4 py-2 text-[12.5px] transition-transform duration-[250ms] hover:scale-105 ${
                  i === 0
                    ? "bg-green-tint font-semibold text-navy"
                    : "bg-white font-medium text-muted-3"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-card bg-navy p-7">
            <div className="animate-pc-float absolute -right-[30px] -top-[30px] h-[140px] w-[140px] rounded-full bg-green/28" />
            <div className="relative">
              <div className="mb-1 text-[26px] font-bold text-white">
                <CountUp to={siteConfig.stats.challengesSolved} suffix="+" />
              </div>
              <div className="mb-[18px] text-[12.5px] text-white/75">
                cleaning challenges solved to date
              </div>
              <div className="mb-5 text-[19px] font-semibold leading-[1.35] text-white">
                Ready to talk chemistry?
              </div>
              <Magnetic>
                <TransitionLink
                  href="/contact"
                  className="group inline-block rounded-full bg-green-cta px-6 py-3 text-[13.5px] font-semibold text-white no-underline transition-colors hover:bg-green-bright"
                >
                  Contact Our Team <Arrow />
                </TransitionLink>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
