import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isIndexablePath, isProductionHost } from "@/lib/indexing";

/**
 * Controls which pages search engines may index, per host.
 *
 * On powerclean.in everything is indexable. On any other host — the
 * new.powerclean.in subdomain during the parallel run, and the vercel.app
 * preview — only the sections that have no equivalent on the old site are
 * indexable; see lib/indexing.ts for the reasoning and the list.
 *
 * `X-Robots-Tag` rather than a robots.txt Disallow: a disallowed page can
 * still be indexed from links elsewhere, because the crawler is never allowed
 * to fetch it and read the instruction.
 *
 * At cutover, pointing powerclean.in at this project lifts every restriction
 * on its own — no code change.
 */
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const response = NextResponse.next();
  if (!isProductionHost(host) && !isIndexablePath(request.nextUrl.pathname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
