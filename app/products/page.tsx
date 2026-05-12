import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Innovation | AI-Powered Solutions by Brett Pollak",
  description: "Explore AI-driven products built by Brett Pollak, including Resolution Companion, PDF Remediator, Dissertation Agent, and the Henry AI Operating System.",
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
    <div className="min-h-screen bg-gray-50" id="main-content">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-full mb-6 border border-slate-200">
            PRODUCTS
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent mb-6 tracking-tight pb-1">Innovation Portfolio</h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 mb-8"></div>
          <p className="text-2xl text-slate-600 mb-6 max-w-3xl leading-relaxed">
            AI-powered products that solve real problems — from personal productivity to institutional transformation.
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
                      <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">AI-Guided Persona Definition</span><span className="text-slate-600">Define your ideal self through AI-guided interviews and coaching</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">Momentum Calendar</span><span className="text-gray-600">Visual progress tracking with color-coded streaks and patterns</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">Identity-First System</span><span className="text-slate-600">Build habits based on who you want to become, not just what you want to do</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">120-Second Kickstart</span><span className="text-slate-600">Abbreviated activities for busy days to maintain momentum</span></div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:gap-3 transition-all">
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
            className="group block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 flex items-center justify-center p-12">
                <Image
                  src="/screenshots/mission-control-build-campus-app-pipeline-mobile-2026-04-24.jpg"
                  alt="Mission Control — Build / Campus App Pipeline view, showing 14 tracked AI use-case ideas with priority, audience, and tier tags"
                  width={590}
                  height={1280}
                  className="w-full h-auto rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
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
                      <div><span className="font-semibold text-slate-900 block">Software Blueprint Pipeline</span><span className="text-slate-600">6-agent build pipeline: idea → plan → spec → code → QA → deploy → docs</span></div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:gap-3 transition-all">
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
            className="group block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden bg-gradient-to-br from-slate-800 via-red-950 to-slate-900 flex items-center justify-center p-12">
                <Image
                  src="/pdf-remediator.png"
                  alt="PDF Remediator"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-red-50 text-red-800 text-xs font-bold rounded-full mb-4 w-fit border border-red-200">
                  ACCESSIBILITY &amp; COMPLIANCE
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:via-red-900 group-hover:to-slate-800 group-hover:bg-clip-text transition-all">
                  PDF Accessibility Remediator
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Automated accessibility checks and remediation for UC San Diego PDFs. Runs 17+ checks across 9 compliance categories. Reduces remediation time from hours to minutes with built-in evidence packs.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">17+ Automated Checks</span><span className="text-slate-600">9 categories of WCAG 2.1 AA accessibility validation</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">Hours to Minutes</span><span className="text-slate-600">Dramatically reduces manual remediation effort</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">Built on TritonAI Developer API</span><span className="text-slate-600">Built by a non-engineer using Claude Code + Codex via the campus developer program</span></div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:gap-3 transition-all">
                  Visit PDF Remediator
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Dissertation Formatting Agent */}
        <div className="mb-16 animate-slide-up delay-400">
          <a
            href="https://tritonaiexample.ucsd.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden bg-gradient-to-br from-slate-800 via-emerald-950 to-slate-900 flex items-center justify-center p-10">
                <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-500">
                  {/* Background panel */}
                  <rect width="480" height="320" rx="12" fill="#0f1f1a" />
                  {/* Top bar */}
                  <rect width="480" height="36" rx="0" fill="#162620" />
                  <circle cx="18" cy="18" r="6" fill="#ef4444" opacity="0.7" />
                  <circle cx="36" cy="18" r="6" fill="#f59e0b" opacity="0.7" />
                  <circle cx="54" cy="18" r="6" fill="#22c55e" opacity="0.7" />
                  <text x="240" y="23" textAnchor="middle" fill="#6ee7b7" fontSize="11" fontFamily="monospace" opacity="0.8">TritonAI Embedded App Builder</text>
                  {/* Left sidebar */}
                  <rect x="0" y="36" width="110" height="284" fill="#111f1a" />
                  <text x="55" y="60" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontFamily="monospace" fontWeight="bold">BLOCKS</text>
                  {/* Sidebar blocks */}
                  {[{label:"ServiceNow",y:74},{label:"Canvas Query",y:104},{label:"LLM Response",y:134},{label:"Data Filter",y:164},{label:"Email Notify",y:194}].map((b,i) => (
                    <g key={i}>
                      <rect x="8" y={b.y} width="94" height="22" rx="4" fill="#1e3a30" stroke="#064e3b" strokeWidth="1" />
                      <text x="55" y={b.y+15} textAnchor="middle" fill="#a7f3d0" fontSize="8.5" fontFamily="monospace">{b.label}</text>
                    </g>
                  ))}
                  {/* Main canvas area */}
                  <rect x="118" y="44" width="354" height="268" rx="8" fill="#0d1f18" stroke="#064e3b" strokeWidth="1" />
                  <text x="295" y="62" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="monospace" opacity="0.6">WORKFLOW CANVAS</text>
                  {/* Node 1 - Input */}
                  <rect x="138" y="80" width="90" height="44" rx="6" fill="#065f46" stroke="#34d399" strokeWidth="1.5" />
                  <text x="183" y="98" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">USER REQUEST</text>
                  <text x="183" y="112" textAnchor="middle" fill="#a7f3d0" fontSize="7" fontFamily="monospace">ServiceNow Trigger</text>
                  {/* Arrow 1 */}
                  <line x1="228" y1="102" x2="258" y2="102" stroke="#34d399" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  {/* Node 2 - LLM */}
                  <rect x="258" y="80" width="90" height="44" rx="6" fill="#064e3b" stroke="#6ee7b7" strokeWidth="1.5" />
                  <text x="303" y="98" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">LLM AGENT</text>
                  <text x="303" y="112" textAnchor="middle" fill="#a7f3d0" fontSize="7" fontFamily="monospace">TritonAI Gateway</text>
                  {/* Arrow 2 */}
                  <line x1="348" y1="102" x2="378" y2="102" stroke="#34d399" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  {/* Node 3 - Output */}
                  <rect x="378" y="80" width="82" height="44" rx="6" fill="#065f46" stroke="#34d399" strokeWidth="1.5" />
                  <text x="419" y="98" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">RESPONSE</text>
                  <text x="419" y="112" textAnchor="middle" fill="#a7f3d0" fontSize="7" fontFamily="monospace">Canvas Embed</text>
                  {/* Second row nodes */}
                  <rect x="198" y="162" width="90" height="44" rx="6" fill="#1e3a30" stroke="#059669" strokeWidth="1" />
                  <text x="243" y="180" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">DATA FILTER</text>
                  <text x="243" y="194" textAnchor="middle" fill="#a7f3d0" fontSize="7" fontFamily="monospace">P2 Approved</text>
                  <rect x="318" y="162" width="90" height="44" rx="6" fill="#1e3a30" stroke="#059669" strokeWidth="1" />
                  <text x="363" y="180" textAnchor="middle" fill="#ffffff" fontSize="8" fontFamily="monospace" fontWeight="bold">NOTIFY</text>
                  <text x="363" y="194" textAnchor="middle" fill="#a7f3d0" fontSize="7" fontFamily="monospace">Email + Slack</text>
                  {/* Connecting lines row 2 */}
                  <line x1="303" y1="124" x2="303" y2="152" stroke="#34d399" strokeWidth="1" opacity="0.5" />
                  <line x1="303" y1="152" x2="243" y2="162" stroke="#34d399" strokeWidth="1" opacity="0.5" />
                  <line x1="303" y1="152" x2="363" y2="162" stroke="#34d399" strokeWidth="1" opacity="0.5" />
                  {/* Status bar */}
                  <rect x="118" y="240" width="354" height="30" rx="4" fill="#0a1a13" />
                  <circle cx="138" cy="255" r="5" fill="#22c55e" />
                  <text x="150" y="259" fill="#6ee7b7" fontSize="8" fontFamily="monospace">Connected · tritonai-api.ucsd.edu · SSO Active · Audit Logging ON</text>
                  {/* Arrow marker */}
                  <defs>
                    <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L6,3 z" fill="#34d399" />
                    </marker>
                  </defs>
                </svg>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full mb-4 w-fit border border-emerald-200">
                  DEVELOPER PLATFORM
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:via-emerald-900 group-hover:to-slate-800 group-hover:bg-clip-text transition-all">
                  TritonAI Embedded App Builder
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Empower campus staff to build self-service micro-agents directly in ServiceNow, Canvas, and Blink. Accelerate institutional service delivery by decentralizing development on top of the campus AI API stack.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Capabilities</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">Self-Service Micro-Agents</span><span className="text-slate-600">Drag-and-drop orchestration of AI service workflows</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">Seamless Integration</span><span className="text-slate-600">Native embeddings for ServiceNow, Canvas, and Blink environments</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">Governance-First Design</span><span className="text-slate-600">Built-in guardrails and API-key management for institutional scale</span></div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:gap-3 transition-all">
                  View App Builder Docs
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Dissertation Formatting Agent */}
        <div className="mb-16 animate-slide-up delay-400">
          <a
            href="https://dissertation-formatter.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-3d"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-auto overflow-hidden bg-gradient-to-br from-slate-800 via-violet-950 to-slate-900 flex items-center justify-center p-12">
                <Image
                  src="/dissertation-agent.png"
                  alt="Dissertation Formatting Agent"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-violet-50 text-violet-800 text-xs font-bold rounded-full mb-4 w-fit border border-violet-200">
                  ACADEMIC WORKFLOW
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:via-violet-900 group-hover:to-slate-800 group-hover:bg-clip-text transition-all">
                  Dissertation Formatting Agent
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Validates doctoral dissertations and master&apos;s theses against 84 UCSD GEPA formatting rules across 13 categories. Auto-corrects 17+ common issues. Three-bucket results: Fixed For You, Action Required, Please Verify.
                </p>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-violet-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">84 GEPA Rules Checked</span><span className="text-slate-600">13 categories including margins, fonts, spacing, pagination, and accessibility</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-violet-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">Auto-Corrects 17+ Issues</span><span className="text-slate-600">Common formatting problems fixed automatically before review</span></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-violet-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <div><span className="font-semibold text-slate-900 block">WCAG 2.1 AA Accessibility</span><span className="text-slate-600">Includes accessibility checks alongside formatting validation</span></div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-slate-800 font-bold text-lg group-hover:gap-3 transition-all">
                  Try Dissertation Formatter
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
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
