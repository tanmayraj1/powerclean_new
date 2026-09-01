import type { CategoryKey } from "./products";

/**
 * Editorial content for the four product-family hubs at /products/[category].
 *
 * The client's architecture calls these out as their own pages, and they are
 * the head terms with no page of their own until now — "aqueous degreaser",
 * "rust preventive", "cooling tower chemicals", "solvent cleaner". Everything
 * here comes from Power Clean's published product data; nothing is invented.
 */
export type CategoryContent = {
  /** 40–60 word extractable answer */
  answer: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  photo: string;
  photoAlt: string;
  /** hard numbers rendered as the facts strip */
  facts: { label: string; value: string }[];
  /** 3–4 explanatory paragraphs */
  body: string[];
  /** which sectors buy this family */
  industries: { label: string; href: string }[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

export const categoryContent: Record<CategoryKey, CategoryContent> = {
  aqueous: {
    answer:
      "Aqueous cleaners and degreasers are water-based concentrates that remove oil, grease and machining soils without a solvent. Power Clean's aqueous range runs at 1–5% and 55–65 °C across ultrasonic, spray and soak equipment, and carries an in-built inhibitor giving 7–15 days of indoor rust protection after the wash.",
    metaTitle: "Aqueous Degreasers & Water-Based Cleaners",
    metaDescription:
      "Water-based industrial degreasers — alkaline grades for steel, neutral-pH for aluminium and brass, and low-foam grades for spray and ultrasonic lines.",
    keywords: [
      "aqueous degreaser",
      "water based degreaser india",
      "industrial parts cleaning chemical",
      "alkaline cleaner",
      "neutral ph cleaner aluminium",
      "low foam ultrasonic cleaner",
    ],
    photo: "/photos/solution-xl.webp",
    photoAlt:
      "Oily machined gears and bearing races before aqueous degreasing",
    facts: [
      { label: "Working strength", value: "1–5% (1:100 to 5:100)" },
      { label: "Wash temperature", value: "55–65 °C" },
      { label: "Equipment", value: "Ultrasonic · Spray · Soak" },
      { label: "Rust protection", value: "7–15 days indoors" },
      { label: "Properties", value: "Biodegradable · Non-flammable · Zero VOC" },
    ],
    body: [
      "This is the largest family in the range and the one most plants start with. The water does the transport and the concentrate does the work: surfactants wet the surface and reach into blind holes and thread roots, alkaline builders saponify fatty oils into soluble soaps, and emulsifiers hold mineral oil in suspension so it can be skimmed or filtered out instead of redepositing on the next basket.",
      "Choosing within the family comes down to three questions. What metal — alkaline grades suit steel and cast iron, while aluminium, zinc, brass and mixed baskets need a neutral-pH grade, because alkalinity above roughly pH 10 etches those metals and leaves a surface that blooms into white rust. What equipment — spray washers and ultrasonic baths both require a low-foam grade, since foam aerates a spray pump and cushions the cavitation that does the cleaning in an ultrasonic tank. And what soil — light maintenance films sit at the bottom of the dilution band, heavy machining oil and buffing compound at the top.",
      "The commercial case is straightforward. An aqueous bath at 55–65 °C runs far below the 90–100 °C a trichloroethylene vapour degreaser needs, there is no solvent vapour to monitor and no flammable store to maintain, and the effluent is a declared, biodegradable aqueous stream rather than a hazardous solvent waste. Replacing trichloroethylene, kerosene, diesel and naphtha with this chemistry is the work Roovel Solutions has been doing in Indian plants since 2000.",
      "The trade-off is that water has to be removed. An aqueous line needs a rinse and a drying stage, and bare steel flash-rusts within minutes of a hot rinse — which is why every concentrate in this family carries a corrosion inhibitor as part of the formulation.",
    ],
    industries: [
      { label: "Automotive", href: "/industries/automotive" },
      { label: "Bearing manufacturing", href: "/industries/bearing-manufacturing" },
      { label: "Foundry & die casting", href: "/industries/foundry-die-casting" },
      { label: "General engineering", href: "/industries/general-engineering" },
    ],
    faqs: [
      {
        q: "What is an aqueous degreaser?",
        a: "A water-based cleaning concentrate that removes oil and grease by saponification and emulsification rather than by dissolving them in a solvent. It is diluted with water — typically to 1–5% — and used heated, usually at 55–65 °C.",
      },
      {
        q: "Which aqueous grade should I use on aluminium?",
        a: "A neutral-pH grade such as POWER CLEAN NF-14, working between pH 7 and 9. Alkaline grades above roughly pH 10 etch aluminium and zinc, dulling the surface and leaving it prone to white rust within days.",
      },
      {
        q: "Do aqueous cleaners work in ultrasonic machines?",
        a: "Yes, provided the grade is low-foam. Foam bubbles cushion the cavitation implosions that do the cleaning, so a foaming cleaner effectively switches the ultrasonics off. Degas the bath for 10–20 minutes after every fresh fill.",
      },
      {
        q: "How long do aqueous cleaners protect parts from rust?",
        a: "Roughly 7–15 days indoors, from the corrosion inhibitor built into the concentrate. That covers the gap between wash and assembly. Stock, transit or export needs a dedicated rust preventive.",
      },
      {
        q: "Can aqueous chemistry replace trichloroethylene?",
        a: "Yes, and it is the cheaper of the two routes. It changes the process rather than just the chemical: you gain a rinse and a dry stage, and you lose the 90–100 °C vapour zone, the exposure monitoring and the hazardous solvent waste stream.",
      },
    ],
    related: [
      { label: "How to choose an industrial degreaser", href: "/blog/how-to-choose-industrial-degreaser" },
      { label: "Aqueous cleaning — definition", href: "/glossary/aqueous-cleaning" },
      { label: "Extending bath life and cutting cost", href: "/blog/extend-degreaser-bath-life" },
    ],
  },

  cooling: {
    answer:
      "Cooling tower chemicals keep cooling water circuits free of scale and biofilm. The range covers inhibited descalers that dissolve calcium carbonate without attacking copper and brass, and biocides that control the algae and bacteria which foul heat-exchange surfaces and can harbour Legionella.",
    metaTitle: "Cooling Tower Chemicals — Descalers & Biocides",
    metaDescription:
      "Inhibited descalers and biocides for cooling towers, heat exchangers and closed circuits — safe on copper and brass, with dosing and blowdown guidance.",
    keywords: [
      "cooling tower chemicals",
      "cooling tower descaling chemical",
      "heat exchanger descaler",
      "cooling water biocide",
      "scale inhibitor cooling tower",
    ],
    photo: "/photos/blog-cooling.webp",
    photoAlt:
      "Cooling tower fan array on an industrial plant roof requiring descaling",
    facts: [
      { label: "Cycles of concentration", value: "3–6 typical" },
      { label: "Control measurement", value: "Conductivity" },
      { label: "Descaler", value: "Corrosion-inhibited acid" },
      { label: "Safe on", value: "Copper · Brass" },
      { label: "Biocide strategy", value: "Alternate oxidising / non-oxidising" },
    ],
    body: [
      "A cooling tower cools by evaporating water, and evaporation removes only the water. Everything dissolved in it stays behind and concentrates, until hardness reaches the point where calcium carbonate deposits on the hottest surfaces in the system. Under a millimetre of that scale measurably cuts heat transfer, which shows up as rising approach temperature, longer chiller run times and a higher energy bill long before anything visibly fails.",
      "Descaling uses an acid circulated through the system, and the inhibitor is what makes it usable: raw acid would dissolve the scale and then attack the tube walls, and copper and brass are particularly vulnerable. Progress is tracked by monitoring pH — when the acid stops being consumed, the scale is gone. The job is not finished at that point: the system must be neutralised, flushed until the effluent runs clear and neutral, then returned to treated service, because a freshly descaled surface is bare and corrodes quickly.",
      "The second half of the problem is biological. A tower is close to an ideal incubator — warm water, sunlight, dissolved nutrients and continuous aeration — and biofilm forms within days on untreated systems. It insulates worse than mineral scale at the same thickness, shelters corrosion beneath it, and carries a genuine public-health obligation around Legionella. Oxidising and non-oxidising biocides are normally alternated so organisms cannot adapt to either.",
      "Long-term control is cheaper than repeated shutdown descales. A scale-inhibitor programme with blowdown held at three to six cycles of concentration, monitored by conductivity, keeps a tower running for years without a shutdown clean.",
    ],
    industries: [
      { label: "Plant & facility care", href: "/industries/plant-facility" },
      { label: "General engineering", href: "/industries/general-engineering" },
      { label: "Foundry & die casting", href: "/industries/foundry-die-casting" },
    ],
    faqs: [
      {
        q: "How often should a cooling tower be descaled?",
        a: "With a working inhibitor programme and controlled blowdown, a tower can run for years without a shutdown descale. Without one, scale accumulates continuously — the signal is rising approach temperature and rising conductivity, not a date in the calendar.",
      },
      {
        q: "Is descaling acid safe on copper and brass?",
        a: "Only if it is inhibited. Raw acid dissolves the scale and then attacks the tube wall. An inhibited descaler carries a corrosion inhibitor that protects the base metal while the scale dissolves. Neutralise and flush thoroughly afterwards.",
      },
      {
        q: "Why alternate two types of biocide?",
        a: "Because organisms adapt. Oxidising biocides such as chlorine and bromine act fast and broadly but deplete quickly; non-oxidising types persist longer and penetrate established biofilm better. Alternating them prevents resistant populations establishing.",
      },
      {
        q: "What are cycles of concentration?",
        a: "The ratio of dissolved solids in the circulating water to those in the make-up water. Running at four cycles means the tower water is four times as concentrated as what feeds it. Three to six is typical — higher saves water and chemical but moves closer to the scaling limit.",
      },
    ],
    related: [
      { label: "Cooling tower descaling guide", href: "/blog/cooling-tower-descaling-guide" },
      { label: "Blowdown — definition", href: "/glossary/cooling-tower-blowdown" },
      { label: "Biocide — definition", href: "/glossary/biocide" },
    ],
  },

  solvent: {
    answer:
      "Solvent cleaners are high-flash, non-chlorinated degreasers used where water cannot go — assembled machinery, live electrical equipment and field maintenance. The range includes a drop-in trichloroethylene replacement based on n-propyl bromide, which keeps existing equipment while removing the carcinogen from the process.",
    metaTitle: "Solvent Cleaners & TCE Replacement",
    metaDescription:
      "Non-chlorinated solvent degreasers for equipment that cannot be washed with water, including a high-flash drop-in replacement for trichloroethylene.",
    keywords: [
      "solvent cleaner industrial",
      "TCE replacement",
      "trichloroethylene alternative india",
      "non chlorinated solvent degreaser",
      "safety solvent cleaner",
    ],
    photo: "/photos/solution-342.webp",
    photoAlt:
      "Engine cylinder head being cleaned by hand with a solvent degreaser",
    facts: [
      { label: "Chemistry", value: "n-propyl bromide" },
      { label: "Replaces", value: "TCE · Perchloroethylene" },
      { label: "Flash point", value: "High" },
      { label: "Rinse required", value: "No" },
      { label: "Chlorinated", value: "No" },
    ],
    body: [
      "Solvent cleaning fills the gap aqueous chemistry genuinely cannot: motors and switchgear that must not be wetted, assembled gearboxes that cannot be dismantled for a wash, and maintenance work where there is no tank, no heat and no rinse available. It cleans by dissolution and evaporates without residue, so the part comes out dry.",
      "The reason this family exists in its current form is trichloroethylene. TCE cleaned aggressively and left parts dry with no rinse, which made it the default for precision component cleaning for decades — but it is a recognised carcinogen, its vapour zone has to be held at 90–100 °C, and exposure monitoring, effluent handling and disposal now carry real cost and real liability.",
      "There are two honest routes off it. The better one, where the line can be rebuilt, is aqueous: wash, rinse, dry at 55–65 °C, cheaper to run and far simpler to comply with. The other, where the existing equipment has to be kept, is a high-flash non-chlorinated solvent that drops into the same plant. It removes the carcinogen and the chlorinated waste stream without a capital project.",
      "These are maintenance and rework tools rather than production-cleaning tools. Volume cleaning of components remains cheaper and safer in an aqueous bath, and a plant running both usually uses solvent only where water is genuinely impossible.",
    ],
    industries: [
      { label: "Electrical & electronics", href: "/industries/electrical-electronics" },
      { label: "Aerospace & defence", href: "/industries/aerospace-defence" },
      { label: "Railways & fleet", href: "/industries/railways-fleet" },
    ],
    faqs: [
      {
        q: "What can replace trichloroethylene in a degreasing line?",
        a: "Two routes. An aqueous line at 1–5% and 55–65 °C, which is cheaper to run and far simpler to comply with but adds a rinse and dry stage; or a high-flash non-chlorinated solvent such as PC-S 342, which drops into the existing equipment.",
      },
      {
        q: "Is a non-chlorinated solvent safer than TCE?",
        a: "It removes the chlorinated carcinogen and the hazardous chlorinated waste stream, and a high flash point means it is not readily ignitable in normal use. It is still a solvent, so ventilation, PPE and the safety data sheet all still apply.",
      },
      {
        q: "When should I use solvent instead of aqueous cleaning?",
        a: "When the item cannot be wetted or cannot be dismantled — motors, switchgear, assembled gearboxes — or when there is no tank, heat or rinse available, as in field maintenance. For volume component cleaning, aqueous is cheaper and safer.",
      },
      {
        q: "Do solvent cleaners need a rinse?",
        a: "No. They evaporate without residue, which is the property that made vapour degreasing attractive in the first place and is why they suit assembled equipment where a rinse stage is impossible.",
      },
    ],
    related: [
      { label: "Replacing TCE — plant manager's guide", href: "/blog/replacing-tce-plant-guide" },
      { label: "Trichloroethylene — definition", href: "/glossary/trichloroethylene" },
      { label: "Safety solvent — definition", href: "/glossary/safety-solvent" },
    ],
  },

  rust: {
    answer:
      "Rust preventives protect bare metal after cleaning; rust removers strip corrosion that has already formed. Power Clean's range spans water-based inhibitors giving days of cover, oil-based films such as PC RP-636 giving 3–6 months with a 10–15 minute touch-dry, and acidic removers for reclaiming corroded components.",
    metaTitle: "Rust Preventives & Rust Removers",
    metaDescription:
      "Rust protection for machined steel — water-based inhibitors, oil-based preventives giving 3–6 months, and acidic removers for reclaiming corroded parts.",
    keywords: [
      "rust preventive oil",
      "rust remover industrial",
      "corrosion preventive india",
      "rust inhibitor machined parts",
      "flash rust prevention",
    ],
    photo: "/photos/solution-rp636.webp",
    photoAlt:
      "Golden rust-preventive oil droplet splashing, showing the protective film",
    facts: [
      { label: "In-built cleaner protection", value: "7–15 days indoors" },
      { label: "PC RP-636 protection", value: "3–6 months" },
      { label: "Touch-dry", value: "10–15 minutes" },
      { label: "Removers", value: "Dip · Spray · Manual · Ultrasonic" },
      { label: "Precondition", value: "Completely dry part" },
    ],
    body: [
      "Cleaning creates the corrosion problem it gets blamed for. The oil film that was protecting a machined part is exactly what the degreaser removes, and what is left is chemically bare steel, still warm from the wash, carrying a thin layer of water. In monsoon humidity that surface can show orange flash rust in under five minutes. This is not a cleaner defect — it is what clean, unprotected steel does.",
      "Selection is driven by how long the part must survive and where. Days indoors between operations are covered by the inhibitor already built into the aqueous cleaners. Stock and transit need an oil-based preventive that lays down a continuous barrier film — PC RP-636 gives three to six months and is touch-dry in ten to fifteen minutes, which matters on a line where parts have to be handled and packed immediately. Sea freight and sealed long-term storage additionally want VCI in the packaging, because vapour reaches internal bores no liquid film covers uniformly.",
      "The most common failure is timing rather than product. A preventive applied over a damp or contaminated surface seals moisture against the metal and accelerates exactly the corrosion it was bought to stop. Dry the part completely first, including blind holes and box sections, then coat.",
      "Rust removers work the other way: acidic formulations that dissolve existing oxide so a corroded component can be reclaimed rather than scrapped. They can be applied by dip, spray, brush or in an ultrasonic system, and the freshly stripped surface must be neutralised, dried and protected immediately.",
    ],
    industries: [
      { label: "General engineering", href: "/industries/general-engineering" },
      { label: "Automotive", href: "/industries/automotive" },
      { label: "Bearing manufacturing", href: "/industries/bearing-manufacturing" },
    ],
    faqs: [
      {
        q: "Why do parts rust immediately after cleaning?",
        a: "Because cleaning removed the oil film protecting them. A freshly cleaned steel surface is chemically bare, still warm and carrying a thin water layer — every condition corrosion needs. In humid conditions flash rust can appear in under five minutes.",
      },
      {
        q: "How long does a rust preventive last?",
        a: "It depends on the type. The inhibitor built into aqueous cleaners gives roughly 7–15 days indoors. An oil-based preventive such as PC RP-636 gives three to six months. VCI inside a sealed package protects for months to years, including internal bores.",
      },
      {
        q: "Does a rust preventive need removing before the next operation?",
        a: "Oil-based films do — degrease them off before machining, painting or assembly, and plan that stage in rather than discovering it at the customer's inward inspection. Water-based inhibitors rinse off, and VCI simply evaporates.",
      },
      {
        q: "Can a rusted component be reclaimed?",
        a: "Often, yes. An acidic rust remover dissolves the existing oxide by dip, spray, brush or ultrasonic application. The stripped surface is then bare and highly reactive, so it must be neutralised, dried and protected straight away.",
      },
    ],
    related: [
      { label: "Rust prevention between processes", href: "/blog/rust-prevention-between-processes" },
      { label: "Flash rust — definition", href: "/glossary/flash-rust" },
      { label: "VCI packaging — definition", href: "/glossary/vci" },
    ],
  },
};
