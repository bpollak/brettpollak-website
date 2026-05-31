import { TONE_HEX, PAPER, LINE, INK, type Tone } from './tones';

interface CrosshairMarkProps {
  cx: number;
  cy: number;
  r?: number;
  tone?: Tone;
  label?: string;
}

/**
 * The signature center mark: a paper disc with a dashed signal ring and a
 * crosshair, optionally captioned beneath. Pure SVG fragment.
 */
export default function CrosshairMark({ cx, cy, r = 34, tone = 'gold', label }: CrosshairMarkProps) {
  const hex = TONE_HEX[tone];
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={PAPER} stroke={LINE} strokeWidth={1.5} />
      <circle cx={cx} cy={cy} r={r * 0.58} fill="none" stroke={hex} strokeWidth={1.5} strokeDasharray="3 4" />
      <path d={`M${cx} ${cy - 14}v28M${cx - 14} ${cy}h28`} stroke={INK} strokeWidth={1.5} />
      {label ? (
        <text
          x={cx}
          y={cy + r + 22}
          textAnchor="middle"
          fontFamily="var(--font-interface)"
          fontSize={14}
          fontWeight={700}
          fill={INK}
        >
          {label}
        </text>
      ) : null}
    </g>
  );
}
