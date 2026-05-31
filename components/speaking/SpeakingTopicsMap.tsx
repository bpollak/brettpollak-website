import SystemMap, {
  type SystemMapEdge,
  type SystemMapNode,
} from '../diagram/SystemMap';

// Five recurring speaking topics radiating from one through-line hub.
const NODES: SystemMapNode[] = [
  { x: 272, y: 22, width: 176, height: 58, tone: 'blue', label: 'Vertical AI', barSide: 'top' },
  { x: 74, y: 128, width: 176, height: 58, tone: 'blue', label: 'Infrastructure', barSide: 'top' },
  { x: 470, y: 128, width: 176, height: 58, tone: 'gold', label: 'Agentic AI', barSide: 'top' },
  { x: 114, y: 300, width: 176, height: 58, tone: 'coral', label: 'Citizen Dev', barSide: 'top' },
  { x: 430, y: 300, width: 176, height: 58, tone: 'green', label: 'Governance', barSide: 'top' },
];

// Hub chip spans x 272..448 (cx 360, width 176), y 182..238 (cy 210, height 56).
// Spokes start at each node and end on the hub perimeter, so the dots flow inward.
const EDGES: SystemMapEdge[] = [
  { d: 'M360 80 L 360 182', tone: 'blue', flow: true },
  { d: 'M250 157 L 272 196', tone: 'blue', flow: true, flowDelay: 1 },
  { d: 'M470 157 L 448 196', tone: 'gold', flow: true, flowDelay: 2 },
  { d: 'M202 300 L 272 224', tone: 'coral', flow: true, flowDelay: 1 },
  { d: 'M518 300 L 448 224', tone: 'green', flow: true, flowDelay: 2 },
];

/**
 * Speaking topics network: five recurring talks connected to one
 * "AI in higher education" through-line.
 */
export default function SpeakingTopicsMap({ className }: { className?: string }) {
  return (
    <SystemMap
      title="Speaking topics network"
      desc="Five recurring speaking topics — vertical AI, AI as infrastructure, agentic AI, the citizen developer program, and governance — connect to one AI-in-higher-education through-line."
      width={720}
      height={420}
      nodes={NODES}
      edges={EDGES}
      core={{ cx: 360, cy: 210, tone: 'gold', label: 'AI in Higher Ed', width: 176 }}
      figureClassName={className}
    />
  );
}
