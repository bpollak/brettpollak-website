import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Innovation | AI-Powered Solutions by Brett Pollak",
  description: "Explore AI-driven products built by Brett Pollak, including Resolution Companion, BioBib Formatter, AI Use Case Meeting, PDF Remediator, Dissertation Agent, and the Henry AI Operating System.",
  alternates: {
    canonical: "https://brettcpollak.com/products",
  },
  openGraph: {
    title: "Products & Innovation | AI-Powered Solutions by Brett Pollak",
    description: "Discover innovative AI solutions and products built by Brett Pollak.",
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
  twitter: {
    card: "summary_large_image",
    title: "Products & Innovation | AI-Powered Solutions by Brett Pollak",
    description: "Discover innovative AI solutions and products built by Brett Pollak.",
    images: ["/screenshots/mission-control-build-campus-app-pipeline-mobile-2026-04-24.jpg"],
  },
};

export default function Products() {
  return (
    <div className="min-h-screen bg-paper" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in">
          <div className="eyebrow mb-6">
            PRODUCTS
          </div>
          <h1 className="display-title display-title--xl mb-6">Innovation Portfolio</h1>
          <div className="divider-accent w-24 mb-8"></div>
          <p className="text-2xl text-muted mb-6 max-w-3xl leading-relaxed">
            AI-powered products that solve real problems — from personal productivity to institutional transformation.
          </p>
        </div>

        {/* Resolution Companion */}
        <div className="mb-16">
          <a
            href="https://resolutioncompanion.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block card-hard overflow-hidden animate-slide-up delay-100"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-ink">
                <Image
                  src="/resolution-companion.png"
                  alt="Resolution Companion App"
                  width={400}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="mono-label border-2 border-ink text-xs uppercase px-3 py-1 mb-4 w-fit">
                  AI-POWERED HABIT BUILDING
                </div>
                <h2 className="text-4xl font-bold text-ink mb-6 group-hover:text-accent transition-colors">
                  Resolution Companion
                </h2>
                <p className="text-xl text-muted leading-relaxed mb-8">
                  An AI-powered mobile app that helps users build lasting habits through identity-based personal growth. Define your ideal self and make daily choices aligned with that persona, supported by AI coaching and progress tracking.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ink mb-4">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">AI-Guided Persona Definition</span><span className="text-muted">Define your ideal self through AI-guided interviews and coaching</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">Momentum Calendar</span><span className="text-muted">Visual progress tracking with color-coded streaks and patterns</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">Identity-First System</span><span className="text-muted">Build habits based on who you want to become, not just what you want to do</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">120-Second Kickstart</span><span className="text-muted">Abbreviated activities for busy days to maintain momentum</span></div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-ink font-bold text-lg uppercase tracking-wide group-hover:text-accent group-hover:gap-3 transition-all">
                  Visit Resolution Companion
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Henry / OpenClaw */}
        <div className="mb-16 animate-slide-up delay-200">
          <a
            href="https://bpollak.github.io/openclaw-ai-usecase-deck/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block card-hard overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden bg-ink flex items-center justify-center p-12 border-b-2 md:border-b-0 md:border-r-2 border-ink">
                <Image
                  src="/screenshots/mission-control-build-campus-app-pipeline-mobile-2026-04-24.jpg"
                  alt="Mission Control — Build / Campus App Pipeline view, showing 14 tracked AI use-case ideas with priority, audience, and tier tags"
                  width={590}
                  height={1280}
                  className="w-full h-auto border-2 border-paper group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="mono-label border-2 border-ink text-xs uppercase px-3 py-1 mb-4 w-fit">
                  AI AGENT SYSTEM
                </div>
                <h2 className="text-4xl font-bold text-ink mb-6 group-hover:text-accent transition-colors">
                  Henry — Personal AI Operating System
                </h2>
                <p className="text-xl text-muted leading-relaxed mb-8">
                  A production AI agent stack built on OpenClaw — running 24/7 on a Mac mini with 25+ autonomous automations, a knowledge graph, vector memory, multi-model routing, and deep institutional integrations. Not a chatbot. A persistent, proactive executive operating system.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ink mb-4">Key Capabilities</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">25+ Autonomous Automations</span><span className="text-muted">Morning briefings, opportunity scans, meeting debriefs, competitive intel, campus pain signal monitoring</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">Multi-Model Intelligence</span><span className="text-muted">Routes across TritonAI Nemotron, Anthropic, OpenAI Codex, Google Gemini, and local Gemma 4</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">Software Blueprint Pipeline</span><span className="text-muted">6-agent build pipeline: idea → plan → spec → code → QA → deploy → docs</span></div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-ink font-bold text-lg uppercase tracking-wide group-hover:text-accent group-hover:gap-3 transition-all">
                  View the Full Use Case Deck
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* PDF Remediator */}
        <div className="mb-16 animate-slide-up delay-300">
          <a
            href="https://pdf-remediator-codex.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block card-hard overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden bg-ink flex items-center justify-center p-12 border-b-2 md:border-b-0 md:border-r-2 border-ink">
                <Image
                  src="/pdf-remediator.png"
                  alt="PDF Remediator"
                  width={1600}
                  height={900}
                  className="w-full h-auto border-2 border-paper group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="mono-label border-2 border-ink text-xs uppercase px-3 py-1 mb-4 w-fit">
                  ACCESSIBILITY &amp; COMPLIANCE
                </div>
                <h2 className="text-4xl font-bold text-ink mb-6 group-hover:text-accent transition-colors">
                  PDF Accessibility Remediator
                </h2>
                <p className="text-xl text-muted leading-relaxed mb-8">
                  Automated accessibility checks and remediation for UC San Diego PDFs. Runs 17+ checks across 9 compliance categories. Reduces remediation time from hours to minutes with built-in evidence packs.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ink mb-4">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">17+ Automated Checks</span><span className="text-muted">9 categories of WCAG 2.1 AA accessibility validation</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">Hours to Minutes</span><span className="text-muted">Dramatically reduces manual remediation effort</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">Built on TritonAI Developer API</span><span className="text-muted">Built by a non-engineer using Claude Code + Codex via the campus developer program</span></div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-ink font-bold text-lg uppercase tracking-wide group-hover:text-accent group-hover:gap-3 transition-all">
                  Visit PDF Remediator
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* BioBib Formatter */}
        <div className="mb-16 animate-slide-up delay-400">
          <a
            href="https://biobib-formatter.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block card-hard overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden bg-ink flex items-center justify-center p-12 border-b-2 md:border-b-0 md:border-r-2 border-ink">
                <Image
                  src="/biobib-formatter.png"
                  alt="BioBib Formatter"
                  width={1280}
                  height={800}
                  className="w-full h-auto border-2 border-paper group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="mono-label border-2 border-ink text-xs uppercase px-3 py-1 mb-4 w-fit">
                  ACADEMIC WORKFLOW
                </div>
                <h2 className="text-4xl font-bold text-ink mb-6 group-hover:text-accent transition-colors">
                  BioBib Formatter
                </h2>
                <p className="text-xl text-muted leading-relaxed mb-8">
                  Turns a faculty CV into a draft UCSD Academic Biography and Bibliography document. Breaks CVs into 20 review parts, processes through UCSD TritonAI with model routing, and produces a downloadable Word file with section summaries and review notes.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ink mb-4">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">20-Part Section Review</span><span className="text-muted">CV split into manageable review tasks with progress tracking</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">UCSD TritonAI-Powered</span><span className="text-muted">Routed model review matching section type to best-fit provider</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">BioBib-Compliant Output</span><span className="text-muted">Downloads as formatted Word doc with tables, subsections, and bibliography</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">Conversion Recovery</span><span className="text-muted">Survives page refreshes and tab closes with saved recovery links</span></div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-ink font-bold text-lg uppercase tracking-wide group-hover:text-accent group-hover:gap-3 transition-all">
                  Try BioBib Formatter
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* AI Use Case Meeting */}
        <div className="mb-16 animate-slide-up delay-500">
          <a
            href="https://ai-use-case-meeting.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block card-hard overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden bg-ink flex items-center justify-center p-12 border-b-2 md:border-b-0 md:border-r-2 border-ink">
                <Image
                  src="/ai-use-case-meeting.png"
                  alt="AI Use Case Meeting"
                  width={1280}
                  height={800}
                  className="w-full h-auto border-2 border-paper group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="mono-label border-2 border-ink text-xs uppercase px-3 py-1 mb-4 w-fit">
                  CAMPUS COMMUNITY
                </div>
                <h2 className="text-4xl font-bold text-ink mb-6 group-hover:text-accent transition-colors">
                  AI Use Case Meeting
                </h2>
                <p className="text-xl text-muted leading-relaxed mb-8">
                  A full-stack session management platform that schedules, tracks, and archives a biweekly AI knowledge-sharing forum at UC San Diego. Handles presenter submissions, agenda generation, calendar sync, and MediaSpace recording integration through an admin dashboard.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ink mb-4">Key Capabilities</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">Automated Session Scheduling</span><span className="text-muted">Generates biweekly agendas with time-slot allocation, presenter topics, and Zoom distribution</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">Presenter Submission Workflow</span><span className="text-muted">Self-service signup with topic, duration, and time-slot assignment — no admin intervention needed</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">MediaSpace Recording Archive</span><span className="text-muted">Linked recording playback for past sessions, searchable by date and presenter</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">Admin Dashboard</span><span className="text-muted">Manage sessions, approve submissions, update agendas, embed recordings — full CRUD</span></div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-ink font-bold text-lg uppercase tracking-wide group-hover:text-accent group-hover:gap-3 transition-all">
                  Visit AI Use Case Meeting
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Dissertation Formatting Agent */}
        <div className="mb-16 animate-slide-up delay-600">
          <a
            href="https://dissertation-formatter.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block card-hard overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden bg-ink flex items-center justify-center p-12 border-b-2 md:border-b-0 md:border-r-2 border-ink">
                <Image
                  src="/dissertation-agent.png"
                  alt="Dissertation Formatting Agent"
                  width={1600}
                  height={900}
                  className="w-full h-auto border-2 border-paper group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="mono-label border-2 border-ink text-xs uppercase px-3 py-1 mb-4 w-fit">
                  ACADEMIC WORKFLOW
                </div>
                <h2 className="text-4xl font-bold text-ink mb-6 group-hover:text-accent transition-colors">
                  Dissertation Formatting Agent
                </h2>
                <p className="text-xl text-muted leading-relaxed mb-8">
                  Validates doctoral dissertations and master&apos;s theses against 84 UCSD GEPA formatting rules across 13 categories. Auto-corrects 17+ common issues. Three-bucket results: Fixed For You, Action Required, Please Verify.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-ink mb-4">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">84 GEPA Rules Checked</span><span className="text-muted">13 categories including margins, fonts, spacing, pagination, and accessibility</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">Auto-Corrects 17+ Issues</span><span className="text-muted">Common formatting problems fixed automatically before review</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-ink block">WCAG 2.1 AA Accessibility</span><span className="text-muted">Includes accessibility checks alongside formatting validation</span></div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-ink font-bold text-lg uppercase tracking-wide group-hover:text-accent group-hover:gap-3 transition-all">
                  Try Dissertation Formatter
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* More Coming Soon */}
        <div className="bg-paper-2 p-12 text-center border-2 border-dashed border-ink">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-paper-2 border-2 border-ink mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-ink mb-4">More Innovations Coming</h3>
            <p className="text-lg text-muted mb-8">
              Leveraging the power of AI coding tools, I am continuing to develop new software products across education, productivity, and enterprise domains that I will feature on this page.
              Follow my journey on LinkedIn for updates on upcoming launches.
            </p>
            <Link
              href="/linkedin"
              className="btn-bold px-8 py-4 uppercase tracking-wide group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink"
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
