/**
 * D1: Hero Knowledge Flow Diagram
 *
 * CSS/HTML layout replacing the earlier SVG flow visual:
 *   Data Sources  →  Knowledge & Memory  →  Agent Actions
 *
 * Three columns of styled cards with colored left borders, CSS arrows between
 * columns, and a synthesis band at the bottom. On mobile the columns stack
 * vertically with downward arrows.
 */
import React from 'react';

type Item = {
  label: string;
  note?: string;
};

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
  { label: 'Knowledge Graph', note: '793 nodes · 837 edges' },
  { label: 'Wiki', note: '880 curated pages' },
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

/** Horizontal arrow shown between columns on desktop (md+). */
function ArrowH({ color }: { color: string }) {
  return (
    <div className="hidden md:flex items-center justify-center" aria-hidden="true">
      <div
        className="flex items-center"
        style={{ color }}
      >
        <span className="text-2xl font-bold leading-none" style={{ color }}>
          →
        </span>
      </div>
    </div>
  );
}

/** Downward arrow shown between stacked columns on mobile. */
function ArrowV() {
  return (
    <div className="flex md:hidden items-center justify-center py-1" aria-hidden="true">
      <span className="text-xl font-bold text-muted">↓</span>
    </div>
  );
}

function ColumnCard({
  item,
  borderColor,
  bgClass,
  labelClass,
}: {
  item: Item;
  borderColor: string;
  bgClass: string;
  labelClass: string;
}) {
  return (
    <div
      className={`rounded-lg ${bgClass} px-4 py-2.5 shadow-sm border-l-4 transition-all hover:shadow-md`}
      style={{ borderColor }}
    >
      <div className={`text-sm font-bold leading-tight ${labelClass}`}>
        {item.label}
      </div>
      {item.note && (
        <div className="text-xs italic text-muted mt-0.5">{item.note}</div>
      )}
    </div>
  );
}

export default function HeroPipelineDiagram() {
  return (
    <figure className="w-full my-10" role="img" aria-label="Knowledge flow: data sources to knowledge layer to agent actions">
      <figcaption className="sr-only">
        Knowledge flow visualization: data sources (calendar, email, meetings, web, campus signals,
        conversations) feed into a durable knowledge layer (graph, wiki, memory, patterns) which
        the agent uses to drive actions (briefings, meeting intelligence, real-time answers,
        published artifacts, proactive nudges). A synthesis band at the bottom represents the 80
        enabled jobs that do the transformation work.
      </figcaption>

      {/* Column headers */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-3 mb-4">
        <div className="text-center text-sm font-bold uppercase tracking-[0.15em] text-signal-blue">
          Data Sources
        </div>
        <div className="w-8" />
        <div className="text-center text-sm font-bold uppercase tracking-[0.15em] text-signal-gold-ink">
          Knowledge &amp; Memory
        </div>
        <div className="w-8" />
        <div className="text-center text-sm font-bold uppercase tracking-[0.15em] text-signal-green">
          Agent Actions
        </div>
      </div>

      {/* Three-column grid: col1 | arrow | col2 | arrow | col3 */}
      <div className="md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-3 md:items-center">
        {/* Column 1 — Data Sources */}
        <div className="space-y-2.5">
          {DATA_SOURCES.map((item, i) => (
            <ColumnCard
              key={`source-${i}`}
              item={item}
              borderColor="var(--signal-blue)"
              bgClass="bg-wash-blue"
              labelClass="text-signal-blue"
            />
          ))}
        </div>

        <ArrowH color="var(--signal-blue)" />
        <ArrowV />

        {/* Column 2 — Knowledge Layers */}
        <div className="space-y-2.5">
          {KNOWLEDGE_LAYERS.map((item, i) => (
            <ColumnCard
              key={`knowledge-${i}`}
              item={item}
              borderColor="var(--signal-gold)"
              bgClass="bg-wash-gold"
              labelClass="text-signal-gold-ink"
            />
          ))}
        </div>

        <ArrowH color="var(--signal-green)" />
        <ArrowV />

        {/* Column 3 — Agent Actions */}
        <div className="space-y-2.5">
          {AGENT_ACTIONS.map((item, i) => (
            <ColumnCard
              key={`action-${i}`}
              item={item}
              borderColor="var(--signal-green)"
              bgClass="bg-wash-green"
              labelClass="text-signal-green"
            />
          ))}
        </div>
      </div>

      {/* Synthesis band */}
      <div className="mt-6 rounded-xl border border-line bg-ink px-6 py-4 text-center">
        <div className="text-sm font-bold uppercase tracking-[0.15em] text-on-dark">
          Synthesis
        </div>
        <div className="text-sm text-on-dark-muted italic mt-1">
          80 enabled jobs turn raw signals into durable knowledge
        </div>
      </div>
    </figure>
  );
}
