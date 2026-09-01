# Power Clean — Delivery Notes

Everything below is either a launch step or an open item that needs a decision
from Roovel Solutions. The site itself is complete and deployable as it stands.

## 1. The domain

The site is built for **`https://powerclean.in`**, set as the default in
`lib/seo.ts`. Every canonical tag, Open Graph URL, sitemap entry, RSS link,
`llms.txt` reference and schema `@id` derives from that one constant, so
nothing needs changing when DNS is pointed at the deployment.

**Pick one host and redirect the other.** The site canonicalises to the apex
(`powerclean.in`). Configure `www.powerclean.in` to 301 to it — if both resolve
without a redirect, every page competes against a duplicate of itself and the
ranking signal is split. If you would rather run www as the primary, change the
string in `lib/seo.ts` and redirect the apex instead; the important thing is
that exactly one of them answers.

`NEXT_PUBLIC_SITE_URL` overrides it, and should only be set on preview
deployments so previews do not emit canonicals pointing at production.

**QR codes are already correct.** The files in `qr-assets/` encode
`https://powerclean.in/range` at error-correction level H (30% redundancy, so
they still scan if a printer clips an edge or a logo sits over the centre).
Both PNGs have been decode-tested. They are print-ready as they are — no
regeneration needed unless the domain changes.

## 2. How enquiries currently reach you

There is no CRM or transactional-email service behind the site, so the enquiry
form does not post to a server. Instead it composes the submission into an
email addressed to **sales@roovel.com** and opens the visitor's mail app, and
the confirmation panel shows the same text with WhatsApp and call buttons as a
fallback. Nothing is silently lost, and the wording never claims delivery that
did not happen.

The newsletter box works the same way.

**To upgrade later:** replace the body of `submitInquiry` in `app/actions.ts`
with a call to your CRM or an email API (Resend, SendGrid, Zoho). The form and
its states need no changes.

## 3. Items to confirm before the site is publicised

| Item | Why it matters | Where |
|---|---|---|
| **ISO 9001 certificate** | Stated on the home page, About page and in indexed metadata. Confirm the certificate is current and whether it is ISO 9001:2015. | `components/sections/home/WhyPowerClean.tsx`, `app/about/page.tsx` |
| **"25+ years" vs CIN 2011** | Copy says precision cleaning for 25+ years and TCE replacement since 2000; the CIN shows the private limited company was incorporated in 2011. Presumably the business predates incorporation — confirm the wording you want. | `lib/site-config.ts` (`milestones`, `stats`) |
| **Client logos** | BOSCH, TVS, Bharat Forge, Murugappa, Minda, Sandhar and Amalgamation are named and their marks displayed. Confirm each is happy to be named publicly. | `lib/site-config.ts` (`clients`) |
| **Minda entity** | The asset used is UNO Minda; if the customer is Spark Minda the logo must be swapped. | `public/logos/minda.png` |
| **Customer quotes** | All testimonials are real quotes carried over from powerclean.in, but attributions there were mostly first-name-and-city. Consider written permission for the named-company ones (TVS, Amalgamation, BOSCH ancillary). | `lib/site-config.ts` (`testimonials`) |
| **Case study figures** | The four results (3.2%→0.4% white rust, 20% cycle time, mixed-metal bath, 12-hour flash-rust hold) are as published on your old site. Confirm they are still accurate. | `lib/site-config.ts` (`caseStudies`) |

## 4. Imagery status

- **Product packs** are rendered as branded artwork (`components/ui/ProductDrum.tsx`)
  — a blue drum carrying each product's real name, SKU and category colour.
  When you have real product photography, drop the files in and swap the
  component out; the layout does not change.
- **Context photography** is licensed stock (Unsplash, free for commercial use,
  no attribution required), hand-picked per section.
- **Before/after sliders** on solution pages use representative imagery and say
  so beneath each slider. Replace them with photographs from a real wash trial
  when you have them — files are `public/photos/ba-*.webp`.
- **Team portraits are deliberately absent.** The About page shows capability
  (lab, QC, applications engineering, supply) rather than invented people. Send
  real names, roles and portraits and a team section can be added.

## 5. SEO launch checklist

The site ships with a complete technical SEO layer. Four env vars switch on the
parts that need your accounts:

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<from Search Console>
NEXT_PUBLIC_BING_SITE_VERIFICATION=<from Bing Webmaster Tools>
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Set them in Vercel → Settings → Environment Variables and redeploy. Verification
tags and Google Analytics appear automatically; no code changes needed.

Then, in order:

1. **Google Search Console** — add the property, verify (the meta tag is already
   wired), submit `https://www.powerclean.in/sitemap.xml`.
2. **Bing Webmaster Tools** — same, and import from Search Console.
3. **Google Business Profile** — create profiles for the Bangalore factory and
   the Chennai registered office. The site emits matching `LocalBusiness` schema
   with the same addresses, phones and coordinates, so keep every detail
   identical — consistent name/address/phone is what local ranking is built on.
4. **Ask satisfied customers for Google reviews.** This is the highest-value
   action outside the website itself. The site deliberately claims no rating,
   because none exists yet.
5. **Directory listings** — IndiaMART, TradeIndia, Justdial and industry
   associations, using the exact same name, address and phone.

### What is already in place

**157 indexable pages**, all internally linked (no orphans), all with a unique
title and description inside Google's display budget.

