/**
 * Industry landing pages.
 *
 * Mid-funnel, high commercial intent: an engineer searching "cleaning
 * chemicals for bearing manufacturing" is much closer to buying than one
 * searching "what is a degreaser". Every industry, application and process
 * named here comes from the real applications list published on powerclean.in
 * — nothing about the customer base or capability is invented.
 */

export type IndustryPage = {
  slug: string;
  name: string;
  /** H1 */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** 40–60 word extractable answer */
  answer: string;
  intro: string;
  photo: string;
  photoAlt: string;
  /** the soils and problems this sector actually brings */
  challenges: { title: string; body: string }[];
  /** real applications, drawn from the published applications list */
  applications: string[];
  /** matched products */
  products: { name: string; href: string; why: string }[];
  /** process recommendation table */
  spec: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  keywords: string[];
};

export const industryPages: IndustryPage[] = [
  {
    slug: "automotive",
    name: "Automotive",
    title: "Industrial Cleaning Chemicals for Automotive Manufacturing",
    metaTitle: "Automotive Parts Cleaning Chemicals",
    metaDescription:
      "Automotive component degreasing chemistry for Indian OEMs and tier suppliers — engine, brake, piston and axle cleaning at 1–5% and 55–65 °C.",
    answer:
      "Automotive component cleaning needs chemistry matched to the part's metal and soil: alkaline aqueous concentrates for steel machining oil, neutral-pH cleaners for aluminium die castings, and low-foam grades for spray and ultrasonic lines. Typical working strength is 1–5% at 55–65 °C with 7–15 days of post-wash rust protection.",
    intro:
      "Automotive is where Power Clean does most of its work, and it is the hardest case: one plant runs cast iron blocks, aluminium housings, hardened steel gears and brass fittings through the same wash hall, each with a different soil and a different chemical tolerance. BOSCH, TVS, Bharat Forge and the Murugappa Group are among the manufacturers using Power Clean chemistry.",
    photo: "/photos/solution-xl.webp",
    photoAlt:
      "Machined automotive components covered in cutting oil before industrial degreasing",
    challenges: [
      {
        title: "Mixed metals in one basket",
        body: "Alkaline cleaners strip steel beautifully and etch aluminium and zinc. A line that cannot separate its loads has to run neutral-pH chemistry, which changes both the concentrate and the expected cycle time.",
      },
      {
        title: "Machining oil, then buffing compound, then carbon",
        body: "Straight cutting oil emulsifies readily. Buffing and lapping compound carries abrasive solids that settle and redeposit. Baked carbon on pistons and valves emulsifies not at all and needs a hot, high-alkalinity soak measured in hours.",
      },
      {
        title: "Cleanliness specs written by the customer",
        body: "Tier suppliers increasingly ship against a Millipore or particle-count specification. Meeting it is a process achievement — bath filtration, drag-out control and clean handling matter as much as the chemistry.",
      },
      {
        title: "Rust between operations",
        body: "A cleaned steel part is chemically bare and flash-rusts within minutes in monsoon humidity. In-built inhibition covers the days between wash and assembly; parts going to a container need a dedicated rust preventive.",
      },
    ],
    applications: [
      "Automotive components cleaning",
      "Engine cleaning and degreasing",
      "Carburettor and piston cleaning",
      "Piston ring degreasing",
      "Brake component cleaning",
      "Axle and wheel cleaning",
      "Carbon deposit removal",
      "Buffing and lapping paste removal",
      "Bin and tray washing",
    ],
    products: [
      { name: "Power Clean XL", href: "/solutions/power-clean-xl", why: "Heavy-duty alkaline degreasing for cast iron and steel machining soils." },
      { name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14", why: "Neutral pH for aluminium die castings, zinc and mixed-metal baskets." },
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Low foam for spray tunnels and ultrasonic stages." },
      { name: "PC RP-636", href: "/solutions/pc-rp-636", why: "Oil-based rust preventive for parts going into storage or transit." },
    ],
    spec: [
      { label: "Typical concentration", value: "2–5%" },
      { label: "Wash temperature", value: "55–65 °C" },
      { label: "Common equipment", value: "Spray tunnel, ultrasonic, dip tank" },
      { label: "Post-wash protection", value: "7–15 days indoors" },
      { label: "Trial packing", value: "35 L pail" },
    ],
    faqs: [
      {
        q: "What cleaning chemical is used for automotive components?",
        a: "Most automotive component cleaning uses an aqueous concentrate diluted to 1–5% and run at 55–65 °C. Ferrous parts take an alkaline grade such as Power Clean XL; aluminium and mixed loads take a neutral-pH grade such as NF-14; spray and ultrasonic lines take a low-foam grade such as LF.",
      },
      {
        q: "Can one cleaner handle both steel and aluminium parts?",
        a: "Yes, but it must be neutral pH. Alkaline cleaners above roughly pH 10 etch aluminium and zinc and leave a reactive surface that blooms into white rust. A neutral-pH cleaner such as Power Clean NF-14 handles mixed ferrous and non-ferrous loads on one wash programme.",
      },
      {
        q: "How do I remove baked carbon from pistons and valves?",
        a: "Carbon is not oil and will not emulsify, so ordinary degreasing does nothing. It needs a hot, high-alkalinity soak with dwell measured in hours rather than minutes, usually with agitation. Aluminium pistons must be separated first, because the alkalinity required will attack them.",
      },
      {
        q: "How long are parts protected from rust after washing?",
        a: "Power Clean aqueous concentrates carry an in-built inhibitor giving 7–15 days of indoor protection straight out of the wash. That covers the gap between cleaning and assembly. Parts going into a sea container need a dedicated rust preventive such as PC RP-636, which gives 3–6 months.",
      },
    ],
    related: [
      { label: "How to choose an industrial degreaser", href: "/blog/how-to-choose-industrial-degreaser" },
      { label: "Removing white rust from aluminium die castings", href: "/blog/removing-white-rust-aluminium-die-cast" },
      { label: "Millipore value — glossary", href: "/glossary/millipore-value" },
    ],
    keywords: [
      "automotive parts cleaning chemicals",
      "engine degreasing chemical",
      "automotive component degreaser india",
      "piston cleaning chemical",
      "brake cleaning chemical industrial",
    ],
  },
  {
    slug: "bearing-manufacturing",
    name: "Bearing Manufacturing",
    title: "Precision Cleaning Chemicals for Bearing Manufacturing",
    metaTitle: "Bearing Cleaning Chemicals — Precision",
    metaDescription:
      "Ultrasonic and immersion cleaning chemistry for bearing rings, cages and rollers — low-foam concentrates built for Millipore cleanliness specs.",
    answer:
      "Bearing components are cleaned to a gravimetric Millipore specification, which requires a low-foam aqueous concentrate in an ultrasonic or filtered immersion bath at 55–65 °C, a counter-flow or DI rinse, controlled drying, and clean handling afterwards. Chemistry alone will not pass the test — recontamination after the wash is the usual failure.",
    intro:
      "Bearing work is the strictest cleanliness regime in general engineering. The specification is not visual; it is a weighed residue and often a particle-size limit, because a single hard particle in a raceway destroys the bearing. Power Clean supplies ultrasonic and immersion chemistry for bearing components with exactly that constraint in mind.",
    photo: "/photos/solution-lf.webp",
    photoAlt:
      "Precision bearing components requiring millipore-level cleanliness after grinding",
    challenges: [
      {
        title: "Grinding swarf and honing residue",
        body: "Fine abrasive and metallic fines are the enemy of a particle count. They settle in the bath and redeposit on the next load unless the bath runs continuous filtration.",
      },
      {
        title: "Foam kills cavitation",
        body: "An ultrasonic bath cleans by bubble collapse. Foam cushions that collapse and the tank goes quiet. Only low-foam chemistry belongs in an ultrasonic stage, and it must run at its designed temperature to stay low-foam.",
      },
      {
        title: "Blind features and cages",
        body: "Cages, seals and cross-drillings are exactly the geometry a spray jet cannot reach. Ultrasonic or agitated immersion is not a preference here — it is the only route that wets every surface.",
      },
      {
        title: "Recontamination after the wash",
        body: "Most failed Millipore results are not cleaning failures. Dirty baskets, unfiltered rinse, shedding packaging and bare-hand handling all put particles back on a part that left the bath clean.",
      },
    ],
    applications: [
      "Bearing ring and race cleaning",
      "Cage and retainer cleaning",
      "Roller and ball cleaning",
      "Ultrasonic cleaning",
      "Immersion cleaning",
      "Grinding and honing residue removal",
      "Rust inhibition between operations",
    ],
    products: [
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Low foam — the only class that works in an ultrasonic bath." },
      { name: "Power Clean XL", href: "/solutions/power-clean-xl", why: "Heavier alkaline duty for pre-wash stages on ferrous rings." },
      { name: "PC RP-636", href: "/solutions/pc-rp-636", why: "Inter-operation and pre-dispatch corrosion protection." },
    ],
    spec: [
      { label: "Ultrasonic frequency", value: "25–40 kHz" },
      { label: "Concentration", value: "1–5%" },
      { label: "Bath temperature", value: "55–65 °C" },
      { label: "Foam requirement", value: "Low-foam only" },
      { label: "Final rinse", value: "DI, below 10 µS/cm" },
    ],
    faqs: [
      {
        q: "What chemical is used for ultrasonic cleaning of bearings?",
        a: "A low-foam aqueous concentrate at 1–5%, held at 55–65 °C. Foam is disqualifying: foam bubbles cushion the cavitation implosions that do the cleaning, so a foaming cleaner effectively switches the ultrasonics off. Power Clean LF is formulated for this duty.",
      },
      {
        q: "Why do parts still fail Millipore after a good wash?",
        a: "Usually because they were recontaminated after cleaning. Unfiltered rinse water, dirty baskets, shedding packaging and bare-hand handling all add particles downstream of the bath. Fix the handling chain before increasing wash time or concentration.",
      },
      {
        q: "How often should an ultrasonic bath be changed?",
        a: "When titration shows the chemical reserve is spent, or when suspended fines start redepositing — whichever comes first. Continuous filtration and a surface skimmer extend that interval substantially, often doubling it.",
      },
    ],
    related: [
      { label: "Ultrasonic cleaning chemical guide", href: "/blog/ultrasonic-cleaning-chemical-guide" },
      { label: "Millipore value — glossary", href: "/glossary/millipore-value" },
      { label: "Cavitation — glossary", href: "/glossary/cavitation" },
    ],
    keywords: [
      "bearing cleaning chemical",
      "ultrasonic cleaning bearings",
      "millipore cleanliness bearing",
      "precision component cleaning india",
    ],
  },
  {
    slug: "aerospace-defence",
    name: "Aerospace & Defence",
    title: "Cleaning Chemicals for Aerospace & Defence Manufacturing",
    metaTitle: "Aerospace & Defence Cleaning Chemicals",
    metaDescription:
      "Residue-critical cleaning chemistry for aerospace components and defence maintenance — neutral-pH grades with SDS and dosing records for audits.",
    answer:
      "Aerospace and defence cleaning is residue-critical and documentation-critical: the chemistry must leave no film that interferes with inspection, bonding or coating, must be compatible with aluminium and titanium alloys, and must arrive with an SDS and dosing record that survives an audit. Neutral-pH and low-foam aqueous grades cover most component work.",
    intro:
      "Aerospace and defence work brings two demands that ordinary engineering does not: no residue that can compromise NDT, bonding or paint adhesion, and a paper trail for everything. Power Clean supplies cleaning programmes for aerospace components and for military aircraft and ship maintenance, with batch-wise QC and full documentation.",
    photo: "/photos/gallery-2.webp",
    photoAlt:
      "Precision-machined aerospace components requiring residue-free cleaning",
    challenges: [
      {
        title: "Residue is a defect",
        body: "A film that would be invisible and harmless on a general engineering part can mask an indication in penetrant inspection or destroy adhesive bond strength. Rinse quality matters as much as wash chemistry.",
      },
      {
        title: "Light alloys and alkalinity",
        body: "Aluminium and magnesium alloys are attacked by alkaline cleaners. Neutral-pH chemistry is normally mandatory, which means the cleaning route relies on surfactancy and mechanical energy rather than caustic strength.",
      },
      {
        title: "Audit and traceability",
        body: "Concentration logs, batch numbers, SDS and change control are part of the deliverable. Chemistry that arrives without documentation creates a non-conformance regardless of how well it cleans.",
      },
      {
        title: "Assembled and field equipment",
        body: "Aircraft and ship maintenance often cannot use a tank at all. A high-flash, non-chlorinated safety solvent covers the cases where water is not an option.",
      },
    ],
    applications: [
      "Aerospace component cleaning",
      "Military aircraft maintenance",
      "Ship and marine maintenance cleaning",
      "Residue-critical precision cleaning",
      "Electrical and avionics parts cleaning",
      "Interior tank-truck cleaning",
    ],
    products: [
      { name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14", why: "Neutral pH — safe on aluminium and light alloys." },
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Low foam for spray and ultrasonic precision stages." },
      { name: "PC-S 342", href: "/solutions/pc-s-342", why: "High-flash non-chlorinated solvent for assembled and field equipment." },
    ],
    spec: [
      { label: "Preferred pH", value: "Neutral, 7–9" },
      { label: "Concentration", value: "1–4%" },
      { label: "Wash temperature", value: "55–65 °C" },
      { label: "Final rinse", value: "DI, spot-free" },
      { label: "Documentation", value: "SDS + batch QC record" },
    ],
    faqs: [
      {
        q: "Can alkaline cleaners be used on aerospace aluminium?",
        a: "Generally no. Alkaline cleaners above roughly pH 10 etch aluminium and magnesium alloys, dulling the surface and leaving a reactive face. Aerospace component cleaning normally specifies neutral-pH chemistry in the 7–9 range.",
      },
      {
        q: "What cleans equipment that cannot be immersed?",
        a: "A high-flash, non-chlorinated safety solvent. It cleans by dissolution and evaporates without residue, so it can be used on live electrical equipment, assembled gearboxes and field maintenance where there is no tank, heat or rinse available.",
      },
      {
        q: "Is documentation supplied with the chemistry?",
        a: "Yes. Every Power Clean product ships with an SDS and dosing guidance, and production runs to an ISO 9001 certified system with batch-wise quality control — which is what audit-facing plants need on file.",
      },
    ],
    related: [
      { label: "Safety solvent — glossary", href: "/glossary/safety-solvent" },
      { label: "Neutral pH cleaner — glossary", href: "/glossary/neutral-ph-cleaner" },
      { label: "Replacing TCE — plant guide", href: "/blog/replacing-tce-plant-guide" },
    ],
    keywords: [
      "aerospace cleaning chemicals",
      "defence component cleaning india",
      "aircraft maintenance cleaner",
      "residue free industrial cleaner",
    ],
  },
  {
    slug: "foundry-die-casting",
    name: "Foundry & Die Casting",
    title: "Cleaning Chemicals for Foundries & Die Casting Plants",
    metaTitle: "Die Casting Cleaning Chemicals",
    metaDescription:
      "Neutral-pH cleaning for aluminium die castings (ADC10, ADC12) and release-agent removal. Field data: white-rust rejection cut from 3.2% to 0.4%.",
    answer:
      "Aluminium die castings must be cleaned with neutral-pH chemistry at 55–65 °C. Alkaline cleaners above pH 10 etch ADC10 and ADC12, leaving a reactive surface that blooms into white rust within days. Switching to a neutral cleaner with a controlled dry has cut white-rust rejection from 3.2% to 0.4% in Power Clean field data.",
    intro:
      "Die casting brings a specific and expensive failure mode: parts leave the wash looking fine and arrive at the customer covered in white bloom. The cause is almost always chemical — an alkaline cleaner etching the alloy — compounded by parts packed before they were genuinely dry.",
    photo: "/photos/solution-nf14.webp",
    photoAlt:
      "Aluminium die-cast housings and covers requiring neutral pH cleaning",
    challenges: [
      {
        title: "Alkalinity etches the alloy",
        body: "ADC10 and ADC12 are alkali-sensitive. Above about pH 10 the cleaner attacks the surface, dulling it and exposing fresh reactive metal — the precondition for white rust.",
      },
      {
        title: "Die release agent and lubricant",
        body: "Release agents are formulated to be persistent. They need adequate surfactancy and dwell, which a neutral cleaner supplies through chemistry rather than caustic strength.",
      },
      {
        title: "Water trapped in blind features",
        body: "Castings are full of blind holes and pockets. Rinse water left in them and sealed into packaging creates a humid microclimate that grows white rust in days.",
      },
      {
        title: "Porosity and machining fines",
        body: "Cast porosity holds fluid and fines that bleed out later. Adequate rinse dwell and drying time are not optional on porous castings.",
      },
    ],
    applications: [
      "Aluminium die casting cleaning",
      "ADC10 and ADC12 component cleaning",
      "Die release agent removal",
      "Aluminium cleaning and brightening",
      "White rust prevention",
      "Machining fines removal",
      "Bin and tray washing",
    ],
    products: [
      { name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14", why: "Neutral pH — the correct chemistry for ADC10/ADC12." },
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Low foam where castings run through a spray tunnel." },
    ],
    spec: [
      { label: "Cleaner pH", value: "Neutral, 7–9" },
      { label: "Concentration", value: "2–4%" },
      { label: "Wash temperature", value: "55–65 °C" },
      { label: "Critical stage", value: "Complete drying before packing" },
      { label: "Measured result", value: "3.2% → 0.4% white-rust rejection" },
    ],
    faqs: [
      {
        q: "Why do aluminium castings develop white rust after washing?",
        a: "Two causes, usually together. An alkaline cleaner above pH 10 etches the alloy and leaves a reactive surface; and rinse water trapped in blind holes creates a sealed humid pocket in packaging. Neutral-pH chemistry plus complete drying eliminates both.",
      },
      {
        q: "What pH cleaner should be used on ADC12?",
        a: "Neutral, between pH 7 and 9. ADC12 is an aluminium-silicon-copper alloy that is attacked by alkalinity. A neutral-pH cleaner such as Power Clean NF-14 removes oil and release agent without etching the surface.",
      },
      {
        q: "How much can white rust rejection actually be reduced?",
        a: "Power Clean field data on aluminium die-cast housings records white-rust rejection dropping from 3.2% to 0.4% after switching from an alkaline cleaner to neutral-pH NF-14 with a controlled drying stage.",
      },
    ],
    related: [
      { label: "Removing white rust from aluminium die castings", href: "/blog/removing-white-rust-aluminium-die-cast" },
      { label: "ADC12 / ADC10 — glossary", href: "/glossary/adc12" },
      { label: "White rust — glossary", href: "/glossary/white-rust" },
    ],
    keywords: [
      "die casting cleaning chemical",
      "aluminium casting cleaner",
      "ADC12 cleaning chemical",
      "white rust prevention aluminium",
      "foundry cleaning chemicals india",
    ],
  },
  {
    slug: "electrical-electronics",
    name: "Electrical & Electronics",
    title: "Cleaning Chemicals for Electrical & Electronics Manufacturing",
    metaTitle: "Electronics Cleaning Chemicals",
    metaDescription:
      "Low-residue cleaning for electrical assemblies, PCBs and non-ferrous parts — neutral-pH grades for copper and brass, plus defluxing chemistry.",
    answer:
      "Electrical and electronics cleaning needs low-residue, neutral-pH chemistry: alkaline cleaners tarnish copper and leach zinc from brass, and any ionic residue left between fine-pitch conductors attracts moisture and causes surface leakage. Non-chlorinated safety solvents cover equipment that cannot be wetted.",
    intro:
      "Electronics cleaning is judged by what is left behind rather than what came off. Flux residue, ionic contamination and cleaner films all cause failures that appear weeks later as leakage or migration. Power Clean supplies neutral-pH aqueous chemistry for copper, brass and aluminium assemblies, plus non-chlorinated solvent options for equipment that cannot see water.",
    photo: "/photos/gallery-3.webp",
    photoAlt:
      "Brass and copper electrical components cleaned with neutral pH chemistry",
    challenges: [
      {
        title: "Copper tarnishes, brass dezincifies",
        body: "Alkaline chemistry discolours copper and selectively leaches zinc out of brass, turning it pink. Neutral-pH cleaning keeps both at their original colour and composition.",
      },
      {
        title: "Ionic residue causes latent failure",
        body: "Flux activators and cleaner salts left between conductors are hygroscopic. They draw moisture, create a leakage path, and can drive electrochemical migration long after the board passed test.",
      },
      {
        title: "Equipment that cannot be wetted",
        body: "Motors, switchgear and assembled control gear cannot go in a tank. A high-flash, non-chlorinated safety solvent cleans by dissolution and flashes off dry.",
      },
      {
        title: "Material compatibility",
        body: "Component markings, plastics, elastomers and conformal coatings all have chemical limits. A cleaner that is excellent on metal can destroy legends and seals.",
      },
    ],
    applications: [
      "Electrical and electronics parts cleaning",
      "Copper and brass cleaning",
      "Defluxing and rosin removal",
      "Ink and adhesive removal",
      "Contact and switchgear cleaning",
      "Ultrasonic cleaning of small assemblies",
    ],
    products: [
      { name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14", why: "Neutral pH — safe on copper, brass and aluminium." },
      { name: "PC-S 342", href: "/solutions/pc-s-342", why: "High-flash non-chlorinated solvent for live and assembled equipment." },
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Low foam for ultrasonic cleaning of small assemblies." },
    ],
    spec: [
      { label: "Cleaner pH", value: "Neutral, 7–9" },
      { label: "Concentration", value: "1–3%" },
      { label: "Wash temperature", value: "50–60 °C" },
      { label: "Final rinse", value: "DI, below 10 µS/cm" },
      { label: "Non-immersion option", value: "Non-chlorinated safety solvent" },
    ],
    faqs: [
      {
        q: "What cleaner is safe for brass and copper parts?",
        a: "A neutral-pH cleaner in the 7–9 range. Alkaline chemistry tarnishes copper and selectively leaches zinc from brass, leaving a pink, weakened surface. Power Clean NF-14 is formulated for non-ferrous work.",
      },
      {
        q: "Do no-clean fluxes really need cleaning?",
        a: "Often yes. The no-clean assumption breaks down under conformal coating, in high-humidity environments, in high-voltage designs, and wherever the assembly must pass an ionic-contamination test. In those cases the residue must be removed.",
      },
      {
        q: "How do you clean equipment that cannot be immersed?",
        a: "With a high-flash, non-chlorinated safety solvent. It dissolves the soil and evaporates without residue, so it works on motors, switchgear and assembled machinery where there is no tank, heat or rinse stage available.",
      },
    ],
    related: [
      { label: "Defluxing — glossary", href: "/glossary/defluxing" },
      { label: "Safety solvent — glossary", href: "/glossary/safety-solvent" },
      { label: "Neutral pH cleaner — glossary", href: "/glossary/neutral-ph-cleaner" },
    ],
    keywords: [
      "electronics cleaning chemical",
      "PCB defluxing chemical india",
      "copper brass cleaner industrial",
      "electrical parts cleaner",
    ],
  },
  {
    slug: "railways-fleet",
    name: "Railways & Fleet",
    title: "Cleaning Chemicals for Railways, Airlines & Fleet Maintenance",
    metaTitle: "Railway & Fleet Cleaning Chemicals",
    metaDescription:
      "Heavy-duty degreasing for locomotive, coach, fleet and tank-truck cleaning — biodegradable concentrates replacing diesel and kerosene wash-downs.",
    answer:
      "Fleet and railway cleaning uses heavy-duty aqueous degreaser concentrates diluted to 2–5%, applied by pressure wash or manual scrub rather than in a tank. They replace the diesel, kerosene and naphtha wash-downs still common in depots — with no flammability, no solvent vapour and a biodegradable effluent.",
    intro:
      "Depot and fleet cleaning is large-area work: locomotive underframes, coach exteriors, aircraft ground equipment and tank-truck interiors. Historically this was done with diesel or kerosene, which is cheap, flammable, hazardous to handle and increasingly unacceptable to discharge. Power Clean's aqueous concentrates were built to replace exactly those practices.",
    photo: "/photos/gallery-4.webp",
    photoAlt:
      "Heavy transport equipment being degreased in a maintenance depot",
    challenges: [
      {
        title: "Diesel and kerosene wash-downs",
        body: "Cheap and effective, but flammable, a genuine health exposure, and an effluent problem. Aqueous concentrates do the same job at 2–5% with none of those liabilities.",
      },
      {
        title: "No tank, no controlled temperature",
        body: "Depot cleaning happens with a pressure washer or a brush at whatever temperature the day provides. Chemistry has to work without the heat a wash line would supply, which means higher concentration and more dwell.",
      },
      {
        title: "Mixed and painted surfaces",
        body: "One machine carries painted panels, bare steel, aluminium, glass and rubber. The cleaner must strip road film and oil without stripping paint or attacking seals.",
      },
      {
        title: "Effluent leaves the site",
        body: "Wash-down water runs to a drain or an interceptor. Biodegradable chemistry with a declared composition is far easier to defend than a solvent wash.",
      },
    ],
    applications: [
      "Locomotive and railway cleaning",
      "Railway coach exterior cleaning",
      "Airline fleet cleaning",
      "Interior tank-truck cleaning",
      "Industrial floor cleaning",
      "Heavy equipment degreasing",
      "Military ship maintenance",
    ],
    products: [
      { name: "Power Clean XL", href: "/solutions/power-clean-xl", why: "Heavy-duty degreasing for road film, oil and grease on steel." },
      { name: "Power Clean SP", href: "/solutions/power-clean-sp", why: "Ferrous cleaning with multi-day rust protection for exposed steel." },
      { name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14", why: "Neutral pH where aluminium panels and mixed surfaces are involved." },
    ],
    spec: [
      { label: "Concentration", value: "2–5%" },
      { label: "Application", value: "Pressure wash, foam, manual scrub" },
      { label: "Temperature", value: "Ambient to 60 °C" },
      { label: "Replaces", value: "Diesel, kerosene, naphtha wash-downs" },
      { label: "Bulk packing", value: "Up to 1000 L" },
    ],
    faqs: [
      {
        q: "Can aqueous cleaners replace diesel for depot washing?",
        a: "Yes. A heavy-duty aqueous concentrate at 2–5% removes road film, oil and grease as effectively as a diesel wash-down, without flammability, solvent vapour exposure or a hydrocarbon effluent problem. This substitution is the work Roovel Solutions has been doing since 2000.",
      },
      {
        q: "Will the cleaner damage paint or rubber seals?",
        a: "Concentration and dwell decide that. At recommended dilution and normal contact times, aqueous concentrates are compatible with cured paint and common elastomers. Neat application or extended dwell on painted surfaces should be avoided — and a trial panel is always worth doing first.",
      },
      {
        q: "What packing sizes are available for depot use?",
        a: "Power Clean supplies from 35 L pails up to 1000 L containers, so a depot can trial in a pail and move to bulk once the process is proven.",
      },
    ],
    related: [
      { label: "Industrial floor cleaning applications", href: "/products" },
      { label: "Aqueous cleaning — glossary", href: "/glossary/aqueous-cleaning" },
      { label: "Five reasons to switch", href: "/resources/five-reasons-to-switch" },
    ],
    keywords: [
      "railway cleaning chemicals",
      "locomotive degreaser",
      "fleet washing chemical india",
      "tank truck cleaning chemical",
    ],
  },
  {
    slug: "general-engineering",
    name: "General Engineering",
    title: "Industrial Cleaning Chemicals for General Engineering",
    metaTitle: "Machine Shop Cleaning Chemicals",
    metaDescription:
      "Machine shop degreasing for cutting oil, coolant residue and grinding swarf — aqueous concentrates at 1–5% and 55–65 °C, in 35 L to 1000 L packs.",
    answer:
      "General engineering cleaning covers cutting oil, coolant residue, drawing compound and grinding swarf on steel and cast iron. An alkaline aqueous concentrate at 2–4% and 55–65 °C handles most of it, with a low-foam grade where a spray washer is used and a neutral grade wherever aluminium or brass enters the basket.",
    intro:
      "This is the broadest category and the one where most plants start: a machine shop with a soak tank or a spray washer, cleaning parts between operations and before dispatch. The chemistry is straightforward; the gains come from bath control, foam management and getting the rust window right.",
    photo: "/photos/solution-sp.webp",
    photoAlt:
      "Machined steel components on a production line before degreasing",
    challenges: [
      {
        title: "Coolant residue and tramp oil",
        body: "Water-soluble coolant leaves a sticky residue that ordinary rinsing will not remove, and tramp oil from slideways loads the bath fast. A skimmer pays for itself quickly here.",
      },
      {
        title: "Grinding swarf and fines",
        body: "Abrasive and metallic fines settle in the bath and redeposit on the next load. Bag or cartridge filtration on a recirculation loop is the fix.",
      },
      {
        title: "Flash rust in monsoon humidity",
        body: "Freshly cleaned steel rusts within minutes. In-built inhibition covers 7–15 days indoors; longer storage needs a dedicated rust preventive.",
      },
      {
        title: "Bath dumped too early — or far too late",
        body: "Without titration, baths get changed on a calendar or on a hunch. Weekly concentration and pH checks typically extend bath life and cut concentrate consumption at the same time.",
      },
    ],
    applications: [
      "Machined component cleaning",
      "Cutting oil and coolant removal",
      "Drawing compound removal",
      "Grinding and honing residue removal",
      "Dip tank and immersion cleaning",
      "Spray wash cleaning",
      "Bin and tray washing",
      "Industrial floor cleaning",
    ],
    products: [
      { name: "Power Clean XL", href: "/solutions/power-clean-xl", why: "Heavy-duty alkaline for steel and cast iron machining soils." },
      { name: "Power Clean SP", href: "/solutions/power-clean-sp", why: "Ferrous cleaning with multi-day rust protection built in." },
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Low foam for spray washers and ultrasonic stages." },
      { name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14", why: "Neutral pH for aluminium, brass and mixed baskets." },
    ],
    spec: [
      { label: "Concentration", value: "2–4%" },
      { label: "Wash temperature", value: "55–65 °C" },
      { label: "Equipment", value: "Soak, spray, ultrasonic" },
      { label: "Rust protection", value: "7–15 days indoors" },
      { label: "Packing", value: "35 L to 1000 L" },
    ],
    faqs: [
      {
        q: "What is the correct dilution for a machine shop soak tank?",
        a: "Start at the low end — around 2% — confirm cleanliness on the actual part, and step up only if it fails. Heavy machining oil and buffing compound may need 3–5%. Hold the figure with a weekly titration rather than topping up by eye.",
      },
      {
        q: "How do I stop my spray washer foaming?",
        a: "Check temperature before dosage. Low-foam cleaners rely on a surfactant whose cloud point sits below the wash temperature; run the bath cold and it foams. If the bath is at temperature and still foaming, the cleaner is the wrong grade for spray work.",
      },
      {
        q: "How long does a cleaning bath last?",
        a: "It depends almost entirely on oil loading and filtration. A soak tank with no skimmer may need changing fortnightly; the same tank with a surface skimmer and a bag filter often runs a month or more. Titration tells you when, rather than the calendar.",
      },
    ],
    related: [
      { label: "How to choose an industrial degreaser", href: "/blog/how-to-choose-industrial-degreaser" },
      { label: "Bath life — glossary", href: "/glossary/bath-life" },
      { label: "Full product catalogue", href: "/products" },
    ],
    keywords: [
      "machine shop cleaning chemical",
      "cutting oil removal chemical",
      "industrial degreaser machining",
      "general engineering degreaser india",
    ],
  },
  {
    slug: "plant-facility",
    name: "Plant & Facility Care",
    title: "Plant Maintenance & Facility Cleaning Chemicals",
    metaTitle: "Plant Maintenance Cleaning Chemicals",
    metaDescription:
      "Facility cleaning for industrial floors, AHU and HVAC coils and cooling towers — inhibited descalers and biocides safe on copper and brass.",
    answer:
      "Plant and facility care covers industrial floor degreasing, AHU and HVAC coil cleaning, and cooling water treatment. Floors take a heavy-duty aqueous concentrate at 2–5%; coils take a neutral or mildly acidic cleaner safe on aluminium fin and copper tube; cooling systems take an inhibited descaler plus an alternating biocide programme.",
    intro:
      "Facility work is the half of plant cleaning that is not components — the floors people walk on, the coils that decide whether the air handling actually cools, and the cooling towers whose scale quietly adds to the energy bill every month.",
    photo: "/photos/solution-342.webp",
    photoAlt:
      "Cooling tower fans and plant equipment requiring descaling and biocide treatment",
    challenges: [
      {
        title: "Oil-soaked shop floors",
        body: "Ground-in oil is a slip hazard and an audit finding. A heavy-duty aqueous concentrate at 2–5% with a scrubber lifts it; solvent wash-downs create a worse effluent problem than they solve.",
      },
      {
        title: "Fouled AHU and HVAC coils",
        body: "A fouled coil throttles airflow and heat transfer at once. Aluminium fin and copper tube are both chemically sensitive, so coil cleaners must be pH-controlled and inhibited.",
      },
      {
        title: "Cooling tower scale",
        body: "Evaporation concentrates hardness until it deposits. Under a millimetre of scale measurably cuts heat transfer, showing up as rising approach temperature and higher energy cost long before anything fails.",
      },
      {
        title: "Biofilm and Legionella",
        body: "Warm, aerated, sunlit water grows biofilm within days. It insulates worse than scale, shelters corrosion beneath it, and carries a genuine public-health obligation.",
      },
    ],
    applications: [
      "Industrial floor cleaning",
      "AHU and HVAC coil cleaning",
      "Cooling tower descaling",
      "Heat exchanger descaling",
      "Cooling water biocide dosing",
      "Dip tank and immersion system cleaning",
      "Bin and tray washing",
    ],
    products: [
      { name: "PC S-342", href: "/solutions/pc-s-342", why: "Inhibited descaler for cooling towers and heat exchangers." },
      { name: "Power Clean XL", href: "/solutions/power-clean-xl", why: "Heavy-duty floor and equipment degreasing." },
      { name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14", why: "Neutral pH for coils and non-ferrous surfaces." },
    ],
    spec: [
      { label: "Floor cleaning", value: "2–5% aqueous concentrate" },
      { label: "Cycles of concentration", value: "3–6 on cooling towers" },
      { label: "Descale control", value: "Monitor pH until acid stops depleting" },
      { label: "Biocide strategy", value: "Alternate oxidising / non-oxidising" },
      { label: "Bulk packing", value: "Up to 1000 L" },
    ],
    faqs: [
      {
        q: "How often should a cooling tower be descaled?",
        a: "With a working inhibitor programme and controlled blowdown, a tower can run for years without a shutdown descale. Without one, scale accumulates continuously — the signal is rising approach temperature and rising conductivity, not a calendar date.",
      },
      {
        q: "Is descaling acid safe on copper and brass?",
        a: "Only if it is inhibited. Raw acid dissolves the scale and then attacks the tube wall. An inhibited descaler such as PC S-342 carries a corrosion inhibitor that protects the base metal while the scale dissolves. Neutralise and flush thoroughly afterwards.",
      },
      {
        q: "Why alternate biocides instead of using one?",
        a: "Because organisms adapt. Oxidising biocides act fast but deplete quickly; non-oxidising types persist and penetrate biofilm better. Alternating them prevents resistant populations establishing in the system.",
      },
    ],
    related: [
      { label: "Cooling tower descaling guide", href: "/blog/cooling-tower-descaling-guide" },
      { label: "Blowdown — glossary", href: "/glossary/cooling-tower-blowdown" },
      { label: "Biocide — glossary", href: "/glossary/biocide" },
    ],
    keywords: [
      "plant maintenance chemicals",
      "industrial floor cleaner",
      "AHU coil cleaning chemical",
      "cooling tower descaling chemical india",
    ],
  },
  {
    slug: "appliance",
    name: "Home Appliance",
    title: "Cleaning Chemicals for Home Appliance Manufacturing",
    metaTitle: "Home Appliance Cleaning Chemicals",
    metaDescription:
      "Cleaning chemistry for appliance manufacturing — pressed steel panels, aluminium and copper components, pre-paint degreasing and cosmetic spot-free finishing.",
    answer:
      "Appliance manufacturing cleans pressed steel panels, aluminium castings and copper tubing to a cosmetic standard, then paints or coats them. That needs alkaline degreasing for steel, neutral-pH chemistry for the non-ferrous parts, and a deionised final rinse — because water spots that would pass on a machined part are a visible reject here.",
    intro:
      "Appliance work is judged by eye as much as by function. A part that would ship happily out of a machine shop becomes a reject when it carries a water spot, a dull etched patch or a fingerprint under a gloss finish — and everything downstream of the wash has to survive painting or coating adhesion.",
    photo: "/photos/gallery-4.webp",
    photoAlt:
      "Pressed and machined metal components on an appliance assembly line",
    challenges: [
      {
        title: "Cosmetic surfaces show every fault",
        body: "Water spots, streaks and etch marks that nobody would notice on a machined face are visible rejects on a painted panel or a bright trim part. That pushes the specification onto the rinse and the dry, not just the cleaner.",
      },
      {
        title: "Pre-paint adhesion",
        body: "Any residue left on the surface — cleaner film, drawing compound, dissolved solids from a hard-water rinse — becomes an adhesion failure after coating. It usually shows up as blistering weeks later, at the customer.",
      },
      {
        title: "Mixed metals on one line",
        body: "Pressed steel panels, aluminium castings and copper tubing frequently run through the same wash. Alkalinity that suits the steel will etch the aluminium and tarnish the copper, so the chemistry is set by the most sensitive metal present.",
      },
      {
        title: "Drawing and forming compound",
        body: "Press shops leave persistent lubricant films that ordinary light-duty cleaning will not shift. They need adequate surfactancy and dwell, and they load a bath fast without skimming.",
      },
    ],
    applications: [
      "Pressed steel panel cleaning",
      "Pre-paint and pre-coating degreasing",
      "Drawing and forming compound removal",
      "Aluminium component cleaning",
      "Copper and brass tubing cleaning",
      "Spray wash cleaning",
      "Bin and tray washing",
    ],
    products: [
      { name: "Power Clean XL", href: "/solutions/power-clean-xl", why: "Alkaline degreasing for pressed and machined steel." },
      { name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14", why: "Neutral pH for aluminium, copper and mixed-metal loads." },
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Low foam for spray tunnels running at volume." },
    ],
    spec: [
      { label: "Concentration", value: "1–4%" },
      { label: "Wash temperature", value: "55–65 °C" },
      { label: "Final rinse", value: "DI, below 10 µS/cm" },
      { label: "Critical stage", value: "Spot-free drying before coating" },
      { label: "Packing", value: "35 L to 1000 L" },
    ],
    faqs: [
      {
        q: "Why do appliance panels show water spots after washing?",
        a: "Because the rinse water carries dissolved solids that stay on the part when the water evaporates. Mains water in Indian industrial areas commonly runs 300–800 µS/cm. A deionised final rinse below 10 µS/cm, ideally with a drying agent so water sheets off rather than beading, removes the cause.",
      },
      {
        q: "What cleaner should be used before painting?",
        a: "One that leaves no residue of its own. Any film left behind — cleaner, drawing compound or dissolved solids from a hard rinse — becomes an adhesion failure after coating. Rinse quality matters as much as the wash chemistry here.",
      },
      {
        q: "Can steel panels and aluminium parts share a wash?",
        a: "Yes, with a neutral-pH cleaner. The chemistry has to suit the most sensitive metal in the load, so one aluminium part sets a pH ceiling of about 9 for the whole bath. Steel cleans perfectly well at neutral pH; aluminium does not survive alkaline.",
      },
    ],
    related: [
      { label: "The right cleaning chemical for aluminium", href: "/blog/aluminium-cleaning-chemical-guide" },
      { label: "Spot-free rinse — definition", href: "/glossary/spot-free-rinse" },
      { label: "DI water — definition", href: "/glossary/di-water" },
    ],
    keywords: [
      "appliance manufacturing cleaning chemical",
      "pre paint degreasing",
      "pressed steel panel cleaner",
      "spot free rinse appliance",
    ],
  },
  {
    slug: "tools",
    name: "Tools & Cutting Tools",
    title: "Cleaning Chemicals for Tool & Cutting Tool Manufacturing",
    metaTitle: "Cutting Tool Cleaning Chemicals",
    metaDescription:
      "Cleaning chemistry for cutting tools, carbide inserts and hand tools — grinding residue and honing oil removal, plus rust protection on high-carbon steel.",
    answer:
      "Cutting tool manufacturing has to remove grinding residue, honing oil and lapping compound from hardened steel and carbide without dulling edges or attacking the cobalt binder. That means ultrasonic or agitated immersion with a low-foam concentrate at 1–5% and 55–65 °C, and rust protection immediately after — high-carbon steel flash-rusts fast.",
    intro:
      "Tool work is precision cleaning on parts that are simultaneously very hard and very intolerant of corrosion. Grinding and honing leave abrasive residue in exactly the geometry that is hardest to reach, and the substrates — hardened high-carbon steel and cemented carbide — each punish the wrong chemistry differently.",
    photo: "/photos/res-downtime.webp",
    photoAlt:
      "CNC lathe machining a hardened steel component on a production line",
    challenges: [
      {
        title: "Abrasive residue in flutes and edges",
        body: "Grinding and lapping leave fine abrasive lodged in flutes, chip breakers and cutting edges. A spray jet cannot reach it, and if the bath is unfiltered it simply redeposits on the next load.",
      },
      {
        title: "Carbide and its binder",
        body: "Cemented carbide is a hard-metal matrix held together with a cobalt binder. Aggressive chemistry can leach that binder, weakening the edge in a way that shows up as premature tool failure rather than as a visible defect.",
      },
      {
        title: "High-carbon steel rusts fast",
        body: "Hardened tool steel is chemically bare after cleaning and unusually prone to flash rust. The gap between wash and protection is measured in minutes, not hours.",
      },
      {
        title: "Coatings and marking",
        body: "PVD-coated tools, laser marking and colour codes all have chemical limits. A cleaner that is excellent on bare steel can dull a coating or lift a marking.",
      },
    ],
    applications: [
      "Cutting tool and insert cleaning",
      "Grinding and honing residue removal",
      "Lapping compound removal",
      "Hand tool degreasing",
      "Ultrasonic cleaning of flutes and edges",
      "Rust protection between operations",
      "Pre-coating cleaning",
    ],
    products: [
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Low foam — required for the ultrasonic stage that reaches flutes and edges." },
      { name: "Power Clean XL", href: "/solutions/power-clean-xl", why: "Heavy-duty alkaline pre-wash on hardened steel." },
      { name: "PC RP-636", href: "/solutions/pc-rp-636", why: "Immediate rust protection on high-carbon steel after cleaning." },
    ],
    spec: [
      { label: "Concentration", value: "1–5%" },
      { label: "Wash temperature", value: "55–65 °C" },
      { label: "Equipment", value: "Ultrasonic · agitated immersion" },
      { label: "Filtration", value: "Required — abrasive fines" },
      { label: "Rust protection", value: "Immediate after drying" },
    ],
    faqs: [
      {
        q: "How do you clean grinding residue out of cutting tool flutes?",
        a: "Ultrasonic or agitated immersion with a low-foam concentrate at 1–5% and 55–65 °C. A spray jet cannot see into a flute or a chip breaker. Bath filtration is essential, or the abrasive fines you remove redeposit on the next load.",
      },
      {
        q: "Is aqueous cleaning safe on carbide inserts?",
        a: "With correctly selected chemistry, yes. The risk to guard against is leaching the cobalt binder that holds the hard-metal matrix together, which weakens the edge without leaving a visible defect. Compatibility is confirmed on your actual inserts before anything is recommended.",
      },
      {
        q: "How quickly do tool steels rust after cleaning?",
        a: "Fast — hardened high-carbon steel is chemically bare after a hot wash and can show flash rust within minutes in humid conditions. Dry completely and protect immediately; the cleaner's in-built 7–15 day inhibition covers short indoor holds, and PC RP-636 covers stock and transit.",
      },
    ],
    related: [
      { label: "Rust prevention between processes", href: "/blog/rust-prevention-between-processes" },
      { label: "Ultrasonic cleaning solutions", href: "/solutions/ultrasonic-cleaning" },
      { label: "Flash rust — definition", href: "/glossary/flash-rust" },
    ],
    keywords: [
      "cutting tool cleaning chemical",
      "carbide insert cleaning",
      "grinding residue removal",
      "tool manufacturing degreaser",
    ],
  },
  {
    slug: "earthmoving",
    name: "Earth Moving Equipment",
    title: "Cleaning Chemicals for Earth Moving & Heavy Equipment",
    metaTitle: "Earth Moving Equipment Degreasers",
    metaDescription:
      "Heavy-duty degreasing for earth moving and construction equipment — hydraulic components, transmissions, undercarriage and workshop rebuild cleaning.",
    answer:
      "Earth moving equipment carries the heaviest soils in general engineering: baked-on grease, clay, hydraulic oil and road film. It needs heavy-duty aqueous concentrates at 2–5%, applied by pressure wash or soak rather than in a precision line, plus millipore-grade cleaning for the hydraulic components inside.",
    intro:
      "Heavy equipment splits into two very different cleaning problems. Outside, it is large-area degreasing of caked grease and clay with a pressure washer. Inside, hydraulic valves and pumps are precision components held to a cleanliness specification, because a hard particle in a hydraulic circuit is what destroys them.",
    photo: "/photos/gallery-1.webp",
    photoAlt:
      "Heavy equipment components being prepared for cleaning in a workshop",
    challenges: [
      {
        title: "Two cleaning problems in one machine",
        body: "The undercarriage needs bulk degreasing at pressure; the hydraulic valve block needs ultrasonic cleaning to a particle-count limit. Using one approach for both fails at one end or the other.",
      },
      {
        title: "Baked grease, clay and road film",
        body: "Heavy greases combined with soil and dust form a crust that light chemistry will not shift. It needs concentration, dwell and mechanical energy — and usually a pre-soak before the pressure wash.",
      },
      {
        title: "Diesel wash-downs in the workshop",
        body: "Still common, still flammable, still a hydrocarbon effluent problem, and it drives oil deeper into concrete rather than removing it. Aqueous concentrates at 2–5% do the same job without any of that.",
      },
      {
        title: "Hydraulic cleanliness on rebuild",
        body: "A rebuilt pump or valve that goes back in carrying swarf will fail early. Rebuild work needs the same filtration, DI rinse and clean-handling discipline as any Millipore line.",
      },
    ],
    applications: [
      "Heavy equipment degreasing",
      "Undercarriage and chassis cleaning",
      "Hydraulic component cleaning",
      "Transmission and axle cleaning",
      "Workshop and rebuild cleaning",
      "Industrial floor cleaning",
      "Carbon deposit removal",
    ],
    products: [
      { name: "Power Clean XL", href: "/solutions/power-clean-xl", why: "Heavy-duty degreasing for caked grease, oil and road film." },
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Low foam for pressure-wash and ultrasonic hydraulic component work." },
      { name: "PC RP-636", href: "/solutions/pc-rp-636", why: "Rust protection on rebuilt components before they go back into service." },
    ],
    spec: [
      { label: "Concentration", value: "2–5%" },
      { label: "Application", value: "Pressure wash · soak · ultrasonic" },
      { label: "Temperature", value: "Ambient to 65 °C" },
      { label: "Replaces", value: "Diesel and kerosene wash-downs" },
      { label: "Bulk packing", value: "Up to 1000 L" },
    ],
    faqs: [
      {
        q: "What removes caked grease from heavy equipment?",
        a: "A heavy-duty aqueous concentrate at 2–5%, given a pre-soak so the chemistry has dwell before the pressure wash. Heavy greases mixed with clay and dust form a crust that light chemistry and pressure alone will not shift.",
      },
      {
        q: "Can we stop using diesel in the workshop?",
        a: "Yes. A heavy-duty aqueous concentrate at 2–5% removes road film, oil and grease as effectively, without flammability, solvent vapour or a hydrocarbon effluent. Replacing diesel and kerosene wash-downs is the work Roovel Solutions has been doing since 2000.",
      },
      {
        q: "How clean do rebuilt hydraulic components need to be?",
        a: "To the same standard as any precision line — a single hard particle in a hydraulic circuit scores a bore or blocks an orifice. That means ultrasonic cleaning with a low-foam concentrate, bath filtration, a DI rinse and clean handling afterwards.",
      },
    ],
    related: [
      { label: "Millipore & technical cleanliness", href: "/solutions/millipore-cleanliness" },
      { label: "Industrial floor degreasing", href: "/blog/industrial-floor-cleaning-guide" },
      { label: "Carbon deposit removal", href: "/blog/carbon-deposit-removal-guide" },
    ],
    keywords: [
      "earth moving equipment cleaning",
      "heavy equipment degreaser",
      "hydraulic component cleaning",
      "construction equipment workshop cleaner",
    ],
  },
];

export function getIndustry(slug: string) {
  return industryPages.find((i) => i.slug === slug);
}
