/**
 * D2: Three-Layer Context Loading Diagram
 *
 * CSS/HTML layout replacing the earlier concentric SVG circles. Three nested
 * rounded-rectangle panels, each a distinct color, show the context loading
 * tiers: Always Loaded → On Trigger → Explicit Request.
 */

export default function ThreeLayerDiagram() {
  return (
    <figure className="w-full my-10" role="img" aria-label="Three-layer context loading architecture">
      <figcaption className="sr-only">
        The agent loads context in three priority tiers. Layer 1 is a small fixed set of files
        (identity, user profile, long-term memory, patterns, today, yesterday) loaded on every
        session start — about 15 KB. Layer 2 is 880 wiki pages pulled in conditionally when the
        conversation mentions a person, technology, decision, or trend. Layer 3 is deep-dive
        content like specific dated memory files or raw transcripts, loaded only when the human
        explicitly asks.
      </figcaption>

      {/* Layer 3 — outermost panel */}
      <div
        className="rounded-2xl border-2 border-dashed p-4 sm:p-6"
        style={{ borderColor: 'var(--signal-coral)', backgroundColor: 'color-mix(in srgb, var(--wash-coral) 40%, var(--paper-strong))' }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold text-paper-strong" style={{ backgroundColor: 'var(--signal-coral)' }}>
            3
          </span>
          <span className="text-sm font-bold uppercase tracking-[0.12em] text-signal-coral-ink">
            Layer 3 · Explicit Request Only
          </span>
        </div>

        {/* Layer 2 — middle panel */}
        <div
          className="rounded-2xl border-2 p-4 sm:p-6"
          style={{ borderColor: 'var(--signal-gold)', backgroundColor: 'color-mix(in srgb, var(--wash-gold) 50%, var(--paper-strong))' }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold text-paper-strong" style={{ backgroundColor: 'var(--signal-gold)' }}>
              2
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.12em] text-signal-gold-ink">
              Layer 2 · Loaded on Trigger
            </span>
          </div>

          {/* Layer 1 — center panel */}
          <div
            className="rounded-2xl border-2 p-5 sm:p-7"
            style={{ borderColor: 'var(--signal-blue)', backgroundColor: 'var(--signal-blue)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-paper-strong text-sm font-bold text-signal-blue">
                1
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-on-dark">
                Layer 1 · Always Loaded
              </span>
            </div>

            <div className="text-white text-lg font-bold mb-2">Every Session Start</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-on-dark">
              <span>IDENTITY</span>
              <span>USER PROFILE</span>
              <span>MEMORY</span>
              <span>PATTERNS</span>
              <span>TODAY</span>
              <span>YESTERDAY</span>
            </div>
            <div className="mt-3 text-sm italic text-on-dark-muted">
              ~15 KB · loaded every turn
            </div>
          </div>

          {/* Layer 2 content — below Layer 1 */}
          <div className="mt-4 space-y-1">
            <div className="flex flex-wrap gap-2">
              {['wiki/people/', 'wiki/tech-stack/', 'wiki/decisions/', 'weekly-synthesis'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--wash-gold) 60%, white)',
                    color: 'var(--signal-gold-ink)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm italic text-muted mt-1">
              880 pages · pulled in when conversation mentions the topic
            </p>
          </div>
        </div>

        {/* Layer 3 content — below Layer 2 */}
        <div className="mt-4 space-y-1">
          <div className="flex flex-wrap gap-2">
            {['specific memory/', 'dated files', 'raw transcripts', 'full graph JSON'].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--wash-coral) 50%, white)',
                  color: 'var(--signal-coral-ink)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm italic text-muted mt-1">
            Loaded only when the human explicitly asks — &ldquo;read the architecture doc,&rdquo;
            &ldquo;check the knowledge graph&rdquo;
          </p>
        </div>
      </div>
    </figure>
  );
}
