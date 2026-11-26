'use client';

import Image from 'next/image';
import Link from 'next/link';
import CountUp from '@/components/motion/CountUp';
import Reveal from '@/components/motion/Reveal';
import DemoPlayer, { type Demo } from '@/components/tritongpt/DemoPlayer';
import TritonAISystemMap from '@/components/tritongpt/TritonAISystemMap';
import { tritonAiMetrics } from '@/lib/tritonAiMetrics';

/* ------------------------------------------------------------------ */
/* Icons (24px outline paths)                                          */
/* ------------------------------------------------------------------ */

const ICON_PATHS: Record<string, string[]> = {
  platform: ['M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'],
  chat: ['M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 20l1.3-3.9A7.75 7.75 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'],
  academic: ['M12 14l9-5-9-5-9 5 9 5z', 'M12 14l6.16-3.422A12.083 12.083 0 0121 14.5c0 4.418-4.03 8-9 8s-9-3.582-9-8a12.083 12.083 0 012.84-3.922L12 14z'],
  book: ['M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'],
  code: ['M16 18l6-6-6-6M8 6l-6 6 6 6'],
  skills: ['M14.7 6.3a1 1 0 010 1.4L7.4 15l-3.4.4.4-3.4 7.3-7.3a1 1 0 011.4 0l1.6 1.6z', 'M12 3h9v9'],
  bolt: ['M13 10V3L4 14h7v7l9-11h-7z'],
  shield: ['M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'],
  share: ['M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'],
  clipboard: ['M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'],
  grid: ['M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'],
  swap: ['M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'],
  sparkles: ['M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'],
  building: ['M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'],
  search: ['M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'],
  pencil: ['M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'],
  flow: ['M4 6h4v4H4zM16 14h4v4h-4zM8 8h4a2 2 0 012 2v4a2 2 0 002 2'],
};

