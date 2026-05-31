import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { currentNow } from '@/lib/nowData';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://brettcpollak.com/',
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
        url: '/brett-pollak-headshot-sit-center.png',
        width: 500,
        height: 650,
        alt: 'Brett Pollak, Executive Director, Workplace Technology and Infrastructure Services at UC San Diego',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brett Pollak | AI in Higher Education',
    description:
      'Building and learning from institutional AI in higher education, TritonAI, citizen-developer enablement, and the architecture behind it.',
    images: ['/brett-pollak-headshot-sit-center.png'],
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
  'How should public institutions make AI useful without making governance an afterthought?',
  'What belongs in shared infrastructure, and what should stay close to local teams?',
  'How do campus communities move from experimentation to trusted daily practice?',
];

const systemLayers = [
  { label: 'Campus Need', value: 'service, instruction, operations' },
  { label: 'Shared Layer', value: 'TritonAI, APIs, tools, governance' },
  { label: 'Practice', value: 'assistants, workflows, field notes' },
  { label: 'Learning Loop', value: 'adoption, evidence, iteration' },
];

const fieldNotes = [
  {
    tone: 'blue',
    label: 'Implementation Pattern',
    title: 'Infrastructure first, use cases second',
    body: 'The durable work is building a governed platform that lets many teams solve local problems without starting from zero each time.',
  },
  {
    tone: 'gold',
    label: 'Campus Signal',
    title: 'Adoption is an operating model',
    body: 'Training, support, feedback, and clear ownership matter as much as the model behind an assistant.',
  },
  {
    tone: 'green',
    label: 'Architecture Note',
    title: 'Institutional context is the product',
    body: 'The value comes from connecting AI to trusted campus knowledge, policy, workflow, and data stewardship.',
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
      "https://educause.edu",
      "https://brettcpollak.com/speaking"
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
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-20 items-end">
            <div>
              <p className="rule-label mb-8">Higher education AI practice</p>
              <h1 className="text-6xl md:text-7xl xl:text-8xl leading-[0.96] font-medium text-[#17201b] max-w-4xl">
                Building institutional AI with the institution still in view.
              </h1>
              <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-9 text-[#485248]">
                I work with colleagues at UC San Diego on practical AI systems through{' '}
                <Link href="/tritongpt" className="font-semibold text-[#1f5a8a] underline underline-offset-4 decoration-[#1f5a8a]/30">
                  TritonAI
                </Link>
                . This site collects the field notes, architecture, talks, and product experiments that come from that work.
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
                  Browse writing
                </Link>
              </div>
            </div>

            <div className="grid sm:grid-cols-[0.88fr_1.12fr] gap-5 items-end">
              <div className="relative border border-[#d9dfd3] bg-[#fffef9] p-3">
                <Image
                  src="/brett-pollak-headshot-sit-center.webp"
                  alt="Brett Pollak"
                  width={500}
                  height={753}
                  className="w-full grayscale-[15%]"
                  placeholder="blur"
                  blurDataURL={heroBlurDataURL}
                  priority
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>

              <div className="space-y-5">
                <div className="border border-[#d9dfd3] bg-[#fffef9] p-5">
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
                <div className="border border-[#d9dfd3] bg-[#17201b] p-5 text-white">
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

      <section className="border-b border-[#d9dfd3] tint-blue">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <p className="rule-label mb-4">System map</p>
              <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#17201b]">
                The shape of the work is platform, practice, and feedback.
              </h2>
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
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-12">
          <div>
            <p className="rule-label mb-4">Field notes</p>
            <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#17201b]">
              Reusable patterns from real campus work.
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
