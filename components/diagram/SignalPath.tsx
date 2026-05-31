import { TONE_HEX, type Tone } from './tones';

interface SignalPathProps {
  d: string;
  tone?: Tone;
  /** Static dotted connector (no motion). */
  dashed?: boolean;
  /** Flowing dotted connector — dots drift along the path direction. */
  flow?: boolean;
  /** Desync flowing lines from each other: 1 or 2. */
  flowDelay?: 1 | 2;
  strokeWidth?: number;
}

/**
 * A connector between nodes. Direction is conveyed by the *flow* of the dots
 * (and the left→core→right layout), not by an arrowhead — which keeps every
 * connector visually consistent regardless of its curve.
 */
export default function SignalPath({
  d,
  tone = 'ink',
  dashed = false,
  flow = true,
  flowDelay,
  strokeWidth = 3,
}: SignalPathProps) {
  const hex = TONE_HEX[tone];
  const flowClass = flow
    ? `flow-path${flowDelay ? ` flow-delay-${flowDelay}` : ''}`
    : undefined;

  return (
    <path
      className={flowClass}
      d={d}
      fill="none"
      stroke={hex}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeDasharray={dashed && !flow ? '1 12' : undefined}
      opacity={0.9}
    />
  );
}
