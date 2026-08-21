import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { products } from "@/lib/catalogue";
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
    page("/solutions", 0.9, "weekly"),
    page("/about", 0.6),
    page("/contact", 0.8),
    ...solutions.map((s) => page(`/solutions/${s.slug}`, 0.8)),
    ...products.map((p) => page(`/catalogue/${p.slug}`, 0.7)),
  ];
}
