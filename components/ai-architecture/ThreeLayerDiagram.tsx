/**
 * D2: Three-Layer Context Loading Diagram
 *
 * Retrieval cross-section grammar. Three stacked zones of increasing width
 * encode how much material sits behind each tier — a narrow, always-loaded
 * core at the top; the full archive at the bottom, loaded only on explicit
 * request. A depth rail on the left (desktop) marks when each layer loads.
 * Distinct from every other diagram on the page: a width-graded cross-section,
 * not equal-sized cards.
 */

const FILE_CHIPS = [
  'IDENTITY',
  'USER PROFILE',
  'MEMORY',
  'PATTERNS',
  'TODAY',
  'YESTERDAY',
];

const TRIGGER_TAGS = ['wiki/people/', 'wiki/tech-stack/', 'wiki/decisions/', 'weekly-synthesis'];

const REQUEST_TAGS = ['specific memory/', 'dated files', 'raw transcripts', 'full graph JSON · 803 nodes'];

function DepthMark({
  n,
  when,
  cost,
  color,
  inkClass,
}: {
  n: string;
  when: string;
  cost: string;
  color: string;
  inkClass: string;
}) {
  return (
    <div className="hidden md:flex flex-col items-start justify-center gap-1.5 pr-2">
      <span
        className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-extrabold text-paper-strong"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        {n}
      </span>
      <span className={`text-[0.65rem] font-bold uppercase tracking-[0.16em] leading-tight ${inkClass}`}>
        {when}
      </span>
      <span className="text-xs text-muted">{cost}</span>
    </div>
  );
}

function TagChip({ tag, color, bg, inkClass }: { tag: string; color: string; bg: string; inkClass: string }) {
  return (
    <span
      className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-md ${inkClass}`}
      style={{ backgroundColor: bg, border: `1px solid color-mix(in srgb, ${color} 35%, white)` }}
    >
      {tag}
    </span>
  );
}

export default function ThreeLayerDiagram() {
  return (
    <figure
      className="w-full my-10"
      role="img"
      aria-label="Three-layer context loading architecture"
    >
      <figcaption className="sr-only">
        The agent loads context in three priority tiers, drawn as a cross-section: the
        deeper the retrieval, the more material is available. Layer 1 is a small fixed
        set of files (identity, user profile, long-term memory, patterns, today,
        yesterday) loaded on every session start — about 15 KB. Layer 2 is the 898-page
        wiki, pulled in conditionally when the conversation mentions a person,
        technology, decision, or trend. Layer 3 is the deep archive — dated memory
        files, raw transcripts, the full 803-node graph — loaded only when the human
        explicitly asks.
      </figcaption>

      {/* Zone 1 — always loaded: narrow, solid, on top */}
      <div className="md:grid md:grid-cols-[10rem_1fr] md:gap-4 md:items-center">
        <DepthMark n="1" when="Every session" cost="~15 KB" color="var(--signal-blue)" inkClass="text-signal-blue" />
        <div
          className="w-full md:w-[62%] rounded-2xl p-5 sm:p-6 text-white shadow-md"
          style={{ backgroundColor: 'var(--signal-blue)' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-sm font-bold uppercase tracking-[0.14em]">
              Layer 1 · Always loaded
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/15">
              &asymp;15 KB · every turn
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {FILE_CHIPS.map((f) => (
              <span
                key={f}
                className="rounded-lg bg-white/15 px-2.5 py-1.5 text-center text-xs font-bold tracking-wide"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Zone 2 — on trigger: wider, wash */}
      <div className="mt-4 md:grid md:grid-cols-[10rem_1fr] md:gap-4 md:items-center">
        <DepthMark n="2" when="On trigger" cost="898 pages" color="var(--signal-gold)" inkClass="text-signal-gold-ink" />
        <div
          className="w-full md:w-[81%] rounded-2xl border-2 p-5 sm:p-6"
          style={{
            borderColor: 'var(--signal-gold)',
            backgroundColor: 'color-mix(in srgb, var(--wash-gold) 55%, var(--paper-strong))',
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-sm font-bold uppercase tracking-[0.14em] text-signal-gold-ink">
              Layer 2 · Loaded on trigger
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full text-signal-gold-ink"
              style={{ backgroundColor: 'color-mix(in srgb, var(--wash-gold) 80%, white)' }}
            >
              898 wiki pages
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {TRIGGER_TAGS.map((tag) => (
              <TagChip
                key={tag}
                tag={tag}
                color="var(--signal-gold)"
                bg="color-mix(in srgb, var(--wash-gold) 70%, white)"
                inkClass="text-signal-gold-ink"
              />
            ))}
          </div>
          <p className="text-sm italic text-muted mt-3">
            Pulled in when the conversation mentions the person, technology, decision,
            or trend.
          </p>
        </div>
      </div>

      {/* Zone 3 — explicit request only: widest, dashed */}
      <div className="mt-4 md:grid md:grid-cols-[10rem_1fr] md:gap-4 md:items-center">
        <DepthMark n="3" when="On request" cost="full archive" color="var(--signal-coral)" inkClass="text-signal-coral-ink" />
        <div
          className="w-full rounded-2xl border-2 border-dashed p-5 sm:p-6"
          style={{
            borderColor: 'var(--signal-coral)',
            backgroundColor: 'color-mix(in srgb, var(--wash-coral) 35%, var(--paper-strong))',
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-sm font-bold uppercase tracking-[0.14em] text-signal-coral-ink">
              Layer 3 · Explicit request only
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full text-signal-coral-ink"
              style={{ backgroundColor: 'color-mix(in srgb, var(--wash-coral) 70%, white)' }}
            >
              everything else
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {REQUEST_TAGS.map((tag) => (
              <TagChip
                key={tag}
                tag={tag}
                color="var(--signal-coral)"
                bg="color-mix(in srgb, var(--wash-coral) 60%, white)"
                inkClass="text-signal-coral-ink"
              />
            ))}
          </div>
          <p className="text-sm italic text-muted mt-3">
            Loaded only when the human explicitly asks &mdash; &ldquo;read the
            architecture doc,&rdquo; &ldquo;check the knowledge graph.&rdquo;
          </p>
        </div>
      </div>

      {/* Depth axis note */}
      <div className="mt-4 flex items-center gap-2 text-xs text-muted italic">
        <span aria-hidden="true">&#8593;</span>
        <span>always in context</span>
        <span className="flex-1 border-t border-dotted border-line" aria-hidden="true" />
        <span>deeper retrieval, loaded only when needed</span>
        <span aria-hidden="true">&#8595;</span>
      </div>
    </figure>
  );
}
