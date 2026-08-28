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
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/resources/${slug}` },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${SITE_URL}/resources/${slug}`,
    },
  };
}

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  const faqBlock = article.blocks.find((b) => b.kind === "qa");
  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            headline: article.title,
            description: article.metaDescription,
            slug: article.slug,
            image: article.photo,
          }),
          breadcrumbJsonLd([
            { name: "Resources", url: `${SITE_URL}/resources` },
            { name: article.title, url: `${SITE_URL}/resources/${article.slug}` },
          ]),
          ...(faqBlock && faqBlock.kind === "qa"
            ? [faqJsonLd(faqBlock.items.map((i) => ({ q: i.q, a: i.a })))]
            : []),
        ]}
      />
      <PageHero
        title={article.title}
        eyebrow={article.kicker}
        blurb={article.summary}
        minHeight="min(50vh, 440px)"
        titleClassName="text-[clamp(30px,4.2vw,58px)]"
        image={article.photo}
        imageAlt=""
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1320px] px-5 pt-6 text-[12.5px] text-muted"
      >
        <TransitionLink href="/resources" className="hover:text-green">
          Resources
        </TransitionLink>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">{article.title}</span>
      </nav>

      <article className="mx-auto max-w-[760px] px-5 pb-8 pt-[clamp(24px,4vw,44px)]">
        <p className="mb-8 border-l-2 border-green pl-5 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
          {article.readMinutes} min read · Power Clean applications team
        </p>
        {article.blocks.map((block, i) => {
          if (block.kind === "h") {
            return (
              <Reveal key={i} dir="up" as="div">
                <h2 className="mb-3.5 mt-10 text-[clamp(21px,2.4vw,28px)] font-semibold leading-[1.25] tracking-[-0.01em] text-navy">
                  {block.text}
                </h2>
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
          if (block.kind === "list") {
            return (
              <Reveal key={i} dir="up" as="div">
                <ul className="mb-6 flex list-none flex-col gap-3 p-0">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-green"
                      />
                      <span className="text-[15px] leading-[1.7] text-muted-3">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          }
          if (block.kind === "callout") {
            return (
              <Reveal key={i} dir="up" as="div">
                <aside className="mb-7 rounded-card-lg bg-green-tint p-6 ring-1 ring-inset ring-green/15">
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
          if (block.kind === "table") {
            return (
              <Reveal key={i} dir="up" as="div">
                <div className="mb-7 overflow-x-auto rounded-card ring-1 ring-inset ring-line-2">
                  <table className="w-full min-w-[520px] border-collapse bg-white text-left">
                    <thead>
                      <tr className="bg-navy text-white">
                        {block.head.map((h) => (
                          <th
                            key={h}
                            className="px-4 py-3 text-[11.5px] font-semibold uppercase tracking-[0.08em]"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, r) => (
                        <tr
                          key={row[0]}
                          className={`border-t border-line-2 ${r % 2 ? "bg-card-tint" : "bg-white"}`}
                        >
                          <td className="px-4 py-3 align-top text-[13px] leading-[1.6] text-ink">
                            {row[0]}
                          </td>
                          <td className="px-4 py-3 align-top text-[13px] leading-[1.6] text-muted-3">
                            {row[1]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            );
          }
          return (
            <Reveal key={i} dir="up" as="div">
              <div className="mb-6 flex flex-col gap-4">
                {block.items.map((qa, qi) => (
                  <div
                    key={qa.q}
                    className="rounded-card bg-white p-6 ring-1 ring-inset ring-line-2"
                  >
                    <h2 className="mb-2.5 flex gap-3 text-[16px] font-semibold leading-[1.4] text-navy">
                      <span className="font-mono text-[12px] text-green-deep">
                        {String(qi + 1).padStart(2, "0")}
                      </span>
                      {qa.q}
                    </h2>
                    <p className="pl-[30px] text-[14.5px] leading-[1.75] text-muted-3">
                      {qa.a}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          );
        })}
      </article>

      <SectionPanel tone="tint" outerClassName="p-3">
        <h2 className="mb-7 text-[clamp(22px,2.6vw,30px)] font-semibold tracking-[-0.02em] text-navy">
          More from the knowledge center
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {more.map((m, i) => (
            <Reveal key={m.slug} dir="up" delay={i * 90}>
              <TransitionLink
                href={`/resources/${m.slug}`}
                className="group flex h-full flex-col rounded-card bg-white p-6 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg"
              >
                <span className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
                  {m.kicker}
                </span>
                <h3 className="mb-2 text-[16px] font-semibold leading-[1.35] text-navy">
                  {m.title}
                </h3>
                <p className="mb-4 flex-1 text-[12.5px] leading-[1.6] text-muted">
                  {m.summary}
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
        heading="Bring Us Your Cleaning Problem"
        body="Send a sample part or describe your process — our lab will come back with a matched product, dilution and trial plan."
        ctaLabel="Request a Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
