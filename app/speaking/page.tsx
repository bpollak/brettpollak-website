import type { Metadata } from 'next';
import Link from 'next/link';
import { mediaItems } from '@/lib/mediaData';

export const metadata: Metadata = {
  title: 'Speaking | Brett Pollak — AI in Higher Education',
  description:
    'Brett Pollak speaks on AI in higher education, agentic workflows, institutional AI governance, and how universities are building vertical AI at scale. Available for keynotes, panels, and conference sessions.',
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
      'Brett Pollak speaks on AI in higher education, agentic workflows, institutional AI governance, and how universities are building vertical AI at scale.',
    url: 'https://brettcpollak.com/speaking',
    siteName: 'Brett Pollak',
    type: 'profile',
    images: [
      {
        url: '/brett-pollak-headshot-sit-center.png',
        width: 500,
        height: 650,
        alt: 'Brett Pollak — AI in Higher Education Speaker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speaking | Brett Pollak — AI in Higher Education',
    description:
      'Keynotes, panels, and conference sessions on institutional AI, agentic workflows, and AI governance in higher education.',
    images: ['/brett-pollak-headshot-sit-center.png'],
  },
};

const SPEAKING_TOPICS = [
  {
    title: 'Building Vertical AI at Scale',
    description:
      'How UC San Diego moved from generic AI tools to purpose-built, on-premises institutional AI — and what it takes to go from pilot to 73,000 users. Covers architecture, governance, and the difference between deploying a chatbot and building infrastructure.',
    signals: ['TritonAI', 'TritonGPT', 'LiteLLM', 'Vertical AI', 'On-premises AI'],
  },
  {
    title: 'Agentic AI Workflows in Higher Education',
    description:
      'The shift from AI assistants to AI agents that act — automating administrative workflows, delegating tasks across systems, and governing autonomous behavior in an institutional setting. Real deployments: contract review (91% turnaround reduction), financial data agents, transcript matching.',
    signals: ['Agentic AI', 'AI workflows', 'AI automation', 'Agent orchestration', 'MCP'],
  },
  {
    title: 'AI Governance That Actually Works',
    description:
      'Governance isn\'t a brake on AI adoption — it\'s the infrastructure that makes adoption durable. How to build guardrails, data classification, and oversight frameworks that let an institution say yes faster, not slower.',
    signals: ['AI governance', 'Data classification', 'P1-P4 data policy', 'AI oversight', 'Responsible AI'],
  },
  {
    title: 'The Citizen Developer Program',
    description:
      'How UC San Diego built a governed developer enablement model so staff, researchers, and faculty can build their own AI-powered tools — with credits, templates, guardrails, and a 4-step access path from idea to deployed application.',
    signals: ['Citizen developer', 'Developer API', 'AI democratization', 'Low-code AI', 'Campus AI program'],
  },
  {
    title: 'AI as Institutional Infrastructure',
    description:
      'The case for treating AI like cloud, email, and identity — shared, governed, rechargeable infrastructure — rather than a department-by-department procurement race. Includes the multi-institution model: BearGPT (UC Berkeley), UC ANR, Fairleigh Dickinson University, UC Merced.',
    signals: ['AI infrastructure', 'Multi-tenant AI', 'Higher ed AI program', 'Shared AI services', 'UC system AI'],
  },
];

const NOW = new Date();
const TODAY_ISO = `${NOW.getFullYear()}-${String(NOW.getMonth() + 1).padStart(2, '0')}-${String(NOW.getDate()).padStart(2, '0')}`;

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
      'Brett Pollak is a technology executive and keynote speaker on AI in higher education. He leads TritonAI at UC San Diego — the institutional AI program serving 73,000+ users — and speaks on vertical AI deployment, agentic workflows, AI governance, and citizen developer enablement.',
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
    <div className="min-h-screen bg-gray-50" id="main-content">
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

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
            KEYNOTES · PANELS · CONFERENCE SESSIONS
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight">
            Speaking
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            I speak about what we&apos;ve actually built and learned at UC San Diego — not frameworks, not predictions.
            Real deployments, real outcomes, real friction. If that&apos;s useful for your audience, let&apos;s talk.
          </p>
        </div>

        {/* Speaking Topics */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Topics</h2>
          <p className="text-slate-500 mb-10">Keynote and breakout session topics I cover regularly. All are grounded in production deployments at UC San Diego.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {SPEAKING_TOPICS.map((topic, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{topic.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{topic.description}</p>
                <div className="flex flex-wrap gap-2">
                  {topic.signals.map((s, si) => (
                    <span
                      key={si}
                      className="px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-full border border-blue-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Engagements */}
        {UPCOMING_ENGAGEMENTS.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Upcoming Engagements</h2>
            <p className="text-slate-500 mb-10">Scheduled events and upcoming talks.</p>
            <div className="space-y-4">
              {UPCOMING_ENGAGEMENTS.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 bg-gradient-to-r from-blue-50 to-white rounded-xl px-7 py-5 border border-blue-200 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex flex-col items-center min-w-[70px]">
                    <div className="text-sm text-blue-700 font-mono pt-0.5 whitespace-nowrap">
                      {new Date(item.date + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })}
                    </div>
                    <div className="text-xs text-blue-500 font-semibold">
                      {new Date(item.date + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', timeZone: 'UTC' })}
                    </div>
                    <div className="mt-1 px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded-full uppercase tracking-wider">
                      Upcoming
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">{item.publication}</div>
                    <div className="text-slate-900 font-medium group-hover:text-blue-800 transition-colors">{item.title}</div>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-blue-500 mt-1 flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Past Engagements */}
        {PAST_ENGAGEMENTS.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Past Engagements</h2>
            <p className="text-slate-500 mb-10">Conferences, summits, and panels.</p>
            <div className="space-y-4">
              {PAST_ENGAGEMENTS.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 bg-white rounded-xl px-7 py-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="text-sm text-slate-400 font-mono pt-0.5 whitespace-nowrap min-w-[70px]">
                    {new Date(item.date + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">{item.publication}</div>
                    <div className="text-slate-900 font-medium group-hover:text-blue-800 transition-colors">{item.title}</div>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-blue-500 mt-1 flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* What to Expect */}
        <section className="mb-20 bg-white rounded-2xl p-10 border border-slate-100 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                heading: 'No slide decks full of AI hype',
                body: 'Specific use cases, real numbers, and honest failures. What worked, what didn\'t, and why.',
              },
              {
                heading: 'Deployable ideas',
                body: 'Every session surfaces things your audience can take back and try — not just frameworks to think about.',
              },
              {
                heading: 'Institutional perspective',
                body: 'I\'m not a vendor or a consultant. I run a 5.7-FTE team serving 73,000 users. That shapes how I talk about AI.',
              },
            ].map((item, i) => (
              <div key={i}>
                <div className="w-10 h-1 bg-amber-400 mb-4 rounded-full"></div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.heading}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in having me speak?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            I speak at higher ed technology conferences, AI summits, and institutional leadership events.
            Let me know what you&apos;re planning and who&apos;s in the room.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-amber-400 text-slate-900 font-bold rounded-xl hover:bg-amber-300 transition-colors"
          >
            Get in Touch
          </Link>
        </section>

      </div>
    </div>
  );
}
