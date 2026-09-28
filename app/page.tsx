import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, howToJsonLd } from "@/lib/seo";
import { deploySteps } from "@/lib/solutions";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { LogoMarquee } from "@/components/sections/home/LogoMarquee";
import { CoreValues } from "@/components/sections/home/CoreValues";
import { SolutionsGrid } from "@/components/sections/home/SolutionsGrid";
import { Statement } from "@/components/sections/home/Statement";
import { Facility } from "@/components/sections/home/Facility";
import { Process } from "@/components/sections/home/Process";
import { CtaFormBanner } from "@/components/sections/home/CtaFormBanner";
import { Resources } from "@/components/sections/home/Resources";
import { HomeFaq } from "@/components/sections/home/HomeFaq";
import { WhyPowerClean } from "@/components/sections/home/WhyPowerClean";
import { WashProcesses } from "@/components/sections/home/WashProcesses";
import { ApplicationsIndex } from "@/components/sections/home/ApplicationsIndex";
import { ReplaceSolvents } from "@/components/sections/home/ReplaceSolvents";
import { RippleDivider } from "@/components/ui/RippleDivider";

/* Heavy below-fold client components — dynamic import keeps their GSAP/motion
   JS out of the initial bundle, improving Speed Index on mobile. */
const CaseStudies = dynamic(
  () =>
    import("@/components/sections/home/CaseStudies").then(
      (m) => m.CaseStudies,
    ),
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/home/Testimonials").then(
      (m) => m.Testimonials,
    ),
);

export const metadata: Metadata = {
  title:
    "Industrial Cleaning Chemicals India | Power Clean",
  description:
    "Water-based industrial cleaning chemicals, degreasers, TCE replacements, cooling tower chemicals and rust preventives. ISO 9001, Bangalore.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Industrial Cleaning Chemicals & Degreasers | Power Clean India",
    description:
      "Water-based degreasers, parts-washing chemistry and rust protection — formulated, trialled and supported on your line. 25+ years, ISO 9001 certified, Bangalore.",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          howToJsonLd({
            name: "How Power Clean builds an industrial cleaning programme",
            description:
              "The six-step process Roovel Solutions follows to take a plant from requirement mapping to a running, supported cleaning programme.",
            steps: deploySteps.map((s) => ({ name: s.title, text: s.body })),
          }),
        ]}
      />
      <HomeHero />
      <LogoMarquee />
      <WhyPowerClean />
      <CoreValues />
      <SolutionsGrid />
      <RippleDivider />
      <Statement />
      <Facility />
      <WashProcesses />
      <Process />
      <ApplicationsIndex />
      <CaseStudies />
      <ReplaceSolvents />
      <CtaFormBanner />
      <RippleDivider />
      <Testimonials />
      <Resources />
      <HomeFaq />
    </>
  );
}