- **Structured data** (0 validation errors sitewide): Organization, WebSite with
  SearchAction, Service, LocalBusiness ×2, BreadcrumbList on every page, Product
  (41 catalogue + 6 solution pages, with spec rows as `additionalProperty`),
  CollectionPage/ItemList, FAQPage, QAPage, DefinedTermSet + DefinedTerm ×44,
  HowTo ×7, TechArticle, BlogPosting with author/dates/wordCount, WebPage with
  Speakable.
- **AEO** (being quoted by ChatGPT, Perplexity and Google AI Overviews): every
  article, industry page, location page and glossary entry opens with a short
  extractable answer in a marked block, carries a key-facts table of hard
  numbers, and closes with an FAQ. `public/llms.txt` is the index for AI
  crawlers; `/llms-full.txt` is the whole corpus — every definition, product
  fact and Q&A as plain text, generated from the same data the pages render so
  it cannot drift.
- **AI crawlers are named and allowed explicitly** in `robots.txt` — GPTBot,
  OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended,
  CCBot and others. See the comment in `app/robots.ts` for how to opt out of
  training while staying visible in AI search, if that is ever wanted.
- **Geographic**: LocalBusiness for both real premises with coordinates, hours
  and six-state service areas, plus 10 city pages under
  `/industrial-cleaning-chemicals/`, `geo.*` meta tags and per-city
  Service schema with `areaServed`.
- **Crawl**: sitemap with real article dates and image entries, robots.txt with
  host, RSS at `/blog/rss.xml`, web manifest, canonical on every page.
- **Content**: 15 buyer-intent blog articles (~15,400 words), 11 industry pages,
  10 city pages, 44 glossary definitions, 6 technical guides and an aggregated
  FAQ hub — all cross-linked with the catalogue and solution pages.

### Site architecture

The site follows the architecture diagram supplied by Roovel. Two URL changes
were made to match it, both with permanent redirects in `next.config.ts`:

| Was | Now |
|---|---|
| `/catalogue` | `/products` |
| `/catalogue/:slug` | `/products/:slug` |
| `/cleaning-videos.aspx` | `/cleaning-videos` |

Added to complete the diagram: four **product family pages**
(`/products/aqueous`, `/cooling`, `/solvent`, `/rust-preventive`), four
**cleaning-method pages** (`/solutions/ultrasonic-cleaning`,
`/spray-jet-cleaning`, `/replace-tce`, `/millipore-cleanliness`), three new
industry sectors (appliance, tools, earthmoving), plus `/clients`,
`/resources/case-studies`, `/get-consultation` and `/cleaning-videos`.

The diagram's own URLs that differ from ours also 301 rather than 404:
`/resources/faq` → `/faq`, `/resources/blog` → `/blog`, `/resources/guides` →
`/resources`, `/industries/facility` → `/industries/plant-facility`.

**Lead-generation touchpoints**, as the diagram requires on every page: an
inline micro-form (name, phone, application) on product, family, method,
industry, city and video pages; a "Request a free sample" pill added to the
existing floating dock rather than a second competing sticky bar; and a TDS/SDS
request block on all 41 product pages.

### Two things still waiting on Roovel

1. **TDS and brochure PDFs.** The diagram asks for gated downloads. No PDF
   files exist, so the block on each product page requests the sheet by email
   with the product name prefilled. Send the TDS set and it becomes a real
   download with no rework.
2. **Video publication dates.** `/cleaning-videos` emits `VideoObject` schema
   for all ten clips, but `uploadDate` is deliberately omitted because we do
   not have the real dates — and it is a required property for Google's video
   rich result. Send the dates and the videos become eligible.

### Why the city pages say "service area" and not "branch"

Roovel has exactly two premises: the Bangalore plant and the Chennai registered
office. Only those two carry `LocalBusiness` schema. The other eight cities are
service areas supplied from Bangalore, and the copy says so plainly on each
page. Do not reword these into branch pages — inventing locations is a doorway-
page spam signal that can get the whole domain demoted, and it would be untrue.
The same warning is in the header comment of `lib/locations.ts`.

### Publishing more content

Everything is data-driven — routes, sitemap, RSS, OG images, schema and
`/llms-full.txt` all pick up new entries automatically:

| To add | Edit |
|---|---|
| A blog article | `lib/blog.ts` |
| A glossary definition | `lib/glossary.ts` |
| An industry page | `lib/industries.ts` |
| A city page | `lib/locations.ts` |
| A technical guide | `lib/articles.ts` |

Keep `metaTitle` at 46 characters or fewer (the ` · Power Clean` suffix takes
14 of the 60 Google shows) and `metaDescription` at 158 or fewer. `metaDesc()`
and `brandedTitle()` in `lib/seo.ts` clamp generated metadata to the same
budget. One article a month beats five in a burst; consistency compounds.

### What only you can do

These are the remaining levers, and none of them are code:

1. **Google Business Profile** for both premises, then **ask customers for
   reviews**. The site claims no rating because none exists — reviews are the
   single highest-value action left.
2. **A named technical author.** Articles are attributed to the "Power Clean
   Applications Team" because inventing a person would be dishonest. A real
   engineer's name, role and credentials on the byline is a genuine E-E-A-T
   gain — send one and it is a small change.
3. **Backlinks**: IndiaMART, TradeIndia, Justdial, industry associations, and
   any customer or trade-body page that will link to you — with identical name,
   address and phone everywhere.
4. **Real photography** of the plant, products and wash trials (see §4).

## 6. Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Deployment is automatic: pushing to `main` on
`github.com/tanmayraj1/powerclean_new` triggers a Vercel production deploy.
