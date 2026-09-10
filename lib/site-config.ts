/**
 * Central content store. Real data pulled from the live powerclean.in site is
 * Every value here is REAL — sourced from powerclean.in, company registration
 * data, or the client's own material. Nothing in this file may be invented:
 * if a fact is unknown, omit the claim rather than estimating it.
 */

export const siteConfig = {
  name: "Power Clean",
  company: "Roovel Solutions Pvt. Ltd.",
  tagline:
    "High-performance industrial cleaning solutions, engineered for modern manufacturing.",
  motto: "Cleaner. Safer. Better.", // REAL brand line

  // REAL — replace-all-placeholder contact block from powerclean.in
  contact: {
    email: "sales@roovel.com",
    phones: ["+91-9731727868", "+91-9731751808"],
    whatsapp: "https://wa.me/+919731727868",
    address:
      "P11, ITI Ancillary Industrial Estate, 2nd Main Rd, Mahadevapura Post, Bangalore, Karnataka 560048",
    addressShort: "Mahadevapura, Bangalore",
    gst: "29AAFCR5939R1ZB",
    cin: "U74120TN2011PTC083325",
    social: {
      facebook: "https://facebook.com/POWER-CLEAN-226680044565032",
      twitter: "https://x.com/powercleanindia",
    },
    // REAL — from powerclean.in/contact.aspx
    offices: [
      {
        label: "Office & Factory — Bangalore",
        address:
          "P11, ITI Ancillary Industrial Estate, 2nd Main Rd, Mahadevapura Post, Bangalore 560048, Karnataka",
        phone: "+91-9731726123",
      },
      {
        label: "Registered Office — Chennai",
        address:
          "#14, Old #18, Sayee Nagar Annexe, 1st Main Rd, Virugambakkam, Chennai 600092, Tamil Nadu",
        phone: "+91-9731727868",
      },
    ],
  },

  // Bangalore (Mahadevapura) — OpenStreetMap embed bounding boxes
  maps: {
    // tighter box around the facility for the About card
    facilityBbox: "77.66%2C12.96%2C77.73%2C13.01",
    // wider Bangalore box for the Contact page map
    cityBbox: "77.52%2C12.87%2C77.80%2C13.08",
  },

  /**
   * REAL — confirmed clients of Roovel Solutions / Power Clean.
   * `file` points at public/logos/<file>; when the official asset is present
   * it renders in place of the wordmark. Drop real logos there to upgrade —
   * every mark is normalised to the same optical size by <ClientLogo>.
   */
  clients: [
    { name: "BOSCH", file: "bosch.svg" },
    { name: "TVS GROUP", file: "tvs.svg" },
    { name: "BHARAT FORGE", file: "bharat-forge.png" },
    { name: "MURUGAPPA GROUP", file: "murugappa.svg" },
    { name: "MINDA GROUP", file: "minda.png" },
    { name: "SANDHAR GROUP", file: "sandhar.png" },
    { name: "AMALGAMATION GROUP", file: "amalgamation.gif" },
  ],

  stats: {
    // ALL REAL / REAL-DERIVED — no invented scale or rating numbers.
    yearsOfPrecisionCleaning: 25, // REAL — "25+ years" on powerclean.in
    productLines: 41, // REAL — products in the published catalogue
    seriesCount: 12, // REAL — series across the four families
    applicationsServed: 33, // REAL — applications listed on powerclean.in
    responseHours: 24, // REAL — "all enquiries answered within 24 hours"
    replacingSolventsSince: 2000, // REAL — "replacing TCE since year 2000"
  },  // Rotating word in the Home hero — REAL application areas
  heroRotatingWords: [
    "automotive",
    "aerospace",
    "railway",
    "bearing",
    "electrical",
  ],
} as const;

export type Testimonial = { quote: string; name: string; role: string };

export const testimonials = [
  // ALL REAL — quotes published on powerclean.in, attributions as printed there.
  {
    quote:
      "Roovel doesn't just sell a product — they provide complete end-to-end cleaning solutions. They help you procure the cleaning machine, provide free samples of cleaning chemical, and then train our employees on how to use the complete solution effectively.",
    name: "Mani",
    role: "Vice President, TVS Group",
  },
  {
    quote:
      "We had corrosion issues after cleaning our mild steel and carbon steel components in our water ultrasonic cleaner. POWER CLEAN SP resolved it — now we clean them with no rust for more than 12 hours before they go to plating.",
    name: "Sub-vendor",
    role: "TVS Group supply chain",
  },
  {
    quote:
      "We tried many aluminium cleaners, but found POWER CLEAN NF to be the best performing.",
    name: "Quality team",
    role: "BOSCH ancillary unit",
  },
  {
    quote:
      "POWER CLEAN SS cleans our stainless parts nicely with a shine. After cleaning we pack them and send them to our international customer. We would recommend it to anyone who uses SS.",
    name: "Patel",
    role: "Amalgamation Group",
  },
  {
    quote:
      "We use POWER CLEAN BW with our bin washing spray equipment. We are very satisfied with this product and would recommend it.",
    name: "Krishnan",
    role: "TVS Group",
  },
  {
    quote:
      "We were able to increase our product quality instantaneously after using POWER CLEAN NF. No more rejections — we consistently meet millipore values.",
    name: "Production head",
    role: "Precision components manufacturer, Chennai",
  },
];

