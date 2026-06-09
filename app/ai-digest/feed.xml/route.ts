import { weeklyAiDigestData } from "@/lib/weeklyAiDigestData";
import { buildRssXml, rssResponse } from "@/lib/rss";
import { SITE_URL } from "@/lib/seoDates";

export const dynamic = "force-static";

// Rebuilt from lib/weeklyAiDigestData.ts on every deploy — the feed always
// carries the current rolling week's daily digests, newest first.
export function GET(): Response {
  const days = [...weeklyAiDigestData.days].sort((a, b) =>
    b.isoDate.localeCompare(a.isoDate),
  );

  const xml = buildRssXml({
    title: "AI Digest — Brett Pollak",
    link: `${SITE_URL}/ai-digest`,
    selfUrl: `${SITE_URL}/ai-digest/feed.xml`,
    description:
      "Curated daily AI developments, product launches, enterprise shifts, and higher education implications. Rolling weekly archive; this feed carries the current week's daily digests.",
    items: days.map((day) => ({
      title: `AI Digest — ${day.displayDate} (${day.isoDate})`,
      link: `${SITE_URL}/ai-digest`,
      guid: `${SITE_URL}/ai-digest#${day.isoDate}`,
      isoDate: day.isoDate,
      description: day.headlines.join(" • "),
    })),
  });

  return rssResponse(xml);
}
