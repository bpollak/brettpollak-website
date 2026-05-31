'use client';

import { useEffect, useId, useState } from 'react';
import { useInView } from '../motion/useInView';
import DiagramFrame from './DiagramFrame';
import DiagramNode from './DiagramNode';
import SignalPath from './SignalPath';
import CrosshairMark from './CrosshairMark';
import { TONE_HEX, type Tone } from './tones';

export interface SystemMapNode {
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

export interface SystemMapEdge {
  d: string;
  tone?: Tone;
  dashed?: boolean;
  trace?: boolean;
  traceDelay?: 1 | 2 | 3;
}

export interface SystemMapCrosshair {
  cx: number;
  cy: number;
  r?: number;
  tone?: Tone;
  label?: string;
}

interface SystemMapProps {
  title: string;
  desc: string;
  width: number;
  height: number;
  nodes: SystemMapNode[];
  edges?: SystemMapEdge[];
  crosshair?: SystemMapCrosshair;
  className?: string;
  figureClassName?: string;
}

/**
 * Data-driven "living system map": a framed SVG of labeled nodes connected by
 * signal paths, with an optional crosshair core. Edges that opt into `trace`
 * draw themselves in once the diagram scrolls into view.
 */
export default function SystemMap({
  title,
  desc,
  width,
  height,
  nodes,
  edges = [],
  crosshair,
  className,
  figureClassName,
}: SystemMapProps) {
  const id = useId();
  const titleId = `${id}-title`;
  const descId = `${id}-desc`;
  const { ref, inView } = useInView<HTMLElement>();
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    setArmed(true);
  }, []);

  const edgeTones = Array.from(new Set(edges.map((edge) => edge.tone ?? 'ink')));
  const figureClasses = ['diagram', armed ? 'armed' : '', inView ? 'is-visible' : '', figureClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <figure ref={ref} className={figureClasses}>
      <svg
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
        viewBox={`0 0 ${width} ${height}`}
        className={className ?? 'h-auto w-full'}
        fill="none"
      >
        <title id={titleId}>{title}</title>
        <desc id={descId}>{desc}</desc>
        <defs>
          {edgeTones.map((tone) => (
            <marker
              key={tone}
              id={`${id}-arrow-${tone}`}
              markerWidth="10"
              markerHeight="10"
              refX="8"
              refY="5"
              orient="auto"
            >
              <path d="M0 0l10 5-10 5z" fill={TONE_HEX[tone as Tone]} />
            </marker>
          ))}
        </defs>
        <DiagramFrame width={width} height={height} />
        {edges.map((edge) => (
          <SignalPath
            key={edge.d}
            d={edge.d}
            tone={edge.tone}
            dashed={edge.dashed}
            trace={edge.trace}
            traceDelay={edge.traceDelay}
            markerId={`${id}-arrow-${edge.tone ?? 'ink'}`}
          />
        ))}
        {nodes.map((node) => (
          <DiagramNode key={`${node.label}-${node.x}-${node.y}`} {...node} />
        ))}
        {crosshair ? <CrosshairMark {...crosshair} /> : null}
      </svg>
    </figure>
  );
}
