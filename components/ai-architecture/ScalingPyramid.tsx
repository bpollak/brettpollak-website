/**
 * D4: Scaling Pyramid
 *
 * Four stacked trapezoids showing how the personal-agent pattern could scale:
 *   Personal → Team → Department → Campus
 *
 * The bottom (widest) tier is the foundation: one agent per person, with
 * isolated private data. Each tier above aggregates upward with stronger
 * privacy boundaries.
 *
 * Labels on the right explain what lives at each level. The left shows
 * a "privacy gradient" — tighter at the bottom (individual), broader at
 * the top (campus-wide aggregates only).
 */

export default function ScalingPyramid() {
  // Geometry: viewBox 720 × 540
  // Pyramid occupies center with 4 trapezoids stacked bottom → top
  const TIERS = [
    {
      label: 'Personal',
      sub: 'Every staff member, isolated',
      detail: 'Own agent · own memory · own wiki · own crons',
      y: 400,
      height: 100,
      halfWidthTop: 250,
      halfWidthBottom: 310,
      fill: '#1e40af', // blue-800
      textFill: '#eff6ff',
      status: 'Proven · working now',
    },
    {
      label: 'Team',
      sub: 'Selective sharing within a team',
      detail: 'Shared wiki pages · deduplicated graph · team calendar · opt-in',
      y: 300,
      height: 100,
      halfWidthTop: 190,
      halfWidthBottom: 250,
      fill: '#2563eb', // blue-600
      textFill: '#eff6ff',
      status: 'Design exercise',
    },
    {
      label: 'Department',
      sub: 'Anonymized aggregates across teams',
      detail: 'Trending pain points · shared trainings · vendor convergence',
      y: 200,
      height: 100,
      halfWidthTop: 130,
      halfWidthBottom: 190,
      fill: '#60a5fa', // blue-400
      textFill: '#1e3a8a',
      status: 'Speculative',
    },
    {
      label: 'Campus',
      sub: 'Institutional insights only',
      detail: 'Cross-unit patterns · AI governance · TritonAI integration',
      y: 100,
      height: 100,
      halfWidthTop: 60,
      halfWidthBottom: 130,
      fill: '#93c5fd', // blue-300
      textFill: '#1e3a8a',
      status: 'Aspirational',
    },
  ];

  const CX = 300;

  return (
    <figure className="w-full my-10" role="img" aria-labelledby="scaling-pyramid-title">
      <svg
        viewBox="0 0 720 560"
        className="w-full h-auto max-w-3xl mx-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="scaling-pyramid-title">Scaling pyramid — personal to campus</title>
        <desc>
          A four-tier pyramid showing how the personal-agent architecture could scale. The
          foundation (widest) is one agent per staff member. Each tier above represents a
          higher level of aggregation: team, department, and campus. Privacy boundaries
          tighten upward — campus-level data is aggregate-only.
        </desc>

        {/* Privacy label on the left */}
        <g>
          <text x="40" y="80" className="fill-slate-500" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
            Privacy
          </text>
          <text x="40" y="95" className="fill-slate-600" style={{ fontSize: '10px' }}>
            Aggregate only
          </text>
          <line x1="58" y1="110" x2="58" y2="480" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 3" />
          <g transform="translate(50, 240)">
            <polygon points="0,-6 6,0 0,6 -6,0" fill="#94a3b8" />
          </g>
          <text x="40" y="500" className="fill-slate-600" style={{ fontSize: '10px' }}>
            Individual
          </text>
          <text x="40" y="515" className="fill-slate-500" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
            private
          </text>
        </g>

        {/* Trapezoids (drawn bottom to top) */}
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
                y={yTop + tier.height / 2 - 6}
                textAnchor="middle"
                style={{ fontSize: '18px', fontWeight: 700, fill: tier.textFill }}
              >
                {tier.label}
              </text>
              <text
                x={CX}
                y={yTop + tier.height / 2 + 12}
                textAnchor="middle"
                style={{ fontSize: '10px', fill: tier.textFill, opacity: 0.85 }}
              >
                {tier.sub}
              </text>
            </g>
          );
        })}

        {/* Detail labels on the right, pointing to each tier */}
        {TIERS.map((tier) => {
          const yCenter = tier.y + tier.height / 2;
          const connectorStartX = CX + tier.halfWidthTop + (tier.halfWidthBottom - tier.halfWidthTop) / 2;
          return (
            <g key={`${tier.label}-detail`}>
              <line
                x1={connectorStartX + 5}
                y1={yCenter}
                x2={460}
                y2={yCenter}
                stroke="#cbd5e1"
                strokeWidth="1"
              />
              <text x="470" y={yCenter - 6} className="fill-slate-800" style={{ fontSize: '11px', fontWeight: 700 }}>
                {tier.detail}
              </text>
              <text x="470" y={yCenter + 8} className="fill-slate-500" style={{ fontSize: '10px', fontStyle: 'italic' }}>
                {tier.status}
              </text>
            </g>
          );
        })}

        {/* Foundation label */}
        <text x={CX} y="540" textAnchor="middle" className="fill-slate-500" style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
          Foundation: one agent per person
        </text>
      </svg>
      <figcaption className="sr-only">
        Four-tier scaling pyramid. The personal layer is the foundation — every staff member has
        their own agent with isolated data. Team layer adds selective sharing. Department layer
        aggregates anonymized patterns. Campus layer provides institutional insights. Privacy is
        tightest at the personal level, aggregate-only at the campus level.
      </figcaption>
    </figure>
  );
}
