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
  const latestStatus = editionCount > 0
    ? `Published through ${publishedThrough}. New editions publish every Monday morning.`
    : 'The first edition publishes Monday morning. Check back soon or bookmark this page.';

  return (
    <main className="page-shell" id="main-content">
      <section className="page-hero ucsd-news-hero">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_19rem] lg:items-start">
            <div>
              <p className="rule-label mb-6">UC San Diego AI Weekly</p>
              <h1 className="page-title mb-6 max-w-[20rem] sm:max-w-none">
                UC San Diego AI Weekly Update
              </h1>
              <p className="page-intro mb-8 max-w-4xl break-words">
                A weekly roundup of what&rsquo;s new with UC San Diego&rsquo;s supported AI services.
                Each edition covers release notes from your supported tools, updates from TritonAI,
                and trainings coming up in the next two weeks.
              </p>

              <div className="flex flex-col gap-3 border-y border-[#d9dfd3] py-5 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
                <a
                  href="https://tritonai.ucsd.edu/"
                  className="group inline-flex w-fit items-center gap-2 font-semibold text-[#1f5a8a] underline decoration-2 underline-offset-4 decoration-[#1f5a8a]/35 transition-colors hover:text-blue-950 hover:decoration-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900/30 focus:ring-offset-2"
                >
                  Visit TritonAI platform
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href="https://tritonai.ucsd.edu/tritongpt/release-notes/"
                  className="group inline-flex w-fit items-center gap-2 font-semibold text-[#366c5a] underline decoration-2 underline-offset-4 decoration-[#366c5a]/35 transition-colors hover:text-emerald-900 hover:decoration-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-900/30 focus:ring-offset-2"
                >
                  View TritonGPT release notes
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <aside className="border-y border-[#d9dfd3] py-6 lg:mt-3" aria-label="Archive summary">
              <p className="rule-label mb-5">Latest edition</p>
              <div className="font-[family-name:var(--font-display)] text-4xl font-medium leading-tight text-[#17201b]">
                {weekLabel}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#d9dfd3] pt-5">
                <div>
                  <div className="font-mono text-2xl text-[#17201b]">{editionCount}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#5f6a61]">
                    Editions
                  </div>
                </div>
                <div>
                  <div className="font-mono text-2xl text-[#17201b]">{itemCount}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#5f6a61]">
                    Items
                  </div>
                </div>
              </div>
              <p className="mt-6 border-t border-[#d9dfd3] pt-5 text-sm leading-6 text-[#36423a]">
                {latestStatus}
              </p>
            </aside>
          </div>
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
                        [&_a:hover]:text-blue-950 [&_a:hover]:decoration-blue-900
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
