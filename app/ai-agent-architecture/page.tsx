import type { Metadata } from 'next';
import HeroPipelineDiagram from '@/components/ai-architecture/HeroPipelineDiagram';
import ThreeLayerDiagram from '@/components/ai-architecture/ThreeLayerDiagram';
import DailyRhythmClock from '@/components/ai-architecture/DailyRhythmClock';
import ScalingPyramid from '@/components/ai-architecture/ScalingPyramid';

export const metadata: Metadata = {
  title: 'AI Agent Architecture | Brett Pollak',
  description:
    'How I architected a personal AI assistant that actually knows me — and a vision for scaling personal agents across UC San Diego. 46 automated jobs across nine model variants, a 201-node knowledge graph, 190 wiki pages, and a three-layer memory system.',
  alternates: {
    canonical: 'https://brettcpollak.com/ai-agent-architecture',
  },
  openGraph: {
    title: 'AI Agent Architecture | Brett Pollak',
    description:
      'How I architected a personal AI assistant that actually knows me — and a vision for scaling personal agents across UC San Diego.',
    url: 'https://brettcpollak.com/ai-agent-architecture',
    siteName: 'Brett Pollak',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Architecture | Brett Pollak',
    description:
      'How I architected a personal AI assistant that actually knows me — and a vision for scaling personal agents across UC San Diego.',
  },
};

