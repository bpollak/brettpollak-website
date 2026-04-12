/**
 * D3: Daily Rhythm Clock
 *
 * A 24-hour circular clock showing when each cron job fires throughout the day.
 * Midnight is at the top (12 o'clock position); noon is at the bottom.
 * Cron markers are color-coded by role:
 * - blue = accumulation (gathering raw signals)
 * - emerald = synthesis (extracting patterns)
 * - amber = retrieval/publication (delivering results)
 *
 * The circle is segmented into quadrants (morning, afternoon, evening, night)
 * for visual orientation. Labels point outward from the ring.
 */

type Cron = {
  hour: number; // 0-23
  minute: number; // 0-59
  label: string;
  role: 'accumulation' | 'synthesis' | 'publication';
  note?: string;
};

const CRONS: Cron[] = [
  { hour: 3, minute: 0, label: 'Memory dreaming', role: 'synthesis', note: 'short-term → long-term' },
  { hour: 5, minute: 0, label: 'Weekly UCSD newsletter', role: 'publication', note: 'Mondays only' },
  { hour: 6, minute: 25, label: 'Calendar briefing', role: 'accumulation' },
  { hour: 6, minute: 35, label: 'AI news digest', role: 'accumulation' },
  { hour: 7, minute: 0, label: 'Opportunity scan', role: 'accumulation' },
  { hour: 7, minute: 30, label: 'Pain signal monitor', role: 'accumulation' },
  { hour: 9, minute: 0, label: 'Wiki ingest + graph recon', role: 'synthesis' },
  { hour: 17, minute: 30, label: 'Evening wrap', role: 'synthesis' },
  { hour: 18, minute: 15, label: 'Meeting debrief', role: 'synthesis' },
  { hour: 19, minute: 0, label: 'Daily reflection', role: 'synthesis' },
  { hour: 19, minute: 35, label: 'Context promotion', role: 'synthesis' },
];

const CX = 360;
const CY = 360;
const R_RING = 240;
const R_LABEL = 285;
const R_TICK_OUT = 250;
const R_TICK_IN = 230;

// Convert 24-hour time to an angle in radians.
// 0h (midnight) is at top (angle = -π/2). Clock runs clockwise.
function timeToAngle(hour: number, minute: number) {
  const totalMinutes = hour * 60 + minute;
  const fraction = totalMinutes / (24 * 60);
  // Start at top (-π/2), go clockwise (positive direction in screen coords)
  return -Math.PI / 2 + fraction * 2 * Math.PI;
}

