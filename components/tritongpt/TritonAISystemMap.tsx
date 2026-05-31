import SystemMap, {
  type SystemMapEdge,
  type SystemMapNode,
} from '../diagram/SystemMap';

// Four pillars flank a shared, governed core (two left, two right) so every
// connector meets the core chip on its left/right edge — no label crossings.
const NODES: SystemMapNode[] = [
  { x: 40, y: 56, width: 240, height: 78, tone: 'blue', label: 'Knowledge & Memory', sub: 'Docs, data, retrieval', index: '01' },
  { x: 40, y: 266, width: 240, height: 78, tone: 'green', label: 'Developer Surface', sub: 'Build & extend', index: '02' },
  { x: 440, y: 56, width: 240, height: 78, tone: 'gold', label: 'Model Access', sub: 'Hosted models, APIs', barSide: 'top' },
  { x: 440, y: 266, width: 240, height: 78, tone: 'coral', label: 'Workflow & Agents', sub: 'Automated work', barSide: 'top' },
];

// Core chip spans x 290..430 (cx 360, width 140), y 170..230 (cy 200, height 60).
const EDGES: SystemMapEdge[] = [
  { d: 'M280 95 C 312 95 258 184 290 184', tone: 'blue', flow: true },
  { d: 'M280 305 C 312 305 258 216 290 216', tone: 'green', flow: true },
  { d: 'M430 184 C 462 184 408 95 440 95', tone: 'gold', flow: true, flowDelay: 1 },
  { d: 'M430 216 C 462 216 408 305 440 305', tone: 'coral', flow: true, flowDelay: 1 },
];

/**
 * TritonAI program architecture: four pillars (knowledge, developer surface,
 * model access, workflow & agents) wired to one governed core.
 */
export default function TritonAISystemMap({ className }: { className?: string }) {
  return (
    <SystemMap
      title="TritonAI program architecture"
      desc="Knowledge and memory, a developer surface, model access, and workflow agents all connect to one shared, governed TritonAI core."
      width={720}
      height={400}
      nodes={NODES}
      edges={EDGES}
      core={{ cx: 360, cy: 200, tone: 'blue', label: 'TritonAI core', width: 140 }}
      figureClassName={className}
    />
  );
}
