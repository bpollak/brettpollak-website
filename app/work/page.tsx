import type { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/lib/caseStudies';

export const metadata: Metadata = {
  title: 'Selected work: Campus Services, Data, and AI',
  description: 'Three examples from Brett Pollak’s work at UC San Diego: responsive campus websites, student analytics, and TritonGPT.',
  alternates: { canonical: 'https://brettcpollak.com/work' },
};

export default function WorkPage() {
  return <main id="main-content" tabIndex={-1} className="page-shell">
    <section className="page-hero">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <p className="rule-label mb-5">Campus services · Data · AI</p>
        <h1 className="page-title mb-6">Selected work</h1>
        <p className="page-intro">Three examples from my work with teams at UC San Diego. Each covers the problem, my role, and what the team delivered.</p>
        <nav className="reading-links mt-7" aria-label="Case studies">{caseStudies.map(study => <a key={study.id} href={`#${study.id}`}>{study.category}</a>)}</nav>
      </div>
    </section>
    <div className="mx-auto max-w-6xl px-6">
      {caseStudies.map(study => <article id={study.id} key={study.id} className="grid gap-8 border-b border-line py-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="rule-label mb-4">{study.category} · {study.period}</p>
          <h2 className="text-3xl font-medium leading-tight md:text-4xl">{study.title}</h2>
        </div>
        <div>
          <dl className="space-y-5">{[
            ['The problem', study.problem], ['My role', study.role], ['The team’s work', study.work], ['The result', study.result], ['A lesson', study.lesson],
          ].map(([label, text]) => <div key={label}><dt className="mb-1 font-semibold text-ink">{label}</dt><dd className="leading-7 text-body">{text}</dd></div>)}</dl>
          <div className="mt-7 border-t border-line pt-5">
            <h3 className="rule-label mb-3">Read the source accounts</h3>
            <ul className="space-y-4">{study.sources.map(source => <li key={source.url}>
              <a href={source.url} className="font-semibold text-signal-blue underline underline-offset-4">{source.title}</a>
              <p className="mt-1 text-sm text-muted">{source.publisher}</p>
            </li>)}</ul>
          </div>
          {study.id === 'tritongpt' && <Link href="/tritongpt" className="button-secondary mt-6">Current TritonAI program overview</Link>}
        </div>
      </article>)}
      <p className="py-10 text-body">For applications and smaller builds, explore <Link href="/products" className="font-semibold text-signal-blue underline underline-offset-4">Projects</Link>.</p>
    </div>
  </main>;
}
