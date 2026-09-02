/**
 * D3: Daily Rhythm Clock
 *
 * Waterfall grammar. The agent fleet's real daily schedule as a vertical
 * cascade: each row is a real cron entry (time, name, cadence), role-tinted,
 * with a connecting spine and hour markers on the rail. Data drawn from the
 * live Hermes schedule (79 timed fires/day), not idealized — the three daily
 * arcs read top to bottom: accumulate, deliver, synthesize.
 */

type Cron = {
  hour: number;
  minute: number;
  label: string;
  cadence: string;
  role: 'accumulation' | 'synthesis' | 'publication';
  note?: string;
};

const CRONS: Cron[] = [
  { hour: 4, minute: 0, label: 'Confluence sync', cadence: 'daily', role: 'accumulation', note: '9 UCSD ITS spaces' },
  { hour: 4, minute: 30, label: 'Google Drive sync', cadence: 'daily', role: 'accumulation' },
  { hour: 5, minute: 30, label: 'Teams message sync', cadence: 'daily', role: 'accumulation' },
  { hour: 6, minute: 0, label: 'AI source feeds', cadence: 'daily', role: 'accumulation', note: '14 curated RSS' },
  { hour: 6, minute: 25, label: 'Calendar briefing', cadence: 'weekdays', role: 'accumulation' },
  { hour: 6, minute: 35, label: 'AI news digest', cadence: 'daily', role: 'accumulation' },
  { hour: 7, minute: 0, label: 'Opportunity scan', cadence: 'daily', role: 'accumulation' },
  { hour: 7, minute: 30, label: 'Pain signal monitor', cadence: 'daily', role: 'accumulation', note: 'Reddit · Guardian · status page' },
  { hour: 8, minute: 0, label: 'Blog watcher scan', cadence: 'daily', role: 'accumulation' },
  { hour: 7, minute: 30, label: 'Daily briefing', cadence: 'weekdays', role: 'publication', note: 'the morning read' },
  { hour: 8, minute: 15, label: 'Memory system health', cadence: 'weekdays', role: 'synthesis' },
  { hour: 9, minute: 0, label: 'Wiki ingest', cadence: 'daily', role: 'synthesis', note: 'graph reconciliation' },
  { hour: 14, minute: 0, label: 'Weekly deep-dive', cadence: 'Sundays', role: 'synthesis' },
  { hour: 17, minute: 30, label: 'Evening wrap', cadence: 'weekdays', role: 'synthesis', note: 'email triage' },
  { hour: 18, minute: 0, label: 'Weekly signal synthesis', cadence: 'Sundays', role: 'synthesis', note: 'cross-day trends' },
  { hour: 18, minute: 15, label: 'Meeting debrief', cadence: 'weekdays', role: 'synthesis', note: 'Granola transcripts' },
  { hour: 19, minute: 0, label: 'Daily reflection', cadence: 'weekdays', role: 'synthesis' },
  { hour: 19, minute: 35, label: 'Context promotion', cadence: 'weekdays', role: 'synthesis', note: 'day → long-term memory' },
];

const ROLE_META: Record<
  Cron['role'],
  { color: string; bg: string; text: string; label: string; blurb: string }
> = {
  accumulation: {
    color: 'var(--signal-blue)',
    bg: 'var(--wash-blue)',
    text: 'text-signal-blue',
    label: 'Accumulate',
    blurb: 'gather raw signals',
  },
  publication: {
    color: 'var(--signal-gold)',
    bg: 'var(--wash-gold)',
    text: 'text-signal-gold-ink',
    label: 'Deliver',
    blurb: 'publish and brief',
  },
  synthesis: {
    color: 'var(--signal-green)',
    bg: 'var(--wash-green)',
    text: 'text-signal-green',
    label: 'Synthesize',
    blurb: 'extract patterns',
  },
};

function fmt(h: number, m: number) {
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${m.toString().padStart(2, '0')} ${ampm}`;
}

export default function DailyRhythmClock() {
  return (
    <figure className="w-full my-10" role="img" aria-label="Daily cron rhythm — 24-hour timeline">
      <figcaption className="sr-only">
        The real daily rhythm of the 80-job fleet, from the live schedule. Early-morning
        scripts (4–8 AM) accumulate raw signals — Confluence, Google Drive, Teams, RSS
        feeds, digest, opportunity scan, pain signals. The 7:30 AM daily briefing
        delivers the morning read. Later crons synthesize: memory system health, wiki
        ingest, evening wrap, meeting debrief, daily reflection, and 7:35 PM context
        promotion into long-term memory. Sunday adds weekly deep-dive and signal
        synthesis. America/Los_Angeles timezone.
      </figcaption>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
        {(Object.keys(ROLE_META) as Cron['role'][]).map((role) => (
          <div key={role} className="flex items-center gap-2">
            <span
              className="inline-block w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: ROLE_META[role].color }}
              aria-hidden="true"
            />
            <span className="text-sm font-semibold text-body">
              {ROLE_META[role].label}
              <span className="font-normal text-muted"> — {ROLE_META[role].blurb}</span>
            </span>
          </div>
        ))}
        <span className="text-sm text-muted italic ml-auto hidden sm:inline">
          America/Los_Angeles
        </span>
      </div>

      {/* Waterfall */}
      <ol className="relative">
        {/* spine — sits under the node column: 4.1rem time + 0.75rem gap + node center */}
        <div
          className="absolute left-[5.2rem] top-3 bottom-3 w-0.5 rounded-full"
          style={{ backgroundColor: 'var(--line)' }}
          aria-hidden="true"
        />
        {CRONS.map((cron, i) => {
          const meta = ROLE_META[cron.role];
          return (
            <li key={`${cron.label}-${fmt(cron.hour, cron.minute)}`} className="relative flex items-center gap-3 py-1.5">
              {/* time on the rail */}
              <span
                className={`w-[4.1rem] shrink-0 text-right text-xs font-bold tabular-nums ${meta.text}`}
              >
                {fmt(cron.hour, cron.minute)}
              </span>
              {/* node on the spine */}
              <span
                className="relative z-10 w-3.5 h-3.5 rounded-full border-[3px] bg-paper-strong shrink-0"
                style={{ borderColor: meta.color }}
                aria-hidden="true"
              />
              {/* event card — offset alternates to create the cascade */}
              <div
                className={`flex-1 max-w-md rounded-xl px-4 py-2.5 shadow-sm border-l-4 ${i % 2 === 1 ? 'sm:ml-6' : ''}`}
                style={{
                  borderColor: meta.color,
                  backgroundColor: meta.bg,
                }}
              >
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-sm font-bold text-ink leading-tight">{cron.label}</span>
                  <span
                    className={`text-[0.65rem] font-bold uppercase tracking-wider ${meta.text}`}
                  >
                    {meta.label}
                  </span>
                  <span className="ml-auto text-[0.65rem] font-semibold uppercase tracking-wide text-muted">
                    {cron.cadence}
                  </span>
                </div>
                {cron.note && (
                  <div className="text-xs italic text-muted mt-0.5">{cron.note}</div>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {/* Footer note */}
      <p className="mt-5 text-xs text-muted italic max-w-2xl">
        Selected daily and weekday jobs from the live schedule — 79 timed fires across a
        typical week-day, plus Sunday&rsquo;s weekly synthesis pass and Monday&rsquo;s
        newsletter. Weekend and monthly jobs omitted for clarity.
      </p>
    </figure>
  );
}
