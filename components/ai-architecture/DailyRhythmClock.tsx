/**
 * D3: Daily Rhythm Clock
 *
 * CSS timeline layout replacing the earlier SVG 24-hour clock. A vertical list
 * of cron jobs grouped by time of day (Night, Morning, Afternoon, Evening) with
 * colored dots/badges:
 * - blue  = accumulation (gathering raw signals)
 * - green = synthesis (extracting patterns)
 * - amber = publication (delivering results)
 */

type Cron = {
  hour: number;
  minute: number;
  label: string;
  role: 'accumulation' | 'synthesis' | 'publication';
  note?: string;
};

const CRONS: Cron[] = [
  { hour: 3, minute: 0, label: 'Memory dreaming', role: 'synthesis', note: 'short-term → long-term' },
  { hour: 4, minute: 0, label: 'Confluence sync', role: 'accumulation', note: '9 UCSD ITS spaces' },
  { hour: 5, minute: 0, label: 'Weekly newsletter', role: 'publication', note: 'Mondays only' },
  { hour: 5, minute: 30, label: 'Team chat sync', role: 'accumulation' },
  { hour: 6, minute: 0, label: 'AI source feeds', role: 'accumulation', note: '14 curated RSS' },
  { hour: 6, minute: 25, label: 'Calendar briefing', role: 'accumulation' },
  { hour: 6, minute: 35, label: 'AI news digest', role: 'accumulation' },
  { hour: 7, minute: 0, label: 'Opportunity scan', role: 'accumulation' },
  { hour: 7, minute: 30, label: 'Pain signal monitor', role: 'accumulation' },
  { hour: 9, minute: 0, label: 'Wiki ingest', role: 'synthesis', note: 'graph reconciliation' },
  { hour: 14, minute: 0, label: 'Weekly deep-dive', role: 'synthesis', note: 'Sundays only' },
  { hour: 17, minute: 30, label: 'Evening wrap', role: 'synthesis' },
  { hour: 18, minute: 15, label: 'Meeting debrief', role: 'synthesis' },
  { hour: 19, minute: 0, label: 'Daily reflection', role: 'synthesis' },
  { hour: 19, minute: 35, label: 'Context promotion', role: 'synthesis' },
];

const ROLE_META: Record<
  Cron['role'],
  { color: string; bg: string; text: string; label: string }
> = {
  accumulation: {
    color: 'var(--signal-blue)',
    bg: 'var(--wash-blue)',
    text: 'text-signal-blue',
    label: 'Accumulation',
  },
  synthesis: {
    color: 'var(--signal-green)',
    bg: 'var(--wash-green)',
    text: 'text-signal-green',
    label: 'Synthesis',
  },
  publication: {
    color: 'var(--signal-gold)',
    bg: 'var(--wash-gold)',
    text: 'text-signal-gold-ink',
    label: 'Publication',
  },
};

const GROUPS: { name: string; range: string; start: number; end: number }[] = [
  { name: 'Night', range: '12 AM – 5:59 AM', start: 0, end: 6 },
  { name: 'Morning', range: '6 AM – 11:59 AM', start: 6, end: 12 },
  { name: 'Afternoon', range: '12 PM – 4:59 PM', start: 12, end: 17 },
  { name: 'Evening', range: '5 PM – 11:59 PM', start: 17, end: 24 },
];

function fmt(h: number, m: number) {
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

export default function DailyRhythmClock() {
  return (
    <figure className="w-full my-10" role="img" aria-label="Daily cron rhythm — 24-hour timeline">
      <figcaption className="sr-only">
        The daily rhythm: morning crons (6–9 AM) gather signals; evening crons (5:30–7:35 PM)
        synthesize them; a 3 AM dreaming cron consolidates short-term memory into long-term.
        America/Los_Angeles timezone.
      </figcaption>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {(Object.keys(ROLE_META) as Cron['role'][]).map((role) => (
          <div key={role} className="flex items-center gap-2">
            <span
              className="inline-block w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: ROLE_META[role].color }}
              aria-hidden="true"
            />
            <span className="text-sm font-semibold text-body">{ROLE_META[role].label}</span>
          </div>
        ))}
        <span className="text-sm text-muted italic ml-auto hidden sm:inline">America/Los_Angeles</span>
      </div>

      {/* Timeline groups */}
      <div className="space-y-6">
        {GROUPS.map((group) => {
          const jobs = CRONS
            .filter((c) => {
              const t = c.hour + c.minute / 60;
              return t >= group.start && t < group.end;
            })
            .sort((a, b) => a.hour - b.hour || a.minute - b.minute);

          if (jobs.length === 0) return null;

          return (
            <div key={group.name}>
              {/* Group header */}
              <div className="flex items-baseline gap-3 mb-3">
                <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-ink">
                  {group.name}
                </h3>
                <span className="text-xs text-muted">{group.range}</span>
                <div className="flex-1 border-t border-line" />
              </div>

              {/* Job list */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {jobs.map((cron) => {
                  const meta = ROLE_META[cron.role];
                  return (
                    <div
                      key={`${cron.label}-${fmt(cron.hour, cron.minute)}`}
                      className="flex items-start gap-3 rounded-lg p-3 border-l-4 shadow-sm"
                      style={{
                        borderColor: meta.color,
                        backgroundColor: meta.bg,
                      }}
                    >
                      {/* Time badge */}
                      <span
                        className="inline-flex items-center justify-center min-w-[3.2rem] px-2 py-1 rounded-md text-xs font-bold text-paper-strong shrink-0"
                        style={{ backgroundColor: meta.color }}
                      >
                        {fmt(cron.hour, cron.minute)}
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-ink leading-tight">
                          {cron.label}
                        </div>
                        {cron.note && (
                          <div className="text-xs italic text-muted mt-0.5">{cron.note}</div>
                        )}
                        <div className={`text-[0.65rem] font-semibold uppercase tracking-wider mt-1 ${meta.text}`}>
                          {meta.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </figure>
  );
}
