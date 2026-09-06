import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { products } from "@/lib/products";
import { articles } from "@/lib/articles";
import { blogPosts } from "@/lib/blog";
import { solutions } from "@/lib/solutions";
import { glossary } from "@/lib/glossary";
import { methods } from "@/lib/methods";
import { CATEGORY_SLUG } from "@/lib/products";
import { industryPages } from "@/lib/industries";
import { locationPages } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly"
  ) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/products", 0.9, "weekly"),
    page("/products/quick-view", 0.85, "monthly"),
    page("/products/selection-matrix", 0.85, "monthly"),
    // the four family hubs — head terms in their own right
    ...Object.values(CATEGORY_SLUG).map((slug) =>
      page(`/products/${slug}`, 0.85, "monthly")
    ),
    page("/range", 0.8, "monthly"),

    // blog — images declared so they are eligible for image search
    page("/blog", 0.9, "weekly"),
    ...blogPosts.map((b) => ({
      url: `${SITE_URL}/blog/${b.slug}`,
      lastModified: new Date(b.dateModified + "T00:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${SITE_URL}${b.photo}`],
    })),

    page("/resources", 0.8, "weekly"),
    ...articles.map((a) => page(`/resources/${a.slug}`, 0.7)),

    page("/industries", 0.9, "monthly"),
    ...industryPages.map((i) => ({
      ...page(`/industries/${i.slug}`, 0.8),
      images: [`${SITE_URL}${i.photo}`],
    })),

    page("/industrial-cleaning-chemicals", 0.8, "monthly"),
    ...locationPages.map((l) =>
      page(`/industrial-cleaning-chemicals/${l.slug}`, l.hasPremises ? 0.8 : 0.7)
    ),

    page("/glossary", 0.8, "monthly"),
    ...glossary.map((t) => page(`/glossary/${t.slug}`, 0.6)),

    page("/faq", 0.8, "monthly"),
    page("/clients", 0.7, "monthly"),
    page("/cleaning-videos", 0.8, "monthly"),
    page("/resources/case-studies", 0.8, "monthly"),
    page("/get-consultation", 0.9, "monthly"),
    page("/request-cleanup", 0.95, "monthly"),
    page("/questionnaire", 0.85, "monthly"),
    page("/solutions", 0.9, "weekly"),
    ...methods.map((m) => ({
      ...page(`/solutions/${m.slug}`, 0.85, "monthly"),
      images: [`${SITE_URL}${m.photo}`],
    })),
    page("/about", 0.6),
    page("/contact", 0.8),
    page("/privacy", 0.3, "yearly"),
    ...solutions.map((s) => page(`/solutions/${s.slug}`, 0.8)),
    ...products.map((p) => page(`/products/${p.slug}`, 0.7)),
  ];
}
