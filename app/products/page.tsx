import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Innovation | AI-Powered Solutions by Brett Pollak",
  description: "Explore AI-driven products built by Brett Pollak, including Resolution Companion, an identity-based habit building app.",
  alternates: {
    canonical: "https://brettcpollak.com/products",
  },
  openGraph: {
    title: "Products & Innovation | AI-Powered Solutions by Brett Pollak",
    description: "Discover innovative AI solutions and products including the Resolution Companion app.",
    url: "https://brettcpollak.com/products",
    images: [
      {
        url: "/resolution-companion.png",
        width: 400,
        height: 800,
        alt: "Resolution Companion App",
      },
    ],
  },
};

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
            PRODUCTS
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">Innovation Portfolio</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mb-8"></div>
          <p className="text-2xl text-slate-600 mb-6 max-w-3xl leading-relaxed">
            Beyond my executive leadership roles, I build AI-powered products that solve real problems for individuals.
          </p>
        </div>

        {/* Resolution Companion */}
        <div className="mb-16">
          <a
            href="https://resolutioncompanion.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d animate-slide-up delay-100"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden">
                <Image
                  src="/resolution-companion.png"
                  alt="Resolution Companion App"
                  width={400}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full mb-4 w-fit border border-slate-200">
                  AI-POWERED HABIT BUILDING
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:via-blue-900 group-hover:to-slate-800 group-hover:bg-clip-text transition-all">
                  Resolution Companion
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  An AI-powered mobile app that helps users build lasting habits through identity-based personal growth. Define your ideal self and make daily choices aligned with that persona, supported by AI coaching and progress tracking.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-slate-900 block">AI-Guided Persona Definition</span>
                        <span className="text-slate-600">Define your ideal self through AI-guided interviews and coaching</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-slate-900 block">Momentum Calendar</span>
                        <span className="text-gray-600">Visual progress tracking with color-coded streaks and patterns</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-slate-900 block">Identity-First System</span>
                        <span className="text-slate-600">Build habits based on who you want to become, not just what you want to do</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-slate-900 block">120-Second Kickstart</span>
                        <span className="text-slate-600">Abbreviated activities for busy days to maintain momentum</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:gap-3 transition-all">
                  Visit Resolution Companion
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* PDF Remediator */}
        <div className="mb-16 animate-slide-up delay-200">
          <a href="https://pdf-remediator-codex.vercel.app" target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden">
                <img src="/pdf-remediator.png" alt="PDF Remediator App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            <div className="p-12">
              <div className="inline-block px-3 py-1 bg-red-50 text-red-800 text-xs font-bold rounded-full mb-4 w-fit border border-red-200">
                ACCESSIBILITY &amp; COMPLIANCE
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                PDF Remediator
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                An AI-powered tool that transforms inaccessible PDFs into fully remediated, WCAG-compliant documents. Built by a staff member with no engineering background using the TritonAI Developer API — proving the flywheel of platform enablement.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div><span className="font-semibold text-slate-900 block">17+ Automated Checks</span><span className="text-slate-600">9 categories of accessibility validation run automatically</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div><span className="font-semibold text-slate-900 block">Hours to Minutes</span><span className="text-slate-600">Reduces remediation time from hours of manual work to minutes</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div><span className="font-semibold text-slate-900 block">Compliance Evidence Packs</span><span className="text-slate-600">Built-in documentation for audit and compliance reporting</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div><span className="font-semibold text-slate-900 block">Built on TritonAI Developer API</span><span className="text-slate-600">Demonstrates campus developer enablement — built by a non-engineer using Claude Code + Codex</span></div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:gap-3 transition-all">Visit PDF Remediator<svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></div>
            </div>
            </div>
          </a>
        </div>

        {/* Dissertation Formatting Agent */}
        <div className="mb-16 animate-slide-up delay-300">
          <a href="https://dissertation-formatter.vercel.app" target="_blank" rel="noopener noreferrer" className="group block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden">
                <img src="/dissertation-agent.png" alt="Dissertation Formatting Agent" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            <div className="p-12">
              <div className="inline-block px-3 py-1 bg-violet-50 text-violet-800 text-xs font-bold rounded-full mb-4 w-fit border border-violet-200">
                ACADEMIC WORKFLOW
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Dissertation Formatting Agent
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                An AI agent that automates the tedious, error-prone process of formatting dissertations and theses to strict institutional style requirements. Upload a document and receive a fully compliant version — saving graduate students and reviewers hours of manual formatting work.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-violet-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div><span className="font-semibold text-slate-900 block">Institutional Style Compliance</span><span className="text-slate-600">Automatically enforces margins, fonts, heading hierarchy, and citation formatting</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-violet-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div><span className="font-semibold text-slate-900 block">AI-Powered Review</span><span className="text-slate-600">Catches formatting inconsistencies humans commonly miss across 100+ page documents</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-violet-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div><span className="font-semibold text-slate-900 block">Reduces Review Cycles</span><span className="text-slate-600">Fewer rejections from the graduate division — faster time to degree completion</span></div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:gap-3 transition-all">Try Dissertation Formatter<svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></div>
            </div>
            </div>
          </a>
        </div>

        {/* Henry / OpenClaw */}
        <div className="mb-16 animate-slide-up delay-400">
          <a
            href="https://bpollak.github.io/openclaw-ai-usecase-deck/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden">
                <img src="/henry-mission-control.png" alt="Henry - Mission Control Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            <div className="p-12">
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full mb-4 w-fit border border-blue-200">
                AI AGENT SYSTEM
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:via-blue-900 group-hover:to-slate-800 group-hover:bg-clip-text transition-all">
                Henry — Personal AI Operating System
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                A production AI agent stack built on OpenClaw — running 24/7 on a Mac mini with 25+ autonomous automations, a knowledge graph, vector memory, multi-model routing, and deep institutional integrations. Not a chatbot. A persistent, proactive executive operating system.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Capabilities</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div><span className="font-semibold text-slate-900 block">25+ Autonomous Automations</span><span className="text-slate-600">Morning briefings, opportunity scans, meeting debriefs, competitive intel, campus pain signal monitoring</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div><span className="font-semibold text-slate-900 block">Multi-Model Intelligence</span><span className="text-slate-600">Routes across TritonAI Nemotron, Anthropic, OpenAI Codex, Google Gemini, and local Gemma 4</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div><span className="font-semibold text-slate-900 block">Persistent Memory</span><span className="text-slate-600">Knowledge graph, vector recall via LanceDB, and transparent markdown workspace files</span></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <div><span className="font-semibold text-slate-900 block">Software Blueprint Pipeline</span><span className="text-slate-600">6-agent build pipeline: idea → plan → spec → code → QA → deploy → docs</span></div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:gap-3 transition-all">
                View the Full Use Case Deck
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        {/* More Coming Soon */}
        <div className="bg-white rounded-2xl p-12 text-center border-2 border-dashed border-slate-300">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">More Innovations Coming</h3>
            <p className="text-lg text-slate-600 mb-8">
              Leveraging the power of AI coding tools, I am continuing to develop new software products across education, productivity, and enterprise domains that I will feature on this page.
              Follow my journey on LinkedIn for updates on upcoming launches.
            </p>
            <Link
              href="/linkedin"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-blue-900 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            >
              Follow on LinkedIn
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