export type Faq = { q: string; a: string; tag: string };

export const homeFaqs: Faq[] = [
  {
    q: "Can one product cover multiple wash processes?",
    a: "Often, yes. Many of our degreasers work across spray, soak, and ultrasonic equipment at different dilutions — and optimum wash temperatures sit at just 55–65 °C, versus 90–100 °C for TCE. During the audit we map every wash point and consolidate chemistry where it is safe to do so.",
    tag: "Products",
  },
  {
    q: "Are your formulations safe on aluminium and alloys?",
    a: "We formulate inhibited, pH-controlled products specifically for soft metals. Substrate compatibility is tested in our lab on your actual parts before anything is recommended.",
    tag: "Products",
  },
  {
    q: "What safety documentation do you provide?",
    a: "Every product ships with an SDS, dosing and PPE guidance, and storage instructions. Ongoing programs include site-specific compliance files and operator training.",
    tag: "Safety",
  },
  {
    q: "How do plant trials work?",
    a: "We agree pass/fail criteria up front, run the trial on your equipment with our engineer on-site, and you only move forward if the numbers clear the bar.",
    tag: "Products",
  },
  {
    q: "What are your supply lead times?",
    a: "We supply nationwide from Bangalore and through distributors in major metropolitan cities — every enquiry is answered within 24 hours, and scheduled supply programs keep buffer stock for your line.",
    tag: "Supply & Logistics",
  },
];

export const contactFaqs: Faq[] = [
  {
    q: "How do I start a product trial?",
    a: "Send us a sample part or describe your process through the form above. Our lab tests your soils and substrates, then proposes a supervised on-line trial with agreed pass/fail criteria.",
    tag: "Products & Trials",
  },
  {
    q: "Do you serve plants outside Bangalore?",
    a: "Yes — we supply plants across India and have distributors in major metropolitan cities. Call us and we will connect you with your nearest distributor; every enquiry is answered within 24 hours.",
    tag: "Company Details",
  },
  {
    q: "Can you match a competitor product?",
    a: "Usually. Share the SDS or a sample of your current chemistry and we will benchmark our equivalent grade against it in the lab — and on your line if it clears.",
    tag: "Products & Trials",
  },
  {
    q: "Is there a minimum order quantity?",
    a: "You can begin with a single 20L pail per product line — packing runs 20L, 50L, 200L and 1000L, with custom packing available. Trials and chemical samples are supplied free of charge for qualified applications.",
    tag: "Supply & Logistics",
  },
  {
    q: "What documentation comes with each product?",
    a: "Every shipment includes an SDS, dosing and PPE guidance, and a certificate of analysis. Compliance files and audit support are available on ongoing programs.",
    tag: "Company Details",
  },
];

export type CaseStudyItem = { kind: string; title: string; body: string };

// REAL — customer results published on powerclean.in; the solvent-replacement theme reflects the
// real TCE-replacement story (Roovel has replaced TCE in India since 2000).
export const caseStudies: CaseStudyItem[] = [
  // ALL REAL — customer results published on powerclean.in (attributions are
  // anonymised there exactly as reproduced below).
  {
    kind: "CASE STUDY",
    title: "White-rust defects cut from 3.2% to 0.4%",
    body: "After switching to POWER CLEAN LF-59 for ADC12 engine housings, a major automotive OEM in Bengaluru saw white-rust defects fall from 3.2% to 0.4% within 45 days.",
  },
  {
    kind: "CASE STUDY",
    title: "20% faster cycle time on a spray tunnel",
    body: "A home-appliance components supplier running 6000-series aluminium extrusions achieved 20% faster cycle time with POWER CLEAN LF-59 in low-foam mode — turnaround improved and re-works dropped.",
  },
  {
    kind: "CASE STUDY",
    title: "One bath for aluminium, brass and copper",
    body: "An export-focused precision components house now runs aluminium, brass and copper parts in the same bath: one process for all non-ferrous work, less downtime and a lower cost per part.",
  },
  {
    kind: "CASE STUDY",
    title: "Flash rust eliminated before plating",
    body: "A TVS Group sub-vendor had corrosion appearing on mild and carbon steel parts after ultrasonic cleaning. With POWER CLEAN SP the parts now hold with no rust for more than 12 hours before plating.",
  },
];

