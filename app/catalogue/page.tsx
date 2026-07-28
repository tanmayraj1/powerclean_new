import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { RippleDivider } from "@/components/ui/RippleDivider";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/motion/Reveal";
import { Backdrop } from "@/components/ui/Backdrop";
import { CatalogueGrid } from "@/components/sections/catalogue/CatalogueGrid";
import { categories, products } from "@/lib/catalogue";
import { propertyTags } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "The full Power Clean product catalogue — aqueous cleaners and degreasers, cooling tower descalers and biocides, solvent degreasers including a TCE replacement, and rust protection.",
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

      {/* CATEGORY OVERVIEW */}
      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <SectionHeading
          eyebrow="BY CATEGORY"
          title="Four Families, One Standard"
          lede="Every formulation is trialled on your parts before it is recommended."
          className="mb-10 max-w-[620px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
          {categories.map((c, i) => (
            <Reveal
              key={c.key}
              dir="up"
              delay={i * 80}
              className="rounded-img-lg bg-card-tint p-6"
            >
              <div className="mb-2.5 flex items-baseline gap-2">
                <span className="font-mono text-[22px] font-semibold text-green-deep">
                  {String(products.filter((p) => p.category === c.key).length).padStart(2, "0")}
                </span>
                <h3 className="text-[15px] font-semibold leading-tight text-navy">
                  {c.label}
                </h3>
              </div>
              <p className="text-[13px] leading-[1.6] text-muted">{c.blurb}</p>
            </Reveal>
          ))}
        </div>
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
