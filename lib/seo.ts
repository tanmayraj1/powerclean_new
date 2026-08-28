import { siteConfig } from "./site-config";

/**
 * Canonical site URL. Vercel deploys read NEXT_PUBLIC_SITE_URL when set;
 * defaults to the current production deployment.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://powerclean-new.vercel.app";

export const SITE_NAME = "Power Clean";

export const DEFAULT_TITLE =
  "Power Clean — Industrial Cleaning Chemicals, Degreasers & Rust Preventives";

export const DEFAULT_DESCRIPTION =
  "Eco-friendly industrial cleaning chemicals from Roovel Solutions Pvt. Ltd., Bangalore — water-based degreasers, ultrasonic and spray cleaners, TCE replacement, cooling tower chemicals and rust preventives. 25+ years of precision cleaning. Cleaner. Safer. Better.";

/** Organization JSON-LD — emitted once in the root layout. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.company,
    brand: { "@type": "Brand", name: "Power Clean" },
    slogan: siteConfig.motto,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phones[0],
    foundingDate: "2011",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "P11, ITI Ancillary Industrial Estate, 2nd Main Rd, Mahadevapura Post",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560048",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.contact.social.facebook,
      siteConfig.contact.social.twitter,
      "https://www.powerclean.in/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: siteConfig.contact.phones[0],
        email: siteConfig.contact.email,
        areaServed: "IN",
        availableLanguage: ["en"],
      },
    ],
  };
}

/** WebSite JSON-LD — emitted once in the root layout. */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function productJsonLd(p: {
  name: string;
  slug: string;
  description: string;
  sku?: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    sku: p.sku,
    description: p.description,
    category: p.category,
    url: `${SITE_URL}/catalogue/${p.slug}`,
    brand: { "@type": "Brand", name: "Power Clean" },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Article schema for the technical guides under /resources */
export function articleJsonLd({
  headline,
  description,
  slug,
  image,
}: {
  headline: string;
  description: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline,
    description,
    image: `${SITE_URL}${image}`,
    mainEntityOfPage: `${SITE_URL}/resources/${slug}`,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };
}

/**
 * LocalBusiness for each office. Local/geographic search ranks on entity
 * completeness — address, geo, hours, service area and contact all present.
 */
export function localBusinessJsonLd() {
  const base = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    priceRange: "$$",
    image: `${SITE_URL}/og.png`,
    url: SITE_URL,
    email: siteConfig.contact.email,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "State", name: "Karnataka" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Gujarat" },
    ],
    knowsAbout: [
      "Industrial cleaning chemicals",
      "Aqueous degreasing",
      "Ultrasonic cleaning chemistry",
      "Trichloroethylene (TCE) replacement",
      "Cooling tower descaling",
      "Rust prevention and removal",
    ],
  };

  return [
    {
      ...base,
      "@id": `${SITE_URL}/#bangalore`,
      name: "Power Clean — Roovel Solutions (Bangalore Factory)",
      description:
        "Manufacturing plant, formulation lab and QC lab for Power Clean industrial cleaning chemicals.",
      telephone: siteConfig.contact.offices[0].phone,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "P11, ITI Ancillary Industrial Estate, 2nd Main Rd, Mahadevapura Post",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        postalCode: "560048",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 12.9899, longitude: 77.6959 },
    },
    {
      ...base,
      "@id": `${SITE_URL}/#chennai`,
      name: "Power Clean — Roovel Solutions (Chennai Registered Office)",
      description:
        "Registered office of Roovel Solutions Pvt. Ltd., the manufacturer of Power Clean industrial cleaning chemicals.",
      telephone: siteConfig.contact.offices[1].phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "#14, Old #18, Sayee Nagar Annexe, 1st Main Rd, Virugambakkam",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600092",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 13.0524, longitude: 80.1918 },
    },
  ];
}

/** CollectionPage + ItemList — helps engines understand a listing page. */
export function itemListJsonLd({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: it.url,
      })),
    },
  };
}

/** The end-to-end cleaning programme, as a Service entity. */
export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#service`,
    serviceType: "Industrial cleaning chemical supply and process engineering",
    name: "End-to-end industrial cleaning programme",
    description:
      "Roovel Solutions studies your components and contaminants, validates chemistry in the lab, runs a supervised trial on your line, and supplies the matched Power Clean product with ongoing technical support.",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Automotive, aerospace, bearing, electrical and general engineering manufacturers",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Power Clean product families",
      itemListElement: [
        "Water-based cleaners and degreasers",
        "Cooling tower descalers and biocides",
        "Solvent cleaners and TCE replacements",
        "Rust preventives and rust removers",
      ].map((n) => ({
        "@type": "OfferCatalog",
        name: n,
      })),
    },
  };
}

/** HowTo schema — procedural content is heavily favoured by AI answer engines. */
export function howToJsonLd({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/** Blog post schema with full E-E-A-T signals. */
export function blogPostJsonLd({
  headline,
  description,
  slug,
  image,
  datePublished,
  dateModified,
  wordCount,
  keywords,
}: {
  headline: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  dateModified: string;
  wordCount: number;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${slug}#post`,
    headline,
    description,
    image: `${SITE_URL}${image}`,
    datePublished,
    dateModified,
    wordCount,
    keywords: keywords.join(", "),
    inLanguage: "en-IN",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
    author: {
      "@type": "Organization",
      name: "Power Clean Applications Team",
      url: `${SITE_URL}/about`,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: {
      "@type": "Thing",
      name: "Industrial cleaning chemicals",
    },
    // voice assistants and AI readers lift the summary first
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".article-answer", "h1"],
    },
  };
}