export type Industry = { title: string; body: string; icon: string };

// REAL application areas from powerclean.in, grouped into six cards to match
// the design grid. Icon keys map to inline SVGs in the Industries section.
export const industries: Industry[] = [
  {
    title: "Automotive",
    icon: "car",
    body: "Component degreasing, carburetor and piston cleaning, engine, brake, and axle/wheel cleaning for OEMs and tier suppliers.",
  },
  {
    title: "Aerospace & Defense",
    icon: "plane",
    body: "Cleaning programs for military aircraft and ship maintenance, and residue-critical aerospace components.",
  },
  {
    title: "Railways & Airlines",
    icon: "train",
    body: "Locomotive and railway cleaning, airline fleet applications, and interior tank-truck cleaning.",
  },
  {
    title: "Bearing Manufacturing",
    icon: "gear",
    body: "Millipore-level precision cleaning for bearing components in ultrasonic and immersion systems.",
  },
  {
    title: "Electrical & Electronics",
    icon: "chip",
    body: "Electrical cleaning and low-residue work on aluminium, copper, and brass parts and assemblies.",
  },
  {
    title: "Plant & Facility Care",
    icon: "tool",
    body: "Industrial floor cleaning, AHU coil cleaning, dip tank and immersion systems, and bin/tray washing.",
  },
];


export type Milestone = { year: string; title: string; body: string };

// REAL anchors only — see the array comment below; the live About page was "Coming Soon" so no
// exists. Do not present these as company history until real material arrives.
export const milestones = [
  // REAL anchors only — drawn from powerclean.in and company registration data.
  // No invented events; anything undated is described without a year.
  {
    year: "2000",
    title: "Replacing toxic solvents",
    body: "Roovel begins replacing trichloroethylene, diesel, kerosene and naphtha in Indian plants with biodegradable aqueous chemistry — the work that still defines the company.",
  },
  {
    year: "2011",
    title: "Roovel Solutions Pvt. Ltd.",
    body: "The business is incorporated as a private limited company registered in Tamil Nadu (CIN U74120TN2011PTC083325), with its registered office in Chennai.",
  },
  {
    year: "ISO 9001",
    title: "Certified quality system",
    body: "Manufacturing and quality control run to an ISO 9001 certified system at the Bangalore facility — formulation lab, QC lab and batch-wise testing under one roof.",
  },
  {
    year: "Today",
    title: "41 products, four families",
    body: "The range spans 41 products across water-based cleaning, cooling-water treatment, solvent replacement and rust protection — supplied with dosing guidance and an SDS, and trusted by BOSCH, TVS, Bharat Forge and the Murugappa Group.",
  },
];


// Mirrors lib/industries.ts so an enquiry can name the sector it came from and
// land on the same vocabulary the matching industry page uses.
export const industryOptions = [
  "Automotive",
  "Aerospace & Defense",
  "Railways & Airlines",
  "Bearing Manufacturing",
  "Electrical & Electronics",
  "Foundry & Die Casting",
  "Home Appliance & Cookware",
  "Tools & Cutting",
  "Earth Moving",
  "Plant & Facility",
  "General Engineering",
  "Other",
];

// REAL — the applications list published on the live powerclean.in homepage,
// grouped for the home-page applications index.
export const applicationsIndex: { group: string; items: string[] }[] = [
  {
    group: "Component Cleaning",
    items: [
      "Automotive components cleaning",
      "Carburettor & piston cleaning",
      "Engine cleaning & degreasing",
      "Piston ring degreasing",
      "Brake cleaning",
      "Axle & wheel cleaning",
      "Bearing manufacturing",
      "Electrical & electronics parts",
      "Carbon deposit removal",
    ],
  },
  {
    group: "Wash Processes",
    items: [
      "Ultrasonic cleaning",
      "Spray wash cleaning",
      "Dip tank cleaning",
      "Immersion cleaning",
      "Bin & tray washing",
      "Buffing & lapping paste removal",
    ],
  },
  {
    group: "Chemistry Needs",
    items: [
      "Heavy-duty degreasers",
      "Neutral pH cleaners",
      "Low pH & alkaline cleaners",
      "Citrus degreasers",
      "Safety solvents",
      "Rust inhibitors & rust removers",
      "Rinse & drying agents",
      "Ink & adhesive removers",
      "Defluxers & rosin removers",
      "Paint strippers",
      "Aluminium cleaners & brighteners",
      "Copper & brass cleaners",
    ],
  },
  {
    group: "Fleet & Facility",
    items: [
      "Military aircraft & ship maintenance",
      "Railways & locomotive cleaning",
      "Airline fleet cleaning",
      "Interior tank-truck cleaning",
      "AHU & HVAC coil cleaning",
      "Industrial floor cleaning",
    ],
  },
];
