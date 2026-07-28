import { HomeHero } from "@/components/sections/home/HomeHero";
import { LogoMarquee } from "@/components/sections/home/LogoMarquee";
import { CoreValues } from "@/components/sections/home/CoreValues";
import { SolutionsGrid } from "@/components/sections/home/SolutionsGrid";
import { Statement } from "@/components/sections/home/Statement";
import { Facility } from "@/components/sections/home/Facility";
import { Process } from "@/components/sections/home/Process";
import { CaseStudies } from "@/components/sections/home/CaseStudies";
import { CtaFormBanner } from "@/components/sections/home/CtaFormBanner";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Resources } from "@/components/sections/home/Resources";
import { HomeFaq } from "@/components/sections/home/HomeFaq";
import { RippleDivider } from "@/components/ui/RippleDivider";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <LogoMarquee />
      <CoreValues />
      <SolutionsGrid />
      <RippleDivider />
      <Statement />
      <Facility />
      <Process />
      <CaseStudies />
      <CtaFormBanner />
      <RippleDivider />
      <Testimonials />
      <Resources />
      <HomeFaq />
    </>
  );
}
