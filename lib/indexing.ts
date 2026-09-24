/**
 * Which pages may be indexed while the new site runs alongside the old one.
 *
 * The old site has 42 indexed pages covering products, ultrasonic cleaning,
 * aqueous cleaning, TCE replacement, spray wash, cooling tower chemistry,
 * videos, contact and the questionnaire. Any new page on the same subject
 * competes with a page that already ranks — and Google shows one result per
 * query, so the realistic outcome is not two listings but the weaker of the
 * two replacing the stronger. The new subdomain has no age and no backlinks,
 * so it is the weaker one.
 *
 * These sections have no equivalent on the old site at all, so nothing of
 * theirs can be displaced:
 *
 *   /blog                         15 buyer-intent articles
 *   /glossary                     44 defined terms
 *   /industries                   11 sector pages
 *   /industrial-cleaning-chemicals  service-area pages
 *   /resources/case-studies       measured plant results
 *   /clients                      customer list
 *
 * Deliberately NOT here, because the old site ranks for them already:
 * /products (products-list.aspx and 20 product pages), /solutions
 * (ultrasonic-cleaner.aspx, replace-tce.aspx, spray-wash-cleaner.aspx),
 * /resources guides (aqueous-cleaning.aspx, articles.aspx), /faq
 * (ultrasonic-cleaner-faq.aspx), /cleaning-videos (cleaning-videos.aspx),
 * /contact, /questionnaire (Questions2.aspx), /privacy, and the home page.
 *
 * All of those become indexable the moment powerclean.in itself points at
 * this project — this list only applies to the other hosts.
 */
export const INDEXABLE_PREFIXES = [
  "/blog",
  "/glossary",
  "/industries",
  "/industrial-cleaning-chemicals",
  "/resources/case-studies",
  "/clients",
];

/** Hosts that are the real site, where everything may be indexed. */
export const PRODUCTION_HOSTS = (
  process.env.INDEXABLE_HOSTS ?? "powerclean.in,www.powerclean.in"
)
  .split(",")
  .map((h) => h.trim().toLowerCase())
  .filter(Boolean);

export function isProductionHost(host: string): boolean {
  return PRODUCTION_HOSTS.includes(host.split(":")[0].toLowerCase());
}

/** True when this path is one of the new-content sections. */
export function isIndexablePath(pathname: string): boolean {
  return INDEXABLE_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}