export default function AiAgentArchitecturePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/40" id="main-content">
      {/* ======================================================================
          SECTION 1 — HERO
          ====================================================================== */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-8">
          PERSONAL AI ARCHITECTURE
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent tracking-tight pb-1 mb-6">
          Building a Personal AI That Actually Knows You
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-6">
          Generic AI is generic. Useful AI knows your people, projects, decisions, and trends.
          Here&rsquo;s how I built one that does &mdash; and how the pattern could scale across
          UC San Diego.
        </p>
        <p className="text-sm text-slate-500 mb-10">
          Last updated: April 30, 2026 &middot; This page evolves as the architecture evolves.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Automated jobs</div>
            <div className="text-2xl font-bold text-slate-900">46 cron jobs</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Durable memory</div>
            <div className="text-2xl font-bold text-slate-900">201 nodes · 190 pages</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Context loading</div>
            <div className="text-2xl font-bold text-slate-900">3 memory layers</div>
          </div>
        </div>

        <HeroPipelineDiagram />

        <p className="text-sm text-slate-500 italic max-w-3xl">
          The pipeline in one glance: raw signals flow left to right through accumulation and
          synthesis crons into the durable knowledge layer &mdash; where the agent pulls them
          back out at the moment of conversation.
        </p>
      </section>

      {/* ======================================================================
          SECTION 2 — THE PROBLEM
          ====================================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          The Problem
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          Why generic AI isn&rsquo;t enough
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5">
          <p>
            Ask any stock chatbot &ldquo;who should I follow up with this week?&rdquo; and you get
            generic productivity advice. Ask one that actually knows you &mdash; who&rsquo;s been
            in your meetings, what you committed to last Tuesday, what&rsquo;s trending on campus
            &mdash; and you get something useful.
          </p>
          <p>
            The gap isn&rsquo;t model intelligence. The big models are already smart enough. The
            gap is <strong>knowledge</strong>: the AI needs to know your world, at the right moment.
          </p>
          <p>
            Most personal-AI projects stop at &ldquo;connect to my email, read my calendar.&rdquo;
            That&rsquo;s table stakes. It answers &ldquo;what&rsquo;s on my calendar&rdquo; but
            not &ldquo;what does this meeting mean in the context of the project I&rsquo;ve been
            driving for six months.&rdquo;
          </p>
          <p>
            The hard problem isn&rsquo;t connecting data sources. It&rsquo;s building a knowledge
            layer on top of them &mdash; a system that:
          </p>
          <ul className="space-y-2 pl-5 list-disc marker:text-blue-700">
            <li>
              <strong>Captures</strong> raw signals consistently (meetings, emails, news, campus trends)
            </li>
            <li>
              <strong>Synthesizes</strong> them into patterns over time (key collaborators,
              decisions, recurring themes)
            </li>
            <li>
              <strong>Retrieves</strong> the right context at the right moment &mdash; mention a
              colleague by name and the AI recalls your meeting history with that person, not
              every meeting you&rsquo;ve ever had
            </li>
          </ul>
          <p>
            Most people build the first piece and call it done. The second and third are where
            personal AI actually becomes useful.
          </p>
          <p>
            This page documents how I built that knowledge layer for myself: 46 automated jobs
            across nine model variants, a 201-node knowledge graph, 190 wiki pages, and a
            three-layer memory system. It&rsquo;s also a design pattern that could scale to
            thousands of staff at UC San Diego, giving every person a personal AI that
            understands their work world.
          </p>
          <div className="my-8 border-l-4 border-blue-600 bg-blue-50/60 pl-5 py-4 rounded-r-lg">
            <div className="text-xs uppercase tracking-[0.18em] text-blue-800 font-semibold mb-2">
              Why this matters now
            </div>
            <p className="text-slate-800 leading-7 mb-3">
              Every major research lab is converging on the same thing: a single app that turns
              chat into an agent, and uses <em>your context</em> &mdash; your memory, your files,
              your history &mdash; as the lock-in. Switch vendors and you lose it.
            </p>
            <p className="text-slate-800 leading-7">
              The approach on this page flips that. Knowledge lives in <em>my</em> filesystem, in
              open formats, under my control. Any model can plug into it; any model can be
              swapped out. The context layer is the moat &mdash; and it doesn&rsquo;t belong to
              the vendor.
            </p>
          </div>
          <p className="text-slate-900 font-semibold">
            The question isn&rsquo;t &ldquo;can AI do this?&rdquo; &mdash; it&rsquo;s &ldquo;how do
            you build the knowledge layer without handing your institutional memory to a
            vendor?&rdquo; This is my answer.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 3 — THREE LAYERS
          ====================================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          The Architecture
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          Three layers of context loading
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            A personal AI faces a brutal constraint: context windows are finite, institutional
            knowledge is not. You can&rsquo;t load everything &mdash; but loading nothing gives
            you a chatbot with your name bolted on.
          </p>
          <p>The architecture I settled on has three layers:</p>
        </div>

        <ThreeLayerDiagram />

        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            <strong className="text-slate-900">Layer 1 &mdash; Always Loaded.</strong> A small
            fixed set of files the agent reads on every interaction: identity, user profile,
            curated long-term memory, observed work patterns, today&rsquo;s and yesterday&rsquo;s
            memory. ~15&#8239;KB total, cheap to load, enough for the AI to respond as itself
            with 48-hour awareness. Without it, every conversation starts from zero.
          </p>
          <p>
            <strong className="text-slate-900">Layer 2 &mdash; Loaded on Trigger.</strong> When
            the conversation mentions a person, technology, decision, project, or trend, the
            agent proactively reads the matching wiki page. Mention a colleague and it reads{' '}
            <code className="text-[0.9em] bg-slate-100 px-1.5 py-0.5 rounded">wiki/people/{'{person-id}'}.md</code>.
            Mention a vendor and it reads{' '}
            <code className="text-[0.9em] bg-slate-100 px-1.5 py-0.5 rounded">wiki/tech-stack/{'{tool-id}'}.md</code>.
            Ask &ldquo;why did we go with X?&rdquo; and it scans{' '}
            <code className="text-[0.9em] bg-slate-100 px-1.5 py-0.5 rounded">wiki/decisions/</code>.
            This is the biggest unlock: 190 wiki pages that would otherwise sit unused become a
            live reference library, pulled in silently the moment they&rsquo;re relevant. It
            feels like the AI &ldquo;just knows,&rdquo; not like it&rsquo;s doing a lookup.
          </p>
          <p>
            <strong className="text-slate-900">Layer 3 &mdash; Loaded on Explicit Request.</strong>{' '}
            Deep-dive content &mdash; dated memory files, full transcripts, the raw knowledge
            graph &mdash; loaded only when you ask. &ldquo;What happened in Tuesday&rsquo;s
            meeting?&rdquo; pulls the specific file. &ldquo;Show me my full graph&rdquo; loads
            and analyzes the JSON. Rare but critical fallbacks.
          </p>
          <p className="text-slate-900 font-semibold border-l-4 border-blue-600 pl-5 py-2 bg-blue-50/50 rounded-r-lg">
            The key insight: context is a budget, not a pantry. You don&rsquo;t load
            everything; you load the right things at the right time.
          </p>
          <p>
            Most personal-AI projects skip Layer 2 entirely &mdash; they read a long profile doc
            and call it done. Without triggered retrieval, the system can only use what fits in
            the opening prompt. Layer 2 is how an accumulating wiki becomes live knowledge.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 4 — DAILY RHYTHM
          ====================================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          The Pipeline
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          The daily rhythm that builds the knowledge layer
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            46 cron jobs build the knowledge layer on a predictable daily rhythm. A typical
            weekday:
          </p>
        </div>

        <DailyRhythmClock />

        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            <strong className="text-slate-900">Morning accumulation (6&ndash;9 AM).</strong>{' '}
            Data-gathering crons. Calendar briefing pulls today&rsquo;s events. AI news digest
            runs web searches scored against the knowledge graph, so the &ldquo;news&rdquo; is
            actually relevant. Opportunity scan reads the graph and hunts for campus AI projects
            matching my priorities. Student pain signal monitor scrapes Reddit, the UCSD Guardian,
            and the campus status page for recurring issues. Wiki ingest reconciles the graph
            against the wiki and creates stub pages for high-weight entities that don&rsquo;t
            have one yet.
          </p>
          <p>
            <strong className="text-slate-900">Evening synthesis (5:30&ndash;7:35 PM).</strong>{' '}
            Evening wrap triages emails and drafts replies. Granola meeting debrief extracts
            commitments, sentiment, and undercurrents from today&rsquo;s transcripts. Daily
            reflection synthesizes everything into a narrative debrief. Context promotion moves
            the day&rsquo;s signals into long-term memory.
          </p>
          <p>
            <strong className="text-slate-900">Night consolidation (3:00 AM).</strong> A dreaming
            cron consolidates short-term memories into long-term, the way sleep does for humans.
          </p>
          <p>
            <strong className="text-slate-900">Weekly synthesis (Sunday 6 PM).</strong> Reads 7
            days of opportunity scans and pain signals, extracts cross-day trends, and promotes
            the strongest patterns to long-term memory. That&rsquo;s how &ldquo;VPN failed
            Monday&rdquo; + &ldquo;VPN failed Wednesday&rdquo; + &ldquo;VPN failed Friday&rdquo;
            becomes &ldquo;VPN is systemically broken this week.&rdquo;
          </p>
          <p className="text-slate-900 font-semibold">
            The rhythm is what turns a pile of raw files into institutional knowledge.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 5 — GRAPH + WIKI
          ====================================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          The Durable Layer
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          Knowledge graph + wiki: brain stem and cortex
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5">
          <p>Two durable stores anchor everything:</p>

          <div className="grid md:grid-cols-2 gap-5 my-6">
            <div className="rounded-2xl border border-blue-200 bg-blue-50/60 p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-blue-800 font-semibold mb-2">
                Knowledge Graph
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-2">201 nodes · 244 edges</div>
              <p className="text-sm text-slate-700 leading-6">
                Nodes: people, technologies, vendors, decisions, projects. Edges: relationships
                (&ldquo;meets_with,&rdquo; &ldquo;often_meets_with,&rdquo; &ldquo;uses&rdquo;).
                Every node has a weight and a meetingCount. Fast, shallow, relational &mdash;
                good at answering &ldquo;who works on X.&rdquo;
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-amber-900 font-semibold mb-2">
                Wiki
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-2">190 narrative pages</div>
              <p className="text-sm text-slate-700 leading-6">
                Markdown pages mirroring the highest-weight entities: people, tech-stack,
                decisions, projects, concepts. Slow, rich, narrative &mdash; good at answering
                &ldquo;why did we choose X.&rdquo;
              </p>
            </div>
          </div>

          <p>
            <strong className="text-slate-900">Reconciliation:</strong> when a graph node crosses
            a weight threshold, a wiki page is auto-created as a stub and enriched over time by
            meetings and manual edits. The wiki-ingest cron runs at 9 AM daily, creating up to 5
            new people pages and 5 new tech-stack pages per run &mdash; so even entities that
            never cross the &ldquo;2+ meetings in one day&rdquo; threshold eventually get
            promoted as meeting history accumulates.
          </p>
          <p>
            <strong className="text-slate-900">Dedup:</strong> the graph pulls from multiple
            sources (transcripts, calendar, manual edits), so duplicates creep in &mdash; the
            same person under &ldquo;First Last&rdquo; and &ldquo;Last, First,&rdquo; or a vendor
            under slight spelling variations. A periodic dedup pass merges them at the graph
            level.
          </p>
          <p>
            The wiki is also fed from outside the personal stream. A nightly sync mirrors 2,500+
            pages from nine institutional Confluence spaces &mdash; runbooks, team docs, service
            desk procedures, build &amp; release, AI governance. A second nightly sync pulls
            messages from scoped Microsoft Teams channels, so the agent sees the live
            conversations where decisions actually get made. &ldquo;Your work world&rdquo; is no
            longer just what you touch directly; it&rsquo;s what your org has written down and
            what your team is talking about right now.
          </p>
          <p className="text-slate-900 font-semibold border-l-4 border-amber-500 pl-5 py-2 bg-amber-50/50 rounded-r-lg">
            The graph is the brain stem &mdash; fast, shallow, relational. The wiki is the cortex
            &mdash; slow, rich, narrative. Together they&rsquo;re a cheap institutional memory
            system.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 5.5 — MODEL ALLOCATION
          ====================================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          The Inference Layer
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          Model allocation: matching jobs to capabilities
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            Different jobs need different models. A 30-second token-refresh check shouldn&rsquo;t
            run on the same model that drafts a weekly newsletter, and a deep architectural
            review needs reasoning depth a light monitor would waste. Each cron is routed to a
            model class that fits its work shape.
          </p>
          <p>
            As of April 30, 2026, <strong>45 of 46 enabled jobs run on{' '}
            <a
              href="https://tritonai.ucsd.edu/"
              className="font-semibold text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-blue-950"
            >
              TritonAI
            </a></strong> &mdash; UC San Diego&rsquo;s institutional AI gateway, hosted on-prem at
            the San Diego Supercomputer Center. One job stays on OpenAI Codex as a cross-provider
            canary. Nine model variants serve different roles:
          </p>
        </div>

        <div className="overflow-x-auto my-8 rounded-2xl border border-slate-200 bg-white/90 shadow-sm">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-3 text-left font-semibold text-slate-900">Tier</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">Model</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">Provider</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-900">Use</th>
                <th className="px-4 py-3 text-right font-semibold text-slate-900">Jobs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Light monitor</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-700">tritonai-haiku</td>
                <td className="px-4 py-3 text-slate-700">TritonAI · Claude Haiku 4.5</td>
                <td className="px-4 py-3 text-slate-700">Status checks, syncs, lightweight monitors</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-900">14</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Synthesis &amp; agentic</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-700">kimi-k2.5</td>
                <td className="px-4 py-3 text-slate-700">TritonAI · Moonshot Kimi K2.5</td>
                <td className="px-4 py-3 text-slate-700">Briefings, daily reflection, opportunity scan, newsletter</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-900">9</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Single-shot agentic</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-700">gpt-oss-120b</td>
                <td className="px-4 py-3 text-slate-700">TritonAI · OpenAI gpt-oss 120B</td>
                <td className="px-4 py-3 text-slate-700">Audits, scans, candidate selection</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-900">7</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Long-form generation</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-700">mistral-large-3</td>
                <td className="px-4 py-3 text-slate-700">TritonAI · Mistral Large 3 675B</td>
                <td className="px-4 py-3 text-slate-700">LinkedIn drafts, weekly audits, wiki ingest</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-900">5</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Mid-tier multimodal</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-700">gemma-4</td>
                <td className="px-4 py-3 text-slate-700">TritonAI · Gemma 4 26B</td>
                <td className="px-4 py-3 text-slate-700">Meeting debriefs, relationship checks</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-900">3</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Heavy reasoning</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-700">tritonai-opus</td>
                <td className="px-4 py-3 text-slate-700">TritonAI · Claude Opus 4.7</td>
                <td className="px-4 py-3 text-slate-700">Architecture review, weekly deep-dive</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-900">3</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Fastest light monitor</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-700">tritonai-mistral-small</td>
                <td className="px-4 py-3 text-slate-700">TritonAI · Mistral Small 3.2</td>
                <td className="px-4 py-3 text-slate-700">High-frequency checks (token refresh, health)</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-900">3</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-slate-900">Provider diversity</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-700">tritonai-nemotron-instant</td>
                <td className="px-4 py-3 text-slate-700">TritonAI · NVIDIA Nemotron 3 Super 120B</td>
                <td className="px-4 py-3 text-slate-700">Weekly backlog prune</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-900">1</td>
              </tr>
              <tr className="bg-amber-50/40">
                <td className="px-4 py-3 font-semibold text-slate-900">Cross-provider canary</td>
                <td className="px-4 py-3 font-mono text-xs text-slate-700">codex</td>
                <td className="px-4 py-3 text-slate-700">OpenAI Codex · gpt-5.5</td>
                <td className="px-4 py-3 text-slate-700">Provider-quota-monitor (only)</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-900">1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            <strong className="text-slate-900">Why TritonAI as primary:</strong> the gateway runs
            on-prem, supports multi-provider routing through LiteLLM Enterprise, and a raised
            institutional quota means cron-driven workloads aren&rsquo;t competing against
            personal-tier API limits. It also matches the platform pattern I&rsquo;m advocating
            for campus &mdash; eat your own cooking.
          </p>
          <p>
            <strong className="text-slate-900">Why a cross-provider canary:</strong> if every job
            runs through the same provider and that provider has an outage, every job silently
            falls back to the same emergency model and the failure becomes invisible. One job
            kept on a different provider acts as the smoke detector. <code className="text-[0.9em] bg-slate-100 px-1.5 py-0.5 rounded">provider-quota-monitor</code>{' '}
            stays on OpenAI Codex specifically so it can detect TritonAI-wide problems from
            outside.
          </p>
          <p>
            <strong className="text-slate-900">How models get matched:</strong> each cron declares
            an alias (e.g.{' '}
            <code className="text-[0.9em] bg-slate-100 px-1.5 py-0.5 rounded">kimi-k2.5</code>);
            the gateway resolves the alias to a provider/model path. Rebalancing &mdash; e.g.,
            moving the LinkedIn-post crons from one model to another &mdash; is a one-line config
            change, not a code change. The architecture is intentionally provider-agnostic; the
            point is that no specific model in the table above is load-bearing.
          </p>
          <p className="text-slate-900 font-semibold border-l-4 border-blue-600 pl-5 py-2 bg-blue-50/50 rounded-r-lg">
            Provider lock-in is the moat AI vendors want. Aliases plus a multi-provider gateway
            keep that moat from forming around your automation.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 6 — OUTCOMES & VALUE
          ====================================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          Outcomes &amp; Value
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          What this actually does
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl mb-10">
          <p>
            Building this was the hard part. Using it is where it pays off. What the ecosystem
            delivers today, the value it generates, and what else becomes possible once the
            foundation is in place.
          </p>
        </div>

        {/* --- What it does today --- */}
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-[0.18em] text-blue-800 font-semibold mb-5 pb-2 border-b border-slate-200">
            What it does today
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Daily briefings, delivered automatically</div>
              <p className="text-sm text-slate-700 leading-6">
                Calendar + email summary at 6:25 AM. AI news digest filtered through my
                priorities at 6:35. Opportunity scan of higher-ed AI projects at 7:00. Campus
                pain signals from forums and status pages at 7:30. All waiting before I open a
                laptop.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Meeting intelligence after every meeting</div>
              <p className="text-sm text-slate-700 leading-6">
                Transcripts processed for commitments (who promised what), sentiment (how people
                felt), participation patterns (who dominated, who stayed quiet), and
                undercurrents (what was implied but not said). Searchable across a 14-month
                corpus.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Weekly trend synthesis</div>
              <p className="text-sm text-slate-700 leading-6">
                A Sunday cron reads 7 days of signals and extracts patterns: which opportunities
                recurred, which pain points became systemic, which themes faded. The strongest
                get promoted to long-term memory.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Real-time conversational context</div>
              <p className="text-sm text-slate-700 leading-6">
                When I message the agent on Telegram, it loads long-term memory, work patterns,
                the last 48 hours, and pulls in wiki pages for any person, technology, or
                decision I mention. Feels like it just knows.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Auto-published public artifacts</div>
              <p className="text-sm text-slate-700 leading-6">
                The weekly UCSD AI newsletter auto-generates and publishes to{' '}
                <a href="/ucsd-ai-news" className="font-semibold text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-600">/ucsd-ai-news</a>.
                The personal AI digest auto-publishes daily to{' '}
                <a href="/ai-digest" className="font-semibold text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-600">/ai-digest</a>.
                The knowledge framework documents itself &mdash; you&rsquo;re reading that output right now.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Cross-session continuity</div>
              <p className="text-sm text-slate-700 leading-6">
                Decisions made in conversation write back to the wiki. Observed patterns write
                to a patterns file. The framework is bidirectional &mdash; read for context,
                write for continuity. Future sessions inherit what present sessions learn.
              </p>
            </div>
          </div>
        </div>

        {/* --- The value delivered --- */}
        <div className="mb-12">
          <h3 className="text-xs uppercase tracking-[0.18em] text-emerald-800 font-semibold mb-5 pb-2 border-b border-slate-200">
            The value delivered
          </h3>
          <ul className="space-y-5 max-w-3xl">
            <li className="flex gap-4 items-start">
              <span className="flex-none mt-1 w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-sm">
                1
              </span>
              <div>
                <div className="text-slate-900 font-semibold mb-1">Time saved: 2&ndash;3 hours per week</div>
                <p className="text-sm text-slate-700 leading-6">
                  Research, meeting prep, email triage, news scanning, and follow-up tracking
                  used to eat several hours a week. The crons do the gathering; I do the
                  judgment. That time gets reclaimed for actual decisions.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none mt-1 w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-sm">
                2
              </span>
              <div>
                <div className="text-slate-900 font-semibold mb-1">Pattern recognition I&rsquo;d otherwise miss</div>
                <p className="text-sm text-slate-700 leading-6">
                  Daily reports don&rsquo;t tell you the VPN failed 5 of 7 days last week. The
                  weekly synthesis does. The graph shows who I actually meet with most &mdash;
                  not who I think I meet with most. Data surfaces patterns intuition can&rsquo;t.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none mt-1 w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-sm">
                3
              </span>
              <div>
                <div className="text-slate-900 font-semibold mb-1">Institutional memory, not just personal memory</div>
                <p className="text-sm text-slate-700 leading-6">
                  Decisions, architectural choices, vendor evaluations, and their reasoning are
                  preserved. &ldquo;Why did we pick this over that?&rdquo; has an answer. So
                  does &ldquo;when did we last discuss X?&rdquo; Memory persists across
                  sessions, weeks, and staff changes.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none mt-1 w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-sm">
                4
              </span>
              <div>
                <div className="text-slate-900 font-semibold mb-1">Never starting from zero</div>
                <p className="text-sm text-slate-700 leading-6">
                  Every conversation begins with 48 hours of recent context, curated long-term
                  memory, and triggered wiki lookups. I don&rsquo;t re-explain my world each
                  time I ask a question, and the agent doesn&rsquo;t need reminding who the key
                  people and projects are.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="flex-none mt-1 w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 font-bold flex items-center justify-center text-sm">
                5
              </span>
              <div>
                <div className="text-slate-900 font-semibold mb-1">Opportunities surfaced proactively</div>
                <p className="text-sm text-slate-700 leading-6">
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
          <h3 className="text-xs uppercase tracking-[0.18em] text-amber-800 font-semibold mb-5 pb-2 border-b border-slate-200">
            What else becomes possible
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Meeting prep automation</div>
              <p className="text-sm text-slate-700 leading-6">
                Before every meeting, auto-compile attendee wiki pages, recent interactions,
                open commitments, relevant decisions, and a one-page prep doc. No more walking
                in cold.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Proactive nudges</div>
              <p className="text-sm text-slate-700 leading-6">
                The agent notices patterns without being asked. &ldquo;This problem has come up
                three weeks in a row &mdash; here are the options you&rsquo;ve already explored.&rdquo;
                &ldquo;This person has asked about the same thing five times &mdash; worth a
                1:1?&rdquo;
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Draft-first communications</div>
              <p className="text-sm text-slate-700 leading-6">
                Emails, memos, and responses drafted in my voice using my actual context. Not
                generic AI writing &mdash; contextual writing grounded in what I&rsquo;ve said
                and decided before. Review beats drafting from scratch.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Decision archaeology</div>
              <p className="text-sm text-slate-700 leading-6">
                &ldquo;Why did we pick this architecture two years ago?&rdquo; &mdash; immediate
                answer with the full reasoning, the voices that disagreed, and the tradeoffs
                considered. No more Slack/email archaeology.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Self-monitoring system health</div>
              <p className="text-sm text-slate-700 leading-6">
                The agent notices when data sources go stale, crons degrade, or the knowledge
                layer has gaps. Self-monitoring becomes self-repairing &mdash; the system
                maintains itself instead of waiting for a human to notice.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Domain-aware research</div>
              <p className="text-sm text-slate-700 leading-6">
                Instead of &ldquo;search the web,&rdquo; the agent does &ldquo;search filtered
                through what I care about, scored against my graph, synthesized with what I
                already know.&rdquo; Research becomes targeted, not exhaustive.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ======================================================================
          SECTION 7 — SCALING VISION
          ====================================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          The Vision
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          Scaling to UC San Diego
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            Everything above is one person&rsquo;s implementation. The interesting question:
            what if every UCSD staff member had one?
          </p>
          <div className="my-6 border-l-4 border-blue-700 bg-blue-50 pl-5 py-4 rounded-r-lg">
            <div className="text-xs uppercase tracking-[0.18em] text-blue-800 font-semibold mb-2">
              Privacy is the precondition
            </div>
            <p className="text-slate-800 leading-7">
              This only scales if privacy scales with it. Personal data never leaves the personal
              agent. Each tier above is opt-in, anonymized, or aggregate-only &mdash; never
              individual records flowing upward. Without that guarantee at every level, nothing
              ships.
            </p>
          </div>
        </div>

        <ScalingPyramid />

        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            <strong className="text-slate-900">Personal &mdash; the foundation.</strong> Every
            staff member gets their own agent, memory, wiki, and crons. Data never leaves their
            agent. This is proven &mdash; it works for one person, and the architecture is
            replicable. The hard part isn&rsquo;t the technology; it&rsquo;s the deployment
            pattern: dedicated runtime, isolated data store, and a governance model that says
            &ldquo;this is yours, private by default.&rdquo;
          </p>
          <p>
            <strong className="text-slate-900">Team &mdash; opt-in sharing, not opt-out.</strong>{' '}
            Team members choose what to share. The team wiki is visible to all members; 1:1s and
            personal notes stay private. Nothing crosses the boundary automatically. This is
            where governance gets interesting: who decides what&rsquo;s shared, how do you
            handle a team member leaving, and how do you prevent context from leaking between
            people.
          </p>
          <p>
            <strong className="text-slate-900">Department &mdash; anonymized aggregates only.</strong>{' '}
            At WTS or Academic Technology Services, the useful view is patterns, not records.
            &ldquo;Trending pain points this week&rdquo; or &ldquo;which vendors are we all
            evaluating&rdquo; &mdash; no individual data, just signals that emerge from many
            agents, the way public health surveillance works. Individual identity is stripped
            before aggregation; the dashboard never shows who said what.
          </p>
          <p>
            <strong className="text-slate-900">Campus &mdash; statistical patterns only.</strong>{' '}
            TritonAI provides campus-wide AI services. The missing piece is connective tissue:
            aggregate department patterns up to institutional insights. Which departments
            struggle with the same vendor, which AI use cases are converging, what decisions
            would help everyone. This tier only ever sees statistical patterns &mdash; never
            individual records, never attributable content.
          </p>
          <p>
            The tech mostly exists. The governance doesn&rsquo;t. Sharing boundaries have to be
            first-class features, not bolt-ons &mdash; and campus data stewardship has to be
            comfortable with the model before anything scales beyond the personal tier.
          </p>
          <p>
            <strong className="text-slate-900">Proven vs. speculative:</strong> the personal
            layer works; I use it daily. Team, department, and campus layers are design
            exercises, not shipped code. The pattern is there; the architecture is a starting
            point, not a finished product.
          </p>
          <p className="text-slate-900 font-semibold border-l-4 border-blue-600 pl-5 py-2 bg-blue-50/50 rounded-r-lg">
            The real question isn&rsquo;t &ldquo;can we do this?&rdquo; &mdash; it&rsquo;s
            &ldquo;what would it take to do it responsibly, at scale, in a way a 30,000-employee
            university can actually adopt without violating anyone&rsquo;s privacy along the
            way?&rdquo; That&rsquo;s a design + governance + procurement project, not just a
            technology one. Worth having the conversation now, while the personal-AI space is
            still small enough to shape intentionally.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 7 — EVOLUTION / CHANGELOG
          ====================================================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          Evolution
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          This architecture isn&rsquo;t done
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 mb-8">
          <p>
            It&rsquo;s a living system, updated continuously. Some of what&rsquo;s on this page
            will be obsolete in six months &mdash; that&rsquo;s the point. Every change is in
            the git history of my{' '}
            <a
              href="https://github.com/bpollak/mission-control"
              className="font-semibold text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-blue-950"
            >
              mission-control repo
            </a>
            ; highlights below for quick reference.
          </p>
        </div>

        <ol className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-0.5 before:bg-slate-200 pl-8">
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-blue-700 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-blue-800 font-semibold mb-1">
              April 30, 2026
            </div>
            <div className="text-slate-900 font-semibold mb-1">Codex deprecation handled · all-TritonAI achieved · cron tuning</div>
            <p className="text-sm text-slate-600 leading-6">
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
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-blue-700 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-blue-800 font-semibold mb-1">
              April 29, 2026
            </div>
            <div className="text-slate-900 font-semibold mb-1">OpenRouter dependency dropped · OpenClaw upgraded to 2026.4.27</div>
            <p className="text-sm text-slate-600 leading-6">
              Migrated 9 remaining OpenRouter-paid jobs onto TritonAI (light monitors to{' '}
              <span className="font-mono text-xs">tritonai-haiku</span>; weekly deep-dive to{' '}
              <span className="font-mono text-xs">tritonai-opus</span> &mdash; Claude Opus 4.7 on
              raised institutional quota). Zero jobs on OpenRouter post-migration. Upgraded the
              OpenClaw runtime from 2026.4.23 to 2026.4.27 (skipping the 2026.4.24 bonjour-broken
              release) for cron correctness improvements, OpenAI-compatible empty-response retry,
              and mixed-version safety. Ran <span className="font-mono text-xs">openclaw security
              audit</span> &mdash; chmod 600 on the config file fixed a critical world-readable
              finding.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-blue-700 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-blue-800 font-semibold mb-1">
              April 28, 2026
            </div>
            <div className="text-slate-900 font-semibold mb-1">31-job migration to TritonAI open-weight models</div>
            <p className="text-sm text-slate-600 leading-6">
              UCSD raised the TritonAI virtual-key budget. Migrated 31 cron jobs from a mixed
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
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-blue-700 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-blue-800 font-semibold mb-1">
              April 26, 2026
            </div>
            <div className="text-slate-900 font-semibold mb-1">Graph stability + steady wiki growth</div>
            <p className="text-sm text-slate-600 leading-6">
              Knowledge layer wiki coverage expanded from 185 to 189 narrative pages, bringing greater depth to the durable layer. Enabled automated jobs grew to 46 (from 40+), adding more coverage to the daily pipeline.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-blue-700 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-blue-800 font-semibold mb-1">
              April 24, 2026
            </div>
            <div className="text-slate-900 font-semibold mb-1">Citizen developer framework + accessibility audit + new monitoring crons</div>
            <p className="text-sm text-slate-600 leading-6">
              Knowledge layer crossed 179 graph nodes and 185 wiki pages (up from 163/111 nine
              days earlier &mdash; a +67% jump in wiki coverage as graph-to-wiki reconciliation
              caught up with accumulated entities). Two new crons: a daily{' '}
              <span className="font-mono text-xs">tritonai-model-hub-snapshot</span> that diffs
              UCSD&rsquo;s LLM gateway model catalog week-over-week into the Monday newsletter,
              and a Friday{' '}
              <span className="font-mono text-xs">backlog-completion-scan</span> that
              cross-references backlog tasks against the week&rsquo;s meetings, debriefs, and
              sent mail to flag probable completions. Mission Control gained an Accessibility
              Audit screen surfacing vendor accessibility statements across 150 enterprise
              systems. New wiki page: TritonAI AI Initiative Readiness Copilot.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-blue-700 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-blue-800 font-semibold mb-1">
              April 15, 2026
            </div>
            <div className="text-slate-900 font-semibold mb-1">Hybrid AI digest sourcing</div>
            <p className="text-sm text-slate-600 leading-6">
              Replaced flaky generic web search with a hybrid pipeline: 14 curated RSS feeds
              (AI labs, arXiv, higher-ed tech publications) pulled fresh at 6&nbsp;AM, plus
              site-scoped searches across major outlets (NYT, Bloomberg, WSJ, Wired, Ars
              Technica, TechCrunch). Added a fallback so the digest produces real content even
              when search APIs are offline, and loosened the diversity gate so digests reliably
              surface 5&ndash;7 articles.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-blue-700 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-blue-800 font-semibold mb-1">
              April 14, 2026
            </div>
            <div className="text-slate-900 font-semibold mb-1">Team chat ingestion + weekly deep-dive</div>
            <p className="text-sm text-slate-600 leading-6">
              Added Microsoft Teams channel sync via MS Graph delegated scopes &mdash; scoped
              to high-signal channels, noise-filtered, chmod-600 on disk. New Sunday 2&nbsp;PM
              deep-research cron picks one significant AI development each week and produces a
              600&ndash;1000 word multi-source brief, separate from daily headlines.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-blue-700 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-blue-800 font-semibold mb-1">
              April 12, 2026
            </div>
            <div className="text-slate-900 font-semibold mb-1">Confluence integration (hybrid)</div>
            <p className="text-sm text-slate-600 leading-6">
              Added the institutional Confluence wiki as a sixth data source. A nightly 4&nbsp;AM
              cron mirrors 2,500+ pages from nine UCSD ITS spaces (AI Hub, WTS, BIA, Service
              Desk KB, Endpoint Management, Hybrid Cloud, Enterprise Architecture, Build &amp;
              Release, CI Ops) into local cache, and an Atlassian MCP server handles realtime
              search. Wiki-ingest&rsquo;s strategic-doc scanner auto-promotes high-signal pages
              into Layer 2 nightly.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-blue-800 font-semibold mb-1">
              April 12, 2026
            </div>
            <div className="text-slate-900 font-semibold mb-1">Knowledge promotion pipeline fixes</div>
            <p className="text-sm text-slate-600 leading-6">
              Repaired broken daily-reflection and context-promotion crons (timeouts bumped to
              600s). Deduped 46 reversed-name person nodes (183&nbsp;&rarr;&nbsp;163). Added
              weekly-signal-synthesis cron for cross-day trends. Enhanced wiki-ingest with
              graph-to-wiki reconciliation and strategic-doc scanning. Documented three-layer
              context loading in AGENTS.md. Restructured MEMORY.md into 12 named sections.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-blue-800 font-semibold mb-1">
              April 11, 2026
            </div>
            <div className="text-slate-900 font-semibold mb-1">Model migration off Anthropic + Ollama</div>
            <p className="text-sm text-slate-600 leading-6">
              Migrated all 32 cron jobs off Anthropic Claude and local Ollama (quota and timeout
              issues). New allocation: Tier A (OpenAI gpt-5.4) for code and reasoning, Tier B
              (Google gemini-3.1-pro) for analysis, Tier C (gpt-5.4-mini) for fast monitors.
              Fallback: codex &rarr; codex-mini &rarr; gemini &rarr; gemini-flash-lite. Added a
              provider-quota-monitor cron every 30 min.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-blue-400 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-blue-800 font-semibold mb-1">
              Earlier 2026
            </div>
            <div className="text-slate-900 font-semibold mb-1">Graph + wiki established</div>
            <p className="text-sm text-slate-600 leading-6">
              Built the initial knowledge graph from a 577-meeting transcript corpus (Feb
              2025&ndash;Apr 2026). Set up daily crons for calendar briefings, AI news,
              opportunity scanning, and meeting debriefs. Added the wiki structure with
              SCHEMA.md and initial people/tech/decision pages.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-slate-300 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-slate-500 font-semibold mb-1">
              Future
            </div>
            <div className="text-slate-900 font-semibold mb-1">Team-level agents and beyond</div>
            <p className="text-sm text-slate-600 leading-6">
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
      <section className="max-w-6xl mx-auto px-6 pb-24 pt-8 border-t border-slate-200 space-y-5">
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-5">
          <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-2">
            Built on
          </div>
          <p className="text-sm text-slate-700 leading-7">
            The foundation of this ecosystem is{' '}
            <a
              href="https://openclaw.ai"
              className="font-semibold text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-blue-950"
            >
              OpenClaw
            </a>
            {' '}&mdash; a personal AI assistant framework providing the cron scheduler, agent
            runtime, Telegram integration, multi-model gateway, and plugin SDK the pipeline runs
            on. What you see here isn&rsquo;t OpenClaw out of the box; it&rsquo;s OpenClaw
            tailored, extended, and reshaped over many months to fit a specific work context.
            The accumulation pipeline, knowledge graph reconciliation, three-layer context
            loading, and scaling vision all layer on top of that foundation. Without OpenClaw
            as the starting point, none of this would have shipped.
          </p>
        </div>
        <p className="text-sm text-slate-500 leading-7">
          This page is hand-maintained, not auto-generated. Metrics are as-of snapshots &mdash;
          the number of nodes, pages, and crons changes as the system evolves. For the live state,
          see{' '}
          <a
            href="https://github.com/bpollak/mission-control"
            className="font-semibold text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-blue-950"
          >
            github.com/bpollak/mission-control
          </a>
          . Questions, ideas, or corrections? Get in touch via the{' '}
          <a
            href="/contact"
            className="font-semibold text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-blue-950"
          >
            contact page
          </a>
          .
        </p>
      </section>
    </main>
  );
}
