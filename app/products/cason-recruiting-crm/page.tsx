import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/seoDates";

const PAGE_URL = `${SITE_URL}/products/cason-recruiting-crm`;

export const metadata: Metadata = {
  title: "Cason Recruiting CRM | Brett Pollak",
  description:
    "A private, family-only workspace for running a college athletic recruiting search — outreach pipeline, coach and conversation logs, questionnaire tracking, and next-step tasks. A walkthrough of what the tool does, illustrated with sample data.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Cason Recruiting CRM | Brett Pollak",
    description:
      "A private, family-only recruiting workspace — outreach pipeline, coach and conversation logs, questionnaire tracking, and next-step tasks. Walkthrough illustrated with sample data.",
    url: PAGE_URL,
    siteName: "Brett Pollak",
    type: "article",
    images: [
      {
        url: "/crm-recruiting.png",
        width: 1280,
        height: 800,
        alt: "Cason Recruiting CRM sign-in page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cason Recruiting CRM | Brett Pollak",
    description:
      "A private recruiting workspace — pipeline, contacts, questionnaires, and tasks. Walkthrough illustrated with sample data.",
    images: ["/crm-recruiting.png"],
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${PAGE_URL}#app`,
  name: "Cason Recruiting CRM",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: PAGE_URL,
  description:
    "A private, family-only workspace for managing a college athletic recruiting search: outreach pipeline, coach and conversation logs, questionnaire tracking, and next-step tasks.",
  isAccessibleForFree: false,
  author: { "@id": `${SITE_URL}/#person` },
  publisher: { "@id": `${SITE_URL}/#person` },
  isPartOf: { "@id": `${SITE_URL}/products#webpage` },
};

// All records below are illustrative sample data — fictional schools, coaches,
// and dates used to demonstrate the interface. No real recruiting information
// is shown.
const stats = [
  { label: "Schools tracked", value: "12" },
  { label: "Active conversations", value: "5" },
  { label: "Questionnaires done", value: "4 / 9" },
  { label: "Next deadline", value: "Jul 18" },
];

const pipeline = [
  {
    stage: "Researching",
    tone: "#485248",
    cards: [
      { school: "Coastal State", note: "Div I · sprints" },
      { school: "Harbor College", note: "Div III · jumps" },
    ],
  },
  {
    stage: "Contacted",
    tone: "#1f5a8a",
    cards: [{ school: "Northern Tech", note: "Coach Rivera · 3d ago" }],
  },
  {
    stage: "Replied",
    tone: "#366c5a",
    cards: [{ school: "Valley University", note: "Coach Bennett · 1w ago" }],
  },
  {
    stage: "Visit / camp",
    tone: "#c97712",
    cards: [{ school: "Summit University", note: "ID camp · Jul 26" }],
  },
  {
    stage: "Offer",
    tone: "#b8503f",
    cards: [{ school: "Lakeside State", note: "Verbal · reviewing" }],
  },
];

const contacts = [
  { school: "Northern Tech", coach: "Coach Rivera", role: "Assistant, Sprints", touch: "Sent race film", next: "Follow up Fri" },
  { school: "Valley University", coach: "Coach Bennett", role: "Head Coach", touch: "Replied to intro", next: "Send transcript" },
  { school: "Summit University", coach: "Coach Ellis", role: "Recruiting Coord.", touch: "Invited to ID camp", next: "Confirm dates" },
  { school: "Coastal State", coach: "—", role: "—", touch: "Researching staff", next: "Find coach email" },
];

const questionnaires = [
  { school: "Northern Tech", status: "Submitted", tone: "#366c5a" },
  { school: "Valley University", status: "Submitted", tone: "#366c5a" },
  { school: "Summit University", status: "In progress", tone: "#c97712" },
  { school: "Lakeside State", status: "Not started", tone: "#485248" },
  { school: "Coastal State", status: "Not started", tone: "#485248" },
];

const timeline = [
  { date: "Jul 12", text: "Email to Coach Rivera — intro, personal bests, and film link." },
  { date: "Jul 13", text: "Reply received — asked for summer meet schedule." },
  { date: "Jul 14", text: "Logged reply and sent meet calendar; created follow-up task." },
];

const tasks = [
  { text: "Send updated transcript to Valley University", due: "Jul 18" },
  { text: "Confirm ID camp dates with Summit University", due: "Jul 20" },
  { text: "Email 3 new Div II programs with junior-season PRs", due: "Jul 22" },
];

function Frame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden border border-[#d9dfd3] bg-[#fffef9] shadow-[0_1px_0_rgba(23,32,27,0.05)]">
      <div className="flex items-center gap-2 border-b border-[#d9dfd3] bg-[#17201b] px-4 py-2.5">
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
      <p className="rule-label mb-4 text-[#c97712]">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl leading-tight font-medium text-[#17201b]">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-[#485248]">{body}</p>
    </>
  );

  // Data-dense visuals (wide tables, multi-column boards) get the full page
  // width stacked beneath the copy so nothing is clipped or needs to scroll.
  if (wide) {
    return (
      <div className="border-t border-[#d9dfd3] py-12">
        <div className="max-w-2xl">{heading}</div>
        <div className="mt-8">{children}</div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 border-t border-[#d9dfd3] py-12 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div className={reverse ? "lg:order-2" : undefined}>{heading}</div>
      <div className={reverse ? "lg:order-1" : undefined}>{children}</div>
    </div>
  );
}

export default function CasonRecruitingCrmPage() {
  return (
    <main className="page-shell" id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <section className="page-hero">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <Link href="/products" className="rule-label text-[#1f5a8a] hover:text-[#17201b]">
            ← Back to Built Work
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="rule-label mb-5">Product · Private family workspace</p>
              <h1 className="page-title">Cason Recruiting CRM</h1>
              <p className="page-intro mt-6">
                College recruiting runs on relationships, deadlines, and follow-through across
                dozens of programs at once. This is the private workspace behind Cason&apos;s public
                recruiting profile — where every school, coach, conversation, questionnaire, and
                next step is tracked in one place so nothing slips.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 border border-[#d9dfd3] bg-[#fffef9] px-4 py-2 text-sm font-semibold text-[#485248]">
                <span className="h-2 w-2 flex-shrink-0 bg-[#b8503f]" aria-hidden="true" />
                Invite-only — access is limited to Cason and approved family accounts.
              </p>
            </div>
            <Frame label="crm.casonpollak.com · sign in">
              <Image
                src="/crm-recruiting.png"
                alt="Cason Recruiting CRM sign-in page with the tagline Recruiting, organized and a Class of 2027 panel"
                width={1280}
                height={800}
                className="h-auto w-full border border-[#d9dfd3]"
                sizes="(min-width: 1024px) 34vw, 100vw"
              />
            </Frame>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-6 md:py-10">
        <p className="field-note px-5 py-4 text-sm leading-6 text-[#485248]" data-tone="gold">
          <span className="font-semibold text-[#17201b]">A note on the screens below.</span>{" "}
          The interface is illustrated with fictional sample data — made-up schools, coaches, and
          dates — to show how it works without exposing any real recruiting information.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-[#d9dfd3] bg-[#d9dfd3] md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#fffef9] p-6">
              <div className="text-3xl md:text-4xl font-medium text-[#17201b]">{s.value}</div>
              <div className="rule-label mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        <Capability
          eyebrow="Outreach pipeline"
          title="Every program, one board"
          body="A recruiting search is a pipeline: schools move from research to first contact, to a reply, to a visit or camp, to an offer. A board view shows exactly where each program stands at a glance, so momentum and stalls are both obvious."
          wide
        >
          <Frame label="Pipeline">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {pipeline.map((col) => (
                <div key={col.stage} className="min-w-0">
                  <div className="flex items-center gap-2 border-b border-[#d9dfd3] pb-2">
                    <span className="h-2 w-2 flex-shrink-0" style={{ backgroundColor: col.tone }} aria-hidden="true" />
                    <span className="truncate text-xs font-semibold uppercase tracking-wide text-[#485248]">{col.stage}</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {col.cards.map((c) => (
                      <div key={c.school} className="border border-[#d9dfd3] bg-white p-2.5">
                        <div className="text-sm font-semibold text-[#17201b]">{c.school}</div>
                        <div className="mt-1 text-xs text-[#485248]">{c.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Frame>
        </Capability>

        <Capability
          eyebrow="Coach & contact log"
          title="Who to reach, and what's next"
          body="Each program carries its coaching contacts, the last thing that happened, and the single next action. No more digging through an inbox to remember whether a coach was ever emailed back."
          wide
        >
          <Frame label="Contacts">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#d9dfd3] text-xs uppercase tracking-wide text-[#485248]">
                    <th className="py-2 pr-3 font-semibold">School</th>
                    <th className="py-2 pr-3 font-semibold">Coach</th>
                    <th className="py-2 pr-3 font-semibold">Last touch</th>
                    <th className="py-2 font-semibold">Next step</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((c) => (
                    <tr key={c.school} className="border-b border-[#eceee8] last:border-b-0 align-top">
                      <td className="py-3 pr-3 font-semibold text-[#17201b]">{c.school}</td>
                      <td className="py-3 pr-3 text-[#485248]">
                        <div>{c.coach}</div>
                        <div className="text-xs text-[#8a938a]">{c.role}</div>
                      </td>
                      <td className="py-3 pr-3 text-[#485248]">{c.touch}</td>
                      <td className="py-3 text-[#1f5a8a] font-semibold">{c.next}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Frame>
        </Capability>

        <Capability
          eyebrow="Questionnaires & conversations"
          title="Nothing left half-finished"
          body="Recruiting questionnaires pile up fast, and email threads sprawl. A status tracker keeps every questionnaire from not-started to submitted, and a per-program timeline preserves what was said and when."
        >
          <div className="grid gap-4">
            <Frame label="Recruiting questionnaires">
              <ul className="divide-y divide-[#eceee8]">
                {questionnaires.map((q) => (
                  <li key={q.school} className="flex items-center justify-between py-2.5">
                    <span className="text-sm font-medium text-[#17201b]">{q.school}</span>
                    <span
                      className="inline-flex items-center gap-2 text-xs font-semibold"
                      style={{ color: q.tone }}
                    >
                      <span className="h-2 w-2" style={{ backgroundColor: q.tone }} aria-hidden="true" />
                      {q.status}
                    </span>
                  </li>
                ))}
              </ul>
            </Frame>
            <Frame label="Northern Tech · conversation">
              <ol className="relative space-y-4 border-l border-[#d9dfd3] pl-5">
                {timeline.map((t) => (
                  <li key={t.date} className="relative">
                    <span className="absolute -left-[1.6rem] top-1 h-2.5 w-2.5 rounded-full bg-[#1f5a8a]" aria-hidden="true" />
                    <div className="text-xs font-semibold uppercase tracking-wide text-[#8a938a]">{t.date}</div>
                    <div className="mt-1 text-sm leading-6 text-[#485248]">{t.text}</div>
                  </li>
                ))}
              </ol>
            </Frame>
          </div>
        </Capability>

        <Capability
          eyebrow="Next-step tasks"
          title="The list that keeps recruiting moving"
          body="Everything the board and contacts surface rolls up into a dated to-do list, so the family always knows the three things that actually need to happen this week."
          reverse
        >
          <Frame label="This week">
            <ul className="space-y-3">
              {tasks.map((t) => (
                <li key={t.text} className="flex items-start gap-3 border border-[#d9dfd3] bg-white p-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-[#9fa89d]" aria-hidden="true" />
                  <span className="flex-1 text-sm leading-6 text-[#17201b]">{t.text}</span>
                  <span className="whitespace-nowrap text-xs font-semibold text-[#c97712]">Due {t.due}</span>
                </li>
              ))}
            </ul>
          </Frame>
        </Capability>
      </div>

      <section className="border-t border-[#d9dfd3] bg-[#edf5f7]">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          <div className="grid gap-8 md:grid-cols-[0.6fr_1fr] md:items-center">
            <div>
              <p className="rule-label mb-4">Private by design</p>
              <h2 className="text-3xl md:text-4xl leading-tight font-medium text-[#17201b]">
                Built for one family, not the public.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-[#485248]">
                The workspace sits behind Google sign-in and is limited to Cason and approved family
                accounts — so real coach contacts and conversations stay private. That is why this
                page is a walkthrough rather than a login link. The public-facing companion is
                Cason&apos;s recruiting profile, which is open to coaches.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="https://casonpollak.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-[#17201b] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#1f5a8a] focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2"
                >
                  Visit the public recruiting profile
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <Link href="/products" className="inline-flex items-center gap-2 font-semibold text-[#1f5a8a]">
                  All Built Work
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
