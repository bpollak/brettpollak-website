'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import TritonAISystemMap from '@/components/tritongpt/TritonAISystemMap';

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
      card: "border-l-[#1f5a8a]",
      iconWrap: "bg-[#edf4f7] text-[#1f5a8a]",
      cta: "text-blue-800",
    },
    {
      card: "border-l-[#c97712]",
      iconWrap: "bg-[#fff5e7] text-[#9b5a06]",
      cta: "text-[#9b5a06]",
    },
    {
      card: "border-l-[#466b54]",
      iconWrap: "bg-[#eef5ee] text-[#466b54]",
      cta: "text-[#466b54]",
    },
    {
      card: "border-l-[#b85642]",
      iconWrap: "bg-[#fff0ed] text-[#b85642]",
      cta: "text-[#b85642]",
    },
    {
      card: "border-l-[#17201b]",
      iconWrap: "bg-[#eef0eb] text-[#17201b]",
      cta: "text-[#17201b]",
    },
    {
      card: "border-l-[#1f5a8a]",
      iconWrap: "bg-[#edf4f7] text-[#1f5a8a]",
      cta: "text-[#1f5a8a]",
    },
    {
      card: "border-l-[#c97712]",
      iconWrap: "bg-[#fff5e7] text-[#9b5a06]",
      cta: "text-[#9b5a06]",
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
    <div className="min-h-screen bg-[#f7f9f5] text-[#17201b]" id="main-content">
      {/* Hero Section */}
      <section className="paper-grid border-b border-[#d9dfd3]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end">
            <div>
              <p className="rule-label mb-6">Program overview</p>
              <h1 className="text-5xl md:text-7xl leading-none font-medium text-[#17201b]">TritonAI</h1>
              <p className="mt-8 text-2xl md:text-3xl leading-10 text-[#485248]">
                A shared AI ecosystem for service, instruction, development, and everyday campus work.
              </p>
            </div>
            <div className="border-y border-[#d9dfd3] py-6">
              <p className="text-lg leading-8 text-[#485248]">
                TritonAI brings together TritonGPT, live campus data tools, a growing model hub, developer APIs, embedded assistants, reusable workflows, and the early scaffolding for supervised agents so campus teams can build on governed infrastructure instead of starting from scratch.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="system-node p-4">
                  <p className="font-mono text-xs text-[#c97712]">UPDATED</p>
                  <p className="mt-2 font-semibold">May 2026</p>
                </div>
                <div className="system-node p-4">
                  <p className="font-mono text-xs text-[#c97712]">CONTEXT</p>
                  <p className="mt-2 font-semibold">University of California, San Diego</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="rule-label mb-4">Executive summary</p>
            <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#17201b]">A platform program, not a single chatbot.</h2>
          </div>
          <div className="field-note p-8">
            <p className="text-xl text-[#485248] leading-9 mb-7">
            <span className="font-bold text-blue-800">TritonAI</span> is UC San Diego&apos;s approach to making AI useful across the university. It now spans secure infrastructure, task-specific assistants, live campus-aware tools, instructional pilots, developer access, and shared workflows in one governed campus ecosystem.
          </p>
            <p className="text-xl text-[#485248] leading-9 mb-8">
            <span className="font-bold text-blue-800">TritonGPT</span> remains the platform layer at the center of that work: a secure, SDSC-hosted environment available to more than <span className="font-bold">73,000 students, staff, and faculty</span>. The current arc is broader than chat: model choice, on-prem and approved cloud routes, API access for builders, embedded website support, and the building blocks for agentic workflows.
          </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-8 border border-[#d9dfd3] bg-white/70 p-4 shadow-[8px_8px_0_rgba(31,90,138,0.08)]">
          <TritonAISystemMap />
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          {[
            ['01', 'Knowledge', 'Curated campus context, uploaded documents, and live data tools'],
            ['02', 'Model Access', 'Self-hosted and approved cloud models through governed routes'],
            ['03', 'Developer Surface', 'APIs, credits, keys, endpoints, and usage reporting'],
            ['04', 'Workflow', 'Assistants, embedded support, tools, and reusable agent scaffolding'],
          ].map(([number, title, body]) => (
            <div key={title} className="system-node p-5">
              <p className="font-mono text-xs text-[#c97712]">{number}</p>
              <h3 className="mt-5 text-lg font-semibold text-[#17201b]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#485248]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TritonAI Program Offerings */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-10 max-w-4xl">
          <p className="rule-label mb-4">Program parts</p>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight text-[#17201b] mb-4">What TritonAI Includes</h2>
          <p className="text-lg leading-8 text-[#485248]">
            TritonAI includes the shared pieces needed to support campus adoption: a governed platform, embedded experiences, instructional tools,
            live data integrations, developer access, reusable skills, and a path toward supervised agent workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
	          {[
	            {
	              title: "TritonGPT Platform",
	              description:
	                "A secure, SDSC-hosted foundation for campus AI with assistants built around specific university workflows and campus-aware context.",
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
	                "Embeddable AI support for campus websites, now paired with live campus data patterns such as parking availability and location busyness.",
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
	                "A governed gateway to self-hosted and approved cloud models, with starter credits, usage reporting, and recharge paths for projects that scale.",
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
	                "A growing toolkit of reusable tools, MCP-based connectors, shared skills, and workflow patterns for common campus tasks.",
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
                className={`group border border-l-4 border-[#d9dfd3] bg-[#fffef9] p-7 transition-colors hover:bg-white ${style.card}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${style.iconWrap}`}>
                    {offering.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#17201b]">{offering.title}</h3>
                    <p className="mt-2 text-sm text-[#485248] leading-6">{offering.description}</p>
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

      {/* TritonGPT Demo Videos */}
      <section className="bg-[#eef2ea] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 max-w-4xl">
            <p className="rule-label mb-4">Recorded work</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#17201b] mb-4">TritonAI in Action</h2>
            <p className="text-xl leading-8 text-[#485248]">Examples from the TritonAI portfolio, built on TritonGPT and connected to everyday university work.</p>
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
                className="overflow-hidden border border-[#d9dfd3] bg-[#fffef9]"
              >
                <div className="p-6 border-b border-[#d9dfd3]">
                  <h3 className="text-xl font-semibold text-[#17201b]">{video.title}</h3>
                  <p className="mt-2 text-sm text-[#485248] leading-6">{video.description}</p>
                </div>
                <div className="relative">
                  <video
                    className="w-full aspect-video bg-black"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                    poster={video.poster}
                    aria-label={`${video.title} demo video`}
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

      {/* Key Metrics */}
      <section className="bg-[#fffef9] py-20 border-y border-[#d9dfd3]" ref={metricsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="rule-label mb-4">Measured signals</p>
              <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#17201b]">Early Signals from TritonAI</h2>
            </div>
            <p className="text-lg leading-8 text-[#485248] max-w-3xl">
              A few measures that show how the work is affecting administrative workflows, public support, and learning.
            </p>
          </div>
          <div className="grid border-y border-[#d9dfd3] md:grid-cols-4">
            {[
              ['91%', 91, '%', 'Faster Contract Review', '120 minutes to 11 minutes on average', 'text-[#1f5a8a]'],
              ['83%', 83, '%', 'Faster Job Description Drafting', '30 minutes to 5 minutes on average', 'text-[#b8503f]'],
              ['17', 17, '', 'Model Hub Breadth', 'Self-hosted and approved cloud models available through TritonAI', 'text-[#c97712]'],
              ['$500K', 500, 'K', 'Projected Annual Savings', 'From replacing third-party public support tooling', 'text-[#366c5a]'],
            ].map(([fallback, end, suffix, label, detail, colorClass], index) => (
              <div key={label} className="border-b border-[#d9dfd3] p-7 md:border-b-0 md:border-r md:last:border-r-0">
                <p className="font-mono text-xs text-[#c97712]">0{index + 1}</p>
                <div className={`mt-5 text-5xl font-semibold leading-none ${colorClass}`}>
                  {fallback === '$500K' ? '$' : ''}
                  <AnimatedNumber end={Number(end)} suffix={suffix === 'K' ? 'K' : String(suffix)} isVisible={metricsVisible} />
                </div>
                <div className="mt-5 font-semibold text-[#17201b]">{label}</div>
                <div className="mt-2 text-sm leading-6 text-[#485248]">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Vision */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="rule-label mb-4">Operating principles</p>
        <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#17201b] mb-5">How TritonAI Is Taking Shape</h2>
        <p className="text-lg leading-8 text-[#485248] max-w-4xl mb-10">
          TritonAI is being built around a few practical principles: governed infrastructure for sensitive work, shared access instead of isolated pilots,
          tools designed around specific campus pain points, model choice without fragmented governance, and an architecture that can evolve from assistants toward supervised agency.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Trust Is Infrastructure',
              description:
                'Sensitive work in HR, finance, legal, student support, and institutional operations needs governed infrastructure. TritonAI separates local/self-hosted capacity from approved cloud routes so projects can match model choice to data sensitivity, cost, and task complexity.',
            },
            {
              title: 'Make AI a Shared Utility',
              description:
                'Shared infrastructure and zero-variable-cost access make experimentation easier for more people. The goal is not a small number of premium tools, but broad and equitable access to useful ones.',
            },
            {
              title: 'Solve Specific Pain Points',
              description:
                'The strongest use cases have been concrete ones: contract review, public support, search, scheduling, performance review alignment, transcript workflows, and instructional support. Focused tools create trust faster than generic chat.',
            },
            {
              title: 'Meet People in the Workflow',
              description:
                'TritonAI is showing up in Blink, public websites, teaching tools, mobile experiences, developer projects, and departmental applications. Adoption improves when AI appears where work is already happening.',
            },
            {
              title: 'Stay Model-Agnostic',
              description:
                'The architecture is built around gateways, canonical model routes, connectors, usage reporting, and governance rather than a single provider. That keeps campus teams flexible as models, prices, and commercial terms change.',
            },
            {
              title: 'Prepare for Agency',
              description:
                'The next step is moving from answering questions to completing supervised multi-step work. APIs, reusable skills, connectors, model observability, and access monitoring are the pieces that make that shift practical.',
            },
          ].map((principle) => (
            <div key={principle.title} className="field-note p-8">
              <h3 className="text-xl font-semibold text-[#17201b] mb-3">{principle.title}</h3>
              <p className="text-[#485248] leading-7">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-[#f7f9f5] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-12">
            <p className="rule-label mb-4">Assistant index</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#17201b] mb-5">Examples Across the TritonAI Portfolio</h2>
            <p className="text-lg leading-8 text-[#485248]">
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
                desc: "Accelerates NDA and Terms & Conditions review **for the UC San Diego Procurement team**, aligning vendor contracts with UC Legal Position and university template terms. Highlights potential issues for specialist focus.",
                metric: "91% time savings for NDAs/T&Cs",
                stats: "120 min → 11 min average",
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
                desc: "Helps supervisors and HR teams assess whether performance ratings are supported by written comments, with stricter review of rating/comment alignment.",
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
              return (
                <div 
                  key={index} 
                  className="system-node p-7"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-[#eef2ea] text-[#1f5a8a]">
                      {assistant.icon}
                    </div>
                    <p className="font-mono text-xs text-[#c97712]">{String(index + 1).padStart(2, '0')}</p>
                  </div>
                  <h4 className="text-xl font-semibold text-[#17201b] mb-3">
                    {assistant.name}
                  </h4>
                  <p className="text-sm text-[#485248] mb-4 leading-6 flex-1">
                    {assistant.desc}
                  </p>
                  {assistant.metric && (
                    <div className="mt-auto">
                      <p className="text-sm font-semibold mb-1 text-[#1f5a8a]">{assistant.metric}</p>
                      {assistant.stats && <p className="text-xs text-[#6b746b]">{assistant.stats}</p>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="bg-[#eef2ea] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="rule-label mb-4">External recognition</p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#17201b] mb-12">Recognition & Awards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href="https://www.cio.com/article/4032770/unpacking-uc-san-diegos-use-of-llms-to-boost-access-to-knowledge.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-[#d9dfd3] bg-[#fffef9] p-8 transition-colors hover:bg-white"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center bg-[#fff5e7] text-[#c97712]">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#17201b] mb-2 transition-colors group-hover:text-[#1f5a8a]">CIO 100 Award</h3>
              <p className="text-[#485248]">2025 - Recognized as top global IT innovation</p>
            </a>
            <a 
              href="https://www.gartner.com/en/about/awards/eye-on-innovation"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-[#d9dfd3] bg-[#fffef9] p-8 transition-colors hover:bg-white"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center bg-[#edf4f7] text-[#1f5a8a]">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#17201b] mb-2 transition-colors group-hover:text-[#1f5a8a]">Gartner Eye on Innovation</h3>
              <p className="text-[#485248]">Finalist for transformational impact in education</p>
            </a>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="rule-label mb-4">Roadmap</p>
        <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#17201b] mb-5">Where TritonAI Is Going Next</h2>
        <p className="text-lg leading-8 text-[#485248] max-w-4xl mb-12">
          The next phase expands beyond chat into a broader tools hub: richer model access for developers, more embedded campus experiences,
          workflow orchestration, observability, live data integrations, and new support for academic and administrative use cases.
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
              title: "Developer API Expansion",
              desc: "Self-hosted model credits, approved cloud routes, usage reporting, and clearer paths from prototype to funded campus application.",
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
              title: "Model and Service Observability",
              desc: "Catalog monitoring, access checks, usage signals, and AI-assisted detection for service anomalies and operational risk.",
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
              desc: "Low-code orchestration, reusable skills, MCP-style connectors, and guardrails for supervised multi-step campus workflows.",
              color: "rose",
              icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
            },
          ].map((item, index) => {
            return (
              <div 
                key={index} 
                className="system-node p-7"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-[#eef2ea] text-[#1f5a8a]">{item.icon}</div>
                  <p className="font-mono text-xs text-[#c97712]">{String(index + 1).padStart(2, '0')}</p>
                </div>
                <h4 className="text-xl font-semibold text-[#17201b] mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-[#485248] mb-4 leading-6 flex-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
          </div>
      </section>

      {/* Conclusion */}
      <section className="bg-[#17201b] text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="rule-label mb-4 text-[#d9dfd3]">Program lesson</p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-8">What We&apos;re Learning Through TritonAI</h2>
          <p className="text-2xl text-[#d9dfd3] leading-10 mb-8">
            The clearest lesson so far is that institutional AI works best when it is treated as shared infrastructure rather than a collection of disconnected demos. Secure hosting matters, but so do model choice, good knowledge sources, live tools, reusable connectors, governance, and close partnership with the people doing the work.
          </p>
          <div className="border-l-4 border-[#c97712] bg-white/5 px-6 py-4">
            <p className="text-[#eef2ea] italic">TritonAI is one way of learning how shared institutional AI can become practical, trusted, and reusable.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#f7f9f5] py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium text-[#17201b] mb-6">Want to Compare Notes?</h2>
          <p className="text-xl leading-8 text-[#485248] mb-8">
            If you&apos;re building something similar in higher education, I&apos;d be glad to compare notes and hear what your institution is learning.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-[#17201b] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#1f5a8a] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
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
