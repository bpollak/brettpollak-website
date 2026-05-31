import { TONE_HEX, type Tone } from './tones';

interface SignalPathProps {
  d: string;
  tone?: Tone;
  /** Static dotted connector (the established "signal" look). */
  dashed?: boolean;
  /** Solid line that draws itself in once when the diagram scrolls into view. */
  trace?: boolean;
  /** Stagger the draw-in: 1, 2, or 3. */
  traceDelay?: 1 | 2 | 3;
  markerId?: string;
  strokeWidth?: number;
}

/**
 * A connector between nodes. Either a static dotted "signal" line or a solid
 * line that traces itself in (via stroke-dashoffset on a normalized pathLength).
 */
export default function SignalPath({
  d,
  tone = 'ink',
  dashed = false,
  trace = false,
  traceDelay,
  markerId,
  strokeWidth = 2,
}: SignalPathProps) {
  const hex = TONE_HEX[tone];
  const marker = markerId ? `url(#${markerId})` : undefined;

  if (dashed) {
    return (
      <path
        d={d}
        fill="none"
        stroke={hex}
        strokeWidth={strokeWidth}
        strokeDasharray="1 11"
        strokeLinecap="round"
        markerEnd={marker}
        opacity={0.85}
      />
    );
  }

  const traceClass = trace
    ? `trace-path${traceDelay ? ` trace-delay-${traceDelay}` : ''}`
    : undefined;

  return (
    <path
      className={traceClass}
      d={d}
      fill="none"
      stroke={hex}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      pathLength={trace ? 1 : undefined}
      markerEnd={marker}
    />
  );
}
