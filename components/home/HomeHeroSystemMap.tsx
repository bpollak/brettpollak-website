import SystemMap, {
  type SystemMapEdge,
  type SystemMapNode,
} from '../diagram/SystemMap';

// Seven portfolio areas (left) flow through the institutional technology core (center)
// into the campus outcomes they enable (right).
const NODES: SystemMapNode[] = [
  { x: 36, y: 24, width: 168, height: 50, tone: 'blue', label: 'Hybrid cloud' },
  { x: 36, y: 86, width: 168, height: 50, tone: 'green', label: 'Data & analytics' },
  { x: 36, y: 148, width: 168, height: 50, tone: 'gold', label: 'Service desk' },
  { x: 36, y: 210, width: 168, height: 50, tone: 'blue', label: 'Endpoint' },
  { x: 36, y: 272, width: 168, height: 50, tone: 'green', label: 'Collaboration' },
  { x: 36, y: 334, width: 168, height: 50, tone: 'gold', label: 'AI platforms' },
  { x: 436, y: 86, width: 168, height: 50, tone: 'blue', label: 'Teaching', barSide: 'top' },
  { x: 436, y: 168, width: 168, height: 50, tone: 'gold', label: 'Research', barSide: 'top' },
  { x: 436, y: 250, width: 168, height: 50, tone: 'green', label: 'Operations', barSide: 'top' },
];

// Core chip spans x 242..398 (cx 320, width 156), y 160..220 (cy 190, height 60).
const EDGES: SystemMapEdge[] = [
  { d: 'M204 49 C 240 49 206 168 242 168', tone: 'blue', flow: true },
  { d: 'M204 111 C 240 111 206 178 242 178', tone: 'green', flow: true },
  { d: 'M204 173 C 240 173 206 188 242 188', tone: 'gold', flow: true },
  { d: 'M204 235 C 240 235 206 200 242 200', tone: 'blue', flow: true },
  { d: 'M204 297 C 240 297 206 210 242 210', tone: 'green', flow: true },
  { d: 'M204 359 C 240 359 206 220 242 220', tone: 'gold', flow: true },
  { d: 'M398 168 C 432 168 402 111 436 111', tone: 'blue', flow: true, flowDelay: 1 },
  { d: 'M398 190 H 436', tone: 'gold', flow: true, flowDelay: 1 },
  { d: 'M398 212 C 432 212 402 275 436 275', tone: 'green', flow: true, flowDelay: 1 },
];

/**
 * Homepage schematic: six portfolio areas routed through the institutional
 * technology core into teaching, research, and operations.
 */
export default function HomeHeroSystemMap({ className }: { className?: string }) {
  return (
    <SystemMap
      title="What the portfolio connects to"
      desc="Six technology areas flow through a shared institutional core into teaching, research, and operations across the university."
      width={640}
      height={410}
      nodes={NODES}
      edges={EDGES}
      core={{ cx: 320, cy: 190, tone: 'gold', label: 'Campus community', width: 168 }}
      figureClassName={className}
    />
  );
}
