import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { RippleDivider } from "@/components/ui/RippleDivider";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/motion/Reveal";
import { Backdrop } from "@/components/ui/Backdrop";
import { CatalogueGrid } from "@/components/sections/catalogue/CatalogueGrid";
import { RangeHierarchy } from "@/components/sections/catalogue/RangeHierarchy";
import { RangeMap } from "@/components/sections/catalogue/RangeMap";
import { SelectionMatrix } from "@/components/sections/catalogue/SelectionMatrix";
import { products } from "@/lib/catalogue";
import { propertyTags } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "The full Power Clean product catalogue — aqueous cleaners and degreasers, cooling tower descalers and biocides, solvent degreasers including a TCE replacement, and rust protection.",
  alternates: { canonical: "/catalogue" },
};

export default function CataloguePage() {
  return (
    <>
      <PageHero
        title="The Power Clean Catalogue"
        eyebrow="PRODUCT CATALOGUE"
        blurb={`${products.length} products across aqueous cleaning, cooling-water treatment, solvent replacement and rust protection — every one supplied with dosing guidance and an SDS.`}
        minHeight="min(56vh, 480px)"
      />

      {/* CATEGORY MAP — the range as one chart */}
      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <SectionHeading
          eyebrow="BY CATEGORY"
          title="Four Families, One Standard"
          lede="The whole range on one map — pick a family to open every series and product inside it."
          className="mb-10 max-w-[620px]"
        />
        <RangeMap />
      </SectionPanel>

      {/* THE RANGE — full hierarchy on one page */}
      <SectionPanel outerClassName="p-3" id="range">
        <SectionHeading
          eyebrow="THE RANGE AT A GLANCE"
          title="Category → Series → Product"
          lede="The complete Power Clean range, organised the way our chemists think about it. Open a family, pick a series, and jump straight to any product — every code links to its own page."
          className="mb-9 max-w-[680px]"
        />
        <RangeHierarchy />
      </SectionPanel>

      {/* FULL CATALOGUE */}
      <div className="relative isolate mx-auto max-w-[1320px] px-5 pb-5 pt-[clamp(40px,6vw,72px)]">
        <Backdrop />
        <Backdrop variant="rings" className="right-[-12%] top-[6%] h-[560px] w-[560px]" />
        <SectionHeading
          eyebrow="ALL PRODUCTS"
          title="Browse the Full Range"
          lede="Filter by family, or tell us your soils and substrates and we will match the grade for you."
          className="mb-9"
        />
        <CatalogueGrid />
      </div>

      {/* SELECTION MATRIX */}
      <SectionPanel outerClassName="p-3">
        <SectionHeading
          eyebrow="SELECTION MATRIX"
          title="Pick by the Parameters"
          lede="Every product on one spec sheet — metal compatibility, process window, application methods and corrosion protection, side by side. Slide across on mobile."
          className="mb-9 max-w-[680px]"
        />
        <SelectionMatrix />
      </SectionPanel>

      <RippleDivider />

      {/* PROPERTIES */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="WHY POWER CLEAN"
          title="Built Into Every Formulation"
          size="md"
          className="mb-9 max-w-[620px]"
        />
        <div className="mx-auto flex max-w-[860px] flex-wrap justify-center gap-2.5">
          {propertyTags.map((t, i) => (
            <Reveal key={t} dir="up" delay={(i % 4) * 60}>
              <span className="inline-block rounded-full border border-line bg-white px-[18px] py-2.5 text-[13px] font-semibold text-navy">
                {t}
              </span>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[620px] text-center text-[13.5px] leading-[1.7] text-muted-3">
          Power Clean replaces petrol, diesel, kerosene, trichloroethylene,
          perchloroethylene, naphtha and caustic soda — Roovel Solutions has
          been replacing TCE and other toxic solvents in Indian plants since
          2000.
        </p>
      </SectionPanel>

      <CtaBanner
        eyebrow="NOT SURE WHICH GRADE?"
        heading="Send Us a Sample Part"
        body="Our lab tests it against your soils and substrates, then comes back with a matched product, dilution and trial plan."
        ctaLabel="Request a Consultation"
        ctaHref="/contact"
        imageBrief="Photo — lab bench with sample parts and product containers"
        wedge
      />
    </>
  );
}
