import type { Metadata } from 'next';
import { weeklyAiDigestData } from '@/lib/weeklyAiDigestData';
import { renderMarkdown } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'AI Digest | Brett Pollak',
  description:
    'A rolling weekly view of Brett Pollak’s curated daily AI digests, updated daily and reset each Monday.',
  alternates: {
    canonical: '/ai-digest',
  },
  openGraph: {
    title: 'AI Digest | Brett Pollak',
    description:
      'A rolling weekly view of Brett Pollak’s curated daily AI digests, updated daily and reset each Monday.',
    url: 'https://brettcpollak.com/ai-digest',
    siteName: 'Brett Pollak',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Digest | Brett Pollak',
    description:
      'A rolling weekly view of Brett Pollak’s curated daily AI digests, updated daily and reset each Monday.',
  },
};

export default function AiDigestPage() {
  const { weekLabel, publishedThrough, digestCount, headlineCount, days } = weeklyAiDigestData;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/40" id="main-content">
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-24 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-8">
          AI DIGEST
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent tracking-tight pb-1 mb-6">
          This Week in AI Digest
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-10">
          A rolling weekly archive of curated daily AI briefings focused on major developments, product launches, enterprise shifts, and higher education implications. This page updates as new digests are published and automatically resets to a new week every Monday.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Current window</div>
            <div className="text-2xl font-bold text-slate-900">{weekLabel}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Daily digests posted</div>
            <div className="text-2xl font-bold text-slate-900">{digestCount}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Headlines included</div>
            <div className="text-2xl font-bold text-slate-900">{headlineCount}</div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50/80 px-5 py-4 text-sm text-amber-900">
          Published through <span className="font-semibold">{publishedThrough}</span>. Days without an available digest are omitted rather than backfilled.
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-24">
        <div className="space-y-8">
          {days.map((day) => (
            <article
              key={day.isoDate}
              className="rounded-3xl border border-slate-200 bg-white/95 shadow-sm overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-slate-900 to-blue-900">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{day.displayDate}</h2>
                    <p className="text-blue-100 text-sm mt-1">Source: {day.sourceFile}</p>
                  </div>
                  <div className="inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white border border-white/15">
                    {day.headlines.length} article{day.headlines.length === 1 ? '' : 's'}
                  </div>
                </div>
              </div>
              <div className="px-8 md:px-10 xl:px-12 py-7 md:py-8">
                <div
                  className="prose prose-slate max-w-none 2xl:max-w-[110ch] prose-p:text-[1.08rem] prose-p:leading-8 prose-li:text-[1.08rem] prose-li:leading-8 prose-strong:text-slate-900 prose-h2:text-slate-900 prose-h3:text-slate-900 prose-hr:border-slate-200 [&_a]:font-semibold [&_a]:text-blue-800 [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:decoration-blue-600 [&_a]:bg-blue-50/70 [&_a]:px-1 [&_a]:rounded-sm [&_a]:transition-colors hover:[&_a]:text-blue-950 hover:[&_a]:decoration-blue-900 hover:[&_a]:bg-blue-100"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(day.raw) }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
