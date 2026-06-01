import type { Metadata } from 'next';
import { ucsdAiNewsletterData } from '@/lib/ucsdAiNewsletterData';
import { renderMarkdown } from '@/lib/markdown';

// Intentionally NOT using sanitizePublicDigest or linkDigestHeadlines here.
// Those utilities were built for the /ai-digest page (Brett's personal daily
// digest archive) and rewrite second-person pronouns ("you" → "organizations",
// "your" → "institutional") to scrub personal references before publication.
// This newsletter is written directly TO UCSD staff in second person, so that
// scrubbing would corrupt the voice. The agent's draft is already audience-safe.

export const metadata: Metadata = {
  title: 'UC San Diego AI Weekly Update | Brett Pollak',
  description:
    'A weekly roundup of what’s new with UC San Diego’s supported AI services — tool release notes, TritonAI updates, and upcoming trainings for campus staff.',
  alternates: {
    canonical: 'https://brettcpollak.com/ucsd-ai-news',
  },
  openGraph: {
    title: 'UC San Diego AI Weekly Update | Brett Pollak',
    description:
      'A weekly roundup of what’s new with UC San Diego’s supported AI services — tool release notes, TritonAI updates, and upcoming trainings for campus staff.',
    url: 'https://brettcpollak.com/ucsd-ai-news',
    siteName: 'Brett Pollak',
    type: 'article',
    images: [
      {
        url: '/tritongpt-uc-san-diego-assistant.png',
        width: 1200,
        height: 800,
        alt: 'UC San Diego AI weekly updates and TritonAI platform notes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UC San Diego AI Weekly Update | Brett Pollak',
    description:
      'A weekly roundup of what’s new with UC San Diego’s supported AI services — tool release notes, TritonAI updates, and upcoming trainings for campus staff.',
    images: ['/tritongpt-uc-san-diego-assistant.png'],
  },
};

export default function UcsdAiNewsPage() {
  const { weekLabel, publishedThrough, editionCount, itemCount, editions } = ucsdAiNewsletterData;
  const editionsNewestFirst = [...editions].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  return (
    <main className="page-shell" id="main-content">
      <section className="page-hero">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <p className="rule-label mb-6">UC San Diego AI Weekly</p>
        <h1 className="page-title mb-6 max-w-[20rem] sm:max-w-none">
          UC San Diego AI Weekly Update
        </h1>
        <p className="page-intro mb-8 max-w-full break-words">
          A weekly roundup of what&rsquo;s new with UC San Diego&rsquo;s supported AI services. Each edition
          covers release notes from your supported tools, updates from TritonAI, and trainings
          coming up in the next two weeks.
        </p>

        <a
          href="https://tritonai.ucsd.edu/"
          className="group block max-w-3xl mb-12 editorial-panel p-5 sm:p-6 transition-colors hover:border-[#1f5a8a] focus:outline-none focus:ring-2 focus:ring-blue-900/30 focus:ring-offset-2"
          data-tone="blue"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex-none rounded-xl bg-white/80 border border-blue-200/60 p-3 shadow-sm group-hover:border-blue-300 transition-colors">
              <svg
                className="w-6 h-6 text-blue-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0 max-w-full">
              <div className="text-xs uppercase tracking-[0.18em] text-blue-800 font-semibold mb-1.5">
                Official UCSD AI Platform
              </div>
              <p className="text-base text-slate-700 leading-relaxed max-w-full break-words">
                This newsletter is curated for UCSD staff. For the full TritonAI platform &mdash;
                supported tools, trainings, documentation, and support &mdash;{' '}
                <span className="font-semibold text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-600 group-hover:text-blue-950 group-hover:decoration-blue-900 transition-colors break-words">
                  visit the TritonAI platform
                  <span className="inline-block ml-1 transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </span>
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://tritonai.ucsd.edu/tritongpt/release-notes/"
          className="group block max-w-3xl mb-6 editorial-panel p-5 sm:p-6 transition-colors hover:border-[#366c5a] focus:outline-none focus:ring-2 focus:ring-emerald-900/30 focus:ring-offset-2"
          data-tone="green"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex-none rounded-xl bg-white/80 border border-emerald-200/60 p-3 shadow-sm group-hover:border-emerald-300 transition-colors">
              <svg
                className="w-6 h-6 text-emerald-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0 max-w-full">
              <div className="text-xs uppercase tracking-[0.18em] text-emerald-700 font-semibold mb-1.5">
                TritonGPT Release Notes
              </div>
              <p className="text-base text-slate-700 leading-relaxed max-w-full break-words">
                See what&rsquo;s new in TritonGPT &mdash; feature releases, updates, and fixes &mdash;{' '}
                <span className="font-semibold text-emerald-700 underline decoration-2 underline-offset-4 decoration-emerald-500 group-hover:text-emerald-900 group-hover:decoration-emerald-700 transition-colors break-words">
                  view the release notes
                  <span className="inline-block ml-1 transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </span>
              </p>
            </div>
          </div>
        </a>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="editorial-panel p-6" data-tone="blue">
            <div className="rule-label mb-2">Latest edition</div>
            <div className="text-2xl font-semibold text-[#17201b]">{weekLabel}</div>
          </div>
          <div className="editorial-panel p-6" data-tone="green">
            <div className="rule-label mb-2">Editions in archive</div>
            <div className="text-2xl font-semibold text-[#17201b]">{editionCount}</div>
          </div>
          <div className="editorial-panel p-6" data-tone="gold">
            <div className="rule-label mb-2">Items included</div>
            <div className="text-2xl font-semibold text-[#17201b]">{itemCount}</div>
          </div>
        </div>

        {editionCount > 0 ? (
          <div className="editorial-panel px-5 py-4 text-sm text-[#7a4b0d]" data-tone="gold">
            Published through <span className="font-semibold">{publishedThrough}</span>. New editions
            publish every Monday morning.
          </div>
        ) : (
          <div className="editorial-panel px-5 py-4 text-sm text-[#485248]">
            The first edition publishes Monday morning. Check back soon — or bookmark this page to
            see it automatically.
          </div>
        )}
        </div>
      </section>

      {editionCount > 0 && (
        <section id="ai-updates" className="max-w-6xl mx-auto px-6 pb-24">
          <div className="space-y-12 md:space-y-14">
            {editionsNewestFirst.map((edition) => {
              const totalItems =
                edition.toolUpdatesCount + edition.tritonAiNewsCount + edition.upcomingTrainingsCount;
              return (
                <article
                  key={edition.isoDate}
                  className="editorial-panel overflow-hidden"
                >
                  <div className="px-8 py-6 border-b border-white/10 editorial-dark">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h2 className="text-2xl font-semibold text-white">{edition.displayDate}</h2>
                        <p className="text-blue-100 text-sm mt-1">Source: {edition.sourceFile}</p>
                      </div>
                      <div className="inline-flex w-fit items-center bg-white/10 px-4 py-2 text-sm font-semibold text-white border border-white/15">
                        {totalItems} item{totalItems === 1 ? '' : 's'}
                      </div>
                    </div>
                  </div>
                  <div className="px-8 py-7">
                    <div
                      className="max-w-none text-slate-700
                        [&_p]:text-[1.06rem] [&_p]:leading-9 [&_p]:my-5 [&_p]:text-slate-700
                        [&_ul]:my-6 [&_ul]:pl-0
                        [&_ul>li]:list-none [&_ul>li]:pl-5 [&_ul>li]:mb-8
                        [&_ul>li]:border-l-2 [&_ul>li]:border-slate-100
                        [&_ul>li]:text-[1.06rem] [&_ul>li]:leading-9 [&_ul>li]:text-slate-700
                        [&_strong]:text-slate-900 [&_strong]:font-bold
                        [&_h2]:text-2xl md:[&_h2]:text-3xl
                        [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900
                        [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:pb-3
                        [&_h2]:border-b-2 [&_h2]:border-blue-900/20
                        [&_h3]:text-sm [&_h3]:uppercase [&_h3]:tracking-[0.18em]
                        [&_h3]:text-slate-500 [&_h3]:font-semibold
                        [&_h3]:mt-16 [&_h3]:mb-5 [&_h3]:pb-2
                        [&_h3]:border-b [&_h3]:border-slate-200
                        [&_hr]:border-slate-200 [&_hr]:my-10
                        [&_a]:font-semibold [&_a]:text-blue-800
                        [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:decoration-blue-600
                        [&_a]:transition-colors
                        hover:[&_a]:text-blue-950 hover:[&_a]:decoration-blue-900
                        [&_em]:text-slate-500 [&_em]:text-[0.95rem]"
                      dangerouslySetInnerHTML={{
                        __html: renderMarkdown(edition.raw),
                      }}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
