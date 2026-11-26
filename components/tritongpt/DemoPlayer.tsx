'use client';

import { useState } from 'react';

export interface Demo {
  title: string;
  tag: string;
  description: string;
  src: string;
  poster?: string;
}

/**
 * One video player with a list of recorded demos beside it (a scrollable row
 * of tabs on small screens). Videos never autoplay; picking a demo swaps the
 * source and leaves playback to the viewer.
 */
export default function DemoPlayer({ demos }: { demos: Demo[] }) {
  const [active, setActive] = useState(0);
  const demo = demos[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.6fr] lg:gap-10">
      <div
        role="group"
        aria-label="Choose a demo"
        className="-mx-6 flex gap-3 overflow-x-auto px-6 pb-1 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {demos.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.src}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(index)}
              className={`w-64 shrink-0 border-l-4 px-4 py-3 text-left transition-colors lg:w-auto ${
                selected
                  ? 'border-l-signal-gold-lift bg-white/10 text-white'
                  : 'border-l-white/15 text-on-dark hover:border-l-white/40 hover:bg-white/5'
              }`}
            >
              <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-signal-gold-lift">
                {String(index + 1).padStart(2, '0')} · {item.tag}
              </span>
              <span className="mt-1 block font-semibold">{item.title}</span>
              <span className={`mt-1 hidden text-sm leading-6 ${selected ? 'text-on-dark' : 'text-on-dark-muted'} lg:block`}>
                {item.description}
              </span>
            </button>
          );
        })}
      </div>

      <div>
        <div className="overflow-hidden rounded-md border border-white/15 bg-black shadow-2xl shadow-black/40">
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            <span className="ml-3 truncate font-mono text-[0.68rem] text-on-dark-muted">TritonGPT · {demo.title}</span>
          </div>
          <video
            key={demo.src}
            className="aspect-video w-full bg-black"
            muted
            playsInline
            controls
            preload="metadata"
            poster={demo.poster}
            aria-label={`${demo.title} demo video`}
          >
            <source src={demo.src} />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mt-4 text-sm leading-6 text-on-dark lg:hidden">{demo.description}</p>
      </div>
    </div>
  );
}
