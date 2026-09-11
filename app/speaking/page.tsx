import type { Metadata } from 'next';
import Link from 'next/link';
import { speakerBio } from '@/lib/speakerBio';
import Image from 'next/image';
import { mediaItems } from '@/lib/mediaData';

export const metadata: Metadata = {
  title: 'Speaking — AI in Higher Education',
  description:
    'Brett Pollak speaks on AI in higher education, agentic workflows, and AI governance. Available for keynotes and conference sessions.',
  alternates: {
    canonical: 'https://brettcpollak.com/speaking',
  },
  keywords: [
    'Brett Pollak speaker',
    'AI keynote speaker higher education',
    'AI in higher education speaker',
    'TritonAI keynote',
    'TritonGPT speaker',
    'institutional AI governance speaker',
    'agentic AI workflows speaker',
    'AI vertical deployment university',
    'AI digital transformation higher ed',
    'UC San Diego AI speaker',
    'higher education technology keynote',
    'AI governance keynote',
  ],
  openGraph: {
    title: 'Speaking | Brett Pollak — AI in Higher Education',
    description:
      'Talks on AI in higher education, agentic workflows, and institutional AI governance.',
    url: 'https://brettcpollak.com/speaking',
    siteName: 'Brett Pollak',
    type: 'profile',
    images: [
      {
        url: '/brett-pollak-og-card.png',
        width: 1200,
        height: 630,
        alt: 'Brett Pollak — AI in Higher Education Speaker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speaking | Brett Pollak — AI in Higher Education',
    description:
      'Keynotes and conference sessions on institutional AI and agentic workflows in higher education.',
    images: ['/brett-pollak-og-card.png'],
  },
};

const SPEAKING_TOPICS = [
  {
    title: 'Institutional AI: From Pilot to Service',
    description:
      'How UC San Diego developed an institutional AI service from an early pilot. Covers architecture, governance, on-premises hosting, and lessons from campus use.',
    takeaway: 'What it takes to move from a pilot to a supported campus service.',
  },
  {
    title: 'Agentic AI Workflows in Higher Education',
    description:
      'How supervised AI agents are being tested in administrative workflows, including contract review, financial data questions, and transcript matching. Covers controls, review, and measured results.',
    takeaway: 'How to choose a workflow with clear limits and decide where human review belongs.',
  },
  {
    title: 'AI Governance in Practice',
    description:
      'A practical look at data classification, review, and guardrails for institutional AI. Includes where governance has helped and where questions remain unresolved.',
    takeaway: 'Questions to ask about data access, oversight, and responsibility before expanding use.',
  },
  {
    title: 'The Citizen Developer Program',
    description:
      'How UC San Diego supports staff, researchers, and faculty as they build AI tools. Includes credits, templates, guardrails, and the steps from an idea to a supported application.',
    takeaway: 'How to support people building tools without leaving each department to manage its own platform.',
  },
  {
    title: 'AI as Institutional Infrastructure',
    description:
      'How shared AI infrastructure can support campus services while reducing duplicated setup across departments. Includes examples from UC San Diego and peer institutions using related approaches.',
    takeaway: 'How to compare shared services, local hosting, and cloud access against institutional needs.',
  },
];

const TODAY_ISO = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Los_Angeles' }).format(new Date());

const ALL_SPEAKING = mediaItems
  .filter(i => i.category === 'speaking')
  .sort((a, b) => b.date.localeCompare(a.date));

const UPCOMING_ENGAGEMENTS = ALL_SPEAKING.filter(i => i.date >= TODAY_ISO);
const PAST_ENGAGEMENTS = ALL_SPEAKING.filter(i => i.date < TODAY_ISO);

export default function SpeakingPage() {
  const speakerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Brett Pollak',
    url: 'https://brettcpollak.com/',
    image: 'https://brettcpollak.com/brett-pollak-headshot-sit-center.png',
    jobTitle: 'Executive Director, Workplace Technology & Infrastructure Services',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'University of California San Diego',
      url: 'https://ucsd.edu/',
    },
    description:
      'Brett Pollak is an Executive Director at UC San Diego and speaks about institutional AI, agentic workflows, governance, and developer enablement in higher education.',
    knowsAbout: [
      'AI in Higher Education',
      'Institutional AI Deployment',
      'Vertical AI',
      'Agentic AI Workflows',
      'AI Governance',
      'Data Governance',
      'Citizen Developer Programs',
      'AI Infrastructure',
      'Digital Transformation',
      'TritonGPT',
      'TritonAI',
      'LiteLLM',
      'AI Agent Orchestration',
      'Higher Education Technology',
      'Technology Leadership',
    ],
    sameAs: [
      'https://www.linkedin.com/in/brettpollak/',
      'https://brettcpollak.com/',
    ],
  };

  const ALL_EVENTS = [...UPCOMING_ENGAGEMENTS, ...PAST_ENGAGEMENTS];
  const eventSchemas = ALL_EVENTS.map(e => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: e.title,
    url: e.url,
    startDate: e.date,
    organizer: {
      '@type': 'Organization',
      name: e.publication,
    },
    performer: {
      '@type': 'Person',
      name: 'Brett Pollak',
      url: 'https://brettcpollak.com/',
    },
    about: [
      'AI in Higher Education',
      'Institutional AI',
      'TritonAI',
    ],
  }));

  return (
    <main className="page-shell" id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakerSchema) }}
      />
      {eventSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <p className="rule-label mb-5">Talks · Panels · Campus conversations</p>
          <h1 className="page-title mb-6">Speaking</h1>
          <p className="page-intro">
            I speak about institutional AI work at UC San Diego, including what
            has worked, what has not, and the questions we are still working through.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact?topic=speaking#contact-form" className="button-primary">Ask about a talk</Link>
            <a href="#speaker-resources" className="button-secondary">Bio &amp; headshot</a>
          </div>
          <nav aria-label="Speaking page sections" className="reading-links mt-6">
            <a href="#topics">Topics</a><a href="#recording">Watch a session</a><a href="#engagements">Recent engagements</a>
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        <section id="topics" className="mb-14">
          <h2 className="mb-3 text-3xl font-medium">Topics for your audience</h2>
          <p className="mb-8 max-w-3xl leading-7 text-body">Sessions use campus examples to discuss practical tradeoffs, with measured results where available. These topics are starting points for a session shaped around your audience.</p>
          <div className="grid gap-5 md:grid-cols-2">
            {SPEAKING_TOPICS.map(topic => (
              <article key={topic.title} className="editorial-panel p-6">
                <h3 className="mb-3 text-2xl font-medium">{topic.title}</h3>
                <p className="text-base leading-7 text-body">{topic.description}</p>
                <p className="mt-5 border-t border-line pt-4 text-sm leading-6 text-body"><strong className="text-ink">Audience takeaway:</strong> {topic.takeaway}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="recording" className="mb-14 grid gap-8 border-y border-line py-8 md:grid-cols-2">
          <div>
            <p className="rule-label mb-3">Watch a session · September 2024</p>
            <h2 className="mb-4 text-3xl font-medium">A conversation about TritonGPT</h2>
            <p className="text-body leading-7">A UC Tech webinar with Vince Kellen, Allorah Pradenas, and me on the platform, campus use, and collaboration with other institutions. This recording reflects the program at that time.</p>
          </div>
          <div className="editorial-panel flex flex-col justify-center p-6">
            <a className="button-primary w-fit" href="https://www.youtube.com/watch?v=0V8TmUXY-z4" target="_blank" rel="noopener noreferrer">Watch the webinar on YouTube ↗</a>
            <a className="mt-5 text-sm font-semibold text-signal-blue underline underline-offset-4" href="https://uctechnews.ucop.edu/tritongpt-webinar-recap-democratizing-ai-for-uc-san-diego-and-the-broader-higher-education-community/">Read the UC Tech recap</a>
          </div>
        </section>

        <section id="speaker-resources" className="mb-14 editorial-panel p-6 md:p-8">
          <h2 className="mb-6 text-3xl font-medium">For event organizers</h2>
          <div className="grid gap-8 md:grid-cols-[10rem_1fr]">
            <Image src="/brettpollak-headshot-lean.webp" alt="Brett Pollak" width={160} height={200} className="h-48 w-40 object-cover object-[center_22%]" />
            <div>
              <h3 className="mb-3 text-xl font-semibold">Short biography</h3>
              <p className="max-w-3xl text-body leading-7">{speakerBio}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/speaking/bio.txt" download="brett-pollak-bio.txt" className="button-secondary">Download bio (TXT)</a>
                <a href="/brettpollak-headshot-lean.png" download="brett-pollak-headshot.png" className="button-secondary">Download headshot (PNG)</a>
              </div>
            </div>
          </div>
        </section>

        {UPCOMING_ENGAGEMENTS.length > 0 && <section className="mb-14">
          <h2 className="mb-6 text-3xl font-medium">Upcoming engagements</h2>
          <EngagementList items={UPCOMING_ENGAGEMENTS} />
        </section>}
        <section id="engagements" className="mb-14">
          <h2 className="mb-6 text-3xl font-medium">Recent engagements</h2>
          <EngagementList items={PAST_ENGAGEMENTS.slice(0, 3)} />
          {PAST_ENGAGEMENTS.length > 3 && <details className="mt-6 border border-line bg-paper-strong p-5">
            <summary className="cursor-pointer font-semibold text-signal-blue">Earlier engagements ({PAST_ENGAGEMENTS.length - 3})</summary>
            <div className="mt-5"><EngagementList items={PAST_ENGAGEMENTS.slice(3)} /></div>
          </details>}
        </section>
        <section className="editorial-panel editorial-dark p-8 text-white">
          <h2 className="mb-4 text-3xl font-medium text-white">Planning an event?</h2>
          <p className="mb-6 max-w-2xl leading-7 text-on-dark">Let me know the audience, topic, date, and format you have in mind.</p>
          <Link href="/contact?topic=speaking#contact-form" className="button-secondary bg-paper-strong">Ask about a talk</Link>
        </section>
      </div>
    </main>
  );
}

function EngagementList({ items }: { items: typeof mediaItems }) {
  return <ul className="space-y-3">{items.map(item => <li key={`${item.date}-${item.title}`}>
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="grid gap-2 border border-line bg-paper-strong p-5 hover:border-[#1f5a8a] sm:grid-cols-[6rem_1fr]">
      <time dateTime={item.date} className="text-sm text-muted">{new Date(`${item.date}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })}</time>
      <span className="min-w-0"><span className="block text-sm text-signal-blue">{item.publication}</span><span className="font-semibold">{item.title} <span aria-hidden="true">↗</span></span></span>
    </a>
  </li>)}</ul>;
}
