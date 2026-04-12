/**
 * D1: Hero Knowledge Flow Diagram
 *
 * Replaces the earlier card-and-arrow layout with a proper SVG flow visual:
 *   Data Sources  →  Knowledge & Memory  →  Agent Actions
 *
 * Left column: the raw inputs that feed the system (calendar, email, meetings,
 * web, campus signals, transcripts).
 *
 * Middle column: the durable knowledge layer — the 4 stores where synthesized
 * information lives (Knowledge Graph, Wiki, MEMORY.md, PATTERNS.md).
 *
 * Right column: what the agent actually DOES with that knowledge — the
 * outputs and actions that make the ecosystem useful day to day.
 *
 * Curved SVG paths connect left items into the middle and middle items out
 * to the right, showing how raw data becomes durable knowledge becomes
 * action.
 *
 * At the bottom: the synthesis layer — the crons that do the work of
 * transforming raw signals into durable knowledge.
 */
import React from 'react';

type Item = {
  label: string;
  note?: string;
};

const DATA_SOURCES: Item[] = [
  { label: 'Calendar & email', note: 'MS Graph' },
  { label: 'Meetings', note: 'Granola transcripts' },
  { label: 'Web & AI news', note: 'filtered searches' },
  { label: 'Campus signals', note: 'forums, status pages' },
  { label: 'Your conversations', note: 'Telegram chat' },
];

