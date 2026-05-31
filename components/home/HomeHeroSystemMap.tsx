import SystemMap, {
  type SystemMapEdge,
  type SystemMapNode,
} from '../diagram/SystemMap';

// Inputs (left) flow through the institutional AI core (center) into outcomes (right).
// All connectors meet the core chip on its left/right edges so nothing crosses a label.
const NODES: SystemMapNode[] = [
  { x: 36, y: 36, width: 168, height: 62, tone: 'blue', label: 'Knowledge', index: '01' },
  { x: 36, y: 159, width: 168, height: 62, tone: 'green', label: 'People', index: '02' },
  { x: 36, y: 282, width: 168, height: 62, tone: 'gold', label: 'Tools', index: '03' },
  { x: 436, y: 36, width: 168, height: 62, tone: 'blue', label: 'Service', barSide: 'top' },
  { x: 436, y: 159, width: 168, height: 62, tone: 'gold', label: 'Instruction', barSide: 'top' },
  { x: 436, y: 282, width: 168, height: 62, tone: 'green', label: 'Research', barSide: 'top' },
];

// Core chip spans x 242..398 (cx 320, width 156), y 160..220 (cy 190, height 60).
const EDGES: SystemMapEdge[] = [
  { d: 'M204 67 C 240 67 206 168 242 168', tone: 'blue', flow: true },
  { d: 'M204 190 H 242', tone: 'green', flow: true },
  { d: 'M204 313 C 240 313 206 212 242 212', tone: 'gold', flow: true },
  { d: 'M398 168 C 432 168 402 67 436 67', tone: 'blue', flow: true, flowDelay: 1 },
  { d: 'M398 190 H 436', tone: 'gold', flow: true, flowDelay: 1 },
  { d: 'M398 212 C 432 212 402 313 436 313', tone: 'green', flow: true, flowDelay: 1 },
];

/**
 * Signature homepage schematic: institutional inputs (knowledge, people, tools)
 * routed through a governed AI core into outcomes (service, instruction, research).
 */
export default function HomeHeroSystemMap({ className }: { className?: string }) {
  return (
    <SystemMap
      title="How institutional AI connects inputs to outcomes"
      desc="Knowledge, people, and tools flow through a governed institutional AI core into service, instruction, and research."
      width={640}
      height={380}
      nodes={NODES}
      edges={EDGES}
      core={{ cx: 320, cy: 190, tone: 'gold', label: 'Institutional AI', width: 156 }}
      figureClassName={className}
    />
  );
}
