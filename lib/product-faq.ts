import type { CatalogueProduct } from "./products";

/**
 * Per-product FAQs, derived from each product's own published specification.
 *
 * The 41 catalogue pages were the thinnest on the site (~400 words) while
 * being the deepest keyword targets — "POWER CLEAN NF-14", "aluminium cleaner
 * ADC12". They needed substance, and the honest way to add it is to answer
 * the questions the spec sheet already contains rather than to write filler.
 *
 * Two rules hold this to real data:
 *  - a question is only emitted when the product actually carries the spec it
 *    would answer from, so products get genuinely different question sets;
 *  - category-level fallbacks state the published range for that family
 *    (1–5%, 55–65 °C) and never a figure invented for one product.
 */
export type ProductFaq = { q: string; a: string };

/** first matching spec value, or undefined */
function spec(p: CatalogueProduct, ...labels: string[]): string | undefined {
  for (const l of labels) {
    const hit = p.specs.find(
      (s) => s.label.toLowerCase() === l.toLowerCase()
    );
    if (hit?.value) return hit.value;
  }
  return undefined;
}

const hasTag = (p: CatalogueProduct, ...needles: string[]) =>
  p.tags.some((t) => needles.some((n) => t.toLowerCase().includes(n)));

/** "A · B · C" → "A, B and C" so answers read as prose, not as a spec cell */
function prose(value: string): string {
  const parts = value
    .split(/[·,]/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length <= 1) return value.trim();
  return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}

