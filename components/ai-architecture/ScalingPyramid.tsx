/**
 * D4: Scaling Pyramid
 *
 * CSS/HTML layout replacing the earlier SVG trapezoid pyramid. Four stacked
 * cards show how the personal-agent pattern scales:
 *   Personal → Team → Department → Campus
 *
 * Each tier carries an explicit privacy boundary — privacy protections tighten
 * as you go up. On desktop the cards are displayed as a stepped layout with
 * increasing privacy indicators; on mobile they stack as a simple vertical list.
 */

type Tier = {
  label: string;
  sub: string;
  detail: string;
  privacy: string;
  status: string;
  color: string;
  bg: string;
  textOnDark: boolean;
  /** 0–3 privacy strictness level for the indicator. */
  privacyLevel: number;
};

const TIERS: Tier[] = [
  {
    label: 'Personal',
    sub: 'Every staff member, isolated',
    detail: 'Own agent · own memory · own wiki',
    privacy: 'Data never leaves the personal agent',
    status: 'In daily use · one person',
    color: 'var(--signal-blue)',
    bg: 'var(--signal-blue)',
    textOnDark: true,
    privacyLevel: 0,
  },
  {
    label: 'Team',
    sub: 'Opt-in sharing within a team',
    detail: 'Shared wiki pages · team calendar context',
    privacy: 'Each member chooses what to share; nothing is automatic',
    status: 'Pilot in progress',
    color: 'var(--signal-green)',
    bg: 'var(--wash-green)',
    textOnDark: false,
    privacyLevel: 1,
  },
  {
    label: 'Department',
    sub: 'Anonymized aggregates only',
    detail: 'Trending pain points · shared trainings',
    privacy: 'Individual identity stripped before aggregation',
    status: 'Speculative',
    color: 'var(--signal-gold)',
    bg: 'var(--wash-gold)',
    textOnDark: false,
    privacyLevel: 2,
  },
  {
    label: 'Campus',
    sub: 'Institutional patterns only',
    detail: 'Cross-unit signals · AI governance · TritonAI',
    privacy: 'Statistical patterns only — no individual records',
    status: 'Aspirational',
    color: 'var(--signal-coral)',
    bg: 'var(--wash-coral)',
    textOnDark: false,
    privacyLevel: 3,
  },
];

const PRIVACY_LABELS = ['Individual private', 'Opt-in sharing', 'Anonymized', 'Aggregate only'];

function PrivacyMeter({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: i <= level ? 'var(--signal-coral)' : 'var(--line)',
          }}
        />
      ))}
    </div>
  );
}

export default function ScalingPyramid() {
  // Desktop: reverse order (Campus on top → Personal on bottom) to match pyramid
  // Mobile: Personal first (foundation) → Campus last
  const desktopOrder = [...TIERS].reverse();

  return (
    <figure className="w-full my-10" role="img" aria-label="Scaling pyramid: Personal to Team to Department to Campus with tightening privacy boundaries">
      <figcaption className="sr-only">
        Four-tier scaling pyramid. Personal is the foundation — every staff member has their
        own agent with fully isolated data. Team adds opt-in sharing. Department only sees
        anonymized aggregates. Campus only sees statistical patterns. Privacy boundaries
        tighten upward — campus-level data is aggregate-only, and individual-level data never
        leaves the personal tier.
      </figcaption>

      {/* Privacy axis label (desktop) */}
      <div className="hidden md:flex items-center gap-3 mb-4">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-coral-ink">
          Privacy
        </span>
        <span className="text-xs text-muted">{PRIVACY_LABELS[3]}</span>
        <div className="flex-1 border-t border-dashed border-line" />
        <span className="text-xs text-muted">{PRIVACY_LABELS[0]}</span>
      </div>

      {/* Desktop stepped layout — narrow at top (Campus), wide at bottom (Personal) */}
      <div className="hidden md:flex flex-col items-center gap-3">
        {desktopOrder.map((tier, idx) => {
          // Width increases from top (Campus) to bottom (Personal)
          // idx 0 = Campus (narrowest), idx 3 = Personal (widest)
          const widthPct = 55 + idx * 15; // 55%, 70%, 85%, 100%
          const isDark = tier.textOnDark;
          return (
            <div
              key={tier.label}
              className="rounded-xl shadow-md overflow-hidden transition-all"
              style={{ width: `${widthPct}%` }}
            >
              <div
                className="border-l-4 p-4 flex items-stretch gap-4"
                style={{
                  borderColor: tier.color,
                  backgroundColor: isDark ? tier.color : tier.bg,
                }}
              >
                {/* Left: label + sub */}
                <div className="flex-shrink-0 w-32">
                  <div className={`text-lg font-extrabold ${isDark ? 'text-white' : 'text-ink'}`}>
                    {tier.label}
                  </div>
                  <div className={`text-xs mt-0.5 ${isDark ? 'text-on-dark' : 'text-muted'}`}>
                    {tier.sub}
                  </div>
                </div>

                {/* Right: detail + privacy + status */}
                <div className="flex-1 flex flex-col justify-center gap-1.5">
                  <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-ink'}`}>
                    {tier.detail}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm" aria-hidden="true">🔒</span>
                    <span className={`text-xs font-semibold ${isDark ? 'text-on-dark' : 'text-body'}`}>
                      {tier.privacy}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs italic ${isDark ? 'text-on-dark-muted' : 'text-muted'}`}>
                      {tier.status}
                    </span>
                    <PrivacyMeter level={tier.privacyLevel} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Foundation label (desktop) */}
      <div className="hidden md:block text-center mt-4 text-sm uppercase tracking-[0.15em] font-bold text-muted">
        Foundation: one agent per person · privacy by default
      </div>

      {/* Mobile: simple vertical list — Personal first */}
      <div className="md:hidden space-y-3">
        {TIERS.map((tier) => {
          const isDark = tier.textOnDark;
          return (
            <div
              key={tier.label}
              className="rounded-xl border-l-4 shadow-sm overflow-hidden"
              style={{
                borderColor: tier.color,
                backgroundColor: isDark ? tier.color : tier.bg,
              }}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-base font-extrabold ${isDark ? 'text-white' : 'text-ink'}`}>
                    {tier.label}
                  </span>
                  <PrivacyMeter level={tier.privacyLevel} />
                </div>
                <div className={`text-xs mb-2 ${isDark ? 'text-on-dark' : 'text-muted'}`}>
                  {tier.sub}
                </div>
                <div className={`text-sm font-bold mb-1 ${isDark ? 'text-white' : 'text-ink'}`}>
                  {tier.detail}
                </div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span aria-hidden="true">🔒</span>
                  <span className={`text-xs font-semibold ${isDark ? 'text-on-dark' : 'text-body'}`}>
                    {tier.privacy}
                  </span>
                </div>
                <div className={`text-xs italic ${isDark ? 'text-on-dark-muted' : 'text-muted'}`}>
                  {tier.status}
                </div>
              </div>
            </div>
          );
        })}
        <div className="text-center text-xs uppercase tracking-[0.15em] font-bold text-muted pt-1">
          Foundation: one agent per person · privacy by default
        </div>
      </div>
    </figure>
  );
}
