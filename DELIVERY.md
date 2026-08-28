# Power Clean — Delivery Notes

Everything below is either a launch step or an open item that needs a decision
from Roovel Solutions. The site itself is complete and deployable as it stands.

## 1. Before pointing a real domain at it

**Set the site URL.** `lib/seo.ts` falls back to
`https://powerclean-new.vercel.app`. Until `NEXT_PUBLIC_SITE_URL` is set, every
canonical tag, Open Graph URL and sitemap entry points at the preview domain.

In Vercel → Project → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://www.powerclean.in
```

Redeploy after setting it, then resubmit `sitemap.xml` in Google Search Console.

**Regenerate the QR codes.** The printed QR files in `qr-assets/` encode
`.../range` on the preview domain. Once the real domain is live, ask for new
ones before anything goes to a printer.

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
NEXT_PUBLIC_SITE_URL=https://www.powerclean.in
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

- **Structured data**: Organization, WebSite, Service, LocalBusiness ×2,
  BreadcrumbList, Product (41 pages), CollectionPage/ItemList, FAQPage, HowTo,
  TechArticle and BlogPosting with author, dates and word count.
- **AEO** (being quoted by ChatGPT, Perplexity and Google AI Overviews): every
  blog article opens with a short extractable answer, carries a key-facts table
  of hard numbers, and closes with an FAQ block emitting FAQ schema.
  `public/llms.txt` tells AI crawlers what the company is and which pages are
  canonical sources.
- **Geographic**: LocalBusiness for both offices with coordinates, opening
  hours and service areas across six states, plus `geo.*` meta tags.
- **Crawl**: sitemap with real article dates, robots.txt, RSS at
  `/blog/rss.xml`, web manifest, canonical URL on every page.
- **Sharing**: sitewide OG image plus a generated per-article card for every
  blog post.
- **Content**: 5 buyer-intent blog articles and 6 technical guides, internally
  cross-linked with the catalogue and solution pages.

### Publishing more articles

Add an entry to `lib/blog.ts` — the route, sitemap, RSS feed, OG image and
schema all pick it up automatically. One article a month beats five in a burst;
consistency is what compounds.

## 6. Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Deployment is automatic: pushing to `main` on
`github.com/tanmayraj1/powerclean_new` triggers a Vercel production deploy.
