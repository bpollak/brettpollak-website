import SystemMap, {
  type SystemMapEdge,
  type SystemMapNode,
} from '../diagram/SystemMap';

// Five recurring speaking topics radiating from a single through-line.
const NODES: SystemMapNode[] = [
  { x: 272, y: 27, width: 176, height: 58, tone: 'blue', label: 'Vertical AI', barSide: 'top' },
  { x: 420, y: 135, width: 176, height: 58, tone: 'gold', label: 'Agentic AI', barSide: 'top' },
  { x: 364, y: 309, width: 176, height: 58, tone: 'green', label: 'Governance', barSide: 'top' },
  { x: 180, y: 309, width: 176, height: 58, tone: 'coral', label: 'Citizen Dev', barSide: 'top' },
  { x: 124, y: 135, width: 176, height: 58, tone: 'blue', label: 'Infrastructure', barSide: 'top' },
];

const EDGES: SystemMapEdge[] = [
  { d: 'M360 210 L 360 56', tone: 'blue', trace: true, traceDelay: 1 },
  { d: 'M360 210 L 508 164', tone: 'gold', trace: true, traceDelay: 1 },
  { d: 'M360 210 L 452 338', tone: 'green', trace: true, traceDelay: 2 },
  { d: 'M360 210 L 268 338', tone: 'coral', trace: true, traceDelay: 2 },
  { d: 'M360 210 L 212 164', tone: 'blue', trace: true, traceDelay: 3 },
];

/**
 * Speaking topics network: five recurring talks connected to one
 * "AI in higher education" through-line.
 */
export default function SpeakingTopicsMap({ className }: { className?: string }) {
  return (
    <SystemMap
      title="Speaking topics network"
      desc="Five recurring speaking topics — vertical AI, agentic AI, governance, citizen developers, and AI as infrastructure — connect to one AI-in-higher-education through-line."
      width={720}
      height={420}
      nodes={NODES}
      edges={EDGES}
      crosshair={{ cx: 360, cy: 210, r: 44, tone: 'gold', label: 'AI in Higher Ed' }}
      figureClassName={className}
    />
  );
}
