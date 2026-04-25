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
      "Artificial Intelligence",
      "Digital Transformation",
      "Data Governance",
      "Higher Education Technology",
      "AI Implementation",
      "Technology Leadership"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/brettpollak/"
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
    <div className="min-h-screen bg-gray-50" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tritonAISchema) }}
      />
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-slate-900 to-blue-900 rounded-full blur-3xl opacity-20 -z-10 animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500 to-orange-400 rounded-full blur-3xl opacity-15 -z-10 animate-float-slow"></div>
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 md:pr-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-slate-100 via-white to-slate-50 border-2 border-slate-200 text-slate-800 text-sm font-bold rounded-full mb-10 shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              HIGHER EDUCATION • AI PRACTICE • SHARED LEARNING
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-light mb-10 leading-[0.9] font-[family-name:var(--font-montserrat)] text-gray-900 pb-2" style={{ letterSpacing: '-0.01em' }}>
              Brett Pollak
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 rounded-full mb-10"></div>
            <p className="text-2xl md:text-3xl text-slate-700 mb-8 font-light leading-relaxed">
              Building and learning from institutional AI in higher education
            </p>
            <div className="flex items-center gap-3 mb-10">
              <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <p className="text-xl text-blue-900 font-semibold">
                San Diego, California
              </p>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed mb-14 max-w-xl">
              I work with colleagues at UC San Diego on practical AI systems through <Link href="/tritongpt" className="font-semibold text-slate-900 hover:text-blue-700 underline underline-offset-2 decoration-blue-700/30 hover:decoration-blue-700 transition-colors">TritonAI</Link>. This site is a place to share what we&apos;re learning about implementation, governance, adoption, and the institutional questions that matter once AI moves beyond experimentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-slate-900 to-blue-900 text-white px-10 py-5 text-lg font-bold rounded-xl hover:from-slate-800 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                Start a Conversation
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <p className="text-sm text-slate-500 max-w-xl">
              If you&apos;re working on similar questions in higher education, I&apos;d be glad to compare notes and learn from your experience.
            </p>
          </div>
          <div className="md:col-span-5 relative animate-slide-in-right">
            <div className="hidden md:block absolute -inset-8 bg-gradient-to-br from-slate-200 via-blue-100 to-slate-200 rounded-3xl transform rotate-6 opacity-40 blur-2xl"></div>
            <div className="hidden md:block absolute -inset-6 bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 rounded-3xl transform rotate-3 opacity-40 blur-xl"></div>
            <div className="hidden md:block absolute -inset-4 bg-gradient-to-br from-slate-100 to-white rounded-2xl transform rotate-2 shadow-2xl"></div>
            <div className="hidden md:block absolute -inset-3 bg-gradient-to-tr from-slate-50 to-blue-50 rounded-2xl transform -rotate-1 opacity-70"></div>
            <div className="relative">
              <Image
                src="/brett-pollak-headshot-sit-center.png"
                alt="Brett Pollak"
                width={500}
                height={753}
                className="w-full rounded-2xl shadow-2xl ring-4 ring-white relative z-10"
                placeholder="blur"
                blurDataURL={heroBlurDataURL}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Currently — pulled from /now */}
      <section className="bg-white border-y border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.18em] text-blue-800 font-semibold">
                Currently
              </span>
              <span className="text-xs text-slate-400">
                {formatNowDate(currentNow.lastUpdated)}
              </span>
            </div>
            <p className="text-lg text-slate-700 leading-8 mb-3">
              <span className="font-semibold text-slate-900">
                {currentNow.items[0].label}:
              </span>{' '}
              {currentNow.items[0].body}
            </p>
            <Link
              href="/now"
              className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              See what else I&rsquo;m focused on
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* As Featured In */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
              WRITING & CONVERSATIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">Writing and Conversations</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Forbes",
                topic: "Faculty and AI",
                border: "hover:border-blue-700",
                text: "group-hover:text-blue-800",
                bg: "hover:bg-blue-50/50",
                initialBg: "bg-blue-50/30",
                url: "https://www.forbes.com/sites/avivalegatt/2025/08/10/why-faculty-hold-the-keys-to-higher-eds-ai-digital-transformation/"
              },
              {
                name: "CIO.com",
                topic: "Knowledge Access",
                border: "hover:border-rose-700",
                text: "group-hover:text-rose-800",
                bg: "hover:bg-rose-50/50",
                initialBg: "bg-rose-50/30",
                url: "https://www.cio.com/article/4032770/unpacking-uc-san-diegos-use-of-llms-to-boost-access-to-knowledge.html"
              },
              {
                name: "EdTech Magazine",
                topic: "Campus Implementation",
                border: "hover:border-cyan-600",
                text: "group-hover:text-cyan-700",
                bg: "hover:bg-cyan-50/50",
                initialBg: "bg-cyan-50/30",
                url: "https://edtechmagazine.com/higher/article/2025/05/uc-san-diego-launches-tritongpt-generative-ai-tool"
              },
              {
                name: "EDUCAUSE Review",
                topic: "Implementation Lessons",
                border: "hover:border-amber-600",
                text: "group-hover:text-amber-700",
                bg: "hover:bg-amber-50/50",
                initialBg: "bg-amber-50/30",
                url: "https://er.educause.edu/articles/2025/2/ushering-in-a-new-era-of-ai-driven-data-insights-at-uc-san-diego"
              }
            ].map((pub, idx) => (
              <a 
                key={idx}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center p-6 ${pub.initialBg} backdrop-blur-sm rounded-xl border-2 border-gray-200 ${pub.border} ${pub.bg} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in`}
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="text-center relative">
                  <div className={`text-2xl font-bold text-gray-900 mb-1 ${pub.text} transition-colors flex items-center justify-center gap-2`}>
                    {pub.name}
                    <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">{pub.topic}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6 text-lg">
              Articles, interviews, and case studies across 30+ publications on AI and institutional change in higher education
            </p>
            <Link
              href="/media"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
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
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1.5 bg-blue-900/30 text-blue-200 text-sm font-semibold rounded-full mb-6 border border-blue-800/50">
              IN PRACTICE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 via-slate-200 to-blue-300 bg-clip-text text-transparent mb-6 tracking-tight px-4 max-w-5xl mx-auto">What We&apos;re Learning in Practice</h2>
            <div className="w-20 h-1.5 bg-blue-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300 group card-3d animate-slide-up delay-100">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Making Knowledge Easier to Reach</h3>
              <p className="text-slate-200 leading-relaxed mb-4">
                At UC San Diego, <Link href="/tritongpt" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 decoration-amber-400/30 hover:decoration-amber-300 transition-colors">TritonGPT</Link> helps students, faculty, and staff find institutional knowledge more quickly in the course of everyday work.
              </p>
              <div className="text-amber-400 font-semibold">73K+ users across campus</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group card-3d animate-slide-up delay-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Reducing Administrative Friction</h3>
              <p className="text-slate-200 leading-relaxed mb-4">
                In workflows like contract review, <Link href="/tritongpt" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 decoration-blue-400/30 hover:decoration-blue-300 transition-colors">TritonGPT</Link> has reduced turnaround time by 91%, giving teams more room to focus on judgment and service rather than repetitive review.
              </p>
              <div className="text-blue-400 font-semibold">91% time reduction</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-rose-500/50 hover:bg-white/10 transition-all duration-300 group card-3d animate-slide-up delay-300">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-700 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-400 transition-colors">Building With Campus Partners</h3>
              <p className="text-slate-200 leading-relaxed mb-4">
                Work like this depends on collaboration across service, infrastructure, analytics, and web teams supporting a campus community of more than 73,000 people.
              </p>
              <div className="text-rose-400 font-semibold">80+ colleagues across technology teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* In The Press - Real Quotes */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-800 text-sm font-semibold rounded-full mb-6 border border-blue-100">
              RECENT CONVERSATIONS
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">From Recent Conversations</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://today.ucsd.edu/story/tritongpt-is-here-and-ready-to-help"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 card-3d block"
            >
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-blue-600">On Support</span>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                &ldquo;We recognized that generative AI was transforming the technology landscape and appreciated the support to bring it to UC San Diego.&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">UC San Diego Today</div>
                <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
            <a
              href="https://today.ucsd.edu/story/say-hello-to-tritongpt"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200 hover:shadow-xl hover:border-amber-300 transition-all duration-300 card-3d block"
            >
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
                <span className="text-sm font-semibold text-amber-600">On Everyday Use</span>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                &ldquo;Ideally, we would have a &lsquo;coach&rsquo; for almost any position that we would have on campus, an information resource that&apos;s specific and pertinent to each individual&apos;s job.&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">UC San Diego Today</div>
                <svg className="w-4 h-4 text-slate-500 group-hover:text-amber-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>


      {/* Areas of Expertise */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-20 text-center">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
            TOPICS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">Topics I Keep Coming Back To</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group p-8 border-l-4 border-blue-900 bg-gradient-to-br from-slate-50/40 to-blue-50/40 hover:from-slate-50 hover:to-blue-50 transition-all duration-300 rounded-xl animate-slide-up delay-100">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-4">AI in Higher Education</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
              How institutions can move from experimentation to useful, trusted practice without losing sight of mission, governance, or people.
              </p>
            </div>
            <div className="group p-8 border-l-4 border-amber-500 bg-gradient-to-br from-amber-50/40 to-orange-50/40 hover:from-amber-50 hover:to-orange-50 transition-all duration-300 rounded-xl animate-slide-up delay-200">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">Institutional AI Implementation</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
              What it takes to move from pilots to real use across a campus, including infrastructure choices, governance, support models, and adoption.
              </p>
            </div>
            <div className="group p-8 border-l-4 border-rose-800 bg-gradient-to-br from-rose-50/40 to-red-50/40 hover:from-rose-50 hover:to-red-50 transition-all duration-300 rounded-xl animate-slide-up delay-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-800 to-red-700 bg-clip-text text-transparent mb-4">Governance and Institutional Context</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
              Privacy, security, stewardship, and making institutional knowledge easier to access without flattening the nuance behind it.
              </p>
            </div>
            <div className="group p-8 border-l-4 border-indigo-700 bg-gradient-to-br from-indigo-50/40 to-violet-50/40 hover:from-indigo-50 hover:to-violet-50 transition-all duration-300 rounded-xl animate-slide-up delay-400">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent mb-4">Adoption and Organizational Change</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
              How teams build trust, involve stakeholders, and learn what actually helps people in their daily work once a tool leaves the demo stage.
              </p>
            </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-800 text-sm font-semibold rounded-full mb-6 border border-blue-100">
              EXPLORE
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">Learn More</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <Link href="/about" className="group relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d animate-slide-up delay-100">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 to-blue-900"></div>
              <div className="p-10">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-slate-800 group-hover:to-blue-900 transition-all">
                  <svg className="w-6 h-6 text-slate-800 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-slate-800 transition-colors">
                  About
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Background, projects, and the questions shaping my work in higher education.
                </p>
                <div className="flex items-center text-slate-800 font-semibold group-hover:gap-2 transition-all">
                  Read more
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/media" className="group relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d animate-slide-up delay-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600"></div>
              <div className="p-10">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-600 transition-all">
                  <svg className="w-6 h-6 text-amber-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-700 transition-colors">
                  Writing & Conversations
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Articles, interviews, and case studies from recent conversations about AI and higher education.
                </p>
                <div className="flex items-center text-amber-700 font-semibold group-hover:gap-2 transition-all">
                  Browse all
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/ai-digest" className="group relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d animate-slide-up delay-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-amber-500"></div>
              <div className="p-10">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-800 group-hover:to-amber-500 transition-all">
                  <svg className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                  AI Digest
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Rolling weekly headlines from the daily AI briefing, refreshed as new digests land and reset every Monday.
                </p>
                <div className="flex items-center text-blue-900 font-semibold group-hover:gap-2 transition-all">
                  View headlines
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/linkedin" className="group relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d animate-slide-up delay-400">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 to-indigo-600"></div>
              <div className="p-10">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-700 group-hover:to-indigo-600 transition-all">
                  <svg className="w-6 h-6 text-blue-800 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Notes and updates from work in progress.
                </p>
                <div className="flex items-center text-blue-800 font-semibold group-hover:gap-2 transition-all">
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
