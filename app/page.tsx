import Link from 'next/link';
import Image from 'next/image';

const heroBlurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAIAAABSnclZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB3ElEQVR4nAHRAS7+AJm26pm37Jq47py68J278Z688Z+98p++86O966a84wCftNmhueSjvu6lwfGnw/KoxPOoxvaoxvWnvuSmttMAo6qyqbfNrsLhsMTlsMPiscTis8npr8Hapa+8m5ybAJ+ZgairprC4w7O4x7W0urKwqbO1qaank5uUepGBXQCUhU+cknCmn46qnZaznYytlm6pmmOUh0mMej+GbjMAf28vhHVBiXtXjXhhnHtfl3ZAlHovf20hhG4uh3A6AHFeK3NgMW5cOG1XQXtfS31jQIdvO4FsM492QY91SACDbEOAaUFnVDZURDFXRTtdSjxzX0B9aTuZg0ebhkkAhnBSfmlPX04+RjkxRDg2SDs4Xk89cmI1koM7log2AHJgR2xbRlNFNzswKT4xLlA9NmJNOGhYK3JqJnVxHwBDOi1BOC45LyotJSIyJyRINSxTPS1SQCRJQhlGRhAAMSohMiolMCcmLCMhMCUhSTUrTDYoQjEhLyoTKSsLACsmGC4nHy8mJDMoJDUpIzwvJDImGicfEyAeCiIkCAAhHBIoIBkqIR00KSM8LyU/MiQvJRggGw0fHwgpKgcAFhAJHxcPIxoUMCUdPS4iQTEhMCQWIBoLISAILS0ILv2zdpLJpOwAAAAASUVORK5CYII=";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brett Pollak",
    "jobTitle": "Technology Executive",
    "description": "Technology Executive at UC San Diego specializing in Artificial Intelligence, Data, and Digital Transformation. Creator of TritonGPT serving 100,000+ users.",
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-20 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full blur-3xl opacity-15 -z-10"></div>
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 md:pr-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200/60 text-blue-700 text-sm font-bold rounded-full mb-10 shadow-sm hover:shadow-md transition-shadow">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              TECHNOLOGY EXECUTIVE
            </div>
            <h1 className="text-7xl md:text-8xl font-light mb-10 leading-[0.9] font-[family-name:var(--font-montserrat)] text-gray-900" style={{ letterSpacing: '-0.01em' }}>
              Brett Pollak
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mb-10"></div>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light leading-relaxed">
              Artificial Intelligence | Data & Digital Transformation
            </p>
            <div className="flex items-center gap-3 mb-10">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <p className="text-xl text-blue-600 font-semibold">
                University of California San Diego
              </p>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed mb-14 max-w-xl">
              Two decades of technology leadership spanning AI implementation, data governance, cloud infrastructure, and digital transformation. Leading the <span className="font-semibold text-gray-900">TritonGPT</span> initiative and managing enterprise-scale systems serving 100,000+ users while guiding teams of 80+ technology professionals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 text-lg font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 group"
            >
              Get in Touch
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="md:col-span-5 relative">
            <div className="hidden md:block absolute -inset-8 bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 rounded-3xl transform rotate-6 opacity-20 blur-2xl animate-pulse"></div>
            <div className="hidden md:block absolute -inset-6 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 rounded-3xl transform rotate-3 opacity-40 blur-xl"></div>
            <div className="hidden md:block absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl transform rotate-2 shadow-2xl"></div>
            <div className="hidden md:block absolute -inset-3 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-2xl transform -rotate-1 opacity-70"></div>
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
      <section className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-rose-50 text-rose-700 text-sm font-semibold rounded-full mb-6">
              RECOGNITION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">As Featured In</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="group flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-gray-200 hover:border-rose-500 hover:shadow-xl transition-all duration-300 cursor-default transform hover:-translate-y-1">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors">Forbes</div>
                <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">Technology Leadership</div>
              </div>
            </div>
            <div className="group flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all duration-300 cursor-default transform hover:-translate-y-1">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">CIO.com</div>
                <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">Digital Innovation</div>
              </div>
            </div>
            <div className="group flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-default transform hover:-translate-y-1">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">EdTech Magazine</div>
                <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">AI in Education</div>
              </div>
            </div>
            <div className="group flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 cursor-default transform hover:-translate-y-1">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">EDUCAUSE Review</div>
                <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">Higher Ed Tech</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">
              Featured in 30+ publications on AI implementation, digital transformation, and technology leadership
            </p>
            <Link
              href="/media"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
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
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-300 text-sm font-semibold rounded-full mb-6">
              REAL IMPACT
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent mb-6 tracking-tight px-4 max-w-5xl mx-auto">Transforming Higher Education</h2>
            <div className="w-20 h-1.5 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Democratizing Knowledge</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                TritonGPT serves over 100,000 users across UC San Diego, making institutional knowledge accessible to students, faculty, and staff in seconds instead of hours.
              </p>
              <div className="text-cyan-400 font-semibold">100K+ active users</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">Accelerating Efficiency</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                By automating complex contract review processes, TritonGPT has cut review times by 60%, freeing administrators to focus on strategic decisions rather than document analysis.
              </p>
              <div className="text-amber-400 font-semibold">60% time reduction</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">Leading at Scale</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Managing a team of 80+ technology professionals while overseeing hybrid-cloud infrastructure that supports the entire UC San Diego campus community.
              </p>
              <div className="text-emerald-400 font-semibold">80+ team members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="mb-20 text-center">
          <div className="inline-block px-4 py-1.5 bg-purple-50 text-purple-700 text-sm font-semibold rounded-full mb-6">
            EXPERTISE
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 tracking-tight">Areas of Focus</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="group p-8 border-l-4 border-blue-600 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 rounded-xl">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">AI in Higher Education</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Implementation strategies, governance frameworks, and ethical considerations for artificial intelligence in academic institutions.
            </p>
          </div>
          <div className="group p-8 border-l-4 border-purple-600 bg-gradient-to-br from-purple-50/40 to-pink-50/40 hover:from-purple-50 hover:to-pink-50 transition-all duration-300 rounded-xl">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">TritonGPT Platform</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Secure, scalable AI platform featuring specialized assistants for contract review, instructional support, and institutional knowledge access—achieving 91% time savings in legal reviews and transforming how universities leverage AI.
            </p>
          </div>
          <div className="group p-8 border-l-4 border-indigo-600 bg-gradient-to-br from-indigo-50/40 to-blue-50/40 hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 rounded-xl">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">Data Governance</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Enterprise data warehousing, security frameworks, and democratizing institutional knowledge across organizations.
            </p>
          </div>
          <div className="group p-8 border-l-4 border-teal-600 bg-gradient-to-br from-teal-50/40 to-emerald-50/40 hover:from-teal-50 hover:to-emerald-50 transition-all duration-300 rounded-xl">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">Digital Transformation</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Change management, stakeholder engagement, and technology innovation at scale in complex organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <div className="inline-block px-4 py-1.5 bg-teal-50 text-teal-700 text-sm font-semibold rounded-full mb-6">
              EXPLORE
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6 tracking-tight">Learn More</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/about" className="group relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-500"></div>
              <div className="p-10">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-purple-600 transition-all">
                  <svg className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  About
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Learn about my background, expertise, and leadership in AI and digital transformation.
                </p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                  Read more
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/media" className="group relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-600 to-pink-500"></div>
              <div className="p-10">
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-rose-600 group-hover:to-pink-600 transition-all">
                  <svg className="w-6 h-6 text-rose-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors">
                  Media & Publications
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Featured in Forbes, CIO.com, EdTech Magazine, and 30+ other publications.
                </p>
                <div className="flex items-center text-rose-600 font-semibold group-hover:gap-2 transition-all">
                  View all
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/linkedin" className="group relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
              <div className="p-10">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                  <svg className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Recent updates and insights from my LinkedIn profile.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
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
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 bg-clip-text text-transparent mb-8 tracking-tight">Let's Connect</h2>
          <p className="text-2xl text-purple-100 mb-12 leading-relaxed">
            Available for speaking engagements, consulting, and collaboration opportunities in AI implementation and digital transformation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gray-50 text-gray-900 px-16 py-7 text-xl font-bold hover:bg-gradient-to-r hover:from-yellow-300 hover:to-pink-300 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] group rounded-2xl transform hover:scale-105 border-4 border-white/20"
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
