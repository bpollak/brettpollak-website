'use client';

import { useEffect, useId, useRef } from 'react';
import DiagramFrame from './DiagramFrame';
import DiagramNode from './DiagramNode';
import SignalPath from './SignalPath';
import CrosshairMark from './CrosshairMark';
import { type Tone } from './tones';

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
  flow?: boolean;
  flowDelay?: 1 | 2;
}

export interface SystemMapCore {
  cx: number;
  cy: number;
  tone?: Tone;
  label: string;
  width?: number;
  height?: number;
}

interface SystemMapProps {
  title: string;
  desc: string;
  width: number;
  height: number;
  nodes: SystemMapNode[];
  edges?: SystemMapEdge[];
  core?: SystemMapCore;
  className?: string;
  figureClassName?: string;
}

/**
 * Data-driven "living system map": a framed SVG of labeled nodes connected by
 * flowing dotted signal lines, with an optional labeled core chip. Direction is
 * carried by the flow of the dots and the layout — no arrowheads.
 */
export default function SystemMap({
  title,
  desc,
  width,
  height,
  nodes,
  edges = [],
  core,
  className,
  figureClassName,
}: SystemMapProps) {
  const id = useId();
  const titleId = `${id}-title`;
  const descId = `${id}-desc`;
  const ref = useRef<HTMLElement | null>(null);

  // Reveal the figure once it scrolls into view (drives a soft fade-in via
  // classList — no React state, so it renders fully without JS and stays static
  // under reduced motion).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            observer.disconnect();
          }
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const figureClasses = ['diagram', figureClassName].filter(Boolean).join(' ');

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
        <DiagramFrame width={width} height={height} />
        {edges.map((edge) => (
          <SignalPath
            key={edge.d}
            d={edge.d}
            tone={edge.tone}
            dashed={edge.dashed}
            flow={edge.flow ?? true}
            flowDelay={edge.flowDelay}
          />
        ))}
        {nodes.map((node) => (
          <DiagramNode key={`${node.label}-${node.x}-${node.y}`} {...node} />
        ))}
        {core ? <CrosshairMark {...core} /> : null}
      </svg>
    </figure>
  );
}

