import type { NextConfig } from "next";

/**
 * Redirects carrying the old ASP.NET site to this one.
 *
 * Built from the old site's 42-URL sitemap PLUS six URLs that earn search
 * traffic but were never listed in it — including a 2 MB brochure PDF that is
 * the site's fourth-biggest earner. Mapped 1:1 against Search Console data:
 * these cover every one of the 1,569 clicks powerclean.in earned in the three
 * months to 14 Nov 2026, and every destination was checked live.
 *
 * Nothing points at the homepage. Google reads a mass redirect to "/" as a
 * soft 404 and drops the page rather than transferring its authority.
 *
 * Capitalised sources are repeated in lowercase because Next matches
 * case-sensitively and Google has both forms indexed.
 */
const OLD_SITE_REDIRECTS = [
      { source: "/About.aspx", destination: "/about", permanent: true },
      { source: "/about.aspx", destination: "/about", permanent: true },
      { source: "/acid-inhibitor-hcl.aspx", destination: "/products/power-clean-hi32", permanent: true },
      { source: "/adhesive-remover.aspx", destination: "/products/power-clean-ar", permanent: true },
      { source: "/aluminium-brightener.aspx", destination: "/products/power-clean-alb", permanent: true },
      { source: "/aluminium-brightner.aspx", destination: "/products/power-clean-alb", permanent: true },
      { source: "/aluminium-cleaner-LF59.aspx", destination: "/products/power-clean-lf-59", permanent: true },
      { source: "/aluminium-cleaner-lf59.aspx", destination: "/products/power-clean-lf-59", permanent: true },
      { source: "/aluminium-cleaner.aspx", destination: "/products/power-clean-nf-14", permanent: true },
      { source: "/aqueous-cleaning-methods.aspx", destination: "/resources/aqueous-cleaning-methods", permanent: true },
      { source: "/aqueous-cleaning.aspx", destination: "/resources/what-is-aqueous-cleaning", permanent: true },
      { source: "/articles.aspx", destination: "/resources", permanent: true },
      { source: "/benefits-of-power-clean-degreaser.aspx", destination: "/resources/benefits-of-power-clean", permanent: true },
      { source: "/bin-washing-cleaning-chemical.aspx", destination: "/products/power-clean-bw-77", permanent: true },
      { source: "/citrus-degreaser-cleaner.aspx", destination: "/products/power-clean-cd-9", permanent: true },
      { source: "/cleaning-solvent.aspx", destination: "/products/solvent", permanent: true },
      { source: "/cleaning-videos.aspx", destination: "/cleaning-videos", permanent: true },
      { source: "/coil-cleaner.aspx", destination: "/products/power-clean-co", permanent: true },
      { source: "/contact.aspx", destination: "/contact", permanent: true },
      { source: "/cooling-tower-cleaning-chemicals.aspx", destination: "/products/cooling", permanent: true },
      { source: "/copper-brass-cleaner.aspx", destination: "/products/power-clean-de-33", permanent: true },
      { source: "/degreaser-india.aspx", destination: "/products/power-clean-xl", permanent: true },
      { source: "/engine-cleaner.aspx", destination: "/products/power-clean-cr21", permanent: true },
      { source: "/enquire-housekeeping.aspx", destination: "/contact", permanent: true },
      { source: "/floor-cleaning-chemical.aspx", destination: "/products/power-clean-fc235", permanent: true },
      { source: "/gallery.aspx", destination: "/cleaning-videos", permanent: true },
      { source: "/glass-cleaner.aspx", destination: "/products/power-clean-gc", permanent: true },
      { source: "/housekeeping-chemicals.aspx", destination: "/industries/plant-facility", permanent: true },
      { source: "/multi-stage-ultrasonic-cleaners.aspx", destination: "/solutions/ultrasonic-cleaning", permanent: true },
      { source: "/phosphating-chemical.aspx", destination: "/products/power-clean-sip", permanent: true },
      { source: "/privacy-policy.aspx", destination: "/privacy", permanent: true },
      { source: "/products-list-all.aspx", destination: "/products/quick-view", permanent: true },
      { source: "/products-list.aspx", destination: "/products", permanent: true },
      { source: "/Questions2.aspx", destination: "/questionnaire", permanent: true },
      { source: "/questions2.aspx", destination: "/questionnaire", permanent: true },
      { source: "/Questions3.aspx", destination: "/questionnaire", permanent: true },
      { source: "/questions3.aspx", destination: "/questionnaire", permanent: true },
      { source: "/reasons-to-use-power-clean-degreaser.aspx", destination: "/resources/five-reasons-to-switch", permanent: true },
      { source: "/replace-tce.aspx", destination: "/solutions/replace-tce", permanent: true },
      { source: "/rust-preventives.aspx", destination: "/products/rust-preventive", permanent: true },
      { source: "/rust-remover.aspx", destination: "/products/pc-rr-27", permanent: true },
      { source: "/search.aspx", destination: "/products", permanent: true },
      { source: "/spray-cleaner.aspx", destination: "/solutions/power-clean-lf", permanent: true },
      { source: "/spray-wash-cleaner.aspx", destination: "/solutions/spray-jet-cleaning", permanent: true },
      { source: "/stainless-steel-cleaner.aspx", destination: "/products/power-clean-ss", permanent: true },
      { source: "/steel-degreaser-cleaner.aspx", destination: "/solutions/power-clean-xl", permanent: true },
      { source: "/ultrasonic-cleaner-faq.aspx", destination: "/resources/ultrasonic-cleaning-faq", permanent: true },
      { source: "/ultrasonic-cleaner.aspx", destination: "/solutions/ultrasonic-cleaning", permanent: true },
      { source: "/water-based-degreaser.aspx", destination: "/products/aqueous", permanent: true },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/catalogue", destination: "/products", permanent: true },
      {
        source: "/catalogue/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
      // knowledge-hub URLs from the client's architecture diagram
      { source: "/resources/faq", destination: "/faq", permanent: true },
      { source: "/resources/blog", destination: "/blog", permanent: true },
      { source: "/resources/guides", destination: "/resources", permanent: true },
      {
        source: "/industries/facility",
        destination: "/industries/plant-facility",
        permanent: true,
      },
      ...OLD_SITE_REDIRECTS,
      /**
       * Retires the subdomain after cutover, path-preserving.
       *
       * Gated behind an environment variable rather than shipped live: until
       * powerclean.in points at this project, sending new.powerclean.in to it
       * would hand every visitor to the OLD site. Set REDIRECT_SUBDOMAIN=1 in
       * Vercel only once the apex is serving this project.
       *
       * Points at www, not the apex: www is the primary domain in Vercel, so
       * sending the subdomain to the apex cost a second hop on every one of
       * the 130 subdomain URLs Google has indexed.
       */
      ...(process.env.REDIRECT_SUBDOMAIN === "1"
        ? [
            {
              source: "/:path*",
              has: [{ type: "host" as const, value: "new.powerclean.in" }],
              destination: "https://www.powerclean.in/:path*",
              permanent: true,
            },
          ]
        : []),
    ];
  },
};

export default nextConfig;
