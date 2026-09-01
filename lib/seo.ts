import { siteConfig } from "./site-config";

/**
 * Canonical site URL — the final production domain.
 *
 * Everything derives from this: canonicals, OG and Twitter URLs, the sitemap,
 * RSS, llms.txt / llms-full.txt and every schema `@id`. Override it with
 * NEXT_PUBLIC_SITE_URL on a preview deployment; production should use the
 * default so nothing points at a Vercel preview hostname.
 *
 * IMPORTANT: pick ONE host and make the other 301 to it. This is the apex
 * (powerclean.in). If DNS ends up serving www as the primary instead, change
 * this string and redirect the apex — never let both resolve without a
 * redirect, or every page competes with a duplicate of itself.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://powerclean.in";

export const SITE_NAME = "Power Clean";

export const DEFAULT_TITLE =
  "Power Clean — Industrial Cleaning Chemicals India";

export const DEFAULT_DESCRIPTION =
  "Industrial cleaning chemicals from Roovel Solutions, Bangalore — water-based degreasers, TCE replacement, cooling tower chemicals and rust preventives.";

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
    alternateName: ["Power Clean India", "Roovel Solutions"],
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#organization` },
    // the nav search box really does submit to /products?q=… — this is not decorative
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
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
  /** defaults to /products/<slug>; solution pages pass their own path */
  path?: string;
  image?: string;
  /** spec rows become additionalProperty — engines quote these directly */
  properties?: { label: string; value: string }[];
}) {
  const url = `${SITE_URL}${p.path ?? `/products/${p.slug}`}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: p.name,
    sku: p.sku,
    description: p.description,
    category: p.category,
    url,
    inLanguage: "en-IN",
    ...(p.image ? { image: `${SITE_URL}${p.image}` } : {}),
    brand: { "@type": "Brand", name: "Power Clean" },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    ...(p.properties?.length
      ? {
          additionalProperty: p.properties.map((x) => ({
            "@type": "PropertyValue",
            name: x.label,
            value: x.value,
          })),
        }
      : {}),
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

/**
 * The end-to-end cleaning programme, as a Service entity.
 *
 * NOTE: this carries a fixed `@id` and is already emitted site-wide from the
 * root layout. Do not call it again on a page — that produces a duplicate
 * `@id` in the same graph, which the schema validator flags and which makes
 * the entity ambiguous to consumers. Page-scoped services use
 * `localServiceJsonLd` instead.
 */
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

/* ─────────────────────────────────────────────────────────────────────────
 * Second SEO pass — entity, definition and answer schema. These are the
 * types generative engines (ChatGPT, Perplexity, AI Overviews) lean on most
 * heavily when deciding what a page *is* and whether it can be quoted.
 * ───────────────────────────────────────────────────────────────────────── */

/** DefinedTermSet — the glossary as a single citable vocabulary. */
export function definedTermSetJsonLd(
  terms: { term: string; slug: string; short: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${SITE_URL}/glossary#set`,
    name: "Industrial Cleaning Glossary",
    description:
      "Plain-English definitions of the industrial parts-cleaning terms used in Indian manufacturing — chemistry, wash processes, cleanliness measurement and rust protection.",
    url: `${SITE_URL}/glossary`,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#organization` },
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/glossary/${t.slug}#term`,
      name: t.term,
      description: t.short,
      url: `${SITE_URL}/glossary/${t.slug}`,
    })),
  };
}

/** A single glossary entry, as both a DefinedTerm and a citable WebPage. */
export function definedTermJsonLd({
  term,
  slug,
  short,
  alsoKnownAs,
}: {
  term: string;
  slug: string;
  short: string;
  alsoKnownAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${SITE_URL}/glossary/${slug}#term`,
    name: term,
    description: short,
    url: `${SITE_URL}/glossary/${slug}`,
    inDefinedTermSet: { "@id": `${SITE_URL}/glossary#set` },
    ...(alsoKnownAs?.length ? { alternateName: alsoKnownAs } : {}),
  };
}

/**
 * QAPage — one question, one accepted answer. Distinct from FAQPage: search
 * engines treat it as a single authoritative answer rather than a list, which
 * is the shape that wins featured snippets and AI citations.
 */
export function qaPageJsonLd({
  question,
  answer,
  url,
  dateModified,
}: {
  question: string;
  answer: string;
  url: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: question,
      text: question,
      answerCount: 1,
      dateModified,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
        url,
        author: { "@id": `${SITE_URL}/#organization` },
      },
      author: { "@id": `${SITE_URL}/#organization` },
    },
  };
}

/**
 * WebPage with a speakable summary. Applied to every hub and landing page so
 * assistants have an explicit, machine-identified answer block to read out.
 */
export function webPageJsonLd({
  name,
  description,
  path,
  dateModified,
  about,
}: {
  name: string;
  description: string;
  path: string;
  dateModified?: string;
  about?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    ...(dateModified ? { dateModified } : {}),
    ...(about?.length
      ? { about: about.map((a) => ({ "@type": "Thing", name: a })) }
      : {}),
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og.png`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".page-answer", "h1"],
    },
  };
}

/**
 * A service offered into one geographic market. Location pages get this
 * instead of LocalBusiness — we have exactly two real premises, and inventing
 * a third would be both dishonest and a spam signal.
 */
export function localServiceJsonLd({
  city,
  region,
  slug,
  description,
  latitude,
  longitude,
}: {
  city: string;
  region: string;
  slug: string;
  description: string;
  latitude: number;
  longitude: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/industrial-cleaning-chemicals/${slug}#service`,
    serviceType: "Industrial cleaning chemical supply",
    name: `Industrial cleaning chemicals in ${city}`,
    description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: region },
      geo: { "@type": "GeoCoordinates", latitude, longitude },
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/contact`,
      servicePhone: siteConfig.contact.offices[0].phone,
    },
  };
}

/* ── SERP budget helpers ────────────────────────────────────────────────
 * Google truncates titles around 60 characters and descriptions around 158.
 * Anything past that is rendered invisible in results, so keywords placed
 * there are simply wasted. These clamp generated metadata to fit; hand-
 * written copy in the data files is authored inside the budget already.
 * ─────────────────────────────────────────────────────────────────────── */

export const TITLE_MAX = 60;
export const DESC_MAX = 158;

/** Trim to `max` characters on a word boundary, without a dangling ellipsis. */
export function clamp(text: string, max: number): string {
  const t = text.trim().replace(/\s+/g, " ");
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const at = cut.lastIndexOf(" ");
  return (at > max * 0.6 ? cut.slice(0, at) : cut).replace(/[,;:—–-]$/, "").trim();
}

export const metaDesc = (text: string) => clamp(text, DESC_MAX);

/**
 * A title that already carries the brand — "POWER CLEAN XL-16 …" — should not
 * also take the "· Power Clean" template suffix. Returns an absolute title.
 */
export const brandedTitle = (text: string) => ({ absolute: clamp(text, TITLE_MAX) });
