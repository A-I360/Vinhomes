import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site.config";
import { properties } from "@/content/developments";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "properties", priority: 0.9, changeFrequency: "weekly" },
    { path: "about", priority: 0.7, changeFrequency: "monthly" },
    { path: "services", priority: 0.7, changeFrequency: "monthly" },
    { path: "investment", priority: 0.8, changeFrequency: "monthly" },
    { path: "why-vinhomes", priority: 0.7, changeFrequency: "monthly" },
    { path: "insights", priority: 0.7, changeFrequency: "weekly" },
    { path: "faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "terms", priority: 0.2, changeFrequency: "yearly" },
  ] as const;

  const propertyUrls = properties.map((p) => ({
    url: `${base}/properties/${p.slug}`,
    lastModified: p.dateAdded,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const insightUrls = insights.map((p) => ({
    url: `${base}/insights/${p.slug}`,
    lastModified: p.publishDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages.map((p) => ({
      url: `${base}/${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...propertyUrls,
    ...insightUrls,
  ];
}
