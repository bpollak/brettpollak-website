import type { Metadata } from 'next';
import { weeklyAiDigestData } from '@/lib/weeklyAiDigestData';
import { linkDigestHeadlines, renderMarkdown, sanitizePublicDigest } from '@/lib/markdown';
import SubscribeForm from '@/components/ai-digest/SubscribeForm';

export const metadata: Metadata = {
  title: 'AI Digest | Curated AI Developments',
  description: 'A rolling weekly archive of curated daily AI developments, product launches, enterprise shifts, and higher education implications.',
  alternates: {
    canonical: 'https://brettcpollak.com/ai-digest',
  },
  openGraph: {
    title: 'AI Digest | Curated AI Developments',
    description: 'Curated daily AI developments, product launches, enterprise shifts, and higher education implications.',
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
    description: 'Curated daily AI developments, product launches, enterprise shifts, and higher education implications.',
    images: ['/ai-use-case-meeting.png'],
  },
};

export default function AiDigestPage() {
  const { weekLabel, publishedThrough, digestCount, headlineCount, days } = weeklyAiDigestData;
  const daysNewestFirst = [...days].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  return (
    <main className="page-shell" id="main-content">
      <section className="page-hero">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <p className="rule-label mb-6">AI Digest</p>
        <h1 className="page-title mb-6">
          This Week in AI Digest
        </h1>
        <p className="page-intro mb-10">
          A rolling weekly archive of curated daily AI briefings focused on major developments, product launches, enterprise shifts, and higher education implications. This page updates as new digests are published and automatically resets to a new week every Monday.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="editorial-panel p-6" data-tone="blue">
            <div className="rule-label mb-2">Current window</div>
            <div className="text-2xl font-semibold text-[#17201b]">{weekLabel}</div>
          </div>
          <div className="editorial-panel p-6" data-tone="green">
            <div className="rule-label mb-2">Daily digests posted</div>
            <div className="text-2xl font-semibold text-[#17201b]">{digestCount}</div>
          </div>
          <div className="editorial-panel p-6" data-tone="gold">
            <div className="rule-label mb-2">Headlines included</div>
            <div className="text-2xl font-semibold text-[#17201b]">{headlineCount}</div>
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
                    <p className="text-blue-100 text-sm mt-1">Source: {day.sourceFile}</p>
                  </div>
                  <div className="inline-flex w-fit items-center bg-white/10 px-4 py-2 text-sm font-semibold text-white border border-white/15">
                    {day.headlines.length} article{day.headlines.length === 1 ? '' : 's'}
                  </div>
                </div>
              </div>
              <div className="px-8 py-7">
                <div
                  className="prose prose-slate max-w-none prose-p:text-[1.06rem] prose-p:leading-9 prose-p:my-5 prose-li:text-[1.06rem] prose-li:leading-9 prose-li:my-4 prose-ul:my-6 prose-ol:my-6 prose-strong:text-slate-900 prose-h2:text-slate-900 prose-h3:text-slate-900 prose-h2:mb-4 prose-h3:mb-3 prose-hr:border-slate-200 prose-hr:my-8 [&_ul>li]:mb-8 [&_ol>li]:mb-8 [&_a]:font-semibold [&_a]:text-blue-800 [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:decoration-blue-600 [&_a]:transition-colors hover:[&_a]:text-blue-950 hover:[&_a]:decoration-blue-900"
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
