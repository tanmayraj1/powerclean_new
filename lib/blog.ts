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
    metaTitle: "How to Choose an Industrial Degreaser",
    metaDescription:
      "Choosing an industrial degreaser: match chemistry to your metal, soil and wash equipment. Dilutions, temperatures and foam compared, with a checklist.",
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
      "carbon-deposit-removal-guide",
      "industrial-cleaning-cost-per-part",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "removing-white-rust-aluminium-die-cast",
    title: "Removing White Rust from Aluminium Die-Cast Parts (ADC10 / ADC12)",
    metaTitle: "Remove White Rust from Aluminium Castings",
    metaDescription:
      "White rust on ADC10/ADC12 aluminium — why it forms, how to remove oxidation and black marks, and how to stop it coming back for good.",
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
      "aluminium-cleaning-chemical-guide",
      "cleaning-chemical-safety-documentation",
      "how-to-choose-industrial-degreaser",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "replacing-tce-plant-guide",
    title: "Replacing TCE: A Plant Manager's Switching Guide",
    metaTitle: "TCE Replacement Guide for Plants",
    metaDescription:
      "Replace trichloroethylene with aqueous cleaning — the compliance case, a point-by-point comparison, and a staged plant changeover plan.",
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
    metaTitle: "Ultrasonic Cleaning Chemical Guide",
    metaDescription:
      "Choosing an ultrasonic cleaning chemical — why water alone will not clean, the 50–65 °C optimum, cavitation checks and bath maintenance.",
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
      "millipore-cleanliness-testing",
      "ultrasonic-vs-spray-vs-dip-tank",
      "how-to-choose-industrial-degreaser",
    ],
  },

  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "cooling-tower-descaling-guide",
    title: "Cooling Tower Descaling: Chemistry, Dosage and Schedule",
    metaTitle: "Cooling Tower Descaling Chemicals",
    metaDescription:
      "Descaling cooling towers and heat exchangers — which scales form, choosing an inhibited descaler safe on copper and brass, and biocide dosing.",
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
      "industrial-floor-cleaning-guide",
      "cleaning-chemical-safety-documentation",
      "how-to-choose-industrial-degreaser",
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "ultrasonic-vs-spray-vs-dip-tank",
    title: "Ultrasonic vs Spray Wash vs Dip Tank: Choosing a Parts Washing Process",
    metaTitle: "Ultrasonic vs Spray Wash vs Dip Tank",
    metaDescription:
      "Ultrasonic vs spray wash vs dip tank — compared on part geometry, throughput, achievable cleanliness, chemistry constraint and capital cost.",
    answer:
      "Choose ultrasonic for blind holes and precision cleanliness, spray wash for high throughput on open geometry, and a dip tank for heavy soils, complex parts and low capital. Ultrasonic and spray both require low-foam chemistry; a dip tank does not. Most plants end up combining two of the three.",
    kicker: "PROCESS SELECTION",
    summary:
      "The three parts-washing processes compared on the things that actually decide the choice — part geometry, throughput, achievable cleanliness, chemistry constraint and capital cost.",
    keywords: [
      "ultrasonic vs spray wash",
      "parts washing process selection",
      "dip tank vs spray washer",
      "industrial parts washing machine",
      "component cleaning process india",
    ],
    datePublished: "2026-02-04",
    dateModified: "2026-02-04",
    readMinutes: 11,
    photo: "/photos/solution-lf.webp",
    photoAlt:
      "Precision machined components staged for ultrasonic and spray wash cleaning",
    keyFacts: [
      { label: "Ultrasonic frequency", value: "25–40 kHz" },
      { label: "Wash temperature (all three)", value: "55–65 °C" },
      { label: "Concentration", value: "1–5%" },
      { label: "Low-foam required", value: "Ultrasonic and spray" },
      { label: "Reaches blind holes", value: "Ultrasonic and dip only" },
    ],
    blocks: [
      {
        kind: "p",
        text: "The chemical gets the blame when parts fail inspection, but very often the chemistry was fine and the process was wrong for the part. A spray washer cannot clean a blind hole no matter what is in the tank, and an ultrasonic bath filled with a foaming cleaner is an expensive heater. Getting the process right first makes the chemistry decision much simpler.",
      },
      { kind: "h2", text: "The three processes, in one table" },
      {
        kind: "table",
        caption: "Parts washing processes compared",
        head: ["", "Ultrasonic", "Spray wash", "Dip tank"],
        rows: [
          ["Cleaning mechanism", "Cavitation (acoustic)", "Impingement (jet)", "Chemistry + dwell"],
          ["Reaches blind holes", "Yes", "No", "Yes"],
          ["Throughput", "Moderate", "High", "Low to moderate"],
          ["Achievable cleanliness", "Highest", "Good", "Good with agitation"],
          ["Foam tolerance", "None — low foam only", "None — low foam only", "Tolerant"],
          ["Capital cost", "High", "High", "Low"],
          ["Typical cycle", "5–15 min", "2–6 min", "10–30 min"],
          ["Risk", "Erodes soft metals if over-run", "Shadowed areas missed", "Oil re-coats on withdrawal"],
        ],
      },
      { kind: "h2", text: "Ultrasonic: when geometry beats throughput" },
      {
        kind: "p",
        text: "Ultrasonic cleaning works by cavitation. A transducer drives the bath through pressure cycles; microscopic vapour cavities form and implode, and each implosion is a tiny jet that strips soil from whatever surface it strikes. Because the cleaning is carried by the liquid rather than by a directed jet, it reaches everywhere the liquid reaches — cross-drillings, thread roots, blind bores, the inside of a cage.",
      },
      {
        kind: "p",
        text: "That is why bearing, injector and hydraulic work runs ultrasonic. When the specification is a weighed Millipore residue or a particle-size limit, there is no realistic alternative for complex parts.",
      },
      {
        kind: "p",
        text: "Two things reliably go wrong. First, foam: a foaming cleaner cushions the implosions and the bath goes quiet while still looking active. Only low-foam chemistry belongs in an ultrasonic tank. Second, a bath that has not been degassed — fresh water carries dissolved air that does exactly what foam does, which is why a new fill needs 10–20 minutes under power before it cleans properly.",
      },
      {
        kind: "callout",
        title: "Frequency is a trade-off, not a spec sheet number",
        text: "25 kHz makes larger, more energetic bubbles — better on heavy soils, but capable of eroding soft aluminium or dulling polished faces if the cycle runs long. 40 kHz gives gentler, denser cavitation for fine components. Validate cycle time on scrap parts before committing.",
      },
      { kind: "h2", text: "Spray wash: when throughput is the constraint" },
      {
        kind: "p",
        text: "Spray washing adds mechanical impingement to chemistry, and that mechanical component does a lot of the work. On open geometry a spray tunnel typically cleans faster and at lower concentration than a soak tank handling the same soil, which is why production lines standardise on it.",
      },
      {
        kind: "p",
        text: "Its limitation is line of sight. Anything a jet cannot reach — deep blind holes, internal galleries, the shadowed underside of a nested part — sees only whatever solution happens to flow past. Fixturing and basket rotation matter as much as nozzle pressure, and some parts simply cannot be cleaned this way.",
      },
      {
        kind: "p",
        text: "The recurring failure is foam. Nozzles and the returning cascade inject enormous quantities of air, and an aerated pump chamber cavitates, loses pressure and eventually damages the pump. A low-foam cleaner solves it — but only at its designed temperature, because low-foam behaviour depends on the surfactant clouding out above its cloud point. A spray washer run cold will foam with the correct chemical in it.",
      },
      { kind: "h2", text: "Dip tank: when the part is difficult and the budget is not large" },
      {
        kind: "p",
        text: "An immersion or soak tank has no jets and no ultrasound, so chemistry, temperature and dwell do everything. That makes it slower — but completely geometry-independent. If solution reaches a surface, that surface is being cleaned, which is why heavily soiled castings, weldments and awkward fabrications so often end up in a soak tank.",
      },
      {
        kind: "p",
        text: "It is also the only one of the three that tolerates a foaming cleaner, and a foam blanket on the surface actually reduces heat loss and evaporation.",
      },
      {
        kind: "p",
        text: "Simple agitation transforms it. Basket oscillation, a recirculation pump or air sparging replaces the saturated boundary layer at the part surface with fresh chemistry, and often halves cycle time for very little money. The one thing a dip tank must have is a surface skimmer — without it, floating oil re-coats every part on withdrawal, and the tank quietly stops working long before anyone dumps it.",
      },
      { kind: "h2", text: "How to choose" },
      {
        kind: "ol",
        items: [
          "Look at the part first. If it has blind holes, cross-drillings or internal passages that must be clean, spray wash is out on its own — you need ultrasonic or immersion.",
          "Then look at the specification. A weighed cleanliness limit or particle count points to ultrasonic with filtration and a DI rinse. A visual or wipe-test standard leaves all three open.",
          "Then look at throughput. Above a few hundred parts an hour on open geometry, a spray tunnel is usually the only economic answer.",
          "Then look at the soil. Baked carbon and forging scale need dwell and heat, which means soak — no amount of jet pressure substitutes for time.",
          "Finally check the chemistry constraint. Ultrasonic and spray both mandate low-foam. If your existing cleaner foams, it does not move to either process unchanged.",
        ],
      },
      {
        kind: "p",
        text: "In practice most plants that clean to a real specification end up with two stages: a spray or soak pre-wash to take the bulk soil off, then an ultrasonic finish for the features that matter, followed by a counter-flow rinse and a controlled dry.",
      },
      {
        kind: "cta",
        text: "Send us the part and the soil and we will tell you which process it needs — including when the answer is that your existing machine is fine and only the chemistry has to change.",
        href: "/contact",
        label: "Ask our applications lab",
      },
    ],
    faqs: [
      {
        q: "Is ultrasonic cleaning better than spray washing?",
        a: "Better for geometry, not for throughput. Ultrasonic cavitation reaches blind holes and internal features a spray jet cannot see, and achieves higher cleanliness. A spray washer processes far more parts per hour on open geometry. Many lines use both — spray to pre-wash, ultrasonic to finish.",
      },
      {
        q: "Can I use the same cleaner in a dip tank and a spray washer?",
        a: "Only if it is low-foam. A dip tank tolerates a foaming cleaner; a spray washer does not — aerated solution cavitates the pump and collapses wash pressure. A low-foam grade such as Power Clean LF works in both, provided the bath runs at its designed 55–65 °C.",
      },
      {
        q: "Why does my ultrasonic bath clean poorly when it is brand new?",
        a: "It probably has not been degassed. Fresh water carries dissolved air that cushions cavitation implosions. Run the transducers at working temperature with no parts loaded for 10–20 minutes after every fresh fill, and after any large water top-up.",
      },
      {
        q: "What is the cheapest way to improve a soak tank?",
        a: "A surface skimmer. Without one, oil floats on the bath and re-coats every part as it comes out — so the tank appears to stop cleaning long before the chemistry is spent. A skimmer plus simple basket agitation typically outperforms increasing the concentration.",
      },
      {
        q: "How long should a wash cycle be?",
        a: "Validate it rather than assume it. Ultrasonic cycles typically run 5–15 minutes, spray 2–6 minutes and soak 10–30 minutes, but the correct figure is the shortest one that passes your cleanliness check on the actual part. Over-running an ultrasonic cycle can erode soft aluminium.",
      },
    ],
    related: [
      "ultrasonic-cleaning-chemical-guide",
      "how-to-choose-industrial-degreaser",
      "foam-control-spray-washer",
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "rust-prevention-between-processes",
    title: "Rust Prevention Between Processes: Inhibitors, RP Oils and VCI",
    metaTitle: "Rust Prevention for Machined Parts",
    metaDescription:
      "Stop machined steel rusting between operations and in transit — inhibitors, oil-based rust preventives and VCI compared by protection period.",
    answer:
      "Match the rust preventive to the storage period. In-built cleaner inhibition covers 7–15 days indoors between operations. An oil-based rust preventive such as PC RP-636 gives 3–6 months for stock and transit. VCI packaging protects sealed enclosures including internal bores. All three require a genuinely dry part first.",
    kicker: "CORROSION CONTROL",
    summary:
      "Why cleaned steel rusts within minutes, and how to choose between in-built inhibition, water-based inhibitors, oil-based preventives and VCI for each stage of the part's journey.",
    keywords: [
      "rust prevention machined parts",
      "rust preventive oil india",
      "VCI packaging",
      "flash rust after cleaning",
      "corrosion prevention steel components",
    ],
    datePublished: "2026-02-11",
    dateModified: "2026-02-11",
    readMinutes: 10,
    photo: "/photos/solution-sp.webp",
    photoAlt:
      "Freshly machined steel components requiring rust protection before storage",
    keyFacts: [
      { label: "Flash rust onset", value: "Minutes on warm damp steel" },
      { label: "In-built cleaner protection", value: "7–15 days indoors" },
      { label: "PC RP-636 protection", value: "3–6 months" },
      { label: "PC RP-636 touch-dry", value: "10–15 minutes" },
      { label: "Precondition for all", value: "Completely dry part" },
    ],
    blocks: [
      {
        kind: "p",
        text: "Cleaning creates the corrosion problem it is blamed for. The oil film that was protecting a machined part is exactly what the degreaser removes, and what is left is chemically bare steel, still warm from the wash, carrying a thin layer of water. In monsoon humidity that surface can show orange flash rust in under five minutes.",
      },
      {
        kind: "p",
        text: "This is not a cleaner defect. It is what clean, unprotected steel does. The question is only which protection scheme covers the interval before the part is used, coated or shipped.",
      },
      { kind: "h2", text: "Four levels of protection" },
      {
        kind: "table",
        caption: "Rust protection options by storage period",
        head: ["Option", "Typical protection", "Removal needed", "Best for"],
        rows: [
          ["In-built cleaner inhibition", "7–15 days indoors", "No", "Between operations, same plant"],
          ["Water-based inhibitor in final rinse", "Days to a few weeks", "Rinses off", "Short holds, pre-coating"],
          ["Oil-based rust preventive", "3–6 months", "Degrease before use", "Stock, dispatch, transit"],
          ["VCI packaging", "Months to years, sealed", "None — evaporates", "Sea freight, internal bores"],
        ],
      },
      { kind: "h2", text: "Level 1 — the protection already in your cleaner" },
      {
        kind: "p",
        text: "Power Clean aqueous concentrates carry a corrosion inhibitor as part of the formulation, so parts leave the wash with 7–15 days of indoor protection without any additional stage. For a plant where components go from wash to assembly within a fortnight, that is often the whole answer, and it costs nothing extra.",
      },
      {
        kind: "p",
        text: "The limits are real though. It is indoor protection, and it assumes the part is dry. A part packed damp defeats it, because the inhibitor cannot outrun standing water in a blind hole.",
      },
      { kind: "h2", text: "Level 2 — a water-based inhibitor in the final rinse" },
      {
        kind: "p",
        text: "Where the wash chemistry cannot carry inhibition — a neutral cleaner on aluminium, say, running through a line that also handles steel — the inhibitor can go into the last rinse instead. It applies in the process you already have, adds no drying burden, and rinses off cleanly before painting or plating.",
      },
      {
        kind: "p",
        text: "Many of these products double as drying agents, lowering surface tension so water sheets off rather than beading. That attacks the flash-rust window from both directions at once: less water left on the part, and inhibition on what remains.",
      },
      { kind: "h2", text: "Level 3 — oil-based rust preventives" },
      {
        kind: "p",
        text: "When parts go into stock or onto a truck, days of protection are not enough. An oil-based rust preventive lays down a continuous barrier film that displaces residual moisture and excludes air. PC RP-636 gives 3 to 6 months of protection and is touch-dry in 10 to 15 minutes, which matters on a line where parts have to be handled and packed immediately.",
      },
      {
        kind: "p",
        text: "The cost is a removal step later. The film has to be degreased off before machining, painting or assembly — which is straightforward, but it is a stage, and it needs to be in the process plan rather than discovered at the customer's inward inspection.",
      },
      {
        kind: "callout",
        title: "The most common rust-preventive failure is timing, not product",
        text: "A preventive applied over a damp or contaminated surface seals moisture against the metal and accelerates exactly the corrosion it was bought to stop. Dry first — including blind holes and box sections — then coat.",
      },
      { kind: "h2", text: "Level 4 — VCI for sealed packages and internal bores" },
      {
        kind: "p",
        text: "A vapour corrosion inhibitor works differently from everything above. It sublimes from a paper, film or emitter, saturates the air inside a sealed package, and adsorbs as a molecular film on every metal surface — including internal passages and blind bores that no liquid coating will ever reach uniformly.",
      },
      {
        kind: "p",
        text: "Its absolute requirement is enclosure. VCI in an open crate does nothing at all; the vapour simply disperses. The package must be genuinely sealed, and the parts must be clean and dry going in, because VCI cannot protect metal that is already under moisture or salt.",
      },
      {
        kind: "p",
        text: "VCI and oil films are complementary rather than alternatives. On an export assembly the usual answer is both: a preventive film on the exposed faces, VCI in the bag for the internal geometry.",
      },
      { kind: "h2", text: "A working sequence" },
      {
        kind: "ol",
        items: [
          "Wash at the recommended concentration and temperature — an under-dosed bath leaves soil that will sit under whatever you apply next.",
          "Rinse in clean water, counter-flow if the line allows, with a DI final stage for cosmetic or precision parts.",
          "Dry completely. Blow out blind holes and box sections. This is the step most often skipped and most often responsible for failures downstream.",
          "Apply protection matched to the interval: nothing extra for a fortnight indoors, an oil-based preventive for stock and transit, VCI in the bag for sealed or export packaging.",
          "Pack dry, and do not stack parts damp — a sealed humid pocket beats any inhibitor given enough time.",
        ],
      },
      {
        kind: "cta",
        text: "Tell us how long parts have to survive and in what conditions, and we will match the protection level — including the cases where your current cleaner already covers it and you are paying for a stage you do not need.",
        href: "/contact",
        label: "Get a protection plan",
      },
    ],
    howTo: {
      name: "How to protect machined steel parts from rust after cleaning",
      description:
        "A five-step sequence for preventing flash rust and storage corrosion on freshly cleaned steel components.",
      steps: [
        { name: "Wash correctly", text: "Run the cleaner at its recommended concentration and 55–65 °C. Residual soil under a rust preventive causes the failure it was meant to stop." },
        { name: "Rinse clean", text: "Use a counter-flow rinse, with a deionised final stage for cosmetic or precision parts, so no dissolved solids are left on the surface." },
        { name: "Dry completely", text: "Blow out blind holes, box sections and threads. Trapped rinse water is the single most common cause of corrosion under packaging." },
        { name: "Match the protection to the interval", text: "Rely on the cleaner's in-built 7–15 day inhibition for short indoor holds; apply an oil-based preventive such as PC RP-636 for 3–6 months of stock or transit protection." },
        { name: "Pack dry and sealed", text: "For export or long storage, add VCI inside a genuinely sealed package so internal bores are protected by the vapour phase." },
      ],
    },
    faqs: [
      {
        q: "Why do parts rust immediately after cleaning?",
        a: "Because cleaning removed the oil film that was protecting them. A freshly cleaned steel surface is chemically bare, still warm, and carrying a thin water layer — every condition corrosion needs. In humid conditions flash rust can appear in under five minutes.",
      },
      {
        q: "How long does rust protection from the cleaner last?",
        a: "Power Clean aqueous concentrates carry an in-built inhibitor giving 7–15 days of indoor protection. That covers the interval between wash and assembly in most plants. It is not sufficient for stock, transit or export, which need a dedicated preventive.",
      },
      {
        q: "What is the difference between a rust preventive and VCI?",
        a: "A rust preventive is a liquid film applied to the surface — it protects what it touches, and must be degreased off later. VCI is a vapour that saturates a sealed package and adsorbs onto every metal surface inside, including internal bores, and needs no removal. They are often used together.",
      },
      {
        q: "Can VCI be used in an open crate?",
        a: "No. VCI only works inside a genuinely sealed enclosure. In an open crate the vapour disperses and no protective film forms. The parts must also be clean and dry going in — VCI cannot protect metal already under moisture or salt.",
      },
      {
        q: "How long does PC RP-636 protect parts?",
        a: "Three to six months, with a touch-dry time of 10 to 15 minutes, which allows parts to be handled and packed almost immediately after application. It is an oil-based film and must be degreased off before machining, painting or assembly.",
      },
    ],
    related: [
      "how-to-choose-industrial-degreaser",
      "removing-white-rust-aluminium-die-cast",
      "extend-degreaser-bath-life",
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "aluminium-cleaning-chemical-guide",
    title: "The Right Cleaning Chemical for Aluminium Parts",
    metaTitle: "Aluminium Cleaning Chemical Guide",
    metaDescription:
      "Clean aluminium without etching, staining or white rust — why alkaline cleaners fail on ADC12, what pH to use, and how to brighten dull castings.",
    answer:
      "Clean aluminium with a neutral-pH cleaner between pH 7 and 9 at 55–65 °C. Alkaline cleaners above pH 10 etch aluminium, leaving a dull grey surface and a chemically reactive face that blooms into white rust within days. Rinse clean and dry completely, including blind holes, before packing.",
    kicker: "MATERIAL GUIDE",
    summary:
      "Aluminium punishes the wrong chemistry faster than any other common engineering metal. What goes wrong, why, and the pH and process window that avoids it.",
    keywords: [
      "aluminium cleaning chemical",
      "aluminium degreaser india",
      "ADC12 cleaner",
      "aluminium brightener",
      "clean aluminium without staining",
    ],
    datePublished: "2026-02-18",
    dateModified: "2026-02-18",
    readMinutes: 10,
    photo: "/photos/solution-nf14.webp",
    photoAlt:
      "Aluminium die-cast components cleaned with neutral pH chemistry to avoid etching",
    keyFacts: [
      { label: "Safe cleaner pH", value: "7–9 (neutral)" },
      { label: "Damage threshold", value: "Above ~pH 10" },
      { label: "Wash temperature", value: "55–65 °C" },
      { label: "Common alloys", value: "ADC10, ADC12, LM-series" },
      { label: "Measured rejection change", value: "3.2% → 0.4%" },
    ],
    blocks: [
      {
        kind: "p",
        text: "Aluminium is the metal that most often exposes a wrong cleaning decision, because it fails visibly and it fails at the customer rather than on your line. Parts come out of the wash looking acceptable, and two weeks later a white bloom has appeared in the packaging.",
      },
      {
        kind: "p",
        text: "The underlying reason is that aluminium is amphoteric — it is attacked by strong alkali as well as by acid. Steel tolerates and slightly prefers high alkalinity. Aluminium does not, and the threshold is not far above neutral.",
      },
      { kind: "h2", text: "What alkalinity actually does to an aluminium part" },
      {
        kind: "p",
        text: "Above roughly pH 10 the cleaner begins dissolving the natural oxide film and then the metal beneath it. The visible result is a dull grey or blotchy surface, sometimes with the silicon phase standing proud on ADC alloys as the aluminium matrix is removed preferentially around it.",
      },
      {
        kind: "p",
        text: "The invisible result matters more. Etching leaves a freshly exposed, chemically active surface with no protective oxide. Add residual rinse water in a blind hole, seal it into a bag or a stacked bin, and you have built an ideal white-rust incubator. The bloom is aluminium hydroxide, and by the time it appears the part is usually a reject.",
      },
      {
        kind: "table",
        caption: "Cleaner pH against aluminium outcome",
        head: ["Working pH", "Cleaning power on oil", "Effect on aluminium"],
        rows: [
          ["7–9 (neutral)", "Good, surfactant-driven", "No attack — correct choice"],
          ["9–10", "Strong", "Marginal; risk rises with temperature and dwell"],
          ["10–12", "Very strong", "Etching, dulling, silicon relief"],
          ["Above 12", "Aggressive", "Rapid attack, heavy staining"],
        ],
      },
      { kind: "h2", text: "The right chemistry: neutral pH, worked harder" },
      {
        kind: "p",
        text: "Removing the alkalinity removes saponification as a cleaning route, so a neutral cleaner has to do more with surfactants and solvency. A well-formulated one cleans aluminium castings, brass bushings and copper assemblies as effectively as an alkaline product cleans steel — but it will not strip baked carbon or forging scale, and expecting it to is the second most common mistake here.",
      },
      {
        kind: "p",
        text: "Power Clean NF-14 is the neutral-pH grade in the range, built for aluminium, zinc, brass and — importantly — for mixed baskets. A line that cleans steel housings and aluminium covers together has to run neutral, even though the steel would slightly prefer alkaline.",
      },
      {
        kind: "callout",
        title: "The mixed-basket rule",
        text: "If the basket contents can change, the chemistry must suit the most sensitive metal in it. One aluminium cover in a load of steel housings sets the pH ceiling for the whole bath.",
      },
      { kind: "h2", text: "Brightening dull or stained castings" },
      {
        kind: "p",
        text: "Once a casting is etched or stained, cleaning will not restore it — the surface has been removed. An aluminium brightener, which is a mildly acidic formulation, dissolves the discoloured surface layer and restores an even finish. It is a corrective treatment, not a routine wash stage.",
      },
      {
        kind: "p",
        text: "Brightening removes metal, so it changes dimensions marginally and cannot be repeated indefinitely on a finished part. It also leaves the surface freshly reactive, which means the rinse, dry and protection sequence afterwards has to be right or the part will bloom again quickly.",
      },
      { kind: "h2", text: "Drying is half the process" },
      {
        kind: "p",
        text: "Even with correct chemistry, aluminium parts packed damp will develop white rust. Castings are full of blind holes, pockets and porosity, and all of them hold rinse water. Sealed into packaging, that water creates a humid microclimate against a light metal — which is the entire recipe.",
      },
      {
        kind: "p",
        text: "A drying agent in the final rinse helps considerably: by lowering surface tension it makes water sheet off rather than bead, so less water is left behind and what remains flashes off faster. On hot parts leaving a 60 °C rinse, that can be enough to eliminate a separate drying stage.",
      },
      { kind: "h2", text: "What changing chemistry is actually worth" },
      {
        kind: "p",
        text: "On aluminium die-cast housings, Power Clean field data records white-rust rejection falling from 3.2% to 0.4% after switching from an alkaline cleaner to neutral-pH NF-14 with a controlled drying stage. On any volume line, that difference is far larger than the price gap between the two chemicals.",
      },
      {
        kind: "cta",
        text: "Send a sample casting and tell us your current cleaner and pH. The lab will confirm whether the chemistry, the drying, or both are causing the bloom.",
        href: "/contact",
        label: "Request an aluminium trial",
      },
    ],
    faqs: [
      {
        q: "What pH cleaner is safe for aluminium?",
        a: "Neutral, between pH 7 and 9. Above roughly pH 10, cleaners dissolve aluminium's protective oxide and then attack the metal, leaving a dull etched surface that is chemically reactive and prone to white rust.",
      },
      {
        q: "Why do aluminium parts turn dull grey after washing?",
        a: "The cleaner etched them. Alkaline chemistry removes the oxide film and preferentially attacks the aluminium matrix, which on ADC alloys can leave the silicon phase standing proud. The finish cannot be washed back — it needs a brightener, or better, a neutral cleaner from the start.",
      },
      {
        q: "Can I clean aluminium and steel in the same bath?",
        a: "Yes, with a neutral-pH cleaner. The chemistry must suit the most sensitive metal in the basket, so a mixed load sets a pH ceiling of about 9. Steel cleans perfectly well at neutral pH; aluminium does not survive alkaline.",
      },
      {
        q: "What is an aluminium brightener and when is it needed?",
        a: "A mildly acidic formulation that dissolves a discoloured or oxidised surface layer to restore an even finish. It is corrective, not routine — it removes metal, so it changes dimensions slightly and cannot be repeated indefinitely on a finished part.",
      },
      {
        q: "How do I stop white rust on aluminium castings?",
        a: "Three things together: a neutral-pH cleaner, a clean rinse, and genuinely dry parts before packing — including blind holes and porosity. Power Clean field data shows that combination cutting white-rust rejection from 3.2% to 0.4%.",
      },
    ],
    related: [
      "removing-white-rust-aluminium-die-cast",
      "carbon-deposit-removal-guide",
      "rust-prevention-between-processes",
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "extend-degreaser-bath-life",
    title: "How to Extend Degreaser Bath Life and Cut Cost Per Part",
    metaTitle: "How to Extend Degreaser Bath Life",
    metaDescription:
      "Bath management for industrial cleaning — skimming, filtration, titration and drag-out control. Doubling bath life halves your cost per part.",
    answer:
      "Extend degreaser bath life by removing what kills it: skim floating oil continuously, filter suspended fines, control drag-out with 10–15 seconds of drain time, and hold concentration by weekly titration rather than topping up by eye. Doubling bath life halves concentrate cost, effluent volume and changeover downtime together.",
    kicker: "COST CONTROL",
    summary:
      "Bath life is usually the largest single cost lever on a wash line — and the one most plants manage by guesswork. What actually ends a bath, and the four controls that extend it.",
    keywords: [
      "extend bath life degreaser",
      "cleaning cost per part",
      "wash bath management",
      "degreaser consumption reduction",
      "industrial cleaning cost saving",
    ],
    datePublished: "2026-02-25",
    dateModified: "2026-02-25",
    readMinutes: 10,
    photo: "/photos/blending-line.webp",
    photoAlt:
      "Industrial cleaning bath being maintained and monitored on a production line",
    keyFacts: [
      { label: "Drain time to cut drag-out", value: "10–15 seconds" },
      { label: "Control measurement", value: "Weekly titration + pH" },
      { label: "Highest-return retrofit", value: "Surface skimmer" },
      { label: "Typical concentration band", value: "1–5%" },
      { label: "Bath temperature", value: "55–65 °C" },
    ],
    blocks: [
      {
        kind: "p",
        text: "Ask a plant what its cleaning costs and you usually get the price per litre of concentrate. That number is almost irrelevant on its own. What matters is cost per part, and that is set by how long each bath lasts — because a bath change consumes concentrate, water, effluent capacity and production time all at once.",
      },
      {
        kind: "p",
        text: "Doubling bath life from two weeks to four halves all four of those. No chemical price negotiation comes close to that.",
      },
      { kind: "h2", text: "Three things end a bath" },
      {
        kind: "p",
        text: "Oil loading saturates the emulsifier. Every basket brings oil in, and once the surfactant system cannot hold any more, incoming oil has nowhere to go except back onto the next part. The bath looks and smells normal and cleans progressively worse.",
      },
      {
        kind: "p",
        text: "Solid fines accumulate. Swarf, grinding dust, moulding sand and carbon build up until they are redeposited on parts. This is the failure that produces the complaint 'the parts come out dirtier than they went in', and it is almost always a filtration problem rather than a chemistry one.",
      },
      {
        kind: "p",
        text: "Alkalinity is consumed. Saponification uses it up, and carbon dioxide from the air slowly neutralises what remains. A bath that started at pH 12 and now reads 10.5 has lost most of its cleaning reserve while giving no visual sign of it.",
      },
      { kind: "h2", text: "Control 1 — skim the oil" },
      {
        kind: "p",
        text: "A surface skimmer is the highest-return retrofit available on most soak tanks. Floating oil is removed continuously instead of accumulating, so the emulsifier is never asked to hold more than it can, and — critically — parts stop being re-coated as they are withdrawn through an oil layer.",
      },
      {
        kind: "p",
        text: "There is a chemistry decision behind this. A strongly emulsifying cleaner holds oil in suspension indefinitely: excellent cleaning, poor bath life, because the oil never separates for the skimmer to take. A splitting or demulsifying cleaner deliberately lets oil break out and float, which is what you want when you have oil removal fitted. Match the chemistry to the equipment, not the other way round.",
      },
      { kind: "h2", text: "Control 2 — filter the fines" },
      {
        kind: "p",
        text: "A bag or cartridge filter on a recirculation loop removes suspended solids before they can redeposit. On grinding and honing work this is not optional — abrasive fines are both a cleanliness failure and a wear source in pumps and nozzles.",
      },
      {
        kind: "p",
        text: "Filter selection follows the specification. General degreasing is fine with a coarse bag; work to a Millipore or particle-count limit needs progressively finer cartridges and, usually, filtration on the rinse as well as the wash.",
      },
      { kind: "h2", text: "Control 3 — cut the drag-out" },
      {
        kind: "p",
        text: "Every basket leaves the tank wearing a film of solution, and blind holes and box sections carry far more than flat faces. On a high-throughput line, drag-out can consume more concentrate than the cleaning does — it is simply invisible, because it leaves as a wet part rather than as a dumped tank.",
      },
      {
        kind: "p",
        text: "The cheapest control is time. Ten to fifteen seconds of hold above the tank returns a large fraction of that film. Tilting or rotating the basket, and orienting parts so blind holes face down, compounds it further. Nothing here costs money — it costs cycle time, and much less of it than people assume.",
      },
      {
        kind: "callout",
        title: "Drag-out is charged three times",
        text: "Once as concentrate lost from the wash tank, once as contamination shortening the rinse's life, and once as chemical load in the effluent. A control that costs fifteen seconds pays in all three places.",
      },
      { kind: "h2", text: "Control 4 — titrate weekly, do not top up by eye" },
      {
        kind: "p",
        text: "Titration measures how much active cleaner remains by neutralising a measured sample with standard acid. It takes a few minutes and it removes the guesswork that quietly wastes the most money.",
      },
      {
        kind: "p",
        text: "Both directions of error are expensive. Under-dosed baths leave residue, which usually triggers longer cycle times — burning energy without addressing the cause. Over-dosed baths waste concentrate, increase drag-out and, on non-ferrous work, start etching parts.",
      },
      {
        kind: "table",
        caption: "A minimum weekly bath log",
        head: ["Check", "Method", "Action if out of range"],
        rows: [
          ["Concentration", "Titration against standard acid", "Top up to the target band; investigate if falling fast"],
          ["pH", "Meter or strips", "Falling pH means spent alkalinity — plan a change"],
          ["Temperature", "Bath thermometer", "Below range: cleaning drops and low-foam cleaners foam"],
          ["Oil layer", "Visual", "Skimmer not keeping up — service or increase run time"],
          ["Fines", "Visual / filter condition", "Change filter element"],
        ],
      },
      { kind: "h2", text: "What good looks like" },
      {
        kind: "ol",
        items: [
          "Concentration held inside a narrow band, evidenced by a log rather than by memory.",
          "Bath temperature stable in the 55–65 °C window — both a cleaning and a foam control.",
          "Continuous skimming, with the chemistry chosen to let oil separate if oil removal is fitted.",
          "Filtration sized to the cleanliness specification, on the rinse as well as the wash where the spec is tight.",
          "Drain time built into the cycle rather than left to whoever is loading the machine.",
          "Bath changed on measurement, not on the calendar.",
        ],
      },
      {
        kind: "cta",
        text: "Send us your bath size, throughput and current change interval and we will estimate what better bath control is worth on your line before you change anything.",
        href: "/contact",
        label: "Get a bath-life review",
      },
    ],
    howTo: {
      name: "How to extend industrial degreaser bath life",
      description:
        "Four controls that typically double the working life of an aqueous cleaning bath and cut cost per part.",
      steps: [
        { name: "Fit a surface skimmer", text: "Remove floating oil continuously so the emulsifier is never saturated and parts are not re-coated on withdrawal." },
        { name: "Filter the recirculation loop", text: "Use a bag or cartridge filter sized to your cleanliness specification to stop suspended fines redepositing on parts." },
        { name: "Build in drain time", text: "Hold baskets above the tank for 10–15 seconds, with blind holes facing down, to return dragged-out solution to the bath." },
        { name: "Titrate weekly", text: "Measure active concentration against standard acid and top up to the target band, rather than dosing by appearance." },
        { name: "Log pH and temperature", text: "Falling pH shows spent alkalinity and predicts a bath change; temperature below the 55–65 °C window degrades cleaning and causes low-foam cleaners to foam." },
      ],
    },
    faqs: [
      {
        q: "How long should an industrial cleaning bath last?",
        a: "It depends almost entirely on oil loading and filtration rather than on time. A soak tank with no skimmer may need changing fortnightly; the same tank with a surface skimmer and a bag filter often runs a month or more. Titration tells you when, not the calendar.",
      },
      {
        q: "Why do parts come out dirtier than they went in?",
        a: "Almost always suspended solids redepositing. Swarf, grinding dust and carbon accumulate until the bath cannot hold them, and they transfer to the next load. Fit filtration on the recirculation loop — increasing concentration will not fix it.",
      },
      {
        q: "Is a stronger dilution better?",
        a: "Only up to a point. Cleaning improves with concentration until the surfactant system saturates; beyond that the only effects are higher cost, more drag-out, more foam and, on aluminium and zinc, a real risk of etching. Start low and step up only if the part fails.",
      },
      {
        q: "How do I measure cleaner concentration accurately?",
        a: "By titration — neutralising a measured bath sample with standard acid and converting the volume used into a concentration figure. It is far more reliable than judging by appearance, foam or how the parts look, and it takes only a few minutes a week.",
      },
      {
        q: "What is drag-out costing me?",
        a: "More than most plants think. Every basket carries a film of solution out of the tank, and blind holes carry a lot. It is charged three times: concentrate lost, rinse contaminated, effluent loaded. Ten to fifteen seconds of drain time recovers a large fraction of it.",
      },
    ],
    related: [
      "industrial-cleaning-cost-per-part",
      "foam-control-spray-washer",
      "ultrasonic-vs-spray-vs-dip-tank",
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "millipore-cleanliness-testing",
    title: "Millipore Cleanliness Testing: What the Numbers Actually Mean",
    metaTitle: "Millipore Cleanliness Testing Explained",
    metaDescription:
      "How Millipore and particle-count cleanliness testing works, why parts fail after a good wash, and what a plant must control to pass consistently.",
    answer:
      "Millipore testing washes a component under controlled conditions, draws the extraction fluid through a weighed membrane filter, and reports the residue as milligrams per part. Many specifications add particle-size limits, because one large hard particle matters more than the same mass of fine dust. Passing is a process achievement, not a chemical one.",
    kicker: "CLEANLINESS SPECS",
    summary:
      "What a Millipore number measures, why particle size is specified separately, and the reason most failures happen after the part has left a perfectly good wash bath.",
    keywords: [
      "millipore cleanliness test",
      "component cleanliness specification",
      "residual dirt analysis",
      "particle count cleaning",
      "technical cleanliness india",
    ],
    datePublished: "2026-03-04",
    dateModified: "2026-03-04",
    readMinutes: 10,
    photo: "/photos/qc-lab.webp",
    photoAlt:
      "Laboratory analysis of residual particulate from a cleaned component",
    keyFacts: [
      { label: "What is measured", value: "Residue mass on a membrane filter" },
      { label: "Reported as", value: "mg per part or per m²" },
      { label: "Often specified with", value: "Particle-size class limits" },
      { label: "Common failure cause", value: "Recontamination after washing" },
      { label: "Process requirement", value: "Filtration + DI rinse + clean handling" },
    ],
    blocks: [
      {
        kind: "p",
        text: "Automotive, bearing, hydraulic and injector customers increasingly ship against a cleanliness specification rather than a visual standard. The test is usually called Millipore, after the membrane filter it uses, and it produces a number that is unfamiliar enough to be misread in both directions.",
      },
      { kind: "h2", text: "How the test works" },
      {
        kind: "ol",
        items: [
          "The component is washed under controlled, standardised conditions — a defined fluid, volume, time and agitation method — to extract whatever contamination is on it.",
          "The extraction fluid is drawn through a membrane filter of known, pre-weighed mass.",
          "The filter is dried and re-weighed. The difference is the gravimetric residue.",
          "The result is reported as milligrams per part, or normalised to milligrams per square metre of surface.",
          "For most automotive specifications the membrane is then examined optically and particles are binned by size class.",
        ],
      },
      {
        kind: "p",
        text: "The extraction step is where comparability lives or dies. Two labs using different agitation methods on the same part will get different numbers, which is why the specification names the method as tightly as it names the limit.",
      },
      { kind: "h2", text: "Why mass alone is not enough" },
      {
        kind: "p",
        text: "A gram of fine dust and a single 500 µm hard steel particle can weigh the same and mean completely different things. The dust washes through a hydraulic circuit harmlessly; the particle scores a bore, blocks an orifice or destroys a bearing raceway.",
      },
      {
        kind: "p",
        text: "That is why modern specifications add size-class limits — for example, no metallic particles above 600 µm — and often require classification into metallic, non-metallic and fibre. The classification is diagnostically useful: metallic swarf points at machining and deburring, fibres point at wipes, gloves and packaging.",
      },
      {
        kind: "table",
        caption: "What each result type tells you",
        head: ["Measurement", "What it captures", "What it misses"],
        rows: [
          ["Gravimetric mass", "Total contamination load", "Whether one dangerous particle is present"],
          ["Particle size classes", "Largest and most damaging particles", "Total load if only large classes are limited"],
          ["Particle type", "Where contamination came from", "Nothing — but only if the lab reports it"],
        ],
      },
      { kind: "h2", text: "Why good baths still fail the test" },
      {
        kind: "p",
        text: "This is the part that surprises people. A part can leave the wash genuinely clean and fail the test, because most cleanliness failures happen downstream of the bath.",
      },
      {
        kind: "p",
        text: "Unfiltered rinse water puts particles back on. Dirty baskets transfer contamination from the previous load. Packaging sheds fibres. Bare-hand handling adds skin oil and lint. Compressed air used for drying carries oil and pipe scale unless it is properly filtered. Every one of these is invisible on a shop floor and obvious on a membrane.",
      },
      {
        kind: "callout",
        title: "Before increasing cycle time, audit the handling chain",
        text: "Longer washing does not fix recontamination. Filter the rinse, wash the baskets, change the packaging, glove the handling and filter the drying air — then re-test before touching the chemistry.",
      },
      { kind: "h2", text: "What the wash process has to provide" },
      {
        kind: "p",
        text: "Chemistry is necessary but not sufficient. A cleanliness line needs a low-foam concentrate — because the geometry that holds contamination is exactly the geometry only ultrasonic or agitated immersion reaches, and neither tolerates foam. It needs continuous filtration on the wash so removed particles do not come back. It needs a counter-flow rinse with a deionised final stage below about 10 µS/cm, so nothing is left behind as the part dries.",
      },
      {
        kind: "p",
        text: "And it needs drying that actually reaches blind features, because residual moisture both carries particles and, on steel, starts corrosion that will itself appear as contamination.",
      },
      { kind: "h2", text: "A practical route to passing consistently" },
      {
        kind: "ol",
        items: [
          "Establish a baseline: test parts straight from the wash, and again after normal handling and packing. The gap between those two numbers tells you whether your problem is cleaning or recontamination.",
          "Fix the larger gap first. In most plants it is the second one.",
          "Add filtration progressively — wash first, then rinse — and re-test after each change rather than all at once.",
          "Control drag-out, because dragged solution carries suspended particles into the rinse.",
          "Only then adjust chemistry, concentration or cycle time.",
        ],
      },
      {
        kind: "cta",
        text: "If parts are failing a Millipore specification, send us the test report along with your process. We will tell you which stage is putting the particles there.",
        href: "/contact",
        label: "Discuss a cleanliness spec",
      },
    ],
    faqs: [
      {
        q: "What is a Millipore value?",
        a: "The mass of residual particulate recovered from a component by a standardised extraction wash, captured on a membrane filter and weighed. It is reported in milligrams per part or per square metre, and is the standard cleanliness specification for bearings, injectors and hydraulic components.",
      },
      {
        q: "Why do my parts fail Millipore after a good wash?",
        a: "Usually because they were recontaminated afterwards. Unfiltered rinse water, dirty baskets, shedding packaging, bare-hand handling and unfiltered drying air all add particles downstream of the bath. Test straight from the wash and again after packing to find the gap.",
      },
      {
        q: "Is particle count the same as Millipore?",
        a: "No — it is the second half of the same test. Millipore reports total residue by mass; particle counting classifies what is on the membrane by size, and often by type. A part can pass on mass and fail on size class, because one large hard particle can destroy an assembly.",
      },
      {
        q: "What chemistry is needed to meet a cleanliness specification?",
        a: "A low-foam aqueous concentrate at 1–5% and 55–65 °C, because the geometry that holds contamination needs ultrasonic or agitated immersion, and neither works with a foaming cleaner. Chemistry alone will not pass the test without filtration, a DI rinse and controlled handling.",
      },
      {
        q: "How clean does the final rinse have to be?",
        a: "For cleanliness work, deionised and typically below 10 µS/cm conductivity. Ordinary mains water in Indian industrial areas runs 300–800 µS/cm, and everything dissolved in it stays on the part when the water evaporates.",
      },
    ],
    related: [
      "ultrasonic-cleaning-chemical-guide",
      "ultrasonic-vs-spray-vs-dip-tank",
      "extend-degreaser-bath-life",
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "foam-control-spray-washer",
    title: "Why Your Spray Washer Foams — and How to Fix It",
    metaTitle: "Spray Washer Foaming — Causes & Fixes",
    metaDescription:
      "Foam collapses spray wash pressure and damages pumps. The real causes — cold bath, wrong grade, coolant carry-in — and how to diagnose each.",
    answer:
      "A spray washer usually foams because the bath is below the cleaner's cloud point, not because the dose is too high. Low-foam cleaners rely on a surfactant that clouds out above roughly 45–55 °C; run the bath at 55–65 °C and foam collapses. If it still foams at temperature, the cleaner is the wrong grade.",
    kicker: "TROUBLESHOOTING",
    summary:
      "Foam is the most common spray-washer complaint and the most commonly misdiagnosed. Check temperature before dosage — and know the three contamination sources that foam a correct chemical.",
    keywords: [
      "spray washer foaming",
      "low foam cleaner",
      "foam control industrial washer",
      "defoamer parts washer",
      "cleaner foaming problem",
    ],
    datePublished: "2026-03-11",
    dateModified: "2026-03-11",
    readMinutes: 8,
    photo: "/photos/spray-mist.webp",
    photoAlt:
      "Cleaning solution spray pattern in an industrial parts washer",
    keyFacts: [
      { label: "First thing to check", value: "Bath temperature" },
      { label: "Typical cloud point", value: "45–55 °C" },
      { label: "Correct wash temperature", value: "55–65 °C" },
      { label: "Foam-tolerant process", value: "Dip tank only" },
      { label: "Foam-fatal processes", value: "Spray and ultrasonic" },
    ],
    blocks: [
      {
        kind: "p",
        text: "Foam in a spray washer is not cosmetic. Aerated solution entering the pump chamber cavitates, wash pressure collapses, cleaning fails, and given enough time the pump is damaged. It is also, almost always, diagnosed wrongly — the first reaction is to reduce the dose, and that is rarely the cause.",
      },
      { kind: "h2", text: "Why a low-foam cleaner is only low-foam when hot" },
      {
        kind: "p",
        text: "Low-foam cleaners are built around non-ionic surfactants with a cloud point — the temperature above which the surfactant comes out of solution and stops stabilising foam. Formulators pick a surfactant that clouds just below the intended wash temperature, so the cleaner is self-defoaming in service.",
      },
      {
        kind: "p",
        text: "Run that same cleaner below its cloud point and the surfactant is fully dissolved and behaves as a good foamer. This is why a spray washer started from cold foams for the first ten minutes and settles as the bath heats. If the heater is undersized, the thermostat is out, or the machine is run before it reaches temperature, it never settles.",
      },
      {
        kind: "callout",
        title: "Check temperature before you touch the dose",
        text: "A bath sitting at 40 °C with the correct low-foam cleaner in it will foam. Reducing the concentration weakens cleaning and does not fix the foam. Fix the temperature first, then re-assess.",
      },
      { kind: "h2", text: "The diagnostic order" },
      {
        kind: "table",
        caption: "Foam causes in order of likelihood",
        head: ["Check", "What you are looking for", "Fix"],
        rows: [
          ["Bath temperature", "Below 55 °C, or slow to reach it", "Repair heating; do not start the cycle cold"],
          ["Cleaner grade", "A soak/dip product being used in a spray machine", "Change to a low-foam grade"],
          ["Concentration", "Well above the recommended band", "Titrate and correct to target"],
          ["Tramp oil / coolant", "Water-soluble coolant carried in on parts", "Skim and filter; coolant surfactants foam heavily"],
          ["Detergent contamination", "Floor or hand cleaner entering the tank", "Isolate the source — a small amount foams a whole bath"],
          ["Water hardness change", "New water source, softener exhausted", "Check hardness; chelant demand changes foam behaviour"],
          ["Mechanical", "Excessive cascade height, air ingress on suction", "Reduce free-fall return; seal suction leaks"],
        ],
      },
      { kind: "h2", text: "Contamination foams a perfectly good chemical" },
      {
        kind: "p",
        text: "Water-soluble cutting coolant is the most common culprit. It is loaded with its own emulsifiers, and parts arriving wet with it carry those straight into the wash tank. A bath that ran clean for months can start foaming after a coolant change upstream, with nothing altered in the wash chemistry at all.",
      },
      {
        kind: "p",
        text: "The second is stray detergent. Floor cleaner, hand soap or a general-purpose cleaner tipped into a tank — often with good intentions — will foam a spray washer comprehensively, and the only real fix is to dump and remake.",
      },
      {
        kind: "p",
        text: "The third is mechanical. A return line that free-falls into the tank entrains air continuously, and an air leak on the pump suction does the same. Both are worth ruling out before blaming chemistry, because both produce foam that no formulation can suppress.",
      },
      { kind: "h2", text: "When a defoamer is and is not the answer" },
      {
        kind: "p",
        text: "A defoamer is a legitimate tool, but it treats a symptom. Adding one to a bath that is foaming because it is cold masks a heating fault that is also costing you cleaning performance — because the same cloud point that controls foam is where cleaning power peaks.",
      },
      {
        kind: "p",
        text: "Defoamers also need dosing carefully. Overdosing leaves a silicone or ester film on parts that can cause paint adhesion failures downstream, which is a far more expensive problem than the foam was.",
      },
      {
        kind: "p",
        text: "Use one where the foam source is genuinely external and cannot be eliminated — persistent coolant carry-in, for example — and treat it as a stopgap while the carry-in is addressed.",
      },
      { kind: "h2", text: "The one case where foam is fine" },
      {
        kind: "p",
        text: "A soak or dip tank has almost no mechanical energy, so it tolerates a foaming cleaner completely — and a foam blanket on the surface actually reduces heat loss and evaporation. If your process is immersion, foam is not a fault, and switching to a low-foam grade buys you nothing.",
      },
      {
        kind: "p",
        text: "Ultrasonic is the opposite extreme: foam bubbles cushion cavitation implosions, so the bath falls silent and cleaning simply stops. There, low-foam is not a preference but a requirement.",
      },
      {
        kind: "cta",
        text: "If your washer is foaming and the temperature checks out, send us the cleaner name, concentration and what changed upstream. Most cases resolve without changing the chemical.",
        href: "/contact",
        label: "Troubleshoot with our lab",
      },
    ],
    howTo: {
      name: "How to diagnose foaming in an industrial spray washer",
      description:
        "A seven-step diagnostic sequence for foam in a spray parts washer, in order of likelihood.",
      steps: [
        { name: "Check bath temperature", text: "Confirm the bath is at 55–65 °C. Low-foam cleaners rely on a surfactant clouding out above roughly 45–55 °C; below that they foam normally." },
        { name: "Confirm the cleaner grade", text: "Verify the product is a low-foam grade intended for spray work, not a soak or dip formulation." },
        { name: "Titrate the concentration", text: "Measure actual concentration rather than assuming it, and correct back into the recommended band." },
        { name: "Look for coolant carry-in", text: "Water-soluble cutting coolant carries its own emulsifiers into the bath and foams heavily. Skim and filter, and check whether coolant changed upstream." },
        { name: "Rule out stray detergent", text: "Floor cleaner or hand soap entering the tank will foam it comprehensively. If this happened, dump and remake the bath." },
        { name: "Check the water", text: "A new water source or an exhausted softener changes hardness and chelant demand, which changes foam behaviour." },
        { name: "Inspect for air entrainment", text: "Reduce free-fall on the return line and seal any air leak on the pump suction — both entrain air that no chemistry can suppress." },
      ],
    },
    faqs: [
      {
        q: "Why does my spray washer foam even with a low-foam cleaner?",
        a: "Most often because the bath is below the cleaner's cloud point. Low-foam behaviour depends on the surfactant coming out of solution above roughly 45–55 °C. Run the bath at 55–65 °C and the foam collapses. If it still foams at temperature, check for coolant or detergent contamination.",
      },
      {
        q: "Will reducing the concentration stop the foam?",
        a: "Rarely, and it weakens cleaning. Concentration well above the recommended band can contribute, so titrate and correct it — but temperature and contamination are far more common causes, and cutting the dose masks them.",
      },
      {
        q: "Can I just add a defoamer?",
        a: "As a stopgap for foam you cannot eliminate at source, yes. But it treats a symptom: if the bath is foaming because it is cold, a defoamer hides a heating fault that is also costing cleaning performance. Overdosing can also leave a film that causes paint adhesion failures.",
      },
      {
        q: "Does foam matter in a soak tank?",
        a: "No. A dip tank has almost no mechanical energy, tolerates foaming cleaners completely, and a foam blanket actually reduces heat loss and evaporation. Foam is only fatal in spray washers and ultrasonic baths.",
      },
      {
        q: "Why did my bath start foaming when nothing changed?",
        a: "Something upstream probably changed. A new water-soluble cutting coolant, a different water source, an exhausted softener or stray floor cleaner tipped into the tank will all foam a chemical that ran clean for months.",
      },
    ],
    related: [
      "ultrasonic-vs-spray-vs-dip-tank",
      "extend-degreaser-bath-life",
      "how-to-choose-industrial-degreaser",
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "industrial-floor-cleaning-guide",
    title: "Industrial Floor Degreasing: Chemistry, Method and Safety",
    metaTitle: "Industrial Floor Cleaning Chemicals",
    metaDescription:
      "Remove ground-in oil from concrete and epoxy shop floors — concentrations, scrubber method, and why diesel wash-downs make the problem worse.",
    answer:
      "Remove ground-in oil from an industrial floor with an aqueous degreaser concentrate at 2–5%, applied warm where possible, given three to five minutes of dwell, then agitated with a scrubber and recovered wet. Solvent and diesel wash-downs spread the oil and create an effluent problem rather than solving one.",
    kicker: "FACILITY CARE",
    summary:
      "Shop-floor oil is a slip hazard, an audit finding and a housekeeping cost. The chemistry and method that actually lift it — and why the traditional diesel wash-down makes it worse.",
    keywords: [
      "industrial floor cleaning chemical",
      "concrete floor degreaser",
      "workshop floor oil removal",
      "factory floor cleaning india",
      "epoxy floor cleaner industrial",
    ],
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
    readMinutes: 8,
    photo: "/photos/gallery-1.webp",
    photoAlt:
      "Industrial workshop floor being degreased and scrubbed clean of oil",
    keyFacts: [
      { label: "Working concentration", value: "2–5%" },
      { label: "Dwell before scrubbing", value: "3–5 minutes" },
      { label: "Application", value: "Scrubber-drier, mop or pressure wash" },
      { label: "Replaces", value: "Diesel and kerosene wash-downs" },
      { label: "Bulk packing", value: "Up to 1000 L" },
    ],
    blocks: [
      {
        kind: "p",
        text: "Shop-floor oil is one of those problems that everyone accepts until an auditor or an accident makes it urgent. It is a slip hazard, it tracks into offices and onto parts, and on a concrete floor it soaks in progressively until the surface is permanently darkened.",
      },
      { kind: "h2", text: "Why diesel and kerosene wash-downs make it worse" },
      {
        kind: "p",
        text: "The traditional depot method is to flood the floor with diesel or kerosene and squeegee it away. It looks effective because the oil visibly disperses. What actually happens is that the solvent dissolves the oil, carries it deeper into the concrete's pore structure, and evaporates — leaving the oil behind, distributed more thoroughly than before.",
      },
      {
        kind: "p",
        text: "Then there is everything else: a flammable liquid spread across a working floor, hydrocarbon vapour in the building, a slip surface worse than the one you started with, and a wash-down that goes to drain as a hydrocarbon effluent nobody wants to be asked about.",
      },
      {
        kind: "p",
        text: "Replacing exactly this practice — diesel, kerosene and naphtha wash-downs — with biodegradable aqueous chemistry is the work Roovel Solutions has been doing in Indian plants since 2000.",
      },
      { kind: "h2", text: "The method that works" },
      {
        kind: "ol",
        items: [
          "Sweep or vacuum first. Cleaning chemistry spent on loose swarf and dust is wasted, and grit turns a scrubber pad into an abrasive.",
          "Dilute to 2–5% depending on how heavily loaded the floor is. Start at the low end on maintained floors; go higher only on genuinely oil-soaked areas.",
          "Apply and let it dwell for three to five minutes. This is the step most often skipped, and it is where the chemistry actually does its work — scrubbing immediately means scrubbing plain water.",
          "Agitate with a scrubber-drier, a deck brush or a rotary machine. Mechanical energy is what releases oil that has been ground into the surface.",
          "Recover the solution wet, with the scrubber's vacuum or a wet vac. Letting it dry back onto the floor re-deposits everything you just lifted.",
          "Rinse if the floor is coated or if any residue would be walked into clean areas.",
        ],
      },
      {
        kind: "callout",
        title: "Dwell time is not optional",
        text: "The difference between a floor that cleans and a floor that stays grey is usually three to five minutes of contact time before the brush touches it. It costs nothing and it is the most commonly omitted step.",
      },
      { kind: "h2", text: "Concrete and epoxy behave differently" },
      {
        kind: "p",
        text: "Bare concrete is porous, so oil penetrates and a single clean will lift what is near the surface while deeper oil wicks back over the following days. Heavily contaminated concrete usually needs two or three passes over a week before it stabilises — that is normal, not a chemical failure.",
      },
      {
        kind: "p",
        text: "Epoxy and PU coatings are non-porous, so the oil sits on top and comes off far more easily. The constraint there is the coating: strongly alkaline or acidic chemistry can dull or degrade some coatings, so a neutral or mild formulation and a test patch in a corner are worth the five minutes.",
      },
      { kind: "h2", text: "Safety and effluent" },
      {
        kind: "p",
        text: "A wet floor being degreased is more slippery than a dry oily one, so cordon the area and keep traffic off until it is recovered and dry. This sounds obvious and is the most common cause of injury during floor cleaning.",
      },
      {
        kind: "p",
        text: "The recovered solution carries the oil you just removed. It should go to an interceptor or a treatment route rather than straight to a storm drain. Biodegradable aqueous chemistry with a declared composition is far easier to account for here than a solvent wash — which is a compliance advantage as well as a safety one.",
      },
      { kind: "h2", text: "Keeping it clean" },
      {
        kind: "p",
        text: "Deep-cleaning a floor is a project; keeping it clean is a habit. Drip trays under machines, prompt spill response with absorbent granules, and a light regular scrub at 1–2% will hold a floor far more cheaply than repeated heavy cleans of a floor left to load up.",
      },
      {
        kind: "p",
        text: "The same concentrate covers both duties — the difference is dilution and frequency, not product.",
      },
      {
        kind: "cta",
        text: "Tell us your floor type, area and how heavily loaded it is, and we will specify a concentration and method — plus bulk packing up to 1000 L for large facilities.",
        href: "/contact",
        label: "Get a floor cleaning plan",
      },
    ],
    howTo: {
      name: "How to degrease an industrial shop floor",
      description:
        "A six-step method for removing ground-in oil from concrete and coated industrial floors using aqueous chemistry.",
      steps: [
        { name: "Sweep or vacuum", text: "Remove loose swarf, dust and grit first so the chemistry is not wasted and the scrubber pad is not turned into an abrasive." },
        { name: "Dilute to 2–5%", text: "Use the low end on maintained floors and the high end only on genuinely oil-soaked areas." },
        { name: "Apply and dwell", text: "Let the solution sit for three to five minutes. This contact time is where the chemistry works; scrubbing immediately means scrubbing water." },
        { name: "Agitate", text: "Use a scrubber-drier, deck brush or rotary machine to release oil ground into the surface." },
        { name: "Recover wet", text: "Vacuum or wet-vac the solution up. Letting it dry back re-deposits the oil you just lifted." },
        { name: "Rinse and secure", text: "Rinse coated floors, keep traffic off until dry, and route the recovered solution to an interceptor rather than a storm drain." },
      ],
    },
    faqs: [
      {
        q: "What removes oil from a concrete workshop floor?",
        a: "An aqueous degreaser concentrate at 2–5%, given three to five minutes of dwell, agitated with a scrubber and recovered wet. Concrete is porous, so heavily loaded floors usually need two or three passes over a week as deeper oil wicks back to the surface.",
      },
      {
        q: "Can I use diesel or kerosene to clean the floor?",
        a: "It is a bad trade. Solvent dissolves the oil and carries it deeper into the concrete rather than removing it, leaves a flammable liquid and hydrocarbon vapour in the building, produces a worse slip surface, and creates an effluent problem. Aqueous chemistry at 2–5% does the job without any of that.",
      },
      {
        q: "Is the cleaner safe on epoxy floor coatings?",
        a: "Use a neutral or mild formulation and test a patch in a corner first. Epoxy and PU are non-porous so the oil lifts easily, but strongly alkaline or acidic chemistry can dull or degrade some coatings.",
      },
      {
        q: "Why does the floor still look grey after cleaning?",
        a: "Usually insufficient dwell time, or oil that has penetrated porous concrete deeply. Give the solution three to five minutes before scrubbing, and expect a heavily loaded concrete floor to need two or three passes before it stabilises.",
      },
      {
        q: "What happens to the dirty water?",
        a: "It carries the oil you removed, so it should go to an interceptor or a treatment route, not a storm drain. Biodegradable aqueous chemistry with a declared composition is much easier to account for than a solvent wash-down.",
      },
    ],
    related: [
      "how-to-choose-industrial-degreaser",
      "extend-degreaser-bath-life",
      "cooling-tower-descaling-guide",
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "industrial-cleaning-cost-per-part",
    title: "What Industrial Cleaning Really Costs: Cost Per Part Explained",
    metaTitle: "Industrial Cleaning Cost Per Part",
    metaDescription:
      "Price per litre is the wrong number. How to calculate the true cost of cleaning a part — concentrate, drag-out, energy, water, effluent, labour and rejects.",
    answer:
      "Cost per part is total annual cleaning spend divided by parts cleaned — not the price per litre of concentrate. Include concentrate, drag-out losses, heating energy, water, effluent charges, labour, bath changes and the cost of rejects. Concentrate is usually a minority of the total, so a cheaper drum often raises cost per part.",
    kicker: "COST CONTROL",
    summary:
      "Why the cheapest drum is usually the expensive option, and how to build a cost-per-part figure that survives a purchasing review.",
    keywords: [
      "industrial cleaning cost per part",
      "industrial degreaser price india",
      "degreaser cost comparison",
      "parts washing cost",
      "cleaning chemical consumption",
    ],
    datePublished: "2026-03-25",
    dateModified: "2026-03-25",
    readMinutes: 11,
    photo: "/photos/packaging.webp",
    photoAlt:
      "Blue industrial drums of cleaning chemical concentrate in a warehouse",
    keyFacts: [
      { label: "Concentrate share of total", value: "Typically the minority" },
      { label: "Working strength", value: "1–5% (1:100 to 5:100)" },
      { label: "Wash temperature", value: "55–65 °C (TCE needs 90–100 °C)" },
      { label: "Biggest hidden cost", value: "Drag-out and bath changes" },
      { label: "Trial packing", value: "35 L pail" },
    ],
    blocks: [
      {
        kind: "p",
        text: "Ask what a cleaning chemical costs and you will be quoted a price per litre. It is the wrong number, and comparing two suppliers on it reliably picks the more expensive option. The figure that decides whether a wash line is well run is cost per part — total annual cleaning spend divided by the number of parts that came out acceptable.",
      },
      {
        kind: "p",
        text: "This matters because concentrate is usually the minority of the total. A cleaner that costs 20% more per litre but works at half the concentration, lasts twice as long in the bath and cuts rejects is dramatically cheaper per part. Purchasing sees only the first number; the plant pays all the others.",
      },
      { kind: "h2", text: "The eight costs of cleaning a part" },
      {
        kind: "table",
        caption: "What actually goes into cost per part",
        head: ["Cost", "Driven by", "Usually controlled by"],
        rows: [
          ["Concentrate", "Working strength × bath volume × changes per year", "Titration, correct dilution"],
          ["Drag-out", "Part geometry, basket design, drain time", "10–15 s drain, blind holes down"],
          ["Heating energy", "Bath temperature × hours at temperature × insulation", "Lids, setback overnight"],
          ["Water", "Rinse design, bath changes", "Counter-flow rinsing"],
          ["Effluent", "Volume dumped, treatment or haulage charge", "Longer bath life"],
          ["Labour", "Bath changes, top-ups, testing, re-washing", "A weekly log, not firefighting"],
          ["Equipment wear", "Pump cavitation, scaled heaters, filter spend", "Foam and hardness control"],
          ["Rejects and rework", "Parts failing inspection, returned batches", "Right chemistry for the metal"],
        ],
      },
      { kind: "h2", text: "Do the arithmetic once" },
      {
        kind: "p",
        text: "The calculation is not complicated, and doing it once usually changes the decision. Take a single wash line over a year.",
      },
      {
        kind: "ol",
        items: [
          "Concentrate: bath volume × working strength × number of bath changes a year, plus top-ups. A 500 litre tank at 3% is 15 litres per fill — the fill is rarely the biggest line.",
          "Drag-out: estimate the film carried out per basket and multiply by baskets per year. On a high-throughput line this frequently exceeds the concentrate used in fills.",
          "Energy: hours at temperature × heater load × tariff. Running at 55–65 °C instead of the 90–100 °C a TCE vapour zone needs is a large and permanent saving.",
          "Water and effluent: litres dumped per change × changes, at your treatment or haulage rate.",
          "Labour: hours spent changing, dosing, testing and re-washing × loaded labour rate. Re-washing is the one people forget.",
          "Rejects: parts scrapped or reworked for cleanliness or corrosion × their value at that operation — not their material cost.",
          "Divide the total by parts cleaned. That is your real number.",
        ],
      },
      {
        kind: "callout",
        title: "The reject line is usually the largest and the least measured",
        text: "A part scrapped after machining has absorbed its material, machine time and labour. On aluminium die castings, moving from an alkaline cleaner to neutral-pH chemistry with a controlled dry took white-rust rejection from 3.2% to 0.4% — that single change dwarfs any plausible difference in drum price.",
      },
      { kind: "h2", text: "Where the money usually is" },
      {
        kind: "p",
        text: "Across the lines we look at, the same three items dominate, and none of them is the price of the chemical.",
      },
      {
        kind: "p",
        text: "First, bath life. A soak tank with no skimmer might be dumped fortnightly; the same tank with a surface skimmer and a bag filter often runs a month or more. Doubling bath life halves concentrate spend, water, effluent volume and changeover downtime simultaneously.",
      },
      {
        kind: "p",
        text: "Second, drag-out. Every basket leaves the tank wearing a film, and blind holes and box sections carry a great deal. Ten to fifteen seconds of drain time above the tank costs cycle time and returns a large fraction of that film — and it is charged three times over, as concentrate lost, rinse contaminated and effluent loaded.",
      },
      {
        kind: "p",
        text: "Third, concentration control. Without titration, baths get dosed by eye. Under-dosing leaves residue and triggers longer cycles that burn energy without fixing anything; over-dosing wastes concentrate, increases drag-out and can start etching non-ferrous parts.",
      },
      { kind: "h2", text: "Why we quote a trial, not a price list" },
      {
        kind: "p",
        text: "A price per litre is meaningless without the working strength, and the working strength depends on your soil, your metal and your equipment. The same product might run at 1% on a light maintenance soil and 5% on buffing compound — a fivefold difference in consumption from one number nobody asks about.",
      },
      {
        kind: "p",
        text: "That is why the process here starts with a sample part and a description of your line, and ends with a supervised trial from a 35 litre pail. You get a dilution that has been proved on your own components, and a consumption figure you can actually budget against.",
      },
      {
        kind: "cta",
        text: "Send us your bath volume, throughput, current change interval and what you pay per drum. We will work out your cost per part as it stands today — before anything is quoted.",
        href: "/contact",
        label: "Get a cost-per-part review",
      },
    ],
    howTo: {
      name: "How to calculate industrial cleaning cost per part",
      description:
        "A seven-step method for building a true cost-per-part figure for a parts washing line.",
      steps: [
        { name: "Total the concentrate", text: "Bath volume × working strength × bath changes per year, plus all top-ups." },
        { name: "Add drag-out losses", text: "Estimate the solution film carried out per basket and multiply by baskets per year — on high-throughput lines this often exceeds the fills." },
        { name: "Add heating energy", text: "Hours at temperature × heater load × tariff. Aqueous cleaning at 55–65 °C avoids the 90–100 °C a TCE vapour zone requires." },
        { name: "Add water and effluent", text: "Litres dumped per bath change × changes per year, costed at your treatment or haulage rate." },
        { name: "Add labour", text: "Hours spent on bath changes, dosing, testing and re-washing, at a loaded labour rate." },
        { name: "Add rejects and rework", text: "Parts failing for cleanliness or corrosion, valued at their cost at that operation rather than at material cost." },
        { name: "Divide by parts cleaned", text: "Total annual spend divided by acceptable parts produced gives the figure to compare suppliers on." },
      ],
    },
    faqs: [
      {
        q: "How much does an industrial degreaser cost in India?",
        a: "Per-litre price is not comparable between products because working strength differs — the same drum might run at 1% or 5% depending on soil and metal. Ask instead for the dilution proved on your part, which converts directly into litres per year and a cost per part.",
      },
      {
        q: "Why is the cheapest cleaning chemical usually more expensive?",
        a: "Because concentrate is normally the minority of cleaning cost. A cheaper product used at a higher concentration, with a shorter bath life and more rejects, raises spend on effluent, energy, labour and scrap by more than it saves on the drum.",
      },
      {
        q: "What is the single biggest cleaning cost most plants miss?",
        a: "Rejects. A part scrapped after machining has absorbed material, machine time and labour, not just material cost. Cutting a cleanliness or corrosion rejection rate by a few percentage points usually outweighs every other line in the calculation.",
      },
      {
        q: "How do I reduce cleaning chemical consumption?",
        a: "Attack drag-out and bath life first. Add 10–15 seconds of drain time above the tank with blind holes facing down, fit a surface skimmer and a bag filter, and hold concentration by weekly titration instead of dosing by eye.",
      },
      {
        q: "Does a lower wash temperature really save money?",
        a: "Yes, and permanently. An aqueous bath at 55–65 °C runs far below the 90–100 °C a trichloroethylene vapour zone needs, and heating is a continuous load for every hour the line is up.",
      },
    ],
    related: [
      "extend-degreaser-bath-life",
      "how-to-choose-industrial-degreaser",
      "replacing-tce-plant-guide",
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "carbon-deposit-removal-guide",
    title: "Carbon Deposit Removal from Pistons, Valves and Heat Exchangers",
    metaTitle: "Carbon Deposit Removal Guide",
    metaDescription:
      "Why degreasers do nothing to baked carbon, and what removes it. Soak chemistry, temperature, dwell times and the limits on aluminium pistons.",
    answer:
      "Baked carbon is not oil and will not emulsify, so ordinary degreasing does nothing to it. It needs a hot, strongly alkaline soak with dwell measured in hours rather than minutes, usually with agitation. Aluminium pistons and zinc parts must be separated first, because the alkalinity required will attack them.",
    kicker: "APPLICATION GUIDE",
    summary:
      "Carbon is the soil that makes a good degreaser look useless. What it actually is, why emulsification cannot touch it, and the process that does.",
    keywords: [
      "carbon deposit removal",
      "decarbonising chemical",
      "piston carbon cleaning",
      "engine carbon remover industrial",
      "heat exchanger carbon fouling",
    ],
    datePublished: "2026-04-01",
    dateModified: "2026-04-01",
    readMinutes: 9,
    photo: "/photos/solution-342.webp",
    photoAlt:
      "Engine cylinder head with valves being cleaned of carbon deposits by hand",
    keyFacts: [
      { label: "Soil type", value: "Thermally decomposed oil — inert carbon" },
      { label: "Emulsifies?", value: "No — degreasers do not remove it" },
      { label: "Process", value: "Hot alkaline soak with agitation" },
      { label: "Dwell", value: "Hours, not minutes" },
      { label: "Substrate limit", value: "Not on aluminium or zinc" },
    ],
    blocks: [
      {
        kind: "p",
        text: "A wash bath that strips machining oil off a gear in four minutes can sit on a carboned piston crown for an hour and achieve nothing. This is the most common source of the complaint that a cleaner has stopped working, and the cleaner is usually blameless: carbon is a completely different soil, and the mechanisms that remove oil do not act on it at all.",
      },
      { kind: "h2", text: "What carbon actually is" },
      {
        kind: "p",
        text: "Carbon deposit is what remains after oil has been thermally decomposed. Heat drives off the volatile fraction and cracks what is left, leaving a hard, chemically inert residue bonded to the surface — on piston crowns and ring grooves, on valve stems and seats, in exhaust passages, and on the hot side of heat exchangers.",
      },
      {
        kind: "p",
        text: "The two routes an aqueous degreaser uses are saponification, which converts fatty esters into soluble soaps, and emulsification, which suspends mineral oil as droplets. Carbon has no ester group to saponify and is not a liquid to emulsify. Adding concentration or extending a normal wash cycle changes nothing.",
      },
      {
        kind: "table",
        caption: "Why normal degreasing fails on carbon",
        head: ["Soil", "Removal mechanism", "Typical cycle"],
        rows: [
          ["Fatty cutting oil", "Saponification", "3–6 minutes"],
          ["Mineral oil, grease", "Emulsification", "4–10 minutes"],
          ["Buffing compound", "Emulsification + filtration of solids", "6–15 minutes"],
          ["Baked carbon", "Undercutting the binder, hot alkaline soak", "1–8 hours"],
        ],
      },
      { kind: "h2", text: "What does work" },
      {
        kind: "p",
        text: "The working approach is a hot, strongly alkaline soak with extended dwell. The chemistry does not dissolve the carbon itself — it attacks the oily and oxidised binder holding the deposit to the metal, undercutting it until it lifts and can be flushed or brushed away.",
      },
      {
        kind: "p",
        text: "Three variables control it. Temperature: hotter is faster, and a bath that has been allowed to drop out of range will appear to have stopped working. Alkalinity: this is a high-pH duty, and a neutral cleaner has no chance. Time: dwell is measured in hours, so this is a soak-tank operation, not a line process.",
      },
      {
        kind: "p",
        text: "Agitation shortens it considerably. Basket oscillation, a recirculation pump or air sparging replaces the saturated boundary layer at the deposit face with fresh chemistry, and on heavy deposits can halve the dwell required.",
      },
      { kind: "h2", text: "The substrate limit you cannot design around" },
      {
        kind: "callout",
        title: "Separate the aluminium before the bath, not after",
        text: "The alkalinity that undercuts carbon will etch aluminium pistons, zinc components and brass fittings — dulling them, opening the grain and leaving a reactive surface that blooms into white rust within days. Mixed assemblies must be stripped down first.",
      },
      {
        kind: "p",
        text: "This is the constraint that decides the whole process. A cast-iron head or a steel exhaust component tolerates the chemistry happily. An aluminium piston does not, and there is no dilution that both removes carbon and leaves it unetched — the two requirements point in opposite directions.",
      },
      {
        kind: "p",
        text: "Where aluminium genuinely has to be decarbonised, the answer is a lower-alkalinity route with much longer dwell and accepted partial removal, followed by mechanical finishing. It is slower and less complete, and that trade is unavoidable.",
      },
      { kind: "h2", text: "A working sequence" },
      {
        kind: "ol",
        items: [
          "Strip the assembly and separate parts by metal. Aluminium, zinc and brass do not go in the alkaline bath.",
          "Pre-wash to remove loose oil and grease, so the soak chemistry is spent on carbon rather than on soil an ordinary degreaser would have taken off.",
          "Soak hot, with agitation if the tank allows. Check progress at intervals rather than assuming a fixed time — deposit thickness varies enormously between parts.",
          "Assist mechanically once the deposit has lifted. Chemistry undercuts it; a brush or a low-pressure rinse removes it.",
          "Rinse thoroughly, including ring grooves, ports and internal passages where loosened carbon collects.",
          "Dry completely and apply rust protection — the part is now chemically bare steel and will flash-rust within minutes.",
        ],
      },
      {
        kind: "p",
        text: "On the fouled side of a heat exchanger the same logic applies, but the deposit is usually mixed: carbon over mineral scale, or the reverse. Those need a two-stage treatment — an alkaline soak for the carbonised fraction and an inhibited acid descale for the mineral fraction — in the order the layers were laid down.",
      },
      {
        kind: "cta",
        text: "Send us a carboned sample part and tell us the base metal. The lab will confirm whether it is a soak-tank job, a two-stage job, or a case where mechanical removal is genuinely cheaper.",
        href: "/contact",
        label: "Ask about a carbon deposit",
      },
    ],
    howTo: {
      name: "How to remove baked carbon deposits from engine components",
      description:
        "A six-step process for stripping carbonised deposits from pistons, valves, heads and exhaust components.",
      steps: [
        { name: "Separate by metal", text: "Strip the assembly and keep aluminium, zinc and brass out of the alkaline bath — the required alkalinity etches them." },
        { name: "Pre-wash the loose soil", text: "Remove oil and grease first so the soak chemistry works on carbon rather than on soil a normal degreaser would take off." },
        { name: "Soak hot with agitation", text: "Use a hot, strongly alkaline bath with dwell measured in hours. Agitation replaces the saturated layer at the deposit face and can halve the time." },
        { name: "Check progress at intervals", text: "Deposit thickness varies widely between parts, so inspect rather than running a fixed cycle." },
        { name: "Assist mechanically", text: "Once the deposit has been undercut, remove it with a brush or a low-pressure rinse." },
        { name: "Rinse, dry and protect", text: "Flush ring grooves, ports and internal passages, dry completely, then apply rust protection — the surface is now bare steel." },
      ],
    },
    faqs: [
      {
        q: "Why does my degreaser not remove carbon deposits?",
        a: "Because carbon is not oil. Degreasers work by saponification and emulsification; carbon has no ester group to saponify and is not a liquid to emulsify. Increasing concentration or cycle time on a normal wash will not touch it.",
      },
      {
        q: "What chemical removes baked-on carbon?",
        a: "A hot, strongly alkaline soak with dwell measured in hours. The chemistry undercuts the oily and oxidised binder holding the deposit rather than dissolving the carbon itself, so agitation and temperature matter as much as the formulation.",
      },
      {
        q: "Can aluminium pistons be decarbonised chemically?",
        a: "Not with the alkalinity that works on steel — it etches aluminium, dulls the surface and leaves it prone to white rust. Aluminium needs a lower-alkalinity route with much longer dwell, partial removal, and mechanical finishing to complete the job.",
      },
      {
        q: "How long does a carbon soak take?",
        a: "Hours rather than minutes, and it varies with deposit thickness. Inspect at intervals instead of running a fixed cycle. Agitation — basket oscillation, recirculation or air sparging — can roughly halve the dwell on heavy deposits.",
      },
      {
        q: "What about carbon fouling on heat exchangers?",
        a: "It is usually mixed with mineral scale, so it needs two stages: an alkaline soak for the carbonised fraction and an inhibited acid descale for the mineral fraction, applied in the order the layers formed. Neutralise and flush thoroughly between and after.",
      },
    ],
    related: [
      "how-to-choose-industrial-degreaser",
      "ultrasonic-vs-spray-vs-dip-tank",
      "rust-prevention-between-processes",
    ],
  },
  // ─────────────────────────────────────────────────────────────────────
  {
    slug: "cleaning-chemical-safety-documentation",
    title: "SDS, Storage and Effluent: The Paperwork Side of Cleaning Chemicals",
    metaTitle: "Cleaning Chemical Safety & SDS Guide",
    metaDescription:
      "What documentation a cleaning chemical must arrive with, how to store concentrates safely, and what to plan for spent bath effluent before switching.",
    answer:
      "Every industrial cleaning chemical should arrive with a safety data sheet, dosing and PPE guidance, and a batch reference. Before switching, confirm storage compatibility, PPE for the concentrate rather than the diluted bath, and an agreed route for spent bath effluent — that route is usually the thing that delays a changeover.",
    kicker: "COMPLIANCE",
    summary:
      "The half of a cleaner changeover that has nothing to do with cleaning: what paperwork to demand, how to store concentrates, and why effluent planning should happen before the trial, not after.",
    keywords: [
      "cleaning chemical safety data sheet",
      "industrial chemical SDS india",
      "chemical storage handling plant",
      "spent cleaning bath effluent",
      "chemical audit documentation",
    ],
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
    readMinutes: 9,
    photo: "/photos/res-safety.webp",
    photoAlt:
      "Plant operator wearing protective gloves while handling industrial chemicals",
    keyFacts: [
      { label: "Supplied with every product", value: "SDS + dosing and PPE guidance" },
      { label: "Quality system", value: "ISO 9001, batch-wise QC" },
      { label: "PPE is specified for", value: "The concentrate, not the diluted bath" },
      { label: "Aqueous concentrates", value: "Non-flammable, biodegradable, zero VOC" },
      { label: "Plan before the trial", value: "The spent-bath disposal route" },
    ],
    blocks: [
      {
        kind: "p",
        text: "Most cleaner changeovers stall on paperwork rather than performance. The trial goes well, the parts pass, and then someone asks where the spent bath is going, or an auditor asks for a document nobody has. None of this is difficult, but it is much cheaper to settle before the trial than after it.",
      },
      { kind: "h2", text: "What should arrive with the product" },
      {
        kind: "p",
        text: "Three things, as a minimum, and a supplier who cannot produce them quickly is telling you something.",
      },
      {
        kind: "list",
        items: [
          "A safety data sheet covering composition, hazards, first aid, firefighting, spill response, handling and storage, exposure controls and PPE, physical properties, stability and reactivity, and disposal considerations.",
          "Dosing and application guidance — working strength, temperature, contact time, and the substrates the product is and is not suitable for.",
          "A batch reference tying the drum in front of you to a quality record. Power Clean production runs to an ISO 9001 certified system with batch-wise quality control, which is what makes that traceable.",
        ],
      },
      {
        kind: "p",
        text: "Keep the current version of each on file rather than the one issued when the product was first bought. Formulations and classifications get revised, and an audit will ask for the current sheet.",
      },
      {
        kind: "callout",
        title: "The SDS describes the concentrate, not your bath",
        text: "A concentrate that requires gloves and eye protection neat may be benign at 2% in a working tank. Read the sheet for the material as supplied, then write your own handling note for the diluted bath. Operators who are told to gown up for a 2% solution stop believing PPE instructions altogether.",
      },
      { kind: "h2", text: "Storage and handling" },
      {
        kind: "p",
        text: "Aqueous concentrates are far easier to store than the solvents they replace: non-flammable, biodegradable, non-corrosive in normal use and zero VOC. That removes the flammable-store requirement, the vapour exposure monitoring and most of the fire-risk assessment that comes with kerosene, diesel or a chlorinated solvent.",
      },
      {
        kind: "p",
        text: "What still applies is ordinary chemical discipline. Store alkaline and acidic products apart — an alkaline degreaser and an acid descaler sharing a bund is a genuinely bad idea. Keep containers closed and labelled, keep them off the ground and out of direct sun, and bund anything that would become a problem if it split.",
      },
      {
        kind: "p",
        text: "Decant with a pump rather than by tipping a 200 litre drum. Most handling incidents with concentrates happen during manual decanting, and a drum pump costs less than one of them.",
      },
      { kind: "h2", text: "Effluent: settle it before the trial" },
      {
        kind: "p",
        text: "A spent cleaning bath is not the same thing as the concentrate. It contains the oil, metal fines and dissolved soil taken off your parts, and it is that loading — not the cleaner — that usually determines how it must be handled.",
      },
      {
        kind: "p",
        text: "Establish three things early. Where does the spent bath go: an on-site effluent treatment plant, a licensed haulier, or an interceptor? What does that route cost per cubic metre? And does the receiving party need to see the SDS and know what is in it before the first dump arrives?",
      },
      {
        kind: "p",
        text: "This is also where bath life pays twice. Doubling the interval between changes halves the volume of effluent generated as well as the concentrate consumed — a skimmer and a filter are as much a compliance investment as a cost one.",
      },
      {
        kind: "table",
        caption: "What changes when you move off solvent",
        head: ["", "Chlorinated solvent", "Aqueous concentrate"],
        rows: [
          ["Flammability", "Non-flammable but toxic vapour", "Non-flammable"],
          ["Vapour exposure control", "Required", "Not applicable"],
          ["Storage", "Segregated solvent store", "Ordinary chemical store"],
          ["Waste stream", "Hazardous solvent disposal", "Aqueous effluent with oil loading"],
          ["VOC", "Yes", "Zero"],
          ["Operating temperature", "90–100 °C", "55–65 °C"],
        ],
      },
      { kind: "h2", text: "What auditors ask for" },
      {
        kind: "ol",
        items: [
          "The current SDS for every chemical on site, accessible to the people who use it — not filed in an office nobody can reach at 2 a.m.",
          "Evidence that operators have been briefed on handling and PPE for the products they actually touch.",
          "Labelled containers, with nothing decanted into an unlabelled drum or a drinks bottle.",
          "Segregated storage for incompatible products, with spill containment.",
          "A stated disposal route for spent baths, and records that it has been used.",
          "For quality audits, a link from the chemical in the bath to a batch record and a concentration log.",
        ],
      },
      {
        kind: "p",
        text: "None of that is exotic. It is a folder, a labelling habit and a weekly log — and every item on the list is easier to satisfy with a water-based product than with the solvent it replaced.",
      },
      {
        kind: "cta",
        text: "Ask us for the safety data sheet and dosing guidance for any product before you commit to a trial. Both are supplied as standard, and it is the right order to do this in.",
        href: "/contact",
        label: "Request an SDS",
      },
    ],
    faqs: [
      {
        q: "What documentation should an industrial cleaning chemical come with?",
        a: "A safety data sheet, dosing and PPE guidance, and a batch reference linking the container to a quality record. Power Clean products are supplied with all three, and production runs to an ISO 9001 certified system with batch-wise quality control.",
      },
      {
        q: "Do operators need PPE for a diluted cleaning bath?",
        a: "Usually far less than for the concentrate. The SDS describes the material as supplied; a 2% working solution is a different proposition. Read the sheet for the concentrate, then write a separate handling note for the bath — over-specifying PPE causes operators to ignore it.",
      },
      {
        q: "How should cleaning chemical concentrates be stored?",
        a: "Closed, labelled, off the ground, out of direct sun, and with alkaline and acidic products segregated and bunded. Aqueous concentrates are non-flammable and zero-VOC, so they do not need the flammable store a solvent required.",
      },
      {
        q: "What happens to a spent cleaning bath?",
        a: "It carries the oil and metal fines removed from your parts, and that loading usually determines the handling route — on-site effluent treatment, a licensed haulier, or an interceptor. Agree the route and its cost before the trial, not after.",
      },
      {
        q: "Is switching from solvent to aqueous cleaning simpler to comply with?",
        a: "Generally yes. It removes vapour exposure control, the segregated solvent store and hazardous solvent disposal, and replaces them with an aqueous effluent stream and ordinary chemical storage discipline. The operating temperature also drops from 90–100 °C to 55–65 °C.",
      },
    ],
    related: [
      "replacing-tce-plant-guide",
      "extend-degreaser-bath-life",
      "industrial-cleaning-cost-per-part",
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