export function productFaqs(p: CatalogueProduct): ProductFaq[] {
  const faqs: ProductFaq[] = [];
  const N = p.name;

  // — what it is for ————————————————————————————————————————————————
  if (p.applications.length) {
    faqs.push({
      q: `What is ${N} used for?`,
      a: `${p.description} Typical applications are ${prose(
        p.applications.join(" · ")
      ).toLowerCase()}.`,
    });
  }

  // — metal compatibility ———————————————————————————————————————————
  const metals = spec(p, "Metals", "Safe on", "Best on");
  if (metals) {
    faqs.push({
      q: `Which metals is ${N} safe on?`,
      a: `${N} is formulated for ${prose(metals)}.${
        hasTag(p, "aluminium safe", "non-etching", "white rust")
          ? " It will not etch, stain or bloom the surface, which is what alkaline chemistry above roughly pH 10 does to aluminium and zinc."
          : ""
      } If your basket carries a metal not listed, ask us before running a trial — substrate compatibility is tested on your actual parts.`,
    });
  } else if (p.category === "aqueous") {
    faqs.push({
      q: `Which metals is ${N} safe on?`,
      a: `Compatibility is confirmed against your actual components before anything is recommended. As a rule, alkaline grades suit steel and cast iron, while aluminium, zinc, brass and mixed-metal baskets need a neutral-pH grade such as POWER CLEAN NF-14.`,
    });
  }

  // — dilution ——————————————————————————————————————————————————————
  const dilution = spec(p, "Dilution", "Dosage", "Concentration");
  if (dilution) {
    faqs.push({
      q: `What dilution does ${N} run at?`,
      a: `${dilution}. Start at the lower end of the range, confirm cleanliness on the actual part, and step up only if it fails — then hold the figure with a weekly titration rather than topping up by eye.`,
    });
  } else if (p.category === "aqueous") {
    faqs.push({
      q: `What dilution does ${N} run at?`,
      a: `Power Clean aqueous concentrates work between 1% and 5% — that is 1:100 to 5:100 with water. Light maintenance soils sit at the low end; heavy machining oil, buffing compound and carbon need the upper end. The exact figure is set during the trial on your own parts.`,
    });
  }

  // — temperature ———————————————————————————————————————————————————
  const temp = spec(p, "Temperature");
  if (temp) {
    faqs.push({
      q: `What temperature should ${N} be used at?`,
      a: `${temp}.${
        p.category === "aqueous"
          ? " Running an aqueous bath below its designed window costs cleaning performance, and on low-foam grades it is also the most common cause of foaming."
          : ""
      }`,
    });
  } else if (p.category === "aqueous") {
    faqs.push({
      q: `What temperature should ${N} be used at?`,
      a: `55–65 °C for most aqueous grades. That is also where low-foam products stop foaming, because their surfactant clouds out just below the working range. A trichloroethylene vapour degreaser, by comparison, has to be held at 90–100 °C.`,
    });
  }

  // — equipment —————————————————————————————————————————————————————
  const use = spec(p, "Application", "Use", "Method");
  if (use) {
    faqs.push({
      q: `Which wash equipment suits ${N}?`,
      a: `${N} is intended for ${prose(use).toLowerCase()} use.${
        hasTag(p, "low foam")
          ? " It is a low-foam grade, which is a requirement rather than a preference in spray washers and ultrasonic baths — foam aerates a spray pump and cushions the cavitation that does the cleaning in an ultrasonic tank."
          : /ultrasonic/i.test(use)
            ? " Ultrasonic cleaning reaches blind holes, cross-drillings and thread roots that a spray jet cannot see, and it needs a bath that has been degassed after every fresh fill."
            : /spray/i.test(use)
              ? " Spray washing adds mechanical impingement to the chemistry, so it is faster on open geometry but cannot reach shadowed or blind features."
              : ""
      }`,
    });
  }

  // — rust protection ————————————————————————————————————————————————
  const prevents = spec(p, "Prevents", "Protection", "Inhibited");
  if (prevents || hasTag(p, "rust protection", "inhibitor", "inhibited")) {
    faqs.push({
      q: `Does ${N} protect parts against rust?`,
      a: `${
        prevents ? `${N} is formulated to prevent ${prose(prevents).toLowerCase()}. ` : ""
      }Power Clean aqueous concentrates carry an in-built corrosion inhibitor giving roughly 7–15 days of indoor protection after the wash. For stock, transit or export, use a dedicated rust preventive such as PC RP-636, which gives 3–6 months.`,
    });
  }

  // — what it replaces ———————————————————————————————————————————————
  const replaces = spec(p, "Replaces");
  if (replaces) {
    faqs.push({
      q: `What does ${N} replace?`,
      a: `${N} replaces ${prose(replaces)}. It drops into existing equipment, which is what makes it a route for plants that cannot rebuild the line as an aqueous wash, rinse and dry process straight away.`,
    });
  }

  // — family context, so thin-spec products still carry a real answer ——
  if (faqs.length < 4) {
    const family: Record<string, string> = {
      aqueous:
        "the water-based cleaner and degreaser family — biodegradable, non-flammable, zero-VOC concentrates used diluted, which replace trichloroethylene, kerosene, diesel and caustic soda on parts washing lines",
      cooling:
        "the cooling-water treatment family — inhibited descalers and biocides for cooling towers, heat exchangers and closed circuits, safe on copper and brass",
      solvent:
        "the solvent cleaner family — high-flash, non-chlorinated degreasers used where water cannot go, including assembled machinery and live electrical equipment",
      rust: "the rust protection family — preventives that hold bare metal through storage and transit, and removers that strip existing corrosion",
    };
    faqs.push({
      q: `Where does ${N} sit in the Power Clean range?`,
      a: `${N} belongs to ${family[p.category]}. The full range runs to 41 products across four families, and the selection matrix on the catalogue page compares every one of them on metal compatibility, process window and application method.`,
    });
  }

  // — supply ————————————————————————————————————————————————————————
  faqs.push({
    q: `What pack sizes does ${N} come in, and is an SDS supplied?`,
    a: `35 L, 50 L, 200 L and 1000 L, with custom packing available. Every product ships with a safety data sheet plus dosing and PPE guidance, and production runs to an ISO 9001 certified system with batch-wise quality control. Trials normally start with a single 35 L pail.`,
  });

  return faqs;
}