function Icon({ name, className = 'h-5 w-5' }: { name: keyof typeof ICON_PATHS; className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {ICON_PATHS[name].map((d) => (
        <path key={d} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={d} />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const TONES = {
  blue: { text: 'text-signal-blue', wash: 'bg-wash-blue', bar: 'bg-signal-blue', border: 'border-t-signal-blue', left: 'border-l-signal-blue' },
  gold: { text: 'text-signal-gold-ink', wash: 'bg-wash-gold', bar: 'bg-signal-gold', border: 'border-t-signal-gold', left: 'border-l-signal-gold' },
  green: { text: 'text-signal-green', wash: 'bg-wash-green', bar: 'bg-signal-green', border: 'border-t-signal-green', left: 'border-l-signal-green' },
  coral: { text: 'text-signal-coral-ink', wash: 'bg-wash-coral', bar: 'bg-signal-coral', border: 'border-t-signal-coral', left: 'border-l-signal-coral' },
  ink: { text: 'text-ink', wash: 'bg-[#eef0eb]', bar: 'bg-ink', border: 'border-t-ink', left: 'border-l-ink' },
} as const;
type Tone = keyof typeof TONES;

// Status vocabulary mirrors tritonai.ucsd.edu (use-case portfolio + public roadmap).
const STATUS_STYLES: Record<string, string> = {
  Production: 'bg-wash-green text-signal-green',
  Shipped: 'bg-wash-green text-signal-green',
  Pilot: 'bg-wash-gold text-signal-gold-ink',
  'In development': 'bg-wash-blue text-signal-blue',
  Exploring: 'bg-[#eef0eb] text-ink',
};

function StatusPill({ status, className = '' }: { status: string; className?: string }) {
  return (
    <span className={`inline-block px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.12em] ${STATUS_STYLES[status]} ${className}`}>
      {status}
    </span>
  );
}

const INSTANCES: { name: string; place: string; note: string; tone: Tone; home?: boolean }[] = [
  { name: 'TritonGPT', place: 'UC San Diego', note: 'Home campus', tone: 'blue', home: true },
  { name: 'BearGPT', place: 'UC Berkeley', note: 'Partner deployment', tone: 'gold' },
  { name: 'SCOUT', place: 'UC Merced', note: 'Full campus since Sept 2026', tone: 'green' },
  { name: 'ANR AI', place: 'UC Agriculture and Natural Resources', note: 'Staff service', tone: 'coral' },
  { name: 'FredGPT', place: 'Fairleigh Dickinson University', note: 'Research-oriented instance', tone: 'ink' },
];

const OFFERINGS: { title: string; body: string; href: string; icon: keyof typeof ICON_PATHS; tone: Tone; meta?: string }[] = [
  {
    title: 'TritonGPT Platform',
    body: 'Secure campus AI hosted at SDSC, with assistants built around specific university work.',
    href: 'https://tritonai.ucsd.edu/tritongpt/index.html',
    icon: 'platform',
    tone: 'blue',
  },
  {
    title: 'TritonAI Harness',
    body: "UC San Diego's supported agent workspace for Mac and Windows. It works with local files, code, Microsoft 365, Google Workspace, GitHub, and more, under supervised approval modes.",
    href: 'https://tritonai.ucsd.edu/developer-apis/harness.html',
    icon: 'bolt',
    tone: 'gold',
    meta: `${tritonAiMetrics.harness.tokensBillions}${tritonAiMetrics.harness.tokensSuffix} tokens · ${tritonAiMetrics.harness.mergedPullRequests} merged PRs · ${tritonAiMetrics.harness.aiReviews.toLocaleString()} AI reviews`,
  },
  {
    title: 'Embedded Website Support',
    body: "A no-sign-in assistant grounded in a site's public content, live on 16 campus websites, with live parking and Geisel Library busyness.",
    href: 'https://tritonai.ucsd.edu/tritongpt/chatbot-widget.html',
    icon: 'chat',
    tone: 'green',
  },
  {
    title: 'Instructional AI',
    body: 'A Canvas AI Tutor for each participating course. Instructors choose the material, what stays hidden, and Socratic or directive mode.',
    href: 'https://tritonai.ucsd.edu/tritongpt/instruction.html',
    icon: 'academic',
    tone: 'coral',
  },
  {
    title: 'Developer APIs',
    body: 'One Gateway key to approved cloud and UC-hosted models, from the Harness, Claude Code, Codex, n8n, or your own code.',
    href: 'https://tritonai.ucsd.edu/developer-apis/index.html',
    icon: 'code',
    tone: 'blue',
  },
  {
    title: 'UCSD Skills Library',
    body: 'Reviewed, reusable skills and connectors, so teams adapt tested work instead of rebuilding every integration.',
    href: 'https://tritonai.ucsd.edu/skills/index.html',
    icon: 'skills',
    tone: 'gold',
  },
  {
    title: 'Training and Community',
    body: 'A 15-part Discovery Series, Harness training, a Certificate in AI for Higher Education, and communities of practice.',
    href: 'https://tritonai.ucsd.edu/connect/index.html',
    icon: 'book',
    tone: 'green',
  },
  {
    title: 'Approved AI Tools Guidance',
    body: 'Which AI tools can be used with university data, and for what. ChatGPT Edu is not at UC San Diego yet; guidance will come with its rollout.',
    href: 'https://tritonai.ucsd.edu/tools/index.html',
    icon: 'shield',
    tone: 'coral',
  },
];

const DEMOS: Demo[] = [
  {
    title: 'UC San Diego Assistant',
    tag: 'Campus answers',
    description: 'Answers campus policy and service questions from curated department knowledge.',
    src: 'https://tritongpt-deck.vercel.app/media/media1.mov',
    poster: 'https://tritongpt-deck.vercel.app/media/image36.png',
  },
  {
    title: 'Contract Reviewer',
    tag: 'In production',
    description: 'Reviews NDAs and contracts from a monitored inbox and redlines them against UC terms and legal positions.',
    src: 'https://tritongpt-deck.vercel.app/media/media7.mp4',
    poster: 'https://tritongpt-deck.vercel.app/media/image47.png',
  },
  {
    title: 'Job Description Helper',
    tag: 'HR drafting',
    description: 'Helps HR and hiring managers draft clear, compliant job descriptions in minutes.',
    src: 'https://tritongpt-deck.vercel.app/media/media4.mov',
  },
  {
    title: 'Fund Manager Coach',
    tag: 'Research finance',
    description: 'Guides fund managers on compliance, allowable expenses, and spending restrictions.',
    src: 'https://tritongpt-deck.vercel.app/media/media3.mov',
  },
];

const SHOWCASE: { name: string; status: string; desc: string; image: string; alt: string; width: number; height: number; href?: string }[] = [
  {
    name: 'Passport Visitor Management',
    status: 'Production',
    desc: 'Visitors check in at two campus locations while staff run each site from a shared queue.',
    image: '/project-passports-visitor-management.png',
    alt: 'UC San Diego Passports check-in screen with Central Service Center and Bookstore locations',
    width: 1280,
    height: 900,
    href: '/products/passports-visitor-management',
  },
  {
    name: 'AI Use-Case Meeting',
    status: 'Production',
    desc: 'Biweekly sessions where staff bring an AI idea and leave with a scoped use case.',
    image: '/ai-use-case-meeting.png',
    alt: 'AI Use Case meeting site describing the biweekly forum and upcoming sessions',
    width: 1280,
    height: 800,
  },
  {
    name: 'BioBib',
    status: 'Pilot',
    desc: 'Turns a faculty CV into a BioBib draft. The faculty member checks every section.',
    image: '/biobib-formatter.png',
    alt: 'BioBib Formatter upload page for turning a faculty CV into a BioBib',
    width: 1280,
    height: 800,
  },
  {
    name: 'Dissertation Formatter',
    status: 'Pilot',
    desc: 'Checks 60+ formatting rules, fixes what it safely can, and flags the rest for the student.',
    image: '/dissertation-agent.png',
    alt: 'Dissertation Formatting Agent page with upload, review, and download steps',
    width: 1280,
    height: 800,
  },
  {
    name: 'PDF Remediator',
    status: 'Pilot',
    desc: 'Finds the accessibility problems software can catch and hands a remediator the evidence for the rest.',
    image: '/pdf-remediator.png',
    alt: 'PDF Remediator start page for an accessibility check',
    width: 1280,
    height: 800,
  },
  {
    name: 'Voice Agent',
    status: 'Pilot',
    desc: 'Consent-based voice interviews capture how work really happens and surface automation opportunities.',
    image: '/project-process-discovery-workspace.png',
    alt: 'Interview template editor showing the agent persona, opening line, and interview sections',
    width: 1210,
    height: 810,
    href: '/products/process-discovery',
  },
];

const MORE_WORKFLOWS: { name: string; status: string; desc: string }[] = [
  { name: 'Contract Review', status: 'Production', desc: 'Annotated NDA and contract redlines for Procurement, checked by a qualified reviewer.' },
  { name: 'Transcript Matching', status: 'Production', desc: 'Matches incoming transcripts to student records and routes uncertain cases to staff.' },
  { name: 'Class Planner App', status: 'Production', desc: 'Conflict-free schedule options from live section data, handed off for booking.' },
  { name: 'TritonGPT Class Planner', status: 'Production', desc: 'Students describe their courses and constraints; the assistant drafts a schedule.' },
  { name: 'Instructional AI', status: 'Pilot', desc: 'Canvas tutors that answer only from instructor-approved material.' },
  { name: 'Research Alignment', status: 'In development', desc: 'Matches researcher profiles to funding and explains why each one surfaced.' },
];

const ASSISTANT_GROUPS: { category: string; icon: keyof typeof ICON_PATHS; tone: Tone; assistants: [string, string][] }[] = [
  {
    category: 'Campus and employee info',
    icon: 'building',
    tone: 'blue',
    assistants: [
      ['UC San Diego Assistant', '70+ department sites, ServiceNow articles, and policies, plus live parking and busyness'],
      ['Benefit Assistant', 'Employee benefit questions'],
      ['Data Dictionary Assistant', 'Definitions from Activity Hubs and Blink'],
      ['Supplier Search Tool', 'Campus suppliers and purchasing steps'],
    ],
  },
  {
    category: 'Teaching and planning',
    icon: 'academic',
    tone: 'green',
    assistants: [
      ['Socratic Tutor', 'Guides students without handing over answers'],
      ['Instructor AI Assistant', 'Quizzes, summaries, and study guides from lectures'],
      ['Class Scheduling Assistant', 'Course combinations around other commitments'],
    ],
  },
  {
    category: 'Research and funding',
    icon: 'search',
    tone: 'gold',
    assistants: [
      ['Deep Research Assistant', 'Synthesis across many documents and sources'],
      ['Fund Manager Coach', 'Grant compliance and allowable expenses'],
      ['Internet Search Assistant', 'Answers with current web information'],
    ],
  },
  {
    category: 'Drafting and delivery',
    icon: 'pencil',
    tone: 'coral',
    assistants: [
      ['Job Description Helper', 'Compliant job descriptions; 30 min → 5 min'],
      ['Expert Notetaker', 'Decisions and action items from notes'],
      ['Project Charter Assistant', 'Professional project charters'],
      ['Triton Developer Assistant', 'Coding help and documentation analysis'],
      ['AI Workplace Opportunity Assistant', 'Finds AI use cases in daily tasks'],
    ],
  },
  {
    category: 'Review and risk',
    icon: 'shield',
    tone: 'ink',
    assistants: [
      ['General AI Assistant', 'Writing and editing without campus context'],
      ['Email Phishing Analyzer', 'Scores suspicious emails and explains why'],
      ['Performance Review Evaluator', 'Checks ratings against written comments'],
    ],
  },
];
const ASSISTANT_COUNT = ASSISTANT_GROUPS.reduce((total, group) => total + group.assistants.length, 0);

const PRINCIPLES: { title: string; body: string; icon: keyof typeof ICON_PATHS; tone: Tone }[] = [
  { title: 'Trust is infrastructure', body: 'Each service picks an approved UC-hosted or enterprise cloud route for its data, and governance covers the whole workflow, not just the model.', icon: 'shield', tone: 'blue' },
  { title: 'AI as a shared utility', body: 'One setup, one way in, one place costs show up. Teams start faster and reuse what already worked elsewhere.', icon: 'share', tone: 'gold' },
  { title: 'Solve specific pain points', body: 'The strongest use cases come back every week: contracts, search, scheduling, accessibility, transcripts, teaching.', icon: 'clipboard', tone: 'green' },
  { title: 'Meet people in the workflow', body: 'TritonAI shows up in Blink, public websites, Canvas, the campus mobile app, and departmental systems.', icon: 'grid', tone: 'coral' },
  { title: 'Stay model-agnostic', body: 'Swapping the model underneath does not mean rebuilding the service, and no single vendor can strand the campus.', icon: 'swap', tone: 'blue' },
  { title: 'Prepare for agency', body: 'Skills, APIs, scoped connectors, and monitoring are the pieces being built now so supervised agents can be safe.', icon: 'sparkles', tone: 'gold' },
];

const MILESTONES: { when: string; title: string; body: string }[] = [
  { when: '2023', title: 'Beta', body: '400+ staff in the campus beta, plus AI Essentials training.' },
  { when: 'Q1 2024', title: 'First assistants', body: 'UC San Diego Assistant and Job Description Helper launch.' },
  { when: 'Q2 2024', title: 'Campus-wide', body: 'Open to ~37K employees with campus single sign-on.' },
  { when: 'Q2 2025', title: 'Students', body: '45K students onboarded, with My Documents.' },
  { when: 'Q3 2025', title: 'Blink widget', body: 'An assistant with no login, and model choice.' },
  { when: 'Q4 2025', title: 'AI search', body: 'Blink AI overview and Deep Research.' },
  { when: '2026', title: 'Agents', body: 'Workflows in production and the Harness access path.' },
];

const ROADMAP: { title: string; status: 'Pilot' | 'In development' | 'Exploring'; body: string }[] = [
  { title: 'Instructional AI expansion', status: 'Pilot', body: 'Canvas tutors live for Fall 2026 courses; self-service course activation is in development.' },
  { title: 'Multi-institution expansion', status: 'In development', body: 'Partner instances inherit the same hosting, model choice, trust, and observability controls.' },
  { title: 'Governed builder path', status: 'In development', body: 'Public Harness access and setup, with shared team and project memory still in design.' },
  { title: 'Supported rollout', status: 'In development', body: 'Discovery Series, certificate streams, and office hours as Harness onboarding widens.' },
  { title: 'Academic advising agent', status: 'In development', body: 'A scoped prototype for tier-one advising questions and triage.' },
  { title: 'Governed agency at campus scale', status: 'Exploring', body: 'Before an agent can change a system: allowed scope, tests, audit logs, approval points, and a rollback owner.' },
];

/* ------------------------------------------------------------------ */
/* Small visual pieces                                                 */
/* ------------------------------------------------------------------ */

function Bar({ percent, tone, label, value }: { percent: number; tone: Tone; label: string; value: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="text-body">{label}</span>
        <span className="font-mono font-semibold text-ink">{value}</span>
      </div>
      <div className="mt-1.5 h-3 w-full bg-[#e8ece4]">
        <div className={`grow-bar h-full ${TONES[tone].bar}`} style={{ width: `${Math.max(percent, 1.5)}%` }} />
      </div>
    </div>
  );
}

function SectionIntro({ label, title, children, dark = false }: { label: string; title: string; children?: React.ReactNode; dark?: boolean }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className={`rule-label mb-4 ${dark ? 'text-on-dark' : ''}`}>{label}</p>
      <h2 className={`text-3xl font-medium leading-tight md:text-5xl ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {children && <p className={`mt-4 text-lg leading-8 ${dark ? 'text-on-dark' : 'text-body'}`}>{children}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function TritonGPTContent() {
  const { gateway } = tritonAiMetrics;
  const heroStats = [
    { value: 73000, format: (n: number) => Math.round(n).toLocaleString(), suffix: '+', label: 'Students, faculty, and staff served', tone: 'blue' as Tone },
    { value: gateway.tokensBillions, format: (n: number) => n.toFixed(1), suffix: gateway.tokensSuffix, label: `Tokens through the gateway, ${gateway.tokensPeriodLabel}`, tone: 'gold' as Tone },
    { value: gateway.requestsMillions, format: (n: number) => n.toFixed(1), suffix: gateway.requestsSuffix, label: 'API requests completed', tone: 'green' as Tone },
    { value: gateway.selfHostedPercent, format: (n: number) => n.toFixed(1), suffix: gateway.selfHostedSuffix, label: 'Served by self-hosted models', tone: 'coral' as Tone },
  ];

  return (
    <main className="min-h-screen bg-paper text-ink" id="main-content" tabIndex={-1}>
      {/* ---------------- Hero ---------------- */}
      <section className="paper-grid overflow-hidden border-b border-line">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-16 md:pb-20 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="rule-label mb-6">Program overview · Updated November 2026</p>
              <h1 className="text-5xl font-medium leading-none text-ink md:text-7xl">TritonAI</h1>
              <p className="mt-7 text-2xl leading-9 text-body md:text-3xl md:leading-10">
                AI tools, training, and support for UC San Diego, from everyday chat to supervised campus workflows.
              </p>
              <p className="mt-6 max-w-xl text-base leading-7 text-body">
                TritonAI runs TritonGPT, reviews which AI tools can be used with university data, trains people to use them well,
                and helps teams build their own. Every supported service has a named owner.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2" aria-label="Platform facts">
                {['Default model runs at SDSC', 'Approved up to P3 data', `${ASSISTANT_COUNT} task-built assistants`].map((fact) => (
                  <li key={fact} className="border border-line bg-paper-strong px-3 py-1.5 text-sm font-semibold text-ink">
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative lg:pl-4">
              <div className="overflow-hidden rounded-md border border-line bg-white shadow-[14px_14px_0_rgba(201,119,18,0.22)]">
                <div className="flex items-center gap-1.5 border-b border-line bg-[#eef0eb] px-4 py-2.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-signal-coral/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-signal-gold/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-signal-green/70" />
                  <span className="ml-3 truncate rounded-sm bg-white px-3 py-0.5 font-mono text-[0.68rem] text-muted">TritonGPT · UC San Diego Assistant</span>
                </div>
                <Image
                  src="/tritongpt-uc-san-diego-assistant.png"
                  alt="TritonGPT with the UC San Diego Assistant open and a list of campus assistants in the sidebar"
                  width={1200}
                  height={860}
                  priority
                  sizes="(min-width: 1024px) 680px, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="absolute -bottom-6 left-0 hidden max-w-[15rem] border border-line bg-paper-strong p-4 shadow-lg sm:block lg:-left-6">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-signal-gold-ink">Since release 4.6.6</p>
                <p className="mt-1.5 text-sm font-semibold leading-5 text-ink">The default model is an open model on UC San Diego hardware</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-line bg-paper-strong/80">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col py-7 pr-4 ${index % 2 === 1 ? 'pl-4 border-l border-line lg:pl-6' : ''} ${index === 2 ? 'border-t border-line lg:border-t-0 lg:border-l lg:pl-6' : ''} ${index === 3 ? 'border-t border-line lg:border-t-0' : ''}`}
              >
                <dt className="order-2 mt-2 text-sm leading-5 text-body">{stat.label}</dt>
                <dd className="order-1">
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    format={stat.format}
                    className={`block text-3xl font-semibold leading-none md:text-5xl ${TONES[stat.tone].text}`}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- Reach ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="rule-label mb-4">One platform, five institutions</p>
            <h2 className="text-3xl font-medium leading-tight text-ink md:text-5xl">Built for UC San Diego, now shared.</h2>
            <p className="mt-5 text-lg leading-8 text-body">
              TritonGPT is the shared platform at the center of TritonAI. People sign in with their campus account, pick a
              model, work with their own documents, and open assistants built for campus tasks. Peer institutions now license
              the same platform under their own names.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="New in TritonGPT 4.6.6">
              {['Voice Mode', 'In-chat coding sandbox', 'Adjustable reasoning effort'].map((feature) => (
                <li key={feature} className="inline-flex items-center gap-2 bg-wash-blue px-3 py-1.5 text-sm text-ink">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal-blue" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-muted">
              Approved for information up to Protection Level 3 within an approved service. P4 data is not approved.
            </p>
          </div>

          <Reveal>
            <ol className="grid gap-3 sm:grid-cols-2" aria-label="Institutions running the platform">
              {INSTANCES.map((instance) => (
                <li
                  key={instance.name}
                  className={`lift border border-line border-t-4 bg-paper-strong p-5 ${TONES[instance.tone].border} ${instance.home ? 'sm:col-span-2 sm:flex sm:items-center sm:gap-5' : ''}`}
                >
                  <span
                    aria-hidden="true"
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-serif text-2xl font-medium ${TONES[instance.tone].wash} ${TONES[instance.tone].text}`}
                  >
                    {instance.name.charAt(0)}
                  </span>
                  <span className="mt-3 block sm:mt-0">
                    <span className="block text-lg font-semibold text-ink">{instance.name}</span>
                    <span className="block text-sm text-body">{instance.place}</span>
                    <span className={`mt-1 block font-mono text-[0.66rem] uppercase tracking-[0.12em] ${TONES[instance.tone].text}`}>{instance.note}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Architecture ---------------- */}
      <section className="border-y border-line bg-paper-strong py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionIntro label="How it fits together" title="One governed core, four ways in.">
            Every service draws on the same approved model access, campus data, and shared components.
          </SectionIntro>
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div className="border border-line bg-white/70 p-4 shadow-[8px_8px_0_rgba(31,90,138,0.08)]">
              <TritonAISystemMap />
            </div>
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                ['01', 'Access', 'TritonGPT and embedded assistants for questions and documents.', 'blue'],
                ['02', 'Build', 'Developer APIs, the Harness, and reusable skills.', 'green'],
                ['03', 'Connect', 'Approved sources and scoped connectors, limited to the task.', 'gold'],
                ['04', 'Operate', 'Hosting, observability, review gates, and named owners.', 'coral'],
              ].map(([number, title, body, tone]) => (
                <li key={title} className={`border-l-4 bg-paper px-5 py-4 ${TONES[tone as Tone].left}`}>
                  <p className={`font-mono text-xs ${TONES[tone as Tone].text}`}>{number}</p>
                  <p className="mt-1 font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-body">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------- Offerings ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionIntro label="Program parts" title="What TritonAI includes">
          Most teams start by chatting, then add AI to a system they already run, then automate the parts that repeat.
        </SectionIntro>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OFFERINGS.map((offering) => {
            const tone = TONES[offering.tone];
            return (
              <a
                key={offering.title}
                href={offering.href}
                target="_blank"
                rel="noopener noreferrer"
                className="lift group flex flex-col border border-line bg-paper-strong p-6 transition-colors hover:bg-white"
              >
                <span className={`flex h-11 w-11 items-center justify-center ${tone.wash} ${tone.text}`}>
                  <Icon name={offering.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{offering.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-body">{offering.body}</p>
                {offering.meta && (
                  <p className={`mt-4 font-mono text-[0.66rem] uppercase leading-5 tracking-[0.1em] ${tone.text}`}>{offering.meta}</p>
                )}
                <span className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${tone.text}`}>
                  Learn more
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ---------------- Demos ---------------- */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionIntro label="Recorded work" title="See it working" dark>
            Short recordings from the TritonAI portfolio, built on TritonGPT and connected to everyday university work.
          </SectionIntro>
          <DemoPlayer demos={DEMOS} />
        </div>
      </section>

      {/* ---------------- Results ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionIntro label="Measured signals" title="What changed for the people doing the work">
          Counting users is not enough. Each service is judged on reach, efficiency, quality, and trust.
        </SectionIntro>
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border border-line bg-paper-strong p-6 md:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal-coral-ink">Contract review · Procurement</p>
              <p className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
                <CountUp value={91} suffix="%" /> <span className="text-xl font-medium text-body">faster</span>
              </p>
              <div className="mt-6 space-y-4">
                <Bar label="Before" value="120 min" percent={100} tone="ink" />
                <Bar label="With TritonAI" value="11 min" percent={(11 / 120) * 100} tone="coral" />
              </div>
              <p className="mt-4 text-xs leading-5 text-muted">Average NDA and T&amp;C review in the reported workflow.</p>
            </div>

            <div className="border border-line bg-paper-strong p-6 md:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal-blue">Job descriptions · HR</p>
              <p className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
                <CountUp value={83} suffix="%" /> <span className="text-xl font-medium text-body">faster drafting</span>
              </p>
              <div className="mt-6 space-y-4">
                <Bar label="Before" value="30 min" percent={100} tone="ink" />
                <Bar label="With the Job Description Helper" value="5 min" percent={(5 / 30) * 100} tone="blue" />
              </div>
              <p className="mt-4 text-xs leading-5 text-muted">Average drafting time reported for the assistant.</p>
            </div>

            <div className="border border-line bg-paper-strong p-6 md:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal-gold-ink">Transcript matching · Enrollment</p>
              <p className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
                <CountUp value={99.86} suffix="%" format={(n) => n.toFixed(2)} /> <span className="text-xl font-medium text-body">accurate</span>
              </p>
              <div className="mt-6" aria-hidden="true">
                <div className="flex h-10 w-full overflow-hidden">
                  <div className="grow-bar h-full flex-1 bg-signal-gold" />
                  <div className="h-full w-1 bg-signal-coral" />
                </div>
                <div className="mt-2 flex justify-between font-mono text-[0.66rem] uppercase tracking-[0.1em] text-muted">
                  <span>3,700+ records matched</span>
                  <span className="text-signal-coral-ink">5 errors</span>
                </div>
              </div>
              <p className="mt-4 text-xs leading-5 text-muted">Published validation sample. Uncertain matches go to enrollment staff.</p>
            </div>

            <div className="border border-line bg-paper-strong p-6 md:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal-green">Instructional AI · Canvas pilot</p>
              <p className="mt-3 text-4xl font-semibold text-ink md:text-5xl">
                <CountUp value={81} suffix="%" /> <span className="text-xl font-medium text-body">said it helped</span>
              </p>
              <div className="mt-6 space-y-4">
                <Bar label="Helped me understand concepts" value="81%" percent={81} tone="green" />
                <Bar label="Easy to use" value="86%" percent={86} tone="green" />
              </div>
              <p className="mt-4 text-xs leading-5 text-muted">Pilot survey, 68 student responses, 2025–2026.</p>
            </div>
          </div>
        </Reveal>
        <div className="mt-4 flex flex-col gap-5 border border-line bg-paper-strong p-6 md:flex-row md:items-center md:p-7">
          <div className="md:w-64 md:flex-none">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-signal-blue">Website assistant</p>
            <p className="mt-2 text-4xl font-semibold text-ink"><CountUp value={16} /> <span className="text-xl font-medium text-body">campus sites</span></p>
          </div>
          <ul className="grid flex-1 grid-cols-8 gap-1.5 sm:gap-2" aria-hidden="true">
            {Array.from({ length: 16 }, (_, index) => (
              <li key={index} className="aspect-[4/3] border border-line bg-white p-1">
                <span className="block h-1 w-full bg-signal-blue/60" />
                <span className="mt-1 block h-0.5 w-2/3 bg-line" />
                <span className="ml-auto mt-1.5 block h-2 w-2 rounded-full bg-signal-gold" />
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-sm leading-6 text-body">
          Each result covers only the service and measurement period shown. None of them is a campus-wide average.
        </p>
      </section>

      {/* ---------------- Portfolio ---------------- */}
      <section className="border-y border-line bg-[#eef2ea] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionIntro label="Portfolio" title="Supervised workflows across campus">
            Each service solves a different problem, but they share the same accountability points.
          </SectionIntro>

          <ol className="mb-12 grid gap-2 sm:grid-cols-5" aria-label="Anatomy of a supervised workflow">
            {[
              ['Campus need', 'A bounded problem with an owner'],
              ['Approved inputs', 'Data cleared for the task'],
              ['AI-supported work', 'Models, skills, automation'],
              ['Human review', 'A person checks what matters'],
              ['Evidence', 'Quality and exceptions'],
            ].map(([title, body], index) => (
              <li key={title} className="relative bg-paper-strong px-4 py-4">
                <span className={`flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs font-semibold text-white ${index === 3 ? 'bg-signal-gold' : 'bg-signal-blue'}`}>
                  {index + 1}
                </span>
                <span className="mt-3 block text-sm font-semibold text-ink">{title}</span>
                <span className="mt-0.5 block text-xs leading-5 text-body">{body}</span>
                {index < 4 && (
                  <span aria-hidden="true" className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-signal-blue/50 bg-[#eef2ea] sm:block" />
                )}
              </li>
            ))}
          </ol>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SHOWCASE.map((item) => {
              const card = (
                <>
                  <div className="relative overflow-hidden border-b border-line bg-white">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                      className="aspect-[16/10] h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <StatusPill status={item.status} className="self-start" />
                    <h3 className="mt-3 text-lg font-semibold text-ink">{item.name}</h3>
                    <p className="mt-1.5 flex-1 text-sm leading-6 text-body">{item.desc}</p>
                    {item.href && (
                      <span className="mt-3 text-sm font-semibold text-signal-blue">Read the case study →</span>
                    )}
                  </div>
                </>
              );
              return item.href ? (
                <Link key={item.name} href={item.href} className="lift group flex flex-col overflow-hidden border border-line bg-paper-strong">
                  {card}
                </Link>
              ) : (
                <div key={item.name} className="group flex flex-col overflow-hidden border border-line bg-paper-strong">
                  {card}
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-ink">Also in the portfolio</h3>
            <ul className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {MORE_WORKFLOWS.map((workflow) => (
                <li key={workflow.name} className="bg-paper-strong p-5">
                  <StatusPill status={workflow.status} />
                  <p className="mt-3 font-semibold text-ink">{workflow.name}</p>
                  <p className="mt-1 text-sm leading-6 text-body">{workflow.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Assistants ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionIntro label="Assistant index" title={`${ASSISTANT_COUNT} TritonGPT assistants, by the work`}>
          Each is built around a kind of campus work where grounded context matters. Opening one does not grant access to new
          data, and the person responsible still reviews the result.
        </SectionIntro>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {ASSISTANT_GROUPS.map((group) => {
            const tone = TONES[group.tone];
            return (
              <div key={group.category} className={`border border-line border-t-4 bg-paper-strong p-5 ${tone.border}`}>
                <div className="flex items-center gap-3">
                  <span className={`flex h-9 w-9 items-center justify-center ${tone.wash} ${tone.text}`}>
                    <Icon name={group.icon} />
                  </span>
                  <h3 className="text-base font-semibold leading-5 text-ink">{group.category}</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {group.assistants.map(([name, desc]) => (
                    <li key={name} className="text-sm leading-5">
                      <span className="block font-semibold text-ink">{name}</span>
                      <span className="block text-xs leading-5 text-body">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- Build ---------------- */}
      <section className="border-y border-line bg-paper-strong py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionIntro label="Developer API program" title="From a personal experiment to a campus service.">
            The TritonAI LLM Gateway gives every campus builder one key to approved cloud and UC-hosted models, under UC
            enterprise agreements and approved for data up to P3.
          </SectionIntro>

          {/* Governed route */}
          <figure className="mb-14 border border-line bg-paper p-5 md:p-7" aria-describedby="governed-route-caption">
            <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1.15fr] md:gap-0">
              <div className="flex items-center justify-center border border-line bg-wash-blue p-5 text-center">
                <div>
                  <p className="text-sm font-semibold text-ink">Campus need</p>
                  <p className="mt-1 text-xs leading-5 text-body">A question, a workflow, a document task</p>
                </div>
              </div>
              <span aria-hidden="true" className="self-center justify-self-center rotate-90 font-mono text-sm text-muted md:rotate-0 md:px-2">&rarr;</span>
              <div className="flex items-center justify-center border border-signal-blue/50 border-l-[5px] border-l-signal-blue bg-wash-blue p-5 text-center">
                <div>
                  <p className="font-serif text-xl font-medium text-signal-blue">TritonAI Gateway</p>
                  <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-body">identity · routing · policy</p>
                </div>
              </div>
              <span aria-hidden="true" className="self-center justify-self-center rotate-90 font-mono text-sm text-muted md:rotate-0 md:px-2">&rarr;</span>
              <div className="flex flex-col justify-center gap-2.5">
                {[
                  { title: 'Approved models', note: 'UC-hosted or approved cloud, chosen for the task', tone: 'border-l-signal-blue bg-wash-blue' },
                  { title: 'Approved knowledge', note: 'Grounded at request time, not trained into weights', tone: 'border-l-signal-gold bg-wash-gold' },
                  { title: 'Approved tools', note: 'Bounded capabilities a person can check', tone: 'border-l-signal-green bg-wash-green' },
                ].map((stage) => (
                  <div key={stage.title} className={`border-l-4 px-4 py-3 ${stage.tone}`}>
                    <p className="text-sm font-semibold text-ink">{stage.title}</p>
                    <p className="mt-0.5 text-xs leading-5 text-body">{stage.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <figcaption id="governed-route-caption" className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-body">Human review — ownership · evidence</span>
              <span className="inline-flex flex-wrap items-center gap-1.5">
                {[
                  { label: 'Evaluation', dot: 'bg-signal-coral' },
                  { label: 'Accessibility', dot: 'bg-signal-green' },
                  { label: 'Monitoring', dot: 'bg-signal-blue' },
                ].map((pill) => (
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
          <div className="mb-14">
            <h3 className="text-2xl font-semibold text-ink">Three ways to build, one key</h3>
            <p className="mt-2 max-w-3xl leading-7 text-body">
              Every path reaches approved models on AWS, Microsoft Azure, and Google Cloud Vertex AI, plus open models hosted at
              the San Diego Supercomputer Center.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                { name: 'Work with an agent', who: 'Staff, analysts, developers', icon: 'bolt' as const, tone: 'gold' as Tone, body: 'The TritonAI Harness works with local files, spreadsheets, code, and Microsoft 365. Supervised mode pauses changes for approval while people learn.' },
                { name: 'Automate a process', who: 'Teams with a known process', icon: 'flow' as const, tone: 'green' as Tone, body: 'Campus-hosted n8n runs defined steps from a schedule, webhook, email, or file, and pauses for a person before anything consequential.' },
                { name: 'Build an app or pipeline', who: 'Developers and research labs', icon: 'code' as const, tone: 'blue' as Tone, body: 'Use the client libraries you already know, start from the Skills Library, and ship on a supported campus hosting path.' },
              ].map((path) => (
                <div key={path.name} className="border border-line bg-paper p-6">
                  <span className={`flex h-10 w-10 items-center justify-center ${TONES[path.tone].wash} ${TONES[path.tone].text}`}>
                    <Icon name={path.icon} />
                  </span>
                  <p className="mt-4 font-mono text-xs text-signal-gold-ink">{path.who}</p>
                  <h4 className="mt-1 text-lg font-semibold text-ink">{path.name}</h4>
                  <p className="mt-2 text-sm leading-6 text-body">{path.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-4xl text-sm leading-6 text-body">
              <span className="font-semibold text-ink">Clients:</span> the TritonAI Harness is the primary supported client;
              Claude Code and Codex are supported alternatives; Hermes, OpenCode, and other compatible clients can connect with
              the same endpoint and key.
            </p>
          </div>

          {/* Hosting staircase */}
          <div className="mb-14">
            <h3 className="text-2xl font-semibold text-ink">Add hosting and support as more people rely on it</h3>
            <p className="mt-2 max-w-3xl leading-7 text-body">
              Something useful is not yet a service. A project climbs a rung when its audience grows, it touches more data, or
              failure starts to cost something. The department owns the application; the platform team runs the Gateway.
            </p>
            <Reveal>
              <ol className="mt-8 grid gap-4 md:grid-cols-4 md:items-end">
                {[
                  { name: 'Prototype', hosting: 'Your own workspace', body: 'Testing an idea alone with data you are approved to use.', height: 'md:h-4', tone: 'bg-signal-blue/40' },
                  { name: 'Team workflow', hosting: 'Department app or n8n', body: 'A recurring job for a known group with a business owner.', height: 'md:h-8', tone: 'bg-signal-blue/60' },
                  { name: 'Campus service', hosting: 'TritonAI or ITS-managed', body: 'Other units depend on it; a named team monitors it.', height: 'md:h-12', tone: 'bg-signal-blue/80' },
                  { name: 'Enterprise service', hosting: 'Enterprise platform', body: 'Campus-wide, with formal ownership and continuity.', height: 'md:h-16', tone: 'bg-signal-blue' },
                ].map((rung, index) => (
                  <li key={rung.name} className="flex flex-col">
                    <div className="border border-line bg-paper p-5">
                      <p className="font-mono text-xs text-signal-blue">Rung {index + 1}</p>
                      <p className="mt-1 font-semibold text-ink">{rung.name}</p>
                      <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-signal-gold-ink">{rung.hosting}</p>
                      <p className="mt-2 text-sm leading-6 text-body">{rung.body}</p>
                    </div>
                    <div aria-hidden="true" className={`h-2 w-full ${rung.tone} ${rung.height}`} />
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          {/* Cost model */}
          <div>
            <h3 className="text-2xl font-semibold text-ink">What a key costs</h3>
            <p className="mt-2 max-w-3xl leading-7 text-body">
              The approval for each key sets its routes, limits, and billing, so cost and usage show up in one place.
            </p>
            <div className="mt-6 grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
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
            <a
              href="https://tritonai.ucsd.edu/developer-apis/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-signal-blue transition-colors hover:text-ink"
            >
              Build with TritonAI: access, hosting, and ownership
              <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- Principles ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionIntro label="Operating principles" title="How TritonAI is taking shape" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle) => {
            const tone = TONES[principle.tone];
            return (
              <div key={principle.title} className="border border-line bg-paper-strong p-6">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${tone.wash} ${tone.text}`}>
                  <Icon name={principle.icon} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-body">{principle.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-ink">How an idea becomes a service</h3>
          <ol className="mt-6 grid gap-3 md:grid-cols-4">
            {[
              ['Discover', 'Name the people, workflow, approved data, owner, and the result that should improve.'],
              ['Pilot', 'Test in a bounded environment with realistic examples and close human review.'],
              ['Prove', 'Measure reach, efficiency, quality, and trust until the evidence supports wider use.'],
              ['Operate', 'Approved hosting, accessibility, monitoring, support, and an escalation path.'],
            ].map(([title, body], index) => (
              <li key={title} className="relative border border-line bg-paper-strong p-5">
                <span className="font-mono text-3xl font-semibold text-signal-blue/30">0{index + 1}</span>
                <p className="mt-1 text-lg font-semibold text-ink">{title}</p>
                <p className="mt-2 text-sm leading-6 text-body">{body}</p>
                {index < 3 && (
                  <span aria-hidden="true" className="absolute -right-3 top-8 z-10 hidden font-mono text-lg text-signal-blue md:block">→</span>
                )}
              </li>
            ))}
          </ol>
          <div aria-hidden="true" className="mx-[12%] hidden h-7 rounded-b-2xl border-2 border-t-0 border-dashed border-signal-gold/70 md:block" />
          <p className="mt-3 text-center font-mono text-xs uppercase tracking-[0.12em] text-signal-gold-ink">
            ↺ Operating evidence feeds back into discovery, so an owner can improve, narrow, or retire a service
          </p>
        </div>
      </section>

      {/* ---------------- Roadmap ---------------- */}
      <section className="border-y border-line bg-paper-strong py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionIntro label="Roadmap" title="From a 2023 beta to supervised agents">
            The public roadmap runs from the first chatbot beta to the 2026 governed builder path.
          </SectionIntro>

          <Reveal>
            <ol className="grid md:grid-cols-7" aria-label="Shipped milestones">
              {MILESTONES.map((milestone, index) => {
                const last = index === MILESTONES.length - 1;
                return (
                  <li key={milestone.when} className="relative border-l-2 border-signal-blue/40 pb-7 pl-6 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pr-4 md:pt-6">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full md:-top-[7px] md:left-0 ${last ? 'bg-signal-gold ring-4 ring-wash-gold' : 'bg-signal-blue'}`}
                    />
                    <p className={`font-mono text-xs ${last ? 'text-signal-gold-ink' : 'text-signal-blue'}`}>{milestone.when}</p>
                    <p className="mt-1 font-semibold text-ink">{milestone.title}</p>
                    <p className="mt-1 text-sm leading-6 text-body">{milestone.body}</p>
                  </li>
                );
              })}
            </ol>
          </Reveal>

          <h3 className="mt-16 text-2xl font-semibold text-ink">Now and next</h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {(['Pilot', 'In development', 'Exploring'] as const).map((status) => (
              <div key={status} className="border border-line bg-paper p-5">
                <StatusPill status={status} />
                <ul className="mt-4 space-y-4">
                  {ROADMAP.filter((item) => item.status === status).map((item) => (
                    <li key={item.title} className="border-t border-line pt-4">
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-body">{item.body}</p>
                    </li>
                  ))}
                </ul>
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
            <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>

      {/* ---------------- Recognition ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="rule-label mb-6">External recognition</p>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: 'CIO 100 Award', note: '2025 CIO 100 recipient', href: 'https://www.cio.com/article/4032770/unpacking-uc-san-diegos-use-of-llms-to-boost-access-to-knowledge.html', tone: 'gold' as Tone },
            { title: 'Gartner Eye on Innovation', note: 'Finalist in the education category', href: 'https://www.gartner.com/en/about/awards/eye-on-innovation', tone: 'blue' as Tone },
          ].map((award) => (
            <a
              key={award.title}
              href={award.href}
              target="_blank"
              rel="noopener noreferrer"
              className="lift group flex items-center gap-5 border border-line bg-paper-strong p-6 transition-colors hover:bg-white"
            >
              <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${TONES[award.tone].wash} ${TONES[award.tone].text}`}>
                <svg aria-hidden="true" className="h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <span>
                <span className="block text-xl font-semibold text-ink transition-colors group-hover:text-signal-blue">{award.title}</span>
                <span className="block text-body">{award.note}</span>
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </section>

      {/* ---------------- Closing ---------------- */}
      <section className="bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="rule-label mb-4 text-on-dark">Program lesson</p>
            <h2 className="text-3xl font-medium leading-tight md:text-5xl">What we&apos;re learning through TritonAI</h2>
            <p className="mt-6 text-xl leading-9 text-on-dark">
              Shared infrastructure makes institutional AI easier to support. Models will keep changing. What keeps a service
              running is approved integrations, clean sources, reusable skills, honest evaluation, and a named owner, plus
              partnership with the people doing the work.
            </p>
          </div>
          <div className="border-l-4 border-signal-gold bg-white/5 p-6">
            <p className="text-lg font-semibold">Want to compare notes?</p>
            <p className="mt-2 leading-7 text-on-dark">
              If you&apos;re building something similar in higher education, I&apos;d be glad to hear what your institution is learning.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-sm bg-white px-6 py-3 font-semibold text-ink transition-colors hover:bg-wash-blue"
            >
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
