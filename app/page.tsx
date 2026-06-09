import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { currentNow } from '@/lib/nowData';
import HomeHeroSystemMap from '@/components/home/HomeHeroSystemMap';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://brettcpollak.com/',
    // Repeated here because this page's `alternates` replaces the root
    // layout's in Next's metadata merge — without it the home page loses
    // the site-wide feed autodiscovery links.
    types: {
      'application/rss+xml': [
        { url: '/media/feed.xml', title: 'Media & Appearances — Brett Pollak' },
        { url: '/ai-digest/feed.xml', title: 'AI Digest — Brett Pollak' },
        { url: '/ucsd-ai-news/feed.xml', title: 'UC San Diego AI Weekly Update' },
      ],
    },
  },
  openGraph: {
    title: 'Brett Pollak | AI in Higher Education',
    description:
      'Notes and conversations about building useful, responsible AI in higher education, informed by work at UC San Diego on TritonAI, the Developer API Program, and citizen agentic development.',
    url: 'https://brettcpollak.com/',
    siteName: 'Brett Pollak',
    type: 'profile',
    images: [
      {
        url: '/brett-pollak-og-card.png',
        width: 1200,
        height: 630,
        alt: 'Brett Pollak, Executive Director, Workplace Technology and Infrastructure Services at UC San Diego',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brett Pollak | AI in Higher Education',
    description:
      'Building and learning from institutional AI in higher education, TritonAI, citizen-developer enablement, and the architecture behind it.',
    images: ['/brett-pollak-og-card.png'],
  },
};

function formatNowDate(iso: string): string {
  const d = new Date(iso + 'T12:00:00Z');
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

const heroBlurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAIAAABSnclZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB3ElEQVR4nAHRAS7+AJm26pm37Jq47py68J278Z688Z+98p++86O966a84wCftNmhueSjvu6lwfGnw/KoxPOoxvaoxvWnvuSmttMAo6qyqbfNrsLhsMTlsMPiscTis8npr8Hapa+8m5ybAJ+ZgairprC4w7O4x7W0urKwqbO1qaank5uUepGBXQCUhU+cknCmn46qnZaznYytlm6pmmOUh0mMej+GbjMAf28vhHVBiXtXjXhhnHtfl3ZAlHovf20hhG4uh3A6AHFeK3NgMW5cOG1XQXtfS31jQIdvO4FsM492QY91SACDbEOAaUFnVDZURDFXRTtdSjxzX0B9aTuZg0ebhkkAhnBSfmlPX04+RjkxRDg2SDs4Xk89cmI1koM7log2AHJgR2xbRlNFNzswKT4xLlA9NmJNOGhYK3JqJnVxHwBDOi1BOC45LyotJSIyJyRINSxTPS1SQCRJQhlGRhAAMSohMiolMCcmLCMhMCUhSTUrTDYoQjEhLyoTKSsLACsmGC4nHy8mJDMoJDUpIzwvJDImGicfEyAeCiIkCAAhHBIoIBkqIR00KSM8LyU/MiQvJRggGw0fHwgpKgcAFhAJHxcPIxoUMCUdPS4iQTEhMCQWIBoLISAILS0ILv2zdpLJpOwAAAAASUVORK5CYII=";

const questions = [
  'How should IT prepare the institution for a shift from applications people use to agents that work on their behalf?',
  'How do we decide which AI experiments should be retired, repeated, or scaled?',
  'How does IT govern agentic systems that can act across tools, data, and workflows?',
];

const systemLayers = [
  { label: 'Experiment', value: 'small bets, prototypes, local workflows' },
  { label: 'Evidence', value: 'usage, feedback, risk, fit' },
  { label: 'Durable Layer', value: 'platforms, APIs, governance, patterns' },
  { label: 'Scale', value: 'shared services, adoption, support' },
];

const fieldNotes = [
  {
    tone: 'blue',
    label: 'Experiment Pattern',
    title: 'Experiments need an exit ramp',
    body: 'Most prototypes should teach something and disappear. The useful ones need a path into shared infrastructure, support, and governance.',
  },
  {
    tone: 'gold',
    label: 'Decision Signal',
    title: 'Evidence decides what survives',
    body: 'The work is separating enthusiasm from durable value: who used it, what changed, what risks appeared, and what should scale.',
  },
  {
    tone: 'green',
    label: 'Architecture Note',
    title: 'Scale is a design constraint',
    body: 'A durable pattern has to survive outside the pilot team: documentation, ownership, funding, privacy, and repeatable operations.',
  },
];

const writingLinks = [
  {
    outlet: 'Forbes',
    topic: 'Faculty and AI',
    href: 'https://www.forbes.com/sites/avivalegatt/2025/08/10/why-faculty-hold-the-keys-to-higher-eds-ai-digital-transformation/',
  },
  {
    outlet: 'CIO.com',
    topic: 'Knowledge access',
    href: 'https://www.cio.com/article/4032770/unpacking-uc-san-diegos-use-of-llms-to-boost-access-to-knowledge.html',
  },
  {
    outlet: 'EdTech Magazine',
    topic: 'Campus implementation',
    href: 'https://edtechmagazine.com/higher/article/2025/05/uc-san-diego-launches-tritongpt-generative-ai-tool',
  },
  {
    outlet: 'EDUCAUSE Review',
    topic: 'Data and AI insights',
    href: 'https://er.educause.edu/articles/2025/2/ushering-in-a-new-era-of-ai-driven-data-insights-at-uc-san-diego',
  },
];

const routes = [
  { href: '/tritongpt', label: 'TritonAI', note: 'Program overview, examples, metrics' },
  { href: '/ai-agent-architecture', label: 'Agent Architecture', note: 'How the platform is being wired' },
  { href: '/media', label: 'Media', note: 'Articles, interviews, speaking' },
  { href: '/ai-digest', label: 'AI Digest', note: 'Weekly headlines and signals' },
  { href: '/products', label: 'Products', note: 'Built tools and experiments' },
  { href: '/now', label: 'Now', note: 'Current focus areas' },
];

function HomePracticeMark() {
  return (
    <svg
      aria-hidden="true"
      className="diagram h-24 w-32 shrink-0"
      viewBox="0 0 160 120"
      fill="none"
    >
      <path d="M20 100h120" stroke="#d9dfd3" strokeWidth="2" />
      <path d="M30 84v16M80 56v44M130 32v68" stroke="#d9dfd3" strokeWidth="2" strokeDasharray="4 5" />
      <path
        className="flow-path"
        d="M30 84 80 56 130 32"
        stroke="#485248"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="84" r="7" fill="#1f5a8a" />
      <circle cx="80" cy="56" r="7" fill="#c97712" />
      <circle cx="130" cy="32" r="7" fill="#366c5a" />
    </svg>
  );
}

function OperatingLoopDiagram() {
  return (
    <svg
      role="img"
      aria-labelledby="operating-loop-title operating-loop-desc"
      viewBox="0 0 720 260"
      className="h-auto w-full"
      fill="none"
    >
      <title id="operating-loop-title">Experiment to scale operating loop</title>
      <desc id="operating-loop-desc">
        A loop moving experiments through evidence, durable patterns, and scalable services.
      </desc>
      <rect x="1" y="1" width="718" height="258" rx="18" fill="#fffef9" stroke="#d9dfd3" strokeWidth="2" />
      {[
        'M276 79h168',
        'M550 108v42',
        'M452 187H276',
        'M170 158v-42',
      ].map((path, index) => (
        <path
          key={path}
          className={`flow-path${index % 2 ? ' flow-delay-1' : ''}`}
          d={path}
          fill="none"
          stroke="#485248"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      {[
        { x: 72, y: 50, num: '01', label: 'Experiment', sub: 'learn fast', color: '#1f5a8a' },
        { x: 452, y: 50, num: '02', label: 'Evidence', sub: 'decide what survives', color: '#366c5a' },
        { x: 452, y: 158, num: '03', label: 'Durable', sub: 'make repeatable', color: '#c97712' },
        { x: 72, y: 158, num: '04', label: 'Scale', sub: 'shared practice', color: '#c05643' },
      ].map((node) => (
        <g key={node.label}>
          <rect x={node.x} y={node.y} width="196" height="58" rx="8" fill="white" stroke="#d9dfd3" strokeWidth="2" />
          <rect x={node.x} y={node.y} width="7" height="58" rx="3.5" fill={node.color} />
          <text x={node.x + 196 - 16} y={node.y + 22} fill="#c97712" fontSize="12" fontWeight="700" textAnchor="end" fontFamily="monospace">
            {node.num}
          </text>
          <text x={node.x + 24} y={node.y + 27} fill="#17201b" fontSize="17" fontWeight="700">
            {node.label}
          </text>
          <text x={node.x + 24} y={node.y + 46} fill="#485248" fontSize="12" fontWeight="600">
            {node.sub}
          </text>
        </g>
      ))}
      <circle cx="360" cy="130" r="36" fill="#17201b" />
      <path d="M342 130h36M360 112v36" stroke="#f2b84b" strokeWidth="5" strokeLinecap="round" />
      <circle cx="360" cy="130" r="50" stroke="#d9dfd3" strokeWidth="2" strokeDasharray="4 7" />
    </svg>
  );
}

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brett Pollak",
    "jobTitle": "Executive Director, Workplace Technology & Infrastructure Services",
    "description": "Executive Director at UC San Diego sharing lessons from building TritonAI, the campus AI program that includes TritonGPT and other institutional AI efforts in higher education.",
    "url": "https://brettcpollak.com/",
    "image": "https://brettcpollak.com/brett-pollak-headshot-sit-center.png",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "University of California San Diego",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of California San Diego"
    },
    "knowsAbout": [
      "AI in Higher Education",
      "Institutional AI Deployment",
      "Vertical AI",
      "Agentic AI Workflows",
      "AI Governance",
      "Data Governance",
      "Citizen Developer Programs",
      "AI Infrastructure",
      "Digital Transformation",
      "TritonGPT",
      "TritonAI",
      "LiteLLM",
      "AI Agent Orchestration",
      "Higher Education Technology",
      "Technology Leadership",
      "AI Keynote Speaking",
      "AI Interviews and Publications"
    ],
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Technology Executive",
        "occupationLocation": { "@type": "City", "name": "San Diego, CA" }
      },
      {
        "@type": "Occupation",
        "name": "Keynote Speaker",
        "description": "Keynote speaker on AI in higher education, agentic workflows, institutional AI governance, and vertical AI deployment.",
        "occupationLocation": { "@type": "Country", "name": "United States" }
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/brettpollak/",
      "https://github.com/bpollak",
      "https://members.educause.edu/brett-pollak",
      "https://asugsvsummit.com/speakers/brett-pollak",
      "https://www.slideshare.net/bpollak"
    ]
  };

  const tritonAISchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TritonAI",
    "alternateName": "TritonAI Program at UC San Diego",
    "url": "https://brettcpollak.com/tritongpt",
    "description":
      "UC San Diego's institutional AI program, a shared ecosystem that includes TritonGPT, the TritonAI Developer API Program, and the Citizen Agentic Development Framework. Serves 73,000+ campus users.",
    "foundingDate": "2024",
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "University of California San Diego",
      "url": "https://ucsd.edu/"
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9f5] text-[#17201b]" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tritonAISchema) }}
      />

      <section className="paper-grid border-b border-[#d9dfd3]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-20 items-start">
            <div>
              <p className="rule-label mb-8">Higher education technology leadership</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] sm:leading-[1.02] lg:leading-[0.98] font-medium text-[#17201b] max-w-[20rem] sm:max-w-4xl">
                Making technology useful in higher education.
              </h1>
              <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-9 text-[#485248]">
                I lead technology, infrastructure, and digital workplace teams at UC San Diego,
                turning emerging tools into dependable services people actually use. Right now that
                work centers on practical AI through{' '}
                <Link href="/tritongpt" className="font-semibold text-[#1f5a8a] underline underline-offset-4 decoration-[#1f5a8a]/30">
                  TritonAI
                </Link>
                . This site collects the field notes, architecture, talks, and product experiments
                behind the question of what should be temporary, what should become durable, and
                what should scale.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/tritongpt"
                  className="inline-flex items-center justify-center rounded-sm bg-[#17201b] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1f5a8a] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
                >
                  Explore TritonAI
                </Link>
                <Link
                  href="/media"
                  className="inline-flex items-center justify-center rounded-sm border border-[#9eb7aa] px-6 py-3 text-sm font-semibold text-[#17201b] transition-colors hover:border-[#1f5a8a] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
                >
                  Browse media
                </Link>
              </div>
              <div className="mt-12 flex max-w-2xl flex-col gap-5 border border-[#d9dfd3] bg-white/75 p-5 shadow-[8px_8px_0_rgba(54,108,90,0.08)] sm:flex-row sm:items-center">
                <HomePracticeMark />
                <div>
                  <p className="rule-label mb-3">Operating idea</p>
                  <p className="text-base leading-7 text-[#485248]">
                    Run experiments deliberately, keep what proves durable, and move the surviving
                    patterns into shared infrastructure, governance, and scalable practice.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 lg:self-stretch">
              <div className="home-portrait-panel">
                <Image
                  src="/brettpollak-headshot-lean.webp"
                  alt="Brett Pollak"
                  fill
                  className="z-0 object-cover object-[center_36%]"
                  placeholder="blur"
                  blurDataURL={heroBlurDataURL}
                  priority
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 100vw"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#17201b]/70 via-[#17201b]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-6 text-white">
                  <p className="rule-label mb-3 text-white/70">UC San Diego field work</p>
                  <p className="max-w-sm text-xl md:text-2xl leading-8 font-medium">
                    Moving from promising tools to dependable services, shared practice, and campus trust.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-[1.05fr_0.95fr] gap-5">
                <div className="home-support-card p-5" data-tone="gold">
                  <p className="rule-label mb-4">Working questions</p>
                  <ol className="space-y-4 text-sm leading-6 text-[#485248]">
                    {questions.map((question, index) => (
                      <li key={question} className="grid grid-cols-[2.25rem_1fr] gap-3">
                        <span className="font-mono text-xs text-[#c97712]">0{index + 1}</span>
                        <span>{question}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="home-support-card home-support-card-dark p-5 text-white" data-tone="green">
                  <p className="rule-label mb-4 text-white/60">Current focus</p>
                  <p className="text-lg leading-7">
                    <span className="font-semibold">{currentNow.items[0].label}:</span> {currentNow.items[0].body}
                  </p>
                  <Link href="/now" className="mt-5 inline-block text-sm font-semibold text-[#f2b84b] underline underline-offset-4">
                    Updated {formatNowDate(currentNow.lastUpdated)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9dfd3] tint-gold">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <p className="rule-label mb-4">How it connects</p>
              <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#17201b]">
                Institutional inputs become useful outcomes.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#485248]">
                Knowledge, people, and tools route through governed institutional AI into the
                everyday work of service, instruction, and research.
              </p>
            </div>
            <div className="border border-[#d9dfd3] bg-white/70 p-4 shadow-[8px_8px_0_rgba(201,119,18,0.10)]">
              <HomeHeroSystemMap />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9dfd3] tint-blue">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <p className="rule-label mb-4">System map</p>
              <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#17201b]">
                Useful AI moves from experiment to evidence to scale.
              </h2>
            </div>
            <div>
              <div className="mb-5 border border-[#d9dfd3] bg-white/70 p-3 shadow-[8px_8px_0_rgba(31,90,138,0.08)]">
                <OperatingLoopDiagram />
              </div>
              <div className="grid sm:grid-cols-4 gap-3">
              {systemLayers.map((layer, index) => (
                <div key={layer.label} className="system-node p-4 min-h-36">
                  <div className="font-mono text-xs text-[#c97712] mb-5">0{index + 1}</div>
                  <h3 className="font-semibold text-[#17201b]">{layer.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#485248]">{layer.value}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-12">
          <div>
            <p className="rule-label mb-4">Field notes</p>
            <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#17201b]">
              What survives the experiment becomes the pattern.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {fieldNotes.map((note) => (
              <article key={note.title} className="field-note p-6" data-tone={note.tone}>
                <p className="rule-label mb-5">{note.label}</p>
                <h3 className="text-2xl leading-8 font-medium text-[#17201b]">{note.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#485248]">{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17201b] text-white accent-strip" data-tone="gold">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-12">
            <div>
              <p className="rule-label mb-4 text-white/55">Evidence and conversation</p>
              <h2 className="text-4xl md:text-5xl leading-tight font-medium">
                A publication index, not a logo wall.
              </h2>
              <p className="mt-6 text-white/70 leading-7">
                The media page keeps the longer record. These are a few entry points into the public conversation.
              </p>
            </div>
            <div className="divide-y divide-white/12 border-y border-white/12">
              {writingLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid gap-2 py-5 sm:grid-cols-[11rem_1fr_auto] sm:items-center text-white/78 transition-colors hover:text-white"
                >
                  <span className="font-semibold text-white">{item.outlet}</span>
                  <span>{item.topic}</span>
                  <span className="font-mono text-xs text-[#f2b84b]">external</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tint-green">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-12">
            <div>
              <p className="rule-label mb-4">Site index</p>
              <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#17201b]">
                Routes into the work.
              </h2>
            </div>
            <div className="border-y border-[#d9dfd3]">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="index-row grid gap-2 py-5 sm:grid-cols-[13rem_1fr_auto] sm:items-center"
                >
                  <span className="text-xl font-medium text-[#17201b]">{route.label}</span>
                  <span className="text-[#485248]">{route.note}</span>
                  <span className="font-mono text-xs text-[#1f5a8a]">open</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
