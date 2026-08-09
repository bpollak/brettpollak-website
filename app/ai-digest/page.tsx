import type { Metadata } from 'next';
import { SITE_URL, latestDigestDate } from '@/lib/seoDates';
import { weeklyAiDigestData } from '@/lib/weeklyAiDigestData';
import { linkDigestHeadlines, renderMarkdown, sanitizePublicDigest } from '@/lib/markdown';
import SubscribeForm from '@/components/ai-digest/SubscribeForm';

export const metadata: Metadata = {
  title: 'AI Digest — Curated AI Developments',
  description: 'A weekly archive of daily AI briefings covering product launches, enterprise moves, and higher education implications.',
  alternates: {
    canonical: 'https://brettcpollak.com/ai-digest',
    types: {
      'application/rss+xml': '/ai-digest/feed.xml',
    },
  },
  openGraph: {
    title: 'AI Digest | Curated AI Developments',
    description: 'Daily AI briefings covering product launches, enterprise moves, and higher education implications.',
    url: 'https://brettcpollak.com/ai-digest',
    siteName: 'Brett Pollak',
    type: 'article',
    images: [
      {
        url: '/ai-use-case-meeting.png',
        width: 1280,
        height: 800,
        alt: 'AI digest and higher education signal tracking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Digest | Curated AI Developments',
    description: 'Daily AI briefings covering product launches, enterprise moves, and higher education implications.',
    images: ['/ai-use-case-meeting.png'],
  },
};

export default function AiDigestPage() {
  const { weekLabel, publishedThrough, digestCount, headlineCount, days } = weeklyAiDigestData;
  const daysNewestFirst = [...days].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  const digestSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/ai-digest#article`,
    headline: `This Week in AI Digest — ${weekLabel}`,
    description:
      'A weekly archive of daily AI briefings covering product launches, enterprise moves, and higher education implications.',
    url: `${SITE_URL}/ai-digest`,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    datePublished: weeklyAiDigestData.weekOf,
    dateModified: latestDigestDate,
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  return (
    <main className="page-shell" id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(digestSchema) }}
      />
      <section className="page-hero">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <p className="rule-label mb-6">AI Digest</p>
        <h1 className="page-title mb-6">
          This Week in AI Digest
        </h1>
        <p className="page-intro mb-10">
          A weekly archive of daily AI briefings. Product launches, enterprise moves, and what matters for higher education. Updates as new digests publish and resets each Monday.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="editorial-panel p-6" data-tone="blue">
            <div className="rule-label mb-2">Current window</div>
            <div className="text-2xl font-semibold text-ink">{weekLabel}</div>
          </div>
          <div className="editorial-panel p-6" data-tone="green">
            <div className="rule-label mb-2">Daily digests posted</div>
            <div className="text-2xl font-semibold text-ink">{digestCount}</div>
          </div>
          <div className="editorial-panel p-6" data-tone="gold">
            <div className="rule-label mb-2">Headlines included</div>
            <div className="text-2xl font-semibold text-ink">{headlineCount}</div>
          </div>
        </div>

        <div className="editorial-panel px-5 py-4 text-sm text-[#7a4b0d]" data-tone="gold">
          Published through <span className="font-semibold">{publishedThrough}</span>. Days without an available digest are omitted rather than backfilled.
        </div>

        <div className="mt-8">
          <SubscribeForm />
        </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="space-y-12 md:space-y-14">
          {daysNewestFirst.map((day) => (
            <article
              key={day.isoDate}
              className="editorial-panel overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-white/10 editorial-dark">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{day.displayDate}</h2>
                    <p className="text-wash-blue text-sm mt-1">Source: {day.sourceFile}</p>
                  </div>
                  <div className="inline-flex w-fit items-center bg-white/10 px-4 py-2 text-sm font-semibold text-white border border-white/15">
                    {day.headlines.length} article{day.headlines.length === 1 ? '' : 's'}
                  </div>
                </div>
              </div>
              <div className="px-8 py-7">
                <div
                  className="prose prose-slate max-w-none prose-p:text-[1.06rem] prose-p:leading-9 prose-p:my-5 prose-li:text-[1.06rem] prose-li:leading-9 prose-li:my-4 prose-ul:my-6 prose-ol:my-6 prose-strong:text-ink prose-h2:text-ink prose-h3:text-ink prose-h2:mb-4 prose-h3:mb-3 prose-hr:border-line prose-hr:my-8 [&_ul>li]:mb-8 [&_ol>li]:mb-8 [&_a]:font-semibold [&_a]:text-signal-blue [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:decoration-blue-600 [&_a]:transition-colors [&_a:hover]:text-ink [&_a:hover]:decoration-blue-900"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(sanitizePublicDigest(linkDigestHeadlines(day.raw))) }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
