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
      'Notes and conversations about building useful, responsible AI in higher education — informed by work at UC San Diego on TritonAI, the Developer API Program, and citizen agentic development.',
    url: 'https://brettcpollak.com/',
    siteName: 'Brett Pollak',
    type: 'profile',
    images: [
      {
        url: '/brett-pollak-headshot-sit-center.png',
        width: 500,
        height: 650,
        alt: 'Brett Pollak — Executive Director, Workplace Technology & Infrastructure Services at UC San Diego',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brett Pollak | AI in Higher Education',
    description:
      'Building and learning from institutional AI in higher education — TritonAI, citizen-developer enablement, and the architecture behind it.',
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

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brett Pollak",
    "jobTitle": "Executive Director, Workplace Technology & Infrastructure Services",
    "description": "Executive Director at UC San Diego sharing lessons from building TritonAI — the campus AI program that includes TritonGPT and other institutional AI efforts in higher education.",
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
      "UC San Diego's institutional AI program — a shared ecosystem that includes TritonGPT (the campus AI assistant platform), the TritonAI Developer API Program, and the Citizen Agentic Development Framework. Serves 73,000+ campus users.",
    "foundingDate": "2024",
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "University of California San Diego",
      "url": "https://ucsd.edu/"
    }
  };

  return (
    <div className="min-h-screen bg-paper" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tritonAISchema) }}
      />
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-28">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div className="md:col-span-7 md:pr-8 animate-slide-in-left">
            <div className="eyebrow mb-8">
              Higher Education · AI Practice · Shared Learning
            </div>
            <h1 className="display-title display-title--xl mb-8 break-words">
              Brett<br />Pollak
            </h1>
            <div className="divider-accent w-32 mb-10"></div>
            <p className="text-2xl md:text-4xl text-ink mb-8 font-semibold leading-tight">
              Building and learning from institutional AI in higher education
            </p>
            <div className="flex items-center gap-3 mb-10">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <p className="mono-label text-sm text-ink font-semibold">
                San Diego, California
              </p>
            </div>
            <p className="text-xl text-muted leading-relaxed mb-12 max-w-xl">
              I work with colleagues at UC San Diego on practical AI systems through <Link href="/tritongpt" className="font-bold text-ink underline underline-offset-2 decoration-accent decoration-2 hover:text-accent transition-colors">TritonAI</Link>. This site is a place to share what we&apos;re learning about implementation, governance, adoption, and the institutional questions that matter once AI moves beyond experimentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="btn-bold px-10 py-5 text-lg uppercase tracking-wide group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink"
              >
                Start a Conversation
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <p className="text-sm text-muted max-w-xl">
              If you&apos;re working on similar questions in higher education, I&apos;d be glad to compare notes and learn from your experience.
            </p>
          </div>
          <div className="md:col-span-5 relative animate-slide-in-right">
            <div className="hidden md:block absolute -bottom-4 -left-4 w-full h-full bg-accent -z-10"></div>
            <div className="relative">
              <Image
                src="/brett-pollak-headshot-sit-center.png"
                alt="Brett Pollak"
                width={500}
                height={753}
                className="w-full border-2 border-ink relative z-10"
                placeholder="blur"
                blurDataURL={heroBlurDataURL}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Currently — pulled from /now */}
      <section className="bg-paper-2 border-y-2 border-ink py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="w-full">
            <div className="card-hard p-7 md:p-9">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <span className="eyebrow eyebrow--accent">
                  Currently
                </span>
                <span className="text-xs text-muted md:ml-auto font-[family-name:var(--font-geist-mono)]">
                  {formatNowDate(currentNow.lastUpdated)}
                </span>
              </div>
              <p className="text-lg text-ink leading-8 mb-5">
                <span className="font-bold text-ink">
                  {currentNow.items[0].label}:
                </span>{' '}
                {currentNow.items[0].body}
              </p>
              <Link
                href="/now"
                className="group inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-ink hover:text-accent transition-colors"
              >
                See what else I&rsquo;m focused on
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* As Featured In */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="eyebrow mb-6">
              Writing & Conversations
            </div>
            <h2 className="display-title display-title--lg mb-6">Writing and Conversations</h2>
            <div className="divider-accent w-24"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Forbes",
                topic: "Faculty and AI",
                url: "https://www.forbes.com/sites/avivalegatt/2025/08/10/why-faculty-hold-the-keys-to-higher-eds-ai-digital-transformation/"
              },
              {
                name: "CIO.com",
                topic: "Knowledge Access",
                url: "https://www.cio.com/article/4032770/unpacking-uc-san-diegos-use-of-llms-to-boost-access-to-knowledge.html"
              },
              {
                name: "EdTech Magazine",
                topic: "Campus Implementation",
                url: "https://edtechmagazine.com/higher/article/2025/05/uc-san-diego-launches-tritongpt-generative-ai-tool"
              },
              {
                name: "EDUCAUSE Review",
                topic: "Implementation Lessons",
                url: "https://er.educause.edu/articles/2025/2/ushering-in-a-new-era-of-ai-driven-data-insights-at-uc-san-diego"
              }
            ].map((pub, idx) => (
              <a
                key={idx}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-hard flex items-center justify-center p-6 hover:bg-accent animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="text-center relative">
                  <div className="text-2xl font-bold text-ink mb-1 transition-colors flex items-center justify-center gap-2">
                    {pub.name}
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div className="text-sm text-muted group-hover:text-ink transition-colors font-[family-name:var(--font-geist-mono)] uppercase tracking-wide">{pub.topic}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-12">
            <p className="text-muted mb-6 text-lg max-w-2xl">
              Articles, interviews, and case studies across 30+ publications on AI and institutional change in higher education
            </p>
            <Link
              href="/media"
              className="btn-bold px-8 py-3.5 uppercase tracking-wide group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink"
            >
              Browse Writing & Media
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Statement Cards */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="eyebrow eyebrow--accent mb-6 text-paper">
              In Practice
            </div>
            <h2 className="display-title display-title--lg text-paper mb-6">What We&apos;re Learning in Practice</h2>
            <div className="divider-accent w-24"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-paper/20 p-8 hover:border-accent transition-colors duration-300 group animate-slide-up delay-100">
              <div className="stat-number mb-2">73K<span className="text-3xl align-top">+</span></div>
              <div className="stat-label text-paper/60 mb-6">Users across campus</div>
              <h3 className="text-2xl font-bold text-paper mb-4">Making Knowledge Easier to Reach</h3>
              <p className="text-paper/70 leading-relaxed">
                At UC San Diego, <Link href="/tritongpt" className="text-accent underline underline-offset-2 decoration-2 hover:text-paper transition-colors">TritonGPT</Link> helps students, faculty, and staff find institutional knowledge more quickly in the course of everyday work.
              </p>
            </div>
            <div className="border-2 border-paper/20 p-8 hover:border-accent transition-colors duration-300 group animate-slide-up delay-200">
              <div className="stat-number mb-2">91<span className="text-3xl align-top">%</span></div>
              <div className="stat-label text-paper/60 mb-6">Time reduction</div>
              <h3 className="text-2xl font-bold text-paper mb-4">Reducing Administrative Friction</h3>
              <p className="text-paper/70 leading-relaxed">
                In workflows like contract review, <Link href="/tritongpt" className="text-accent underline underline-offset-2 decoration-2 hover:text-paper transition-colors">TritonGPT</Link> has reduced turnaround time by 91%, giving teams more room to focus on judgment and service rather than repetitive review.
              </p>
            </div>
            <div className="border-2 border-paper/20 p-8 hover:border-accent transition-colors duration-300 group animate-slide-up delay-300">
              <div className="stat-number mb-2">80<span className="text-3xl align-top">+</span></div>
              <div className="stat-label text-paper/60 mb-6">Colleagues across tech teams</div>
              <h3 className="text-2xl font-bold text-paper mb-4">Building With Campus Partners</h3>
              <p className="text-paper/70 leading-relaxed">
                Work like this depends on collaboration across service, infrastructure, analytics, and web teams supporting a campus community of more than 73,000 people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In The Press - Real Quotes */}
      <section className="bg-paper py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="eyebrow mb-6">
              Recent Conversations
            </div>
            <h2 className="display-title display-title--lg mb-6">From Recent Conversations</h2>
            <div className="divider-accent w-24"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://today.ucsd.edu/story/tritongpt-is-here-and-ready-to-help"
              target="_blank"
              rel="noopener noreferrer"
              className="group card-hard p-8 block"
            >
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="eyebrow text-xs">On Support</span>
              </div>
              <p className="text-xl text-ink leading-relaxed mb-6 font-semibold">
                &ldquo;We recognized that generative AI was transforming the technology landscape and appreciated the support to bring it to UC San Diego.&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted font-[family-name:var(--font-geist-mono)] uppercase tracking-wide">UC San Diego Today</div>
                <svg className="w-4 h-4 text-ink group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
            <a
              href="https://today.ucsd.edu/story/say-hello-to-tritongpt"
              target="_blank"
              rel="noopener noreferrer"
              className="group card-hard p-8 block"
            >
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
                <span className="eyebrow text-xs">On Everyday Use</span>
              </div>
              <p className="text-xl text-ink leading-relaxed mb-6 font-semibold">
                &ldquo;Ideally, we would have a &lsquo;coach&rsquo; for almost any position that we would have on campus, an information resource that&apos;s specific and pertinent to each individual&apos;s job.&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted font-[family-name:var(--font-geist-mono)] uppercase tracking-wide">UC San Diego Today</div>
                <svg className="w-4 h-4 text-ink group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>


      {/* Areas of Expertise */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-20">
          <div className="eyebrow mb-6">
            Topics
          </div>
          <h2 className="display-title display-title--lg mb-6">Topics I Keep Coming Back To</h2>
          <div className="divider-accent w-24"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group p-8 border-l-4 border-accent bg-paper-2 hover:bg-ink hover:text-paper transition-colors duration-300 animate-slide-up delay-100">
              <h3 className="text-2xl font-bold text-ink group-hover:text-paper mb-4 transition-colors">AI in Higher Education</h3>
              <p className="text-lg text-muted group-hover:text-paper/80 leading-relaxed transition-colors">
              How institutions can move from experimentation to useful, trusted practice without losing sight of mission, governance, or people.
              </p>
            </div>
            <div className="group p-8 border-l-4 border-accent bg-paper-2 hover:bg-ink hover:text-paper transition-colors duration-300 animate-slide-up delay-200">
              <h3 className="text-2xl font-bold text-ink group-hover:text-paper mb-4 transition-colors">Institutional AI Implementation</h3>
              <p className="text-lg text-muted group-hover:text-paper/80 leading-relaxed transition-colors">
              What it takes to move from pilots to real use across a campus, including infrastructure choices, governance, support models, and adoption.
              </p>
            </div>
            <div className="group p-8 border-l-4 border-accent bg-paper-2 hover:bg-ink hover:text-paper transition-colors duration-300 animate-slide-up delay-300">
              <h3 className="text-2xl font-bold text-ink group-hover:text-paper mb-4 transition-colors">Governance and Institutional Context</h3>
              <p className="text-lg text-muted group-hover:text-paper/80 leading-relaxed transition-colors">
              Privacy, security, stewardship, and making institutional knowledge easier to access without flattening the nuance behind it.
              </p>
            </div>
            <div className="group p-8 border-l-4 border-accent bg-paper-2 hover:bg-ink hover:text-paper transition-colors duration-300 animate-slide-up delay-400">
              <h3 className="text-2xl font-bold text-ink group-hover:text-paper mb-4 transition-colors">Adoption and Organizational Change</h3>
              <p className="text-lg text-muted group-hover:text-paper/80 leading-relaxed transition-colors">
              How teams build trust, involve stakeholders, and learn what actually helps people in their daily work once a tool leaves the demo stage.
              </p>
            </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-paper-2 border-t-2 border-ink pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <div className="eyebrow mb-6">
              Explore
            </div>
            <h2 className="display-title display-title--lg mb-6">Learn More</h2>
            <div className="divider-accent w-24"></div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <Link href="/about" className="group card-hard relative overflow-hidden animate-slide-up delay-100">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
              <div className="p-10">
                <div className="w-12 h-12 bg-paper-2 border-2 border-ink flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <svg className="w-6 h-6 text-ink transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-accent transition-colors">
                  About
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  Background, projects, and the questions shaping my work in higher education.
                </p>
                <div className="flex items-center text-ink font-bold uppercase tracking-wide text-sm group-hover:gap-2 transition-all">
                  Read more
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/media" className="group card-hard relative overflow-hidden animate-slide-up delay-200">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
              <div className="p-10">
                <div className="w-12 h-12 bg-paper-2 border-2 border-ink flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <svg className="w-6 h-6 text-ink transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-accent transition-colors">
                  Writing & Conversations
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  Articles, interviews, and case studies from recent conversations about AI and higher education.
                </p>
                <div className="flex items-center text-ink font-bold uppercase tracking-wide text-sm group-hover:gap-2 transition-all">
                  Browse all
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/ai-digest" className="group card-hard relative overflow-hidden animate-slide-up delay-300">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
              <div className="p-10">
                <div className="w-12 h-12 bg-paper-2 border-2 border-ink flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <svg className="w-6 h-6 text-ink transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-accent transition-colors">
                  AI Digest
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  Rolling weekly headlines from the daily AI briefing, refreshed as new digests land and reset every Monday.
                </p>
                <div className="flex items-center text-ink font-bold uppercase tracking-wide text-sm group-hover:gap-2 transition-all">
                  View headlines
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/linkedin" className="group card-hard relative overflow-hidden animate-slide-up delay-400">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
              <div className="p-10">
                <div className="w-12 h-12 bg-paper-2 border-2 border-ink flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <svg className="w-6 h-6 text-ink transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-accent transition-colors">
                  LinkedIn
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  Notes and updates from work in progress.
                </p>
                <div className="flex items-center text-ink font-bold uppercase tracking-wide text-sm group-hover:gap-2 transition-all">
                  Follow along
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
    </div>
  );
}
