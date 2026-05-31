import { TONE_HEX, PAPER, LINE, INK, type Tone } from './tones';

interface CoreChipProps {
  cx: number;
  cy: number;
  tone?: Tone;
  label: string;
  width?: number;
  height?: number;
}

/**
 * The central "core" of a system map: a solid chip whose label sits on its own
 * opaque background. Drawn AFTER the connectors so nothing can run under the
 * text — connectors terminate at the chip's edge, keeping the label legible.
 * A small tone accent bar ties it to the node language.
 */
export default function CrosshairMark({
  cx,
  cy,
  tone = 'gold',
  label,
  width = 156,
  height = 60,
}: CoreChipProps) {
  const hex = TONE_HEX[tone];
  const x = cx - width / 2;
  const y = cy - height / 2;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={12} fill={PAPER} stroke={LINE} strokeWidth={1.5} />
      <rect x={x} y={y} width={width} height={4} rx={2} fill={hex} />
      <text
        x={cx}
        y={cy + 6}
        textAnchor="middle"
        fontFamily="var(--font-interface)"
        fontSize={16}
        fontWeight={700}
        fill={INK}
      >
        {label}
      </text>
    </g>
  );
}
