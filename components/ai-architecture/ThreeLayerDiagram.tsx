/**
 * D2: Three-Layer Context Loading Diagram
 *
 * Shows three nested rings representing the agent's context loading strategy:
 * - Layer 1 (center): Always loaded — baseline identity + 48hr context
 * - Layer 2 (middle): Loaded on trigger — wiki pages pulled in when conversation mentions them
 * - Layer 3 (outer): Loaded on explicit request — deep-dive content only when asked
 *
 * Pure SVG with concentric circles. Labels sit outside each ring.
 * On mobile, the SVG scales down via viewBox; content remains readable at 375px.
 */

export default function ThreeLayerDiagram() {
  return (
    <figure className="w-full my-10" role="img" aria-labelledby="three-layer-title">
      <svg
        viewBox="0 0 720 520"
        className="w-full h-auto max-w-3xl mx-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="three-layer-title">Three-layer context loading architecture</title>
        <desc>
          Three concentric rings showing how the agent loads context. The innermost ring is
          Layer 1 (always loaded baseline). The middle ring is Layer 2 (loaded on conversational
          trigger). The outermost ring is Layer 3 (loaded only when the human explicitly asks).
        </desc>

        {/* Gradients for fills */}
        <defs>
          <radialGradient id="l1-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#1e40af" />
          </radialGradient>
          <radialGradient id="l2-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.08" />
          </radialGradient>
          <radialGradient id="l3-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Layer 3 — outer ring */}
        <circle cx="360" cy="260" r="240" fill="url(#l3-grad)" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="360" y="48" textAnchor="middle" className="fill-slate-600" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Layer 3 · Explicit Request Only
        </text>

        {/* Layer 2 — middle ring */}
        <circle cx="360" cy="260" r="170" fill="url(#l2-grad)" stroke="#60a5fa" strokeWidth="2" />
        <text x="360" y="118" textAnchor="middle" className="fill-blue-700" style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Layer 2 · Loaded on Trigger
        </text>

        {/* Layer 1 — center, solid */}
        <circle cx="360" cy="260" r="100" fill="url(#l1-grad)" />
        <text x="360" y="218" textAnchor="middle" className="fill-blue-100" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Layer 1
        </text>
        <text x="360" y="242" textAnchor="middle" className="fill-white" style={{ fontSize: '18px', fontWeight: 700 }}>
          Always Loaded
        </text>
        <text x="360" y="265" textAnchor="middle" className="fill-blue-200" style={{ fontSize: '11px' }}>
          IDENTITY · USER · MEMORY
        </text>
        <text x="360" y="281" textAnchor="middle" className="fill-blue-200" style={{ fontSize: '11px' }}>
          PATTERNS · today · yesterday
        </text>
        <text x="360" y="303" textAnchor="middle" className="fill-blue-300" style={{ fontSize: '10px', fontStyle: 'italic' }}>
          ~15 KB · loaded every turn
        </text>

        {/* Layer 2 content labels (arranged around the middle ring) */}
        <text x="230" y="160" className="fill-slate-800" style={{ fontSize: '11px', fontWeight: 600 }}>
          wiki/people/
        </text>
        <text x="478" y="160" className="fill-slate-800" style={{ fontSize: '11px', fontWeight: 600 }}>
          wiki/tech-stack/
        </text>
        <text x="198" y="360" className="fill-slate-800" style={{ fontSize: '11px', fontWeight: 600 }}>
          wiki/decisions/
        </text>
        <text x="478" y="360" className="fill-slate-800" style={{ fontSize: '11px', fontWeight: 600 }}>
          weekly-synthesis
        </text>
        <text x="360" y="398" textAnchor="middle" className="fill-slate-700" style={{ fontSize: '10px', fontStyle: 'italic' }}>
          105 pages · pulled in when conversation mentions the topic
        </text>

        {/* Layer 3 content labels */}
        <text x="80" y="254" className="fill-slate-500" style={{ fontSize: '10px' }}>
          specific memory/
        </text>
        <text x="80" y="270" className="fill-slate-500" style={{ fontSize: '10px' }}>
          dated files
        </text>
        <text x="570" y="254" className="fill-slate-500" style={{ fontSize: '10px' }}>
          raw transcripts
        </text>
        <text x="570" y="270" className="fill-slate-500" style={{ fontSize: '10px' }}>
          full graph JSON
        </text>
        <text x="360" y="490" textAnchor="middle" className="fill-slate-500" style={{ fontSize: '10px', fontStyle: 'italic' }}>
          Loaded only when the human explicitly asks &mdash; &ldquo;read the architecture doc,&rdquo; &ldquo;check the knowledge graph&rdquo;
        </text>
      </svg>

      <figcaption className="sr-only">
        The agent loads context in three priority tiers. Layer 1 is a small fixed set of files
        (identity, user profile, long-term memory, patterns, today, yesterday) loaded on every
        session start. Layer 2 is 105 wiki pages pulled in conditionally when the conversation
        mentions a person, technology, decision, or trend. Layer 3 is deep-dive content like
        specific dated memory files or raw transcripts, loaded only when the human explicitly asks.
      </figcaption>
    </figure>
  );
}
