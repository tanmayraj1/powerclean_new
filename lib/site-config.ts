/**
 * Central content store. Real data pulled from the live powerclean.in site is
 * marked REAL; everything marked PLACEHOLDER awaits real material and must not
 * be presented as fact elsewhere.
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
    yearsOfPrecisionCleaning: 25, // REAL — "25+ years", keep as final content
    facilitiesServed: 120, // PLACEHOLDER
    productLines: 20, // REAL-derived — 20+ products in the published catalogue
    applicationsServed: 17, // REAL-derived — count of listed applications
    challengesSolved: 500, // PLACEHOLDER
    partnerRating: 4.9, // PLACEHOLDER
  },

  // Rotating word in the Home hero — REAL application areas
  heroRotatingWords: [
    "automotive",
    "aerospace",
    "railway",
    "bearing",
    "electrical",
  ],
} as const;

export type Testimonial = { quote: string; name: string; role: string };

export const testimonials: Testimonial[] = [
  {
    // REAL — attributed testimonial from the live site, reworded to card length
    quote:
      "Roovel doesn't just sell a product — they delivered the complete cleaning solution. They helped us source the right machine, provided free chemical samples, and trained our people on the full system.",
    name: "Mani",
    role: "Vice President, TVS Group",
  },
  {
    // PLACEHOLDER
    quote:
      "The dilution guidance alone paid for the program. We were overdosing chemistry for years — their bath monitoring cut consumption by a third.",
    name: "Priya Deshmukh",
    role: "Procurement Lead, Precision Engineering",
  },
  {
    // PLACEHOLDER
    quote:
      "Their applications engineer stood at our washer for a full week during the trial. That level of support is why we standardized across both plants.",
    name: "Amit Kulkarni",
    role: "Production Manager, Aerospace Supplier",
  },
];

export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: "Can one product cover multiple wash processes?",
    a: "Often, yes. Many of our degreasers work across spray, soak, and ultrasonic equipment at different dilutions — and optimum wash temperatures sit at just 55–65 °C, versus 90–100 °C for TCE. During the audit we map every wash point and consolidate chemistry where it is safe to do so.",
  },
  {
    q: "Are your formulations safe on aluminium and alloys?",
    a: "We formulate inhibited, pH-controlled products specifically for soft metals. Substrate compatibility is tested in our lab on your actual parts before anything is recommended.",
  },
  {
    q: "What safety documentation do you provide?",
    a: "Every product ships with an SDS, dosing and PPE guidance, and storage instructions. Ongoing programs include site-specific compliance files and operator training.",
  },
  {
    q: "How do plant trials work?",
    a: "We agree pass/fail criteria up front, run the trial on your equipment with our engineer on-site, and you only move forward if the numbers clear the bar.",
  },
  {
    q: "What are your supply lead times?",
    a: "We supply nationwide from Bangalore and through distributors in major metropolitan cities — every enquiry is answered within 24 hours, and scheduled supply programs keep buffer stock for your line.",
  },
];

export const contactFaqs: Faq[] = [
  {
    q: "How do I start a product trial?",
    a: "Send us a sample part or describe your process through the form above. Our lab tests your soils and substrates, then proposes a supervised on-line trial with agreed pass/fail criteria.",
  },
  {
    q: "Do you serve plants outside Bangalore?",
    a: "Yes — we supply plants across India and have distributors in major metropolitan cities. Call us and we will connect you with your nearest distributor; every enquiry is answered within 24 hours.",
  },
  {
    q: "Can you match a competitor product?",
    a: "Usually. Share the SDS or a sample of your current chemistry and we will benchmark our equivalent grade against it in the lab — and on your line if it clears.",
  },
  {
    q: "Is there a minimum order quantity?",
    a: "You can begin with a single 35L pail per product line — packing runs 35L, 50L, 200L and 1000L, with custom packing available. Trials and chemical samples are supplied free of charge for qualified applications.",
  },
  {
    q: "What documentation comes with each product?",
    a: "Every shipment includes an SDS, dosing and PPE guidance, and a certificate of analysis. Compliance files and audit support are available on ongoing programs.",
  },
];

export type CaseStudyItem = { kind: string; title: string; body: string };

// PLACEHOLDER case studies/events — the solvent-replacement theme reflects the
// real TCE-replacement story (Roovel has replaced TCE in India since 2000).
export const caseStudies: CaseStudyItem[] = [
  {
    kind: "CASE STUDY",
    title: "Solvent-free conversion, auto parts",
    body: "A tier-1 supplier replaced trichloroethylene vapor degreasing with a Power Clean aqueous process — cutting wash cost 31% and eliminating solvent permits entirely.",
  },
  {
    kind: "WEBINAR",
    title: "Getting descaling chemistry right",
    body: "A 40-minute session with our lab on inhibited descaling for heat exchangers: selecting acids, protecting base metal, and verifying passivation afterwards. Register to join live in August.",
  },
  {
    kind: "EVENT",
    title: "Manufacturing Solutions Expo 2026",
    body: "Meet our applications team at Hall 4, Booth 212 — bring a contaminated sample part and we will run a live cleaning demonstration at the stand.",
  },
  {
    kind: "CASE STUDY",
    title: "CIP program, food processing plant",
    body: "A beverage bottler consolidated seven cleaning products into three Power Clean lines, simplifying audits and cutting chemical spend 22% year-on-year.",
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

export type Resource = { title: string; byline: string; image: string };

// PLACEHOLDER articles
export const resources: Resource[] = [
  {
    title: "Staying Ahead of Safety & Compliance in Industrial Cleaning",
    byline: "Technical Team · June 2026",
    image: "Photo — safety equipment and compliance signage",
  },
  {
    title: "Switching From Solvent-Based to Water-Based Cleaning",
    byline: "Applications Lab · May 2026",
    image: "Photo — water-based solution replacing solvent drums",
  },
  {
    title: "Reducing Downtime With Smarter Wash Processes",
    byline: "Process Engineering · April 2026",
    image: "Photo — washer machinery close-up, maintenance",
  },
];

export type Milestone = { year: string; title: string; body: string };

// PLACEHOLDER — the live site's About page is "Coming Soon"; no real timeline
// exists. Do not present these as company history until real material arrives.
export const milestones: Milestone[] = [
  {
    year: "2014",
    title: "Formulation bench founded",
    body: "Roovel Solutions sets up a two-person formulation bench to solve degreasing problems its own engineering clients kept hitting.",
  },
  {
    year: "2017",
    title: "Power Clean brand launched",
    body: "The first branded product line — three water-based degreasers — ships to a dozen plants across northern India.",
  },
  {
    year: "2019",
    title: "In-house applications lab",
    body: "A dedicated applications lab opens, making substrate testing and plant-trial validation part of every recommendation.",
  },
  {
    year: "2021",
    title: "ISO-aligned production",
    body: "Production moves to a purpose-built facility with batch-wise QC and ISO-aligned processes end to end.",
  },
  {
    year: "2023",
    title: "100th facility onboarded",
    body: "The hundredth manufacturing facility switches to a Power Clean program — most converting away from solvent-based cleaning.",
  },
  {
    year: "2026",
    title: "Full-range chemistry partner",
    body: "Twenty product lines across degreasing, descaling, rust protection, and solvent replacement, supplied across seventeen applications.",
  },
];

export type TeamMember = { name: string; role: string; image: string };

// PLACEHOLDER — no real team bios exist on the live site.
export const team: TeamMember[] = [
  {
    name: "Dr. Kavita Sharma",
    role: "Head of R&D & Formulation",
    image: "Portrait — R&D head, lab coat, studio-lit",
  },
  {
    name: "Arjun Patel",
    role: "Lead Applications Engineer",
    image: "Portrait — applications engineer, factory background",
  },
  {
    name: "Meera Iyer",
    role: "Quality Control Lead",
    image: "Portrait — QC lead at stainless bench",
  },
  {
    name: "Rohit Verma",
    role: "Head of Technical Sales",
    image: "Portrait — technical sales head, workwear",
  },
];

export const industryOptions = [
  "Automotive",
  "Aerospace & Defense",
  "Railways & Airlines",
  "Bearing Manufacturing",
  "Electrical & Electronics",
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
