import type { Metadata } from 'next';
import { weeklyAiDigestData } from '@/lib/weeklyAiDigestData';

export const metadata: Metadata = {
  title: 'AI Digest | Brett Pollak',
  description:
    'A rolling weekly view of Brett Pollak’s AI digest headlines, updated daily and reset each Monday.',
  alternates: {
    canonical: '/ai-digest',
  },
  openGraph: {
    title: 'AI Digest | Brett Pollak',
    description:
      'A rolling weekly view of Brett Pollak’s AI digest headlines, updated daily and reset each Monday.',
    url: 'https://brettcpollak.com/ai-digest',
    siteName: 'Brett Pollak',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Digest | Brett Pollak',
    description:
      'A rolling weekly view of Brett Pollak’s AI digest headlines, updated daily and reset each Monday.',
  },
};

export default function AiDigestPage() {
  const { weekLabel, publishedThrough, digestCount, headlineCount, days } = weeklyAiDigestData;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/40" id="main-content">
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-8">
          AI DIGEST
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent tracking-tight pb-1 mb-6">
          This Week in AI Headlines
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-10">
          A running weekly set of headlines from the daily AI digest. This page updates as new daily digests are published and automatically rolls over to a new week every Monday.
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
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Headlines captured</div>
            <div className="text-2xl font-bold text-slate-900">{headlineCount}</div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50/80 px-5 py-4 text-sm text-amber-900">
          Published through <span className="font-semibold">{publishedThrough}</span>. Days without an available digest are omitted rather than backfilled.
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
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
                    {day.headlines.length} headline{day.headlines.length === 1 ? '' : 's'}
                  </div>
                </div>
              </div>
              <div className="px-8 py-7">
                <ul className="space-y-4">
                  {day.headlines.map((headline) => (
                    <li key={headline} className="flex items-start gap-4">
                      <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
                      <span className="text-lg leading-relaxed text-slate-700">{headline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
