/**
 * D1: Hero Pipeline Diagram
 *
 * A horizontal (desktop) / vertical (mobile) flow showing the 5 stages of the
 * knowledge pipeline: Signals → Accumulation → Synthesis → Knowledge Layer → You.
 *
 * Uses CSS grid for the layout (grid-cols-1 on mobile, md:grid-cols-5 on desktop)
 * with card-like stages and inline SVG connectors between them.
 */
import React from 'react';

type Stage = {
  label: string;
  sublabel: string;
  items: string[];
  color: 'slate' | 'blue' | 'emerald' | 'amber' | 'indigo';
};

const STAGES: Stage[] = [
  {
    label: 'Signals',
    sublabel: 'Raw inputs',
    items: ['Calendar', 'Email', 'Meetings', 'News feeds', 'Campus sources'],
    color: 'slate',
  },
  {
    label: 'Accumulation',
    sublabel: 'Morning crons',
    items: ['Calendar briefing', 'AI news digest', 'Opportunity scan', 'Pain signal monitor'],
    color: 'blue',
  },
  {
    label: 'Synthesis',
    sublabel: 'Evening crons',
    items: ['Evening wrap', 'Meeting debrief', 'Daily reflection', 'Context promotion'],
    color: 'emerald',
  },
  {
    label: 'Knowledge Layer',
    sublabel: 'Durable memory',
    items: ['Graph (163 nodes)', 'Wiki (105 pages)', 'MEMORY.md', 'PATTERNS.md'],
    color: 'amber',
  },
  {
    label: 'You',
    sublabel: 'Interactive agent',
    items: ['Telegram', 'Contextual responses', 'Knows your world', 'Writes back what it learns'],
    color: 'indigo',
  },
];

const COLOR_CLASSES: Record<Stage['color'], { ring: string; bg: string; chip: string; accent: string }> = {
  slate: {
    ring: 'border-slate-200',
    bg: 'bg-slate-50/80',
    chip: 'bg-slate-100 text-slate-700 border-slate-200',
    accent: 'text-slate-900',
  },
  blue: {
    ring: 'border-blue-200',
    bg: 'bg-blue-50/80',
    chip: 'bg-blue-100 text-blue-800 border-blue-200',
    accent: 'text-blue-900',
  },
  emerald: {
    ring: 'border-emerald-200',
    bg: 'bg-emerald-50/80',
    chip: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    accent: 'text-emerald-900',
  },
  amber: {
    ring: 'border-amber-200',
    bg: 'bg-amber-50/80',
    chip: 'bg-amber-100 text-amber-900 border-amber-200',
    accent: 'text-amber-900',
  },
  indigo: {
    ring: 'border-indigo-200',
    bg: 'bg-indigo-50/80',
    chip: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    accent: 'text-indigo-900',
  },
};

function Arrow({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex items-center justify-center py-2 md:hidden" aria-hidden="true">
        <svg width="24" height="32" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
          <path d="M12 2 V 26 M 6 20 L 12 26 L 18 20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  return (
    <div className="hidden md:flex items-center justify-center" aria-hidden="true">
      <svg width="32" height="24" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
        <path d="M2 12 H 26 M 20 6 L 26 12 L 20 18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function HeroPipelineDiagram() {
  return (
    <figure className="w-full my-10" role="img" aria-label="Knowledge pipeline flow: signals accumulate into crons, synthesize into durable memory, and feed the interactive agent">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-3 md:gap-2 items-stretch">
        {STAGES.map((stage, idx) => {
          const c = COLOR_CLASSES[stage.color];
          return (
            <React.Fragment key={stage.label}>
              <div className={`rounded-2xl border ${c.ring} ${c.bg} p-5 flex flex-col shadow-sm`}>
                <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-[0.7rem] uppercase tracking-[0.15em] font-semibold w-fit mb-3 ${c.chip}`}>
                  Stage {idx + 1}
                </div>
                <div className={`text-xl md:text-2xl font-bold tracking-tight ${c.accent}`}>{stage.label}</div>
                <div className="text-sm text-slate-600 mb-4">{stage.sublabel}</div>
                <ul className="space-y-1.5 text-sm text-slate-700 mt-auto">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 flex-none ${c.accent.replace('text-', 'bg-')}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {idx < STAGES.length - 1 && (
                <>
                  <Arrow vertical />
                  <Arrow />
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <figcaption className="sr-only">
        Five-stage pipeline: raw signals enter accumulation crons in the morning, which produce daily source files.
        Evening synthesis crons distill those into durable knowledge layers (graph, wiki, memory).
        The interactive agent reads from the knowledge layer to respond with context-aware answers.
      </figcaption>
    </figure>
  );
}
