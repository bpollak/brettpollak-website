/**
 * D4: Scaling Pyramid
 *
 * Expansion-band grammar. Four horizontal bands of increasing width encode
 * scope (one person → whole campus); the "privacy gradient" note at the bottom
 * shows protections tightening as scope widens. The foundation tier
 * (Personal) inverts to solid blue — it is the tier in daily use. Distinct
 * from every other diagram on the page: width-graded bands, not stacked
 * equal cards. Bands render full-width on mobile (no squeezed percentages).
 */
import React from 'react';

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
  /** Desktop band width %. */
  widthPct: number;
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
    widthPct: 42,
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
    widthPct: 61,
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
    widthPct: 80,
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
    widthPct: 100,
  },
];

const PRIVACY_LABELS = ['Individual private', 'Opt-in sharing', 'Anonymized', 'Aggregate only'];

function PrivacyMeter({ level, color, dim }: { level: number; color: string; dim: string }) {
  return (
    <div className="flex items-center gap-1" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: i <= level ? color : dim }}
        />
      ))}
    </div>
  );
}

function Band({ tier, dimColor }: { tier: Tier; dimColor: string }) {
  const isDark = tier.textOnDark;
  return (
    <div
      className="band-w w-full rounded-xl shadow-md overflow-hidden"
      style={{ '--band-w': `${tier.widthPct}%` } as React.CSSProperties}
    >
      <div
        className="border-l-4 p-4 flex flex-col sm:flex-row sm:items-stretch gap-3 sm:gap-4"
        style={{
          borderColor: tier.color,
          backgroundColor: isDark ? tier.color : tier.bg,
        }}
      >
        {/* Left: label + sub */}
        <div className="shrink-0 sm:w-32">
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
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm" aria-hidden="true">&#128274;</span>
            <span className={`text-xs font-semibold ${isDark ? 'text-on-dark' : 'text-body'}`}>
              {tier.privacy}
            </span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`text-xs italic ${isDark ? 'text-on-dark-muted' : 'text-muted'}`}>
              {tier.status}
            </span>
            <PrivacyMeter level={tier.privacyLevel} color={tier.color} dim={dimColor} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ScalingPyramid() {
  // Desktop: Personal (foundation) on top, widening down to Campus.
  //   Width = scope. Reading top-to-bottom mirrors the pyramid metaphor
  //   while keeping every label horizontal and legible.
  // Mobile: same order, full width — no horizontal scroll at small sizes.
  return (
    <figure
      className="w-full my-10"
      role="img"
      aria-label="Scaling bands: Personal to Team to Department to Campus with tightening privacy boundaries"
    >
      <figcaption className="sr-only">
        Four-tier scaling diagram. Personal is the foundation — every staff member has
        their own agent with fully isolated data; the band is narrow because it covers
        one person at a time. Team adds opt-in sharing. Department only sees anonymized
        aggregates. Campus only sees statistical patterns. Bands widen as scope grows;
        privacy protections tighten at the same time — campus-level data is
        aggregate-only, and individual-level data never leaves the personal tier.
      </figcaption>

      {/* Header rail: scale axis */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-blue">
          Scope
        </span>
        <span className="text-xs text-muted">one person</span>
        <div className="flex-1 border-t border-dotted border-line" aria-hidden="true" />
        <span className="text-xs text-muted">entire campus</span>
      </div>

      {/* Desktop bands — Personal on top widening to Campus */}
      <div className="flex flex-col items-start gap-3">
        {TIERS.map((tier) => (
          <Band key={tier.label} tier={tier} dimColor="var(--line)" />
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .band-w { width: var(--band-w); }
        }
      `}</style>

      {/* Privacy gradient note */}
      <div className="mt-5 flex items-center gap-3 flex-wrap">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-signal-coral-ink">
          Privacy
        </span>
        <span className="text-xs text-muted">
          {PRIVACY_LABELS[0]} &rarr; {PRIVACY_LABELS[3]}
        </span>
        <div className="flex-1 border-t border-dotted border-line" aria-hidden="true" />
        <span className="text-xs text-muted">
          tighter as scope widens
        </span>
      </div>

      <div className="mt-4 text-sm uppercase tracking-[0.15em] font-bold text-muted">
        Foundation: one agent per person · privacy by default
      </div>
    </figure>
  );
}
