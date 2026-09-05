/**
 * City service-area pages (local / geographic SEO).
 *
 * HONESTY NOTE — read before editing.
 * Roovel Solutions has exactly two premises: the Bangalore manufacturing
 * plant and the Chennai registered office. Every other city below is a
 * SERVICE AREA supplied from Bangalore, and the copy says so plainly. These
 * pages must never imply a branch, depot, showroom or local staff that does
 * not exist — that is both dishonest and, to Google, a doorway-page spam
 * signal that can get the whole domain demoted. Only the two real premises
 * carry LocalBusiness schema; service areas carry Service schema instead.
 *
 * Industrial cluster names are public geography, not customer claims.
 */

export type LocationPage = {
  slug: string;
  city: string;
  region: string;
  /** true only for the two real premises */
  hasPremises: boolean;
  premisesLabel?: string;
  latitude: number;
  longitude: number;
  metaTitle: string;
  metaDescription: string;
  /** 40–60 word extractable answer */
  answer: string;
  intro: string;
  /** named industrial areas — public geography */
  clusters: string[];
  /** what this market actually makes */
  sectors: { name: string; href: string }[];
  /** honest logistics line */
  supply: string;
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const locationPages: LocationPage[] = [
  {
    slug: "bangalore",
    city: "Bangalore",
    region: "Karnataka",
    hasPremises: true,
    premisesLabel: "Manufacturing plant, formulation lab and QC lab",
    latitude: 12.9899,
    longitude: 77.6959,
    metaTitle: "Industrial Cleaning Chemicals Bangalore",
    metaDescription:
      "Industrial cleaning chemicals manufactured in Bangalore at our ISO 9001 plant in Mahadevapura — degreasers, descalers and rust preventives.",
    answer:
      "Power Clean industrial cleaning chemicals are manufactured in Bangalore by Roovel Solutions Pvt. Ltd., at the ITI Ancillary Industrial Estate in Mahadevapura. The site houses the formulation lab, QC lab and production under one ISO 9001 certified system, supplying degreasers, descalers and rust preventives across Karnataka.",
    intro:
      "Bangalore is where Power Clean is made. The plant at Mahadevapura holds formulation, batch-wise quality control and production on one site, which is why a trial formulation and the drum that eventually ships come out of the same building. For plants in and around the city that means short lead times and the option of an on-site wash trial.",
    clusters: [
      "Peenya Industrial Area",
      "Bommasandra Industrial Area",
      "Jigani Industrial Area",
      "Mahadevapura",
      "Whitefield / EPIP",
      "Doddaballapur",
      "Nelamangala",
      "Harohalli",
    ],
    sectors: [
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Aerospace & Defence", href: "/industries/aerospace-defence" },
      { name: "General Engineering", href: "/industries/general-engineering" },
      { name: "Electrical & Electronics", href: "/industries/electrical-electronics" },
    ],
    supply:
      "Supplied directly from the Mahadevapura plant, in packs from 20 L pails to 1000 L containers.",
    faqs: [
      {
        q: "Where are Power Clean cleaning chemicals manufactured in Bangalore?",
        a: "At P11, ITI Ancillary Industrial Estate, 2nd Main Road, Mahadevapura Post, Bangalore 560048. The site holds the formulation lab, QC lab and production under an ISO 9001 certified system.",
      },
      {
        q: "Can you run a wash trial at our Bangalore plant?",
        a: "Yes. The usual sequence is a sample part and a description of your soil and equipment, a lab match, then a supervised trial on your own line. Being in the same city makes that straightforward to schedule.",
      },
      {
        q: "What is the minimum order quantity?",
        a: "Trials normally start with a single 20 L pail. Bulk supply goes up to 1000 L containers once the process is proven.",
      },
    ],
    keywords: [
      "industrial cleaning chemicals bangalore",
      "degreaser manufacturer bangalore",
      "cleaning chemical supplier bangalore",
      "industrial degreaser peenya bommasandra",
    ],
  },
  {
    slug: "chennai",
    city: "Chennai",
    region: "Tamil Nadu",
    hasPremises: true,
    premisesLabel: "Registered office of Roovel Solutions Pvt. Ltd.",
    latitude: 13.0524,
    longitude: 80.1918,
    metaTitle: "Industrial Cleaning Chemicals Chennai",
    metaDescription:
      "Industrial cleaning chemicals for Chennai's automotive belt — Ambattur, Sriperumbudur and Oragadam. Degreasers, TCE replacements and rust preventives.",
    answer:
      "Power Clean supplies industrial cleaning chemicals across Chennai's automotive belt — Ambattur, Sriperumbudur, Oragadam and Irungattukottai. Roovel Solutions Pvt. Ltd. is registered in Chennai and manufactures at its Bangalore plant, shipping aqueous degreasers, TCE replacements, descalers and rust preventives to plants throughout Tamil Nadu.",
    intro:
      "Chennai is the registered home of Roovel Solutions Pvt. Ltd. and one of the densest vehicle-manufacturing corridors in Asia. The chemistry that matters here is the mixed-metal case: steel machining soils, aluminium die castings and brass fittings moving through the same wash halls, plus the continuing work of replacing trichloroethylene on precision cleaning lines.",
    clusters: [
      "Ambattur Industrial Estate",
      "Sriperumbudur",
      "Oragadam",
      "Irungattukottai",
      "Maraimalai Nagar",
      "Guindy Industrial Estate",
      "Gummidipoondi",
      "Thiruvallur",
    ],
    sectors: [
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Foundry & Die Casting", href: "/industries/foundry-die-casting" },
      { name: "General Engineering", href: "/industries/general-engineering" },
      { name: "Railways & Fleet", href: "/industries/railways-fleet" },
    ],
    supply:
      "Roovel Solutions is registered in Chennai; product is manufactured at the Bangalore plant and shipped to Tamil Nadu, in packs from 20 L to 1000 L.",
    faqs: [
      {
        q: "Does Power Clean supply industrial cleaning chemicals in Chennai?",
        a: "Yes. Roovel Solutions Pvt. Ltd. is registered in Chennai and supplies the Ambattur, Sriperumbudur, Oragadam and Irungattukottai belts. Manufacturing is at the Bangalore plant and product ships to Tamil Nadu in packs from 20 L to 1000 L.",
      },
      {
        q: "What replaces TCE on a Chennai precision cleaning line?",
        a: "Two routes. An aqueous line — wash, rinse, dry — using a low-foam concentrate at 1–5% and 55–65 °C, which is cheaper to run and far simpler to comply with. Or PC-S 342, a high-flash non-chlorinated solvent, where the existing equipment must be kept.",
      },
      {
        q: "Can you support a trial in Tamil Nadu?",
        a: "Yes. Send a sample part with a description of the soil and wash equipment; the Bangalore lab matches a formulation and returns a dosing and trial plan before anything is shipped in volume.",
      },
    ],
    keywords: [
      "industrial cleaning chemicals chennai",
      "degreaser supplier chennai",
      "cleaning chemical ambattur sriperumbudur",
      "TCE replacement chennai",
    ],
  },
  {
    slug: "hosur",
    city: "Hosur",
    region: "Tamil Nadu",
    hasPremises: false,
    latitude: 12.7409,
    longitude: 77.8253,
    metaTitle: "Industrial Cleaning Chemicals Hosur",
    metaDescription:
      "Industrial degreasers for Hosur's auto and two-wheeler plants — SIPCOT and Bagalur Road, supplied from our Bangalore factory about 40 km away.",
    answer:
      "Power Clean supplies industrial cleaning chemicals to Hosur's SIPCOT industrial estates and auto-component plants from its Bangalore factory, roughly 40 km away. The range covers alkaline and neutral-pH aqueous degreasers, low-foam grades for spray and ultrasonic lines, TCE replacements, descalers and rust preventives.",
    intro:
      "Hosur sits about 40 km from the Bangalore plant, which makes it one of the easiest markets to support properly — short lead times, and a trial visit that does not need an overnight stay. The industrial base is two-wheeler and auto-component manufacturing, so the chemistry demand is mostly mixed-metal machining soils and inter-operation rust protection.",
    clusters: [
      "SIPCOT Industrial Complex, Phase I & II",
      "Bagalur Road industrial belt",
      "Zuzuvadi",
      "Mookandapalli",
      "Thally Road",
    ],
    sectors: [
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Foundry & Die Casting", href: "/industries/foundry-die-casting" },
      { name: "General Engineering", href: "/industries/general-engineering" },
    ],
    supply:
      "Supplied from the Bangalore plant, approximately 40 km away — short lead times on 20 L to 1000 L packs.",
    faqs: [
      {
        q: "Do you supply cleaning chemicals to Hosur SIPCOT?",
        a: "Yes. Hosur is about 40 km from the Bangalore manufacturing plant, so SIPCOT Phase I and II and the Bagalur Road belt are supplied directly with short lead times, in packs from 20 L pails to 1000 L containers.",
      },
      {
        q: "Which cleaner suits two-wheeler component manufacturing?",
        a: "It depends on the metal. Steel and cast iron parts take an alkaline grade such as Power Clean XL; aluminium die castings and mixed baskets need neutral-pH NF-14; spray tunnels and ultrasonic stages need low-foam LF.",
      },
    ],
    keywords: [
      "industrial cleaning chemicals hosur",
      "degreaser supplier hosur sipcot",
      "auto component cleaning chemical hosur",
    ],
  },
  {
    slug: "coimbatore",
    city: "Coimbatore",
    region: "Tamil Nadu",
    hasPremises: false,
    latitude: 11.0168,
    longitude: 76.9558,
    metaTitle: "Industrial Cleaning Chemicals Coimbatore",
    metaDescription:
      "Degreasing and descaling chemistry for Coimbatore's pump, motor and foundry plants — concentrates for castings, machined parts and cooling water.",
    answer:
      "Power Clean supplies industrial cleaning chemicals to Coimbatore's pump, motor, foundry and textile-machinery manufacturers from its Bangalore plant. The typical requirement here is castings and machined components: alkaline degreasers for cast iron, neutral-pH cleaners for aluminium and brass, and inhibited descalers for cooling circuits.",
    intro:
      "Coimbatore's engineering base is built on pumps, motors, foundries and textile machinery — which means a great deal of cast iron, aluminium and brass passing through wash tanks, and a lot of cooling water to keep clean. Both halves of the Power Clean range apply here.",
    clusters: [
      "SIDCO Industrial Estate, Kurichi",
      "Peelamedu",
      "Ganapathy",
      "Arasur",
      "Kinathukadavu",
      "Annur foundry belt",
    ],
    sectors: [
      { name: "Foundry & Die Casting", href: "/industries/foundry-die-casting" },
      { name: "General Engineering", href: "/industries/general-engineering" },
      { name: "Plant & Facility Care", href: "/industries/plant-facility" },
      { name: "Electrical & Electronics", href: "/industries/electrical-electronics" },
    ],
    supply:
      "Supplied from the Bangalore plant to Coimbatore and the surrounding foundry belt, in packs from 20 L to 1000 L.",
    faqs: [
      {
        q: "What cleaner is used for cast iron pump components?",
        a: "An alkaline aqueous concentrate at 2–4% and 55–65 °C removes machining oil and coolant residue from cast iron effectively. Where the same basket also carries brass or aluminium impellers, switch to a neutral-pH grade to avoid etching and discolouration.",
      },
      {
        q: "Do you supply cooling tower chemicals in Coimbatore?",
        a: "Yes. The cooling range includes inhibited descalers safe on copper and brass, and biocides for biofilm control, supplied from the Bangalore plant in packs up to 1000 L.",
      },
    ],
    keywords: [
      "industrial cleaning chemicals coimbatore",
      "degreaser supplier coimbatore",
      "foundry cleaning chemical coimbatore",
      "cooling tower chemicals coimbatore",
    ],
  },
  {
    slug: "pune",
    city: "Pune",
    region: "Maharashtra",
    hasPremises: false,
    latitude: 18.5204,
    longitude: 73.8567,
    metaTitle: "Industrial Cleaning Chemicals Pune",
    metaDescription:
      "Industrial degreasers for Pune's automotive belt — Chakan, Ranjangaon and Pimpri-Chinchwad. Aqueous concentrates, TCE replacements and rust preventives.",
    answer:
      "Power Clean supplies industrial cleaning chemicals to Pune's automotive corridor — Chakan, Ranjangaon, Pimpri-Chinchwad and Talegaon — from its Bangalore manufacturing plant. The range covers alkaline and neutral-pH degreasers, low-foam grades for spray and ultrasonic lines, TCE replacements and rust preventives.",
    intro:
      "Pune's Chakan–Ranjangaon corridor is one of India's largest concentrations of vehicle and component manufacturing, and it runs the full spread of cleaning problems: heavy machining soils on steel, alkaline-sensitive aluminium castings, precision cleanliness specs on bearings and injectors, and a continuing move off chlorinated solvents.",
    clusters: [
      "Chakan MIDC",
      "Ranjangaon MIDC",
      "Pimpri-Chinchwad MIDC",
      "Talegaon MIDC",
      "Bhosari MIDC",
      "Hinjawadi",
    ],
    sectors: [
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Bearing Manufacturing", href: "/industries/bearing-manufacturing" },
      { name: "Foundry & Die Casting", href: "/industries/foundry-die-casting" },
      { name: "General Engineering", href: "/industries/general-engineering" },
    ],
    supply:
      "Supplied from the Bangalore plant to Maharashtra, in packs from 20 L pails to 1000 L containers.",
    faqs: [
      {
        q: "Do you supply industrial cleaning chemicals in Pune?",
        a: "Yes. Power Clean supplies the Chakan, Ranjangaon, Pimpri-Chinchwad and Talegaon MIDC belts from its Bangalore manufacturing plant, in packs from 20 L to 1000 L. Maharashtra is one of the states covered in the standard service area.",
      },
      {
        q: "How does a trial work if we are not near the plant?",
        a: "Send a sample part with the soil description and wash equipment details. The Bangalore lab matches a formulation and returns a dosing and trial plan, then a 20 L pail is shipped for an on-line trial before any bulk commitment.",
      },
    ],
    keywords: [
      "industrial cleaning chemicals pune",
      "degreaser supplier pune chakan",
      "automotive cleaning chemical pune",
      "MIDC cleaning chemical supplier",
    ],
  },
  {
    slug: "hyderabad",
    city: "Hyderabad",
    region: "Telangana",
    hasPremises: false,
    latitude: 17.385,
    longitude: 78.4867,
    metaTitle: "Industrial Cleaning Chemicals Hyderabad",
    metaDescription:
      "Cleaning chemistry for Hyderabad's aerospace and precision engineering plants — Balanagar, Jeedimetla and Adibatla. Residue-critical neutral-pH grades.",
    answer:
      "Power Clean supplies industrial cleaning chemicals to Hyderabad's aerospace, defence and precision engineering base — Balanagar, Jeedimetla, Adibatla and the Medak belt — from its Bangalore plant. Typical requirements are residue-critical neutral-pH cleaners, low-foam ultrasonic grades and non-chlorinated safety solvents.",
    intro:
      "Hyderabad's engineering profile leans toward aerospace, defence and precision work, which shifts the chemistry requirement: light-alloy compatibility, residue that will not compromise inspection or bonding, and documentation that survives an audit.",
    clusters: [
      "Balanagar Industrial Area",
      "Jeedimetla",
      "Adibatla Aerospace SEZ",
      "Patancheru",
      "Medak industrial belt",
      "Cherlapally",
    ],
    sectors: [
      { name: "Aerospace & Defence", href: "/industries/aerospace-defence" },
      { name: "General Engineering", href: "/industries/general-engineering" },
      { name: "Electrical & Electronics", href: "/industries/electrical-electronics" },
      { name: "Plant & Facility Care", href: "/industries/plant-facility" },
    ],
    supply:
      "Supplied from the Bangalore plant to Telangana, in packs from 20 L to 1000 L.",
    faqs: [
      {
        q: "What cleaning chemical suits aerospace components?",
        a: "Neutral-pH aqueous chemistry in the 7–9 range, because alkaline cleaners etch aluminium and magnesium alloys. Residue control matters as much as cleaning: a film that is harmless on a general engineering part can mask an NDT indication or destroy adhesive bond strength.",
      },
      {
        q: "Is an SDS supplied with every product?",
        a: "Yes. Every Power Clean product ships with a safety data sheet and dosing guidance, and production runs to an ISO 9001 certified system with batch-wise quality control.",
      },
    ],
    keywords: [
      "industrial cleaning chemicals hyderabad",
      "aerospace cleaning chemical hyderabad",
      "degreaser supplier telangana",
    ],
  },
  {
    slug: "mysuru",
    city: "Mysuru",
    region: "Karnataka",
    hasPremises: false,
    latitude: 12.2958,
    longitude: 76.6394,
    metaTitle: "Industrial Cleaning Chemicals Mysuru",
    metaDescription:
      "Industrial degreasers and rust preventives for Mysuru's auto-ancillary plants — Hebbal, Belagola, Hootagalli and Nanjangud industrial areas.",
    answer:
      "Power Clean supplies industrial cleaning chemicals to Mysuru's auto-ancillary and engineering plants — the Hebbal, Belagola, Hootagalli and Nanjangud industrial areas — from its Bangalore factory about 145 km away, covering aqueous degreasers, low-foam grades and rust preventives.",
    intro:
      "Mysuru's industrial areas host a substantial auto-ancillary and general engineering base within easy reach of the Bangalore plant. The typical requirement is straightforward component degreasing with reliable inter-operation rust protection.",
    clusters: [
      "Hebbal Industrial Area",
      "Belagola Industrial Area",
      "Hootagalli Industrial Area",
      "Metagalli",
      "Nanjangud Industrial Area",
    ],
    sectors: [
      { name: "Automotive", href: "/industries/automotive" },
      { name: "General Engineering", href: "/industries/general-engineering" },
      { name: "Electrical & Electronics", href: "/industries/electrical-electronics" },
    ],
    supply:
      "Supplied from the Bangalore plant, roughly 145 km away, in packs from 20 L to 1000 L.",
    faqs: [
      {
        q: "Do you deliver cleaning chemicals to Mysuru?",
        a: "Yes. Mysuru is about 145 km from the Bangalore manufacturing plant and the Hebbal, Belagola, Hootagalli and Nanjangud industrial areas are supplied directly, in packs from 20 L pails to 1000 L containers.",
      },
      {
        q: "How long are parts protected from rust after washing?",
        a: "Power Clean aqueous concentrates carry an in-built inhibitor giving 7–15 days of indoor protection. For longer storage or transit, PC RP-636 is an oil-based rust preventive giving 3–6 months.",
      },
    ],
    keywords: [
      "industrial cleaning chemicals mysuru",
      "degreaser supplier mysore",
      "auto ancillary cleaning chemical mysuru",
    ],
  },
  {
    slug: "belagavi",
    city: "Belagavi",
    region: "Karnataka",
    hasPremises: false,
    latitude: 15.8497,
    longitude: 74.4977,
    metaTitle: "Industrial Cleaning Chemicals Belagavi",
    metaDescription:
      "Cleaning and descaling chemistry for the Belagavi foundry and machining cluster — Udyambag, Machhe and Auto Nagar. Degreasers and descalers.",
    answer:
      "Power Clean supplies industrial cleaning chemicals to the Belagavi foundry and precision machining cluster — Udyambag, Machhe and Auto Nagar — from its Bangalore plant. The usual requirement is degreasing cast and machined components and keeping cooling circuits free of scale.",
    intro:
      "Belagavi is one of Karnataka's established foundry and precision machining clusters, supplying automotive and hydraulic components. The chemistry demand is casting and machining soils on iron and aluminium, plus cooling water treatment for the melting and machining plant.",
    clusters: [
      "Udyambag Industrial Area",
      "Machhe Industrial Area",
      "Auto Nagar",
      "Honaga Industrial Area",
      "Kanbargi",
    ],
    sectors: [
      { name: "Foundry & Die Casting", href: "/industries/foundry-die-casting" },
      { name: "General Engineering", href: "/industries/general-engineering" },
      { name: "Plant & Facility Care", href: "/industries/plant-facility" },
    ],
    supply:
      "Supplied from the Bangalore plant to north Karnataka, in packs from 20 L to 1000 L.",
    faqs: [
      {
        q: "What removes moulding sand and casting soil?",
        a: "An alkaline aqueous concentrate at 2–4% and 55–65 °C handles the oil and residue; loose sand and fines need bath filtration to stop them redepositing on the next load. Aluminium castings must move to a neutral-pH cleaner to avoid etching.",
      },
      {
        q: "Do you supply cooling tower descalers to Belagavi?",
        a: "Yes. PC S-342 is an inhibited descaler safe on copper and brass, supplied from the Bangalore plant along with biocides for biofilm control.",
      },
    ],
    keywords: [
      "industrial cleaning chemicals belagavi",
      "foundry cleaning chemical belgaum",
      "degreaser supplier north karnataka",
    ],
  },
  {
    slug: "ahmedabad",
    city: "Ahmedabad",
    region: "Gujarat",
    hasPremises: false,
    latitude: 23.0225,
    longitude: 72.5714,
    metaTitle: "Industrial Cleaning Chemicals Ahmedabad",
    metaDescription:
      "Industrial degreasers, descalers and rust preventives for Ahmedabad's engineering belt — Vatva, Naroda, Odhav, Changodar and Sanand GIDC.",
    answer:
      "Power Clean supplies industrial cleaning chemicals across Ahmedabad's engineering and process belt — Vatva, Naroda, Odhav, Changodar and Sanand — from its Bangalore plant, covering aqueous degreasers, cooling tower descalers, biocides and rust preventives in packs up to 1000 L.",
    intro:
      "Gujarat's engineering and process industry runs a wide mix: general fabrication, automotive at Sanand, pharmaceutical and chemical plant. That brings both halves of the range into play — component degreasing on one side, and cooling water and plant maintenance chemistry on the other.",
    clusters: [
      "Vatva GIDC",
      "Naroda GIDC",
      "Odhav GIDC",
      "Changodar",
      "Sanand GIDC",
      "Kathwada",
    ],
    sectors: [
      { name: "General Engineering", href: "/industries/general-engineering" },
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Plant & Facility Care", href: "/industries/plant-facility" },
      { name: "Railways & Fleet", href: "/industries/railways-fleet" },
    ],
    supply:
      "Supplied from the Bangalore plant to Gujarat, in packs from 20 L to 1000 L.",
    faqs: [
      {
        q: "Do you supply industrial cleaning chemicals in Gujarat?",
        a: "Yes. Gujarat is within the standard service area. Product is manufactured at the Bangalore plant and shipped to the Vatva, Naroda, Odhav, Changodar and Sanand belts in packs from 20 L pails to 1000 L containers.",
      },
      {
        q: "What is used for cooling tower scale in a process plant?",
        a: "An inhibited descaler such as PC S-342, circulated until the acid stops depleting, then neutralised and flushed. Long-term control comes from a scale-inhibitor programme with blowdown held at three to six cycles of concentration.",
      },
    ],
    keywords: [
      "industrial cleaning chemicals ahmedabad",
      "degreaser supplier gujarat",
      "GIDC cleaning chemical supplier",
      "cooling tower descaling ahmedabad",
    ],
  },
  {
    slug: "rajkot",
    city: "Rajkot",
    region: "Gujarat",
    hasPremises: false,
    latitude: 22.3039,
    longitude: 70.8022,
    metaTitle: "Industrial Cleaning Chemicals Rajkot",
    metaDescription:
      "Degreasing chemistry for Rajkot's casting, engine and machine-tool cluster — Aji GIDC, Metoda and Shapar-Veraval. Iron and aluminium grades.",
    answer:
      "Power Clean supplies industrial cleaning chemicals to Rajkot's casting, diesel engine and machine-tool cluster — Aji GIDC, Metoda and Shapar-Veraval — from its Bangalore plant. Alkaline concentrates cover cast iron; neutral-pH grades cover aluminium and brass; rust preventives cover storage and transit.",
    intro:
      "Rajkot is a dense cluster of foundries, diesel engine makers, machine-tool builders and forging shops. The cleaning problems are classic heavy engineering — casting and machining soils, mixed iron and aluminium, and rust protection on parts that sit in stock before dispatch.",
    clusters: [
      "Aji GIDC",
      "Metoda GIDC",
      "Shapar-Veraval industrial belt",
      "Bhaktinagar Industrial Area",
      "Lodhika GIDC",
    ],
    sectors: [
      { name: "Foundry & Die Casting", href: "/industries/foundry-die-casting" },
      { name: "General Engineering", href: "/industries/general-engineering" },
      { name: "Automotive", href: "/industries/automotive" },
    ],
    supply:
      "Supplied from the Bangalore plant to Saurashtra, in packs from 20 L to 1000 L.",
    faqs: [
      {
        q: "Which cleaner works on cast iron engine components?",
        a: "An alkaline aqueous concentrate such as Power Clean XL at 2–4% and 55–65 °C. It saponifies the fatty fraction of machining oil and emulsifies the mineral fraction, and the in-built inhibitor gives 7–15 days of indoor rust protection after the wash.",
      },
      {
        q: "How do we protect parts sitting in stock before dispatch?",
        a: "The 7–15 day protection from the cleaner covers short holds. Beyond that, PC RP-636 is an oil-based rust preventive giving 3–6 months with a 10–15 minute touch-dry, and VCI packaging covers sealed long-term storage and sea freight.",
      },
    ],
    keywords: [
      "industrial cleaning chemicals rajkot",
      "degreaser supplier rajkot gujarat",
      "casting cleaning chemical rajkot",
    ],
  },
];

export function getLocation(slug: string) {
  return locationPages.find((l) => l.slug === slug);
}
