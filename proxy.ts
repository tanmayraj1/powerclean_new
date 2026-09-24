import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Keeps search engines out of every host except the real one.
 *
 * While the new site runs alongside the old one, it is served from a
 * subdomain. Google treats a subdomain as a separate site, so if it indexed
 * those pages they would compete with powerclean.in for the same terms and
 * split the rankings the parallel run exists to protect. The subdomain is
 * therefore live for people and invisible to search.
 *
 * `X-Robots-Tag` rather than a robots.txt Disallow: a disallowed page can
 * still be indexed from links elsewhere, because the crawler is never allowed
 * to fetch it and see the instruction. This header is unambiguous.
 *
 * At cutover, point powerclean.in at this project and the header stops being
 * sent for it — no code change. Hosts can be overridden with
 * INDEXABLE_HOSTS="a.com,b.com".
 */
const INDEXABLE_HOSTS = new Set(
  (process.env.INDEXABLE_HOSTS ?? "powerclean.in,www.powerclean.in")
    .split(",")
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean)
);

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const response = NextResponse.next();
  if (!INDEXABLE_HOSTS.has(host)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
