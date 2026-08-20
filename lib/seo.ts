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
