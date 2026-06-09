import type { MetadataRoute } from "next";
import {
  SITE_URL,
  isoToDate,
  latestDigestDate,
  latestMediaDate,
  latestNewsletterDate,
  nowLastUpdated,
  staticPageDates,
} from "@/lib/seoDates";

export const dynamic = "force-static";

// <lastmod> values are real change dates, not the build timestamp: data-driven
// routes derive from their data module (so OpenClaw content refreshes move
// them automatically), and hand-written pages read staticPageDates in
// lib/seoDates.ts — bump that map when you substantively edit a page.

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: isoToDate(staticPageDates["/"]),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: isoToDate(staticPageDates["/about"]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/tritongpt`,
      lastModified: isoToDate(staticPageDates["/tritongpt"]),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: isoToDate(staticPageDates["/products"]),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/speaking`,
      lastModified: isoToDate(staticPageDates["/speaking"]),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/media`,
      lastModified: isoToDate(latestMediaDate),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ai-digest`,
      lastModified: isoToDate(latestDigestDate),
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/ucsd-ai-news`,
      lastModified: isoToDate(latestNewsletterDate),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ai-agent-architecture`,
      lastModified: isoToDate(staticPageDates["/ai-agent-architecture"]),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/now`,
      lastModified: isoToDate(nowLastUpdated),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/podcasts`,
      lastModified: isoToDate(staticPageDates["/podcasts"]),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/linkedin`,
      lastModified: isoToDate(staticPageDates["/linkedin"]),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: isoToDate(staticPageDates["/contact"]),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
