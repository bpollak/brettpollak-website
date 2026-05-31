import SystemMap, {
  type SystemMapEdge,
  type SystemMapNode,
} from '../diagram/SystemMap';

// Four pillars of the TritonAI program surrounding a shared, governed core.
const NODES: SystemMapNode[] = [
  { x: 40, y: 40, width: 250, height: 74, tone: 'blue', label: 'Knowledge & Memory', sub: 'Docs, data, retrieval', index: '01' },
  { x: 430, y: 40, width: 250, height: 74, tone: 'gold', label: 'Model Access', sub: 'Hosted models, APIs', index: '02' },
  { x: 40, y: 286, width: 250, height: 74, tone: 'green', label: 'Developer Surface', sub: 'Build & extend', index: '03' },
  { x: 430, y: 286, width: 250, height: 74, tone: 'coral', label: 'Workflow & Agents', sub: 'Automated work', index: '04' },
];

const EDGES: SystemMapEdge[] = [
  { d: 'M290 77 C 326 90 330 140 332 168', tone: 'blue', trace: true, traceDelay: 1 },
  { d: 'M430 77 C 394 90 390 140 388 168', tone: 'gold', trace: true, traceDelay: 1 },
  { d: 'M290 323 C 326 310 330 260 332 232', tone: 'green', trace: true, traceDelay: 2 },
  { d: 'M430 323 C 394 310 390 260 388 232', tone: 'coral', trace: true, traceDelay: 2 },
];

/**
 * TritonAI program architecture: four pillars (knowledge, model access,
 * developer surface, workflow & agents) wired to one governed core.
 */
export default function TritonAISystemMap({ className }: { className?: string }) {
  return (
    <SystemMap
      title="TritonAI program architecture"
      desc="Knowledge and memory, model access, a developer surface, and workflow agents all connect to one shared, governed TritonAI core."
      width={720}
      height={400}
      nodes={NODES}
      edges={EDGES}
      crosshair={{ cx: 360, cy: 200, r: 46, tone: 'blue', label: 'TritonAI core' }}
      figureClassName={className}
    />
  );
}
