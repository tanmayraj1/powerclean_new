import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { products } from "@/lib/catalogue";
import { articles } from "@/lib/articles";
import { blogPosts } from "@/lib/blog";
import { solutions } from "@/lib/solutions";

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
    page("/catalogue", 0.9, "weekly"),
    page("/range", 0.8, "monthly"),
    page("/blog", 0.9, "weekly"),
    ...blogPosts.map((b) => ({
      url: `${SITE_URL}/blog/${b.slug}`,
      lastModified: new Date(b.dateModified + "T00:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    page("/resources", 0.8, "weekly"),
    ...articles.map((a) => page(`/resources/${a.slug}`, 0.7)),
    page("/solutions", 0.9, "weekly"),
    page("/about", 0.6),
    page("/contact", 0.8),
    ...solutions.map((s) => page(`/solutions/${s.slug}`, 0.8)),
    ...products.map((p) => page(`/catalogue/${p.slug}`, 0.7)),
  ];
}
