import SystemMap, {
  type SystemMapEdge,
  type SystemMapNode,
} from '../diagram/SystemMap';

// Inputs (left) flow through the institutional AI core (center) into outcomes (right).
const NODES: SystemMapNode[] = [
  { x: 36, y: 36, width: 168, height: 62, tone: 'blue', label: 'Knowledge', index: '01' },
  { x: 36, y: 159, width: 168, height: 62, tone: 'green', label: 'People', index: '02' },
  { x: 36, y: 282, width: 168, height: 62, tone: 'gold', label: 'Tools', index: '03' },
  { x: 436, y: 36, width: 168, height: 62, tone: 'blue', label: 'Service', barSide: 'top' },
  { x: 436, y: 159, width: 168, height: 62, tone: 'gold', label: 'Instruction', barSide: 'top' },
  { x: 436, y: 282, width: 168, height: 62, tone: 'green', label: 'Research', barSide: 'top' },
];

const EDGES: SystemMapEdge[] = [
  { d: 'M204 67 C 244 67 244 190 276 190', tone: 'blue', trace: true, traceDelay: 1 },
  { d: 'M204 190 H 276', tone: 'green', trace: true, traceDelay: 1 },
  { d: 'M204 313 C 244 313 244 190 276 190', tone: 'gold', trace: true, traceDelay: 1 },
  { d: 'M364 190 C 404 190 404 67 436 67', tone: 'blue', trace: true, traceDelay: 2 },
  { d: 'M364 190 H 436', tone: 'gold', trace: true, traceDelay: 2 },
  { d: 'M364 190 C 404 190 404 313 436 313', tone: 'green', trace: true, traceDelay: 2 },
];

/**
 * Signature homepage schematic: institutional inputs (knowledge, people, tools)
 * routed through a governed AI core into outcomes (service, instruction, research).
 */
export default function HomeHeroSystemMap({ className }: { className?: string }) {
  return (
    <SystemMap
      title="How institutional AI connects inputs to outcomes"
      desc="Knowledge, people, and tools route through a governed institutional AI core into service, instruction, and research."
      width={640}
      height={380}
      nodes={NODES}
      edges={EDGES}
      crosshair={{ cx: 320, cy: 190, r: 44, tone: 'gold', label: 'Institutional AI' }}
      figureClassName={className}
    />
  );
}
