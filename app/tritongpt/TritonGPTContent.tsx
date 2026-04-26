'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const AnimatedNumber = ({ end, suffix = '', isVisible }: { end: number; suffix?: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end, isVisible]);

  return <span>{count}{suffix}</span>;
};

export default function TritonGPTContent() {
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef<HTMLElement>(null);
  const programOfferingStyles = [
    {
      card: "bg-gradient-to-br from-blue-50 to-white border-blue-200 hover:border-blue-300 border-t-blue-600",
      iconWrap: "bg-blue-100/70 text-blue-800 group-hover:bg-blue-100",
      cta: "text-blue-800",
    },
    {
      card: "bg-gradient-to-br from-amber-50 to-white border-amber-200 hover:border-amber-300 border-t-amber-600",
      iconWrap: "bg-amber-100/70 text-amber-800 group-hover:bg-amber-100",
      cta: "text-amber-800",
    },
    {
      card: "bg-gradient-to-br from-emerald-50 to-white border-emerald-200 hover:border-emerald-300 border-t-emerald-600",
      iconWrap: "bg-emerald-100/70 text-emerald-800 group-hover:bg-emerald-100",
      cta: "text-emerald-800",
    },
    {
      card: "bg-gradient-to-br from-rose-50 to-white border-rose-200 hover:border-rose-300 border-t-rose-600",
      iconWrap: "bg-rose-100/70 text-rose-800 group-hover:bg-rose-100",
      cta: "text-rose-800",
    },
    {
      card: "bg-gradient-to-br from-violet-50 to-white border-violet-200 hover:border-violet-300 border-t-violet-600",
      iconWrap: "bg-violet-100/70 text-violet-800 group-hover:bg-violet-100",
      cta: "text-violet-800",
    },
    {
      card: "bg-gradient-to-br from-cyan-50 to-white border-cyan-200 hover:border-cyan-300 border-t-cyan-600",
      iconWrap: "bg-cyan-100/70 text-cyan-900 group-hover:bg-cyan-100",
      cta: "text-cyan-900",
    },
    {
      card: "bg-gradient-to-br from-lime-50 to-white border-lime-200 hover:border-lime-300 border-t-lime-700",
      iconWrap: "bg-lime-100/70 text-lime-900 group-hover:bg-lime-100",
      cta: "text-lime-900",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setMetricsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" id="main-content">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-amber-950/20 text-white overflow-hidden animate-gradient-shift">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        {/* Enhanced Gradient Background Effect (Blue to Tan/Gold) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/70 via-blue-800/30 to-amber-500/50 opacity-90"></div>
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-bl from-amber-400/40 via-amber-200/10 to-transparent rounded-full blur-3xl opacity-60 animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-blue-600/30 to-transparent rounded-full blur-3xl opacity-40 animate-pulse-glow" style={{ animationDelay: '4s' }}></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="animate-slide-in-left inline-block px-4 py-1.5 bg-amber-500/30 text-amber-100 text-sm font-semibold rounded-full mb-6 backdrop-blur-sm border border-amber-400/40">
            PROGRAM OVERVIEW
          </div>
          <h1 className="animate-slide-up text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-sm">
            TritonAI
          </h1>
          <p className="animate-slide-up delay-100 text-2xl md:text-3xl text-blue-50 mb-6 leading-relaxed font-light">
            A shared AI ecosystem for service, instruction, and everyday campus work
          </p>
          <p className="animate-slide-up delay-150 max-w-4xl text-lg md:text-xl text-blue-100/90 mb-8 leading-relaxed">
            TritonAI brings together TritonGPT, embedded assistants, developer APIs, reusable tools, and emerging agent workflows so
            campus teams can build on governed infrastructure instead of starting from scratch.
          </p>
          <div className="animate-fade-in delay-200 flex flex-wrap gap-4 text-sm text-blue-100">
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-all">
              <svg className="w-5 h-5 animate-bounce-subtle" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Rolling Updates | February 2026
            </div>
            <div className="flex items-center gap-2 backdrop-blur-sm bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20 transition-all">
              <svg className="w-5 h-5 animate-bounce-subtle" style={{ animationDelay: '0.2s' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
              University of California, San Diego
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary with Presentation Link */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="card-3d bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-10 border-l-4 border-blue-800 shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
          <p className="text-xl text-gray-700 leading-relaxed relative z-10 mb-8">
            <span className="font-bold text-blue-800">TritonAI</span> is UC San Diego&apos;s approach to making AI useful across the university. It brings together secure infrastructure, task-specific assistants, embedded experiences, developer access, and shared tools into one campus ecosystem.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed relative z-10 mb-8">
            <span className="font-bold text-blue-800">TritonGPT</span> is the platform layer at the center of that work: a secure, SDSC-hosted environment that supports more than <span className="font-bold">73,000 students, staff, and faculty</span> without per-token costs. From that foundation, TritonAI is expanding into instructional tools, public-facing support, model access for developers, and the building blocks for agentic workflows.
          </p>
          <a
            href="https://ucsd-presentation.vercel.app/#slide=1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white px-6 py-4 rounded-xl font-semibold hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-xl hover:scale-105 group/link"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>View TritonAI Slide Deck</span>
            <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* TritonAI Program Offerings */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">What TritonAI Includes</h2>
          <p className="text-lg text-gray-600">
            TritonAI includes the shared pieces needed to support campus adoption: a governed platform, embedded experiences, instructional tools,
            developer access, reusable skills, and a path toward agent workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
	          {[
	            {
	              title: "TritonGPT Platform",
	              description:
	                "A secure, SDSC-hosted foundation for campus AI with assistants built around specific university workflows.",
	              href: "https://tritonai.ucsd.edu/tritongpt/index.html",
	              icon: (
	                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1.5-1.5L4 19.25l.75-3.25a7.5 7.5 0 1115-1.5 7.5 7.5 0 01-9.5 7.25z" />
	                </svg>
	              ),
	            },
	            {
	              title: "Embedded Website Support",
	              description:
	                "Embeddable AI support for campus websites so visitors can ask questions in context without needing a login.",
              href: "https://tritonai.ucsd.edu/tritongpt/chatbot-widget.html",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l1.3-3.9A7.75 7.75 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              ),
	            },
	            {
	              title: "Instructional AI",
	              description:
	                "Course-grounded student and instructor assistants built around instructor-approved materials and teaching workflows.",
	              href: "https://tritonai.ucsd.edu/tritongpt/instruction.html",
	              icon: (
	                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 14.5c0 4.418-4.03 8-9 8s-9-3.582-9-8a12.083 12.083 0 012.84-3.922L12 14z" />
                </svg>
              ),
	            },
	            {
	              title: "Shared Resources and Adoption",
	              description:
	                "Guides, prompting practices, examples, and training that help campus teams use TritonAI more effectively.",
	              href: "https://tritonai.ucsd.edu/training-resources/index.html",
	              icon: (
	                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
	            },
	            {
	              title: "Developer APIs",
	              description:
	                "A governed gateway to approved models so campus developers can build, test, and scale applications responsibly.",
	              href: "https://tritonai.ucsd.edu/developer-apis/start.html",
	              icon: (
	                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
              ),
	            },
	            {
	              title: "Tools, Skills, and MCP",
	              description:
	                "A growing toolkit of reusable tools, MCP-based connectors, and shared skills for common campus tasks and workflows.",
	              href: "https://tritonai.ucsd.edu/tools/index.html",
	              icon: (
	                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3a1 1 0 010 1.4L7.4 15l-3.4.4.4-3.4 7.3-7.3a1 1 0 011.4 0l1.6 1.6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3h9v9" />
                </svg>
              ),
            },
          ].map((offering, index) => {
            const style = programOfferingStyles[index % programOfferingStyles.length];
            return (
              <a
                key={offering.href}
                href={offering.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-3d rounded-xl p-7 shadow-lg border border-t-4 hover:shadow-2xl transition-all group ${style.card}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${style.iconWrap}`}>
                    {offering.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{offering.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{offering.description}</p>
                    <p className={`mt-4 text-sm font-semibold inline-flex items-center gap-2 ${style.cta}`}>
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-white py-20" ref={metricsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Early Signals from TritonAI</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              A few measures that show how the work is affecting administrative workflows, public support, and learning.
            </p>
            <div className="w-20 h-1 bg-blue-800 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card-3d text-center p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-400/0 to-blue-400/0 group-hover:from-slate-400/10 group-hover:to-blue-400/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-slate-800 mb-2 transition-all duration-300 group-hover:scale-110">
                  <AnimatedNumber end={91} isVisible={metricsVisible} />%
                </div>
                <div className="text-slate-700 font-medium">Faster Contract Review</div>
                <div className="text-sm text-slate-500 mt-2">120 minutes to 11 minutes on average</div>
              </div>
            </div>
            <div className="card-3d text-center p-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden delay-100">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400/0 to-pink-400/0 group-hover:from-rose-400/10 group-hover:to-pink-400/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-rose-700 mb-2 transition-all duration-300 group-hover:scale-110">
                  <AnimatedNumber end={83} isVisible={metricsVisible} />%
                </div>
                <div className="text-rose-700 font-medium">Faster Job Description Drafting</div>
                <div className="text-sm text-rose-500 mt-2">30 minutes to 5 minutes on average</div>
              </div>
            </div>
            <div className="card-3d text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 to-orange-400/0 group-hover:from-amber-400/10 group-hover:to-orange-400/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-amber-600 mb-2 transition-all duration-300 group-hover:scale-110">
                  $<AnimatedNumber end={500} isVisible={metricsVisible} />K
                </div>
                <div className="text-amber-700 font-medium">Projected Annual Savings</div>
                <div className="text-sm text-amber-600 mt-2">From replacing third-party public support tooling</div>
              </div>
            </div>
            <div className="card-3d text-center p-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden delay-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-teal-400/0 group-hover:from-cyan-400/10 group-hover:to-teal-400/10 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-cyan-700 mb-2 transition-all duration-300 group-hover:scale-110">
                  <AnimatedNumber end={81} isVisible={metricsVisible} />%
                </div>
                <div className="text-teal-700 font-medium">Student Learning Impact</div>
                <div className="text-sm text-teal-600 mt-2">Reported the tutor helped them understand concepts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Vision */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How TritonAI Is Taking Shape</h2>
        <p className="text-lg text-gray-600 max-w-4xl mb-10">
          TritonAI is being built around a few practical principles: governed infrastructure for sensitive work, shared access instead of isolated pilots,
          tools designed around specific campus pain points, and an architecture that can evolve from assistants toward supervised agency.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Trust Is Infrastructure',
              description:
                'Sensitive work in HR, finance, legal, and student support needs governed infrastructure. TritonAI uses on-prem resources when data must stay on campus and approved hosted services when agreements provide the right security and scale.',
            },
            {
              title: 'Make AI a Shared Utility',
              description:
                'Shared infrastructure and zero-variable-cost access make experimentation easier for more people. The goal is not a small number of premium tools, but broad and equitable access to useful ones.',
            },
            {
              title: 'Solve Specific Pain Points',
              description:
                'The strongest early use cases have been concrete ones: contract review, public support, search, scheduling, and instructional support. Focused tools create trust faster than generic chat.',
            },
            {
              title: 'Meet People in the Workflow',
              description:
                'TritonAI is showing up in Blink, public websites, teaching tools, mobile experiences, and departmental applications. Adoption improves when AI appears where work is already happening.',
            },
            {
              title: 'Stay Model-Agnostic',
              description:
                'The architecture is built around gateways, connectors, and governance rather than a single provider. That keeps campus teams flexible as models and commercial terms change.',
            },
            {
              title: 'Prepare for Agency',
              description:
                'The next step is moving from answering questions to completing supervised multi-step work. APIs, reusable skills, connectors, and observability are the pieces that make that shift practical.',
            },
          ].map((principle) => (
            <div key={principle.title} className="card-3d bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
              <p className="text-gray-700 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TritonGPT Demo Videos */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">TritonAI in Action</h2>
            <p className="text-xl text-gray-600">Examples from the TritonAI portfolio, built on TritonGPT and connected to everyday university work.</p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                title: "Job Description Helper",
                description: "Helps HR and hiring managers draft clear, compliant job descriptions in minutes.",
                src: "https://tritongpt-deck.vercel.app/media/media4.mov",
              },
              {
                title: "Fund Manager Coach",
                description: "Guides grant and fund managers on compliance, allowable expenses, and spending restrictions.",
                src: "https://tritongpt-deck.vercel.app/media/media3.mov",
              },
              {
                title: "UC San Diego Assistant",
                description: "Answers campus policy and service questions using curated departmental knowledge and institutional resources.",
                src: "https://tritongpt-deck.vercel.app/media/media1.mov",
                poster: "https://tritongpt-deck.vercel.app/media/image36.png",
              },
              {
                title: "Contract Reviewer",
                description: "Auto-redlines third-party NDAs/contracts against UC San Diego and UC Terms & Conditions and Legal Position.",
                src: "https://tritongpt-deck.vercel.app/media/media7.mp4",
                poster: "https://tritongpt-deck.vercel.app/media/image47.png",
              },
            ].map((video) => (
              <div
                key={video.src}
                className="card-3d bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
              >
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900">{video.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{video.description}</p>
                </div>
                <div className="relative">
                  <video
                    className="w-full aspect-video bg-black"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    poster={video.poster}
                  >
                    <source
                      src={video.src}
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Examples Across the TritonAI Portfolio</h2>
            <p className="text-lg text-gray-600">
              These are not generic chatbots. They are focused tools built around specific service, instructional, research, and administrative workflows where grounded context and institutional trust matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dynamic color cycling for assistant cards */}
            {[
              {
                name: "UC San Diego Assistant",
                desc: "Cross-functional knowledge bridge drawing from 70+ curated department websites, hundreds of ServiceNow knowledge base articles, and UC San Diego policies.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              {
                name: "General AI Assistant",
                desc: "Writing and editing support without UC San Diego-specific context or reference links.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                )
              },
              {
                name: "Job Description Helper",
                desc: "Assists HR and managers in drafting comprehensive, compliant job descriptions with significant efficiency gains.",
                metric: "83% reduction in drafting time",
                stats: "30 min → 5 min average",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              },
              {
                name: "Contract Reviewer",
                desc: "Accelerates legal review for NDAs and Terms & Conditions, highlighting potential issues for specialist focus.",
                metric: "91% time savings for NDAs/T&Cs",
                stats: "120 min → 11 min average",
                quote: "It's like having an extra attorney, basically.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                name: "Fund Manager Coach",
                desc: "Expert guidance on grant compliance, spending restrictions, and financial management for research funds.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                name: "Phishing Analyzer",
                desc: "Scores suspicious emails for phishing risk and explains warning signs to protect campus data.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                name: "Deep Research Assistant",
                desc: "Synthesis and analysis across hundreds of research documents and institutional data points.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                name: "Triton Developer Assistant",
                desc: "On-demand coding support and documentation analysis for staff and administrators.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                name: "Socratic Tutor",
                desc: "Guided learning assistant that helps students master materials without providing direct answers.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                name: "Instructor AI Assistant",
                desc: "Automated generation of quizzes, summaries, and study guides directly from lecture content.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                name: "Internet Search Assistant",
                desc: "Conversational AI with internet access for real-time information and answers.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              {
                name: "Expert Notetaker",
                desc: "Converts transcripts or notes into structured documentation focused on decisions and actionability.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                )
              },
              {
                name: "Project Charter Assistant",
                desc: "Helps draft professional and comprehensive project charters.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              {
                name: "AI Workplace Opportunity Assistant (v0.1)",
                desc: "Interviews users about daily tasks to suggest tailored AI use cases and prompts.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                name: "Performance Review Evaluator",
                desc: "Helps supervisors align performance ratings with written comments.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                name: "Data Dictionary Assistant",
                desc: "Provides definitions from specific UC San Diego data sources like the Activity Hub and Blink.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                name: "Supplier Search Tool",
                desc: "Assists in finding campus suppliers and explains the UCSD purchasing process.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                name: "UCSD Benefit Assistant",
                desc: "Answers questions regarding employee benefit packages.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                name: "UC San Diego Class Scheduling Assistant",
                desc: "Helps students build optimized schedules based on subject codes and availability.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((assistant, index) => {
              const colors = [
                { border: 'hover:border-blue-500', bg: 'bg-blue-50', iconBg: 'group-hover:bg-blue-600', text: 'text-blue-600', groupText: 'group-hover:text-blue-600', quoteBorder: 'border-blue-100' },
                { border: 'hover:border-indigo-500', bg: 'bg-indigo-50', iconBg: 'group-hover:bg-indigo-600', text: 'text-indigo-600', groupText: 'group-hover:text-indigo-600', quoteBorder: 'border-indigo-100' },
                { border: 'hover:border-sky-500', bg: 'bg-sky-50', iconBg: 'group-hover:bg-sky-600', text: 'text-sky-600', groupText: 'group-hover:text-sky-600', quoteBorder: 'border-sky-100' },
                { border: 'hover:border-amber-500', bg: 'bg-amber-50', iconBg: 'group-hover:bg-amber-600', text: 'text-amber-600', groupText: 'group-hover:text-amber-600', quoteBorder: 'border-amber-100' },
                { border: 'hover:border-cyan-500', bg: 'bg-cyan-50', iconBg: 'group-hover:bg-cyan-600', text: 'text-cyan-600', groupText: 'group-hover:text-cyan-600', quoteBorder: 'border-cyan-100' },
                { border: 'hover:border-blue-500', bg: 'bg-blue-50', iconBg: 'group-hover:bg-blue-600', text: 'text-blue-600', groupText: 'group-hover:text-blue-600', quoteBorder: 'border-blue-100' },
                { border: 'hover:border-indigo-500', bg: 'bg-indigo-50', iconBg: 'group-hover:bg-indigo-600', text: 'text-indigo-600', groupText: 'group-hover:text-indigo-600', quoteBorder: 'border-indigo-100' },
                { border: 'hover:border-sky-500', bg: 'bg-sky-50', iconBg: 'group-hover:bg-sky-600', text: 'text-sky-600', groupText: 'group-hover:text-sky-600', quoteBorder: 'border-sky-100' },
                { border: 'hover:border-amber-500', bg: 'bg-amber-50', iconBg: 'group-hover:bg-amber-600', text: 'text-amber-600', groupText: 'group-hover:text-amber-600', quoteBorder: 'border-amber-100' },
              ];
              const color = colors[index % colors.length];

              return (
                <div 
                  key={index} 
                  className={`card-3d bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all group flex flex-col ${color.border}`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${color.bg} ${color.iconBg}`}>
                    <div className={`${color.text} group-hover:text-white transition-colors`}>
                      {assistant.icon}
                    </div>
                  </div>
                  <h4 className={`text-xl font-bold text-gray-900 mb-3 transition-colors ${color.groupText}`}>
                    {assistant.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                    {assistant.desc}
                  </p>
                  {assistant.metric && (
                    <div className="mt-auto">
                      <p className={`text-sm font-semibold mb-1 ${color.text}`}>{assistant.metric}</p>
                      {assistant.stats && <p className="text-xs text-gray-500">{assistant.stats}</p>}
                    </div>
                  )}
                  {assistant.quote && (
                    <div className={`mt-4 border-l-2 pl-4 py-1 ${color.quoteBorder}`}>
                      <p className="text-[10px] text-gray-500 italic leading-tight">
                        &ldquo;{assistant.quote}&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-24 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Recognition & Awards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href="https://www.cio.com/article/4032770/unpacking-uc-san-diegos-use-of-llms-to-boost-access-to-knowledge.html"
              target="_blank"
              rel="noopener noreferrer"
              className="card-3d bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-amber-600 transition-colors">CIO 100 Award</h3>
              <p className="text-gray-600 text-center">2025 - Recognized as top global IT innovation</p>
            </a>
            <a 
              href="https://www.gartner.com/en/about/awards/eye-on-innovation"
              target="_blank"
              rel="noopener noreferrer"
              className="card-3d bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center group-hover:text-purple-600 transition-colors">Gartner Eye on Innovation</h3>
              <p className="text-gray-600 text-center">Finalist for transformational impact in education</p>
            </a>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Where TritonAI Is Going Next</h2>
        <p className="text-lg text-gray-600 max-w-4xl mb-12">
          The next phase expands beyond chat into a broader tools hub: model access for developers, more embedded campus experiences,
          workflow orchestration, observability, and new support for academic and administrative use cases.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Transcript Verification",
              desc: "OCR and transcript matching workflows for enrollment-related review.",
              color: "blue",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
            },
            {
              title: "Instructional AI Expansion",
              desc: "More course pilots, faculty tooling, and simpler assistant creation for instructors.",
              color: "purple",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" /></svg>
            },
            {
              title: "Campus Model APIs",
              desc: "Direct access to local and commercial models through one governed gateway.",
              color: "pink",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" /></svg>
            },
            {
              title: "Mobile Integration",
              desc: "Bringing TritonGPT-powered support into the UC San Diego mobile experience.",
              color: "cyan",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            },
            {
              title: "IT Observability Pilot",
              desc: "AI-assisted detection and response for system anomalies and operations signals.",
              color: "emerald",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            },
            {
              title: "Academic Advising Agent",
              desc: "Proof-of-concept support for tier-one academic advising questions and triage.",
              color: "indigo",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
            },
            {
              title: "Agent Builder and Workflow Tools",
              desc: "Low-code orchestration, reusable skills, and connectors for supervised agent workflows.",
              color: "rose",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
            },
          ].map((item, index) => {
            const colors = [
              { border: 'hover:border-blue-500', bg: 'bg-blue-50', iconBg: 'group-hover:bg-blue-600', text: 'text-blue-600', groupText: 'group-hover:text-blue-600' },
              { border: 'hover:border-purple-500', bg: 'bg-purple-50', iconBg: 'group-hover:bg-purple-600', text: 'text-purple-600', groupText: 'group-hover:text-purple-600' },
              { border: 'hover:border-emerald-500', bg: 'bg-emerald-50', iconBg: 'group-hover:bg-emerald-600', text: 'text-emerald-600', groupText: 'group-hover:text-emerald-600' },
              { border: 'hover:border-rose-500', bg: 'bg-rose-50', iconBg: 'group-hover:bg-rose-600', text: 'text-rose-600', groupText: 'group-hover:text-rose-600' },
              { border: 'hover:border-cyan-500', bg: 'bg-cyan-50', iconBg: 'group-hover:bg-cyan-600', text: 'text-cyan-600', groupText: 'group-hover:text-cyan-600' },
              { border: 'hover:border-indigo-500', bg: 'bg-indigo-50', iconBg: 'group-hover:bg-indigo-600', text: 'text-indigo-600', groupText: 'group-hover:text-indigo-600' },
              { border: 'hover:border-amber-500', bg: 'bg-amber-50', iconBg: 'group-hover:bg-amber-600', text: 'text-amber-600', groupText: 'group-hover:text-amber-600' },
            ];
            const color = colors[index % colors.length];

            return (
              <div 
                key={index} 
                className={`card-3d bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all group flex flex-col ${color.border}`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${color.bg} ${color.iconBg}`}>
                  <div className={`${color.text} group-hover:text-white transition-colors`}>
                    {item.icon}
                  </div>
                </div>
                <h4 className={`text-xl font-bold text-gray-900 mb-3 transition-colors ${color.groupText}`}>
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
          </div>
      </section>

      {/* Conclusion */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20 overflow-hidden animate-gradient-shift">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-400/20 to-transparent rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in">What We&apos;re Learning Through TritonAI</h2>
          <p className="text-2xl text-blue-100 leading-relaxed mb-8 animate-slide-up">
            The clearest lesson so far is that institutional AI works best when it is treated as shared infrastructure rather than a collection of disconnected demos. Secure hosting matters, but so do good knowledge sources, reusable connectors, governance, and close partnership with the people doing the work.
          </p>
          <div className="card-3d inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
            <p className="text-blue-100 italic">TritonAI is one way of learning how shared institutional AI can become practical, trusted, and reusable.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to Compare Notes?</h2>
          <p className="text-xl text-gray-600 mb-8">
            If you&apos;re building something similar in higher education, I&apos;d be glad to compare notes and hear what your institution is learning.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-50 text-rose-600 px-10 py-4 font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl rounded-lg group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600"
          >
            Start a Conversation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
