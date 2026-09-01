/**
 * Industrial cleaning glossary.
 *
 * Definitional queries ("what is aqueous cleaning", "what is white rust") are
 * the single most-cited page type in AI answer engines — a tight, unambiguous
 * definition is exactly what gets lifted. Every entry leads with a 40–60 word
 * answer, then explains why it matters on a real line, and links to the Power
 * Clean products that address it.
 *
 * All chemistry here is standard industry knowledge; every Power Clean number
 * quoted (dilutions, temperatures, protection windows) comes from the
 * company's own published product data.
 */

export type GlossaryTerm = {
  slug: string;
  term: string;
  /** the extractable definition — 40–60 words, no preamble */
  short: string;
  alsoKnownAs?: string[];
  category: "Chemistry" | "Process" | "Measurement" | "Corrosion" | "Water";
  /** 2–4 explanatory paragraphs */
  body: string[];
  /** hard numbers rendered as a facts strip */
  facts?: { label: string; value: string }[];
  /** product slugs from lib/solutions.ts or catalogue */
  products?: { name: string; href: string }[];
  /** other glossary slugs */
  see?: string[];
  /** deeper reading */
  reading?: { label: string; href: string }[];
  keywords: string[];
};

export const glossary: GlossaryTerm[] = [
  {
    slug: "aqueous-cleaning",
    term: "Aqueous cleaning",
    short:
      "Aqueous cleaning is industrial parts cleaning that uses water as the carrier and a dissolved chemical concentrate as the active cleaner, instead of an organic solvent. The chemistry lifts oil by saponification and emulsification, then a rinse carries it away. Typical working strength is 1–5% at 55–65 °C.",
    alsoKnownAs: ["water-based cleaning", "water based degreasing"],
    category: "Process",
    body: [
      "In an aqueous system the water does the transport and the concentrate does the work. Surfactants wet the surface and lower interfacial tension so the bath can reach into blind holes and thread roots; alkaline builders saponify fatty oils into soluble soaps; emulsifiers hold mineral oil in suspension so it can be skimmed or filtered out rather than redepositing on the next basket.",
      "Because water is the carrier, an aqueous bath is non-flammable, has no vapour-degreasing enclosure to maintain, and produces no chlorinated solvent exposure. That is the whole reason Indian plants moved off trichloroethylene, kerosene and diesel: the cleaning performance is comparable on most engineering soils, and the safety and compliance burden is far lower.",
      "The trade-off is that water must be removed. An aqueous line needs a rinse stage, a drying stage, and — because bare steel flash-rusts within minutes of a hot rinse — an inhibitor either in the final rinse or in the cleaner itself. Power Clean's aqueous concentrates carry an in-built inhibitor that holds indoor rust protection for 7–15 days after the wash.",
    ],
    facts: [
      { label: "Working strength", value: "1–5% (1:100 to 5:100)" },
      { label: "Wash temperature", value: "55–65 °C" },
      { label: "TCE equivalent", value: "90–100 °C" },
      { label: "Post-wash protection", value: "7–15 days indoors" },
    ],
    products: [
      { name: "Power Clean XL", href: "/solutions/power-clean-xl" },
      { name: "Power Clean LF", href: "/solutions/power-clean-lf" },
    ],
    see: ["saponification", "emulsification", "surfactant", "flash-rust"],
    reading: [
      { label: "What is aqueous cleaning?", href: "/resources/what-is-aqueous-cleaning" },
      { label: "How to choose an industrial degreaser", href: "/blog/how-to-choose-industrial-degreaser" },
    ],
    keywords: ["aqueous cleaning", "water based cleaning", "aqueous degreasing", "what is aqueous cleaning"],
  },
  {
    slug: "degreaser",
    term: "Degreaser",
    short:
      "A degreaser is a chemical formulated to remove oil, grease and grease-like soils from a surface. Industrial degreasers are usually alkaline aqueous concentrates that saponify and emulsify oil at 55–65 °C, though solvent and citrus-based versions exist for wipe-down and non-immersion work.",
    category: "Chemistry",
    body: [
      "Degreasers are classified first by carrier — aqueous or solvent — and then by pH. Heavy-duty alkaline degreasers (pH 11–13) are the workhorses for ferrous machining and forging soils. Neutral-pH degreasers (pH 7–9) exist because alkalinity attacks aluminium, zinc and brass; a neutral formulation cleans those metals without staining or etching them.",
      "The second axis is foam. A cleaner that foams beautifully in a soak tank will fill a spray washer's pump chamber with air and cavitate it. Low-foam degreasers use surfactants with a cloud point below the wash temperature, so they collapse rather than build under mechanical agitation.",
      "Selecting a degreaser is therefore not a matter of finding the strongest one. It is a matter of matching four variables: substrate, soil, wash equipment, and foam tolerance. Getting any one of those wrong turns a good chemical into a rejected batch.",
    ],
    products: [
      { name: "Power Clean XL — heavy-duty ferrous", href: "/solutions/power-clean-xl" },
      { name: "Power Clean NF-14 — neutral, non-ferrous", href: "/solutions/power-clean-nf-14" },
      { name: "Power Clean LF — low foam, spray", href: "/solutions/power-clean-lf" },
    ],
    see: ["aqueous-cleaning", "alkaline-cleaner", "neutral-ph-cleaner", "foam-profile"],
    reading: [{ label: "How to choose an industrial degreaser", href: "/blog/how-to-choose-industrial-degreaser" }],
    keywords: ["degreaser", "industrial degreaser", "what is a degreaser", "metal degreaser"],
  },
  {
    slug: "trichloroethylene",
    term: "Trichloroethylene (TCE)",
    short:
      "Trichloroethylene is a chlorinated solvent long used for vapour degreasing metal parts. It cleans aggressively but is a recognised carcinogen, is tightly regulated, requires a sealed vapour enclosure at 90–100 °C, and is being phased out of Indian manufacturing in favour of aqueous chemistry.",
    alsoKnownAs: ["TCE", "trichlor", "trike"],
    category: "Chemistry",
    body: [
      "TCE earned its place because it dissolves mineral oil on contact and evaporates without residue, so parts leave the degreaser dry and require no rinse stage. For decades that made it the default for precision component cleaning.",
      "The costs caught up with it. TCE is classified as carcinogenic to humans, and exposure controls, monitoring, effluent handling and disposal now carry real cost and real liability. The vapour zone must be held near the boiling point, which is an energy load; solvent drag-out and evaporative loss mean continuous top-up; and a single regulatory action can stop a line.",
      "An aqueous replacement changes the process, not just the chemical. You gain a rinse and a dry stage, and you lose the flammability-free-but-toxic vapour zone, the 90–100 °C energy load and the exposure monitoring. Power Clean's switching guidance covers the bath sizing, cycle times and rust protection that make that transition work.",
    ],
    facts: [
      { label: "TCE vapour zone", value: "90–100 °C" },
      { label: "Aqueous wash", value: "55–65 °C" },
      { label: "Health classification", value: "Recognised carcinogen" },
      { label: "Rinse required", value: "No (TCE) / Yes (aqueous)" },
    ],
    products: [{ name: "Power Clean XL", href: "/solutions/power-clean-xl" }],
    see: ["aqueous-cleaning", "vapour-degreasing", "safety-solvent"],
    reading: [
      { label: "Replacing TCE — plant manager's guide", href: "/blog/replacing-tce-plant-guide" },
      { label: "Power Clean vs TCE", href: "/resources/power-clean-vs-tce" },
    ],
    keywords: ["trichloroethylene", "TCE", "TCE replacement", "trichloroethylene alternative", "what is TCE"],
  },
  {
    slug: "white-rust",
    term: "White rust",
    short:
      "White rust is the powdery white or grey oxide bloom that forms on aluminium, zinc and galvanised surfaces when moisture sits on them without airflow. On aluminium die castings it is aluminium hydroxide, and it appears within days when parts are washed in alkaline cleaner or packed damp.",
    alsoKnownAs: ["white corrosion", "aluminium oxide bloom", "wet storage stain"],
    category: "Corrosion",
    body: [
      "White rust is not the same failure as red rust. Red rust is iron oxide and needs iron; white rust needs only a reactive light metal, water and poor ventilation. That is why it shows up on aluminium ADC10 and ADC12 housings, on zinc-plated fasteners, and on galvanised sheet stacked before it is fully dry.",
      "The two most common industrial causes are chemical and logistical. Chemically, alkaline cleaners above roughly pH 10 etch aluminium and leave a reactive, freshly-exposed surface that oxidises fast. Logistically, parts packed while still carrying rinse water in blind holes create a sealed humid pocket — the ideal white rust incubator.",
      "The fix is a neutral-pH cleaner formulated for non-ferrous metals, a clean rinse, and genuinely dry parts before packing. Power Clean's field data on aluminium die-cast housings shows white-rust rejection falling from 3.2% to 0.4% after switching from an alkaline cleaner to neutral-pH NF-14 with a controlled dry.",
    ],
    facts: [
      { label: "Affected metals", value: "Aluminium, zinc, galvanised steel" },
      { label: "Common trigger", value: "Alkaline cleaner above pH 10" },
      { label: "Recommended cleaner pH", value: "Neutral, 7–9" },
      { label: "Measured rejection change", value: "3.2% → 0.4%" },
    ],
    products: [{ name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14" }],
    see: ["neutral-ph-cleaner", "adc12", "flash-rust", "passivation"],
    reading: [{ label: "Removing white rust from aluminium die castings", href: "/blog/removing-white-rust-aluminium-die-cast" }],
    keywords: ["white rust", "white rust aluminium", "what is white rust", "aluminium corrosion", "wet storage stain"],
  },
  {
    slug: "ultrasonic-cleaning",
    term: "Ultrasonic cleaning",
    short:
      "Ultrasonic cleaning uses high-frequency sound — typically 25–40 kHz — to create and collapse microscopic bubbles in a liquid bath. The collapse, called cavitation, scrubs surfaces the eye cannot reach: blind holes, cross-drillings, thread roots and blind bores. It needs a low-foam chemistry to work.",
    category: "Process",
    body: [
      "The cleaning is mechanical, not chemical. A transducer drives the bath through compression and rarefaction cycles; during rarefaction, dissolved gas and vapour form tiny cavities, and during compression those cavities implode. Each implosion is a microscopic jet that strips soil off the surface it touches.",
      "Frequency sets the trade-off. Lower frequencies around 25 kHz produce larger, more energetic bubbles — better on heavy soils and rugged parts, but capable of eroding soft aluminium or polished surfaces if run too long. Higher frequencies around 40 kHz give gentler, denser cavitation suited to fine components and precision cleanliness work.",
      "Chemistry choice is where most ultrasonic installations go wrong. A foaming cleaner destroys cavitation: foam bubbles cushion the implosion and the bath goes quiet. Ultrasonic work needs a low-foam concentrate, held at 55–65 °C, at 1–5%, with the bath degassed after every fresh make-up.",
    ],
    facts: [
      { label: "Typical frequency", value: "25–40 kHz" },
      { label: "Bath temperature", value: "55–65 °C" },
      { label: "Concentration", value: "1–5%" },
      { label: "Foam requirement", value: "Low-foam only" },
    ],
    products: [
      { name: "Power Clean LF", href: "/solutions/power-clean-lf" },
      { name: "Power Clean XL", href: "/solutions/power-clean-xl" },
    ],
    see: ["cavitation", "foam-profile", "degassing", "bath-life"],
    reading: [
      { label: "Ultrasonic cleaning chemical guide", href: "/blog/ultrasonic-cleaning-chemical-guide" },
      { label: "Ultrasonic cleaning FAQ", href: "/resources/ultrasonic-cleaning-faq" },
    ],
    keywords: ["ultrasonic cleaning", "what is ultrasonic cleaning", "ultrasonic degreasing", "ultrasonic cleaner chemical"],
  },
  {
    slug: "cavitation",
    term: "Cavitation",
    short:
      "Cavitation is the formation and violent collapse of vapour bubbles in a liquid under rapid pressure change. In an ultrasonic cleaning bath it is the actual cleaning mechanism: each collapsing bubble produces a microscopic jet that removes soil from the surface it strikes.",
    category: "Process",
    body: [
      "In an ultrasonic tank the sound wave alternately pulls the liquid apart and pushes it together. During the low-pressure half-cycle the liquid cannot hold together and cavities form; during the high-pressure half they implode, briefly generating extreme local temperature and pressure in a volume smaller than a grain of dust.",
      "Cavitation intensity is destroyed by three things: dissolved gas, foam, and cold liquid. Fresh water carries dissolved air that cushions the collapse, which is why a new bath must be degassed by running it empty for 10–20 minutes. Foam does the same thing permanently, which is why foaming cleaners are useless in ultrasonics.",
      "Cavitation is also destructive if unmanaged. Left too long, it erodes soft aluminium, removes plating and dulls polished faces. Cycle time should be validated on scrap parts rather than assumed.",
    ],
    see: ["ultrasonic-cleaning", "degassing", "foam-profile"],
    reading: [{ label: "Ultrasonic cleaning chemical guide", href: "/blog/ultrasonic-cleaning-chemical-guide" }],
    keywords: ["cavitation", "what is cavitation", "ultrasonic cavitation", "cavitation cleaning"],
  },
  {
    slug: "degassing",
    term: "Degassing",
    short:
      "Degassing is running an ultrasonic bath for 10–20 minutes after fresh make-up to drive out dissolved air. Until the air leaves, it cushions bubble collapse and cavitation is weak. A degassed bath cleans measurably faster than the same chemistry used straight after filling.",
    category: "Process",
    body: [
      "Tap water holds a substantial volume of dissolved air. Introduce ultrasound and that air comes out of solution as fine bubbles, which absorb the acoustic energy instead of transmitting it. The bath looks like it is working — it hisses and shimmers — but the implosions that do the cleaning are being damped.",
      "Degassing is simply time under power. Run the transducers with the bath at working temperature and no parts loaded for 10–20 minutes; most units clear within that window. Some machines have an explicit degas cycle that pulses the transducers, which is faster.",
      "Degas after every fresh fill and after any large water top-up. It costs twenty minutes once, and it is the cheapest performance improvement available on an ultrasonic line.",
    ],
    see: ["ultrasonic-cleaning", "cavitation"],
    keywords: ["degassing", "degas ultrasonic bath", "what is degassing"],
  },
  {
    slug: "saponification",
    term: "Saponification",
    short:
      "Saponification is the reaction in which an alkali converts a fat or fatty oil into a water-soluble soap. It is one of the two main ways an alkaline degreaser removes oil: animal and vegetable-derived oils are chemically converted rather than merely suspended, so they rinse away cleanly.",
    category: "Chemistry",
    body: [
      "Alkaline builders in a degreaser — silicates, carbonates, hydroxides — react with the fatty ester component of a soil to produce soap and glycerol. Both are water-soluble, so the oil is genuinely gone from the surface rather than sitting in the bath waiting to redeposit.",
      "This only works on saponifiable soils. Fatty oils, animal fats and many soluble cutting fluids saponify readily. Straight mineral oils, paraffins and greases do not — they have no ester group to react. Those have to be removed by emulsification instead.",
      "In practice a real machining soil is a mixture, so a good degreaser does both jobs: alkalinity to saponify the fatty fraction, and surfactants to emulsify the mineral fraction. That is why a cleaner's builder package and its surfactant package both matter.",
    ],
    see: ["emulsification", "alkaline-cleaner", "surfactant"],
    reading: [{ label: "Why carbon will not emulsify", href: "/blog/carbon-deposit-removal-guide" }],
    keywords: ["saponification", "what is saponification", "saponify oil cleaning"],
  },
  {
    slug: "emulsification",
    term: "Emulsification",
    short:
      "Emulsification is the dispersion of oil into water as fine droplets held in suspension by surfactants. It is how a degreaser removes mineral oils, which cannot be saponified. The oil is lifted from the surface and carried in the bath until it is skimmed, filtered or the bath is changed.",
    category: "Chemistry",
    body: [
      "Surfactant molecules have an oil-loving tail and a water-loving head. At an oil film they orient with tails into the oil and heads into the water, and the film breaks up into droplets each wrapped in a surfactant shell that prevents them recombining.",
      "There is a design decision hidden here. A tightly emulsifying cleaner holds oil in suspension indefinitely — excellent for cleaning, terrible for bath life, because the oil never separates and the bath saturates. A demulsifying or split cleaner deliberately lets the oil break out and float, so it can be skimmed off and the bath runs for weeks longer.",
      "Which you want depends on your equipment. A washer with a skimmer and coalescer wants a splitting cleaner. A simple soak tank with no oil removal wants a strong emulsifier and a planned change interval.",
    ],
    see: ["saponification", "surfactant", "bath-life", "drag-out"],
    keywords: ["emulsification", "what is emulsification", "oil emulsion cleaning", "demulsifying cleaner"],
  },
  {
    slug: "surfactant",
    term: "Surfactant",
    short:
      "A surfactant is a molecule that lowers the surface tension between two phases — typically water and oil. In cleaning chemistry surfactants let the bath wet the part, penetrate blind holes, lift oil films and hold them in suspension. Their type and cloud point determine how much a cleaner foams.",
    alsoKnownAs: ["surface active agent", "wetting agent"],
    category: "Chemistry",
    body: [
      "Surfactants are grouped by the charge on their water-loving head: anionic (negative), cationic (positive), non-ionic (uncharged) and amphoteric. Industrial degreasers lean heavily on non-ionics, which tolerate hard water and alkalinity and — critically — can be selected for low foam.",
      "Non-ionic surfactants have a cloud point: the temperature above which they come out of solution and stop foaming. Choose one with a cloud point below the intended wash temperature and the cleaner runs low-foam in a spray washer. Choose one with a cloud point above it and the same cleaner foams the pump.",
      "This is the single most useful thing to know when a spray washer starts cavitating: the problem is usually not dosage, it is that the bath is running below the cleaner's designed temperature window.",
    ],
    see: ["foam-profile", "emulsification", "cloud-point"],
    keywords: ["surfactant", "what is a surfactant", "wetting agent", "nonionic surfactant cleaning"],
  },
  {
    slug: "cloud-point",
    term: "Cloud point",
    short:
      "The cloud point is the temperature at which a non-ionic surfactant becomes insoluble and the solution turns hazy. Above it the surfactant stops stabilising foam, which is exactly why low-foam cleaners are formulated to cloud below their working temperature — around 45–55 °C for a 55–65 °C wash.",
    category: "Chemistry",
    body: [
      "Below the cloud point the surfactant is fully dissolved and behaves as a good foamer. Above it, it partially separates, the foam film loses its stabiliser and collapses. Formulators use this deliberately: pick the surfactant so the cloud point sits just below the intended bath temperature and the cleaner is self-defoaming in service.",
      "The practical consequence is that a low-foam cleaner run cold is not low-foam. A spray washer started from ambient will foam for the first ten minutes and settle once the bath reaches temperature. If it never reaches temperature, it never settles.",
      "Cleaning power also peaks near the cloud point, because the partially-separated surfactant concentrates at the oil-water interface. Running the bath in its designed window is therefore both a foam decision and a performance decision.",
    ],
    see: ["surfactant", "foam-profile"],
    keywords: ["cloud point", "cloud point surfactant", "low foam cleaner temperature"],
  },
  {
    slug: "alkaline-cleaner",
    term: "Alkaline cleaner",
    short:
      "An alkaline cleaner is a degreaser with a working pH above roughly 10, built on hydroxides, silicates, carbonates and phosphates. High alkalinity saponifies fatty soils and strips heavy machining oil from steel and cast iron — but it attacks aluminium, zinc and brass, which need a neutral cleaner instead.",
    category: "Chemistry",
    body: [
      "Alkalinity is the heavy artillery of aqueous cleaning. On ferrous parts carrying forging scale, drawing compound, buffing paste or baked-on machining oil, nothing cheap works better. Silicates additionally passivate steel slightly, giving a small amount of in-bath corrosion protection.",
      "The limit is metallurgical. Aluminium, zinc, magnesium and to a lesser extent brass and bronze are amphoteric or alkali-sensitive: above about pH 10 the cleaner etches them, dulling the surface, opening grain, and leaving a freshly reactive face that blooms into white rust within days.",
      "Mixed-metal baskets are the trap. A line that cleans steel housings and aluminium covers in the same basket must run neutral chemistry, even though the steel would tolerate — and slightly prefer — alkaline.",
    ],
    facts: [
      { label: "Working pH", value: "Above ~10" },
      { label: "Best on", value: "Steel, cast iron, forgings" },
      { label: "Avoid on", value: "Aluminium, zinc, brass, magnesium" },
    ],
    products: [{ name: "Power Clean XL", href: "/solutions/power-clean-xl" }],
    see: ["neutral-ph-cleaner", "ph", "white-rust", "saponification"],
    keywords: ["alkaline cleaner", "alkaline degreaser", "high pH cleaner", "what is an alkaline cleaner"],
  },
  {
    slug: "neutral-ph-cleaner",
    term: "Neutral pH cleaner",
    short:
      "A neutral pH cleaner works between roughly pH 7 and 9, relying on surfactants and mild builders rather than caustic alkalinity. It is the correct chemistry for aluminium, zinc, brass, copper and mixed-metal baskets, because it removes oil without etching the metal or triggering white rust.",
    category: "Chemistry",
    body: [
      "Removing the alkalinity removes the saponification route, so a neutral cleaner has to do more work with surfactants and solvency. Good ones clean aluminium castings, brass bushings and copper assemblies as effectively as an alkaline product does steel — but they will not strip baked carbon or forging scale.",
      "The payoff is surface integrity. Aluminium comes out of a neutral bath bright rather than dull-etched, brass keeps its colour instead of going pink from selective zinc leaching, and there is no freshly-activated surface waiting to bloom.",
      "Neutral chemistry is also the safe default for any line where the basket contents change. Power Clean NF-14 is built for exactly that case — mixed ferrous and non-ferrous loads on one wash programme.",
    ],
    facts: [
      { label: "Working pH", value: "7–9" },
      { label: "Best on", value: "Aluminium, zinc, brass, copper, mixed loads" },
      { label: "Wash temperature", value: "55–65 °C" },
    ],
    products: [{ name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14" }],
    see: ["alkaline-cleaner", "white-rust", "adc12", "ph"],
    reading: [{ label: "Removing white rust from aluminium die castings", href: "/blog/removing-white-rust-aluminium-die-cast" }],
    keywords: ["neutral ph cleaner", "non ferrous cleaner", "aluminium safe cleaner", "brass cleaner"],
  },
  {
    slug: "ph",
    term: "pH",
    short:
      "pH measures how acidic or alkaline a solution is on a 0–14 scale, where 7 is neutral. In parts cleaning it is the first compatibility check: above pH 10 a cleaner attacks aluminium and zinc; below pH 5 it attacks steel. Most industrial cleaning runs at either 7–9 or 11–13.",
    category: "Measurement",
    body: [
      "The scale is logarithmic — pH 12 is ten times more alkaline than pH 11 and a hundred times more than pH 10. Small numeric changes are large chemical changes, which is why 'slightly more alkaline' is rarely a small decision on a mixed-metal line.",
      "Working pH drifts in service. Alkalinity is consumed as it saponifies oil, and carbon dioxide from the air slowly neutralises the bath. A bath that started at pH 12 and now reads 10.5 has lost most of its cleaning reserve even though it still looks and smells the same.",
      "Checking pH weekly with a meter or strips, alongside a titration for total alkalinity, is the cheapest bath-control routine there is — and it catches a failing bath before it produces a rejected batch.",
    ],
    see: ["alkaline-cleaner", "neutral-ph-cleaner", "bath-life", "titration"],
    keywords: ["pH cleaning chemical", "cleaner pH range", "what pH for aluminium cleaning"],
  },
  {
    slug: "titration",
    term: "Titration",
    short:
      "Titration is a bench test that measures how much active cleaner remains in a bath by neutralising a measured sample with a standard acid. It is the accurate way to control concentration — far more reliable than topping up by eye, refractometer, or by how the parts look.",
    category: "Measurement",
    body: [
      "A known volume of bath is dosed with an indicator and titrated with standard acid until the colour turns. The volume of acid used converts directly to a concentration figure using a factor supplied with the product.",
      "It matters because both directions of error are expensive. Under-dosed baths leave residue that fails at inspection, and the usual reaction — extend cycle time — burns energy without fixing the cause. Over-dosed baths waste concentrate, increase drag-out, and on non-ferrous work can start etching.",
      "A simple weekly log of concentration, pH and temperature turns bath management from guesswork into a controlled process, and it is the single most common thing missing on lines that report inconsistent cleaning.",
    ],
    see: ["ph", "bath-life", "concentration"],
    keywords: ["titration cleaning bath", "measure cleaner concentration", "bath control"],
  },
  {
    slug: "concentration",
    term: "Concentration (dilution ratio)",
    short:
      "Concentration is how much cleaner concentrate is present in the working bath, written as a percentage or a ratio. Power Clean aqueous concentrates run from 1:100 (1%) for light maintenance soils up to about 5% for heavy machining oil, buffing compound and carbon.",
    alsoKnownAs: ["dilution ratio", "dosage"],
    category: "Measurement",
    body: [
      "A 1:100 dilution means one part concentrate to a hundred parts water — 1% — so a 500-litre tank takes 5 litres of concentrate. Ratios and percentages are used interchangeably in the field, and confusing 1:100 with 1:10 is a genuinely common and expensive error.",
      "More is not better past a point. Cleaning improves with concentration until the surfactant system saturates, after which the only effects are higher cost, more drag-out onto the rinse, more foam, and on aluminium a real risk of etching.",
      "The right approach is to start at the low end of the recommended band, confirm cleanliness on the actual part, and step up only if it fails. Then hold that figure with weekly titration rather than by topping up whenever the bath looks tired.",
    ],
    facts: [
      { label: "Light soils", value: "1% (1:100)" },
      { label: "General machining", value: "2–3%" },
      { label: "Heavy oil, buffing compound", value: "3–5%" },
    ],
    see: ["titration", "bath-life", "drag-out"],
    keywords: ["dilution ratio degreaser", "cleaner concentration", "1:100 dilution"],
  },
  {
    slug: "bath-life",
    term: "Bath life",
    short:
      "Bath life is how long a cleaning bath keeps working before it must be dumped and remade. It ends when the bath saturates with oil and fines, when alkalinity is consumed, or when suspended soil starts redepositing on parts. Skimming, filtration and concentration control extend it substantially.",
    category: "Process",
    body: [
      "Three things kill a bath. Oil loading saturates the emulsifier so incoming oil has nowhere to go. Solid fines — swarf, grinding dust, carbon — build until they redeposit. And alkalinity is consumed by saponification and by air, so the chemical reserve runs down even if the bath looks clean.",
      "Each has a countermeasure. A surface skimmer removes floating oil continuously and is the highest-return retrofit on most soak tanks. A bag or cartridge filter on a recirculation loop handles fines. Weekly titration and top-up maintains the chemical reserve.",
      "Extending bath life is usually the largest single cost lever on a wash line, because it cuts concentrate consumption, effluent volume and downtime at the same time. Doubling a two-week bath to four weeks halves all three.",
    ],
    see: ["drag-out", "emulsification", "titration", "concentration"],
    reading: [
      { label: "How to extend degreaser bath life", href: "/blog/extend-degreaser-bath-life" },
      { label: "What industrial cleaning really costs", href: "/blog/industrial-cleaning-cost-per-part" },
    ],
    keywords: ["bath life", "extend bath life", "cleaning bath change interval", "degreaser cost per part"],
  },
  {
    slug: "drag-out",
    term: "Drag-out",
    short:
      "Drag-out is the cleaning solution carried out of the bath on the parts and baskets and into the next stage. It is a triple cost: concentrate lost from the wash tank, contamination added to the rinse, and chemical load added to effluent. Dwell-and-drain time above the tank cuts it sharply.",
    category: "Process",
    body: [
      "Every basket leaves the wash tank wearing a film of solution, and blind holes and box sections carry far more than a flat face does. On a high-throughput line, drag-out can account for more concentrate consumption than the actual cleaning does.",
      "The cheapest control is time. Holding the basket above the tank for 10–15 seconds to drain returns a large fraction of the film to where it belongs. Tilting or rotating the basket, and orienting parts so blind holes face down, compounds the effect.",
      "Drag-out is also why the first rinse degrades fastest. A counter-flow rinse — clean water entering the last stage and cascading backwards — keeps final rinse quality high while using a fraction of the water.",
    ],
    see: ["rinse", "bath-life", "concentration"],
    keywords: ["drag out cleaning", "chemical carryover", "rinse contamination"],
  },
  {
    slug: "rinse",
    term: "Rinsing",
    short:
      "Rinsing removes the cleaning solution and the soil it holds from the part after washing. Poor rinsing is the most common cause of spotting, staining and residue failures — the cleaner did its job and the rinse put the dirt back. Counter-flow and DI final rinses solve most of it.",
    category: "Process",
    body: [
      "A rinse tank is a diluting stage, and it only works if it stays dilute. Once the rinse carries a percentage of dragged-out cleaner, parts leave wet with chemistry that dries into a visible film. That film is very often mistaken for a cleaner failure.",
      "Counter-flow rinsing fixes it structurally: fresh water enters the final rinse and overflows backwards into the earlier stages, so the part always meets progressively cleaner water and the water always meets progressively dirtier parts. It cuts water consumption while raising final rinse quality.",
      "For cosmetic or high-cleanliness work the last rinse should be deionised. Ordinary tap water leaves dissolved solids behind as spots when it evaporates — the cleaner is blameless; the water is not.",
    ],
    see: ["drag-out", "di-water", "spot-free-rinse", "flash-rust"],
    keywords: ["rinsing parts washing", "counter flow rinse", "rinse water quality"],
  },
  {
    slug: "di-water",
    term: "DI water (deionised water)",
    short:
      "Deionised water has had its dissolved mineral ions removed by ion-exchange resin, leaving conductivity typically below 10 µS/cm. Used as a final rinse it evaporates without leaving spots, which is why cosmetic parts, plated surfaces and precision cleanliness work all specify it.",
    alsoKnownAs: ["demineralised water", "DM water"],
    category: "Water",
    body: [
      "Tap water carries calcium, magnesium, chloride and silica. When a rinsed part dries, the water leaves but those solids stay, appearing as white spots, streaks or a haze. On a machined face nobody cares; on a visible casting or before painting, it is a reject.",
      "Deionisation strips those ions out. The conventional measure is conductivity: mains water in Indian industrial areas commonly runs 300–800 µS/cm, while a good DI final rinse holds below 10 µS/cm. Monitoring conductivity on the rinse tank is a direct, continuous quality signal.",
      "DI water is also aggressive toward bare steel — it is hungry for ions — so a ferrous part leaving a DI rinse will flash-rust unusually quickly. Those lines need an inhibited final rinse or immediate drying.",
    ],
    facts: [
      { label: "Typical mains water", value: "300–800 µS/cm" },
      { label: "Target DI rinse", value: "Below 10 µS/cm" },
    ],
    see: ["rinse", "spot-free-rinse", "conductivity", "flash-rust"],
    keywords: ["DI water rinse", "deionised water cleaning", "spot free rinse water"],
  },
  {
    slug: "conductivity",
    term: "Conductivity",
    short:
      "Conductivity measures how well water carries an electric current, in microsiemens per centimetre (µS/cm). Because dissolved salts are what conduct, it is a fast proxy for how much dissolved solid a rinse tank holds — and therefore for whether parts will dry spot-free.",
    category: "Measurement",
    body: [
      "A handheld conductivity meter gives an instant answer where a full water analysis takes days. On a rinse line it is used as a control limit: when the final rinse rises above the set figure, dump and refill, or increase the fresh-water feed.",
      "It is also the standard way to prove a DI plant is still working. Resin exhausts gradually, and the first symptom is usually a slow climb in rinse conductivity — visible on a meter weeks before it is visible as spots on parts.",
      "The same measurement is used on cooling water, where rising conductivity indicates concentrating dissolved solids and signals that blowdown is insufficient.",
    ],
    see: ["di-water", "rinse", "cooling-tower-blowdown", "tds"],
    keywords: ["conductivity rinse water", "microsiemens", "water conductivity cleaning"],
  },
  {
    slug: "spot-free-rinse",
    term: "Spot-free rinse",
    short:
      "A spot-free rinse is a final rinse engineered to dry without leaving marks — normally deionised water, often with a drying agent that lowers surface tension so water sheets off rather than beading. It is what separates a cosmetically acceptable casting from a rejected one.",
    category: "Process",
    body: [
      "Spots come from two sources: dissolved solids left behind when a droplet evaporates, and the droplets themselves persisting long enough to evaporate in place. DI water removes the first cause; a drying or sheeting agent removes the second.",
      "A drying agent is a low-foam surfactant that drops the water's surface tension so it cannot hold a bead. The film sheets off the part and the residual water is thin enough to flash off in the dryer, cutting both drying time and energy.",
      "On hot parts the effect compounds — a part leaving a 60 °C rinse carries enough heat to dry itself if the water sheets properly, which on some lines removes the need for a separate drying stage entirely.",
    ],
    see: ["di-water", "rinse", "drying-agent"],
    keywords: ["spot free rinse", "water spotting parts", "rinse aid industrial"],
  },
  {
    slug: "drying-agent",
    term: "Drying agent",
    short:
      "A drying agent is a final-rinse additive that lowers water surface tension so it sheets off the part instead of beading. Faster, more complete water removal means shorter dryer times, less spotting, and much less flash rust on freshly cleaned steel.",
    alsoKnownAs: ["rinse aid", "sheeting agent"],
    category: "Chemistry",
    body: [
      "Water on a clean metal surface beads because of its high surface tension. Each bead is a spot waiting to happen and a small reservoir of moisture that will sit against the metal. A drying agent breaks that, producing a thin continuous film that runs off under gravity.",
      "Many industrial drying agents also carry a light corrosion inhibitor, which addresses the flash-rust window directly — the minutes between a hot rinse and a dry part are when bare steel is most vulnerable.",
      "Dosage is low, typically well under 1%, and the agent must be low-foam or it will foam the rinse tank and defeat itself.",
    ],
    see: ["spot-free-rinse", "flash-rust", "rinse"],
    keywords: ["drying agent rinse", "rinse aid metal parts", "sheeting agent"],
  },
  {
    slug: "flash-rust",
    term: "Flash rust",
    short:
      "Flash rust is the light orange film that forms on bare steel within minutes of a hot aqueous wash, while the surface is still warm and damp. It is not a cleaner defect — it is what clean, unprotected steel does in humid air, and it is prevented with an inhibitor or immediate drying.",
    alsoKnownAs: ["flash corrosion"],
    category: "Corrosion",
    body: [
      "Cleaning removes the oil film that was protecting the part. A freshly cleaned steel face is chemically bare, still warm from the wash, and carrying a thin water layer — every condition corrosion needs. In a humid monsoon plant it can appear in under five minutes.",
      "Three defences work. Dry the part immediately and completely, including blind holes. Carry a corrosion inhibitor in the final rinse. Or use a cleaner with in-built inhibition, which is how Power Clean's aqueous concentrates hold 7–15 days of indoor protection straight out of the wash.",
      "For longer storage or export, that in-built protection is a bridge, not a solution — parts going into a container need a dedicated rust preventive or VCI packaging.",
    ],
    facts: [
      { label: "Onset", value: "Minutes, on warm damp steel" },
      { label: "Power Clean in-built protection", value: "7–15 days indoors" },
    ],
    products: [{ name: "PC RP-636 rust preventive", href: "/solutions/pc-rp-636" }],
    see: ["rust-preventive", "vci", "rinse", "drying-agent"],
    keywords: ["flash rust", "flash corrosion after washing", "rust after cleaning steel"],
  },
  {
    slug: "rust-preventive",
    term: "Rust preventive",
    short:
      "A rust preventive is a coating applied after cleaning to protect bare metal in storage and transit. Types range from water-based inhibitors giving weeks of indoor cover, through oil-based films for months, to hard-film and VCI systems for sea freight and long-term storage.",
    alsoKnownAs: ["RP", "corrosion preventive", "rust inhibitor"],
    category: "Corrosion",
    body: [
      "Selection is driven by three questions: how long the part must be protected, what environment it will sit in, and whether the film must be removed before the next operation. A part going to assembly tomorrow needs something very different from one going into a sea container.",
      "Water-based inhibitors are the lightest option — easy to apply in the final rinse, easy to remove, typically good for days to a few weeks indoors. Oil-based films give months but must be degreased off later. Hard films survive shipping but need solvent removal.",
      "The most common failure is not the product but the timing. A rust preventive applied over a damp or contaminated surface seals moisture against the metal and accelerates the corrosion it was bought to stop.",
    ],
    products: [{ name: "PC RP-636", href: "/solutions/pc-rp-636" }],
    see: ["flash-rust", "vci", "white-rust"],
    keywords: ["rust preventive", "corrosion preventive oil", "rust inhibitor industrial", "RP oil"],
  },
  {
    slug: "vci",
    term: "VCI (vapour corrosion inhibitor)",
    short:
      "VCI is a corrosion inhibitor that vaporises from a paper, film or emitter and condenses as an invisible protective layer on every metal surface inside a sealed package — including blind holes and internal bores a liquid coating can never reach. It requires an enclosed volume to work.",
    alsoKnownAs: ["vapour phase inhibitor", "VPI"],
    category: "Corrosion",
    body: [
      "The inhibitor sublimes slowly, saturates the air in the package, and adsorbs onto metal as a molecular film. Because it works through the vapour phase, geometry stops mattering — a complex casting is protected as completely as a flat plate.",
      "The absolute requirement is enclosure. VCI in an open crate does nothing; the vapour disperses. Packaging must be genuinely sealed, and the parts must be clean and dry going in, because VCI cannot protect metal under a layer of moisture or salt.",
      "VCI and oil-based preventives are complementary rather than competing: exposed faces get the film, internal passages get the vapour, and the whole assembly goes into a sealed bag.",
    ],
    see: ["rust-preventive", "flash-rust"],
    keywords: ["VCI packaging", "vapour corrosion inhibitor", "VCI paper film"],
  },
  {
    slug: "millipore-value",
    term: "Millipore value",
    short:
      "The Millipore value is the mass of residual particulate found on a component after a standardised extraction wash, captured on a membrane filter and weighed — reported in milligrams per part or per square metre. It is the standard cleanliness specification for bearings, injectors and hydraulics.",
    alsoKnownAs: ["millipore test", "residual dirt analysis", "gravimetric cleanliness"],
    category: "Measurement",
    body: [
      "The test is deliberately destructive of information rather than of the part: the component is washed under controlled conditions, the extraction fluid is drawn through a membrane filter of known mass, the filter is dried and weighed, and the difference is the contamination that was on the part.",
      "Most automotive and bearing specifications go further and require particle sizing under a microscope or automated optical scan, because a single 400 µm hard particle in a hydraulic circuit matters far more than the same mass spread as fine dust.",
      "Meeting a Millipore spec is a process achievement, not a chemical one. It needs the right chemistry, but also filtration on the wash and rinse, controlled drag-out, clean handling and clean packaging — recontamination after the wash is the most common reason a good bath still fails the test.",
    ],
    products: [{ name: "Power Clean LF", href: "/solutions/power-clean-lf" }],
    see: ["ultrasonic-cleaning", "rinse", "particle-count"],
    keywords: ["millipore value", "millipore cleanliness test", "residual dirt analysis", "component cleanliness"],
  },
  {
    slug: "particle-count",
    term: "Particle count",
    short:
      "Particle counting reports how many particles of each size range remain on a cleaned component, rather than just their total mass. Specifications are written as size-class limits — for example, no particles above 600 µm — because one large hard particle can fail an assembly that a gram of fine dust would not.",
    category: "Measurement",
    body: [
      "After the extraction wash used for a Millipore test, the membrane is scanned optically and particles are binned by their largest dimension. Modern systems also classify them as metallic, non-metallic or fibre, which is diagnostically useful: metallic swarf points at machining, fibres at wipes and packaging.",
      "This distinction is why gravimetric mass alone is an incomplete specification. A part can pass on mass and fail catastrophically in service because of a single hard particle lodged where it will score a bore or block an orifice.",
      "Chasing a particle-count spec usually means attacking sources rather than increasing wash time: finer bath filtration, better drag-out control, cleaner baskets, and packaging that does not shed.",
    ],
    see: ["millipore-value", "rinse"],
    keywords: ["particle count cleanliness", "component cleanliness specification", "particle size limit cleaning"],
  },
  {
    slug: "adc12",
    term: "ADC12 / ADC10",
    short:
      "ADC12 and ADC10 are Japanese-standard aluminium die-casting alloys used widely in Indian automotive components — gearbox housings, covers, brackets and pump bodies. Both are aluminium-silicon alloys with copper, and both are alkali-sensitive, so they must be cleaned with neutral-pH chemistry.",
    category: "Chemistry",
    body: [
      "ADC12 carries roughly 9.6–12% silicon and 1.5–3.5% copper; ADC10 is similar with slightly less silicon. The copper content improves strength and castability but reduces corrosion resistance, which is directly relevant to how these parts behave after washing.",
      "Alkaline cleaners etch these alloys. The visible result is a dull grey or blotchy surface, and beneath it a freshly exposed, highly reactive face. Add residual rinse water in a blind hole and a sealed package, and white rust follows within days.",
      "The correct process is a neutral-pH cleaner at 55–65 °C, a clean rinse, and a genuinely dry part before packing. On die-cast housings, Power Clean has recorded white-rust rejection falling from 3.2% to 0.4% on exactly that change.",
    ],
    products: [{ name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14" }],
    see: ["white-rust", "neutral-ph-cleaner", "alkaline-cleaner"],
    reading: [{ label: "Removing white rust from aluminium die castings", href: "/blog/removing-white-rust-aluminium-die-cast" }],
    keywords: ["ADC12", "ADC10", "aluminium die casting alloy cleaning", "ADC12 cleaning chemical"],
  },
  {
    slug: "passivation",
    term: "Passivation",
    short:
      "Passivation is forming a thin, stable oxide layer on a metal so it stops reacting with its environment. On stainless steel it is a deliberate acid treatment that restores the chromium oxide film; on cleaned carbon steel, a light in-bath passivation from silicates buys short-term rust protection.",
    category: "Corrosion",
    body: [
      "Stainless steel is corrosion resistant because of a chromium-rich oxide film only nanometres thick. Machining, grinding and free iron contamination disrupt that film, so a passivation treatment — typically nitric or citric acid — dissolves the free iron and lets the chromium oxide reform uniformly.",
      "On carbon steel there is no equivalent permanent film, but silicate builders in an alkaline cleaner leave a weak passivating layer that slows flash rust in the minutes after the wash. It is a useful side-effect, not a substitute for a rust preventive.",
      "Passivation is easily undone. Handling a passivated stainless part with steel tooling or storing it against carbon steel re-contaminates the surface with free iron and reintroduces the rust points the treatment removed.",
    ],
    see: ["flash-rust", "rust-preventive", "alkaline-cleaner"],
    keywords: ["passivation", "stainless passivation", "what is passivation"],
  },
  {
    slug: "chelating-agent",
    term: "Chelating agent",
    short:
      "A chelating agent binds metal ions in solution so they cannot react. In cleaning chemistry it sequesters the calcium and magnesium in hard water, preventing the scale and soap-scum films that otherwise leave a chalky residue on parts and shorten bath life.",
    alsoKnownAs: ["sequestrant", "chelant"],
    category: "Chemistry",
    body: [
      "Hard water is a real problem in much of India, where mains supply commonly runs several hundred ppm of hardness. Without a chelant, calcium reacts with the cleaner's anionic components to form insoluble soaps that deposit on parts, tank walls and heaters.",
      "Chelants wrap the metal ion in a molecular cage, keeping it soluble and unreactive. The bath stays clear, the heaters stay clean, and the parts come out without a film — and the surfactant system keeps its full cleaning capacity instead of losing part of it to hardness.",
      "Chelants also help in descaling and rust removal, where they hold dissolved iron in solution so it cannot re-deposit on the surface being cleaned.",
    ],
    see: ["hard-water", "descaling", "bath-life"],
    keywords: ["chelating agent", "sequestrant cleaning", "hard water cleaner"],
  },
  {
    slug: "hard-water",
    term: "Hard water",
    short:
      "Hard water contains dissolved calcium and magnesium salts, measured in ppm as calcium carbonate. In parts cleaning it causes scale on heaters, films on parts and reduced cleaner performance; in cooling systems it is the direct source of the scale that descaling chemistry has to remove.",
    category: "Water",
    body: [
      "Hardness above roughly 200 ppm starts to show in a wash line: a white film on parts, scale on immersion heaters that reduces heat transfer, and a bath that needs more concentrate to achieve the same result because hardness is consuming part of the chemistry.",
      "Two remedies exist. Treat the chemistry — use a cleaner with a strong chelant package so hardness is sequestered as it arrives. Or treat the water — soften or deionise the make-up supply, which is more capital but removes the problem at source.",
      "In cooling towers the same hardness concentrates as water evaporates, which is precisely why cooling systems need both a controlled blowdown and a scale-inhibitor programme.",
    ],
    see: ["chelating-agent", "descaling", "cooling-tower-blowdown", "tds"],
    keywords: ["hard water industrial cleaning", "water hardness ppm", "scale from hard water"],
  },
  {
    slug: "descaling",
    term: "Descaling",
    short:
      "Descaling is the chemical removal of mineral scale — mostly calcium carbonate — from heat-exchange surfaces, cooling tower fill and pipework. It uses an inhibited acid that dissolves the scale while a corrosion inhibitor protects the base metal underneath, followed by neutralisation and flushing.",
    category: "Water",
    body: [
      "Scale is an insulator. A layer under a millimetre thick can measurably cut heat transfer, which shows up as rising approach temperature on a cooling tower, longer chiller run times and higher energy bills long before anything visibly fails.",
      "The chemistry is an acid — commonly inhibited hydrochloric or sulphamic — circulated through the system. The inhibitor is what makes it usable: raw acid would dissolve the scale and then attack the tube walls. Progress is tracked by monitoring pH; when the acid stops being consumed, the scale is gone.",
      "The job is not finished at that point. The system must be neutralised, flushed until the effluent runs clear and neutral, and then passivated or immediately returned to treated service, because a freshly descaled surface is bare and will corrode quickly.",
    ],
    products: [{ name: "PC S-342 descaler", href: "/solutions/pc-s-342" }],
    see: ["hard-water", "cooling-tower-blowdown", "biocide", "langelier-index"],
    reading: [{ label: "Cooling tower descaling guide", href: "/blog/cooling-tower-descaling-guide" }],
    keywords: ["descaling chemical", "cooling tower descaling", "scale removal heat exchanger"],
  },
  {
    slug: "biocide",
    term: "Biocide",
    short:
      "A biocide controls bacteria, algae and fungi in cooling water. Untreated systems grow biofilm that insulates heat-exchange surfaces, shelters corrosion beneath it, and can harbour Legionella. Oxidising and non-oxidising biocides are normally alternated so organisms cannot adapt.",
    category: "Water",
    body: [
      "A cooling tower is close to an ideal incubator: warm water, sunlight, dissolved nutrients and continuous aeration. Biofilm forms within days on untreated systems, and it is a worse insulator than mineral scale at the same thickness.",
      "Biocides split into two families. Oxidising types — chlorine, bromine — act fast and broadly but are consumed quickly and can be corrosive. Non-oxidising types are slower, persist longer, and reach into established biofilm more effectively. Alternating them prevents resistant populations establishing.",
      "Biocide dosing also has a safety dimension that goes beyond plant efficiency: Legionella control in cooling towers is a genuine public-health obligation, not an optional efficiency measure.",
    ],
    products: [{ name: "PC S-342 programme", href: "/solutions/pc-s-342" }],
    see: ["descaling", "cooling-tower-blowdown"],
    reading: [{ label: "Cooling tower descaling guide", href: "/blog/cooling-tower-descaling-guide" }],
    keywords: ["cooling tower biocide", "biofilm control", "legionella cooling tower"],
  },
  {
    slug: "cooling-tower-blowdown",
    term: "Blowdown",
    short:
      "Blowdown is the deliberate draining of a fraction of cooling water to stop dissolved solids concentrating as evaporation removes pure water. It is controlled by cycles of concentration — the ratio of dissolved solids in the tower to those in the make-up water — usually held between three and six.",
    category: "Water",
    body: [
      "A cooling tower cools by evaporating water, and evaporation removes only the water. Everything dissolved in it stays behind and concentrates. Left alone, hardness and total dissolved solids rise until the system scales.",
      "Cycles of concentration expresses how far that has gone. Running at four cycles means the circulating water is four times as concentrated as the make-up. Higher cycles save water and chemical but push closer to the scaling limit; lower cycles are safe but wasteful.",
      "The practical control is conductivity: set a limit, dump automatically when the tower exceeds it, and make up with fresh water. Combined with a scale inhibitor, that keeps a tower running for years without a shutdown descale.",
    ],
    facts: [
      { label: "Typical cycles of concentration", value: "3–6" },
      { label: "Control measurement", value: "Conductivity" },
    ],
    see: ["descaling", "conductivity", "hard-water", "tds"],
    keywords: ["cooling tower blowdown", "cycles of concentration", "cooling water control"],
  },
  {
    slug: "tds",
    term: "TDS (total dissolved solids)",
    short:
      "TDS is the total mass of dissolved minerals, salts and metals in water, in parts per million. In cleaning it governs whether a rinse dries spot-free; in cooling systems it drives scaling risk and sets how much blowdown a tower needs.",
    category: "Water",
    body: [
      "TDS is usually estimated from conductivity rather than measured gravimetrically, because the two correlate closely enough for process control and conductivity takes seconds to read.",
      "On a rinse line, TDS is what gets left behind when a droplet evaporates. High-TDS rinse water spots parts no matter how good the cleaner was, which is why cosmetic and precision work specifies a DI final rinse.",
      "On a cooling tower, TDS rising toward the scaling limit is the signal that blowdown is insufficient — the tower is concentrating faster than it is being purged.",
    ],
    see: ["conductivity", "di-water", "cooling-tower-blowdown", "hard-water"],
    keywords: ["TDS water", "total dissolved solids", "TDS rinse water"],
  },
  {
    slug: "langelier-index",
    term: "Langelier Saturation Index (LSI)",
    short:
      "The LSI predicts whether cooling water will deposit scale or corrode metal, calculated from pH, temperature, calcium hardness and alkalinity. A positive index means the water tends to scale; negative means it tends to corrode. Treatment programmes aim to hold it slightly positive.",
    alsoKnownAs: ["LSI", "saturation index"],
    category: "Water",
    body: [
      "The index compares actual pH with the pH at which calcium carbonate would be exactly saturated. Above that point calcium carbonate precipitates as scale; below it, the water is aggressive and will attack pipework and heat-exchanger tubes.",
      "Neither extreme is acceptable, which is why treatment targets a small positive value: enough for a protective microscopic carbonate film, not enough for insulating scale. Scale inhibitors widen that acceptable window considerably.",
      "LSI is a tendency, not a rate, and it does not account for biofilm, suspended solids or localised hot spots. It is a control input alongside conductivity, hardness and biological monitoring — not a complete programme on its own.",
    ],
    see: ["descaling", "cooling-tower-blowdown", "hard-water"],
    keywords: ["Langelier index", "LSI cooling water", "scaling index water treatment"],
  },
  {
    slug: "foam-profile",
    term: "Foam profile",
    short:
      "A cleaner's foam profile is how much it foams at working temperature and agitation. It is a hard equipment constraint, not a preference: a high-foam cleaner in a spray washer aerates the pump and destroys wash pressure, and in an ultrasonic bath it kills cavitation entirely.",
    category: "Chemistry",
    body: [
      "Foam is created by mechanical energy and stabilised by surfactants. A spray washer's nozzles and a returning cascade both inject enormous amounts of air, so a spray cleaner must be formulated to collapse foam as fast as the machine creates it.",
      "Soak and dip tanks have almost no mechanical energy, so they tolerate — and sometimes benefit from — a foaming cleaner, since a foam blanket reduces heat loss and evaporation from the surface.",
      "Ultrasonics are the strict case: foam bubbles cushion cavitation implosions, so the bath falls silent and cleaning stops. Only low-foam chemistry belongs in an ultrasonic tank. Power Clean LF is formulated for exactly the spray and ultrasonic cases.",
    ],
    products: [{ name: "Power Clean LF", href: "/solutions/power-clean-lf" }],
    see: ["surfactant", "cloud-point", "ultrasonic-cleaning", "spray-wash"],
    keywords: ["low foam cleaner", "foam control spray washer", "foaming degreaser problem"],
  },
  {
    slug: "spray-wash",
    term: "Spray wash",
    short:
      "Spray washing cleans by directing pressurised cleaning solution at parts through nozzles, combining chemical action with mechanical impingement. It is fast and well-suited to production lines, but it demands low-foam chemistry and it cannot reach shadowed or blind features.",
    alsoKnownAs: ["jet wash", "impingement washing"],
    category: "Process",
    body: [
      "The mechanical component does much of the work, which means a spray washer often cleans faster and at lower concentration than a soak tank on the same soil. Cabinet, tunnel and rotary-basket configurations all exploit the same principle.",
      "Its blind spot is geometry. Anything the jet cannot see — deep blind holes, internal galleries, the underside of a nested part — receives only whatever solution flows past it. Fixturing and rotation matter as much as chemistry.",
      "Foam is the recurring failure. Aerated solution in the pump chamber causes cavitation, pressure collapse and eventually pump damage. This is where a low-foam cleaner such as Power Clean LF, held in its designed temperature window, is not optional.",
    ],
    products: [{ name: "Power Clean LF", href: "/solutions/power-clean-lf" }],
    see: ["foam-profile", "ultrasonic-cleaning", "dip-tank"],
    keywords: ["spray wash cleaning", "spray washer chemical", "impingement cleaning"],
  },
  {
    slug: "dip-tank",
    term: "Dip tank / immersion cleaning",
    short:
      "Dip tank cleaning immerses parts in a heated cleaning solution and relies on chemistry, temperature and time rather than mechanical force. It reaches every wetted surface including blind features, tolerates foaming cleaners, and is the lowest-capital way to clean complex or heavily soiled parts.",
    alsoKnownAs: ["soak cleaning", "immersion cleaning"],
    category: "Process",
    body: [
      "With no jets and no ultrasound, the whole burden falls on chemistry and dwell. That makes dip tanks slower, but also completely geometry-independent: if solution reaches a surface, that surface is being cleaned.",
      "Simple agitation transforms performance. Basket oscillation, a recirculation pump or air sparging replaces the boundary layer of saturated solution at the part surface with fresh chemistry, often halving cycle time for very little cost.",
      "Bath management is the weak point. Without a skimmer, oil accumulates on the surface and re-coats every part on withdrawal — which is why the single highest-return upgrade to most soak tanks is a surface skimmer, not a stronger cleaner.",
    ],
    see: ["bath-life", "drag-out", "spray-wash", "ultrasonic-cleaning"],
    keywords: ["dip tank cleaning", "immersion cleaning", "soak tank degreaser"],
  },
  {
    slug: "vapour-degreasing",
    term: "Vapour degreasing",
    short:
      "Vapour degreasing suspends parts in the hot vapour of a boiling solvent. The vapour condenses on the cooler part, dissolves oil and drips back into the tank, leaving the part dry with no rinse. Traditionally run on trichloroethylene, it is being displaced by aqueous cleaning.",
    category: "Process",
    body: [
      "The process is elegant: the solvent distils itself continuously, so parts always meet clean condensate, and they leave dry and residue-free. That is why it dominated precision cleaning for so long.",
      "The problems are the solvent, not the principle. Chlorinated solvents such as TCE are carcinogenic and heavily regulated; the vapour zone must be held at 90–100 °C; and evaporative loss, drag-out and disposal all carry cost and exposure risk.",
      "Modern replacements go one of two ways: an aqueous line with wash, rinse and dry stages, or a sealed vacuum degreaser running a modified alcohol. For most Indian engineering plants the aqueous route is cheaper to install and far simpler to comply with.",
    ],
    see: ["trichloroethylene", "aqueous-cleaning", "safety-solvent"],
    reading: [{ label: "Replacing TCE — plant manager's guide", href: "/blog/replacing-tce-plant-guide" }],
    keywords: ["vapour degreasing", "vapor degreaser", "solvent degreasing process"],
  },
  {
    slug: "safety-solvent",
    term: "Safety solvent",
    short:
      "A safety solvent is a non-chlorinated, high-flash-point solvent cleaner used where water cannot be — live electrical equipment, assembled machinery, and field maintenance. It cleans by dissolution and evaporates without residue, but it is not a substitute for a full aqueous wash line.",
    category: "Chemistry",
    body: [
      "The defining properties are a high flash point, so it is not readily ignitable in normal use, and the absence of chlorinated chemistry, so it carries none of TCE's carcinogenic or regulatory burden.",
      "It fills the gaps aqueous cleaning genuinely cannot: motors and switchgear that must not be wetted, assembled gearboxes that cannot be dismantled for a wash, and maintenance work where there is no tank, no heat and no rinse available.",
      "It is a maintenance and rework tool rather than a production-cleaning tool. Volume cleaning of components remains far cheaper and safer in an aqueous bath.",
    ],
    see: ["trichloroethylene", "vapour-degreasing", "aqueous-cleaning"],
    keywords: ["safety solvent", "non chlorinated solvent cleaner", "electrical contact cleaner industrial"],
  },
  {
    slug: "defluxing",
    term: "Defluxing",
    short:
      "Defluxing removes soldering flux residue from printed circuit boards and electronic assemblies after reflow or wave soldering. Left in place, rosin and activator residues attract moisture, cause surface leakage between conductors, and can drive electrochemical migration and eventual failure.",
    category: "Process",
    body: [
      "Flux does a necessary job during soldering — it strips oxide so solder wets the pad — but what remains afterwards is an acidic, hygroscopic residue sitting between fine-pitch conductors.",
      "Modern no-clean fluxes are formulated so the residue is benign and can be left. That assumption breaks down under conformal coating, in high-humidity environments, in high-voltage designs, and wherever the assembly must pass ionic-contamination testing.",
      "Defluxing chemistry is chosen against the flux type — rosin, water-soluble or no-clean — and against material compatibility, since aggressive cleaners can attack component markings, plastics and adhesives.",
    ],
    see: ["safety-solvent", "ultrasonic-cleaning"],
    keywords: ["defluxing", "flux removal PCB", "rosin remover electronics"],
  },
  {
    slug: "carbon-deposit-removal",
    term: "Carbon deposit removal",
    short:
      "Carbon deposit removal strips the hard, baked carbonised film that forms on pistons, valves, exhaust components and heat-exchange surfaces. Ordinary degreasers cannot touch it — carbon is not oil and does not emulsify — so it needs a heated, high-alkalinity soak with long dwell.",
    alsoKnownAs: ["decarbonising", "carbon removal"],
    category: "Process",
    body: [
      "Carbon is what remains after oil has been thermally decomposed. It is chemically inert, mechanically hard, and firmly bonded — which is why a bath that removes machining oil in four minutes will do nothing to it in an hour.",
      "The working approach is a hot, strongly alkaline soak with extended dwell, typically measured in hours rather than minutes, often with agitation. The chemistry attacks the binder holding the deposit rather than the carbon itself, undercutting it so it lifts.",
      "Substrate compatibility is the constraint. The alkalinity needed will attack aluminium pistons and zinc components, so mixed assemblies must be separated or a lower-alkalinity, longer-dwell route accepted.",
    ],
    see: ["alkaline-cleaner", "dip-tank", "bath-life"],
    reading: [{ label: "Carbon deposit removal guide", href: "/blog/carbon-deposit-removal-guide" }],
    keywords: ["carbon deposit removal", "decarbonising chemical", "piston carbon cleaning"],
  },
];

export const glossaryCategories = [
  "Chemistry",
  "Process",
  "Measurement",
  "Corrosion",
  "Water",
] as const;

export function getTerm(slug: string) {
  return glossary.find((t) => t.slug === slug);
}
