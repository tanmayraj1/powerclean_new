/**
 * Cleaning methods — /solutions/[method].
 *
 * The client's architecture organises Solutions by *method* (ultrasonic,
 * spray jet, TCE replacement, Millipore cleanliness) rather than by product.
 * Our six existing /solutions/[product] deep-dives stay as they are; these
 * four sit alongside them in the same route and target the method keywords,
 * which nothing on the site owned before.
 *
 * Every figure comes from Power Clean's published product data.
 */
export type Method = {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** 40–60 word extractable answer */
  answer: string;
  intro: string;
  photo: string;
  photoAlt: string;
  spec: { label: string; value: string }[];
  /** what the method is and how it works */
  body: string[];
  /** the failure modes we get called in for */
  pitfalls: { title: string; body: string }[];
  products: { name: string; href: string; why: string }[];
  /** ordered procedure → HowTo schema */
  steps: { name: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  keywords: string[];
};

export const methods: Method[] = [
  {
    slug: "ultrasonic-cleaning",
    name: "Ultrasonic cleaning",
    title: "Ultrasonic Cleaning Solutions",
    metaTitle: "Ultrasonic Cleaning Chemicals & Process",
    metaDescription:
      "Ultrasonic cleaning chemistry and process — 25–40 kHz cavitation, low-foam concentrates at 1–5% and 55–65 °C, degassing, and reaching blind holes.",
    answer:
      "Ultrasonic cleaning uses 25–40 kHz sound to create and collapse microscopic bubbles in the bath. That collapse — cavitation — scrubs blind holes, cross-drillings and thread roots a spray jet cannot reach. It requires a low-foam concentrate at 1–5% and 55–65 °C, and a bath degassed after every fresh fill.",
    intro:
      "Ultrasonic is the method to reach geometry, not the method to move volume. Where the specification is a weighed Millipore residue or a particle-size limit on a complex part, there is no realistic alternative — and where a cleaner foams, there is no ultrasonic cleaning at all.",
    photo: "/photos/solution-lf.webp",
    photoAlt:
      "Precision components staged for ultrasonic cleaning in a parts basket",
    spec: [
      { label: "Frequency", value: "25–40 kHz" },
      { label: "Concentration", value: "1–5%" },
      { label: "Bath temperature", value: "55–65 °C" },
      { label: "Chemistry", value: "Low-foam only" },
      { label: "Reaches blind holes", value: "Yes" },
    ],
    body: [
      "A transducer drives the bath through compression and rarefaction cycles. During rarefaction the liquid cannot hold together and microscopic cavities form; during compression they implode, each one a tiny jet that strips soil off whatever surface it strikes. Because the cleaning is carried by the liquid rather than by a directed jet, it reaches everywhere the liquid reaches.",
      "Frequency sets the trade-off. Lower frequencies around 25 kHz produce larger, more energetic bubbles — better on heavy soils and rugged parts, but capable of eroding soft aluminium or dulling polished faces if the cycle runs long. Higher frequencies around 40 kHz give gentler, denser cavitation suited to fine components and precision cleanliness work.",
      "Chemistry choice is where most installations go wrong. Foam bubbles cushion the implosion and the bath goes quiet while still looking and sounding active. Only a low-foam concentrate belongs in an ultrasonic tank — and it only behaves as low-foam above its surfactant's cloud point, which is why the 55–65 °C window is a requirement rather than a preference.",
    ],
    pitfalls: [
      {
        title: "A foaming cleaner switches the ultrasonics off",
        body: "Foam cushions cavitation implosions. The tank hisses and shimmers and cleans nothing. Only low-foam grades belong here.",
      },
      {
        title: "A bath that was never degassed",
        body: "Fresh water carries dissolved air that damps the acoustic energy exactly as foam does. Run the transducers at temperature with no load for 10–20 minutes after every fill and after any large top-up.",
      },
      {
        title: "Cycle time assumed rather than validated",
        body: "Cavitation is destructive if unmanaged — left too long it erodes soft aluminium, removes plating and dulls polished faces. Validate on scrap parts.",
      },
      {
        title: "Fines recirculating back onto the load",
        body: "Without filtration, swarf and grinding dust settle in the bath and redeposit on the next basket. This is the usual reason a good bath still fails a cleanliness test.",
      },
    ],
    products: [
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Low foam — the only class that works in an ultrasonic bath." },
      { name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14", why: "Neutral pH for aluminium, brass and mixed non-ferrous loads." },
      { name: "Power Clean XL", href: "/solutions/power-clean-xl", why: "Heavier alkaline duty on ferrous pre-wash stages." },
    ],
    steps: [
      { name: "Fill and degas", text: "Make the bath up at 1–5%, bring it to 55–65 °C and run the transducers with no load for 10–20 minutes to drive out dissolved air." },
      { name: "Load without shadowing", text: "Use an open basket and keep parts from nesting — cavitation reaches wetted surfaces, not surfaces pressed against each other." },
      { name: "Run a validated cycle", text: "Typically 5–15 minutes. Confirm the time on scrap parts rather than assuming it; over-running erodes soft metals." },
      { name: "Rinse counter-flow", text: "Follow with a clean rinse, deionised below 10 µS/cm where the part is cosmetic or held to a cleanliness spec." },
      { name: "Dry and protect", text: "Dry completely including blind holes, then rely on the cleaner's 7–15 day in-built inhibition or apply a rust preventive for longer holds." },
    ],
    faqs: [
      {
        q: "What chemical is used in an ultrasonic cleaner?",
        a: "A low-foam aqueous concentrate at 1–5%, run at 55–65 °C. Foam is disqualifying: it cushions the cavitation implosions that do the cleaning. Water alone has no cleaning action — the chemistry lowers surface tension so cavitation can work.",
      },
      {
        q: "Why is my ultrasonic bath cleaning poorly?",
        a: "Three usual causes, in order: the cleaner foams, the bath was never degassed after filling, or the bath is below its temperature window. Check all three before increasing concentration or cycle time.",
      },
      {
        q: "What frequency should I use?",
        a: "25 kHz for heavy soils on rugged parts, 40 kHz for fine components and precision cleanliness work. Lower frequency means larger, more energetic bubbles — more aggressive, and more capable of eroding soft aluminium.",
      },
      {
        q: "Can ultrasonic cleaning damage parts?",
        a: "Yes, if the cycle is over-run. Cavitation erodes soft aluminium, strips plating and dulls polished faces given enough time. Validate cycle time on scrap parts before committing a production programme.",
      },
    ],
    related: [
      { label: "Ultrasonic cleaning chemical guide", href: "/blog/ultrasonic-cleaning-chemical-guide" },
      { label: "Cavitation — definition", href: "/glossary/cavitation" },
      { label: "Degassing — definition", href: "/glossary/degassing" },
      { label: "Which process suits my part?", href: "/blog/ultrasonic-vs-spray-vs-dip-tank" },
    ],
    keywords: [
      "ultrasonic cleaning solution",
      "ultrasonic cleaning chemical india",
      "ultrasonic degreaser",
      "ultrasonic cleaning process",
      "low foam ultrasonic cleaner",
    ],
  },

  {
    slug: "spray-jet-cleaning",
    name: "Spray jet cleaning",
    title: "Spray & Jet Washing Solutions",
    metaTitle: "Spray Jet Cleaning Chemicals & Process",
    metaDescription:
      "Spray and tunnel washer chemistry — low-foam concentrates at 1–5% and 55–65 °C, why foam collapses wash pressure, and the geometry a jet cannot reach.",
    answer:
      "Spray jet cleaning drives pressurised solution at parts through nozzles, adding mechanical impingement to the chemistry. It is the fastest method on open geometry, but it cannot reach blind holes or shadowed faces, and it demands a low-foam concentrate — aerated solution cavitates the pump and collapses wash pressure.",
    intro:
      "Spray washing is the method to move volume. On open geometry it cleans faster and at lower concentration than a soak tank on the same soil, which is why production lines standardise on it — and why foam, its one recurring failure, is worth understanding properly.",
    photo: "/photos/spray-mist.webp",
    photoAlt:
      "Cleaning solution spraying and splashing across a dark metal surface",
    spec: [
      { label: "Concentration", value: "1–5%" },
      { label: "Wash temperature", value: "55–65 °C" },
      { label: "Chemistry", value: "Low-foam only" },
      { label: "Typical cycle", value: "2–6 minutes" },
      { label: "Reaches blind holes", value: "No" },
    ],
    body: [
      "The mechanical component does much of the work. Nozzles deliver solution at pressure, and the impingement shifts soil that chemistry alone would need dwell to remove. Cabinet, tunnel and rotary-basket machines all exploit the same principle, and all of them run faster than an equivalent soak.",
      "The blind spot is geometry. Anything the jet cannot see — deep blind holes, internal galleries, the underside of a nested part — receives only whatever solution flows past it. Fixturing, part orientation and basket rotation matter as much as nozzle pressure, and some parts simply cannot be cleaned this way.",
      "Foam is the failure that recurs. Nozzles and the returning cascade inject enormous quantities of air; an aerated pump chamber cavitates, loses pressure and is eventually damaged. Low-foam chemistry solves it, but only within its temperature window — the surfactant has to clear its cloud point to stop stabilising foam, so a washer run cold will foam with the correct chemical in it.",
    ],
    pitfalls: [
      {
        title: "The bath is below its cloud point",
        body: "The most common cause of foam by a wide margin, and the first thing to check. Reducing the dose weakens cleaning and does not fix it.",
      },
      {
        title: "Coolant carried in on the parts",
        body: "Water-soluble cutting coolant brings its own emulsifiers into the tank. A bath that ran clean for months can start foaming after a coolant change upstream with nothing altered in the wash chemistry.",
      },
      {
        title: "Blind features assumed clean",
        body: "A jet cleans what it can see. Cross-drillings and internal passages need ultrasonic or agitated immersion, not more pressure.",
      },
      {
        title: "Air entrained mechanically",
        body: "A return line free-falling into the tank, or an air leak on the pump suction, produces foam no formulation can suppress.",
      },
    ],
    products: [
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Purpose-built low-foam grade for high-jet spray and tunnel washers." },
      { name: "Power Clean XL", href: "/solutions/power-clean-xl", why: "Heavy-duty alkaline duty where the soil load is high and foam is controlled." },
      { name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14", why: "Neutral pH where aluminium or mixed metals run through the tunnel." },
    ],
    steps: [
      { name: "Confirm the grade is low-foam", text: "A soak or dip formulation put through a spray machine will aerate the pump. Check the product is intended for spray duty." },
      { name: "Bring the bath to temperature", text: "Hold 55–65 °C before starting the cycle. Low-foam behaviour depends on the surfactant clouding out above roughly 45–55 °C." },
      { name: "Set concentration by titration", text: "Start at the low end of the 1–5% band, confirm cleanliness on the actual part, then hold the figure with a weekly titration." },
      { name: "Fixture for line of sight", text: "Orient parts so jets reach the faces that matter and blind holes drain downward; rotate the basket where the machine allows." },
      { name: "Skim, filter and drain", text: "Run a surface skimmer and a bag filter, and hold baskets above the tank for 10–15 seconds so dragged-out solution returns." },
    ],
    faqs: [
      {
        q: "Why does my spray washer foam?",
        a: "Usually because the bath is below the cleaner's cloud point. Low-foam grades rely on the surfactant coming out of solution above roughly 45–55 °C. Run the bath at 55–65 °C and foam collapses. If it still foams at temperature, check for coolant carry-in or stray detergent.",
      },
      {
        q: "Can I use a soak-tank cleaner in a spray machine?",
        a: "No. A dip tank has almost no mechanical energy and tolerates foam; a spray washer injects air continuously, and an aerated pump chamber cavitates, loses wash pressure and is eventually damaged.",
      },
      {
        q: "Is spray washing faster than ultrasonic?",
        a: "On open geometry, considerably — typical spray cycles run 2–6 minutes against 5–15 for ultrasonic. But a jet cannot reach blind holes or shadowed faces, so parts with internal features need ultrasonic or agitated immersion regardless of throughput.",
      },
      {
        q: "Should I add a defoamer?",
        a: "Only where the foam source is genuinely external and cannot be eliminated, such as persistent coolant carry-in. It treats a symptom, and overdosing leaves a film that can cause paint adhesion failures downstream.",
      },
    ],
    related: [
      { label: "Why your spray washer foams", href: "/blog/foam-control-spray-washer" },
      { label: "Spray wash — definition", href: "/glossary/spray-wash" },
      { label: "Cloud point — definition", href: "/glossary/cloud-point" },
      { label: "Which process suits my part?", href: "/blog/ultrasonic-vs-spray-vs-dip-tank" },
    ],
    keywords: [
      "spray jet cleaning",
      "spray washer chemical",
      "tunnel washer cleaning chemical",
      "low foam spray cleaner",
      "impingement cleaning process",
    ],
  },

  {
    slug: "replace-tce",
    name: "Solvent replacement",
    title: "Replacing Trichloroethylene (TCE)",
    metaTitle: "TCE Replacement Solutions",
    metaDescription:
      "Two routes off trichloroethylene: an aqueous line at 1–5% and 55–65 °C, or a high-flash non-chlorinated solvent that drops into existing equipment.",
    answer:
      "There are two honest routes off trichloroethylene. Convert to an aqueous line — wash, rinse, dry at 55–65 °C instead of the 90–100 °C a vapour zone needs — which is cheaper to run and far simpler to comply with. Or drop in a high-flash non-chlorinated solvent where the existing equipment must be kept.",
    intro:
      "Replacing TCE is the work Roovel Solutions has been doing in Indian plants since 2000. It is rarely a chemical swap: the aqueous route changes the process, and choosing between the two routes is really a question of whether the line can be rebuilt.",
    photo: "/photos/blog-tce.webp",
    photoAlt:
      "Industrial degreasing equipment being converted from solvent to aqueous cleaning",
    spec: [
      { label: "TCE vapour zone", value: "90–100 °C" },
      { label: "Aqueous wash", value: "55–65 °C" },
      { label: "Aqueous concentration", value: "1–5%" },
      { label: "Drop-in solvent", value: "PC-S 342, n-propyl bromide" },
      { label: "Rust protection after wash", value: "7–15 days indoors" },
    ],
    body: [
      "TCE earned its place because it dissolves mineral oil on contact and evaporates without residue, so parts leave dry and need no rinse. The costs caught up with it: it is classified as carcinogenic to humans, the vapour zone must be held near boiling, and exposure monitoring, effluent handling and disposal all carry real cost and real liability. A single regulatory action can stop a line.",
      "The aqueous route is the better destination where it is affordable. You gain a rinse and a drying stage, and you lose the 90–100 °C energy load, the exposure controls and the hazardous solvent waste stream. The chemistry runs at 1–5% and 55–65 °C, and carries an inhibitor giving 7–15 days of indoor rust protection so parts survive the gap between wash and assembly.",
      "The drop-in route exists for plants that cannot rebuild the line yet. A high-flash, non-chlorinated solvent runs in the same equipment and removes the carcinogen and the chlorinated waste stream without a capital project. It is a real improvement rather than a final destination.",
    ],
    pitfalls: [
      {
        title: "Treating it as a chemical swap",
        body: "An aqueous conversion adds rinse and dry stages. Bath sizing, cycle time, drainage and drying capacity all have to be planned, or the line runs slower than the one it replaced.",
      },
      {
        title: "Forgetting the flash-rust window",
        body: "TCE left parts dry and oily-clean. Aqueous leaves them wet and chemically bare, and steel flash-rusts within minutes. Inhibition in the cleaner or the final rinse is not optional.",
      },
      {
        title: "No agreed effluent route",
        body: "The spent bath carries the oil taken off your parts. Settle where it goes and what it costs before the trial, not after — this is what usually delays a changeover.",
      },
      {
        title: "Skipping the trial",
        body: "Cleaning performance depends on your soil, your metal and your equipment. Agree pass/fail criteria up front and prove them on your own line.",
      },
    ],
    products: [
      { name: "PC-S 342", href: "/solutions/pc-s-342", why: "High-flash non-chlorinated solvent — drops into existing TCE equipment." },
      { name: "Power Clean XL", href: "/solutions/power-clean-xl", why: "Heavy-duty aqueous route for ferrous machining soils." },
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Low-foam aqueous grade for converted spray and ultrasonic stages." },
    ],
    steps: [
      { name: "Audit the current process", text: "Record soils, substrates, cycle time, throughput and the cleanliness standard the line has to meet today." },
      { name: "Choose the route", text: "Aqueous where the line can take a rinse and dry stage; a high-flash non-chlorinated solvent where the existing equipment must be kept." },
      { name: "Match chemistry in the lab", text: "Send a sample part. The formulation is matched to your actual soil and metal before anything ships in volume." },
      { name: "Agree the effluent route", text: "Confirm where the spent bath goes and what it costs, and whether the receiving party needs the safety data sheet." },
      { name: "Run a supervised trial", text: "Agree pass/fail criteria up front, run on your own equipment, and only move forward if the numbers clear the bar." },
    ],
    faqs: [
      {
        q: "What can replace trichloroethylene?",
        a: "Two routes. An aqueous line at 1–5% and 55–65 °C, which is cheaper to run and far simpler to comply with but adds rinse and dry stages. Or a high-flash non-chlorinated solvent such as PC-S 342, which drops into the existing equipment.",
      },
      {
        q: "Is aqueous cleaning as effective as TCE?",
        a: "On most engineering soils, yes — that is why the substitution works. TCE's advantages were that it needed no rinse and left parts dry; the trade is that you add those stages and lose the carcinogen, the 90–100 °C vapour zone and the hazardous waste stream.",
      },
      {
        q: "What does the changeover cost to run?",
        a: "Compare cost per part, not price per litre. Heating drops from 90–100 °C to 55–65 °C permanently, solvent drag-out and evaporative top-up disappear, and hazardous disposal becomes aqueous effluent — usually more than offsetting the added rinse and dry.",
      },
      {
        q: "Will parts rust after switching to aqueous?",
        a: "Not if the process is right. Power Clean aqueous concentrates carry an in-built inhibitor giving 7–15 days of indoor protection. Parts going to stock or a container need a dedicated rust preventive such as PC RP-636.",
      },
    ],
    related: [
      { label: "Replacing TCE — plant manager's guide", href: "/blog/replacing-tce-plant-guide" },
      { label: "Power Clean vs TCE", href: "/resources/power-clean-vs-tce" },
      { label: "Trichloroethylene — definition", href: "/glossary/trichloroethylene" },
      { label: "Vapour degreasing — definition", href: "/glossary/vapour-degreasing" },
    ],
    keywords: [
      "TCE replacement",
      "trichloroethylene alternative india",
      "replace trichloroethylene degreasing",
      "solvent replacement cleaning",
      "non chlorinated degreaser",
    ],
  },

  {
    slug: "millipore-cleanliness",
    name: "Millipore cleanliness",
    title: "Millipore & Technical Cleanliness",
    metaTitle: "Millipore Cleanliness Solutions",
    metaDescription:
      "Meeting a Millipore or particle-count cleanliness specification — the wash, filtration, rinse and handling chain that decides whether parts pass.",
    answer:
      "Millipore testing washes a component under controlled conditions, draws the extraction fluid through a weighed membrane filter, and reports the residue in milligrams. Passing consistently is a process achievement, not a chemical one: filtration, drag-out control, rinse quality and clean handling matter as much as the bath.",
    intro:
      "Automotive, bearing, injector and hydraulic customers increasingly ship against a weighed cleanliness limit rather than a visual standard. Most failures we are called in for are not cleaning failures at all — the part left the bath clean and was recontaminated afterwards.",
    photo: "/photos/qc-lab.webp",
    photoAlt:
      "Chemist analysing residual particulate from a cleaned component in the laboratory",
    spec: [
      { label: "Reported as", value: "mg per part or per m²" },
      { label: "Often specified with", value: "Particle-size class limits" },
      { label: "Wash chemistry", value: "Low-foam, 1–5%, 55–65 °C" },
      { label: "Final rinse", value: "DI, below 10 µS/cm" },
      { label: "Usual failure cause", value: "Recontamination after washing" },
    ],
    body: [
      "The component is washed under a defined fluid, volume, time and agitation to extract whatever contamination is on it. The extraction fluid is drawn through a membrane filter of known mass, the filter is dried and re-weighed, and the difference is the gravimetric residue. Most automotive specifications then examine the membrane optically and bin particles by size class.",
      "Size matters separately from mass because a gram of fine dust and a single 500 µm hard steel particle can weigh the same and mean completely different things. The dust passes through a hydraulic circuit harmlessly; the particle scores a bore, blocks an orifice or destroys a raceway. Classification into metallic, non-metallic and fibre is diagnostically useful — swarf points at machining, fibres at wipes and packaging.",
      "The wash process has to provide three things: a low-foam concentrate, because the geometry that holds contamination needs ultrasonic or agitated immersion and neither tolerates foam; continuous filtration so removed particles do not come back; and a counter-flow rinse with a deionised final stage below about 10 µS/cm so nothing is left behind as the part dries.",
    ],
    pitfalls: [
      {
        title: "Recontamination downstream of the bath",
        body: "Unfiltered rinse water, dirty baskets, shedding packaging, bare-hand handling and unfiltered drying air all put particles back on a part that left the wash clean. This is the most common cause of a failed result.",
      },
      {
        title: "Extending cycle time instead of auditing handling",
        body: "Longer washing does not fix recontamination. Test straight from the wash and again after packing — the gap between those two numbers tells you which problem you have.",
      },
      {
        title: "Mains water on the final rinse",
        body: "Indian industrial mains commonly runs 300–800 µS/cm, and every dissolved solid stays on the part when the water evaporates.",
      },
      {
        title: "No bath filtration",
        body: "Swarf and grinding fines accumulate until they redeposit. Filtration on the wash, and often on the rinse too, is part of the specification rather than an upgrade.",
      },
    ],
    products: [
      { name: "Power Clean LF", href: "/solutions/power-clean-lf", why: "Low foam — required for the ultrasonic and agitated stages cleanliness work depends on." },
      { name: "Power Clean NF-14", href: "/solutions/power-clean-nf-14", why: "Neutral pH where the components are aluminium, brass or mixed." },
      { name: "PC RP-636", href: "/solutions/pc-rp-636", why: "Protects the cleaned part through storage and transit without adding particulate." },
    ],
    steps: [
      { name: "Baseline twice", text: "Test parts straight from the wash, then again after normal handling and packing. The gap identifies whether the problem is cleaning or recontamination." },
      { name: "Fix the larger gap first", text: "In most plants that is the handling chain — baskets, packaging, gloves and drying air — not the bath." },
      { name: "Add filtration progressively", text: "Wash first, then rinse, re-testing after each change rather than altering everything at once." },
      { name: "Control drag-out", text: "Hold baskets above the tank for 10–15 seconds with blind holes facing down, so dragged solution and its suspended particles stay in the wash." },
      { name: "Finish on DI", text: "Use a counter-flow rinse with a deionised final stage below 10 µS/cm, then dry completely including internal features." },
    ],
    faqs: [
      {
        q: "What is a Millipore value?",
        a: "The mass of residual particulate recovered from a component by a standardised extraction wash, captured on a membrane filter and weighed. It is reported in milligrams per part or per square metre and is the standard cleanliness specification for bearings, injectors and hydraulic components.",
      },
      {
        q: "Why do parts fail Millipore after a good wash?",
        a: "Usually because they were recontaminated afterwards. Unfiltered rinse water, dirty baskets, shedding packaging, bare-hand handling and unfiltered drying air all add particles downstream of the bath.",
      },
      {
        q: "What chemistry is needed to meet a cleanliness spec?",
        a: "A low-foam aqueous concentrate at 1–5% and 55–65 °C, because the geometry that holds contamination needs ultrasonic or agitated immersion and neither works with a foaming cleaner. Chemistry alone will not pass the test without filtration, a DI rinse and controlled handling.",
      },
      {
        q: "How clean does the final rinse have to be?",
        a: "Deionised and typically below 10 µS/cm conductivity. Mains water in Indian industrial areas commonly runs 300–800 µS/cm, and everything dissolved in it is left on the part when the water evaporates.",
      },
    ],
    related: [
      { label: "Millipore cleanliness testing explained", href: "/blog/millipore-cleanliness-testing" },
      { label: "Millipore value — definition", href: "/glossary/millipore-value" },
      { label: "Particle count — definition", href: "/glossary/particle-count" },
      { label: "Bearing manufacturing", href: "/industries/bearing-manufacturing" },
    ],
    keywords: [
      "millipore cleanliness",
      "technical cleanliness india",
      "component cleanliness specification",
      "residual dirt analysis",
      "particle count cleaning",
    ],
  },
];

export const getMethod = (slug: string) => methods.find((m) => m.slug === slug);

/**
 * Methods and the six product deep-dives share the /solutions/[slug] segment.
 * A collision would silently shadow one with the other, so fail the build.
 */
import { solutions } from "./solutions";
const clash = methods
  .map((m) => m.slug)
  .filter((slug) => solutions.some((s) => s.slug === slug));
if (clash.length) {
  throw new Error(
    `Method slug collides with a solution slug under /solutions: ${clash.join(", ")}`
  );
}