const KNOWLEDGE_LAYERS: Item[] = [
  { label: 'Knowledge Graph', note: '163 nodes · 195 edges' },
  { label: 'Wiki', note: '105 curated pages' },
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

// Viewbox layout
const VB_W = 1200;
const VB_H = 620;

// Column x centers
const LEFT_CX = 180;
const MID_CX = 600;
const RIGHT_CX = 1020;

// Column item dimensions
const ITEM_W = 220;
const ITEM_H = 62;
const ITEM_GAP = 16;

// Compute y positions for a column of N items, vertically centered around y=300
function columnY(count: number, idx: number) {
  const totalH = count * ITEM_H + (count - 1) * ITEM_GAP;
  const startY = (VB_H - totalH) / 2;
  return startY + idx * (ITEM_H + ITEM_GAP);
}

function Item({
  x,
  y,
  label,
  note,
  variant,
}: {
  x: number;
  y: number;
  label: string;
  note?: string;
  variant: 'source' | 'knowledge' | 'action';
}) {
  const styles = {
    source: { fill: '#eff6ff', stroke: '#bfdbfe', labelFill: '#1e3a8a', noteFill: '#3b82f6' },
    knowledge: { fill: '#fef3c7', stroke: '#fcd34d', labelFill: '#78350f', noteFill: '#b45309' },
    action: { fill: '#d1fae5', stroke: '#6ee7b7', labelFill: '#064e3b', noteFill: '#059669' },
  }[variant];

  return (
    <g>
      <rect
        x={x - ITEM_W / 2}
        y={y}
        width={ITEM_W}
        height={ITEM_H}
        rx={12}
        ry={12}
        fill={styles.fill}
        stroke={styles.stroke}
        strokeWidth="1.5"
      />
      <text
        x={x}
        y={y + 26}
        textAnchor="middle"
        style={{ fontSize: '15px', fontWeight: 700, fill: styles.labelFill }}
      >
        {label}
      </text>
      {note && (
        <text
          x={x}
          y={y + 45}
          textAnchor="middle"
          style={{ fontSize: '11px', fill: styles.noteFill, fontStyle: 'italic' }}
        >
          {note}
        </text>
      )}
    </g>
  );
}

// Curved path from one box edge to another
function curvePath(x1: number, y1: number, x2: number, y2: number) {
  const midX = (x1 + x2) / 2;
  return `M ${x1},${y1} C ${midX},${y1} ${midX},${y2} ${x2},${y2}`;
}

export default function HeroPipelineDiagram() {
  return (
    <figure
      className="w-full my-10"
      role="img"
      aria-labelledby="knowledge-flow-title"
    >
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="knowledge-flow-title">Knowledge flow: data sources to knowledge layer to agent actions</title>
        <desc>
          Three-column flow diagram. Left column shows the data sources feeding the system
          (calendar, email, meetings, web, campus signals, conversations). Middle column shows the
          four durable knowledge layers (graph, wiki, long-term memory, patterns). Right column
          shows what the agent does with that knowledge (briefings, meeting intelligence,
          real-time answers, published artifacts, proactive nudges). Curved paths connect each
          data source into the knowledge layer, and each knowledge layer out to the agent actions.
        </desc>

        <defs>
          {/* Subtle gradients */}
          <linearGradient id="source-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="action-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Column headers */}
        <text
          x={LEFT_CX}
          y={32}
          textAnchor="middle"
          style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', fill: '#1e40af', textTransform: 'uppercase' }}
        >
          Data Sources
        </text>
        <text
          x={MID_CX}
          y={32}
          textAnchor="middle"
          style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', fill: '#92400e', textTransform: 'uppercase' }}
        >
          Knowledge &amp; Memory
        </text>
        <text
          x={RIGHT_CX}
          y={32}
          textAnchor="middle"
          style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', fill: '#065f46', textTransform: 'uppercase' }}
        >
          Agent Actions
        </text>

        {/* Connector paths — drawn first so they sit behind the boxes */}
        <g strokeWidth="1.5" fill="none">
          {/* Each left item curves into each middle item */}
          {DATA_SOURCES.map((_, i) => {
            const y1 = columnY(DATA_SOURCES.length, i) + ITEM_H / 2;
            return KNOWLEDGE_LAYERS.map((_, j) => {
              const y2 = columnY(KNOWLEDGE_LAYERS.length, j) + ITEM_H / 2;
              return (
                <path
                  key={`src-${i}-kn-${j}`}
                  d={curvePath(LEFT_CX + ITEM_W / 2, y1, MID_CX - ITEM_W / 2, y2)}
                  stroke="url(#source-glow)"
                  strokeOpacity="0.3"
                />
              );
            });
          })}
          {/* Each middle item curves out to each right item */}
          {KNOWLEDGE_LAYERS.map((_, i) => {
            const y1 = columnY(KNOWLEDGE_LAYERS.length, i) + ITEM_H / 2;
            return AGENT_ACTIONS.map((_, j) => {
              const y2 = columnY(AGENT_ACTIONS.length, j) + ITEM_H / 2;
              return (
                <path
                  key={`kn-${i}-act-${j}`}
                  d={curvePath(MID_CX + ITEM_W / 2, y1, RIGHT_CX - ITEM_W / 2, y2)}
                  stroke="url(#action-glow)"
                  strokeOpacity="0.3"
                />
              );
            });
          })}
        </g>

        {/* Left column — data sources */}
        {DATA_SOURCES.map((item, i) => (
          <Item
            key={`source-${i}`}
            x={LEFT_CX}
            y={columnY(DATA_SOURCES.length, i)}
            label={item.label}
            note={item.note}
            variant="source"
          />
        ))}

        {/* Middle column — knowledge layers */}
        {KNOWLEDGE_LAYERS.map((item, i) => (
          <Item
            key={`knowledge-${i}`}
            x={MID_CX}
            y={columnY(KNOWLEDGE_LAYERS.length, i)}
            label={item.label}
            note={item.note}
            variant="knowledge"
          />
        ))}

        {/* Right column — agent actions */}
        {AGENT_ACTIONS.map((item, i) => (
          <Item
            key={`action-${i}`}
            x={RIGHT_CX}
            y={columnY(AGENT_ACTIONS.length, i)}
            label={item.label}
            note={item.note}
            variant="action"
          />
        ))}

        {/* Synthesis band at the bottom */}
        <g>
          <rect
            x={MID_CX - 300}
            y={VB_H - 60}
            width={600}
            height={38}
            rx={19}
            ry={19}
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <text
            x={MID_CX}
            y={VB_H - 42}
            textAnchor="middle"
            style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', fill: '#64748b', textTransform: 'uppercase' }}
          >
            Synthesis
          </text>
          <text
            x={MID_CX}
            y={VB_H - 26}
            textAnchor="middle"
            style={{ fontSize: '11px', fill: '#64748b', fontStyle: 'italic' }}
          >
            30+ cron jobs turn raw signals into durable knowledge
          </text>
        </g>
      </svg>
      <figcaption className="sr-only">
        Knowledge flow visualization: data sources (calendar, email, meetings, web, campus signals,
        conversations) feed into a durable knowledge layer (graph, wiki, memory, patterns) which
        the agent uses to drive actions (briefings, meeting intelligence, real-time answers,
        published artifacts, proactive nudges). A synthesis band at the bottom represents the 30+
        cron jobs that do the transformation work.
      </figcaption>
    </figure>
  );
}