function polar(cx: number, cy: number, r: number, angle: number) {
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

const ROLE_COLOR: Record<Cron['role'], string> = {
  accumulation: '#2563eb', // blue-600
  synthesis: '#059669', // emerald-600
  publication: '#d97706', // amber-600
};

export default function DailyRhythmClock() {
  return (
    <figure className="w-full my-10" role="img" aria-labelledby="daily-rhythm-title">
      <svg
        viewBox="0 0 720 760"
        className="w-full h-auto max-w-3xl mx-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="daily-rhythm-title">Daily cron rhythm — 24-hour clock</title>
        <desc>
          A 24-hour clock face showing when each cron job fires throughout the day. Midnight is at
          the top. Accumulation jobs (blue) run in the morning. Synthesis jobs (green) run in the
          evening. Publication jobs (amber) run at scheduled delivery times.
        </desc>

        {/* Outer ring */}
        <circle cx={CX} cy={CY} r={R_RING} fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
        <circle cx={CX} cy={CY} r={R_RING - 40} fill="none" stroke="#e2e8f0" strokeWidth="1" />

        {/* Hour ticks (every 3 hours) */}
        {[0, 3, 6, 9, 12, 15, 18, 21].map((h) => {
          const angle = timeToAngle(h, 0);
          const p1 = polar(CX, CY, R_TICK_IN, angle);
          const p2 = polar(CX, CY, R_TICK_OUT, angle);
          const labelP = polar(CX, CY, R_TICK_OUT + 18, angle);
          const displayHour = h === 0 ? '12a' : h === 12 ? '12p' : h < 12 ? `${h}a` : `${h - 12}p`;
          return (
            <g key={`tick-${h}`}>
              <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#94a3b8" strokeWidth="1.5" />
              <text x={labelP.x} y={labelP.y + 4} textAnchor="middle" className="fill-slate-500" style={{ fontSize: '11px', fontWeight: 600 }}>
                {displayHour}
              </text>
            </g>
          );
        })}

        {/* Quadrant labels */}
        <text x={CX} y={CY - 80} textAnchor="middle" className="fill-slate-400" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
          Night
        </text>
        <text x={CX + 80} y={CY + 5} textAnchor="middle" className="fill-slate-400" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
          Morning
        </text>
        <text x={CX} y={CY + 90} textAnchor="middle" className="fill-slate-400" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
          Afternoon
        </text>
        <text x={CX - 80} y={CY + 5} textAnchor="middle" className="fill-slate-400" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
          Evening
        </text>

        {/* Center label */}
        <text x={CX} y={CY - 18} textAnchor="middle" className="fill-slate-900" style={{ fontSize: '20px', fontWeight: 700 }}>
          24h
        </text>
        <text x={CX} y={CY + 2} textAnchor="middle" className="fill-slate-600" style={{ fontSize: '11px' }}>
          knowledge rhythm
        </text>
        <text x={CX} y={CY + 20} textAnchor="middle" className="fill-slate-500" style={{ fontSize: '10px', fontStyle: 'italic' }}>
          America/Los_Angeles
        </text>

        {/* Cron markers */}
        {CRONS.map((cron) => {
          const angle = timeToAngle(cron.hour, cron.minute);
          const dotP = polar(CX, CY, R_RING - 20, angle);
          const labelP = polar(CX, CY, R_LABEL, angle);
          const color = ROLE_COLOR[cron.role];
          // Align text based on angle (so labels on the left side are right-aligned, etc.)
          const cosA = Math.cos(angle);
          const anchor = cosA > 0.2 ? 'start' : cosA < -0.2 ? 'end' : 'middle';
          const hhmm = `${cron.hour.toString().padStart(2, '0')}:${cron.minute.toString().padStart(2, '0')}`;
          return (
            <g key={`${cron.label}-${hhmm}`}>
              {/* Connector line */}
              <line
                x1={dotP.x}
                y1={dotP.y}
                x2={labelP.x}
                y2={labelP.y}
                stroke={color}
                strokeWidth="1"
                strokeOpacity="0.4"
              />
              {/* Dot on the ring */}
              <circle cx={dotP.x} cy={dotP.y} r="6" fill={color} stroke="white" strokeWidth="2" />
              {/* Label */}
              <text
                x={labelP.x}
                y={labelP.y - 2}
                textAnchor={anchor}
                style={{ fontSize: '11px', fontWeight: 700, fill: '#0f172a' }}
              >
                {hhmm} · {cron.label}
              </text>
              {cron.note && (
                <text
                  x={labelP.x}
                  y={labelP.y + 12}
                  textAnchor={anchor}
                  style={{ fontSize: '9px', fill: '#64748b', fontStyle: 'italic' }}
                >
                  {cron.note}
                </text>
              )}
            </g>
          );
        })}

        {/* Legend */}
        <g transform="translate(90, 720)">
          <circle cx="0" cy="0" r="6" fill={ROLE_COLOR.accumulation} />
          <text x="12" y="4" style={{ fontSize: '11px', fill: '#334155', fontWeight: 600 }}>
            Accumulation
          </text>
          <circle cx="140" cy="0" r="6" fill={ROLE_COLOR.synthesis} />
          <text x="152" y="4" style={{ fontSize: '11px', fill: '#334155', fontWeight: 600 }}>
            Synthesis
          </text>
          <circle cx="270" cy="0" r="6" fill={ROLE_COLOR.publication} />
          <text x="282" y="4" style={{ fontSize: '11px', fill: '#334155', fontWeight: 600 }}>
            Publication
          </text>
        </g>
      </svg>
      <figcaption className="sr-only">
        The daily rhythm: morning crons (6-9 AM) gather signals; evening crons (5:30-7:35 PM)
        synthesize them; a 3 AM dreaming cron consolidates short-term memory into long-term.
      </figcaption>
    </figure>
  );
}
