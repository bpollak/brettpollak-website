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
          Last updated: September 2, 2026 &middot; This page evolves as the architecture evolves.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="editorial-panel p-6" data-tone="blue">
            <div className="rule-label mb-2">Automated jobs</div>
            <div className="text-2xl font-semibold text-ink">80 enabled jobs</div>
          </div>
          <div className="editorial-panel p-6" data-tone="green">
            <div className="rule-label mb-2">Durable memory</div>
            <div className="text-2xl font-semibold text-ink">803 nodes · 898 pages</div>
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
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-line">
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
            This page documents how I built that knowledge layer for myself: 80 enabled automated
            jobs routed through UC San Diego&rsquo;s TritonAI gateway, entirely on open-weight
            models, with the primary inference path hosted on-prem. An 803-node knowledge graph, 898 wiki pages, a
            three-layer memory system, and an MCP bridge that opens it to programming agents.
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
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-line">
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
            memory. ~15&#8239;KB total, cheap to load, enough for the AI to respond as itself
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
            In this system, 898 wiki pages form a reference library. A relevant page is
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
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-line">
        <div className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-3">
          The Pipeline
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
          The daily rhythm that builds the knowledge layer
        </h2>
        <div className="text-body text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            80 enabled jobs build the knowledge layer on a predictable daily rhythm. A typical
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
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-line">
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
              <div className="text-2xl font-bold text-ink mb-2">803 nodes · 844 edges</div>
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
              <div className="text-2xl font-bold text-ink mb-2">898 narrative pages</div>
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
            meetings and manual edits. The wiki-ingest cron runs at 9 AM daily, creating up to 5
            new people pages and 5 new tech-stack pages per run, so even entities that
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
            The wiki is also fed from outside the personal stream. A nightly sync mirrors 2,500+
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
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-line">
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
            recurring jobs that benefit from it. Vision and bounded plugin fallback paths stay
            local too.
          </p>
          <p>
            As of September 2, 2026, <strong>all 80 enabled jobs run through{' '}
            <a
              href="https://tritonai.ucsd.edu/"
              className="font-semibold text-signal-blue underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-signal-blue"
            >
              TritonAI
            </a></strong>, UC San Diego&rsquo;s institutional AI gateway. The fleet runs on a
            two-tier design: 49 inference jobs on open-weight models hosted on-prem — 47 on
            GLM 5.3 for reasoning, tools, and long-horizon synthesis, and 2 on Gemma 4 31B for
            lightweight scan-and-check jobs. The other 31 jobs are deterministic scripts that
            never call a model at all. Four fallback models (DeepSeek V4 Flash Max, GPT-OSS
            120B, Gemma 4 26B, Mistral Small) stand ready behind the primary, and a weekly
            key-access monitor watches that every rung stays reachable.
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
                <td className="px-4 py-3 text-right font-semibold text-ink">Interactive + 47</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-ink">Lightweight scheduled work</td>
                <td className="px-4 py-3 font-mono text-xs text-body">api-gemma-4-31b</td>
                <td className="px-4 py-3 text-body">TritonAI on-prem · Google Gemma 4 31B (open weight)</td>
                <td className="px-4 py-3 text-body">Fast scan-and-check jobs where reasoning overhead is wasted: feed watches, date reminders</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">2</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-ink">No inference needed</td>
                <td className="px-4 py-3 font-mono text-xs text-body">—</td>
                <td className="px-4 py-3 text-body">Local scripts (deterministic)</td>
                <td className="px-4 py-3 text-body">Syncs, refreshes, health checks, and other jobs that run without a model call</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">31</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-ink" rowSpan={4}>Fallback chain</td>
                <td className="px-4 py-3 font-mono text-xs text-body">deepseek-v4-flash-max</td>
                <td className="px-4 py-3 text-body">TritonAI on-prem · DeepSeek V4 Flash Max (open weight)</td>
                <td className="px-4 py-3 text-body" rowSpan={4}>Automatic if the primary is unreachable &mdash; tried in order</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">—</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-body">gpt-oss-120b</td>
                <td className="px-4 py-3 text-body">TritonAI on-prem · OpenAI GPT-OSS 120B (open weight)</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">—</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-body">gemma-4-26b</td>
                <td className="px-4 py-3 text-body">TritonAI on-prem · Google Gemma 4 26B (open weight)</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">—</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-body">mistral-small-3.2</td>
                <td className="px-4 py-3 text-body">TritonAI on-prem · Mistral Small 3.2 (open weight)</td>
                <td className="px-4 py-3 text-right font-semibold text-ink">—</td>
              </tr>
            </tbody>
          </table>
          <div className="px-4 py-3 text-xs text-muted border-t border-line">
            Counts current as of September 2, 2026. Fallbacks are verified weekly by the
            tritonai-key-access-monitor job.
          </div>
        </div>

        <div className="text-body text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            <strong className="text-ink">Why GLM 5.2 is the default:</strong>{' '}
            its tool use, reasoning controls, and long-horizon behavior let one model cover work
            that previously needed several capability tiers. The current TritonAI virtual key
            advertises a 320K context envelope and 32K maximum output, so the local configuration
            uses those deployment limits rather than assuming the model&rsquo;s theoretical maximum.
            Ambiguous router decisions increase reasoning effort from medium to high on the same
            GLM route instead of escalating to a proprietary model.{' '}
            <a
              href="https://z.ai/blog/glm-5.2"
              className="font-semibold text-signal-blue underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-signal-blue"
            >
              Z.ai describes GLM 5.2
            </a>{' '}
            as an open model designed for long-horizon agentic work.
          </p>
          <p>
            <strong className="text-ink">Why multiple open-weight models:</strong> the fleet
            spreads across four open-weight models hosted on-prem, each matched to the reasoning
            depth the job needs. GPT-OSS 120B handles the largest share of scheduled work; Mistral
            Small covers fast lightweight checks; Gemma 4 handles vision; and Mistral Large covers
            the mid-tier. Five jobs that need deeper reasoning use Claude Sonnet through
            TritonAI&rsquo;s hosted route. DeepSeek V4 Flash Max handles one overnight code
            maintenance job where speed is the priority.
          </p>
          <p>
            <strong className="text-ink">Strict fallback is a privacy boundary:</strong>{' '}
            the main-agent fallback list is empty. If GLM or the gateway fails, Hermes surfaces
            the failure instead of silently sending private context to a cloud provider. Five
            scheduled jobs explicitly use Claude Sonnet for tasks where reasoning quality
            justifies the trade-off, but this is a deliberate per-job choice, not a fallback.
            Memory embeddings stay local through Ollama and <code className="text-[0.9em] bg-wash-green px-1.5 py-0.5 rounded">nomic-embed-text</code>.
          </p>
          <p>
            <strong className="text-ink">How routing stays healthy:</strong> the autonomous
            router runs every two hours, reads live SQLite-backed cron state through the Hermes
            CLI, and uses GLM 5.2 itself to evaluate changes. It may target only approved on-prem
            aliases and is biased toward no-op decisions. A dedicated{' '}
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
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-line">
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
                <a href="/ucsd-ai-news" className="font-semibold text-signal-blue underline decoration-2 underline-offset-4 decoration-blue-600">/ucsd-ai-news</a>.
                The personal AI digest auto-publishes daily to{' '}
                <a href="/ai-digest" className="font-semibold text-signal-blue underline decoration-2 underline-offset-4 decoration-blue-600">/ai-digest</a>.
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
                The TritonAI Code coding agent now has live MCP access to the same wiki,
                knowledge graph, and memory logs that my personal agent uses, via an
                authenticated SSE bridge running on my home network. When it needs context on
                a person, project, or decision, it queries the memory system directly instead
                of guessing. The knowledge layer isn&rsquo;t locked to one agent anymore.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ======================================================================
          SECTION 7 — SCALING VISION
          ====================================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-line">
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
              now opens with a team-diff section. Pilot duration is four weeks; a structured
              retrospective is scheduled for June&nbsp;15 to decide whether to expand to the
              full WTS team next.
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
            layer daily. The team layer has been in use by three people since May&nbsp;18,
            with a structured retrospective set for June&nbsp;15.
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
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-line">
        <div className="text-xs uppercase tracking-[0.18em] text-muted font-semibold mb-3">
          Evolution
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
          This architecture isn&rsquo;t done
        </h2>
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
              September 2, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Diagrams redesigned; model fleet corrected to two-tier; stats re-verified against live system</div>
            <p className="text-sm text-body leading-6">
              All four diagrams rebuilt with distinct visual grammars — pipeline rail, retrieval
              cross-section, daily-rhythm waterfall, and scaling bands — and every number on the
              page re-verified against the live system: 80 enabled jobs (49 inference + 31
              deterministic scripts), 803 graph nodes and 844 edges, 898 wiki pages. The model
              fleet was corrected to its real shape: 47 jobs on GLM 5.3, 2 lightweight scan jobs
              moved to Gemma 4 31B, 31 script jobs with no model call. The old multi-model
              allocation table (GPT-OSS, Mistral Small/Large, Gemma 4 26B, Claude Sonnet) is
              retired; those tiers described a fleet layout that no longer exists after the
              GLM 5.2&ndash;&gt;5.3 swap flattened every job to the primary. Also removed the
              fictional 3 AM &ldquo;dreaming cron&rdquo; — nightly memory consolidation actually
              runs at 7:35 PM, after the evening synthesis pass. A split-brain digest publisher
              job (midnight fires targeting a stale site clone) was found and retired.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              August 30, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Wiki grew +64 pages; model allocation corrected; cron count held at 65+</div>
            <p className="text-sm text-body leading-6">
              Wiki expanded from 834 to 898 pages (+64), driven by 39 new people pages, 15 new decision pages, and 2 new project pages (regulatory-change-intelligence-agent, transfer-credit-articulation-agent). Enabled cron jobs held steady at 69 (65+). Model allocation table corrected: the fleet now spans four open-weight models (gpt-oss-120b, mistral-small, gemma-4-26b, mistral-large) plus 5 jobs on Claude Sonnet for deeper reasoning and 1 on DeepSeek V4 Flash Max. Knowledge graph held at 793 nodes and 837 edges (no drift).
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              August 23, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Wiki surged +58 pages; enabled crons corrected to 65+</div>
            <p className="text-sm text-body leading-6">
              Wiki expanded from 776 to 834 pages (+58), driven by new project pages including academic-integrity-case-triage-agent, behavioral-disengagement-engine, and tritonai-transfer-credit-intelligence-agent, plus continued growth across people and decision pages. Knowledge graph held steady at 793 nodes and 837 edges (no drift). Enabled cron jobs corrected from 77 to 69 (rounded to 65+) after retiring 8 one-shot reminder and dashboard jobs that had completed their purpose.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              August 16, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Graph grew +21 nodes, +21 edges; wiki +5 pages</div>
            <p className="text-sm text-body leading-6">
              Knowledge graph expanded from 772 to 793 nodes and 816 to 837 edges (+21 each), driven by new people pages across ITS leadership and community college partners. Wiki grew from 771 to 776 pages (+5), with new and updated project pages including enrollment-aid-exception-agent, citizen-developer-program, and agentic-procurement-spend-optimization-agent. Enabled cron jobs held steady at 76 (no drift). One job retired since last week (architecture-review-monthly consolidated into this weekly review).
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              August 15, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Platform migrated from OpenClaw to Hermes Agent</div>
            <p className="text-sm text-body leading-6">
              Decommissioned OpenClaw after 8 months. Migrated 74 cron jobs to Hermes Agent (by Nous Research), bringing the total to 77 enabled jobs. All scripts, integrations, wiki (771 pages), credentials, and memory archives ported. Hermes provides the cron scheduler, agent runtime, Telegram gateway, multi-model gateway, skill system, and plugin SDK. Model allocation unchanged: GLM 5.2 remains the on-prem default via TritonAI with deepseek-v4-flash-max, gpt-oss-120b, gemma-4-26b, and mistral-small as fallbacks. OpenClaw uninstalled; 3.3GB backup archived.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              August 2, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Graph surged +136 nodes, wiki +89 pages</div>
            <p className="text-sm text-body leading-6">
              Knowledge graph grew from 636 to 772 nodes and 680 to 816 edges (+136 each), driven by new people pages across ITS leadership and community college partners. Wiki expanded from 602 to 691 pages (+89), led by 20+ new decision pages including agentic CMS strategy, community college pilot structure, data governance three-council model, observability restructure, and HR redesign roadmap. New concept pages added: scenic-ai, uc-it-ai-council, and tritonai-research-administration-copilot. Enabled cron jobs steady at 69 (65+).
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              July 19, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Wiki surged +58 pages, cron count corrected to 65+</div>
            <p className="text-sm text-body leading-6">
              Wiki grew to 602 pages (+58), driven by new project pages including spa2-performance-management, splunk-opensearch-bifurcation, ai-training-video-series, ucla-health-partnership, bfs-cash-receipt-automation, observability-modernization, and ccc-partnership. Knowledge graph held steady at 636 nodes and 680 edges. Enabled cron jobs corrected to 65+ (rounded from 69) after retiring unused and one-shot reminder jobs.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              July 15, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">GLM 5.2 became the on-prem default &middot; proprietary automation routes retired</div>
            <p className="text-sm text-body leading-6">
              Corrected the TritonAI catalog identifier from{' '}
              <span className="font-mono text-xs">glm-5.2</span> to{' '}
              <span className="font-mono text-xs">api-glm-5.2</span> and made GLM 5.2 the main
              agent, utility, active-memory, router, and default cron model. Repaired the
              two-hour router after the cron state moved to SQLite, replacing its
              Claude CLI decision path with direct on-prem GLM inference. The live fleet is now
              90 enabled jobs: 81 inherit GLM 5.2 and nine lightweight jobs use DeepSeek V4
              Flash Max. No scheduled job has a proprietary override, the main fallback list is
              empty, vision uses on-prem Gemma 4, and local model and cron canaries passed.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              July 12, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Wiki continued its rapid expansion — +55 pages, graph +3 nodes</div>
            <p className="text-sm text-body leading-6">
              Wiki grew to 544 pages (+55), driven by new tech-stack entries (crowdstrike, databricks, litellm, glm-5, openai, and 10+ others), decisions (fde-program-restructure-2026-07, frontier-model-risk-mitigation-framework, student-scheduling-assistant-launch, and 25+ more), and new people pages across ITS leadership and TritonAI collaborators. Knowledge graph edged up to 636 nodes and 680 edges (+3 nodes, +6 edges). New project pages added: tritonai-developer-api, tritonbuild, and ai-contract-reviewer. New concept pages: ai-policy-navigator, hsdsc, preferential-rehire, research-portfolio-intelligence-agent, and ucsd-skills-library. Enabled cron jobs steady at 69.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              July 5, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Steady growth — knowledge graph +36 nodes, wiki +31 pages</div>
            <p className="text-sm text-body leading-6">
              Knowledge graph expanded to 633 nodes and 674 edges (up +36 nodes, +36 edges). Wiki grew to 489 pages (+31), driven by new decision pages (citizen-developer-program-rady-engagement, crowdstrike-falcon-complete, hermes-enhancement-plan, hsdsc-inference-expansion, ta-matching-automation-accelerated), 15 new people pages, and 6 new tech-stack entries. No new cron jobs added; enabled jobs steady at 69.
            </p>
          </li>
                    <li className="relative">
            <TimelineDot />
            <Eyebrow>
              June 28, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Wiki growth accelerated — +81 pages, graph +31 nodes</div>
            <p className="text-sm text-body leading-6">
              Knowledge graph expanded to 597 nodes and 638 edges (up +31 nodes, +21 edges). Wiki surged to 458 pages (+81), driven by new project pages (GrantIQ, Student Scheduling Assistant, TA Matching Algorithm, TritonAI Harness) and 15+ decisions added. No new cron jobs added; enabled jobs steady at 69.
            </p>
          </li>
                    <li className="relative">
            <TimelineDot />
            <Eyebrow>
              June 21, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Graph and wiki accelerated growth — knowledge graph +25 nodes, wiki +52 pages</div>
            <p className="text-sm text-body leading-6">
              Knowledge graph expanded to 566 nodes and 617 edges (up +25 each). Wiki grew to 377 pages (+52), driven by 8 new people pages, 2 new project pages (tritonai-harness, canvas-onyx-integration), and 15+ decisions spanning TritonAI social layer architecture, Onyx contract renewal, AI Tutor Canvas tool naming, iMessage integration, and the FY27 budget win for ITS. Enabled cron jobs steady at 69.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              June 14, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Weekly architecture metrics update</div>
            <p className="text-sm text-body leading-6">
              Graph grew to 541 nodes and 592 edges (up +156 nodes, +162 edges). Wiki expanded to 325 pages (+58). Enabled cron jobs rose to 69 (rounded 65+). Added new project pages for recent initiatives.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              June 9, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Router outage fixed &middot; fleet rebalanced to ~99% open-weight &middot; Gmail triage localized</div>
            <p className="text-sm text-body leading-6">
              A platform upgrade silently moved cron job storage into the
              gateway&rsquo;s internal store, which broke the model-router&rsquo;s state digest
              &mdash; it had been failing every 2-hour cycle since June 3 with no decisions and
              no alerts. Patched the digest to read merged state from the gateway, verified the
              52-test suite plus a live cycle, and the router is back on duty. The same
              storage migration explained why one earlier fleet edit never took effect
              (<span className="font-mono text-xs">email-task-scanner</span> was still running a
              model known to decorate sentinel outputs &mdash; now corrected through the gateway
              API). Rebalanced the fleet: five heartbeat-sentinel jobs moved off{' '}
              <span className="font-mono text-xs">api-mistral-small-3.2-2506</span> to{' '}
              <span className="font-mono text-xs">api-gpt-oss-120b</span>, two file-editing
              weekly jobs with repeat apply-patch failures moved to{' '}
              <span className="font-mono text-xs">deepseek-v4-flash-max</span>, and both{' '}
              <span className="font-mono text-xs">provider-quota-monitor</span> and{' '}
              <span className="font-mono text-xs">gmail-important-emails</span> came off
              proprietary Claude Sonnet to local models (the Gmail swap verified with a live
              run before committing to it). Every single-model job gained a local fallback
              chain, and the default fallback order is now local-first:{' '}
              <span className="font-mono text-xs">deepseek-v4-flash-max &rarr; api-gpt-oss-120b
              &rarr; claude-sonnet-4-6</span>. New distribution across 73 enabled jobs: 47 on{' '}
              <span className="font-mono text-xs">api-gpt-oss-120b</span>, 7 on{' '}
              <span className="font-mono text-xs">deepseek-v4-flash-max</span>, 6 each on{' '}
              <span className="font-mono text-xs">api-mistral-small-3.2-2506</span> and{' '}
              <span className="font-mono text-xs">mistral-large-3-675b</span>, 5 on{' '}
              <span className="font-mono text-xs">api-gemma-4-26b</span>, and exactly 1 on
              proprietary <span className="font-mono text-xs">claude-sonnet-4-6</span>.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              June 7, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Graph and wiki growth – nodes, edges, and pages expanded</div>
            <p className="text-sm text-body leading-6">
              Updated knowledge graph to 385 nodes and 430 edges, wiki grew to 267 pages, and enabled cron jobs remain at 65+. Added several new project wiki pages (e.g., tritonai.md, databricks-platform-direction.md) reflecting recent initiatives.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              May 31, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Architecture stats refreshed &ndash; growth across graph, wiki, and crons</div>
            <p className="text-sm text-body leading-6">
              Updated graph to 329 nodes and 374 edges, wiki expanded to 263 pages, and enabled cron jobs increased to 67 (rounded to 65+). 4 new wiki pages across projects and tech-stack. May 19 rebalance gains fully absorbed; identity-drift-review timeout bumped to 900s to prevent repeat failures.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              May 21, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">TritonAI catalog refresh · key rotation · 57 jobs re-routed · catalog-change monitor added</div>
            <p className="text-sm text-body leading-6">
              TritonAI rotated personal API keys and shipped a server-side catalog refresh that
              retired several models the cron fleet had been routing to &mdash;{' '}
              <span className="font-mono text-xs">moonshotai.kimi-k2.5</span>,{' '}
              <span className="font-mono text-xs">nemotron-3-super-120b-instant</span>,{' '}
              <span className="font-mono text-xs">claude-haiku-4-5-20251001</span>, and{' '}
              <span className="font-mono text-xs">claude-opus-4-6</span> &mdash; and replaced
              them with <span className="font-mono text-xs">claude-opus-4-7</span>,{' '}
              <span className="font-mono text-xs">gpt-5.5</span>,{' '}
              <span className="font-mono text-xs">gpt-5.3-codex</span>, and{' '}
              <span className="font-mono text-xs">deepseek-v4-flash-max</span>. On-prem open-weight
              models also got an <span className="font-mono text-xs">api-</span> prefix
              (<span className="font-mono text-xs">api-gpt-oss-120b</span>,{' '}
              <span className="font-mono text-xs">api-gemma-4-26b</span>,{' '}
              <span className="font-mono text-xs">api-mistral-small-3.2-2506</span>) and are now
              segregated behind a separate on-prem key from the hyperscaler-proxied cloud tier.
              Rotated both keys, normalized every cron&rsquo;s model assignment to the canonical
              provider/model path, and bulk-re-routed 57+ jobs in a single pass to prefer the
              on-prem open-weight tier &mdash; new distribution is 20 on{' '}
              <span className="font-mono text-xs">api-gemma-4-26b</span> (briefings &amp;
              summarization), 18 on <span className="font-mono text-xs">api-mistral-small-3.2-2506</span>{' '}
              (syncs &amp; monitors), 14 on <span className="font-mono text-xs">api-gpt-oss-120b</span>{' '}
              (heavy synthesis), 7 on <span className="font-mono text-xs">mistral-large-3-675b</span>{' '}
              (long-form &amp; deep research), 1 on{' '}
              <span className="font-mono text-xs">deepseek-v4-flash-max</span> (overnight code
              maintenance), and 2 explicit escalations to{' '}
              <span className="font-mono text-xs">claude-sonnet-4-6</span> &mdash;{' '}
              <span className="font-mono text-xs">provider-quota-monitor</span> and{' '}
              <span className="font-mono text-xs">gmail-important-emails</span> &mdash; where a
              missed signal carries real downstream cost. Default agent fallback chain rebuilt:{' '}
              <span className="font-mono text-xs">claude-sonnet-4-6 &rarr; claude-opus-4-7 &rarr;
              api-gpt-oss-120b</span>. Added a new{' '}
              <span className="font-mono text-xs">tritonai-key-access-monitor</span> cron that
              fires Mondays and Thursdays at 6&nbsp;PM PT, probes TritonAI&rsquo;s{' '}
              <span className="font-mono text-xs">/v1/models</span> endpoint for both keys,
              diffs against a stored snapshot, and Telegrams a summary of any changes &mdash;
              with broken-job warnings if a current cron route is no longer accessible. Net
              effect: the next TritonAI catalog refresh surfaces itself before a cron fails.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              May 19, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Open-source rebalance · 11 jobs to gpt-oss-120b · aggressive efficiency</div>
            <p className="text-sm text-body leading-6">
              Rebalanced 11 jobs from commercial models (claude-sonnet-4.6, mistral-large-3) to <span className="font-mono text-xs">tritonai-prod/gpt-oss-120b</span> based on actual workload patterns &mdash; news aggregation, event curation, script runners, and auditing tasks don&rsquo;t need commercial reasoning. Kept claude-sonnet-4.6 for synthesis-heavy jobs (meeting debriefs, daily reflection, memory promotion), mistral-large-3 for web research + thesis generation. Net effect: ~$300&ndash;400/month institutional savings while staying on TritonAI&rsquo;s open-weight platform. <em>(Superseded by the May 21 entry above; meeting debriefs, daily reflection, and memory promotion have since moved off claude-sonnet.)</em>
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              May 17, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Architecture stats refreshed – growth across graph, wiki, and crons</div>
            <p className="text-sm text-body leading-6">
              Updated graph to 250 nodes and 298 edges, wiki expanded to 247 pages, and enabled cron jobs increased to 56 (rounded to 55+). Added new project pages: gartner-eoi-2026, biobib-formatter, citizen-developer-program.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              May 10, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Architecture stats refreshed</div>
            <p className="text-sm text-body leading-6">
              Updated graph to 222 nodes and 265 edges, wiki expanded to 219 narrative pages, and enabled cron jobs remain at 56 (rounded to 55+). No new cron jobs added this week.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              May 9, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">100% local open-weight achieved · 31-job migration · Telegram routing fix</div>
            <p className="text-sm text-body leading-6">
              Bulk-migrated 31 cron jobs onto TritonAI&rsquo;s locally-hosted open-weight catalog.
              Every proxied closed-weight model retired in one pass: 14 jobs off{' '}
              <span className="font-mono text-xs">tritonai-haiku</span> (Claude Haiku 4.5 via
              proxy), 4 off <span className="font-mono text-xs">tritonai-opus</span> (Claude Opus
              4.6), 3 off Codex / codex-mini (capped weekly cap + a model that no longer existed),
              1 off <span className="font-mono text-xs">or-haiku</span> (OpenRouter Anthropic), 1
              off Ollama gemma4 (slow on Apple Silicon). New endpoints brought in: TritonAI&rsquo;s
              <span className="font-mono text-xs"> mistral-small-3.2-2506</span> for fastest light
              monitors, more weight on
              <span className="font-mono text-xs"> nemotron-3-super-120b-instant</span>,{' '}
              <span className="font-mono text-xs">moonshotai.kimi-k2.5</span>, and{' '}
              <span className="font-mono text-xs">mistral-large-3-675b</span>. Each candidate
              probe-tested against a strict 50-token short-output prompt and a 400-token synthesis
              prompt before assignment;{' '}
              <span className="font-mono text-xs">minimax-m2</span> and{' '}
              <span className="font-mono text-xs">gpt-oss-120b-high</span> failed the trap test
              and were excluded. End state: 48 of 48 enabled jobs on TritonAI, every model
              open-weight, zero ongoing third-party API spend on automation. Cross-provider
              canary retired &mdash; concentration risk now an explicit institutional bet.
              Separately, repaired a Telegram-DM routing collision: the heartbeat lane had quietly
              captured the bot&rsquo;s direct-chat session and was returning{' '}
              <span className="font-mono text-xs">HEARTBEAT_OK</span> to every message.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              April 30, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Codex deprecation handled · all-TritonAI achieved · cron tuning</div>
            <p className="text-sm text-body leading-6">
              OpenAI Codex deprecated <span className="font-mono text-xs">gpt-5.4-mini</span> on
              the OAuth route mid-morning, breaking 6 cron jobs that depended on it. Migrated 10
              affected jobs to TritonAI in a single bulk patch &mdash; 9 to TritonAI open-weight
              models (Kimi K2.5 for synthesis, Mistral Large 3 for long-form, Opus 4.7 for heavy
              reasoning), 1 kept on OpenAI Codex (gpt-5.5) as a cross-provider canary. End state:
              45 of 46 enabled jobs on TritonAI. Same day, tuned five high-frequency crons (-1,860
              fires/month) and added two new TritonAI aliases for verified-clean light-monitor
              models: <span className="font-mono text-xs">tritonai-mistral-small</span> (Mistral
              Small 3.2) and <span className="font-mono text-xs">tritonai-nemotron-instant</span>
              {' '}(NVIDIA Nemotron 3).
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              April 29, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">OpenRouter dependency dropped · Platform runtime upgraded to 2026.4.27</div>
            <p className="text-sm text-body leading-6">
              Migrated 9 remaining OpenRouter-paid jobs onto TritonAI (light monitors to{' '}
              <span className="font-mono text-xs">tritonai-haiku</span>; weekly deep-dive to{' '}
              <span className="font-mono text-xs">tritonai-opus</span> &mdash; Claude Opus 4.7 on
              raised institutional quota). Zero jobs on OpenRouter post-migration. Upgraded the
              runtime from 2026.4.23 to 2026.4.27 (skipping the 2026.4.24 bonjour-broken
              release) for cron correctness improvements, OpenAI-compatible empty-response retry,
              and mixed-version safety. Ran <span className="font-mono text-xs">platform security
              audit</span> &mdash; chmod 600 on the config file fixed a critical world-readable
              finding.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              April 28, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">31-job migration to TritonAI open-weight models</div>
            <p className="text-sm text-body leading-6">
              UC San Diego raised the TritonAI virtual-key budget. Migrated 31 cron jobs from a mixed
              OpenRouter / Codex / Google fleet onto TritonAI&rsquo;s open-weight catalog: Kimi
              K2.5 for synthesis-heavy work (briefings, opportunity scan), Mistral Large 3 for
              long-form (newsletter, audits), gpt-oss 120B for single-shot agentic, Gemma 4 for
              mid-tier multimodal. Discovered along the way that the catalog&rsquo;s{' '}
              <span className="font-mono text-xs">reasoning</span> flag was unreliable for
              short-output cron tasks &mdash; some &ldquo;non-reasoning&rdquo; models burned
              their token budget on chain-of-thought scratch and never produced final content.
              Two TritonAI model identifiers also turned out to need vendor prefixes (e.g.{' '}
              <span className="font-mono text-xs">moonshotai.kimi-k2.5</span>); fixed at the
              alias-registry level so the cron prompts stayed unchanged.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              April 26, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Graph stability + steady wiki growth</div>
            <p className="text-sm text-body leading-6">
              Knowledge layer wiki coverage expanded from 185 to 189 narrative pages, bringing greater depth to the durable layer. Enabled automated jobs grew to 46 (from 40+), adding more coverage to the daily pipeline.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              April 24, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Citizen developer framework + accessibility audit + new monitoring crons</div>
            <p className="text-sm text-body leading-6">
              Knowledge layer crossed 179 graph nodes and 185 wiki pages (up from 163/111 nine
              days earlier &mdash; a +67% jump in wiki coverage as graph-to-wiki reconciliation
              caught up with accumulated entities). Two new crons: a daily{' '}
              <span className="font-mono text-xs">tritonai-model-hub-snapshot</span> that diffs
              UCSD&rsquo;s LLM gateway model catalog week-over-week into the Monday newsletter,
              and a Friday{' '}
              <span className="font-mono text-xs">backlog-completion-scan</span> that
              cross-references backlog tasks against the week&rsquo;s meetings, debriefs, and
              sent mail to flag probable completions. An Accessibility
              Audit screen was added surfacing vendor accessibility statements across 150 enterprise
              systems. New wiki page: TritonAI AI Initiative Readiness Copilot.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              April 15, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Hybrid AI digest sourcing</div>
            <p className="text-sm text-body leading-6">
              Replaced flaky generic web search with a hybrid pipeline: 14 curated RSS feeds
              (AI labs, arXiv, higher-ed tech publications) pulled fresh at 6&nbsp;AM, plus
              site-scoped searches across major outlets (NYT, Bloomberg, WSJ, Wired, Ars
              Technica, TechCrunch). Added a fallback so the digest produces real content even
              when search APIs are offline, and loosened the diversity gate so digests reliably
              surface 5&ndash;7 articles.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              April 14, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Team chat ingestion + weekly deep-dive</div>
            <p className="text-sm text-body leading-6">
              Added Microsoft Teams channel sync via MS Graph delegated scopes &mdash; scoped
              to high-signal channels, noise-filtered, chmod-600 on disk. New Sunday 2&nbsp;PM
              deep-research cron picks one significant AI development each week and produces a
              600&ndash;1000 word multi-source brief, separate from daily headlines.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              April 12, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Confluence integration (hybrid)</div>
            <p className="text-sm text-body leading-6">
              Added the institutional Confluence wiki as a sixth data source. A nightly 4&nbsp;AM
              cron mirrors 2,500+ pages from nine UCSD ITS spaces (AI Hub, WTS, BIA, Service
              Desk KB, Endpoint Management, Hybrid Cloud, Enterprise Architecture, Build &amp;
              Release, CI Ops) into local cache, and an Atlassian MCP server handles realtime
              search. Wiki-ingest&rsquo;s strategic-doc scanner auto-promotes high-signal pages
              into Layer 2 nightly.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              April 12, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Knowledge promotion pipeline fixes</div>
            <p className="text-sm text-body leading-6">
              Repaired broken daily-reflection and context-promotion crons (timeouts bumped to
              600s). Deduped 46 reversed-name person nodes (183&nbsp;&rarr;&nbsp;163). Added
              weekly-signal-synthesis cron for cross-day trends. Enhanced wiki-ingest with
              graph-to-wiki reconciliation and strategic-doc scanning. Documented three-layer
              context loading in AGENTS.md. Restructured MEMORY.md into 12 named sections.
            </p>
          </li>
          <li className="relative">
            <TimelineDot />
            <Eyebrow>
              April 11, 2026
            </Eyebrow>
            <div className="text-ink font-semibold mb-1">Model migration off Anthropic + Ollama</div>
            <p className="text-sm text-body leading-6">
              Migrated all 32 cron jobs off Anthropic Claude and local Ollama (quota and timeout
              issues). New allocation: Tier A (OpenAI gpt-5.4) for code and reasoning, Tier B
              (Google gemini-3.1-pro) for analysis, Tier C (gpt-5.4-mini) for fast monitors.
              Fallback: codex &rarr; codex-mini &rarr; gemini &rarr; gemini-flash-lite. Added a
              provider-quota-monitor cron every 30 min.
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
              opportunity scanning, and meeting debriefs. Added the wiki structure with
              SCHEMA.md and initial people/tech/decision pages.
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
