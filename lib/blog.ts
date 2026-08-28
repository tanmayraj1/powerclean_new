/**
 * Blog — buyer-intent, problem-solving articles targeting the terms Indian
 * plant engineers actually search. Every number, dilution, temperature and
 * result here comes from Power Clean's own published product data; nothing
 * is invented. Structure is deliberate: a short extractable answer up top,
 * hard numbers in tables, and an FAQ block — the shapes search engines and
 * AI answer engines quote.
 */

export type BlogBlock =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "table"; caption?: string; head: string[]; rows: string[][] }
  | { kind: "callout"; title: string; text: string }
  | { kind: "quote"; text: string; cite: string }
  | { kind: "cta"; text: string; href: string; label: string };

export type BlogPost = {
  slug: string;
  title: string;
  /** <title> — keyword-first, under 60 chars where possible */
  metaTitle: string;
  metaDescription: string;
  /** the 40–60 word extractable answer AI engines lift */
  answer: string;
  kicker: string;
  summary: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readMinutes: number;
  photo: string;
  photoAlt: string;
  /** quick-reference facts rendered as a key-facts card */
  keyFacts: { label: string; value: string }[];
  blocks: BlogBlock[];
  faqs: { q: string; a: string }[];
  /** optional procedural steps → HowTo schema */
  howTo?: { name: string; description: string; steps: { name: string; text: string }[] };
  related: string[];
};

