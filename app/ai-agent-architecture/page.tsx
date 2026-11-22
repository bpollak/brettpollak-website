import Link from 'next/link';
import HashDetails from '@/components/HashDetails';
import type { Metadata } from 'next';
import { SITE_URL, pagePublishDates, staticPageDates } from '@/lib/seoDates';
import HeroPipelineDiagram from '@/components/ai-architecture/HeroPipelineDiagram';
import ThreeLayerDiagram from '@/components/ai-architecture/ThreeLayerDiagram';
import DailyRhythmClock from '@/components/ai-architecture/DailyRhythmClock';
import ScalingPyramid from '@/components/ai-architecture/ScalingPyramid';

export const metadata: Metadata = {
  title: 'AI Agent Architecture',
  description:
    'A technical record of a personal AI system using scheduled jobs, open-weight models, a knowledge graph, layered memory, and programming-agent connections.',
  alternates: {
    canonical: 'https://brettcpollak.com/ai-agent-architecture',
  },
  openGraph: {
    title: 'AI Agent Architecture | Brett Pollak',
    description:
      'A technical record of a personal AI system using scheduled jobs, layered memory, retrieval, and model routing.',
    url: 'https://brettcpollak.com/ai-agent-architecture',
    siteName: 'Brett Pollak',
    type: 'article',
    images: [
      {
        url: '/ai-architecture-linkedin.png',
        width: 1200,
        height: 675,
        alt: 'AI agent architecture for personal memory and institutional context',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Architecture | Brett Pollak',
    description:
      'A technical record of a personal AI system using scheduled jobs, layered memory, retrieval, and model routing.',
    images: ['/ai-architecture-linkedin.png'],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${SITE_URL}/ai-agent-architecture#article`,
  headline: "Personal AI Architecture: Memory, Retrieval, and Automation",
  description:
    "A technical record of a personal AI system using scheduled jobs, layered memory, retrieval, and model routing.",
  url: `${SITE_URL}/ai-agent-architecture`,
  image: `${SITE_URL}/ai-architecture-linkedin.png`,
  author: { "@id": `${SITE_URL}/#person` },
  publisher: { "@id": `${SITE_URL}/#person` },
  datePublished: pagePublishDates["/ai-agent-architecture"],
  dateModified: staticPageDates["/ai-agent-architecture"],
  isPartOf: { "@id": `${SITE_URL}/#website` },
};


/** Small-caps date/label line above a timeline entry. Used 26 times below. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-[0.15em] text-signal-blue font-semibold mb-1">
      {children}
    </div>
  );
}

/** Marker pinned to the vertical timeline rule. Used 25 times below. */
function TimelineDot() {
  return (
    <span
      className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-signal-blue border-2 border-white shadow"
      aria-hidden="true"
    />
  );
}

export default function AiAgentArchitecturePage() {
  return (
    <main className="page-shell" id="main-content" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* ======================================================================
          SECTION 1 — HERO
          ====================================================================== */}
      <section className="page-hero">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <p className="rule-label mb-6">Personal AI Architecture</p>
        <h1 className="page-title mb-6">
          Personal AI Architecture: Memory, Retrieval, and Automation
        </h1>
        <p className="page-intro mb-6">
          This page documents a personal AI system that uses work context, scheduled
          processes, and layered retrieval. It also notes which parts might be useful
          in a university setting and which remain untested.
        </p>
        <p className="text-sm text-body mb-10">
          Architecture snapshot: November 22, 2026 &middot; Reading layout updated September 5, 2026.
        </p>

        <nav aria-label="Architecture sections" className="reading-links mb-8">
          <a href="#context">Why context matters</a><a href="#layers">Context layers</a>
          <a href="#daily-rhythm">Daily rhythm</a><a href="#knowledge">Knowledge stores</a>
          <a href="#models">Model routing</a><a href="#outcomes">Outcomes</a>
          <a href="#scaling">Wider use</a><a href="#development-history">Development history</a>
        </nav>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="editorial-panel p-6" data-tone="blue">
          <div className="rule-label mb-2">Automated jobs</div>
          <div className="text-2xl font-semibold text-ink">99 enabled jobs</div>
          </div>
          <div className="editorial-panel p-6" data-tone="green">
          <div className="rule-label mb-2">Durable memory</div>
          <div className="text-2xl font-semibold text-ink">1,041 nodes · 1,639 pages</div>
          </div>
          <div className="editorial-panel p-6" data-tone="gold">
            <div className="rule-label mb-2">Context loading</div>
            <div className="text-2xl font-semibold text-ink">3 memory layers</div>
          </div>
        </div>

        <HeroPipelineDiagram />

        <p className="text-sm text-muted italic max-w-3xl">
          The pipeline in one glance: raw signals flow left to right through accumulation and
          synthesis crons into the durable knowledge layer, where the agent pulls them
          back out at the moment of conversation.
        </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 2 — THE PROBLEM
          ====================================================================== */}
      <section id="context" className="max-w-6xl mx-auto px-6 py-10 border-t border-line">
        <div className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-3">
          The Problem
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
          Why context matters
        </h2>
        <div className="text-body text-[1.06rem] leading-8 space-y-5">
          <p>
            A general chatbot can answer a question such as &ldquo;who should I follow up
            with this week?&rdquo; only in general terms. A system with permission to use meeting
            notes, commitments, and project context can give a more specific answer.
          </p>
          <p>
            The limiting factor in this example is <strong>knowledge</strong>: the system needs
            the relevant context at the time of the question.
          </p>
          <p>
            Email and calendar access can answer &ldquo;what&rsquo;s on my calendar,&rdquo; but
            not &ldquo;what does this meeting mean in the context of this project?&rdquo;
          </p>
          <p>
            The hard problem isn&rsquo;t connecting data sources. It&rsquo;s building a knowledge
            layer on top of them. A system that:
          </p>
          <ul className="space-y-2 pl-5 list-disc marker:text-signal-blue">
            <li>
              <strong>Captures</strong> raw signals consistently (meetings, emails, news, campus trends)
            </li>
            <li>
              <strong>Synthesizes</strong> them into patterns over time (key collaborators,
              decisions, recurring themes)
            </li>
            <li>
              <strong>Retrieves</strong> the right context at the right moment. Mention a
              colleague by name and the AI recalls your meeting history with that person, not
              every meeting you&rsquo;ve ever had
            </li>
          </ul>
          <p>
            In my experience, capture is the easier part. Synthesis and retrieval determine
            whether the accumulated information is useful later.
          </p>
          <p>
            This page documents how I built that knowledge layer for myself: 99 enabled automated
            jobs routed through UC San Diego&rsquo;s TritonAI gateway, entirely on open-weight
            models, with the primary inference path hosted on-prem. A 1,041-node knowledge graph, 1,639 wiki pages, a
            three-layer memory system, and a memory ecosystem that Claude Code, Codex, and
            the Hermes agent all read from and write back to.
            It also provides a starting point for considering whether parts of the
            pattern could be used beyond one person.
          </p>
          <div className="my-8 border border-line border-l-4 border-l-blue-600 bg-paper-strong pl-5 py-4 rounded-r-lg shadow-sm">
            <div className="text-xs uppercase tracking-[0.18em] text-signal-blue font-semibold mb-2">
              Why this matters now
            </div>
            <p className="text-ink leading-7 mb-3">
              Many AI products now combine chat, agent functions, and personal context.
              When that context is stored in a vendor-specific format, changing products
              may also mean losing or rebuilding it.
            </p>
            <p className="text-ink leading-7">
              In this design, knowledge stays in <em>my</em> filesystem in open formats.
              Model routes can change without moving the underlying context into a vendor-specific store.
            </p>
          </div>
          <p className="text-ink font-semibold">
            The design goal is to build a useful knowledge layer without placing the
            underlying institutional context in a vendor-specific system.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 3 — THREE LAYERS
          ====================================================================== */}
      <section id="layers" className="max-w-6xl mx-auto px-6 py-10 border-t border-line">
        <div className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-3">
          The Architecture
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
          Three layers of context loading
        </h2>
        <div className="text-body text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            A personal AI has a practical constraint: context windows are finite, institutional
            knowledge is not. You can&rsquo;t load everything, but loading nothing gives
            you a chatbot with your name bolted on.
          </p>
          <p>The architecture I settled on has three layers:</p>
        </div>

        <ThreeLayerDiagram />

        <div className="text-body text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            <strong className="text-ink">Layer 1: Always Loaded.</strong> A small
            fixed set of files the agent reads on every interaction: identity, user profile,
            curated long-term memory, observed work patterns, today&rsquo;s and yesterday&rsquo;s
            memory. ~50&#8239;KB total, cheap to load, enough for the AI to respond as itself
            with 48-hour awareness. Without it, every conversation starts from zero.
          </p>
          <p>
            <strong className="text-ink">Layer 2: Loaded on Trigger.</strong> When
            the conversation mentions a person, technology, decision, project, or trend, the
            agent proactively reads the matching wiki page. Mention a colleague and it reads{' '}
            <code className="text-[0.9em] bg-wash-green px-1.5 py-0.5 rounded">wiki/people/{'{person-id}'}.md</code>.
            Mention a vendor and it reads{' '}
            <code className="text-[0.9em] bg-wash-green px-1.5 py-0.5 rounded">wiki/tech-stack/{'{tool-id}'}.md</code>.
            Ask &ldquo;why did we go with X?&rdquo; and it scans{' '}
            <code className="text-[0.9em] bg-wash-green px-1.5 py-0.5 rounded">wiki/decisions/</code>.
            In this system, 1,639 wiki pages form a reference library. A relevant page is
            retrieved when a matching person, project, technology, or decision is mentioned.
          </p>
          <p>
            <strong className="text-ink">Layer 3: Loaded on Explicit Request.</strong>{' '}
            Deep-dive content (dated memory files, full transcripts, the raw knowledge
            graph) loaded only when you ask. &ldquo;What happened in Tuesday&rsquo;s
            meeting?&rdquo; pulls the specific file. &ldquo;Show me my full graph&rdquo; loads
            and analyzes the JSON. Rare but critical fallbacks.
          </p>
          <p className="text-ink font-semibold border border-line border-l-4 border-l-blue-600 pl-5 py-2 bg-paper-strong rounded-r-lg shadow-sm">
            In this design, context is treated as a limited budget. The system loads a
            small default set and retrieves additional material when it is relevant.
          </p>
          <p>
            Layer 2 adds triggered retrieval beyond the opening profile and prompt. It is
            how this system uses an accumulating wiki without loading every page at once.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 4 — DAILY RHYTHM
          ====================================================================== */}
      <section id="daily-rhythm" className="max-w-6xl mx-auto px-6 py-10 border-t border-line">
        <div className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-3">
          The Pipeline
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
          The daily rhythm that builds the knowledge layer
        </h2>
        <div className="text-body text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            99 enabled jobs build the knowledge layer on a predictable daily rhythm. A typical
            weekday:
          </p>
        </div>

        <DailyRhythmClock />

        <div className="text-body text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            <strong className="text-ink">Morning accumulation (6&ndash;9 AM).</strong>{' '}
            Data-gathering crons. Calendar briefing pulls today&rsquo;s events. AI news digest
            runs web searches scored against the knowledge graph, so the &ldquo;news&rdquo; is
            actually relevant. Opportunity scan reads the graph and hunts for campus AI projects
            matching my priorities. Student pain signal monitor scrapes Reddit, the UCSD Guardian,
            and the campus status page for recurring issues. Wiki ingest reconciles the graph
            against the wiki and creates stub pages for high-weight entities that don&rsquo;t
            have one yet.
          </p>
          <p>
            <strong className="text-ink">Evening synthesis (5:30&ndash;7:35 PM).</strong>{' '}
            Evening wrap triages emails and drafts replies. Granola meeting debrief extracts
            commitments, sentiment, and undercurrents from today&rsquo;s transcripts. Daily
            reflection synthesizes everything into a narrative debrief. Context promotion moves
            the day&rsquo;s signals into long-term memory — the closest thing to a dreaming
            phase the system has, and it runs at 7:35 PM, not 3 AM.
          </p>
          <p>
            <strong className="text-ink">Weekly synthesis (Sunday 6 PM).</strong> Reads 7
            days of opportunity scans and pain signals, extracts cross-day trends, and promotes
            the strongest patterns to long-term memory. That&rsquo;s how &ldquo;VPN failed
            Monday&rdquo; + &ldquo;VPN failed Wednesday&rdquo; + &ldquo;VPN failed Friday&rdquo;
            becomes &ldquo;VPN is systemically broken this week.&rdquo;
          </p>
          <p className="text-ink font-semibold">
            The rhythm is what turns a pile of raw files into institutional knowledge.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 5 — GRAPH + WIKI
          ====================================================================== */}
      <section id="knowledge" className="max-w-6xl mx-auto px-6 py-10 border-t border-line">
        <div className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-3">
          The Durable Layer
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
          Knowledge graph + wiki: brain stem and cortex
        </h2>
        <div className="text-body text-[1.06rem] leading-8 space-y-5">
          <p>Two durable stores anchor everything:</p>

          <div className="grid md:grid-cols-2 gap-5 my-6">
            <div className="rounded-2xl border border-line bg-paper-strong p-6 shadow-sm">
              <div className="text-xs uppercase tracking-[0.18em] text-signal-blue font-semibold mb-2">
                Knowledge Graph
              </div>
              <div className="text-2xl font-bold text-ink mb-2">1,041 nodes · 1,133 edges</div>
              <p className="text-sm text-body leading-6">
                Nodes: people, technologies, vendors, decisions, projects. Edges: relationships
                (&ldquo;meets_with,&rdquo; &ldquo;often_meets_with,&rdquo; &ldquo;uses&rdquo;).
                Every node has a weight and a meetingCount. Fast, shallow, relational.
                Good at answering &ldquo;who works on X.&rdquo;
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper-strong p-6 shadow-sm">
              <div className="text-xs uppercase tracking-[0.18em] text-signal-gold-ink font-semibold mb-2">
                Wiki
              </div>
              <div className="text-2xl font-bold text-ink mb-2">1,639 narrative pages</div>
              <p className="text-sm text-body leading-6">
                Markdown pages mirroring the highest-weight entities: people, tech-stack,
                decisions, projects, concepts. Slow, rich, narrative. Good at answering
                &ldquo;why did we choose X.&rdquo;
              </p>
            </div>
          </div>

          <p>
            <strong className="text-ink">Reconciliation:</strong> when a graph node crosses
            a weight threshold, a wiki page is auto-created as a stub and enriched over time by
            meetings and manual edits. The wiki-ingest cron runs at 9 AM daily, creating up to 8
            new people pages and 8 new tech-stack pages per run, so even entities that
            never cross the &ldquo;2+ meetings in one day&rdquo; threshold eventually get
            promoted as meeting history accumulates.
          </p>
          <p>
            <strong className="text-ink">Dedup:</strong> the graph pulls from multiple
            sources (transcripts, calendar, manual edits), so duplicates creep in. The
            same person under &ldquo;First Last&rdquo; and &ldquo;Last, First,&rdquo; or a vendor
            under slight spelling variations. A periodic dedup pass merges them at the graph
            level.
          </p>
          <p>
            The wiki is also fed from outside the personal stream. A nightly sync mirrors 2,100+
            pages from nine institutional Confluence spaces: runbooks, team docs, service
            desk procedures, build &amp; release, AI governance. A second nightly sync pulls
            messages from scoped Microsoft Teams channels, so the agent sees the live
            conversations where decisions actually get made. &ldquo;Your work world&rdquo; is no
            longer just what you touch directly; it&rsquo;s what your org has written down and
            what your team is talking about right now.
          </p>
          <p className="text-ink font-semibold border border-line border-l-4 border-l-amber-500 pl-5 py-2 bg-paper-strong rounded-r-lg shadow-sm">
            The graph is the brain stem: fast, shallow, relational. The wiki is the cortex:
            slow, rich, narrative. Together they&rsquo;re a cheap institutional memory
            system.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 5.5 — MODEL ALLOCATION
          ====================================================================== */}
      <section id="models" className="max-w-6xl mx-auto px-6 py-10 border-t border-line">
        <div className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-3">
          The Inference Layer
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
          Model allocation: matching jobs to capabilities
        </h2>
        <div className="text-body text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            The inference layer is now deliberately simple: one capable default for reasoning,
            tools, and long-horizon synthesis, plus a faster model for the small set of lightweight
            recurring jobs that benefit from it. The one capability the primary lacks — vision —
            is offloaded to a vision-capable model behind the same institutional gateway, which
            returns a text description into the conversation.
          </p>
          <p>
            As of November 22, 2026, <strong>all 99 enabled jobs run through{' '}
            <a
              href="https://tritonai.ucsd.edu/"
              className="font-semibold text-signal-blue underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-signal-blue"
            >
              TritonAI
            </a></strong>, UC San Diego&rsquo;s institutional AI gateway. The fleet runs on a
            two-tier design: 64 inference jobs on open-weight models hosted on-prem — 61 on
            GLM 5.3 for reasoning, tools, and long-horizon synthesis, and 3 on the faster
            GLM 5.3 Flash for lightweight recurring scans. The other 35 jobs are
            deterministic scripts that never call a model at all. Four of the 64
            inference jobs pair with monitor
            mode: a deterministic script checks the source first, and the model call is
            skipped entirely when nothing changed. When the hub retired the Gemma 4 31B
            model in late October, the key-access monitor caught it and the affected jobs were
            repinned to GLM 5.3 the same day, before any scheduled run failed. The
            fallback chain (GLM 5.3 Flash, DeepSeek V4 Flash) is
            rebuilt from verified completions, since the gateway&rsquo;s model listing
            advertises models that reject real requests — and a key-access monitor checks
            the gateway&rsquo;s catalog twice a week and flags any scheduled route that stops
            being accessible before a job fires against it.
          </p>
        </div>

        <div className="overflow-x-auto my-8 rounded-2xl border border-line bg-white/90 shadow-sm">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-paper border-b border-line">
                <th className="px-4 py-3 text-left font-semibold text-ink">Tier</th>
                <th className="px-4 py-3 text-left font-semibold text-ink">Model</th>
                <th className="px-4 py-3 text-left font-semibold text-ink">Hosting</th>
                <th className="px-4 py-3 text-left font-semibold text-ink">Use</th>
                <th className="px-4 py-3 text-right font-semibold text-ink">Scheduled jobs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr>
                <td className="px-4 py-3 font-semibold text-ink">Primary reasoning &amp; agentic work</td>
                <td className="px-4 py-3 font-mono text-xs text-body">api-glm-5.3</td>
                <td className="px-4 py-3 text-body">TritonAI on-prem · Z.ai GLM 5.3 (open weight)</td>
                <td className="px-4 py-3 text-body">Main chat, tools, interactive sessions, and nearly all scheduled agent work</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">Interactive + 61</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-ink">Lightweight scheduled work</td>
                <td className="px-4 py-3 font-mono text-xs text-body">api-glm-5.3-flash</td>
                <td className="px-4 py-3 text-body">TritonAI on-prem · Z.ai GLM 5.3 Flash (open weight)</td>
                <td className="px-4 py-3 text-body">Fast scan-and-check jobs where reasoning overhead is wasted: feed watches, date reminders, marketing scans</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">3</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-ink">No inference needed</td>
                <td className="px-4 py-3 font-mono text-xs text-body">—</td>
                <td className="px-4 py-3 text-body">Local scripts (deterministic)</td>
                <td className="px-4 py-3 text-body">Syncs, refreshes, health checks, and other jobs that run without a model call</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">35</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-ink" rowSpan={2}>Fallback chain</td>
                <td className="px-4 py-3 font-mono text-xs text-body">api-glm-5.3-flash</td>
                <td className="px-4 py-3 text-body">TritonAI on-prem · Z.ai GLM 5.3 Flash (open weight)</td>
                <td className="px-4 py-3 text-body" rowSpan={2}>Automatic if the primary is unreachable &mdash; tried in order, each verified by live completion probe</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">—</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-body">api-deepseek-v4-flash</td>
                <td className="px-4 py-3 text-body">TritonAI on-prem · DeepSeek V4 Flash (open weight)</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">—</td>
              </tr>
            </tbody>
          </table>
          <div className="px-4 py-3 text-xs text-muted border-t border-line">
            Counts current as of November 22, 2026. Every fallback rung is verified with a
            real completion call — the gateway&rsquo;s model listing is not trusted, after it
            was found advertising models that reject actual requests.
          </div>
        </div>

        <div className="text-body text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            <strong className="text-ink">Why GLM 5.3 is the default:</strong>{' '}
            its tool use, reasoning controls, and long-horizon behavior let one model cover work
            that previously needed several capability tiers. The current TritonAI virtual key
            advertises a 320K context window, and the local configuration clamps it to 128K rather
            than assuming the model&rsquo;s theoretical maximum.{' '}
            <a
              href="https://z.ai/blog/glm-5.3"
              className="font-semibold text-signal-blue underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-signal-blue"
            >
              Z.ai describes GLM 5.3
            </a>{' '}
            as an open model designed for long-horizon agentic work.
          </p>
          <p>
            <strong className="text-ink">Why one primary model:</strong> when the fleet was
            spread across six models, a hub-side model swap or a key change could break a
            quarter of the schedule at once, and the multi-tier layout silently rotted —
            jobs drifted onto models they were never assigned to. Consolidating on one
            well-matched open-weight default removes that failure surface: one model to
            pin, one swap to run, one monitoring lane. The Gemma 4 31B second tier was
            retired when the hub pulled the model in late October — its two jobs moved to
            the primary without missing a run — and two
            fallback models stand ready behind the primary.
          </p>
          <p>
            <strong className="text-ink">Strict fallback is a privacy boundary:</strong>{' '}
            every fallback rung — GLM 5.3 Flash, DeepSeek V4 Flash — is an
            open-weight model served by the same on-prem gateway. If the primary and all
            fallbacks fail, Hermes surfaces the failure instead of silently sending private
            context to a cloud provider. No fallback path ever leaves the institution.
          </p>
          <p>
            <strong className="text-ink">How routing stays healthy:</strong> every
            scheduled job is pinned to an explicit provider and model, so a hub-side model swap
            can&rsquo;t silently re-route the fleet — an unpinned job refuses to run rather than
            spend against a model it was never assigned to. A dedicated{' '}
            <code className="text-[0.9em] bg-wash-green px-1.5 py-0.5 rounded">tritonai-key-access-monitor</code>{' '}
            job probes TritonAI&rsquo;s{' '}
            <code className="text-[0.9em] bg-wash-green px-1.5 py-0.5 rounded">/v1/models</code>{' '}
            catalog and catches identifier or access changes before a job fires against them.
          </p>
          <p className="text-ink font-semibold border border-line border-l-4 border-l-blue-600 pl-5 py-2 bg-paper-strong rounded-r-lg shadow-sm">
            Open-weight models, an institutional gateway, explicit fallback rules, and
            catalog monitoring keep the automation separate from any single model provider.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 6 — OUTCOMES & VALUE
          ====================================================================== */}
      <section id="outcomes" className="max-w-6xl mx-auto px-6 py-10 border-t border-line">
        <div className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-3">
          Current uses
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
          What the system does
        </h2>
        <div className="text-body text-[1.06rem] leading-8 space-y-5 max-w-3xl mb-10">
          <p>
            Building this was the hard part. Using it is where it pays off. What the system
            delivers today, the value it generates, and what else becomes possible once the
            foundation is in place.
          </p>
        </div>

        {/* --- What it does today --- */}
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-[0.18em] text-signal-blue font-semibold mb-5 pb-2 border-b border-line">
            What it does today
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-line bg-white/90 shadow-sm p-6">
              <div className="text-ink font-bold text-lg mb-2">Daily briefings, delivered automatically</div>
              <p className="text-sm text-body leading-6">
                Calendar + email summary at 6:25 AM. AI news digest filtered through my
                priorities at 6:35. Opportunity scan of higher-ed AI projects at 7:00. Campus
                pain signals from forums and status pages at 7:30. All waiting before I open a
                laptop.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white/90 shadow-sm p-6">
              <div className="text-ink font-bold text-lg mb-2">Meeting intelligence after every meeting</div>
              <p className="text-sm text-body leading-6">
                Transcripts processed for commitments (who promised what), sentiment (how people
                felt), participation patterns (who dominated, who stayed quiet), and
                undercurrents (what was implied but not said). Searchable across a 14-month
                corpus.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white/90 shadow-sm p-6">
              <div className="text-ink font-bold text-lg mb-2">Weekly trend synthesis</div>
              <p className="text-sm text-body leading-6">
                A Sunday cron reads 7 days of signals and extracts patterns: which opportunities
                recurred, which pain points became systemic, which themes faded. The strongest
                get promoted to long-term memory.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white/90 shadow-sm p-6">
              <div className="text-ink font-bold text-lg mb-2">Real-time conversational context</div>
              <p className="text-sm text-body leading-6">
                When I message the agent on Telegram, it loads long-term memory, work patterns,
                the last 48 hours, and pulls in wiki pages for any person, technology, or
                decision I mention. Feels like it just knows.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white/90 shadow-sm p-6">
              <div className="text-ink font-bold text-lg mb-2">Auto-published public artifacts</div>
              <p className="text-sm text-body leading-6">
                The weekly UCSD AI newsletter auto-generates and publishes to{' '}
                <Link href="/ucsd-ai-news" className="font-semibold text-signal-blue underline decoration-2 underline-offset-4 decoration-blue-600">/ucsd-ai-news</Link>.
                The personal AI digest auto-publishes daily to{' '}
                <Link href="/ai-digest" className="font-semibold text-signal-blue underline decoration-2 underline-offset-4 decoration-blue-600">/ai-digest</Link>.
                The knowledge framework documents itself. You&rsquo;re reading that output right now.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-white/90 shadow-sm p-6">
              <div className="text-ink font-bold text-lg mb-2">Cross-session continuity</div>
              <p className="text-sm text-body leading-6">
                Decisions made in conversation write back to the wiki. Observed patterns write
                to a patterns file. The framework is bidirectional. Read for context,
                write for continuity. Future sessions inherit what present sessions learn.
              </p>
            </div>
          </div>
        </div>

        {/* --- The value delivered --- */}
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-[0.18em] text-signal-green font-semibold mb-5 pb-2 border-b border-line">
            The value delivered
          </h3>
          <ul className="space-y-5 max-w-3xl">
            <li className="flex gap-4 items-start">
              <span className="flex-none mt-1 w-8 h-8 rounded-full bg-wash-green border border-line text-signal-green font-bold flex items-center justify-center text-sm">
                1
              </span>
              <div>
                <div className="text-ink font-semibold mb-1">Time saved: 2&ndash;3 hours per week</div>
                <p className="text-sm text-body leading-6">
                  Research, meeting prep, email triage, news scanning, and follow-up tracking
                  used to eat several hours a week. The crons do the gathering; I do the
                  judgment. That time gets reclaimed for actual decisions.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none mt-1 w-8 h-8 rounded-full bg-wash-green border border-line text-signal-green font-bold flex items-center justify-center text-sm">
                2
              </span>
              <div>
                <div className="text-ink font-semibold mb-1">Pattern recognition I&rsquo;d otherwise miss</div>
                <p className="text-sm text-body leading-6">
                  Daily reports don&rsquo;t tell you the VPN failed 5 of 7 days last week. The
                  weekly synthesis does. The graph shows who I actually meet with most,
                  not who I think I meet with most. Data surfaces patterns intuition can&rsquo;t.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none mt-1 w-8 h-8 rounded-full bg-wash-green border border-line text-signal-green font-bold flex items-center justify-center text-sm">
                3
              </span>
              <div>
                <div className="text-ink font-semibold mb-1">Institutional memory, not just personal memory</div>
                <p className="text-sm text-body leading-6">
                  Decisions, architectural choices, vendor evaluations, and their reasoning are
                  preserved. &ldquo;Why did we pick this over that?&rdquo; has an answer. So
                  does &ldquo;when did we last discuss X?&rdquo; Memory persists across
                  sessions, weeks, and staff changes.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none mt-1 w-8 h-8 rounded-full bg-wash-green border border-line text-signal-green font-bold flex items-center justify-center text-sm">
                4
              </span>
              <div>
                <div className="text-ink font-semibold mb-1">Never starting from zero</div>
                <p className="text-sm text-body leading-6">
                  Every conversation begins with 48 hours of recent context, curated long-term
                  memory, and triggered wiki lookups. I don&rsquo;t re-explain my world each
                  time I ask a question, and the agent doesn&rsquo;t need reminding who the key
                  people and projects are.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none mt-1 w-8 h-8 rounded-full bg-wash-green border border-line text-signal-green font-bold flex items-center justify-center text-sm">
                5
              </span>
              <div>
                <div className="text-ink font-semibold mb-1">Opportunities surfaced proactively</div>
                <p className="text-sm text-body leading-6">
                  The opportunity scanner and AI news digest find campus projects, industry
                  developments, and trends matching my priorities. 60 seconds to review each
                  morning. Without this pipeline, I&rsquo;d miss them or spend an hour hunting.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* --- What else becomes possible --- */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-signal-gold-ink font-semibold mb-5 pb-2 border-b border-line">
            What else becomes possible
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-line bg-paper-strong p-6 shadow-sm">
              <div className="text-ink font-bold text-lg mb-2">Meeting prep automation</div>
              <p className="text-sm text-body leading-6">
                Before every meeting, auto-compile attendee wiki pages, recent interactions,
                open commitments, relevant decisions, and a one-page prep doc. No more walking
                in cold.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper-strong p-6 shadow-sm">
              <div className="text-ink font-bold text-lg mb-2">Proactive nudges</div>
              <p className="text-sm text-body leading-6">
                The agent notices patterns without being asked. &ldquo;This problem has come up
                three weeks in a row. Here are the options you&rsquo;ve already explored.&rdquo;
                &ldquo;This person has asked about the same thing five times. Worth a
                1:1?&rdquo;
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper-strong p-6 shadow-sm">
              <div className="text-ink font-bold text-lg mb-2">Draft-first communications</div>
              <p className="text-sm text-body leading-6">
                Emails, memos, and responses drafted in my voice using my actual context. Not
                generic AI writing. Contextual writing grounded in what I&rsquo;ve said
                and decided before. Review beats drafting from scratch.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper-strong p-6 shadow-sm">
              <div className="text-ink font-bold text-lg mb-2">Decision archaeology</div>
              <p className="text-sm text-body leading-6">
                &ldquo;Why did we pick this architecture two years ago?&rdquo; Immediate
                answer with the full reasoning, the voices that disagreed, and the tradeoffs
                considered. No more Slack/email archaeology.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper-strong p-6 shadow-sm">
              <div className="text-ink font-bold text-lg mb-2">Self-monitoring system health</div>
              <p className="text-sm text-body leading-6">
                The agent notices when data sources go stale, crons degrade, or the knowledge
                layer has gaps. Self-monitoring becomes self-repairing. The system
                maintains itself instead of waiting for a human to notice.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper-strong p-6 shadow-sm">
              <div className="text-ink font-bold text-lg mb-2">Domain-aware research</div>
              <p className="text-sm text-body leading-6">
                Instead of &ldquo;search the web,&rdquo; the agent does &ldquo;search filtered
                through what I care about, scored against my graph, synthesized with what I
                already know.&rdquo; Research becomes targeted, not exhaustive.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-paper-strong p-6 shadow-sm">
              <div className="text-ink font-bold text-lg mb-2">Programming agents with institutional memory</div>
              <p className="text-sm text-body leading-6">
                The memory ecosystem is shared, not exclusive. Claude Code and Codex on both
                of my Macs read the same wiki, knowledge graph, and memory the Hermes agent
                maintains — hooks inject that context at session start, and an MCP server
                lets them query it mid-session. Every coding session writes a recap back,
                and a nightly job folds those recaps into the wiki and decision log. Three
                agents, one memory. The knowledge layer isn&rsquo;t locked to one agent
                anymore.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ======================================================================
          SECTION 7 — SCALING VISION
          ====================================================================== */}
      <section id="scaling" className="max-w-6xl mx-auto px-6 py-10 border-t border-line">
        <div className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-3">
          The Vision
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
          Scaling to UC San Diego
        </h2>
        <div className="text-body text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            Everything above is one person&rsquo;s implementation. The interesting question:
            what if every UC San Diego staff member had one?
          </p>
          <div className="my-6 border border-line border-l-4 border-l-blue-700 bg-paper-strong pl-5 py-4 rounded-r-lg shadow-sm">
            <div className="text-xs uppercase tracking-[0.18em] text-signal-blue font-semibold mb-2">
              Privacy is the precondition
            </div>
            <p className="text-ink leading-7">
              This only scales if privacy scales with it. Personal data never leaves the personal
              agent. Each tier above is opt-in, anonymized, or aggregate-only, never
              individual records flowing upward. Without that guarantee at every level, nothing
              ships.
            </p>
          </div>
        </div>

        <ScalingPyramid />

        <div className="text-body text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            <strong className="text-ink">Personal: the foundation.</strong> Every
            staff member gets their own agent, memory, wiki, and crons. Data never leaves their
            agent. I use this setup daily, but it has only been tested for one person.
            Extending it would require a repeatable deployment pattern: dedicated runtime,
            isolated data store, and a governance model that says
            &ldquo;this is yours, private by default.&rdquo;
          </p>
          <p>
            <strong className="text-ink">Team: opt-in sharing, not opt-out.</strong>{' '}
            Team members choose what to share. The team wiki is visible to all members; 1:1s and
            personal notes stay private. Nothing crosses the boundary automatically. This is
            where governance gets interesting: who decides what&rsquo;s shared, how do you
            handle a team member leaving, and how do you prevent context from leaking between
            people.
          </p>

          <div className="my-6 border-l-4 border-signal-green bg-wash-green/60 pl-5 py-4 rounded-r-lg">
            <div className="text-xs uppercase tracking-[0.18em] text-signal-green font-semibold mb-2">
              Pilot in progress: TritonAI Team Knowledge Vault
            </div>
            <p className="text-ink leading-7 mb-3">
              A team pilot began May&nbsp;18,
              2026: a 3-person shared Obsidian vault for the TritonAI core team (Brett
              Pollak, Shawn Munro, and Jeremy Wiles), sitting in a private GitHub repo
              and auto-syncing every 10 minutes via the Obsidian Git plugin. The vault has six
              shared sections: <code className="text-[0.9em] bg-wash-green/60 px-1.5 py-0.5 rounded">people/</code>{' '}
              (professional profiles, no 1:1 notes),{' '}
              <code className="text-[0.9em] bg-wash-green/60 px-1.5 py-0.5 rounded">projects/</code>{' '}
              (live status),{' '}
              <code className="text-[0.9em] bg-wash-green/60 px-1.5 py-0.5 rounded">decisions/</code>{' '}
              (ADRs),{' '}
              <code className="text-[0.9em] bg-wash-green/60 px-1.5 py-0.5 rounded">tech-stack/</code>{' '}
              (vendor evaluations),{' '}
              <code className="text-[0.9em] bg-wash-green/60 px-1.5 py-0.5 rounded">runbooks/</code>{' '}
              (how-we-do-things), and{' '}
              <code className="text-[0.9em] bg-wash-green/60 px-1.5 py-0.5 rounded">proposals/</code>{' '}
              (the only place agents are allowed to write).
            </p>
            <p className="text-ink leading-7 mb-3">
              <strong>Two contributor modes coexist.</strong> Type&nbsp;A (manual) edits pages
              directly in Obsidian; auto-sync handles the rest. That&rsquo;s how Jeremy
              works today. Type&nbsp;B (agent-assisted) is how Shawn and I work: an agent reads
              evening-wrap, meeting debriefs, and opportunity-scan output, drafts updates into{' '}
              <code className="text-[0.9em] bg-wash-green/60 px-1.5 py-0.5 rounded">proposals/YYYY-MM-DD-{'{topic}'}.md</code>,
              and a human (the owner of the page) reviews each one, about
              30&nbsp;seconds, before committing into the canonical page. <em>No
              automation writes directly to shared pages.</em> Having both modes live in the
              same vault from week one is a deliberate test. We want to see whether
              manual and agent-assisted contributors can coexist without one mode crowding out
              the other. Four cron jobs run the rhythm: nightly ingest at 8&nbsp;PM weeknights
              folds team-vault changes into the personal knowledge graph, a proposals generator
              drafts new entries the same hour, a proposals monitor surfaces them at 9&nbsp;AM,
              and a Monday-morning staleness check flags any page untouched for 14+ days.
            </p>
            <p className="text-ink leading-7 mb-3">
              <strong>Week-one activity.</strong> 25+ assets were updated in the
              first 48 hours: people cards, decision docs, project pages, runbooks,
              and tech-stack entries. All three participants were editing the vault, and
              the nightly ingest means a decision logged in the
              vault is in my agent&rsquo;s context by the next morning. The Monday briefing
              now opens with a team-diff section. The four-week pilot window closed in June; the
              vault has stayed in daily use since, and the rhythm — proposals drafted nightly,
              surfaced each morning, staleness-checked Mondays — still runs.
            </p>
            <p className="text-ink leading-7">
              <strong>What the pilot is testing.</strong> If the approach works for three
              people, the pilot can help assess whether the same pattern (shared Obsidian vault, GitHub backing,
              proposals-first agent writes, ~10&nbsp;minutes of human review per week per
              steward) can extend to a larger group. Each tier would become &ldquo;Layer 2&rdquo; (triggered) for
              the tier above. If a UC San Diego campus offering ever ships, this is the architectural
              shape we&rsquo;d propose: every team gets a vault, every team member gets an
              agent that reads it, no team&rsquo;s vault is visible to another without explicit
              cross-vault permission.
            </p>
          </div>
          <p>
            <strong className="text-ink">Department: anonymized aggregates only.</strong>{' '}
            At WTS or Academic Technology Services, the useful view is patterns, not records.
            &ldquo;Trending pain points this week&rdquo; or &ldquo;which vendors are we all
            evaluating&rdquo;. No individual data, just signals that emerge from many
            agents, the way public health surveillance works. The system strips individual identity
            before aggregation; the dashboard never shows who said what.
          </p>
          <p>
            <strong className="text-ink">Campus: statistical patterns only.</strong>{' '}
            TritonAI provides campus-wide AI services. The missing piece is connective tissue:
            aggregate department patterns up to institutional insights. Which departments
            struggle with the same vendor, which AI use cases are converging, what decisions
            would help everyone. This tier only ever sees statistical patterns, never
            individual records, never attributable content.
          </p>
          <p>
            The tech mostly exists. The governance doesn&rsquo;t. Sharing boundaries have to be
            first-class features, not bolt-ons. And campus data stewardship has to be
            comfortable with the model before anything scales beyond the personal tier.
          </p>
          <p>
            <strong className="text-ink">Current status:</strong> I use the personal
            layer daily. The team layer has been in continuous use by three people since
            May&nbsp;18.
            Department and campus layers are still design exercises, not shipped code. The
            pattern is there; the architecture is a starting point, not a finished product.
          </p>
          <p className="text-ink font-semibold border border-line border-l-4 border-l-blue-600 pl-5 py-2 bg-paper-strong rounded-r-lg shadow-sm">
            The open question is what it would take to use this approach more broadly while
            protecting privacy. That would require work across design, governance, procurement,
            and technology.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 7 — EVOLUTION / CHANGELOG
          ====================================================================== */}
      <section id="evolution" className="max-w-6xl mx-auto px-6 py-10 border-t border-line">
        <div className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-3">
          Evolution
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
          This architecture isn&rsquo;t done
        </h2>
        <HashDetails id="development-history" label="Read the development history">
        <div className="text-body text-[1.06rem] leading-8 space-y-5 mb-8">
          <p>
            It&rsquo;s a living system, updated continuously. Some of what&rsquo;s on this page
            will be obsolete in six months. That&rsquo;s the point. Every change is in
            the git history of my{' '}
            <a
              href="https://github.com/bpollak/brettpollak-website"
              className="font-semibold text-signal-blue underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-signal-blue"
            >
              brettpollak-website repo
            </a>
            ; highlights below for quick reference.
          </p>
        </div>

        <ol className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-0.5 before:bg-wash-green pl-8">
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              November 22, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Graph passes 1,000 nodes; wiki grows to 1,639 pages</div>
            <p className="text-sm text-body leading-6">
              The knowledge graph went from 984 to 1,041 nodes and 1,048 to 1,133 edges,
              and the wiki grew from 1,581 to 1,639 pages. The fleet held at 99 enabled
              jobs: 64 inference, 35 deterministic scripts, 4 in monitor mode. No jobs
              were added or retired this week, so the growth came from entity extraction
              on existing meetings and projects rather than new ingestion paths.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              November 15, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Fleet steady at 99 jobs, graph at 984 nodes, wiki at 1,581 pages</div>
            <p className="text-sm text-body leading-6">
              Fleet shape holds at 64 inference jobs (61 on GLM 5.3, 3 on GLM 5.3 Flash),
              35 deterministic scripts, and 4 jobs in monitor mode. The knowledge graph
              reached 984 nodes and 1,048 edges, and the wiki reached 1,581 pages.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              November 1, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Fleet reaches 99 jobs; Gemma tier retired after hub catalog change</div>
            <p className="text-sm text-body leading-6">
              Four inference jobs joined the fleet, all pinned to GLM 5.3. When the TritonAI
              hub retired Gemma 4 31B mid-week, the key-access monitor caught the change
              and the two jobs running on it were repinned to GLM 5.3 before any run failed.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              October 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Steady growth across the graph and wiki; coding-session memory mirrored</div>
            <p className="text-sm text-body leading-6">
              The fleet held at 95 enabled jobs through October while the knowledge graph
              crossed 900 nodes and the wiki grew from 1,278 to 1,471 pages. A new session
              memory sync began mirroring coding-agent memory pages into the wiki tree
              alongside ongoing people, project, and decision updates.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              September 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Three-agent shared memory, monitor mode, vision offload, and GLM 5.3 Flash tier</div>
            <p className="text-sm text-body leading-6">
              Claude Code, Codex, and Hermes converged on one shared memory ecosystem:
              hooks inject context at session start, an MCP server serves mid-session
              queries, and nightly jobs fold session recaps back into the wiki. The runtime
              upgraded to Hermes v0.21.0 with monitor mode (skipping inference when sources
              have not changed), vision offload through the institutional gateway, a faster
              GLM 5.3 Flash tier for lightweight scans, and a fallback chain verified by
              live completion probes rather than gateway catalog listings. The wiki crossed
              1,000 pages and the fleet grew from 80 to 95 enabled jobs.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              August 15, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Platform migrated from OpenClaw to Hermes Agent</div>
            <p className="text-sm text-body leading-6">
              Decommissioned OpenClaw after 8 months and migrated 74 cron jobs to Hermes
              Agent (by Nous Research), porting all scripts, integrations, wiki (771 pages),
              and memory archives. Hermes now provides the cron scheduler, agent runtime,
              Telegram gateway, multi-model routing, skill system, and plugin SDK.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              July 15, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">GLM 5.2 became the on-prem default; proprietary automation routes retired</div>
            <p className="text-sm text-body leading-6">
              Standardized scheduled jobs onto on-premises GLM 5.2 via TritonAI, retiring
              proprietary cloud overrides across the automation fleet. Wiki coverage grew
              past 600 pages through July alongside regular graph deduplication.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              May &ndash; June 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">100% on-prem open-weight fleet, key-access monitoring, and team vault pilot</div>
            <p className="text-sm text-body leading-6">
              Migrated the automation fleet off third-party APIs onto TritonAI&rsquo;s
              on-premises open-weight catalog, added twice-weekly{' '}
              <span className="font-mono text-xs">/v1/models</span> catalog monitoring to
              catch model identifier changes before jobs fail, and launched the 3-person
              TritonAI Team Knowledge Vault pilot with proposals-first agent writes.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              April 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Confluence sync, Teams ingestion, and hybrid AI digest pipeline</div>
            <p className="text-sm text-body leading-6">
              Added nightly mirroring of institutional Confluence spaces and scoped
              Microsoft Teams channels into the durable knowledge layer. Replaced generic
              web search in the morning AI digest with a hybrid pipeline of curated RSS
              feeds and targeted searches.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-signal-blue/70 border-2 border-white shadow" aria-hidden="true" />
            <Eyebrow>
              Earlier 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Graph + wiki established</div>
            <p className="text-sm text-body leading-6">
              Built the initial knowledge graph from a 577-meeting transcript corpus (Feb
              2025&ndash;Apr 2026). Set up daily crons for calendar briefings, AI news,
              opportunity scanning, and meeting debriefs, plus the initial wiki structure
              for people, tech-stack, project, and decision pages.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-line border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-muted font-semibold mb-1">
              Future
            </div>
            <div className="text-ink font-semibold mb-1">Team-level agents and beyond</div>
            <p className="text-sm text-body leading-6">
              Team-level context sharing with privacy boundaries. Department-level anonymized
              trend aggregation. Campus-level institutional insights. Signal feedback loops so
              agents learn from human corrections. Mostly design work, not code yet.
            </p>
          </li>
        </ol>

        </HashDetails>
      </section>

      {/* ======================================================================
          FOOTER — meta / links / attribution
          ====================================================================== */}
      <section className="max-w-6xl mx-auto px-6 pb-24 pt-8 border-t border-line space-y-5">
        <div className="rounded-2xl border border-line bg-white/90 p-5">
          <div className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-2">
            Built on
          </div>
          <p className="text-sm text-body leading-7">
            The foundation of this system is{' '}
            <a
              href="https://hermes-agent.nousresearch.com/docs"
              className="font-semibold text-signal-blue underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-signal-blue"
            >
              Hermes Agent
            </a>
            , a personal AI assistant framework by Nous Research providing the cron scheduler,
            agent runtime, Telegram integration, multi-model gateway, skill system, and plugin SDK
            the pipeline runs on. What you see here isn&rsquo;t Hermes out of the box; it&rsquo;s
            Hermes tailored, extended, and reshaped over months to fit a specific work context. The
            accumulation pipeline, knowledge graph reconciliation, three-layer context loading, and
            scaling vision all layer on top of that foundation.
          </p>
        </div>

      </section>
    </main>
  );
}
