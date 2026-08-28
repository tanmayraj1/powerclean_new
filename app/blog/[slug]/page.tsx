import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  blogPostJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  howToJsonLd,
} from "@/lib/seo";
import { blogPosts, getBlogPost, wordCountOf } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${slug}`,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: post.photo, alt: post.photoAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = post.related
    .map((s) => getBlogPost(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <JsonLd
        data={[
          blogPostJsonLd({
            headline: post.title,
            description: post.metaDescription,
            slug: post.slug,
            image: post.photo,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            wordCount: wordCountOf(post),
            keywords: post.keywords,
          }),
          breadcrumbJsonLd([
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
          ]),
          faqJsonLd(post.faqs),
          ...(post.howTo ? [howToJsonLd(post.howTo)] : []),
        ]}
      />
      <PageHero
        title={post.title}
        eyebrow={post.kicker}
        blurb={post.summary}
        minHeight="min(50vh, 440px)"
        titleClassName="text-[clamp(28px,3.8vw,54px)]"
        image={post.photo}
        imageAlt={post.photoAlt}
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1320px] px-5 pt-6 text-[12.5px] text-muted"
      >
        <TransitionLink href="/blog" className="hover:text-green">
          Blog
        </TransitionLink>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">{post.title}</span>
      </nav>

      <article className="mx-auto max-w-[800px] px-5 pb-8 pt-[clamp(20px,3vw,36px)]">
        {/* byline */}
        <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-line-2 pb-5 text-[12.5px] text-muted">
          <span className="font-semibold text-navy">
            Power Clean Applications Team
          </span>
          <time dateTime={post.datePublished}>{fmtDate(post.datePublished)}</time>
          <span>{post.readMinutes} min read</span>
        </div>

        {/* THE ANSWER — the block AI engines and featured snippets lift */}
        <Reveal dir="up" as="div">
          <div className="article-answer mb-8 rounded-card-lg bg-navy p-[clamp(22px,3vw,32px)]">
            <h2 className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4FD98A]">
              The short answer
            </h2>
            <p className="text-[clamp(15.5px,1.7vw,18px)] font-medium leading-[1.6] text-white [text-wrap:pretty]">
              {post.answer}
            </p>
          </div>
        </Reveal>

        {/* KEY FACTS — quotable numbers */}
        <Reveal dir="up" as="div">
          <dl className="mb-9 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-6 gap-y-4 rounded-card-lg bg-green-tint p-6">
            {post.keyFacts.map((f) => (
              <div key={f.label}>
                <dt className="mb-1 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-green-deep">
                  {f.label}
                </dt>
                <dd className="font-mono text-[14px] font-semibold leading-[1.4] text-navy">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {post.blocks.map((block, i) => {
          if (block.kind === "h2") {
            return (
              <Reveal key={i} dir="up" as="div">
                <h2 className="mb-4 mt-11 text-[clamp(22px,2.5vw,30px)] font-semibold leading-[1.25] tracking-[-0.01em] text-navy">
                  {block.text}
                </h2>
              </Reveal>
            );
          }
          if (block.kind === "h3") {
            return (
              <Reveal key={i} dir="up" as="div">
                <h3 className="mb-3 mt-8 text-[clamp(18px,2vw,22px)] font-semibold leading-[1.3] text-navy">
                  {block.text}
                </h3>
              </Reveal>
            );
          }
          if (block.kind === "p") {
            return (
              <Reveal key={i} dir="up" as="div">
                <p className="mb-5 text-[15.5px] leading-[1.8] text-muted-3 [text-wrap:pretty]">
                  {block.text}
                </p>
              </Reveal>
            );
          }
          if (block.kind === "list" || block.kind === "ol") {
            const Tag = block.kind === "ol" ? "ol" : "ul";
            return (
              <Reveal key={i} dir="up" as="div">
                <Tag className="mb-7 flex list-none flex-col gap-3 p-0">
                  {block.items.map((item, n) => (
                    <li key={item} className="flex items-start gap-3">
                      {block.kind === "ol" ? (
                        <span className="mt-[1px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-green-tint font-mono text-[11px] font-bold text-green-deep">
                          {n + 1}
                        </span>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-green"
                        />
                      )}
                      <span className="text-[15px] leading-[1.7] text-muted-3">
                        {item}
                      </span>
                    </li>
                  ))}
                </Tag>
              </Reveal>
            );
          }
          if (block.kind === "table") {
            return (
              <Reveal key={i} dir="up" as="div">
                <figure className="mb-8">
                  {block.caption && (
                    <figcaption className="mb-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">
                      {block.caption}
                    </figcaption>
                  )}
                  <div className="overflow-x-auto rounded-card ring-1 ring-inset ring-line-2">
                    <table className="w-full min-w-[560px] border-collapse bg-white text-left">
                      <thead>
                        <tr className="bg-navy text-white">
                          {block.head.map((h) => (
                            <th
                              key={h}
                              className="px-4 py-3 text-[11.5px] font-semibold uppercase tracking-[0.07em]"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, r) => (
                          <tr
                            key={row[0] + r}
                            className={`border-t border-line-2 ${r % 2 ? "bg-card-tint" : "bg-white"}`}
                          >
                            {row.map((cell, c) => (
                              <td
                                key={c}
                                className={`px-4 py-3 align-top text-[13px] leading-[1.6] ${c === 0 ? "font-semibold text-navy" : "text-muted-3"}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </figure>
              </Reveal>
            );
          }
          if (block.kind === "callout") {
            return (
              <Reveal key={i} dir="up" as="div">
                <aside className="mb-8 rounded-card-lg bg-azure p-6 ring-1 ring-inset ring-navy/10">
                  <h3 className="mb-2 text-[15px] font-semibold text-navy">
                    {block.title}
                  </h3>
                  <p className="text-[14px] leading-[1.7] text-muted-3">
                    {block.text}
                  </p>
                </aside>
              </Reveal>
            );
          }
          if (block.kind === "quote") {
            return (
              <Reveal key={i} dir="up" as="div">
                <blockquote className="mb-8 border-l-[3px] border-green pl-6">
                  <p className="mb-2.5 text-[clamp(16px,1.9vw,20px)] font-medium leading-[1.55] text-ink [text-wrap:pretty]">
                    &ldquo;{block.text}&rdquo;
                  </p>
                  <cite className="text-[12.5px] not-italic text-muted">
                    — {block.cite}
                  </cite>
                </blockquote>
              </Reveal>
            );
          }
          return (
            <Reveal key={i} dir="up" as="div">
              <div className="mb-8 rounded-card-lg bg-green-tint p-6 text-center">
                <p className="mb-4 text-[14.5px] leading-[1.7] text-navy [text-wrap:pretty]">
                  {block.text}
                </p>
                <TransitionLink
                  href={block.href}
                  className="group inline-block rounded-full bg-green-cta px-7 py-3 text-[13.5px] font-semibold text-white no-underline shadow-cta transition-colors hover:bg-green-cta-dark"
                >
                  {block.label} <Arrow />
                </TransitionLink>
              </div>
            </Reveal>
          );
        })}

        {/* FAQ — FAQPage schema + the format answer engines quote */}
        <Reveal dir="up" as="div">
          <h2 className="mb-5 mt-12 text-[clamp(22px,2.5vw,30px)] font-semibold tracking-[-0.01em] text-navy">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-3.5">
            {post.faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-card bg-white p-6 ring-1 ring-inset ring-line-2"
              >
                <h3 className="mb-2.5 text-[16px] font-semibold leading-[1.4] text-navy">
                  {f.q}
                </h3>
                <p className="text-[14.5px] leading-[1.75] text-muted-3">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </article>

      {/* RELATED */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <h2 className="mb-7 text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.02em] text-navy">
          Related reading
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {related.map((r, i) => (
            <Reveal key={r.slug} dir="up" delay={i * 90}>
              <TransitionLink
                href={`/blog/${r.slug}`}
                className="group flex h-full flex-col rounded-card bg-white p-6 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg"
              >
                <span className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
                  {r.kicker}
                </span>
                <h3 className="mb-2 text-[16px] font-semibold leading-[1.35] text-navy">
                  {r.title}
                </h3>
                <p className="mb-4 flex-1 text-[12.5px] leading-[1.6] text-muted">
                  {r.summary}
                </p>
                <span className="flex items-center gap-2 text-[13px] font-semibold text-navy transition-colors group-hover:text-green">
                  Read <Arrow />
                </span>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </SectionPanel>

      <CtaBanner
        eyebrow="PUT IT INTO PRACTICE"
        heading="Prove It On Your Own Parts"
        body="Send us a sample component — we clean it, send it back, and tell you exactly which grade and process did it."
        ctaLabel="Request a Free Trial"
        ctaHref="/contact"
        image="/photos/gallery-1.webp"
      />
    </>
  );
}
