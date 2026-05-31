import { PAPER, LINE } from './tones';

interface DiagramFrameProps {
  width: number;
  height: number;
  rx?: number;
}

/**
 * The paper-strong rounded frame that sits behind every system-map diagram.
 * Render as the first child inside an <svg>.
 */
export default function DiagramFrame({ width, height, rx = 18 }: DiagramFrameProps) {
  return (
    <rect
      x={1}
      y={1}
      width={width - 2}
      height={height - 2}
      rx={rx}
      fill={PAPER}
      stroke={LINE}
      strokeWidth={2}
    />
  );
}
