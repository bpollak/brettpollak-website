/**
 * D1: Hero Knowledge Flow Diagram
 *
 * Pipeline grammar. A numbered stage rail across the top carries the flow
 * semantics (1 Sources → 2 Knowledge → 3 Actions); each stage holds rounded
 * "signal pill" chips; a dark synthesis engine band at the bottom carries the
 * live fleet stats. Distinct from every other diagram on the page: rail +
 * pills + engine band, no left-bordered cards.
 */
import React from 'react';

type Item = {
  label: string;
  note?: string;
};

const STAGES = [
  { n: '1', name: 'Data Sources', color: 'var(--signal-blue)', text: 'text-signal-blue' },
  { n: '2', name: 'Knowledge & Memory', color: 'var(--signal-gold)', text: 'text-signal-gold-ink' },
  { n: '3', name: 'Agent Actions', color: 'var(--signal-green)', text: 'text-signal-green' },
];

const DATA_SOURCES: Item[] = [
  { label: 'Calendar & email', note: 'MS Graph' },
  { label: 'Meetings', note: 'Granola transcripts' },
  { label: 'Authored documents', note: 'Google Drive · weekly sync' },
  { label: 'Curated feeds & news', note: '14 RSS + major outlets' },
  { label: 'Campus signals', note: 'forums, status pages' },
  { label: 'Institutional wiki', note: 'Confluence · 9 spaces' },
  { label: 'Team chats', note: 'scoped channels' },
  { label: 'Your conversations', note: 'Telegram chat' },
];

const KNOWLEDGE_LAYERS: Item[] = [
  { label: 'Knowledge Graph', note: '803 nodes · 844 edges' },
  { label: 'Wiki', note: '898 curated pages' },
  { label: 'Long-term memory', note: 'MEMORY.md' },
  { label: 'Work patterns', note: 'PATTERNS.md' },
];

const AGENT_ACTIONS: Item[] = [
  { label: 'Daily briefings', note: 'every morning' },
  { label: 'Meeting intelligence', note: 'commitments, sentiment' },
  { label: 'Real-time answers', note: 'with full context' },
  { label: 'Published artifacts', note: 'newsletter, digest' },
  { label: 'Proactive nudges', note: 'trends, patterns' },
];

function Pill({ item, color, bg }: { item: Item; color: string; bg: string }) {
  return (
    <div
      className="flex items-center gap-2.5 rounded-full border px-3.5 py-2 shadow-sm"
      style={{
        borderColor: `color-mix(in srgb, ${color} 30%, white)`,
        backgroundColor: bg,
      }}
    >
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-ink leading-tight">
          {item.label}
        </span>
        {item.note && (
          <span className="block text-xs text-muted leading-tight mt-0.5">
            {item.note}
          </span>
        )}
      </span>
    </div>
  );
}

/** Compact stage header shown above each column on mobile. */
function StageChip({ stage }: { stage: (typeof STAGES)[number] }) {
  return (
    <div className="flex items-center gap-2 mb-3 md:hidden">
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-extrabold text-paper-strong shrink-0"
        style={{ backgroundColor: stage.color }}
        aria-hidden="true"
      >
        {stage.n}
      </span>
      <span
        className={`text-xs font-bold uppercase tracking-[0.14em] ${stage.text}`}
      >
        {stage.name}
      </span>
    </div>
  );
}

function ArrowV() {
  return (
    <div className="flex md:hidden items-center justify-center py-1" aria-hidden="true">
      <span className="text-xl font-bold text-muted">&darr;</span>
    </div>
  );
}

export default function HeroPipelineDiagram() {
  return (
    <figure
      className="w-full my-10"
      role="img"
      aria-label="Knowledge flow: data sources to knowledge layer to agent actions"
    >
      <figcaption className="sr-only">
        Knowledge flow visualization: data sources (calendar, email, meetings, web,
        campus signals, conversations) feed into a durable knowledge layer (an 803-node
        knowledge graph, 898 wiki pages, long-term memory, work patterns) which the
        agent uses to drive actions (briefings, meeting intelligence, real-time answers,
        published artifacts, proactive nudges). A synthesis engine band at the bottom
        represents the 80 enabled jobs that do the transformation work.
      </figcaption>

      {/* Stage rail (desktop) — numbered stations joined by dotted connectors */}
      <div className="hidden md:flex items-center gap-3 mb-6" aria-hidden="true">
        {STAGES.map((stage, i) => (
          <React.Fragment key={stage.n}>
            {i > 0 && (
              <div
                className="flex-1 border-t-2 border-dotted"
                style={{ borderColor: 'var(--line)' }}
              />
            )}
            <div className="flex items-center gap-2.5">
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-extrabold text-paper-strong shrink-0"
                style={{ backgroundColor: stage.color }}
              >
                {stage.n}
              </span>
              <span
                className={`text-sm font-bold uppercase tracking-[0.14em] ${stage.text}`}
              >
                {stage.name}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Three stage columns */}
      <div className="md:grid md:grid-cols-3 md:gap-4 md:items-start">
        <div>
          <StageChip stage={STAGES[0]} />
          <div className="space-y-2">
            {DATA_SOURCES.map((item) => (
              <Pill
                key={item.label}
                item={item}
                color="var(--signal-blue)"
                bg="var(--wash-blue)"
              />
            ))}
          </div>
        </div>

        <ArrowV />

        <div>
          <StageChip stage={STAGES[1]} />
          <div className="space-y-2">
            {KNOWLEDGE_LAYERS.map((item) => (
              <Pill
                key={item.label}
                item={item}
                color="var(--signal-gold)"
                bg="var(--wash-gold)"
              />
            ))}
          </div>
        </div>

        <ArrowV />

        <div>
          <StageChip stage={STAGES[2]} />
          <div className="space-y-2">
            {AGENT_ACTIONS.map((item) => (
              <Pill
                key={item.label}
                item={item}
                color="var(--signal-green)"
                bg="var(--wash-green)"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Synthesis engine band */}
      <div className="mt-8 rounded-xl bg-ink px-6 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-8 text-center md:text-left">
          <div className="shrink-0">
            <div className="text-3xl font-extrabold text-white leading-none">80</div>
            <div className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-on-dark-muted mt-1">
              enabled jobs
            </div>
          </div>
          <div className="hidden md:block w-px self-stretch bg-white/15" aria-hidden="true" />
          <div className="text-sm font-semibold text-on-dark mt-3 md:mt-0">
            49 inference agents &middot; 31 deterministic scripts
          </div>
          <div className="text-sm italic text-on-dark-muted mt-1 md:mt-0 md:max-w-[15rem]">
            turning raw signals into durable knowledge, every day
          </div>
        </div>
      </div>
    </figure>
  );
}