export const blogPosts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "how-to-choose-industrial-degreaser",
    title: "How to Choose an Industrial Degreaser: A Buyer's Guide",
    metaTitle: "How to Choose an Industrial Degreaser — Buyer's Guide (India)",
    metaDescription:
      "Choosing an industrial degreaser in India: match chemistry to your metal, soil and wash equipment. Dilution ratios, wash temperatures, foam behaviour and bath life compared, with a selection checklist.",
    answer:
      "Choose an industrial degreaser by matching four things: your substrate (ferrous, aluminium, copper or mixed), your soil (cutting oil, buffing compound, carbon), your equipment (ultrasonic, spray, soak) and your foam tolerance. Aqueous alkaline concentrates dilutable to 1:100 suit most machining and assembly work at 55–65 °C.",
    kicker: "BUYER'S GUIDE",
    summary:
      "The four variables that decide which degreaser works on your line — substrate, soil, equipment and foam — plus a selection table across the full Power Clean range.",
    keywords: [
      "industrial degreaser",
      "industrial degreaser india",
      "best industrial cleaning chemical",
      "aqueous degreaser",
      "metal degreaser selection",
      "parts washing chemical",
    ],
    datePublished: "2026-01-14",
    dateModified: "2026-01-14",
    readMinutes: 9,
    photo: "/photos/blog-degreaser.webp",
    photoAlt:
      "Oily machined gears and cogs before industrial degreasing",
    keyFacts: [
      { label: "Typical dilution", value: "1:100 to 5:100 (1–5%)" },
      { label: "Optimum wash temperature", value: "55–65 °C" },
      { label: "TCE comparison", value: "90–100 °C required" },
      { label: "Rust protection after wash", value: "7–15 days" },
      { label: "Trial packing", value: "35 L pail" },
    ],
    blocks: [
      {
        kind: "p",
        text: "Most degreaser purchases go wrong the same way: a plant buys on price per litre, discovers the chemistry does not suit its metal or its washer, and ends up running it at double the recommended concentration to compensate. The cost per litre was never the number that mattered — the cost per component cleaned was.",
      },
      {
        kind: "p",
        text: "Power Clean is a range of industrial cleaning chemicals manufactured by Roovel Solutions Pvt. Ltd. in Bangalore, India, and we have been replacing solvents on Indian production lines since 2000. This guide is the same selection logic our applications engineers use before recommending a grade.",
      },
      { kind: "h2", text: "1. Start with the substrate, not the soil" },
      {
        kind: "p",
        text: "The metal decides the pH window before anything else does. Get this wrong and you will clean the part beautifully while etching, darkening or white-rusting it.",
      },
      {
        kind: "table",
        caption: "Chemistry by substrate",
        head: ["Substrate", "Chemistry needed", "Power Clean grade"],
        rows: [
          ["Mild steel, carbon steel, cast iron", "Mildly alkaline with rust inhibitor — flash rust is the risk, not etching", "SP (XL-77), XL"],
          ["Aluminium, ADC10/ADC12 die-cast", "Neutral to mildly alkaline, inhibited against white rust", "NF-14, LF-59, ALB"],
          ["Copper, brass, bronze", "Neutral or controlled acidic for oxide removal, then passivate", "NF-14, DE-33, DE-34 + CU-20"],
          ["Stainless steel 304/316", "Mild alkaline, spray-and-wipe", "SS"],
          ["Mixed-metal baskets", "Neutral or mild alkaline that is safe across all of them", "NF-14, LF-59"],
        ],
      },
      {
        kind: "callout",
        title: "Why mixed-metal matters commercially",
        text: "One bath that safely handles aluminium, brass, copper and steel removes an entire change-over from the shift. An export-focused precision components house running Power Clean LF-59 consolidated to a single non-ferrous process and reported less downtime and a lower cost per part.",
      },
      { kind: "h2", text: "2. Match the chemistry to the soil" },
      {
        kind: "p",
        text: "Different soils need different mechanisms — emulsification for oils, saponification for fatty residues, solvency for adhesives and carbon. A single product rarely spans the extremes, which is why the range splits the way it does.",
      },
      {
        kind: "table",
        caption: "Chemistry by soil",
        head: ["Soil on the part", "What removes it", "Grade"],
        rows: [
          ["Cutting oil, coolant, hydraulic oil", "Alkaline emulsification at 1–5%", "XL, XL+"],
          ["Buffing and lapping compound", "Low-foam alkaline, higher mechanical energy", "XL-16 (low foam to 8 bar)"],
          ["Carbon deposits, varnish on pistons", "Hot alkaline with penetrants, 62–70 °C", "CR21"],
          ["Adhesive, gum, tar", "Solvent or citrus-terpene", "AR, CD-9, PC-S 312"],
          ["Scale in cooling water", "Inhibited descaler safe on copper/brass", "DE-46"],
          ["Flash rust risk after wash", "Cleaner with built-in rust protection", "SP, or RP-14 in the rinse"],
        ],
      },
      { kind: "h2", text: "3. Let the washer decide the foam profile" },
      {
        kind: "p",
        text: "This is the variable buyers most often ignore, and it is the one that wrecks spray lines. In a high-jet or tunnel washer, foam is not a cosmetic problem — it destroys the mechanical cleaning energy you are paying for.",
      },
      {
        kind: "list",
        items: [
          "Foam cushions jet impingement, so the shear that actually removes soil never reaches the surface.",
          "Entrained air causes pump cavitation and erratic pressure, and blinds filters.",
          "Foam carries chemical out of the bath as drag-out, increasing consumption and contaminating rinse stages.",
          "Aeration accelerates oxidation and shortens bath life, forcing early dumps.",
          "Foam-over creates slip hazards, sensor errors and overflow into drains.",
        ],
      },
      {
        kind: "table",
        caption: "Foam profile by equipment",
        head: ["Equipment", "Foam requirement", "Grade"],
        rows: [
          ["High-jet spray, tunnel, conveyor", "No foam", "LF, LF-45, LF-43, XL-32"],
          ["Ultrasonic tanks", "Low foam — foam damps cavitation", "XL, NF-14, LF-59"],
          ["Soak and dip tanks", "Low foam, high soil loading", "XL, SP, BW-77"],
          ["Manual wipe / automotive service bays", "Foam is useful — it clings", "HD, CD-9"],
        ],
      },
      { kind: "h2", text: "4. Check the process window you can actually run" },
      {
        kind: "p",
        text: "A chemical that needs 70 °C is useless if your tank heater tops out at 45 °C. Confirm the temperature and dilution band before you commit, and confirm it against your own parts rather than a datasheet.",
      },
      {
        kind: "table",
        caption: "Typical process windows",
        head: ["Grade", "Dilution", "Temperature"],
        rows: [
          ["POWER CLEAN XL", "1–15% (from 1:100)", "60–70 °C"],
          ["POWER CLEAN NF-14", "3–15%", "40–55 °C"],
          ["POWER CLEAN SP", "3–15%", "40–50 °C"],
          ["POWER CLEAN LF", "1–15%", "40–70 °C"],
          ["POWER CLEAN LF-59", "2–10%", "Ambient–65 °C"],
          ["POWER CLEAN CR21", "5–25%", "62–70 °C"],
          ["POWER CLEAN ALB", "5–9% ultrasonic / 10–15% manual", "25–40 °C"],
        ],
      },
      { kind: "h2", text: "The economics buyers miss" },
      {
        kind: "p",
        text: "Concentrates are bought by the litre and consumed by the dilution. One 35-litre pail of POWER CLEAN XL at 1:100 makes up to 3,500 litres of working bath. Judge a quotation on cost per litre of made-up bath, then on how long that bath survives before it is dumped.",
      },
      {
        kind: "list",
        items: [
          "Bath life extends dramatically with oil skimming and particulate filtration — a skimmer plus filter makes soil removal automatic.",
          "Recirculating the full tank volume once per minute is the rule of thumb for heat and agitation.",
          "Reported cost reductions average 60% when replacing solvent or caustic processes.",
          "Aqueous chemistry has an indefinite shelf life; solvents evaporate in storage.",
        ],
      },
      { kind: "h2", text: "A selection checklist" },
      {
        kind: "ol",
        items: [
          "List every metal that goes through the bath, including fixtures and baskets.",
          "Identify the dominant soil and the worst-case soil.",
          "Note your equipment type, spray pressure and maximum bath temperature.",
          "Decide whether parts need rust protection after the wash, and for how long.",
          "Set your cleanliness target — visual, water-break-free, gravimetric, or millipore.",
          "Trial on your own parts with agreed pass/fail criteria before committing to supply.",
        ],
      },
      {
        kind: "cta",
        text: "Not sure which grade fits your line? Send us a sample part — we clean it and send it back so you can validate the result before buying.",
        href: "/contact",
        label: "Request a free cleaning trial",
      },
    ],
    faqs: [
      {
        q: "What is the best industrial degreaser for mixed-metal parts?",
        a: "A neutral-pH or mildly alkaline inhibited cleaner. POWER CLEAN NF-14 (neutral pH) and LF-59 are formulated so aluminium, brass, copper and steel can share one bath without discolouration, etching or white rust — removing change-overs between metal types.",
      },
      {
        q: "What dilution should an industrial degreaser be used at?",
        a: "Most Power Clean aqueous concentrates work between 1% and 15% by volume, with 1–5% covering typical machining soils. Heavier duties such as carbon removal run 5–25%. Always confirm on your own parts, since soil loading and agitation change the effective concentration.",
      },
      {
        q: "What temperature should a parts washer run at?",
        a: "55–65 °C is the optimum band for aqueous cleaning and the range where most Power Clean grades perform best. By comparison, trichloroethylene needs 90–100 °C. Higher temperature lowers soil viscosity and makes the chemistry more aggressive, but it also raises energy cost and evaporation.",
      },
      {
        q: "How long does a cleaning bath last?",
        a: "It depends on soil loading, drag-out rate and maintenance. Bath life extends substantially when oil is skimmed and particulate is filtered continuously. Monitor concentration by titration or refractometer and top up rather than waiting for cleaning quality to fall.",
      },
      {
        q: "Is an aqueous degreaser safe for aluminium?",
        a: "Only if it is inhibited for it. Uninhibited high-alkaline cleaners etch and darken aluminium and can cause white rust. POWER CLEAN NF-14, LF-59 and ALB are formulated specifically for aluminium including ADC10 and ADC12 die-cast alloys.",
      },
    ],
    related: [
      "removing-white-rust-aluminium-die-cast",
      "ultrasonic-cleaning-chemical-guide",
      "replacing-tce-plant-guide",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "removing-white-rust-aluminium-die-cast",
    title: "Removing White Rust from Aluminium Die-Cast Parts (ADC10 / ADC12)",
    metaTitle: "How to Remove White Rust from Aluminium Die-Cast Parts",
    metaDescription:
      "White rust on ADC10/ADC12 aluminium: why it forms, how to remove oxidation and black marks, and how to stop it coming back. Concentrations, temperatures and ultrasonic settings included.",
    answer:
      "White rust on aluminium die-castings is aluminium hydroxide formed when moisture stays on the surface after washing. Remove it with an inhibited acidic brightener such as POWER CLEAN ALB at 5–9% in ultrasonic at room temperature, then prevent recurrence with an inhibited cleaner, a clean rinse and thorough drying.",
    kicker: "PROBLEM SOLVING",
    summary:
      "Why white rust forms on ADC12 castings, how to strip it without attacking the base metal, and the process changes that stop it returning.",
    keywords: [
      "white rust aluminium",
      "ADC12 cleaning",
      "aluminium brightener",
      "die casting cleaning chemical",
      "aluminium white rust removal",
      "ADC10 degreaser",
    ],
    datePublished: "2026-01-21",
    dateModified: "2026-01-21",
    readMinutes: 8,
    photo: "/photos/blog-whiterust.webp",
    photoAlt:
      "Aluminium die-cast parts of the type affected by white rust",
    keyFacts: [
      { label: "Alloys", value: "ADC10, ADC12 (LM6 / LM24), 3000/5000/6000 series" },
      { label: "ALB ultrasonic dose", value: "5–9% at 25–35 °C, 3–8 min" },
      { label: "ALB manual soak", value: "10–15%, 15–20 min" },
      { label: "Ultrasonic frequency", value: "28–40 kHz" },
      { label: "Documented result", value: "White-rust defects 3.2% → 0.4% in 45 days" },
    ],
    blocks: [
      {
        kind: "p",
        text: "White rust is the defect that quietly destroys yield on die-cast lines. Parts leave the washer looking acceptable, and by the time they reach inspection or the customer, a dull white bloom has formed across the surface. It is rejected as cosmetic, but the cause is process, not appearance.",
      },
      { kind: "h2", text: "What white rust actually is" },
      {
        kind: "p",
        text: "Aluminium oxidises the moment it meets air, forming a thin protective oxide layer. That layer is stable when dry. When moisture is trapped against the surface — in a blind hole, under a fixture, between stacked parts, or simply because the part was not dried properly — the reaction continues and produces aluminium hydroxide: a loose, powdery white deposit. Die-castings are especially prone because their porosity holds water.",
      },
      {
        kind: "list",
        items: [
          "Parts stacked or binned while still damp",
          "Incomplete rinsing, leaving alkaline residue that keeps reacting",
          "Hard or untreated rinse water leaving mineral deposits that hold moisture",
          "An uninhibited high-alkaline cleaner attacking the aluminium directly",
          "Humid storage without any protective film",
        ],
      },
      { kind: "h2", text: "Removing existing white rust and oxidation" },
      {
        kind: "p",
        text: "Removal needs controlled acidity. POWER CLEAN ALB is an organic acid-based brightener developed for ADC10 and ADC12 — strong enough to strip oxidation, black marks and grey staining, mild enough that it does not aggressively attack the base metal the way mineral acids do.",
      },
      {
        kind: "table",
        caption: "POWER CLEAN ALB application methods",
        head: ["Method", "Concentration", "Temperature", "Time", "Best for"],
        rows: [
          ["Ultrasonic (recommended)", "5–9%", "Room temp 25–35 °C", "3–8 min", "High volume, complex geometry"],
          ["Manual soak", "10–15%", "Room temp", "15–20 min", "Small batches, delicate parts"],
          ["Air agitation", "10–12%", "Room temp", "10–15 min", "Medium volume, moderate soiling"],
        ],
      },
      {
        kind: "callout",
        title: "No heating required",
        text: "ALB works at room temperature (25–35 °C). Slight warming up to 40 °C can help on heavily oxidised parts but is usually unnecessary — which keeps energy cost out of the process entirely.",
      },
      { kind: "h2", text: "Stopping it coming back" },
      {
        kind: "p",
        text: "Stripping the bloom is the easy half. If the process that created it is unchanged, it returns within days. Four changes fix it in almost every plant we have worked in.",
      },
      {
        kind: "ol",
        items: [
          "Switch to an inhibited cleaner formulated for aluminium. POWER CLEAN LF-59 is built for ADC10, ADC12 and 6000-series work, with phosphonate-based corrosion inhibitors and biodegradable surfactants, and runs from ambient temperature with no foam in spray systems.",
          "Rinse thoroughly, preferably with DM water. For critical parts use a two-stage rinse — it removes residue completely and prevents water spotting.",
          "Dry completely and immediately. Filtered hot air or nitrogen; do not bin parts while damp.",
          "Control the bath. Monitor concentration by titration or refractometer, keep filtration running, and hold the working pH in band — LF-59 typically sits at pH 9.3–10.3.",
        ],
      },
      {
        kind: "quote",
        text: "After switching to POWER CLEAN LF-59 for our ADC12 engine housings, we saw a reduction in white-rust defects from 3.2% to 0.4% within 45 days.",
        cite: "Major automotive OEM, Bengaluru",
      },
      { kind: "h2", text: "The commercial case" },
      {
        kind: "p",
        text: "A drop from 3.2% to 0.4% rejection on a die-cast line is not a cosmetic improvement, it is recovered yield on every shift. A second plant running 6000-series extrusions through a spray tunnel reported 20% faster cycle time in low-foam mode, with re-works down.",
      },
      {
        kind: "p",
        text: "There is a consolidation benefit too. Because LF-59 is safe across mixed metals, aluminium, brass, copper and steel can run in the same bath — one process instead of separate lines with a change-over between them.",
      },
      {
        kind: "cta",
        text: "Send us an affected part. We will clean it, return it, and tell you which process change caused the bloom.",
        href: "/contact",
        label: "Get a free part evaluation",
      },
    ],
    howTo: {
      name: "How to remove white rust from aluminium die-cast parts",
      description:
        "Strip white rust and oxidation from ADC10/ADC12 aluminium castings and prevent recurrence.",
      steps: [
        { name: "Degrease first", text: "Remove oils and coolant with an inhibited aluminium-safe cleaner such as POWER CLEAN NF-14 or LF-59 so the brightener contacts bare metal." },
        { name: "Brighten", text: "Immerse in POWER CLEAN ALB at 5–9% in an ultrasonic tank at 25–35 °C for 3–8 minutes, or 10–15% manual soak for 15–20 minutes." },
        { name: "Rinse thoroughly", text: "Rinse with clean water, preferably DM water. Use a two-stage rinse for critical parts to prevent water spotting." },
        { name: "Dry immediately", text: "Dry completely with filtered hot air or nitrogen. Never bin or stack parts while damp." },
        { name: "Protect and control", text: "Switch the wash stage to an inhibited aluminium cleaner, monitor bath concentration, and keep filtration running to prevent recurrence." },
      ],
    },
    faqs: [
      {
        q: "What causes white rust on aluminium die castings?",
        a: "Moisture trapped against the aluminium surface after washing. Aluminium reacts with water to form aluminium hydroxide, a powdery white deposit. Die-castings are especially prone because their porosity retains water, and the problem is worsened by incomplete rinsing, damp stacking or an uninhibited alkaline cleaner.",
      },
      {
        q: "How do you remove white rust from aluminium?",
        a: "Use an inhibited acidic brightener. POWER CLEAN ALB at 5–9% in an ultrasonic bath at 25–35 °C for 3–8 minutes removes white rust, oxidation and black marks without aggressively attacking the base metal. Follow with a thorough DM-water rinse and immediate drying.",
      },
      {
        q: "Can I clean ADC12 and 6000-series aluminium with the same chemical?",
        a: "Yes. POWER CLEAN LF-59 is formulated for both high-pressure die-cast alloys (ADC10, ADC12) and 6000-series extrusions, and is compatible with ultrasonic, spray-wash, immersion and tunnel systems.",
      },
      {
        q: "Does the brightening bath need heating?",
        a: "No. POWER CLEAN ALB is designed to work at room temperature, typically 25–35 °C. Warming to 40 °C can speed up heavily oxidised parts but is not normally required.",
      },
      {
        q: "How long does an aluminium brightening bath last?",
        a: "Typically 3–6 months in ultrasonic systems, depending on load and contamination. Regular concentration monitoring and filtration extend it considerably.",
      },
      {
        q: "Will cleaning cause white patches on aluminium?",
        a: "Not with an inhibited, aluminium-specific product used at the correct dilution with a proper rinse and dry. White patches almost always trace back to an uninhibited alkaline cleaner, residual cleaner left on the part, or parts stored damp.",
      },
    ],
    related: [
      "how-to-choose-industrial-degreaser",
      "ultrasonic-cleaning-chemical-guide",
      "replacing-tce-plant-guide",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "replacing-tce-plant-guide",
    title: "Replacing TCE: A Plant Manager's Switching Guide",
    metaTitle: "TCE Replacement Guide — Switching From Trichloroethylene",
    metaDescription:
      "How to replace trichloroethylene (TCE) with aqueous cleaning: the health and compliance case, a point-by-point comparison, conversion of existing vapour tanks, and a staged changeover plan.",
    answer:
      "Replace trichloroethylene by converting to an inhibited aqueous degreaser run at 55–65 °C with adequate agitation. Existing vapour degreasing tanks can usually be converted to submersion systems at low cost by adding recirculation. Expect lower cost per part, no solvent permits, and rust protection of 10–15 days after washing.",
    kicker: "SOLVENT REPLACEMENT",
    summary:
      "The compliance case, the head-to-head comparison, and a practical staged plan for moving a production line off trichloroethylene without losing cleanliness.",
    keywords: [
      "TCE replacement",
      "trichloroethylene alternative",
      "TCE substitute india",
      "solvent replacement degreaser",
      "vapour degreasing alternative",
      "chlorinated solvent replacement",
    ],
    datePublished: "2026-01-28",
    dateModified: "2026-01-28",
    readMinutes: 10,
    photo: "/photos/blog-tce.webp",
    photoAlt:
      "Blue chemical drums on a plant floor during a solvent changeover",
    keyFacts: [
      { label: "Replacing TCE since", value: "2000, in Indian plants" },
      { label: "Aqueous wash temperature", value: "55–65 °C" },
      { label: "TCE wash temperature", value: "90–100 °C" },
      { label: "Environmental load", value: "1 L TCE can pollute 1,000,000 L of water" },
      { label: "Post-wash rust protection", value: "10–15 days" },
    ],
    blocks: [
      {
        kind: "p",
        text: "Trichloroethylene cleans well. That is the honest starting point, and it is why plants stay with it. But the reasons to leave have compounded: the health evidence, the handling restrictions, the storage risk, and — the one that usually decides it — the running cost once you account for evaporation losses and controlled handling.",
      },
      {
        kind: "p",
        text: "Roovel Solutions has been replacing TCE, diesel, kerosene and naphtha on Indian production lines since 2000. What follows is the comparison we put in front of plant managers, and the changeover sequence that works.",
      },
      { kind: "h2", text: "The head-to-head comparison" },
      {
        kind: "table",
        caption: "POWER CLEAN aqueous vs trichloroethylene",
        head: ["Factor", "POWER CLEAN", "Trichloroethylene"],
        rows: [
          ["Scope", "Multi-purpose across metals and non-metals", "A specific metal degreaser"],
          ["Emissions", "Eco-friendly, non-toxic chemistry", "Emits hazardous toxic vapours"],
          ["Use form", "Completely soluble, used diluted", "Used in concentrated form"],
          ["Handling", "Non-corrosive, proven operator acceptability", "Corrosive; needs secluded areas and proper exhaust"],
          ["Health", "Non-hazardous in normal use", "Long-term concerns: liver, kidney, increased cancer risk"],
          ["Storage", "Non-explosive", "Barrels known to explode in storage"],
          ["Environment", "Easy to handle, mix and dilute", "1 litre can pollute a million litres of river water"],
          ["Reuse", "Can be recycled", "Cannot be recycled"],
          ["Temperature", "55–65 °C", "90–100 °C"],
          ["Shelf life", "Indefinite", "Evaporation losses in storage"],
          ["Rust protection", "Protects parts 10–15 days", "No rust inhibitors"],
        ],
      },
      { kind: "h2", text: "What actually changes on the shop floor" },
      {
        kind: "p",
        text: "The honest difference is process steps. A vapour degreaser can wash, rinse and dry in effectively one operation. Aqueous cleaning is three: wash, rinse, dry — sometimes with multiple wash or rinse stages. That is the trade you are making, and in exchange you get better process control, repeatability, far lower operating cost and no solvent compliance burden.",
      },
      {
        kind: "list",
        items: [
          "Wash removes the soil — chemistry plus heat plus agitation.",
          "Rinse removes the cleaning agent, ideally with DM water for precision work.",
          "Dry removes the water, because water left on the part is what causes corrosion.",
        ],
      },
      {
        kind: "callout",
        title: "You may not need new equipment",
        text: "Existing vapour degreasing tanks can be converted to POWER CLEAN submersion systems in a short time and at little expense. The conversion is worth doing properly — adding recirculation pumps and jetting gives the mechanical agitation aqueous chemistry needs, at low capital cost.",
      },
      { kind: "h2", text: "A staged changeover plan" },
      {
        kind: "ol",
        items: [
          "Map the current process: parts, metals, soils, cycle time, cleanliness standard and the real reason TCE was chosen.",
          "Study the contaminants. The soil, not the habit, determines the replacement chemistry.",
          "Validate in the lab on your actual parts, checking cleanliness, compatibility and bath life.",
          "Convert or specify equipment — adapt the existing tank with recirculation, or specify a spray/ultrasonic system sized to throughput.",
          "Run a supervised trial on the line with agreed pass/fail criteria, and measure against the current process rather than against a datasheet.",
          "Move to supply with dosing control, skimming and filtration in place, and train operators on concentration and bath maintenance.",
        ],
      },
      { kind: "h2", text: "What you gain" },
      {
        kind: "list",
        items: [
          "Lower cost per component cleaned, and lower overall cost",
          "Better and more consistent cleaning",
          "Reduced inventory — one chemistry replaces several",
          "Better regulatory compliance and easier waste management",
          "Worker safety, and no special storage precautions",
          "Rust protection built into the wash rather than bought separately",
        ],
      },
      {
        kind: "p",
        text: "There is a wider reason too. Industrial solvent exposure has been the subject of long-running health research, including studies associating trichloroethylene exposure with Parkinson's disease. The safest exposure to a chlorinated solvent is none.",
      },
      {
        kind: "cta",
        text: "We come to your plant, study the process with your team, and guide the switch end to end — at a lower cost of ownership, legally and safely.",
        href: "/contact",
        label: "Plan your TCE replacement",
      },
    ],
    howTo: {
      name: "How to replace TCE with aqueous cleaning",
      description:
        "A staged plan for converting an industrial cleaning line from trichloroethylene to inhibited aqueous chemistry.",
      steps: [
        { name: "Map the current process", text: "Document parts, metals, soils, cycle time, cleanliness standard and why TCE was originally selected." },
        { name: "Study the contaminants", text: "Analyse the actual soils on the part — this determines which aqueous chemistry can replace the solvent." },
        { name: "Validate in the lab", text: "Test cleaning performance, substrate compatibility and bath life on your own components before changing anything on the line." },
        { name: "Convert the equipment", text: "Adapt the existing vapour tank into a submersion system with recirculation pumps and jetting, or specify a spray or ultrasonic washer sized to throughput." },
        { name: "Run a supervised trial", text: "Run production parts with agreed pass/fail criteria, measuring against the existing TCE process." },
        { name: "Move to supply", text: "Set up dosing control, oil skimming and filtration, and train operators on concentration checks and bath maintenance." },
      ],
    },
    faqs: [
      {
        q: "What can replace trichloroethylene for metal cleaning?",
        a: "An inhibited aqueous degreaser in most cases. Water-based alkaline concentrates such as POWER CLEAN XL, NF-14 and LF cover the majority of machining and assembly soils at 55–65 °C. Where immersion is not yet possible, a hydrocarbon or citrus solvent such as PC-S 342 acts as a drop-in replacement.",
      },
      {
        q: "Do I need to buy a new washing machine to stop using TCE?",
        a: "Often not. Existing vapour degreasing tanks can be converted to aqueous submersion systems quickly and at low cost. Adding recirculation pumps and jetting to provide mechanical agitation is the main change, and it can usually be done to existing equipment.",
      },
      {
        q: "Is aqueous cleaning as effective as TCE?",
        a: "For the great majority of industrial soils, yes — and it is more controllable, because you can adjust time, agitation, concentration and temperature independently. Aqueous requires wash, rinse and dry stages rather than a single vapour step, which is the real process trade-off.",
      },
      {
        q: "Will parts rust after switching from solvent to water-based cleaning?",
        a: "Not when the process is set up correctly. Power Clean formulations carry rust inhibitors that protect washed and dried parts for roughly 10–15 days, and grades such as SP are designed specifically for flash-rust-prone mild and carbon steel. For longer storage, add a dedicated rust preventive.",
      },
      {
        q: "How much does switching from TCE cost?",
        a: "Capital cost is often minimal if existing tanks can be converted. Running cost typically falls, because concentrates are diluted heavily, the bath is recyclable rather than evaporating, and solvent handling and permitting requirements disappear.",
      },
    ],
    related: [
      "how-to-choose-industrial-degreaser",
      "ultrasonic-cleaning-chemical-guide",
      "cooling-tower-descaling-guide",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "ultrasonic-cleaning-chemical-guide",
    title: "Ultrasonic Cleaning Chemicals: Concentration, Temperature and Bath Life",
    metaTitle: "Ultrasonic Cleaning Chemical Guide — Dose, Temperature, Bath Life",
    metaDescription:
      "Choosing and running an ultrasonic cleaning chemical: why water alone does not clean, the 50–65 °C optimum, what must never go in the tank, cavitation checks and bath maintenance.",
    answer:
      "Ultrasonic cleaning needs a chemical that lowers surface tension so cavitation can work — water alone has no cleaning properties. Run most aqueous ultrasonic baths at 5% concentration and 50–65 °C. Never use flammables, and avoid acids or bleach, which damage stainless tanks.",
    kicker: "PROCESS GUIDE",
    summary:
      "How cavitation actually cleans, which chemistry to run at what concentration and temperature, what will damage your tank, and how to keep a bath working.",
    keywords: [
      "ultrasonic cleaning chemical",
      "ultrasonic cleaner solution",
      "ultrasonic degreaser",
      "ultrasonic cleaning temperature",
      "cavitation cleaning",
      "ultrasonic bath maintenance",
    ],
    datePublished: "2026-02-04",
    dateModified: "2026-02-04",
    readMinutes: 8,
    photo: "/photos/blog-ultrasonic.webp",
    photoAlt:
      "Precision metal components cleaned in an ultrasonic bath",
    keyFacts: [
      { label: "Optimum temperature", value: "50–65 °C" },
      { label: "Typical concentration", value: "5% aqueous solution" },
      { label: "ALB on aluminium", value: "5–9% at 28–40 kHz" },
      { label: "Never use", value: "Flammables, low flash point liquids" },
      { label: "Avoid", value: "Acids and bleach — damage stainless tanks" },
    ],
    blocks: [
      {
        kind: "p",
        text: "An ultrasonic cleaner is a metal tank with piezo transducers bonded to its base or sides. High-frequency electrical energy becomes sound energy, which forms and collapses millions of microscopic bubbles in the liquid. That collapse — cavitation — releases enough energy at the part surface to lift contamination out of bores, blind holes and crevices that no jet can reach.",
      },
      {
        kind: "callout",
        title: "The point most plants miss",
        text: "Water alone has no cleaning properties. Soils adhere to parts — if they did not, they would simply fall off. The chemical breaks the bond between the part and the soil; the ultrasonic energy assists it. Cavitation intensity itself increases as the fluid's surface tension falls, which is one of the things the chemistry is doing.",
      },
      { kind: "h2", text: "Choosing the chemistry" },
      {
        kind: "p",
        text: "Ultrasonic solutions are compounded from detergents, wetting agents and reactive components. Selection is driven by the substrate first, then the soil.",
      },
      {
        kind: "table",
        caption: "Ultrasonic grade selection",
        head: ["Parts", "Grade", "Notes"],
        rows: [
          ["Multi-metal, general machining soils", "POWER CLEAN XL", "1–15%, 60–70 °C, rust inhibited"],
          ["Aluminium, brass, copper, bronze, nickel", "POWER CLEAN NF-14", "Neutral pH, 3–15%, 40–55 °C, no white rust"],
          ["ADC10/ADC12 and 6000-series aluminium", "POWER CLEAN LF-59", "2–10%, ambient–65 °C, pH 9.3–10.3"],
          ["Aluminium needing brightening", "POWER CLEAN ALB", "5–9%, room temp, 28–40 kHz, 3–8 min"],
          ["Carbon deposits, engine parts", "POWER CLEAN CR21", "5–25%, 62–70 °C"],
          ["Rust and oxidation removal", "PC Rust Remover 27", "1:3 light, 1:2 heavy rust"],
        ],
      },
      { kind: "h2", text: "Temperature and time" },
      {
        kind: "p",
        text: "Heat almost always helps: most detergent solutions are formulated to work best warm, and higher temperature lowers soil viscosity. The best results usually fall within 50–65 °C. Beyond that you gain little and start paying for evaporation.",
      },
      {
        kind: "p",
        text: "Cycle time is the easiest variable to change and the one most often misapplied. Visible soil removal should begin almost immediately once the ultrasonics start. If a cycle needs to be long, the problem is usually concentration, temperature or the wrong chemistry — not insufficient time. Approximate the cycle from experience, then validate it with your actual soiled parts.",
      },
      { kind: "h2", text: "What must never go in the tank" },
      {
        kind: "list",
        items: [
          "Flammables and low flash point solvents — cavitation converts energy into heat and creates hazardous conditions. This is a safety rule, not a preference.",
          "Acids and bleach in the main tank — they damage stainless steel tanks and can create hazardous by-products. Where unavoidable, use indirect cleaning in a glass beaker suspended in the bath.",
          "Uninhibited high-alkaline cleaner on aluminium — it will etch and darken the part.",
        ],
      },
      { kind: "h2", text: "Checking your machine is actually working" },
      {
        kind: "p",
        text: "Cavitation degrades as transducers age, and a weak tank looks identical to a healthy one. The aluminium foil test is the standard quick check: suspend a sheet of household foil in the tank and run a short cycle. Even, fine perforation across the sheet means cavitation is distributed properly; untouched areas mean dead zones.",
      },
      { kind: "h2", text: "Bath maintenance" },
      {
        kind: "ol",
        items: [
          "Replenish when cleaning action noticeably drops or the solution is visibly spent — a fresh batch every session is not required.",
          "Skim floating oil and filter particulate; both extend bath life substantially.",
          "Monitor concentration by titration or refractometer rather than by eye.",
          "Rinse after cleaning to remove chemical residue, using tap, distilled or DM water depending on how critical the part is.",
          "Dry thoroughly — parts left damp will corrode regardless of how well they were cleaned.",
        ],
      },
      {
        kind: "cta",
        text: "Send us a part and tell us your tank size and frequency — we will specify the chemistry, concentration and cycle, and prove it on your components first.",
        href: "/contact",
        label: "Get an ultrasonic recommendation",
      },
    ],
    faqs: [
      {
        q: "What chemical should I use in an ultrasonic cleaner?",
        a: "An aqueous cleaner formulated for your substrate. POWER CLEAN XL suits multi-metal machining soils, NF-14 is neutral-pH for aluminium, brass and copper, and LF-59 handles ADC10/ADC12 die-castings. Never use flammable solvents in an ultrasonic tank.",
      },
      {
        q: "What temperature should an ultrasonic cleaner run at?",
        a: "Usually 50–65 °C. Heat enhances and speeds up cleaning and most detergent solutions are designed to work best at elevated temperature, but the optimum for your parts is best found by testing.",
      },
      {
        q: "Can I put acid or bleach in an ultrasonic cleaner?",
        a: "Generally no. Acids and bleach damage stainless steel tanks and can create hazardous conditions. If an acidic process is unavoidable, use indirect cleaning — the part and acid in a glass beaker suspended in the water-filled tank.",
      },
      {
        q: "Why is water alone not enough in an ultrasonic bath?",
        a: "Water has no cleaning properties of its own. Soils are bonded to the part, and the chemical's job is to break that bond; the cavitation assists it. Detergents and wetting agents also lower surface tension, which increases cavitation intensity.",
      },
      {
        q: "How do I know if my ultrasonic cleaner is still cavitating?",
        a: "Run the aluminium foil test: suspend a sheet of foil in the tank and run a short cycle. Even, fine perforation means cavitation is working across the tank; untouched areas indicate dead zones or failing transducers.",
      },
      {
        q: "How often should ultrasonic cleaning solution be changed?",
        a: "When cleaning action visibly drops or the solution is dirty or spent. Skimming oil and filtering particulate extends bath life considerably, so a well-maintained bath lasts far longer than an unmanaged one.",
      },
    ],
    related: [
      "how-to-choose-industrial-degreaser",
      "removing-white-rust-aluminium-die-cast",
      "replacing-tce-plant-guide",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "cooling-tower-descaling-guide",
    title: "Cooling Tower Descaling: Chemistry, Dosage and Schedule",
    metaTitle: "Cooling Tower Descaling Chemicals — Dosage & Schedule Guide",
    metaDescription:
      "Descaling cooling towers and heat exchangers: which scales form, choosing an inhibited descaler safe on copper and brass, biocide dosing for algae and odour, and a maintenance schedule.",
    answer:
      "Descale a cooling tower with an inhibited descaler containing a corrosion inhibitor, such as POWER CLEAN DE-46, which dissolves silica, carbonate, silicate and sulphate scales while protecting copper and brass. Pair it with a low-dosage biocide like SA-17 to control bacteria, algae, fungi and odour.",
    kicker: "MAINTENANCE GUIDE",
    summary:
      "What scale does to heat transfer and energy cost, how to remove it without attacking the metal, and how to keep the system clean between services.",
    keywords: [
      "cooling tower descaling chemical",
      "cooling tower cleaning chemicals",
      "heat exchanger descaler",
      "cooling tower biocide",
      "chiller descaling",
      "descaling chemical india",
    ],
    datePublished: "2026-02-11",
    dateModified: "2026-02-11",
    readMinutes: 7,
    photo: "/photos/blog-cooling.webp",
    photoAlt:
      "Industrial cooling tower fans requiring descaling maintenance",
    keyFacts: [
      { label: "Descaler", value: "POWER CLEAN DE-46 (SKU 503)" },
      { label: "Biocide", value: "POWER CLEAN SA-17 (SKU 915)" },
      { label: "Metal safety", value: "Multi-metal, safe on copper and brass" },
      { label: "Scales removed", value: "Silica, carbonates, silicates, sulphates" },
      { label: "Efficiency stake", value: "3/16\" fouling can cut efficiency 21% (US EPA)" },
    ],
    blocks: [
      {
        kind: "p",
        text: "A cooling tower exists to reject heat that equipment has picked up. Everything that degrades that heat transfer costs energy directly — and scale degrades it faster than almost anything else, because a mineral layer on a heat exchange surface is an insulator.",
      },
      {
        kind: "callout",
        title: "What fouling costs",
        text: "According to the US Environmental Protection Agency, a build-up of only 3/16 of an inch of fouling on coils can decrease efficiency by 21%. That is a fifth of your cooling capacity lost to a deposit thinner than a pencil.",
      },
      { kind: "h2", text: "What actually forms in the system" },
      {
        kind: "p",
        text: "Cooling water concentrates as it evaporates, and dissolved minerals come out of solution on the hottest surfaces. Dirty, scale-filled basins and pipework then become a breeding ground for bacteria and fungi, which is where the foul odour around a neglected tower comes from.",
      },
      {
        kind: "list",
        items: [
          "Scale deposits — silica, carbonates, silicates, and sulphate salts of calcium, magnesium and sodium",
          "Corrosion products from mild steel pipework and copper or brass exchanger tubes",
          "Biological growth — slime-forming bacteria, sulphate-reducing bacteria, algae and fungi",
          "Airborne dirt and dust washed into the basin from the air stream",
        ],
      },
      { kind: "h2", text: "Choosing a descaler that will not eat the system" },
      {
        kind: "p",
        text: "The mistake is to use a raw acid. It removes scale efficiently and attacks the base metal along with it — a particular risk in systems with copper and brass exchanger tubing. What you want is a descaling agent with surfactants and a built-in corrosion inhibitor.",
      },
      {
        kind: "p",
        text: "POWER CLEAN DE-46 combines a powerful descaling agent, a surfactant and corrosion inhibitors for cooling towers, chillers and heat exchangers. It dissolves scale rapidly, prevents and removes corrosion in the same operation, is safe as a multi-metal descaler including copper and brass, and is effective at low dosing.",
      },
      { kind: "h2", text: "Controlling biological growth" },
      {
        kind: "p",
        text: "Descaling a system and leaving the biology untouched simply resets the clock. POWER CLEAN SA-17 is a biocide for open circulating cooling systems that controls bacteria, algae and fungi, and is effective against slime-forming and sulphate-reducing bacteria — the organisms responsible for both fouling and bad odour. It works at low dosage.",
      },
      { kind: "h2", text: "A maintenance schedule that holds" },
      {
        kind: "ol",
        items: [
          "Inspect the basin, fill and exchanger surfaces on a fixed cycle rather than when a problem appears.",
          "Descale with an inhibited descaler when deposit thickness starts to affect approach temperature or pressure drop.",
          "Dose biocide continuously or on a shock schedule for open circulating systems to keep biological counts down.",
          "Control blowdown so dissolved solids do not concentrate to the point where scale forms rapidly.",
          "Keep the basin free of debris and sludge, which shelters biological growth from the biocide.",
          "Record approach temperature and energy consumption — a rising trend is scale forming before you can see it.",
        ],
      },
      { kind: "h2", text: "Signs you are already losing efficiency" },
      {
        kind: "list",
        items: [
          "Approach temperature creeping up over weeks with no change in load",
          "Chiller working harder for the same cooling duty, showing as higher energy consumption",
          "Visible white or grey deposits on fill and basin surfaces",
          "Foul or musty odour around the tower, indicating biological growth",
          "Pressure drop increasing across heat exchangers",
        ],
      },
      {
        kind: "cta",
        text: "Tell us your system volume, metallurgy and water quality — we will recommend the descaler dosage and biocide schedule for it.",
        href: "/contact",
        label: "Get a descaling recommendation",
      },
    ],
    faqs: [
      {
        q: "What chemical is used for cooling tower descaling?",
        a: "An inhibited descaler containing a corrosion inhibitor. POWER CLEAN DE-46 dissolves silica, carbonate, silicate and sulphate scale in cooling towers, chillers and heat exchangers while protecting the base metal, and is safe on copper and brass.",
      },
      {
        q: "How much efficiency does cooling tower scale cost?",
        a: "A build-up of only 3/16 of an inch of fouling on coils can decrease efficiency by 21%, according to the US EPA. Because the effect is gradual, it usually shows up as rising energy consumption before anyone inspects the surfaces.",
      },
      {
        q: "Is a descaling chemical safe for copper and brass tubes?",
        a: "Only if it is inhibited. Raw acids attack copper and brass. POWER CLEAN DE-46 is formulated as a multi-metal descaler with built-in corrosion inhibitors specifically so it can be used in systems containing copper and brass.",
      },
      {
        q: "Why does a cooling tower smell bad?",
        a: "Biological growth. Warm, nutrient-rich standing water supports bacteria, algae and fungi, including slime-forming and sulphate-reducing bacteria. A biocide such as POWER CLEAN SA-17 controls the growth and removes the odour at its source.",
      },
      {
        q: "How often should a cooling tower be descaled?",
        a: "It depends on water hardness, cycles of concentration and load, so schedule by condition rather than calendar. Track approach temperature and energy use, inspect on a fixed cycle, and descale when deposits begin to affect heat transfer.",
      },
    ],
    related: [
      "how-to-choose-industrial-degreaser",
      "replacing-tce-plant-guide",
      "ultrasonic-cleaning-chemical-guide",
    ],
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

/** rough word count for schema — computed from the rendered blocks */
export function wordCountOf(post: BlogPost): number {
  const text = [
    post.answer,
    post.summary,
    ...post.blocks.flatMap((b) => {
      if (b.kind === "p" || b.kind === "h2" || b.kind === "h3") return [b.text];
      if (b.kind === "list" || b.kind === "ol") return b.items;
      if (b.kind === "callout") return [b.title, b.text];
      if (b.kind === "quote") return [b.text];
      if (b.kind === "cta") return [b.text];
      if (b.kind === "table")
        return [...b.head, ...b.rows.flat(), b.caption ?? ""];
      return [];
    }),
    ...post.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}
