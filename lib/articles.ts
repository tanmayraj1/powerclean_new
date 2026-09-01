/**
 * Technical articles — rebuilt faithfully from the ones published on
 * powerclean.in (aqueous-cleaning, aqueous-cleaning-methods, replace-tce,
 * benefits-of-power-clean-degreaser, reasons-to-use-power-clean-degreaser,
 * ultrasonic-cleaner-faq). Content is the company's own; US-specific legacy
 * references (°F, EPA/OSHA, "toll free number") have been localised.
 */

export type ArticleBlock =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "qa"; items: { q: string; a: string }[] }
  | { kind: "table"; head: [string, string]; rows: [string, string][] }
  | { kind: "callout"; title: string; text: string };

export type Article = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  readMinutes: number;
  photo: string;
  photoAlt: string;
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "what-is-aqueous-cleaning",
    title: "What Is Aqueous Cleaning?",
    kicker: "FUNDAMENTALS",
    summary:
      "Water, chemistry, heat and agitation — how water-based precision cleaning works, and why plants are moving to it from solvents.",
    metaTitle: "What Is Aqueous Cleaning?",
    metaDescription:
      "Aqueous cleaning explained — the four elements, immersion vs spray vs ultrasonic, the TACT and WATCH frameworks, and bath maintenance.",
    readMinutes: 6,
    photo: "/photos/gallery-2.webp",
    photoAlt: "Industrial wash tanks and piping in a plant",
    blocks: [
      {
        kind: "p",
        text: "Everyone already knows aqueous cleaning. It is what happens in a washing machine, in a dishwasher, in the sink: water, plus a detergent or soap, plus scrubbing action, usually with heat. Industrial cleaning is the same thing with far more sophistication and much tighter control, because the result has to be consistent on every component of every shift.",
      },
      {
        kind: "p",
        text: "Four elements do the work: the cleaning agent, water, heat and agitation. Change any one and the result changes — which is what makes aqueous cleaning controllable in a way solvent dipping never was.",
      },
      { kind: "h", text: "Choosing chemistry and equipment" },
      {
        kind: "p",
        text: "Chemical selection follows the soil: the product has to dissolve, emulsify or lift what is actually on the part. Equipment selection follows the substrate and the amount of soil. Modern aqueous chemistry exists for both ferrous and non-ferrous metals at high efficiency and repeatability, and whether you need a single-stage or a multi-stage system depends on soil type and load, the equipment, the substrate, and how much heat and agitation you can apply.",
      },
      {
        kind: "p",
        text: "Aqueous cleaning agents are more complex than they look. They combine surfactants (surface-active agents), coupling agents, building agents and sequestering agents, among others. Between them they remove lube oil, water-soluble oil, silicone and petroleum greases, dust, fingerprints and loose burr.",
      },
      { kind: "h", text: "Three ways to apply mechanical energy" },
      {
        kind: "list",
        items: [
          "Immersion — the simplest and most economical. Parts are submerged and the bath is circulated; turbulation during the wash cycle dramatically increases efficiency. Best for large parts with light soil and hidden surfaces a spray jet can never reach.",
          "Spray and hi-jet — very effective where contamination is heavy. Exposed soils are removed quickly by jet impingement, drastically reducing cleaning time.",
          "Ultrasonic — best for small, intricate components with profiles, bores and crevices, because cavitation reaches everywhere the liquid reaches. Immersion and spray are often combined with ultrasonic for precision cleaning at high throughput on a short cycle.",
        ],
      },
      { kind: "h", text: "TACT — and why precision work adds a W" },
      {
        kind: "p",
        text: "Aqueous cleaning delivers a better result when four variables are balanced. Greater agitation means more cleaning in less time. Time is often the simplest and cheapest adjustment. The right chemical concentration depends on the soil, the agitation and the equipment. And a higher temperature reduces soil viscosity and makes the chemistry more aggressive. Together these are TACT: Time, Agitation, Chemical, Temperature.",
      },
      {
        kind: "callout",
        title: "For precision cleaning, remember WATCH",
        text: "Water quality matters as much as the other four. Demineralised or deionised water, free of minerals and salts, leaves no residue behind on a critical component. Water, Agitation, Time, Chemical, Temperature — WATCH becomes the watchword of quality.",
      },
      { kind: "h", text: "Wash, rinse, dry — and keeping the bath alive" },
      {
        kind: "p",
        text: "A typical system is three stages: wash, rinse, dry. The wash removes the soil, the rinse removes the cleaning agent, and drying removes the water. Rinsing can sometimes be skipped where a slight residue is of no consequence to the next operation — but it is the exception, not the rule.",
      },
      {
        kind: "p",
        text: "Bath life depends on contaminants, oil skimming, filtration, topping up to hold concentration, and keeping the equipment and temperature under control. Removing oil and grease by skimming, and heavy particulate by filtering, extends life enormously — an oil skimmer plus a filtration system makes soil removal automatic.",
      },
      {
        kind: "callout",
        title: "The rule worth remembering",
        text: "A cleaning bath is not a waste pit. It is a place where soils are discarded so they can be removed from the bath — not somewhere they accumulate until the parts start coming out dirty.",
      },
      {
        kind: "p",
        text: "Foam can rise from contaminants, spray pressure or water quality, and is controlled with a defoamer. Corrosion is handled by drying thoroughly after wash and rinse, by the rust inhibitors already built into the chemistry, and where longer protection is needed, by a rust preventive or vapour corrosion inhibitor.",
      },
      {
        kind: "p",
        text: "Aqueous cleaning meets the toughest cleanliness requirements in manufacturing today and is the preferred way to move away from toxic solvents — precision, all-round safety and savings in the same process.",
      },
    ],
  },
  {
    slug: "aqueous-cleaning-methods",
    title: "Aqueous Cleaning Methods",
    kicker: "PROCESS GUIDE",
    summary:
      "Spray washers, ultrasonic systems, heated dip tanks and agitated immersion — with the concentrations, temperatures and bath-life practices for each.",
    metaTitle: "Aqueous Cleaning Methods Compared",
    metaDescription:
      "Concentrations and temperatures for spray washers, ultrasonic systems and heated dip tanks, plus recycling, disposal and bath life.",
    readMinutes: 8,
    photo: "/photos/gallery-4.webp",
    photoAlt: "Conveyor line carrying metal parts through a plant",
    blocks: [
      {
        kind: "p",
        text: "POWER CLEAN has a strong affinity for oil and loosens contaminants from the part. Most of the oil then floats to the surface, where it is removed by a skimming wheel or belt, an absorption blanket, or vacuuming. Switch off the agitation and solid particulate and metal fines settle to the bottom, to be filtered off as sludge by a recycling filtration system.",
      },
      { kind: "h", text: "Heat and agitation" },
      {
        kind: "callout",
        title: "Rule of thumb",
        text: "Heat and agitation are the two most important factors in an aqueous system. As a rule of thumb, the entire tank volume should be recirculated once per minute.",
      },
      { kind: "h", text: "Parts spray washers" },
      {
        kind: "p",
        text: "A significant improvement in both safety and performance over the caustic powders once common in spray degreasing. At a dilution of 3% (1:30) with water, heated to approximately 60 °C, POWER CLEAN effectively removes contaminating oils, and the spray nozzles stay clear of contaminate build-up. Because no rinsing is required, an economical single-stage washing system is practical.",
      },
      { kind: "h", text: "Ultrasonic systems" },
      {
        kind: "p",
        text: "A 5% solution removes oils, dirt and fine metal particulate. Combined with the implosive action of ultrasonics, the result on small holes, long tubes and delicate pieces is remarkable — and it is safe on all substrates, with no damage to anodising and no alteration of the surface topography.",
      },
      { kind: "h", text: "Heated dip tanks" },
      {
        kind: "p",
        text: "A 5% solution heated to about 63 °C replaces the hazardous caustics and acids used in submersion washing. Parts washed and thoroughly dried are protected from rust for approximately 7 to 15 days, after which they can be coated or bonded with no further treatment. Existing vapour degreasing tanks can be converted to POWER CLEAN submersion systems quickly and at little expense — conversion is recommended to improve agitation.",
      },
      { kind: "h", text: "Agitated immersion tanks" },
      {
        kind: "p",
        text: "Turbulation during the wash cycle dramatically increases efficiency, produced by mechanical pumps and jetting action. A 5% concentration heated up to about 70 °C suspends and disperses soils and prevents re-deposition, while corrosion inhibitors and wetting agents help water sheet off the surface. Plants still running vapour tanks can adapt existing equipment with recirculation pumps at low capital cost.",
      },
      { kind: "h", text: "Rinsability and rust protection" },
      {
        kind: "p",
        text: "POWER CLEAN leaves a minimum of non-volatile residue, and that residue provides corrosion protection — in most cases it does not have to be removed before subsequent metal finishing. Once parts are completely dry they are protected from rust for approximately 7 to 15 days.",
      },
      { kind: "h", text: "Recycling and disposal" },
      {
        kind: "p",
        text: "Cleaning quality deteriorates quickly if contaminants stay in the washer tank, and an un-recycled bath creates large waste volumes and disposal costs. Decanting, membranes and micro-filtration units all remove suspended oils and extend bath life. Oil can also be separated from a cold, non-agitated tank by skimming, and mechanical filtration allows the solution to be recycled in a closed system.",
      },
      {
        kind: "p",
        text: "Note the exception: where particulate materials such as chips, fines or certain organic chemicals are present in the bath, the spent solution must be processed and managed as hazardous waste. Always dispose in line with local effluent regulations.",
      },
      { kind: "h", text: "Alkaline soak cleaning" },
      {
        kind: "p",
        text: "Alkaline soak cleaning is the most widely used form of cleaning ahead of electroplating. It removes oil, grease, waxy solids, metallic particles, dust, carbon particles and silica by emulsification, dispersion and saponification, usually helped along by agitation — either moving the work or moving the solution.",
      },
      { kind: "h", text: "What determines cleaning bath life" },
      {
        kind: "list",
        items: [
          "The amount and type of soils introduced to the bath.",
          "The drag-out rate.",
          "Maintenance procedures and how often they are carried out.",
          "Concentration, chemical make-up and operating conditions.",
        ],
      },
      {
        kind: "p",
        text: "The first two vary the most — they depend on the prior process chemistry, part size and geometry, and production rate — and they largely determine the third. A simple check on cleanliness is the water break test: a properly clean metal surface will hold an unbroken film of water. Unit cost is best derived from daily operating data: throughput, the amount and type of chemical additions, waste treatment cost, and dump frequency.",
      },
      { kind: "h", text: "Applying it to different substrates" },
      {
        kind: "p",
        text: "Most of the above is written for low carbon steel. The same alkaline soak cleaners and conditions generally work for high carbon steels, cast iron, high strength alloy steels, stainless steels, nickel and nickel alloys, and copper and copper alloys. Zinc and zinc-alloy die castings can often be cleaned but need lower temperatures and short immersion times to avoid etching. Aluminium needs a substantially different cycle — typically shorter times, lower temperature, or a desmutting step.",
      },
      {
        kind: "p",
        text: "Finally, aqueous cleaning has its own disciplines: deionised process water, thorough drying, and appropriate rust and corrosion inhibitors. POWER CLEAN is low residue and free-rinsing, but its built-in inhibitors protect for a limited period — parts held longer, particularly high carbon steels, should be given a dedicated rust preventive.",
      },
    ],
  },
  {
    slug: "power-clean-vs-tce",
    title: "Power Clean vs TCE",
    kicker: "SOLVENT REPLACEMENT",
    summary:
      "A head-to-head comparison with trichloroethylene, and the proven process for switching a line over safely and legally.",
    metaTitle: "Power Clean vs TCE Compared",
    metaDescription:
      "Replacing trichloroethylene — a point-by-point comparison with aqueous cleaning, the benefits of switching, and how changeover works.",
    readMinutes: 5,
    photo: "/photos/res-switch.webp",
    photoAlt: "Worker moving chemical drums in a plant",
    blocks: [
      {
        kind: "p",
        text: "Are you looking to replace trichloroethylene (TCE) or another toxic solvent used for cleaning? Industries of every kind are switching to eco-friendly aqueous cleaners. We have been replacing TCE, diesel, kerosene, naphtha and other toxic solvents in Indian plants since the year 2000.",
      },
      {
        kind: "p",
        text: "We have a well-defined, proven process for it. We come to your plant, sit with you and your team to understand the complete requirement, and guide you through the change — at a lower cost of ownership, legally and safely. Finding a genuine trichloroethylene substitute is not easy, and the switch is only the start of the relationship.",
      },
      { kind: "h", text: "What you gain by replacing toxic solvents" },
      {
        kind: "list",
        items: [
          "Lower cost per component cleaned, and lower overall cost",
          "Better and more consistent cleaning",
          "Reduced inventory and saved storage space",
          "Better compliance with regulations",
          "Worker safety",
          "Easier waste management",
          "No special storage precautions",
          "Works on multiple metals — no need for different products for different substrates",
        ],
      },
      { kind: "h", text: "Why Power Clean is better than TCE" },
      {
        kind: "table",
        head: ["POWER CLEAN", "TRICHLOROETHYLENE (TCE)"],
        rows: [
          ["Multi-purpose, versatile cleaner and degreaser", "A single-purpose metal degreaser"],
          ["Eco-friendly, non-toxic chemistry", "Emits hazardous toxic vapours"],
          ["Economical — completely soluble in water and used diluted", "Used in concentrated form"],
          [
            "Proven operator acceptability, safe for the environment, non-corrosive",
            "Corrosive. Must be used in secluded areas with proper exhaust; fumes are toxic and flammable",
          ],
          [
            "Non-hazardous — avoid eye contact and excessive contact with undiluted product",
            "Hazardous to eyes, extreme caution needed for splashes. Long-term health concerns: can affect liver and kidney, and increases cancer risk",
          ],
          ["Non-explosive", "Barrels are known to explode in storage"],
          [
            "Easy to handle, mix and dilute",
            "Highly dangerous to the environment — one litre of TCE can pollute a million litres of river water",
          ],
          ["Can be recycled", "Cannot be recycled"],
          ["Heated to 55–65 °C for optimum performance", "Minimum 90–100 °C required for better performance"],
          ["Needs strong agitation to produce scrubbing action", "Needs some form of agitation"],
          ["Indefinite shelf life", "Losses by evaporation in storage"],
          [
            "Replaces almost every cleaning agent, reducing inventory range and carrying cost. Cleans metals and non-metals",
            "No other use",
          ],
          ["Has rust preventive properties — protects parts from rust for 10 to 15 days", "No rust inhibitors"],
        ],
      },
      {
        kind: "callout",
        title: "One more reason",
        text: "Beyond the direct handling risks, industrial solvent exposure has been the subject of long-running health research — including studies linking TCE exposure to Parkinson's disease. The safest exposure to a chlorinated solvent is none.",
      },
    ],
  },
  {
    slug: "benefits-of-power-clean",
    title: "Benefits of Power Clean Aqueous Products",
    kicker: "PRODUCT BENEFITS",
    summary:
      "Safety, features and cost — what changes on the plant floor when hazardous chemistry is replaced with a biodegradable aqueous concentrate.",
    metaTitle: "Benefits of Aqueous Degreasers",
    metaDescription:
      "Safety, performance and cost benefits of aqueous cleaners — biodegradable, non-toxic, non-flammable, rust inhibited and used diluted.",
    readMinutes: 3,
    photo: "/photos/res-safety.webp",
    photoAlt: "Engineers reviewing process documentation on a plant floor",
    blocks: [
      { kind: "h", text: "Safe" },
      {
        kind: "list",
        items: [
          "Biodegradable cleaner and degreaser",
          "All-round safety — operator, environment and equipment",
          "Safety Data Sheet available for every product",
          "Non-toxic",
          "Non-flammable",
          "Non-hazardous",
          "Non-fuming",
        ],
      },
      { kind: "h", text: "Features" },
      {
        kind: "list",
        items: [
          "Easier disposal — no effluent treatment plant required in normal use",
          "Rust inhibited",
          "Works on many metal types",
          "Tested and approved by industry",
          "Superior dirt and oil suspension",
          "No re-deposition",
          "Superior degreasing",
          "Replaces many hydrocarbon solvents",
          "Rinses easily",
          "Low foaming",
        ],
      },
      { kind: "h", text: "Cost effective" },
      {
        kind: "list",
        items: [
          "Vary the dilution to replace several different products",
          "Reduce inventory and save space",
          "Field proven",
          "Reported cost reductions average 60%",
          "No extra storage precautions",
          "Works on multiple metals — no need to buy a different chemical for every substrate",
        ],
      },
      {
        kind: "p",
        text: "POWER CLEAN replaces trichloroethylene, diesel, kerosene, petrol, caustic soda, naphtha and other toxic chemicals. It removes the worker safety problems and the hazards that come with storing solvents — and it is far more cost effective than most of them.",
      },
      {
        kind: "callout",
        title: "Our quality and environment policy",
        text: "Roovel Solutions Pvt. Ltd. strives to exceed customer satisfaction by providing high quality, cost effective products and services using environmentally safer processes, while continuously improving those processes, committing to the prevention of pollution, and complying with legal and other requirements.",
      },
    ],
  },
  {
    slug: "five-reasons-to-switch",
    title: "Five Reasons to Use Power Clean",
    kicker: "WHY IT MATTERS",
    summary:
      "Your choice of cleaning chemical decides your cleaning results, your operating cost and how long your washer lasts.",
    metaTitle: "Five Reasons to Switch to Aqueous",
    metaDescription:
      "Why the cleaning chemical matters — results at temperature and pressure, washer operating cost and life, safety and technical support.",
    readMinutes: 4,
    photo: "/photos/res-downtime.webp",
    photoAlt: "Maintenance team working on industrial equipment",
    blocks: [
      {
        kind: "p",
        text: "Your choice of cleaning chemical is critical to obtaining the best possible cleaning results, the lowest operating cost, and the longest life from your cleaning equipment.",
      },
      { kind: "h", text: "1. Best possible cleaning results" },
      {
        kind: "p",
        text: "Power Clean is designed specifically for high-pressure and ultrasonic, high-temperature cleaning. The cleaning action becomes more effective as temperature rises, and the chemistry does not break down under heat and pressure. Inferior detergents decompose and form precipitates — and precipitates are bad news. They deposit on heat exchangers and other parts of the washer, make the solution harder to heat, and can burn the heat exchanger out.",
      },
      { kind: "h", text: "2. Lower parts washer operating cost" },
      {
        kind: "p",
        text: "Power Clean chemicals are 100% active and concentrated to tackle the toughest grease and grime — designed to blend with water in ratios as far as 1 part detergent to 64 parts water. Against an economy brand you use less chemical and the bath lasts longer, so every litre goes further.",
      },
      { kind: "h", text: "3. Longer parts washer life" },
      {
        kind: "p",
        text: "Cheap detergents allow lime and soap build-up inside the washer, which raises maintenance costs, reduces cleaning performance and shortens the life of the machine. Power Clean's activated additives fight staining and prevent that build-up, and its corrosion inhibitors protect both the washer cabinet and the metal surfaces of the parts you are washing.",
      },
      { kind: "h", text: "4. Environmentally friendly" },
      {
        kind: "p",
        text: "Safe for the equipment and for the people operating it, easier to handle, and without the unpleasant odours of many low-cost detergents. A Safety Data Sheet is available for every Power Clean product.",
      },
      { kind: "h", text: "5. Knowledgeable technical support" },
      {
        kind: "p",
        text: "Our technical services team knows hundreds of applications like yours — what works and what does not. Our cleaning-system specialists apply field-tested experience to match the optimum product to your specific process, and we stay available for the difficult applications. Call us and we will help.",
      },
    ],
  },
  {
    slug: "ultrasonic-cleaning-faq",
    title: "Ultrasonic Cleaning FAQ",
    kicker: "FAQ",
    summary:
      "How cavitation works, which solutions to use, which ones to never use, and the temperature and cycle times that get results.",
    metaTitle: "Ultrasonic Cleaning FAQ",
    metaDescription:
      "How ultrasonic cleaners work, what cavitation is, choosing a solution, what never to put in the tank, cycle time and optimum temperature.",
    readMinutes: 5,
    photo: "/photos/gallery-3.webp",
    photoAlt: "Precision metal components after ultrasonic cleaning",
    blocks: [
      {
        kind: "qa",
        items: [
          {
            q: "How does an ultrasonic cleaner work?",
            a: "An ultrasonic cleaner is a metal tank with ceramic piezo transducers bonded to its side or base. High frequency electrical energy is converted by the transducers into high frequency sound waves — ultrasonic energy — which create a scrubbing action within the liquid. That energy causes the rapid formation and collapse of minute bubbles: cavitation. The bubbles grow until they implode against the surface of the immersed part, releasing enough energy to lift contamination off the surface and out of the innermost recesses of an intricately shaped component.",
          },
          {
            q: "What is cavitation?",
            a: "The rapid formation and collapse of millions of tiny bubbles, or cavities, in a liquid. They are produced by the alternating high and low pressure waves generated by high frequency sound. During the low pressure phase the bubbles grow from microscopic size; during the high pressure phase they are compressed until they implode.",
          },
          {
            q: "How do I get the best ultrasonic cleaning?",
            a: "There are many variables, but three decisions matter most: choosing the proper cleaning solution, cleaning at the right temperature for the correct length of time, and choosing the right size and type of ultrasonic cleaner for the work.",
          },
          {
            q: "Why is a special solution required?",
            a: "Soils adhere to parts — if they did not, they would simply fall off. The job of the solution is to break the bond between the part and its soil. Water alone has no cleaning properties. The primary purpose of the ultrasonic activity is to assist the solution in doing its job, and increased cavitation results from reduced fluid surface tension. Selecting the right cleaning media is critical and depends on several factors.",
          },
          {
            q: "What cleaning solution should I use?",
            a: "Modern solutions are compounded from detergents, wetting agents and other reactive components, in a wide variety of formulations designed for specific applications. Proper selection is crucial both for acceptable cleaning and to avoid undesirable reactivity with the part. Your Power Clean representative can help identify the optimal stock formulation, or likely candidates to test and evaluate on your components.",
          },
          {
            q: "What should I never use?",
            a: "Flammables and solutions with low flash points should never be used — cavitation energy converts to heat and kinetic energy, creating high temperature gradients and hazardous conditions with flammable liquids. Acids, bleach and bleach by-products should generally be avoided; where they are unavoidable they may be used with indirect cleaning in a suitable container such as a glass beaker. Acid and bleach will damage stainless steel tanks and create hazardous conditions.",
          },
          {
            q: "When should the solution be changed?",
            a: "Replenish when you notice a decrease in cleaning action, or when the solution is visibly dirty or spent. A fresh batch at every cleaning session is usually not required.",
          },
          {
            q: "How long should a cleaning cycle be?",
            a: "It varies with the soil, the solution, the temperature and the cleanliness you need. Visible soil removal should begin almost immediately once ultrasonic action starts. Cycle time is the easiest — and most often misapplied — factor used to compensate for other process variables; an experienced operator can approximate it, but it must be validated with your chosen solution on your actual soiled parts.",
          },
          {
            q: "What is the optimum cleaning temperature?",
            a: "Heat usually enhances and speeds up the process, and most detergent solutions are designed to work best at elevated temperature. The best way to find the optimum is to run tests — but usually the best results fall within the 50 °C to 65 °C range.",
          },
          {
            q: "Is rinsing required after cleaning?",
            a: "Rinsing is recommended, to remove chemical residue that could be harmful to the part. Parts can be rinsed in the ultrasonic cleaner itself using a clean water bath, or in a separate tub of tap, distilled or deionised water.",
          },
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);
