import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/seoDates";

const PAGE_URL = `${SITE_URL}/products/cason-scholarship-agent`;

export const metadata: Metadata = {
  title: "Scholarship Agent | Brett Pollak",
  description:
    "A private, family-only scholarship CRM with an autonomous agent behind it — daily discovery, evidence-backed eligibility screening, an application pipeline, and inbox-driven status updates. A walkthrough illustrated with sample data.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Scholarship Agent | Brett Pollak",
    description:
      "A private scholarship CRM with an autonomous agent: daily discovery, evidence-backed eligibility screening, application pipeline, and inbox-driven status updates. Walkthrough illustrated with sample data.",
    url: PAGE_URL,
    siteName: "Brett Pollak",
    type: "article",
    images: [
      {
        url: "/scholarship-agent.png",
        width: 1280,
        height: 800,
        alt: "Scholarship Agent sign-in page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholarship Agent | Brett Pollak",
    description:
      "A private scholarship CRM with an autonomous agent behind it. Walkthrough illustrated with sample data.",
    images: ["/scholarship-agent.png"],
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${PAGE_URL}#app`,
  name: "Scholarship Agent",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: PAGE_URL,
  description:
    "A private, family-only scholarship CRM with an autonomous background agent: daily discovery of new opportunities, evidence-backed eligibility screening, an application pipeline, essay drafting support, and inbox-driven status updates.",
  isAccessibleForFree: false,
  author: { "@id": `${SITE_URL}/#person` },
  publisher: { "@id": `${SITE_URL}/#person` },
  isPartOf: { "@id": `${SITE_URL}/products#webpage` },
};

// Everything below is illustrative sample data — invented sponsors, amounts,
// and dates used to demonstrate the interface. No real scholarship pipeline,
// award, or student information is shown.
const stats = [
  { label: "Sources swept daily", value: "65" },
  { label: "Opportunities tracked", value: "39" },
  { label: "Awaiting a decision", value: "5" },
  { label: "Ruled out automatically", value: "7" },
];

const pipeline = [
  {
    stage: "Discovered",
    tone: "#485248",
    cards: [
      { name: "Harbor Rotary Club", note: "found today · unverified" },
      { name: "Lakeside Grange", note: "found today · unverified" },
    ],
  },
  {
    stage: "Verifying",
    tone: "#1f5a8a",
    cards: [{ name: "Coastal Utility Trust", note: "reading official page" }],
  },
  {
    stage: "Needs a decision",
    tone: "#9b5a06",
    cards: [
      { name: "Valley Community Fund", note: "$2,500 · closes Oct 4" },
      { name: "Northline STEM Award", note: "$5,000 · closes Nov 1" },
    ],
  },
  {
    stage: "In application",
    tone: "#366c5a",
    cards: [{ name: "Summit Merit Award", note: "essay in draft" }],
  },
  {
    stage: "Ruled out",
    tone: "#b8503f",
    cards: [{ name: "Mariner Lodge Grant", note: "members' children only" }],
  },
];

const requirements = [
  {
    label: "Graduating class of 2027",
    verdict: "Met",
    tone: "#366c5a",
    proof: "“open to students graduating in spring 2027”",
  },
  {
    label: "Minimum 3.0 unweighted GPA",
    verdict: "Met",
    tone: "#366c5a",
    proof: "“applicants must have a minimum 3.0 GPA”",
  },
  {
    label: "Resident of the county",
    verdict: "Met",
    tone: "#366c5a",
    proof: "“must reside in the county at time of application”",
  },
  {
    label: "Connection required: lodge membership",
    verdict: "Ask first",
    tone: "#9b5a06",
    proof: "“open to children and grandchildren of members in good standing”",
  },
];

const tasks = [
  { text: "Answer: has anyone in the family been a lodge member?", who: "Student", due: "2 min" },
  { text: "Read and approve the Summit Merit essay draft", who: "Student", due: "15 min" },
  { text: "Decide: pursue or skip Valley Community Fund", who: "Parent", due: "Oct 1" },
];

const signals = [
  { from: "Summit Merit Award", subject: "We received your application", read: "Moved to submitted", tone: "#366c5a" },
  { from: "Northline STEM Award", subject: "Request for transcript", read: "Created a task", tone: "#9b5a06" },
  { from: "Valley Community Fund", subject: "Finalist interview invitation", read: "Flagged as a strong signal", tone: "#1f5a8a" },
];

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden border border-line bg-paper-strong shadow-[0_1px_0_rgba(23,32,27,0.05)]">
      <div className="flex items-center gap-2 border-b border-line bg-[#17201b] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#b8503f]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#c97712]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#366c5a]" aria-hidden="true" />
        <span className="ml-3 text-xs font-semibold tracking-wide text-white/70">{label}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Capability({
  eyebrow,
  title,
  body,
  reverse,
  wide,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  reverse?: boolean;
  wide?: boolean;
  children: React.ReactNode;
}) {
  const heading = (
    <>
      <p className="rule-label mb-4 text-signal-gold-ink">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl leading-tight font-medium text-ink">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-body">{body}</p>
    </>
  );

  if (wide) {
    return (
      <div className="border-t border-line py-12">
        <div className="max-w-2xl">{heading}</div>
        <div className="mt-8">{children}</div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 border-t border-line py-12 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div className={reverse ? "lg:order-2" : undefined}>{heading}</div>
      <div className={reverse ? "lg:order-1" : undefined}>{children}</div>
    </div>
  );
}

export default function CasonScholarshipAgentPage() {
  return (
    <main className="page-shell" id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <section className="page-hero">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <Link href="/products" className="rule-label text-signal-blue hover:text-[#17201b]">
            ← Back to Built Work
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="rule-label mb-5">Product · Private family workspace</p>
              <h1 className="page-title">Scholarship Agent</h1>
              <p className="page-intro mt-6">
                Scholarship searching is mostly unpaid research: finding programs, working out
                whether you actually qualify, and keeping track of what is due when. This is a
                private family workspace with an autonomous agent behind it — it sweeps sources
                daily, reads each program&apos;s own page, screens eligibility against a stored
                student profile, and surfaces only the handful of things that genuinely need a
                human decision.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 border border-line bg-paper-strong px-4 py-2 text-sm font-semibold text-body">
                <span className="h-2 w-2 flex-shrink-0 bg-[#b8503f]" aria-hidden="true" />
                Invite-only — access is limited to approved family accounts.
              </p>
            </div>
            <Frame label="scholarship agent · sign in">
              <Image
                src="/scholarship-agent.png"
                alt="Scholarship Agent sign-in page showing passkey and Google sign-in options"
                width={1520}
                height={1040}
                className="h-auto w-full border border-line"
                sizes="(min-width: 1024px) 34vw, 100vw"
              />
            </Frame>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-6 md:py-10">
        <p className="field-note px-5 py-4 text-sm leading-6 text-body" data-tone="gold">
          <span className="font-semibold text-ink">A note on the screens below.</span>{" "}
          The interface is illustrated with fictional sample data — invented sponsors, amounts, and
          dates — to show how it works without exposing any real scholarship pipeline or student
          information.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-line bg-[#d9dfd3] md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper-strong p-6">
              <div className="text-3xl md:text-4xl font-medium text-ink">{s.value}</div>
              <div className="rule-label mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        <Capability
          eyebrow="Autonomous discovery"
          title="It looks while nobody is looking"
          body="A background worker sweeps a registry of sponsors, foundations, civic clubs, and aggregators every day, then fetches each candidate's own page and snapshots it as evidence. New programs arrive already read rather than as a list of links to work through later."
          wide
        >
          <Frame label="Pipeline">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {pipeline.map((col) => (
                <div key={col.stage} className="min-w-0">
                  <div className="flex items-center gap-2 border-b border-line pb-2">
                    <span className="h-2 w-2 flex-shrink-0" style={{ backgroundColor: col.tone }} aria-hidden="true" />
                    <span className="truncate text-xs font-semibold uppercase tracking-wide text-body">{col.stage}</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {col.cards.map((c) => (
                      <div key={c.name} className="border border-line bg-paper-strong p-2.5">
                        <div className="text-sm font-semibold text-ink">{c.name}</div>
                        <div className="mt-1 text-xs text-body">{c.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Frame>
        </Capability>

        <Capability
          eyebrow="Eligibility screening"
          title="Don't spend a Saturday on something you can't win"
          body="The hardest lesson of a scholarship search is finding the disqualifying sentence at the bottom of the form. The agent extracts each requirement as a structured rule, and keeps it only if it can quote the page text that proves it. Requirements are then shown in plain English as met, blocked, or a question worth answering first."
          wide
        >
          <Frame label="Before you start">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-xs uppercase tracking-wide text-body">
                    <th className="py-2 pr-3 font-semibold">Requirement</th>
                    <th className="py-2 pr-3 font-semibold">Status</th>
                    <th className="py-2 font-semibold">Quoted from the program page</th>
                  </tr>
                </thead>
                <tbody>
                  {requirements.map((r) => (
                    <tr key={r.label} className="border-b border-[#eceee8] last:border-b-0 align-top">
                      <td className="py-3 pr-3 font-semibold text-ink">{r.label}</td>
                      <td className="py-3 pr-3">
                        <span className="inline-flex items-center gap-2 font-semibold" style={{ color: r.tone }}>
                          <span className="h-2 w-2 flex-shrink-0" style={{ backgroundColor: r.tone }} aria-hidden="true" />
                          {r.verdict}
                        </span>
                      </td>
                      <td className="py-3 text-body italic">{r.proof}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Frame>
        </Capability>

        <Capability
          eyebrow="Clear next actions"
          title="A short list, split by who owns it"
          body="Everything the pipeline produces resolves into a small number of concrete actions, each assigned to the student or the parent with an honest time estimate. A two-minute eligibility question and a fifteen-minute essay review are different asks, and the list says so."
        >
          <Frame label="Open actions">
            <ul className="space-y-3">
              {tasks.map((t) => (
                <li key={t.text} className="border border-line bg-paper-strong p-3">
                  <div className="text-sm font-semibold text-ink">{t.text}</div>
                  <div className="mt-1.5 flex items-center gap-3 text-xs text-body">
                    <span className="border border-line px-1.5 py-0.5 font-semibold">{t.who}</span>
                    <span>{t.due}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Frame>
        </Capability>

        <Capability
          eyebrow="Inbox-driven updates"
          title="Status changes arrive on their own"
          body="Scholarship programs communicate by email, so the agent reads the replies and moves the pipeline itself. A confirmation advances the record, a request for documents becomes a task, and an interview invitation is flagged as a genuine signal rather than filed away."
          reverse
        >
          <Frame label="Email signals">
            <ul className="space-y-3">
              {signals.map((s) => (
                <li key={s.from} className="border border-line bg-paper-strong p-3">
                  <div className="text-sm font-semibold text-ink">{s.from}</div>
                  <div className="mt-1 text-xs text-body">&ldquo;{s.subject}&rdquo;</div>
                  <div className="mt-2 inline-flex items-center gap-2 text-xs font-semibold" style={{ color: s.tone }}>
                    <span className="h-2 w-2 flex-shrink-0" style={{ backgroundColor: s.tone }} aria-hidden="true" />
                    {s.read}
                  </div>
                </li>
              ))}
            </ul>
          </Frame>
        </Capability>

        <Capability
          eyebrow="Writing support"
          title="A first draft built from what it already knows"
          body="The student fills in a structured profile once — activities, leadership, work, athletics, academics — and the agent drafts essays and application answers from those facts alone, never invented ones. Drafts are proposals: nothing is submitted, and every one waits for the student to read and approve it."
        >
          <Frame label="Essay draft">
            <div className="space-y-3">
              <div className="border border-line bg-paper-strong p-3">
                <div className="rule-label">Prompt</div>
                <p className="mt-1.5 text-sm text-ink">
                  Describe a time you had to learn something in front of people who were already good at it.
                </p>
              </div>
              <div className="border border-line bg-paper-strong p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="rule-label">Draft · awaiting approval</div>
                  <span className="text-xs font-semibold text-signal-gold-ink">412 / 500 words</span>
                </div>
                <p className="mt-1.5 text-sm leading-6 text-body">
                  Grounded only in profile facts the student entered. Sources for each claim are listed
                  beside the draft so nothing unverifiable reaches an application.
                </p>
              </div>
            </div>
          </Frame>
        </Capability>

        <Capability
          eyebrow="Daily brief"
          title="One email, not a notification stream"
          body="Each morning both accounts get a short brief: what now needs a decision, what moved forward, what was ruled out and why, and a single line for the routine verification work that needed nobody. The agent's own bookkeeping stays out of it."
          wide
        >
          <Frame label="Morning brief">
            <div className="space-y-4 text-sm">
              <div>
                <div className="rule-label">Needs a decision</div>
                <p className="mt-1.5 text-ink">
                  <span className="font-semibold">Valley Community Fund</span>{" "}
                  <span className="text-body">($2,500 · closes Oct 4, 71 days)</span>
                </p>
                <p className="text-body">Open to county residents graduating in 2027, and the GPA minimum is met.</p>
              </div>
              <div className="border-t border-[#eceee8] pt-3">
                <div className="rule-label">Ruled out</div>
                <p className="mt-1.5 text-body">
                  <span className="font-semibold text-ink">Mariner Lodge Grant</span> — restricted to
                  children of members in good standing.
                </p>
              </div>
              <div className="border-t border-[#eceee8] pt-3 text-body">
                The agent also checked and verified 17 other listings. Nothing needed from you there.
              </div>
            </div>
          </Frame>
        </Capability>
      </div>

      <section className="border-t border-line bg-paper">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="rule-label mb-4">Private by design</p>
              <h2 className="text-3xl md:text-4xl leading-tight font-medium text-ink">
                Built for one family, not the public.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-body">
                The workspace sits behind passkey and Google sign-in and is limited to approved family
                accounts, so a student&apos;s academic record, essays, and application history stay
                private. That is why this page is a walkthrough rather than a login link. The agent
                proposes and drafts; it never submits an application on anyone&apos;s behalf, and every
                consequential action it takes is written to a tamper-evident audit log.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href="/products/cason-recruiting-crm"
                  className="inline-flex items-center gap-2 rounded-sm bg-[#17201b] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1f5a8a] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
                >
                  See the recruiting CRM
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/products" className="inline-flex items-center gap-2 font-semibold text-signal-blue">
                  All Built Work
                  <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
