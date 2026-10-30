'use client';

import Link from 'next/link';
import CountUp from '@/components/motion/CountUp';
import TritonAISystemMap from '@/components/tritongpt/TritonAISystemMap';
import { tritonAiMetrics } from '@/lib/tritonAiMetrics';

export default function TritonGPTContent() {
  const programOfferingStyles = [
    {
      card: "border-l-[#1f5a8a]",
      iconWrap: "bg-wash-blue text-signal-blue",
      cta: "text-signal-blue",
    },
    {
      card: "border-l-[#c97712]",
      iconWrap: "bg-wash-gold text-signal-gold-ink",
      cta: "text-signal-gold-ink",
    },
    {
      card: "border-l-[#466b54]",
      iconWrap: "bg-wash-green text-[#466b54]",
      cta: "text-[#466b54]",
    },
    {
      card: "border-l-[#b85642]",
      iconWrap: "bg-wash-coral text-[#b85642]",
      cta: "text-[#b85642]",
    },
    {
      card: "border-l-[#17201b]",
      iconWrap: "bg-[#eef0eb] text-ink",
      cta: "text-ink",
    },
    {
      card: "border-l-[#1f5a8a]",
      iconWrap: "bg-wash-blue text-signal-blue",
      cta: "text-signal-blue",
    },
    {
      card: "border-l-[#c97712]",
      iconWrap: "bg-wash-gold text-signal-gold-ink",
      cta: "text-signal-gold-ink",
    },
  ];

  // Status vocabulary mirrors tritonai.ucsd.edu (use-case portfolio + public roadmap).
  const statusStyles: Record<string, string> = {
    Production: "bg-wash-green text-signal-green",
    Shipped: "bg-wash-green text-signal-green",
    Pilot: "bg-wash-gold text-signal-gold-ink",
    "In development": "bg-wash-blue text-signal-blue",
    Exploring: "bg-[#eef0eb] text-ink",
  };

  return (
    <main className="min-h-screen bg-paper text-ink" id="main-content" tabIndex={-1}>
      {/* Hero Section */}
      <section className="paper-grid border-b border-line">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end">
            <div>
              <p className="rule-label mb-6">Program overview</p>
              <h1 className="text-5xl md:text-7xl leading-none font-medium text-ink">TritonAI</h1>
              <p className="mt-8 text-2xl md:text-3xl leading-10 text-body">
                AI tools, training, and support for UC San Diego, from everyday chat to supervised campus workflows.
              </p>
            </div>
            <div className="border-y border-line py-6">
              <p className="text-lg leading-8 text-body">
                TritonAI runs TritonGPT, reviews which generative AI tools can be used with university data, trains people to use them well, and helps teams build their own. Every service draws on the same approved model access, campus data, and shared components, and every supported service has a named owner.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="system-node p-4">
                  <p className="font-mono text-xs text-signal-gold-ink">UPDATED</p>
                  <p className="mt-2 font-semibold">October 2026</p>
                </div>
                <div className="system-node p-4">
                  <p className="font-mono text-xs text-signal-gold-ink">CONTEXT</p>
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
            <h2 className="text-4xl md:text-5xl leading-tight font-medium text-ink">Scope of the program.</h2>
          </div>
          <div className="field-note p-8">
            <p className="text-xl text-body leading-9 mb-7">
            <span className="font-bold text-signal-blue">TritonAI</span> is UC San Diego&apos;s institutional AI program, serving 73,000+ students, faculty, and staff. It includes infrastructure, task-specific assistants, campus data tools, instructional pilots, developer access, and shared workflows.
          </p>
            <p className="text-xl text-body leading-9 mb-8">
            <span className="font-bold text-signal-blue">TritonGPT</span> is the shared platform at the center of that work. Students, staff, and faculty sign in with their campus account, pick a model, work with their own documents, and open assistants built for campus tasks. Since the 4.6.6 release, the default model is an open model running on UC San Diego infrastructure at SDSC, which keeps routine campus AI traffic on UC-controlled hardware. The release also added Voice Mode, an in-chat coding sandbox, and adjustable reasoning effort. UC San Diego has approved TritonGPT and the TritonAI Harness for information up to Protection Level 3 within an approved service; P4 data is not approved.
          </p>
            <p className="text-xl text-body leading-9">
              The platform has also been licensed to peer institutions, including <span className="font-bold">UC Berkeley (BearGPT)</span>, <span className="font-bold">UC Merced (SCOUT)</span>, which opened to its full campus in September 2026, <span className="font-bold">UC Agriculture and Natural Resources</span>, and <span className="font-bold">Fairleigh Dickinson University (FredGPT)</span>.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-8 border border-line bg-white/70 p-4 shadow-[8px_8px_0_rgba(31,90,138,0.08)]">
          <TritonAISystemMap />
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          {[
            ['01', 'Access', 'TritonGPT and embedded assistants give people approved ways to ask questions and work with documents'],
            ['02', 'Build', 'Developer APIs, the TritonAI Harness, and reusable skills help teams assemble supervised workflows'],
            ['03', 'Connect', 'Approved sources and scoped connectors let a service use only the information its task permits'],
            ['04', 'Operate', 'Hosting, observability, support, review gates, and named owners keep useful services accountable'],
          ].map(([number, title, body]) => (
            <div key={title} className="system-node p-5">
              <p className="font-mono text-xs text-signal-gold-ink">{number}</p>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-body">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TritonAI Program Offerings */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-10 max-w-4xl">
          <p className="rule-label mb-4">Program parts</p>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight text-ink mb-4">What TritonAI Includes</h2>
          <p className="text-lg leading-8 text-body">
            TritonAI includes the shared pieces needed to support campus adoption: a governed platform, embedded experiences, instructional tools,
            guidance on approved AI tools, developer access, reusable skills, and a path toward supervised agent workflows. Most teams start by
            chatting, then add AI to a system they already run, then automate the parts that repeat.
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
	                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1.5-1.5L4 19.25l.75-3.25a7.5 7.5 0 1115-1.5 7.5 7.5 0 01-9.5 7.25z" />
	                </svg>
	              ),
	            },
	            {
	              title: "Embedded Website Support",
	              description:
	                "An embeddable assistant grounded in a site's public content, live on 16 campus websites. No sign-in required; every message passes jailbreak and harmful-content filters, and live tools add parking availability and Geisel Library busyness.",
              href: "https://tritonai.ucsd.edu/tritongpt/chatbot-widget.html",
              icon: (
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l1.3-3.9A7.75 7.75 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              ),
	            },
	            {
	              title: "Instructional AI",
	              description:
	                "A Canvas-integrated AI Tutor for each participating course. Instructors choose the material it can retrieve, what stays hidden, and whether it answers in Socratic or directive mode. The Fall 2026 cohort is open.",
	              href: "https://tritonai.ucsd.edu/tritongpt/instruction.html",
	              icon: (
	                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0121 14.5c0 4.418-4.03 8-9 8s-9-3.582-9-8a12.083 12.083 0 012.84-3.922L12 14z" />
                </svg>
              ),
	            },
	            {
	              title: "Training and Community",
	              description:
	                "The 15-part TritonAI Discovery Series, self-paced Harness training, and a Certificate in AI for Higher Education with staff and leadership streams. TritonAI Connect adds communities of practice, a biweekly AI Use-Case Group, and AI consulting hours.",
	              href: "https://tritonai.ucsd.edu/connect/index.html",
	              icon: (
	                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
	            },
	            {
	              title: "Developer APIs",
	              description:
	                "One Gateway key to approved cloud and UC-hosted models, usable from the TritonAI Harness, Claude Code, Codex, n8n, or your own code. UC-hosted routes carry no recharge for campus administrative work.",
	              href: "https://tritonai.ucsd.edu/developer-apis/index.html",
	              icon: (
	                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
              ),
	            },
	            {
	              title: "UCSD Skills Library",
	              description:
	                "A live library of reusable, reviewed skills and connectors, so teams can adapt work that has already been tested instead of rebuilding each integration. A community contribution path pairs automated checks with human review.",
	              href: "https://tritonai.ucsd.edu/skills/index.html",
	              icon: (
	                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
	                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3a1 1 0 010 1.4L7.4 15l-3.4.4.4-3.4 7.3-7.3a1 1 0 011.4 0l1.6 1.6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3h9v9" />
                </svg>
              ),
            },
            {
              title: "TritonAI Harness",
              description:
                `UC San Diego's primary supported agent workspace, in pilot on Mac and Windows for anyone with a Gateway key. It works with local files, code, Microsoft 365, Google Workspace, GitHub, Kuali Build, and n8n under supervised approval modes. Early usage includes ${tritonAiMetrics.harness.tokensBillions}${tritonAiMetrics.harness.tokensSuffix} tokens, ${tritonAiMetrics.harness.mergedPullRequests} merged pull requests, and ${tritonAiMetrics.harness.aiReviews.toLocaleString()} AI reviews.`,
              href: "https://tritonai.ucsd.edu/developer-apis/harness.html",
              icon: (
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
            },
            {
              title: "Approved AI Tools Guidance",
              description:
                "Guidance on which generative AI tools can be used with university data and for what: TritonGPT, the Harness, Zoom AI Companion, Microsoft Copilot, and Google Gemini, organized by the work someone needs to get done.",
              href: "https://tritonai.ucsd.edu/tools/index.html",
              icon: (
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
          ].map((offering, index) => {
            const style = programOfferingStyles[index % programOfferingStyles.length];
            return (
              <a
                key={offering.title}
                href={offering.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group border border-l-4 border-line bg-paper-strong p-7 transition-colors hover:bg-white ${style.card}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${style.iconWrap}`}>
                    {offering.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{offering.title}</h3>
                    <p className="mt-2 text-sm text-body leading-6">{offering.description}</p>
                    <p className={`mt-4 text-sm font-semibold inline-flex items-center gap-2 ${style.cta}`}>
                      Learn more
                      <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Developer API Program */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="mb-10 max-w-4xl">
          <p className="rule-label mb-4">Developer API Program</p>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight text-ink mb-4">
            A governed path from a personal experiment to a campus service.
          </h2>
          <p className="text-lg leading-8 text-body">
            A recurring challenge in campus AI is moving from a working prototype to something the
            university can operate. The TritonAI LLM Gateway gives every campus builder one key to approved
            cloud and UC-hosted models, under UC enterprise agreements and approved for data up to P3. Before
            choosing a path, a project names its user, its task, the approved data it may touch, and the
            outcome to measure it against.
          </p>
        </div>

        {/* Gateway usage */}
        <div className="mb-12 grid border-y border-line md:grid-cols-3">
          {[
            {
              value: tritonAiMetrics.gateway.tokensBillions,
              suffix: tritonAiMetrics.gateway.tokensSuffix,
              label: 'Tokens through the gateway',
              detail: `${tritonAiMetrics.gateway.tokensPeriodLabel}, ${tritonAiMetrics.gateway.tokensPeakNote}`,
              colorClass: 'text-signal-blue',
              decimals: true,
            },
            {
              value: tritonAiMetrics.gateway.requestsMillions,
              suffix: tritonAiMetrics.gateway.requestsSuffix,
              label: 'API requests completed',
              detail: tritonAiMetrics.gateway.requestsRouteNote,
              colorClass: 'text-signal-green',
              decimals: true,
            },
            {
              value: tritonAiMetrics.gateway.selfHostedPercent,
              suffix: tritonAiMetrics.gateway.selfHostedSuffix,
              label: 'Served by self-hosted models',
              detail: tritonAiMetrics.gateway.selfHostedNote,
              colorClass: 'text-signal-gold-ink',
              decimals: true,
            },
          ].map(({ value, suffix, label, detail, colorClass }, index) => (
            <div key={label} className="border-b border-line p-7 md:border-b-0 md:border-r md:last:border-r-0">
              <p className="font-mono text-xs text-signal-gold-ink">0{index + 1}</p>
              <CountUp
                value={value}
                suffix={suffix}
                format={(n) => n.toFixed(1)}
                className={`mt-5 block text-5xl font-semibold leading-none ${colorClass}`}
              />
              <div className="mt-5 font-semibold text-ink">{label}</div>
              <div className="mt-2 text-sm leading-6 text-body">{detail}</div>
            </div>
          ))}
        </div>

        {/* Governed route figure — the TritonAI gateway graphic, restyled in the site's design language */}
        <figure className="mb-12 border border-line bg-paper p-5 md:p-7" aria-describedby="governed-route-caption">
          <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1.15fr] md:gap-0">
            <div className="flex items-center justify-center border border-line bg-[var(--wash-blue)] p-5 text-center">
              <div>
                <p className="text-sm font-semibold text-ink">Campus need</p>
                <p className="mt-1 text-xs leading-5 text-body">A question, a workflow, a document task</p>
              </div>
            </div>
            <span aria-hidden="true" className="self-center justify-self-center rotate-90 font-mono text-sm text-muted md:rotate-0 md:px-2">&rarr;</span>
            <div className="flex items-center justify-center border border-signal-blue/50 border-l-[5px] border-l-signal-blue bg-[var(--wash-blue)] p-5 text-center">
              <div>
                <p className="font-serif text-xl font-medium text-signal-blue">TritonAI Gateway</p>
                <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-body">identity · routing · policy</p>
              </div>
            </div>
            <span aria-hidden="true" className="self-center justify-self-center rotate-90 font-mono text-sm text-muted md:rotate-0 md:px-2">&rarr;</span>
            <div className="flex flex-col justify-center gap-2.5">
              {[
                { title: 'Approved models', note: 'Chosen for the task — UC-hosted or approved cloud', border: 'border-l-signal-blue', wash: 'bg-[var(--wash-blue)]' },
                { title: 'Approved knowledge', note: 'Grounded at request time, not trained into weights', border: 'border-l-signal-gold', wash: 'bg-[var(--wash-gold)]' },
                { title: 'Approved tools', note: 'Bounded capabilities a person can check', border: 'border-l-signal-green', wash: 'bg-[var(--wash-green)]' },
              ].map(stage => (
                <div key={stage.title} className={`border-l-4 px-4 py-3 ${stage.border} ${stage.wash}`}>
                  <p className="text-sm font-semibold text-ink">{stage.title}</p>
                  <p className="mt-0.5 text-xs leading-5 text-body">{stage.note}</p>
                </div>
              ))}
            </div>
          </div>
          <figcaption id="governed-route-caption" className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-body">Human review — ownership · evidence</span>
            <span className="inline-flex items-center gap-1.5">
              {[
                { label: 'Evaluation', dot: 'bg-signal-coral' },
                { label: 'Accessibility', dot: 'bg-signal-green' },
                { label: 'Monitoring', dot: 'bg-signal-blue' },
              ].map(pill => (
                <span key={pill.label} className="inline-flex items-center gap-1.5 border border-line bg-white px-2.5 py-1 text-xs font-semibold text-ink">
                  <span aria-hidden="true" className={`inline-block h-1.5 w-1.5 rounded-full ${pill.dot}`} />
                  {pill.label}
                </span>
              ))}
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-body md:ml-auto">Controls surround the full service</span>
          </figcaption>
        </figure>

        {/* Build paths */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-ink mb-2">Three ways to build, one key</h3>
          <p className="text-body leading-7 mb-6 max-w-3xl">
            Every path uses the same Gateway key, which reaches approved enterprise cloud models on AWS,
            Microsoft Azure, and Google Cloud Vertex AI, plus open models hosted at the San Diego
            Supercomputer Center. A project can change paths as its audience, data, or support needs change.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                name: 'Work with an agent',
                who: 'Staff, analysts, developers',
                body: 'The TritonAI Harness runs on your computer and works with local files, spreadsheets, code, and Microsoft 365. Supervised mode pauses file changes and write tools for approval while people are learning.',
              },
              {
                name: 'Automate a process',
                who: 'Teams with a known process',
                body: 'Campus-hosted n8n runs a defined series of steps from a schedule, webhook, email, or file event, adds a model step where it helps, and pauses for a person before anything consequential.',
              },
              {
                name: 'Build an app or pipeline',
                who: 'Developers and research labs',
                body: 'Build on the Gateway with the client libraries you already use, start from the Skills Library, and ship on a supported campus hosting path.',
              },
            ].map((path) => (
              <div key={path.name} className="system-node p-6">
                <p className="font-mono text-xs text-signal-gold-ink">{path.who}</p>
                <h4 className="mt-4 text-lg font-semibold text-ink">{path.name}</h4>
                <p className="mt-2 text-sm leading-6 text-body">{path.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-body max-w-4xl">
            <span className="font-semibold text-ink">Clients:</span> the TritonAI Harness is the primary supported client;
            Claude Code and Codex are supported alternatives; Hermes, OpenCode, and other compatible clients can connect
            with the same endpoint and key.
          </p>
        </div>

        {/* Cost model */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-ink mb-2">What a key costs</h3>
          <p className="text-body leading-7 mb-6 max-w-3xl">
            The approval for each key sets its routes, limits, and billing, so cost and usage show up in one place.
          </p>
          <div className="grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Campus work', body: 'UC-hosted models carry no recharge for campus administrative work. Monthly caps apply.' },
              { title: 'Cloud models', body: 'Billed to a departmental chartstring from the first token, with a named budget owner and spend limit.' },
              { title: 'Grant research', body: 'UC-hosted and cloud use are charged to the grant or approved project chartstring.' },
              { title: 'Other campuses', body: 'Other UC campuses connect through an intercampus recharge agreement.' },
            ].map((item, index) => (
              <div key={item.title} className="border-b border-line p-6 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <p className="font-mono text-xs text-signal-gold-ink">0{index + 1}</p>
                <p className="mt-3 font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hosting lanes */}
        <div className="field-note p-8">
          <h3 className="text-2xl font-semibold text-ink mb-2">Add hosting and support as more people rely on it</h3>
          <p className="text-body leading-7 mb-8 max-w-3xl">
            Something useful is not yet a service. A project moves up a rung when its audience grows, when it
            touches more data or integrations, or when failure starts to cost something. The platform team runs
            the Gateway and reviews the path; the department owns the application, its data, accessibility,
            testing, user support, and a named technical owner.
          </p>
          <ol className="space-y-4">
            {[
              { rung: 'Rung 1', name: 'Prototype', hosting: 'Your own workspace: the Harness or a local sandbox', body: 'Testing an idea alone with sample data you are approved to use. You protect the data and check the results.' },
              { rung: 'Rung 2', name: 'Team workflow', hosting: 'Department-owned application or n8n workflow with campus sign-in', body: 'A recurring job for a known group with a business owner, after an initial risk and scope review.' },
              { rung: 'Rung 3', name: 'Campus service', hosting: 'TritonAI or ITS-managed path', body: 'A shared workflow other units depend on. A named team monitors quality, security, accessibility, and uptime.' },
              { rung: 'Rung 4', name: 'Enterprise service', hosting: 'Enterprise platform', body: 'Campus-wide delivery with formal operating ownership, governance, monitoring, and continuity.' },
            ].map((item) => (
              <li key={item.rung} className="flex flex-col gap-2 border-t border-line pt-4 sm:flex-row sm:gap-6">
                <span className="font-mono text-xs text-signal-blue sm:w-20 sm:flex-none sm:pt-1">
                  {item.rung}
                </span>
                <span className="flex-1">
                  <span className="block font-semibold text-ink">{item.name}</span>
                  <span className="mt-1 block font-mono text-[0.68rem] uppercase tracking-[0.1em] text-signal-gold-ink">{item.hosting}</span>
                  <span className="mt-1 block text-sm leading-6 text-body">{item.body}</span>
                </span>
              </li>
            ))}
          </ol>
          <a
            href="https://tritonai.ucsd.edu/developer-apis/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-signal-blue transition-colors hover:text-ink"
          >
            Build with TritonAI: access, hosting, and ownership
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* TritonGPT Demo Videos */}
      <section className="bg-[#eef2ea] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 max-w-4xl">
            <p className="rule-label mb-4">Recorded work</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-ink mb-4">TritonAI in Action</h2>
            <p className="text-xl leading-8 text-body">Examples from the TritonAI portfolio, built on TritonGPT and connected to everyday university work.</p>
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
                title: "Contract Reviewer (In Production)",
                description: "Automated NDA and contract review via monitored inbox + portal. Auto-redlines third-party contracts against UC San Diego and UC Terms & Conditions and Legal Position.",
                src: "https://tritongpt-deck.vercel.app/media/media7.mp4",
                poster: "https://tritongpt-deck.vercel.app/media/image47.png",
              },
            ].map((video) => (
              <div
                key={video.src}
                className="overflow-hidden border border-line bg-paper-strong"
              >
                <div className="p-6 border-b border-line">
                  <h3 className="text-xl font-semibold text-ink">{video.title}</h3>
                  <p className="mt-2 text-sm text-body leading-6">{video.description}</p>
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
      <section className="bg-paper-strong py-20 border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="rule-label mb-4">Measured signals</p>
              <h2 className="text-4xl md:text-5xl font-medium leading-tight text-ink">Early Signals from TritonAI</h2>
            </div>
            <p className="text-lg leading-8 text-body max-w-3xl">
              Counting users is not enough. A service has to make something measurably better without making anything else worse,
              so each one is judged on reach, efficiency, quality, and trust.
            </p>
          </div>
          <div className="grid border-y border-line md:grid-cols-4">
            {[
              { value: 16, decimals: 0, suffix: '', label: 'Campus Websites', detail: 'Running the TritonGPT website widget', colorClass: 'text-signal-blue' },
              { value: 91, decimals: 0, suffix: '%', label: 'Faster Contract Review', detail: '120 minutes to 11 minutes in the reported workflow', colorClass: 'text-signal-coral-ink' },
              { value: 99.86, decimals: 2, suffix: '%', label: 'Transcript Match Accuracy', detail: 'Published validation sample of 3,700+ records', colorClass: 'text-signal-gold-ink' },
              { value: 81, decimals: 0, suffix: '%', label: 'Helped Understanding', detail: 'Instructional AI pilot survey, 68 student responses', colorClass: 'text-signal-green' },
            ].map(({ value, decimals, suffix, label, detail, colorClass }, index) => (
              <div key={label} className="border-b border-line p-7 md:border-b-0 md:border-r md:last:border-r-0">
                <p className="font-mono text-xs text-signal-gold-ink">0{index + 1}</p>
                <CountUp
                  value={value}
                  suffix={suffix}
                  format={(n) => n.toFixed(decimals)}
                  className={`mt-5 block text-5xl font-semibold leading-none ${colorClass}`}
                />
                <div className="mt-5 font-semibold text-ink">{label}</div>
                <div className="mt-2 text-sm leading-6 text-body">{detail}</div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-body">
            Each result covers only the service and measurement period shown. None of them is a campus-wide average.
          </p>
        </div>
      </section>

      {/* Strategic Vision */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="rule-label mb-4">Operating principles</p>
        <h2 className="text-4xl md:text-5xl font-medium leading-tight text-ink mb-5">How TritonAI Is Taking Shape</h2>
        <p className="text-lg leading-8 text-body max-w-4xl mb-10">
          TritonAI is being developed around a few practical principles: governed infrastructure for sensitive work, shared access across projects,
          tools designed around specific campus pain points, model choice without fragmented governance, and an architecture that can evolve from assistants toward supervised agency.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Trust Is Infrastructure',
              description:
                'Sensitive work in HR, finance, legal, student support, and institutional operations needs governed infrastructure. Each service picks an approved UC-hosted or enterprise cloud route based on its data classification, required capability, and controls, and governance covers the whole workflow, not just the model.',
            },
            {
              title: 'Make AI a Shared Utility',
              description:
                'One shared setup, one way in, and one place the costs show up. Teams start faster and can copy what already worked somewhere else, and UC-hosted routes keep everyday campus work free of recharge.',
            },
            {
              title: 'Solve Specific Pain Points',
              description:
                'The strongest use cases have been concrete ones that come back every week: contract review, search, scheduling, accessibility, transcript workflows, and instructional support. Each starts with someone who owns the problem and something worth measuring.',
            },
            {
              title: 'Meet People in the Workflow',
              description:
                'TritonAI shows up in Blink, public websites, Canvas, the campus mobile app, and departmental systems. People use it when it is already where they are working.',
            },
            {
              title: 'Stay Model-Agnostic',
              description:
                'Services are built on one shared gateway with several approved hosting options behind it, plus the evaluation and governance around it. Swapping the model underneath does not mean rebuilding the service, and no single vendor can strand the campus.',
            },
            {
              title: 'Prepare for Agency',
              description:
                'Assistants answer questions. Agents fetch data, call tools, and finish multi-step work under supervision. Reusable skills, APIs, scoped connectors, and monitoring are the pieces being built now to make that shift safe.',
            },
          ].map((principle) => (
            <div key={principle.title} className="field-note p-8">
              <h3 className="text-xl font-semibold text-ink mb-3">{principle.title}</h3>
              <p className="text-body leading-7">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-semibold text-ink mb-2">How an idea becomes a service</h3>
          <p className="text-body leading-7 mb-6 max-w-3xl">
            Operating evidence feeds back into discovery, so an owner can improve, narrow, or retire a service.
          </p>
          <ol className="grid gap-3 md:grid-cols-4">
            {[
              ['01', 'Discover', 'Name the people, workflow, approved data, service owner, review point, and the result that should improve.'],
              ['02', 'Pilot', 'Test the approach in a bounded environment with realistic examples and close human review.'],
              ['03', 'Prove', 'Measure reach, efficiency, quality, and trust, and refine until the evidence supports wider use.'],
              ['04', 'Operate', 'Establish approved hosting, accessibility, monitoring, support, and an escalation path before people depend on it.'],
            ].map(([number, title, body]) => (
              <li key={title} className="system-node p-5">
                <p className="font-mono text-xs text-signal-gold-ink">{number}</p>
                <p className="mt-4 text-lg font-semibold text-ink">{title}</p>
                <p className="mt-2 text-sm leading-6 text-body">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mb-10">
            <p className="rule-label mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-ink mb-5">Supervised Workflows Across Campus</h2>
            <p className="text-lg leading-8 text-body">
              Each service solves a different problem, but they share the same accountability points. The status on each one says whether
              people can use it today or whether the work is still being proven.
            </p>
          </div>

          <ol className="mb-10 flex flex-col gap-2 md:flex-row md:items-stretch" aria-label="Anatomy of a supervised workflow">
            {[
              ['Campus need', 'A bounded problem with a named owner'],
              ['Approved inputs', 'Data and sources cleared for the task'],
              ['AI-supported work', 'Models, rules, skills, or automation'],
              ['Human review', 'A person checks consequential results'],
              ['Outcome and evidence', 'Quality, usefulness, and exceptions'],
            ].map(([title, body], index) => (
              <li key={title} className="flex flex-1 items-center gap-2">
                <span className="flex-1 border-l-4 border-l-signal-blue bg-[var(--wash-blue)] px-4 py-3">
                  <span className="block text-sm font-semibold text-ink">{title}</span>
                  <span className="mt-0.5 block text-xs leading-5 text-body">{body}</span>
                </span>
                {index < 4 && <span aria-hidden="true" className="hidden font-mono text-sm text-muted md:inline">&rarr;</span>}
              </li>
            ))}
          </ol>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Contract Review",
                status: "Production",
                desc: "NDA and contract review for Procurement through a monitored inbox and portal. Compares language against approved UC legal positions and prepares annotated redlines for a qualified reviewer.",
                metric: "91% time savings for NDAs/T&Cs",
                stats: "120 min → 11 min average",
              },
              {
                name: "Transcript Matching",
                status: "Production",
                desc: "Matches incoming transcripts to student records with an OnBase handoff, scores its own confidence, and routes uncertain cases to enrollment staff.",
                metric: "99.86% accuracy in validation",
                stats: "Across 3,700+ records with five errors",
              },
              {
                name: "Class Planner App",
                status: "Production",
                desc: "Undergraduates build conflict-free schedule options from live section data, compare them side by side, and hand the finished plan to TSS for booking.",
              },
              {
                name: "TritonGPT Class Planner",
                status: "Production",
                desc: "Students say which courses they need and when they cannot meet, and the assistant drafts a conflict-free schedule for them to review.",
              },
              {
                name: "Passport Visitor Management",
                status: "Production",
                desc: "Visitors check in for Passport Services at two campus locations while staff manage each site from a shared queue dashboard.",
              },
              {
                name: "AI Use-Case Meeting",
                status: "Production",
                desc: "Biweekly sessions where campus staff bring an AI idea and leave with a scoped use case and a recommendation on whether to proceed.",
              },
              {
                name: "Instructional AI",
                status: "Pilot",
                desc: "Canvas course tutors that answer only from material the instructor approved, inside the limits that instructor sets.",
                metric: "81% said it helped them understand concepts",
                stats: "68 student survey responses, 2025–2026",
              },
              {
                name: "BioBib",
                status: "Pilot",
                desc: "Assembles a faculty BioBib draft from approved activity data, then the faculty member checks every section before it goes anywhere.",
              },
              {
                name: "Dissertation Formatter",
                status: "Pilot",
                desc: "Checks a dissertation against graduate formatting rules, fixes what it safely can, and flags the rest for the student to decide.",
              },
              {
                name: "PDF Remediator",
                status: "Pilot",
                desc: "Finds the document-accessibility problems software can catch reliably and hands a qualified remediator the evidence for the rest.",
              },
              {
                name: "Voice Agent",
                status: "Pilot",
                desc: "Consent-based voice interviews capture how work actually happens and turn it into reviewable process records and automation opportunities.",
              },
              {
                name: "Research Alignment",
                status: "In development",
                desc: "Matches researcher profiles against outside funding and collaboration opportunities and explains why each one surfaced.",
              },
            ].map((workflow) => (
              <div key={workflow.name} className="system-node flex flex-col p-7">
                <span className={`self-start px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] ${statusStyles[workflow.status]}`}>
                  {workflow.status}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-ink mb-3">{workflow.name}</h3>
                <p className="text-sm text-body mb-4 leading-6 flex-1">{workflow.desc}</p>
                {workflow.metric && (
                  <div className="mt-auto">
                    <p className="text-sm font-semibold mb-1 text-signal-blue">{workflow.metric}</p>
                    {workflow.stats && <p className="text-xs text-[#6b746b]">{workflow.stats}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-4xl mb-10">
            <p className="rule-label mb-4">Assistant index</p>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight text-ink mb-5">TritonGPT Assistants, by the Work</h2>
            <p className="text-lg leading-8 text-body">
              These are not generic chatbots. Each is built around a specific kind of campus work where grounded context matters. Opening an
              assistant does not grant access to new data, and the person responsible for the work still reviews the result.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Campus and employee information",
                note: "Find campus services, benefits, and shared data definitions.",
                assistants: [
                  { name: "UC San Diego Assistant", desc: "Answers from 70+ curated department websites, ServiceNow knowledge articles, and campus policies, with live parking and busyness tools." },
                  { name: "UC San Diego Benefit Assistant", desc: "Answers questions about employee benefit packages." },
                  { name: "Data Dictionary Assistant", desc: "Definitions from campus data sources such as the Activity Hubs and Blink." },
                  { name: "Supplier Search Tool", desc: "Finds campus suppliers and explains the purchasing process." },
                ],
              },
              {
                category: "Teaching, learning, and planning",
                note: "Work with course material or compare class schedule options.",
                assistants: [
                  { name: "Socratic Tutor", desc: "Guides students toward answers without handing them over." },
                  { name: "Instructor AI Assistant", desc: "Drafts quizzes, summaries, and study guides from lecture content." },
                  { name: "Class Scheduling Assistant", desc: "Compares course combinations around work, activities, and other commitments." },
                ],
              },
              {
                category: "Research and funding support",
                note: "Gather current information and organize research or grant guidance.",
                assistants: [
                  { name: "Deep Research Assistant", desc: "Synthesis and analysis across many documents and sources." },
                  { name: "Fund Manager Coach", desc: "Guidance on grant compliance, allowable expenses, and spending restrictions." },
                  { name: "Internet Search Assistant", desc: "Conversational answers with current web information." },
                ],
              },
              {
                category: "Drafting and project delivery",
                note: "Turn structured input into a draft, plan, meeting record, or technical starting point.",
                assistants: [
                  { name: "Job Description Helper", desc: "Drafts clear, compliant job descriptions and interview questions. 83% faster drafting: 30 min → 5 min average." },
                  { name: "Expert Notetaker", desc: "Turns transcripts or notes into decisions and action items." },
                  { name: "Project Charter Assistant", desc: "Helps draft professional project charters." },
                  { name: "Triton Developer Assistant", desc: "Coding support and documentation analysis." },
                  { name: "AI Workplace Opportunity Assistant", desc: "Interviews people about daily tasks and suggests AI use cases and prompts." },
                ],
              },
              {
                category: "Review, alignment, and risk",
                note: "Prepare findings that support a policy, security, or performance review.",
                assistants: [
                  { name: "General AI Assistant", desc: "Writing and editing support without campus-specific context." },
                  { name: "Email Phishing Analyzer", desc: "Scores suspicious emails for phishing risk and explains the warning signs." },
                  { name: "Performance Review Evaluator", desc: "Checks whether performance ratings are supported by the written comments." },
                ],
              },
            ].map((group) => (
              <div key={group.category} className="field-note p-7">
                <h3 className="text-xl font-semibold text-ink">{group.category}</h3>
                <p className="mt-2 text-sm leading-6 text-body">{group.note}</p>
                <ul className="mt-5 space-y-3 border-t border-line pt-4">
                  {group.assistants.map((assistant) => (
                    <li key={assistant.name} className="text-sm leading-6">
                      <span className="font-semibold text-ink">{assistant.name}</span>
                      <span className="text-body"> — {assistant.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="bg-[#eef2ea] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="rule-label mb-4">External recognition</p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight text-ink mb-12">Recognition & Awards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href="https://www.cio.com/article/4032770/unpacking-uc-san-diegos-use-of-llms-to-boost-access-to-knowledge.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-line bg-paper-strong p-8 transition-colors hover:bg-white"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center bg-wash-gold text-signal-gold-ink">
                <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-ink mb-2 transition-colors group-hover:text-[#1f5a8a]">CIO 100 Award</h3>
              <p className="text-body">2025 CIO 100 recipient</p>
            </a>
            <a 
              href="https://www.gartner.com/en/about/awards/eye-on-innovation"
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-line bg-paper-strong p-8 transition-colors hover:bg-white"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center bg-wash-blue text-signal-blue">
                <svg aria-hidden="true" className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-ink mb-2 transition-colors group-hover:text-[#1f5a8a]">Gartner Eye on Innovation</h3>
              <p className="text-body">Finalist in the education category</p>
            </a>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="rule-label mb-4">Roadmap</p>
        <h2 className="text-4xl md:text-5xl font-medium leading-tight text-ink mb-5">Where TritonAI Is Going Next</h2>
        <p className="text-lg leading-8 text-body max-w-4xl mb-6">
          The public roadmap runs from the 2023 chatbot launch to the 2026 governed builder path. The current horizon is about getting
          prototypes to supported services, extending the platform to partner institutions, and preparing for supervised agents at campus scale.
        </p>
        <ul className="mb-12 flex flex-wrap gap-x-5 gap-y-2" aria-label="Status key">
          {[
            ['Shipped', 'Publicly available'],
            ['Pilot', 'Bounded testing with oversight'],
            ['In development', 'Active work, no committed launch date'],
            ['Exploring', 'Discovery only'],
          ].map(([status, meaning]) => (
            <li key={status} className="inline-flex items-center gap-2 text-xs text-body">
              <span className={`px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] ${statusStyles[status]}`}>{status}</span>
              {meaning}
            </li>
          ))}
        </ul>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Multi-Institution Expansion",
              status: "In development",
              desc: "The platform is becoming a governed multi-tenant service. BearGPT (UC Berkeley), ANR AI (UC Agriculture and Natural Resources), FredGPT (Fairleigh Dickinson University), and SCOUT (UC Merced, broadly available since September 2026) are live, and each partner inherits the same hosting, model choice, trust, and observability controls.",
            },
            {
              title: "Governed Builder Path",
              status: "In development",
              desc: `The TritonAI Harness now has a public Gateway request, billing, installer, and setup path, with broader adoption staged. ${tritonAiMetrics.harness.tokensBillions}${tritonAiMetrics.harness.tokensSuffix} tokens used, ${tritonAiMetrics.harness.mergedPullRequests} merged PRs, and ${tritonAiMetrics.harness.aiReviews.toLocaleString()} AI reviews ${tritonAiMetrics.harness.timeframeNote}. Personal Harness memory is in the stable release; shared team and project memory is still in design.`,
            },
            {
              title: "Instructional AI Expansion",
              status: "Pilot",
              desc: "Canvas-integrated AI Tutors are live for participating courses, and instructors can sign up for the Fall 2026 cohort. In the 2025–2026 pilot survey, 81% said it helped them understand concepts and 86% found it easy to use. Self-service course activation is in development.",
            },
            {
              title: "Supported Rollout",
              status: "In development",
              desc: "The 15-part Discovery Series is published, the certificate offers staff and leadership streams, and AI use-case office hours share staff-built agent workflows. Readiness measures will track access, use, connected tools, and safeguards as Harness onboarding widens.",
            },
            {
              title: "Academic Advising Agent",
              status: "In development",
              desc: "A scoped prototype for tier-one academic advising questions and triage, still in the build phase.",
            },
            {
              title: "Governed Agency at Campus Scale",
              status: "Exploring",
              desc: "Repeatable, supervised agent workflows that call only approved tools within bounded scope. Before an agent can change a system, each service would define allowed scope, required tests, audit logs, approval points, and who owns rollback.",
            },
          ].map((item) => (
            <div key={item.title} className="system-node p-7">
              <span className={`inline-block px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] ${statusStyles[item.status]}`}>
                {item.status}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink mb-3">{item.title}</h3>
              <p className="text-sm text-body leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
        <a
          href="https://tritonai.ucsd.edu/about/roadmap.html"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-signal-blue transition-colors hover:text-ink"
        >
          See the full public roadmap
          <span aria-hidden="true">→</span>
        </a>
      </section>

      {/* Conclusion */}
      <section className="bg-[#17201b] text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="rule-label mb-4 text-[#d9dfd3]">Program lesson</p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-8">What We&apos;re Learning Through TritonAI</h2>
          <p className="text-2xl text-[#d9dfd3] leading-10 mb-8">
            One lesson so far is that shared infrastructure makes institutional AI easier to support. Models will keep changing. What keeps a service running is approved integrations, clean sources, reusable skills, honest evaluation, and a named owner, plus partnership with the people doing the work.
          </p>
          <div className="border-l-4 border-[#c97712] bg-white/5 px-6 py-4">
            <p className="text-[#eef2ea] italic">TritonAI is one way of learning how shared institutional AI can become practical and trusted.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-paper py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium text-ink mb-6">Want to Compare Notes?</h2>
          <p className="text-xl leading-8 text-body mb-8">
            If you&apos;re building something similar in higher education, I&apos;d be glad to compare notes and hear what your institution is learning.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-[#17201b] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#1f5a8a] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
          >
            Start a Conversation
            <svg aria-hidden="true" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
