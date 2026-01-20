'use client';

import Link from 'next/link';
import Image from 'next/image';

const heroBlurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAIAAABSnclZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB3ElEQVR4nAHRAS7+AJm26pm37Jq47py68J278Z688Z+98p++86O966a84wCftNmhueSjvu6lwfGnw/KoxPOoxvaoxvWnvuSmttMAo6qyqbfNrsLhsMTlsMPiscTis8npr8Hapa+8m5ybAJ+ZgairprC4w7O4x7W0urKwqbO1qaank5uUepGBXQCUhU+cknCmn46qnZaznYytlm6pmmOUh0mMej+GbjMAf28vhHVBiXtXjXhhnHtfl3ZAlHovf20hhG4uh3A6AHFeK3NgMW5cOG1XQXtfS31jQIdvO4FsM492QY91SACDbEOAaUFnVDZURDFXRTtdSjxzX0B9aTuZg0ebhkkAhnBSfmlPX04+RjkxRDg2SDs4Xk89cmI1koM7log2AHJgR2xbRlNFNzswKT4xLlA9NmJNOGhYK3JqJnVxHwBDOi1BOC45LyotJSIyJyRINSxTPS1SQCRJQhlGRhAAMSohMiolMCcmLCMhMCUhSTUrTDYoQjEhLyoTKSsLACsmGC4nHy8mJDMoJDUpIzwvJDImGicfEyAeCiIkCAAhHBIoIBkqIR00KSM8LyU/MiQvJRggGw0fHwgpKgcAFhAJHxcPIxoUMCUdPS4iQTEhMCQWIBoLISAILS0ILv2zdpLJpOwAAAAASUVORK5CYII=";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brett Pollak",
    "jobTitle": "Technology Executive",
    "description": "Technology Executive at UC San Diego specializing in Artificial Intelligence, Data, and Digital Transformation. Spearheaded the implementation of TritonGPT serving 73,000+ users.",
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

  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
              AI IMPLEMENTATION EXPERT • SPEAKER • ADVISOR
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-light mb-10 leading-[0.9] font-[family-name:var(--font-montserrat)] text-gray-900 pb-2" style={{ letterSpacing: '-0.01em' }}>
              Brett Pollak
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 rounded-full mb-10"></div>
            <p className="text-2xl md:text-3xl text-slate-700 mb-8 font-light leading-relaxed">
              Deploying Enterprise AI at Scale: From Concept to 73K+ Users in Weeks, Not Years
            </p>
            <div className="flex items-center gap-3 mb-10">
              <svg className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <p className="text-xl text-blue-900 font-semibold">
                University of California San Diego
              </p>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed mb-14 max-w-xl">
              Bridging the gap between ambitious AI visions and operational reality in higher education. Spearheaded the implementation of <Link href="/tritongpt" className="font-semibold text-slate-900 hover:text-blue-700 underline underline-offset-2 decoration-blue-700/30 hover:decoration-blue-700 transition-colors">TritonGPT</Link>, demonstrating how universities can deploy institutional AI at scale, moving from concept to production serving 73,000+ users while maintaining data sovereignty and ethical governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-slate-900 to-blue-900 text-white px-10 py-5 text-lg font-bold rounded-xl hover:from-slate-800 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                Book a Speaking Engagement
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 text-lg font-bold rounded-xl border-2 border-slate-900 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
              >
                Collaboration Inquiry
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <p className="text-sm text-slate-500 max-w-xl">
              Available for keynote presentations, workshops, strategic advisory, and sharing best practices for AI implementation
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

      {/* As Featured In */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
              RECOGNITION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">As Featured In</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { 
                name: "Forbes", 
                topic: "Technology Leadership", 
                border: "hover:border-blue-700", 
                text: "group-hover:text-blue-800",
                bg: "hover:bg-blue-50/50",
                initialBg: "bg-blue-50/30",
                url: "https://www.forbes.com/sites/avivalegatt/2025/08/10/why-faculty-hold-the-keys-to-higher-eds-ai-digital-transformation/"
              },
              { 
                name: "CIO.com", 
                topic: "Digital Innovation", 
                border: "hover:border-rose-700", 
                text: "group-hover:text-rose-800",
                bg: "hover:bg-rose-50/50",
                initialBg: "bg-rose-50/30",
                url: "https://www.cio.com/article/4032770/unpacking-uc-san-diegos-use-of-llms-to-boost-access-to-knowledge.html"
              },
              { 
                name: "EdTech Magazine", 
                topic: "AI in Education", 
                border: "hover:border-cyan-600", 
                text: "group-hover:text-cyan-700",
                bg: "hover:bg-cyan-50/50",
                initialBg: "bg-cyan-50/30",
                url: "https://edtechmagazine.com/higher/article/2025/05/uc-san-diego-launches-tritongpt-generative-ai-tool"
              },
              { 
                name: "EDUCAUSE Review", 
                topic: "Higher Ed Tech", 
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
              Featured in 30+ publications on AI implementation, digital transformation, and technology leadership
            </p>
            <Link
              href="/media"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            >
              View All Media & Publications
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
              REAL IMPACT
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-200 via-slate-200 to-blue-300 bg-clip-text text-transparent mb-6 tracking-tight px-4 max-w-5xl mx-auto">Transforming Higher Education</h2>
            <div className="w-20 h-1.5 bg-blue-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300 group card-3d animate-slide-up delay-100">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Democratizing Knowledge</h3>
              <p className="text-slate-200 leading-relaxed mb-4">
                <Link href="/tritongpt" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 decoration-amber-400/30 hover:decoration-amber-300 transition-colors">TritonGPT</Link> serves 73,000+ users across UC San Diego, making institutional knowledge accessible to students, faculty, and staff in seconds instead of hours.
              </p>
              <div className="text-amber-400 font-semibold">73K+ active users</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 group card-3d animate-slide-up delay-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Accelerating Efficiency</h3>
              <p className="text-slate-200 leading-relaxed mb-4">
                By automating complex contract review processes, <Link href="/tritongpt" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 decoration-blue-400/30 hover:decoration-blue-300 transition-colors">TritonGPT</Link> has cut review times by 91%, freeing administrators to focus on strategic decisions rather than document analysis.
              </p>
              <div className="text-blue-400 font-semibold">91% time reduction</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-rose-500/50 hover:bg-white/10 transition-all duration-300 group card-3d animate-slide-up delay-300">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-700 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-400 transition-colors">Leading at Scale</h3>
              <p className="text-slate-200 leading-relaxed mb-4">
                Managing a team of 80+ technology professionals while overseeing hybrid-cloud infrastructure that supports the entire UC San Diego campus community.
              </p>
              <div className="text-rose-400 font-semibold">80+ team members</div>
            </div>
          </div>
        </div>
      </section>

      {/* In The Press - Real Quotes */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-800 text-sm font-semibold rounded-full mb-6 border border-blue-100">
              IN THE PRESS
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">In His Own Words</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
                <span className="text-sm font-semibold text-blue-600">On Vision</span>
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
                <span className="text-sm font-semibold text-amber-600">On Innovation</span>
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
            <a
              href="https://today.ucsd.edu/story/tritongpt-is-here-and-ready-to-help"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-rose-50 to-red-50 p-8 rounded-2xl border border-rose-200 hover:shadow-xl hover:border-rose-300 transition-all duration-300 card-3d block"
            >
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-rose-600">On Impact</span>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                &ldquo;This is a revenue-generating opportunity for UC San Diego.&rdquo;
              </p>
              <p className="text-sm text-slate-500 mb-6">On licensing TritonGPT to institutions like UC Berkeley and San Diego State</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">UC San Diego Today</div>
                <svg className="w-4 h-4 text-slate-500 group-hover:text-rose-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            EXPERTISE
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">Areas of Focus</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group p-8 border-l-4 border-blue-900 bg-gradient-to-br from-slate-50/40 to-blue-50/40 hover:from-slate-50 hover:to-blue-50 transition-all duration-300 rounded-xl animate-slide-up delay-100">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-4">AI in Higher Education</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Implementation strategies, governance frameworks, and ethical considerations for artificial intelligence in academic institutions.
            </p>
          </div>
          <div className="group p-8 border-l-4 border-amber-500 bg-gradient-to-br from-amber-50/40 to-orange-50/40 hover:from-amber-50 hover:to-orange-50 transition-all duration-300 rounded-xl animate-slide-up delay-200">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">Enterprise AI Deployment</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              From concept to campus-wide deployment in weeks. Specialized AI assistants reducing administrative burden by up to 91% while maintaining institutional data sovereignty through local infrastructure and ethical governance frameworks.
            </p>
          </div>
          <div className="group p-8 border-l-4 border-rose-800 bg-gradient-to-br from-rose-50/40 to-red-50/40 hover:from-rose-50 hover:to-red-50 transition-all duration-300 rounded-xl animate-slide-up delay-300">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-800 to-red-700 bg-clip-text text-transparent mb-4">Data Governance</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Enterprise data warehousing, security frameworks, and democratizing institutional knowledge across organizations.
            </p>
          </div>
          <div className="group p-8 border-l-4 border-indigo-700 bg-gradient-to-br from-indigo-50/40 to-violet-50/40 hover:from-indigo-50 hover:to-violet-50 transition-all duration-300 rounded-xl animate-slide-up delay-400">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 to-violet-700 bg-clip-text text-transparent mb-4">Organizational Change Leadership</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Leading technology transformation across 80+ professionals and 73,000+ end users. Building stakeholder buy-in through demonstration over declaration, turning skeptics into champions through measurable results.
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
          <div className="grid md:grid-cols-3 gap-8">
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
                  Learn about my background, expertise, and leadership in AI and digital transformation.
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
                  Media & Publications
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Featured in Forbes, CIO.com, EdTech Magazine, and 30+ other publications.
                </p>
                <div className="flex items-center text-amber-700 font-semibold group-hover:gap-2 transition-all">
                  View all
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/linkedin" className="group relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d animate-slide-up delay-300">
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
                  Recent updates and insights from my LinkedIn profile.
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
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-24 overflow-hidden animate-gradient-shift">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-10 animate-float-slow"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200 bg-clip-text text-transparent mb-8 tracking-tight pb-1">Let&apos;s Connect</h2>
          <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
            Available for speaking engagements, advisory, and collaboration opportunities in AI implementation and digital transformation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-16 py-7 text-xl font-bold hover:bg-gradient-to-r hover:from-amber-100 hover:to-orange-100 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] group rounded-2xl transform hover:scale-105 border-4 border-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Contact Me
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}