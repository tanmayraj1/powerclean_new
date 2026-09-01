import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Crawling is open, and deliberately so.
 *
 * The AI crawlers are named explicitly rather than left to the wildcard: an
 * explicit allow is unambiguous, and it documents the decision. Being read by
 * ChatGPT, Perplexity, Claude and Google's AI surfaces is the point of the
 * answer-shaped content on this site — blocking them would remove the site
 * from exactly the results it is written for.
 *
 * If the client ever wants to opt out of AI training while staying visible in
 * AI search, the split is: block GPTBot / ClaudeBot / CCBot (training), keep
 * OAI-SearchBot / PerplexityBot / Google-Extended (retrieval and citation).
 */
const AI_AGENTS = [
  "GPTBot", // OpenAI — training
  "OAI-SearchBot", // OpenAI — ChatGPT search retrieval
  "ChatGPT-User", // OpenAI — user-initiated browsing
  "ClaudeBot", // Anthropic
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot", // Perplexity index
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews grounding
  "Applebot-Extended",
  "Bingbot",
  "CCBot", // Common Crawl — feeds many models
  "Amazonbot",
  "meta-externalagent",
  "cohere-ai",
  "Diffbot",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_AGENTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
