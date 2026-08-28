import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** RSS feed — syndication surface and a crawl signal for new articles. */
export function GET() {
  const items = blogPosts
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}</guid>
      <description>${esc(p.metaDescription)}</description>
      <pubDate>${new Date(p.datePublished + "T00:00:00Z").toUTCString()}</pubDate>
      <category>${esc(p.kicker)}</category>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE_NAME)} — Industrial Cleaning Insights</title>
    <link>${SITE_URL}/blog</link>
    <description>${esc(DEFAULT_DESCRIPTION)}</description>
    <language>en-IN</language>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
