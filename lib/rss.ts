// Minimal RSS 2.0 builder for the static-export feed routes
// (app/**/feed.xml/route.ts). Items derive from the lib/ data modules, so
// feeds stay current whenever the data files are refreshed.

export type RssItem = {
  title: string;
  /** Absolute URL the item points at (may be an external publication). */
  link: string;
  /** Stable unique id; rendered with isPermaLink="false". */
  guid: string;
  /** ISO YYYY-MM-DD publication date. */
  isoDate: string;
  description: string;
};

export type RssChannel = {
  title: string;
  /** Absolute URL of the HTML page the feed mirrors. */
  link: string;
  /** Absolute URL of the feed itself (atom:link rel="self"). */
  selfUrl: string;
  description: string;
  items: RssItem[];
};

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toPubDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00Z`).toUTCString();
}

export function buildRssXml(channel: RssChannel): string {
  const items = channel.items
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <guid isPermaLink="false">${escapeXml(item.guid)}</guid>
      <pubDate>${toPubDate(item.isoDate)}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(channel.title)}</title>
    <link>${escapeXml(channel.link)}</link>
    <atom:link href="${escapeXml(channel.selfUrl)}" rel="self" type="application/rss+xml"/>
    <description>${escapeXml(channel.description)}</description>
    <language>en-us</language>
${items}
  </channel>
</rss>
`;
}

export function rssResponse(xml: string): Response {
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
