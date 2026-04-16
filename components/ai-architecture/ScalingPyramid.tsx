/**
 * D4: Scaling Pyramid
 *
 * Four stacked trapezoids showing how the personal-agent pattern could scale:
 *   Personal → Team → Department → Campus
 *
 * Each tier carries an explicit privacy boundary — the core point is that
 * this can only scale if privacy protections scale with it. Personal data
 * never leaves the personal agent; each higher tier is aggregates or
 * anonymized patterns only.
 *
 * ViewBox widened to 1160 so the right-side detail labels don't get clipped.
 */

export default function ScalingPyramid() {
  const TIERS = [
    {
      label: 'Personal',
      sub: 'Every staff member, isolated',
      detail: 'Own agent · own memory · own wiki',
      privacy: 'Data never leaves the personal agent',
      y: 400,
      height: 100,
      halfWidthTop: 250,
      halfWidthBottom: 310,
      fill: '#1e40af',
      textFill: '#eff6ff',
      status: 'Proven · working now',
    },
    {
      label: 'Team',
      sub: 'Opt-in sharing within a team',
      detail: 'Shared wiki pages · team calendar context',
      privacy: 'Each member chooses what to share; nothing is automatic',
      y: 300,
      height: 100,
      halfWidthTop: 190,
      halfWidthBottom: 250,
      fill: '#2563eb',
      textFill: '#eff6ff',
      status: 'Design exercise',
    },
    {
      label: 'Department',
      sub: 'Anonymized aggregates only',
      detail: 'Trending pain points · shared trainings',
      privacy: 'Individual identity stripped before aggregation',
      y: 200,
      height: 100,
      halfWidthTop: 130,
      halfWidthBottom: 190,
      fill: '#60a5fa',
      textFill: '#1e3a8a',
      status: 'Speculative',
    },
    {
      label: 'Campus',
      sub: 'Institutional patterns only',
      detail: 'Cross-unit signals · AI governance · TritonAI',
      privacy: 'Statistical patterns only — no individual records',
      y: 100,
      height: 100,
      halfWidthTop: 60,
      halfWidthBottom: 130,
      fill: '#93c5fd',
      textFill: '#1e3a8a',
      status: 'Aspirational',
    },
  ];

  const CX = 320;

  return (
    <figure className="w-full my-10" role="img" aria-labelledby="scaling-pyramid-title">
      <svg
        viewBox="0 0 1160 600"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="scaling-pyramid-title">Scaling pyramid — personal to campus, privacy-first</title>
        <desc>
          A four-tier pyramid showing how the personal-agent architecture could scale across UC
          San Diego while preserving privacy at every tier. The foundation is one agent per
          person with fully isolated data. Each tier above adds a stricter privacy boundary:
          opt-in team sharing, anonymized department aggregates, and campus-wide statistical
          patterns only.
        </desc>

        {/* Privacy axis on the left — made more prominent */}
        <g>
          <text x="20" y="70" className="fill-blue-700" style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 800 }}>
            Privacy
          </text>
          <text x="20" y="88" className="fill-slate-600" style={{ fontSize: '11px', fontWeight: 600 }}>
            aggregates
          </text>
          <text x="20" y="102" className="fill-slate-600" style={{ fontSize: '11px', fontWeight: 600 }}>
            only
          </text>
          <line x1="80" y1="120" x2="80" y2="480" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
          <g transform="translate(74, 250)">
            <polygon points="0,-8 8,0 0,8 -8,0" fill="#64748b" />
          </g>
          <text x="20" y="500" className="fill-slate-600" style={{ fontSize: '11px', fontWeight: 600 }}>
            individual
          </text>
          <text x="20" y="514" className="fill-slate-600" style={{ fontSize: '11px', fontWeight: 600 }}>
            private
          </text>
          <text x="20" y="532" className="fill-blue-700" style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 800 }}>
            Guaranteed
          </text>
        </g>

        {/* Trapezoids */}
        {TIERS.map((tier) => {
          const yTop = tier.y;
          const yBottom = tier.y + tier.height;
          const points = [
            `${CX - tier.halfWidthTop},${yTop}`,
            `${CX + tier.halfWidthTop},${yTop}`,
            `${CX + tier.halfWidthBottom},${yBottom}`,
            `${CX - tier.halfWidthBottom},${yBottom}`,
          ].join(' ');
          return (
            <g key={tier.label}>
              <polygon points={points} fill={tier.fill} stroke="white" strokeWidth="2" />
              <text
                x={CX}
                y={yTop + tier.height / 2 - 4}
                textAnchor="middle"
                style={{ fontSize: '20px', fontWeight: 800, fill: tier.textFill }}
              >
                {tier.label}
              </text>
              <text
                x={CX}
                y={yTop + tier.height / 2 + 16}
                textAnchor="middle"
                style={{ fontSize: '11px', fill: tier.textFill, opacity: 0.9 }}
              >
                {tier.sub}
              </text>
            </g>
          );
        })}

        {/* Detail labels on the right — now with privacy line */}
        {TIERS.map((tier) => {
          const yCenter = tier.y + tier.height / 2;
          const connectorStartX = CX + tier.halfWidthTop + (tier.halfWidthBottom - tier.halfWidthTop) / 2;
          return (
            <g key={`${tier.label}-detail`}>
              <line
                x1={connectorStartX + 5}
                y1={yCenter}
                x2={665}
                y2={yCenter}
                stroke="#cbd5e1"
                strokeWidth="1.5"
              />
              <text x="680" y={yCenter - 16} className="fill-slate-900" style={{ fontSize: '13px', fontWeight: 800 }}>
                {tier.detail}
              </text>
              <text x="680" y={yCenter + 1} style={{ fontSize: '11px', fontWeight: 600, fill: '#1e40af' }}>
                🔒 {tier.privacy}
              </text>
              <text x="680" y={yCenter + 18} className="fill-slate-500" style={{ fontSize: '10px', fontStyle: 'italic' }}>
                {tier.status}
              </text>
            </g>
          );
        })}

        {/* Foundation label */}
        <text x={CX} y="540" textAnchor="middle" className="fill-slate-600" style={{ fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700 }}>
          Foundation: one agent per person · privacy by default
        </text>
      </svg>
      <figcaption className="sr-only">
        Four-tier scaling pyramid. Personal is the foundation — every staff member has their
        own agent with fully isolated data. Team adds opt-in sharing. Department only sees
        anonymized aggregates. Campus only sees statistical patterns. Privacy boundaries
        tighten upward — campus-level data is aggregate-only, and individual-level data never
        leaves the personal tier.
      </figcaption>
    </figure>
  );
}
