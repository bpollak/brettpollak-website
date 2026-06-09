import { mediaItems } from "@/lib/mediaData";
import { buildRssXml, rssResponse } from "@/lib/rss";
import { SITE_URL } from "@/lib/seoDates";

export const dynamic = "force-static";

const categoryLabels: Record<string, string> = {
  article: "Article",
  interview: "Interview",
  whitepaper: "Whitepaper",
  speaking: "Speaking",
  award: "Award",
};

// Rebuilt from lib/mediaData.ts on every deploy — one item per publication,
// interview, talk, or award, linking to the external source, newest first.
export function GET(): Response {
  const items = [...mediaItems]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 50);

  const xml = buildRssXml({
    title: "Media & Appearances — Brett Pollak",
    link: `${SITE_URL}/media`,
    selfUrl: `${SITE_URL}/media/feed.xml`,
    description:
      "Brett Pollak's published articles, interviews, speaking engagements, whitepapers, and awards on AI in higher education.",
    items: items.map((item) => ({
      title: `${item.title} — ${item.publication}`,
      link: item.url,
      guid: item.url,
      isoDate: item.date,
      description: `${categoryLabels[item.category] ?? item.category} · ${item.publication}`,
    })),
  });

  return rssResponse(xml);
}
