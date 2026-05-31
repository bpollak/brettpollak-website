import { TONE_HEX, PAPER_BASE, LINE, INK, SUBTEXT, type Tone } from './tones';

interface DiagramNodeProps {
  x: number;
  y: number;
  width?: number;
  height?: number;
  tone?: Tone;
  label: string;
  sub?: string;
  index?: string;
  barSide?: 'left' | 'top';
}

/**
 * A labeled node: a rounded rectangle with a colored signal bar, an optional
 * monospace index, a title, and an optional subtitle. Pure SVG fragment —
 * render inside an <svg>.
 */
export default function DiagramNode({
  x,
  y,
  width = 214,
  height = 72,
  tone = 'blue',
  label,
  sub,
  index,
  barSide = 'left',
}: DiagramNodeProps) {
  const hex = TONE_HEX[tone];
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={12} fill={PAPER_BASE} stroke={LINE} strokeWidth={1.5} />
      {barSide === 'left' ? (
        <rect x={x} y={y} width={6} height={height} rx={3} fill={hex} />
      ) : (
        <rect x={x} y={y} width={width} height={6} rx={3} fill={hex} />
      )}
      {index ? (
        <text
          x={x + width - 14}
          y={y + 22}
          textAnchor="end"
          fontFamily="var(--font-mono, monospace)"
          fontSize={12}
          letterSpacing="0.08em"
          fill={hex}
        >
          {index}
        </text>
      ) : null}
      <text
        x={x + (barSide === 'left' ? 22 : 16)}
        y={y + (sub ? 32 : Math.round(height / 2) + 6)}
        fontFamily="var(--font-interface)"
        fontSize={18}
        fontWeight={600}
        fill={INK}
      >
        {label}
      </text>
      {sub ? (
        <text
          x={x + (barSide === 'left' ? 22 : 16)}
          y={y + 54}
          fontFamily="var(--font-interface)"
          fontSize={13}
          fill={SUBTEXT}
        >
          {sub}
        </text>
      ) : null}
    </g>
  );
}
