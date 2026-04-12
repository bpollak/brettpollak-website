import type { Metadata } from 'next';
import HeroPipelineDiagram from '@/components/ai-architecture/HeroPipelineDiagram';
import ThreeLayerDiagram from '@/components/ai-architecture/ThreeLayerDiagram';
import DailyRhythmClock from '@/components/ai-architecture/DailyRhythmClock';
import ScalingPyramid from '@/components/ai-architecture/ScalingPyramid';

export const metadata: Metadata = {
  title: 'AI Agent Architecture | Brett Pollak',
  description:
    'How I architected a personal AI assistant that actually knows me — and a vision for scaling personal agents across UC San Diego. 30+ automated jobs, a 163-node knowledge graph, 105 wiki pages, and a three-layer memory system.',
  alternates: {
    canonical: '/ai-agent-architecture',
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
          Here&rsquo;s how I architected a personal assistant that does &mdash; and a vision for
          scaling the pattern across UC San Diego.
        </p>
        <p className="text-sm text-slate-500 mb-10">
          Last updated: April 12, 2026 &middot; This page evolves as the architecture evolves.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Automated jobs</div>
            <div className="text-2xl font-bold text-slate-900">30+ cron jobs</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Durable memory</div>
            <div className="text-2xl font-bold text-slate-900">163 nodes · 105 pages</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
            <div className="text-sm uppercase tracking-[0.18em] text-slate-400 font-semibold mb-2">Context loading</div>
            <div className="text-2xl font-bold text-slate-900">3 memory layers</div>
          </div>
        </div>

        <HeroPipelineDiagram />

        <p className="text-sm text-slate-500 italic max-w-3xl">
          The pipeline in one glance: raw signals flow left to right through accumulation crons,
          synthesis crons, and into the durable knowledge layer &mdash; where the interactive agent
          pulls them back out at the moment of conversation.
        </p>
      </section>

      {/* ======================================================================
          SECTION 2 — THE PROBLEM
          ====================================================================== */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          The Problem
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          Why generic AI isn&rsquo;t enough
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5">
          <p>
            Ask any stock chatbot &ldquo;who should I follow up with this week?&rdquo; and
            you&rsquo;ll get a generic list of productivity advice. Ask one that actually knows
            you &mdash; who&rsquo;s been in your meetings, what you committed to last Tuesday,
            what&rsquo;s trending on campus &mdash; and you get something useful.
          </p>
          <p>
            The gap between those two experiences isn&rsquo;t about model intelligence. The big
            models are already smart enough. The gap is about <strong>knowledge</strong>: the AI
            needs to know your world, and it needs to know it at the right moment.
          </p>
          <p>
            Most personal-AI projects stop at the obvious integrations: &ldquo;connect to my
            email, read my calendar.&rdquo; That&rsquo;s table stakes. It answers &ldquo;what&rsquo;s
            on my calendar&rdquo; but not &ldquo;what does this meeting mean in the context of the
            project I&rsquo;ve been driving for six months.&rdquo;
          </p>
          <p>
            The hard problem isn&rsquo;t connecting the data sources. It&rsquo;s building a
            knowledge layer on top of them &mdash; a system that:
          </p>
          <ul className="space-y-2 pl-5 list-disc marker:text-blue-700">
            <li>
              <strong>Captures</strong> raw signals consistently (meetings, emails, news, campus trends)
            </li>
            <li>
              <strong>Synthesizes</strong> them into patterns over time (who are your key
              collaborators, what have you decided, what&rsquo;s recurring)
            </li>
            <li>
              <strong>Retrieves</strong> the right context at the right moment &mdash; when you
              mention a colleague by name, the AI remembers your meeting history with that person,
              not every meeting you&rsquo;ve ever had
            </li>
          </ul>
          <p>
            Most people build the first piece and call it done. The second and third pieces are
            where personal AI actually becomes useful.
          </p>
          <p>
            This page documents how I built that knowledge layer for myself: 30+ automated jobs,
            a 163-node knowledge graph, 105 wiki pages, and a three-layer memory system. It&rsquo;s
            one working implementation &mdash; but it&rsquo;s also a design pattern I think could
            scale to thousands of staff at UC San Diego, giving every person a personal AI that
            understands their specific work world.
          </p>
          <p className="text-slate-900 font-semibold">
            The question isn&rsquo;t &ldquo;can AI do this?&rdquo; &mdash; it&rsquo;s &ldquo;how do
            you build the knowledge layer that makes it possible?&rdquo; This is my answer.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 3 — THREE LAYERS
          ====================================================================== */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          The Architecture
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          Three layers of context loading
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            A personal AI faces a brutal constraint: context windows are finite, but your
            institutional knowledge is not. You can&rsquo;t load everything. But you also
            can&rsquo;t afford to load nothing &mdash; an AI without context is just a chatbot
            with your name bolted on.
          </p>
          <p>The architecture I settled on has three layers:</p>
        </div>

        <ThreeLayerDiagram />

        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            <strong className="text-slate-900">Layer 1 &mdash; Always Loaded.</strong> A small,
            fixed set of files the agent reads on every interaction: identity, user profile,
            curated long-term memory, observed work patterns, today&rsquo;s memory, and
            yesterday&rsquo;s memory. Call it the &ldquo;personality and recent context&rdquo;
            baseline. It&rsquo;s ~15&#8239;KB total, cheap to load, and gives the AI enough to
            respond as itself with 48-hour awareness. Without this layer, every conversation
            starts from zero.
          </p>
          <p>
            <strong className="text-slate-900">Layer 2 &mdash; Loaded on Trigger.</strong> When
            the conversation mentions a person, technology, decision, project, or trend, the
            agent proactively reads the matching wiki page before responding. Mention a colleague
            by name and the agent reads{' '}
            <code className="text-[0.9em] bg-slate-100 px-1.5 py-0.5 rounded">wiki/people/{'{person-id}'}.md</code>.
            Mention a technology or vendor and it reads{' '}
            <code className="text-[0.9em] bg-slate-100 px-1.5 py-0.5 rounded">wiki/tech-stack/{'{tool-id}'}.md</code>.
            Ask &ldquo;why did we go with X?&rdquo; and it scans{' '}
            <code className="text-[0.9em] bg-slate-100 px-1.5 py-0.5 rounded">wiki/decisions/</code>{' '}
            for a matching entry. This is the biggest unlock in the whole architecture: 105 wiki
            pages that would otherwise sit unused become a live reference library, pulled in
            silently the moment they&rsquo;re relevant. The knowledge feels like the AI
            &ldquo;just knows,&rdquo; not like it&rsquo;s performing a lookup.
          </p>
          <p>
            <strong className="text-slate-900">Layer 3 &mdash; Loaded on Explicit Request.</strong>{' '}
            Deep-dive content &mdash; specific dated memory files, full transcripts, raw knowledge
            graph &mdash; loaded only when you ask. &ldquo;What happened in Tuesday&rsquo;s
            meeting?&rdquo; pulls the specific memory file. &ldquo;Show me my full
            graph&rdquo; loads and analyzes the JSON. These are rare but critical fallbacks.
          </p>
          <p className="text-slate-900 font-semibold border-l-4 border-blue-600 pl-5 py-2 bg-blue-50/50 rounded-r-lg">
            The key insight: context is a budget, not a pantry. You don&rsquo;t load
            everything; you load the right things at the right time.
          </p>
          <p>
            Most personal-AI projects skip Layer 2 entirely. Their &ldquo;AI&rdquo; reads a long
            profile document and calls it done. But without triggered retrieval, the system can
            only use what fits in the opening prompt. Layer 2 is how you turn an accumulating
            wiki into live knowledge.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 4 — DAILY RHYTHM
          ====================================================================== */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          The Pipeline
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          The daily rhythm that builds the knowledge layer
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            The knowledge layer is built by 30+ cron jobs running on a predictable daily rhythm.
            Here&rsquo;s what a typical weekday looks like:
          </p>
        </div>

        <DailyRhythmClock />

        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            <strong className="text-slate-900">Morning accumulation (6&ndash;9 AM).</strong> The
            day starts with data-gathering crons. Calendar briefing pulls today&rsquo;s events. AI
            news digest runs web searches scored against the knowledge graph &mdash; so the
            &ldquo;news&rdquo; is actually relevant. Opportunity scan reads the graph and hunts
            for campus AI projects that match my priorities. Student pain signal monitor scrapes
            Reddit, the UCSD Guardian, and the campus status page for recurring issues. Wiki
            ingest reconciles the knowledge graph against the wiki &mdash; creates stub pages for
            any high-weight entities that don&rsquo;t have one yet.
          </p>
          <p>
            <strong className="text-slate-900">Evening synthesis (5:30&ndash;7:35 PM).</strong>{' '}
            The day ends with synthesis. Evening wrap triages emails and drafts replies. Granola
            meeting debrief extracts commitments, sentiment, and undercurrents from today&rsquo;s
            transcripts. Daily reflection synthesizes everything into a narrative debrief.
            Context promotion moves the day&rsquo;s signals into long-term memory.
          </p>
          <p>
            <strong className="text-slate-900">Night consolidation (3:00 AM).</strong> A dreaming
            cron consolidates short-term memories into long-term, the way sleep consolidates
            human memory.
          </p>
          <p>
            <strong className="text-slate-900">Weekly synthesis (Sunday 6 PM).</strong> A weekly
            cron reads 7 days of opportunity scans and pain signals, extracts cross-day trends,
            and promotes the strongest patterns to long-term memory. That&rsquo;s how
            &ldquo;VPN failed on Monday&rdquo; + &ldquo;VPN failed on Wednesday&rdquo; +
            &ldquo;VPN failed on Friday&rdquo; becomes &ldquo;VPN is systemically broken this
            week &mdash; here&rsquo;s what you should know.&rdquo;
          </p>
          <p className="text-slate-900 font-semibold">
            The rhythm is what turns a pile of raw files into institutional knowledge.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 5 — GRAPH + WIKI
          ====================================================================== */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
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
              <div className="text-2xl font-bold text-slate-900 mb-2">163 nodes · 195 edges</div>
              <p className="text-sm text-slate-700 leading-6">
                Nodes are people, technologies, vendors, decisions, projects. Edges are
                relationships (&ldquo;meets_with,&rdquo; &ldquo;often_meets_with,&rdquo;
                &ldquo;uses&rdquo;). Every node has a weight and a meetingCount. Fast, shallow,
                relational &mdash; good at answering &ldquo;who works on X.&rdquo;
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-amber-900 font-semibold mb-2">
                Wiki
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-2">105 narrative pages</div>
              <p className="text-sm text-slate-700 leading-6">
                Markdown pages mirroring the highest-weight entities from the graph. People,
                tech-stack, decisions, projects, concepts. Slow, rich, narrative &mdash; good at
                answering &ldquo;why did we choose X.&rdquo;
              </p>
            </div>
          </div>

          <p>
            <strong className="text-slate-900">Reconciliation:</strong> when a graph node crosses
            a weight threshold, a wiki page is auto-created with a stub. The stub gets enriched
            over time by further meetings and manual edits. The daily wiki-ingest cron runs this
            check every morning at 9 AM &mdash; it creates up to 5 new people pages and 5 new
            tech-stack pages per run, so even people who never cross the &ldquo;2+ meetings in one
            day&rdquo; threshold eventually get promoted to durable storage as their meeting
            history accumulates.
          </p>
          <p>
            <strong className="text-slate-900">Dedup:</strong> the graph is updated from multiple
            sources (meeting transcripts, calendar, manual edits) so duplicate nodes creep in
            &mdash; the same person appearing under both &ldquo;First Last&rdquo; and
            &ldquo;Last, First&rdquo; name formats, or the same vendor under slight spelling
            variations. A periodic dedup pass merges these at the graph level so the wiki
            stays clean.
          </p>
          <p className="text-slate-900 font-semibold border-l-4 border-amber-500 pl-5 py-2 bg-amber-50/50 rounded-r-lg">
            The graph is the brain stem &mdash; fast, shallow, relational. The wiki is the cortex
            &mdash; slow, rich, narrative. Together they&rsquo;re a cheap institutional memory
            system.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 6 — OUTCOMES & VALUE
          ====================================================================== */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          Outcomes &amp; Value
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          What this actually does
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl mb-10">
          <p>
            Building this was the hard part. Using it is where it pays off. Here&rsquo;s what the
            ecosystem actually delivers today, what value it generates, and what else becomes
            possible once the foundation is in place.
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
                priorities at 6:35. A daily opportunity scan of higher-ed AI projects at 7:00.
                Campus pain signals scraped from forums and status pages at 7:30. All waiting
                before I open a laptop.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Meeting intelligence after every meeting</div>
              <p className="text-sm text-slate-700 leading-6">
                Meeting transcripts are processed for commitments (who promised what), sentiment
                (how people actually felt), participation patterns (who dominated, who stayed
                quiet), and undercurrents (what was implied but not said). Searchable across a
                14-month corpus.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Weekly trend synthesis</div>
              <p className="text-sm text-slate-700 leading-6">
                A Sunday cron reads the last 7 days of daily signals and extracts patterns: which
                opportunities kept recurring, which pain points became systemic, which themes
                faded. The strongest patterns are promoted to long-term memory.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Real-time conversational context</div>
              <p className="text-sm text-slate-700 leading-6">
                When I message the agent on Telegram, it loads my long-term memory, my work
                patterns, the last 48 hours, and proactively pulls in wiki pages for any person,
                technology, or decision I mention. Feels like it just knows.
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
                Decisions made in conversation get written back to the wiki. Patterns the agent
                observes get written to a patterns file. The framework is bidirectional &mdash;
                read for context, write for continuity. Future sessions inherit what present
                sessions learn.
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
                  Manual research, meeting prep, email triage, news scanning, and follow-up
                  tracking used to consume several hours a week. The crons do the gathering;
                  I do the judgment. That time gets reclaimed for actual decisions.
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
                  Individual daily reports don&rsquo;t tell you that the VPN failed 5 of 7 days
                  last week. The weekly synthesis does. The graph shows who I actually meet with
                  most frequently &mdash; not who I think I meet with most. Data surfaces
                  patterns intuition can&rsquo;t.
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
                  preserved. &ldquo;Why did we pick this over that?&rdquo; has an answer.
                  &ldquo;When did we last discuss X?&rdquo; has an answer. Memory persists across
                  sessions, across weeks, across staff changes.
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
                  Every conversation begins with 48 hours of recent context plus curated
                  long-term memory plus triggered wiki lookups. I don&rsquo;t re-explain my
                  world every time I ask a question, and the agent doesn&rsquo;t need to be
                  reminded who the key people and projects are.
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
                  developments, and trends that match my priorities. I review them in about 60
                  seconds each morning. Without this pipeline, I&rsquo;d either miss them or
                  spend an hour hunting.
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
                Before every meeting, auto-compile: attendee wiki pages, recent interactions,
                open commitments from previous meetings, relevant decisions, and a one-page prep
                doc. No more walking into meetings cold.
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
                Emails, memos, responses drafted in my voice using my actual context. Not
                generic AI writing; contextual writing grounded in what I&rsquo;ve said and
                decided before. Human review becomes faster than drafting from scratch.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Decision archaeology</div>
              <p className="text-sm text-slate-700 leading-6">
                &ldquo;Why did we pick this architecture two years ago?&rdquo; &mdash; immediate
                answer with the full reasoning, the voices that disagreed, and the tradeoffs
                considered. No more Slack/email archaeology to reconstruct institutional
                decisions.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Self-monitoring system health</div>
              <p className="text-sm text-slate-700 leading-6">
                The agent notices when data sources are stale, when cron jobs are degrading,
                when the knowledge layer has gaps. Self-monitoring becomes self-repairing &mdash;
                the system maintains itself instead of waiting for a human to notice failures.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6">
              <div className="text-slate-900 font-bold text-lg mb-2">Domain-aware research</div>
              <p className="text-sm text-slate-700 leading-6">
                Instead of &ldquo;search the web,&rdquo; the agent does &ldquo;search the web
                filtered through what I care about, scored against my graph, and synthesized
                with what I already know.&rdquo; Research becomes targeted, not exhaustive.
              </p>
            </div>
          </div>
        </div>

        <div className="text-slate-700 text-[1.06rem] leading-8 mt-10 max-w-3xl">
          <p className="border-l-4 border-blue-600 pl-5 py-2 bg-blue-50/50 rounded-r-lg text-slate-900 font-semibold">
            The accumulation layer took months to build. But once it exists, the outcomes
            compound &mdash; each new capability is a thin layer on top of the same knowledge
            foundation, not a rebuild from scratch.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 7 — SCALING VISION
          ====================================================================== */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          The Vision
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          Scaling to UC San Diego
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            Everything above is one person&rsquo;s implementation. The interesting question is:
            what happens if every UCSD staff member has one?
          </p>
          <p>I think the answer has four levels:</p>
        </div>

        <ScalingPyramid />

        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 max-w-3xl">
          <p>
            <strong className="text-slate-900">Level 1 &mdash; Personal.</strong> Every staff
            member gets their own agent. Their own memory files. Their own wiki. Their own daily
            crons. Their data never leaves their agent. This is what I&rsquo;ve built and proven
            &mdash; it works for one person, and the architecture is replicable.
          </p>
          <p>
            The hard part isn&rsquo;t technology; it&rsquo;s the deployment pattern. Every person
            gets a dedicated agent runtime (container, serverless function, or similar), an
            isolated data store, a way to connect to their email/calendar/meeting sources, and a
            governance model that says &ldquo;this is yours, private by default.&rdquo;
          </p>
          <p>
            <strong className="text-slate-900">Level 2 &mdash; Team.</strong> Within a team,
            selective context-sharing. The team&rsquo;s knowledge graph pulls in people from
            everyone&rsquo;s graph (deduplicated). The team wiki has pages visible to all members.
            Shared calendar visibility for internal meetings. Individual privacy for 1:1s and
            personal notes. Opt-in, not opt-out.
          </p>
          <p>
            This is where governance gets interesting. Who decides what&rsquo;s shared? How do
            you handle a team member leaving? How do you prevent sensitive information from one
            person&rsquo;s context leaking into another&rsquo;s?
          </p>
          <p>
            <strong className="text-slate-900">Level 3 &mdash; Department.</strong> At the
            department level (say, WTS or Academic Technology Services), anonymized aggregates
            become useful. &ldquo;What are the trending pain points across teams this week?&rdquo;
            (from everyone&rsquo;s student-pain signals). &ldquo;What vendors are we all
            evaluating?&rdquo; (from knowledge graphs). &ldquo;What trainings would help us
            all?&rdquo; (from synthesis across many agents).
          </p>
          <p>
            No individual data. Just patterns that emerge from many individual signals &mdash; the
            same way public health surveillance works. A dashboard at the department level that
            shows &ldquo;here&rsquo;s what your teams are seeing this week&rdquo; without
            violating anyone&rsquo;s individual privacy.
          </p>
          <p>
            <strong className="text-slate-900">Level 4 &mdash; Campus.</strong> TritonAI already
            provides campus-wide AI services. Henry Dashboard already shows operational state.
            The missing piece is the connective tissue: aggregate the department-level patterns
            up to campus-level insights. Which departments are struggling with the same vendor?
            Which AI use cases are converging across units? What institutional decisions would
            help everyone?
          </p>
          <p>
            The tech to do this mostly exists. The governance doesn&rsquo;t. Privacy at the
            personal level has to be ironclad, which means building the sharing boundaries as
            first-class features &mdash; not bolt-ons &mdash; and getting the Council of Data
            Stewards comfortable with the model before anything ships.
          </p>
          <p>
            <strong className="text-slate-900">What&rsquo;s proven vs. speculative:</strong> the
            personal layer works; I&rsquo;m using it daily. Team/department/campus layers are
            design exercises, not shipped code. But the pattern is there, and the architecture is
            a starting point, not a finished product.
          </p>
          <p className="text-slate-900 font-semibold border-l-4 border-blue-600 pl-5 py-2 bg-blue-50/50 rounded-r-lg">
            The real question isn&rsquo;t &ldquo;can we do this?&rdquo; &mdash; it&rsquo;s
            &ldquo;what would it take to do it responsibly, at scale, in a way that a
            30,000-employee university can actually adopt?&rdquo; That&rsquo;s a design +
            governance + procurement project, not just a technology one. But it&rsquo;s a
            conversation worth having now, while the personal-AI space is still small enough to
            shape intentionally.
          </p>
        </div>
      </section>

      {/* ======================================================================
          SECTION 7 — EVOLUTION / CHANGELOG
          ====================================================================== */}
      <section className="max-w-3xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-3">
          Evolution
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          This architecture isn&rsquo;t done
        </h2>
        <div className="text-slate-700 text-[1.06rem] leading-8 space-y-5 mb-8">
          <p>
            It&rsquo;s a living system, updated continuously as I learn what works. Some of
            what&rsquo;s on this page will be obsolete in six months &mdash; that&rsquo;s the
            point. Each change below is documented in the git history of my{' '}
            <a
              href="https://github.com/bpollak/mission-control"
              className="font-semibold text-blue-800 underline decoration-2 underline-offset-4 decoration-blue-600 hover:text-blue-950"
            >
              mission-control repo
            </a>
            ; the highlights are here for quick reference.
          </p>
        </div>

        <ol className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-0.5 before:bg-slate-200 pl-8">
          <li className="relative">
            <span className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow" aria-hidden="true" />
            <div className="text-xs uppercase tracking-[0.15em] text-blue-800 font-semibold mb-1">
              April 12, 2026
            </div>
            <div className="text-slate-900 font-semibold mb-1">Knowledge promotion pipeline fixes</div>
            <p className="text-sm text-slate-600 leading-6">
              Repaired broken daily-reflection and context-promotion crons (timeouts bumped to
              600s). Deduped 46 reversed-name person nodes in the knowledge graph (183&nbsp;&rarr;&nbsp;163).
              Added weekly-signal-synthesis cron to extract cross-day trends. Enhanced wiki-ingest
              with graph-to-wiki reconciliation and strategic-doc scanning. Documented three-layer
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
              Fallback chain: codex &rarr; codex-mini &rarr; gemini &rarr; gemini-flash-lite.
              Added provider-quota-monitor cron running every 30 min.
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
              2025&ndash;Apr 2026). Set up daily crons for calendar briefings, AI news, opportunity
              scanning, and meeting debriefs. Added the wiki structure with SCHEMA.md and initial
              people/tech/decision pages.
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
              agents can learn from human corrections. Most of this is design work, not code yet.
            </p>
          </li>
        </ol>
      </section>

      {/* ======================================================================
          FOOTER — meta / links
          ====================================================================== */}
      <section className="max-w-3xl mx-auto px-6 pb-24 pt-8 border-t border-slate-200">
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
