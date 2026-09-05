import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { MicroForm } from "@/components/ui/MicroForm";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { SelectionMatrix } from "@/components/sections/products/SelectionMatrix";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  faqJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Product Selection Matrix",
  description:
    "Pick a cleaning chemical by the parameters — metal compatibility, operating temperature, dilution, foam, application method and rust protection.",
  keywords: [
    "cleaning chemical selection matrix",
    "degreaser comparison chart",
    "industrial cleaner specification table",
    "choose cleaning chemical by parameter",
  ],
  alternates: { canonical: "/products/selection-matrix" },
  openGraph: {
    type: "website",
    title: "Product Selection Matrix · Power Clean",
    description:
      "Every product on one spec sheet — metals, process window, application method and corrosion protection.",
    url: `${SITE_URL}/products/selection-matrix`,
  },
};

const FAQS = [
  {
    q: "How do I read the selection matrix?",
    a: "Start with the metal column — ferrous, aluminium, copper and brass, or plastics and bins — and rule out anything not ticked. Then check the application columns against your equipment, and finally the process window for the temperature and dilution your line can actually run.",
  },
  {
    q: "Which column matters most?",
    a: "Metal compatibility, because getting it wrong damages parts rather than just cleaning them poorly. Alkaline grades etch aluminium and zinc, so a mixed-metal basket sets the ceiling for the whole bath.",
  },
  {
    q: "What does a dash mean in the process window?",
    a: "That the figure is supplied on request with the technical data sheet rather than published here. Ask us and we will send the sheet with the product name prefilled.",
  },
  {
    q: "Can one product cover several wash processes?",
    a: "Often yes — many grades work across spray, soak and ultrasonic at different dilutions. The application columns show which methods each product is validated for; the foam column is what usually decides whether it can move between them.",
  },
];

export default function SelectionMatrixPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Products", url: `${SITE_URL}/products` },
            {
              name: "Selection matrix",
              url: `${SITE_URL}/products/selection-matrix`,
            },
          ]),
          faqJsonLd(FAQS),
          webPageJsonLd({
            name: "Power Clean product selection matrix",
            description:
              "Every product compared on metal compatibility, process window, application method and corrosion protection.",
            path: "/products/selection-matrix",
            about: ["Industrial cleaning chemicals", "Product selection"],
          }),
        ]}
      />
      <PageHero
        title="Pick by the Parameters"
        eyebrow="SELECTION MATRIX"
        blurb="Every product on one spec sheet — metal compatibility, process window, application methods and corrosion protection, side by side."
        minHeight="min(50vh, 440px)"
        titleClassName="text-[clamp(28px,3.8vw,54px)]"
        image="/photos/gallery-3.webp"
        imageAlt="Rows of machined steel bearing races after degreasing"
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1320px] px-5 pt-6 text-[12.5px] text-muted"
      >
        <TransitionLink href="/products" className="hover:text-green">
          Products
        </TransitionLink>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">Selection matrix</span>
      </nav>

      <SectionPanel outerClassName="px-3 pb-3 pt-6">
        <div className="page-answer mx-auto mb-9 max-w-[860px]">
          <p className="text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-muted-3 [text-wrap:pretty]">
            All {products.length} Power Clean products compared on the
            parameters that actually decide the choice: which metals each grade
            is safe on, the operating temperature and dilution it runs at, its
            chemistry and foam behaviour, the wash equipment it suits, and how
            long it protects parts from rust afterwards. Work left to right —
            metal first, because that is the one that damages parts when it is
            wrong.
          </p>
        </div>

        {/* the matrix's duty-spectrum block is an h3, so the page needs this
            h2 between it and the hero's h1 — otherwise the order skips */}
        <SectionHeading
          eyebrow="THE MATRIX"
          title="Every Product, Every Parameter"
          lede="Scroll the table sideways to reach the process window and application columns; on a phone it becomes a pane you pan around."
          className="mb-9 max-w-[660px]"
        />

        <SelectionMatrix />
      </SectionPanel>

      <SectionPanel tone="tint" outerClassName="p-3">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-9">
          <Reveal dir="left">
            <SectionHeading
              eyebrow="READING IT"
              title="How to Use the Matrix"
              className="mb-7 max-w-[520px]"
            />
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
            <div className="mt-8 flex flex-wrap gap-3">
              <TransitionLink
                href="/products/quick-view"
                className="group rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
              >
                Product list — quick view <Arrow />
              </TransitionLink>
              <TransitionLink
                href="/products"
                className="group rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
              >
                Browse all products <Arrow />
              </TransitionLink>
            </div>
          </Reveal>
          <Reveal dir="right">
            <MicroForm
              context="Selection matrix"
              heading="Want us to pick for you?"
              blurb="Send the metal, the soil and the wash equipment and we will name the grade, the dilution and the temperature."
            />
          </Reveal>
        </div>
      </SectionPanel>

      <div className="mx-auto max-w-[900px] px-5 py-[clamp(40px,6vw,72px)]">
        <SectionHeading
          eyebrow="QUESTIONS"
          title="Using the Matrix — FAQ"
          className="mb-9 max-w-[620px]"
        />
        <div className="flex flex-col gap-4">
          {FAQS.map((f, i) => (
            <Reveal
              key={f.q}
              dir="up"
              delay={Math.min(i, 4) * 70}
              className="rounded-card bg-white p-7 ring-1 ring-inset ring-line-2"
            >
              <h3 className="mb-2.5 text-[16px] font-semibold leading-[1.4] text-navy">
                {f.q}
              </h3>
              <p className="text-[14px] leading-[1.7] text-muted-3 [text-wrap:pretty]">
                {f.a}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaBanner
        eyebrow="STILL NARROWING IT DOWN?"
        heading="Send Us the Part"
        body="The matrix gets you to a shortlist. A sample component and a description of your soil gets you to the answer."
        ctaLabel="Request a Cleanup"
        ctaHref="/request-cleanup"
        image="/photos/production-hall.webp"
      />
    </>
  );
}

const STEPS = [
  {
    name: "Rule out by metal first",
    text: "Ferrous, aluminium, copper and brass, or plastics and bins. A grade that is not ticked for your metal is not a candidate, whatever else it does well.",
  },
  {
    name: "Match the application",
    text: "Spray/jet, immersion/soak, ultrasonic or manual wipe. This is where foam matters — spray washers and ultrasonic baths only take low-foam grades.",
  },
  {
    name: "Check the process window",
    text: "Operating temperature and dilution against what your line can actually hold. A bath that never reaches its window will underperform and, on low-foam grades, will foam.",
  },
  {
    name: "Finish on protection",
    text: "How long parts stay rust-free after the wash. Days is enough between operations; stock and transit need a dedicated rust preventive.",
  },
];
