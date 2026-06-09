import { ucsdAiNewsletterData } from "@/lib/ucsdAiNewsletterData";
import { buildRssXml, rssResponse } from "@/lib/rss";
import { SITE_URL } from "@/lib/seoDates";

export const dynamic = "force-static";

// Rebuilt from lib/ucsdAiNewsletterData.ts on every deploy — one item per
// weekly edition, newest first.
export function GET(): Response {
  const editions = [...ucsdAiNewsletterData.editions].sort((a, b) =>
    b.isoDate.localeCompare(a.isoDate),
  );

  const xml = buildRssXml({
    title: "UC San Diego AI Weekly Update — Brett Pollak",
    link: `${SITE_URL}/ucsd-ai-news`,
    selfUrl: `${SITE_URL}/ucsd-ai-news/feed.xml`,
    description:
      "Weekly roundup of UC San Diego's supported AI services — tool release notes, TritonAI updates, and upcoming trainings for campus staff.",
    items: editions.map((edition) => ({
      title: `UC San Diego AI Weekly Update — ${edition.displayDate} (${edition.isoDate})`,
      link: `${SITE_URL}/ucsd-ai-news`,
      guid: `${SITE_URL}/ucsd-ai-news#${edition.isoDate}`,
      isoDate: edition.isoDate,
      description: `${edition.toolUpdatesCount} AI tool updates, ${edition.tritonAiNewsCount} TritonAI news items, and ${edition.upcomingTrainingsCount} upcoming trainings.`,
    })),
  });

  return rssResponse(xml);
}
