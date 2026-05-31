import type { Metadata } from 'next';
import Reveal from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';
import HomeHeroSystemMap from '@/components/home/HomeHeroSystemMap';
import TritonAISystemMap from '@/components/tritongpt/TritonAISystemMap';
import SpeakingTopicsMap from '@/components/speaking/SpeakingTopicsMap';

export const metadata: Metadata = {
  title: 'Visual system preview',
  description: 'Internal preview of custom graphics and motion. Not indexed.',
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  return (
    <div className="page-shell" id="main-content">
      {/* Header */}
      <section className="border-b border-[color:var(--line)] page-hero">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-20">
          <p className="rule-label mb-4">Internal preview — not indexed</p>
          <h1 className="page-title">Living system map — visual kit</h1>
          <p className="page-intro mt-6">
            A working preview of the custom diagram kit and motion system before anything ships to
            the live pages. Scroll to see paths trace in; numbers count up; sections rise into view.
            Everything settles instantly if your system prefers reduced motion.
          </p>
        </div>
      </section>

      {/* Signature hero schematic */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <Reveal>
            <p className="rule-label mb-3">Signature hero schematic</p>
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">
              Inputs → governed core → outcomes
            </h2>
            <p className="mt-3 max-w-2xl text-[color:color-mix(in_srgb,var(--ink),transparent_30%)]">
              Knowledge, people, and tools route through a governed institutional AI core into
              service, instruction, and research.
            </p>
          </Reveal>
          <Reveal className="mt-8">
            <div className="editorial-panel p-6">
              <HomeHeroSystemMap />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Count-up stats */}
      <section className="tint-blue border-b border-[color:var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <Reveal>
            <p className="rule-label mb-6">Evidence, counted up on view</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            <Reveal>
              <div className="editorial-panel p-6" data-tone="blue">
                <div className="text-5xl font-semibold text-[color:var(--ink)]">
                  <CountUp value={73000} suffix="+" />
                </div>
                <p className="rule-label mt-3">Campus users</p>
              </div>
            </Reveal>
            <Reveal delayMs={120}>
              <div className="editorial-panel p-6" data-tone="gold">
                <div className="text-5xl font-semibold text-[color:var(--ink)]">
                  <CountUp value={91} suffix="%" />
                </div>
                <p className="rule-label mt-3">Faster contract review</p>
              </div>
            </Reveal>
            <Reveal delayMs={240}>
              <div className="editorial-panel p-6" data-tone="green">
                <div className="text-5xl font-semibold text-[color:var(--ink)]">
                  <CountUp value={80} suffix="+" />
                </div>
                <p className="rule-label mt-3">Campus collaborators</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Per-page system maps */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <Reveal>
            <p className="rule-label mb-3">Per-page diagrams (same kit)</p>
            <h2 className="text-2xl font-semibold text-[color:var(--ink)]">
              Reusable across the site
            </h2>
            <p className="mt-3 max-w-2xl text-[color:color-mix(in_srgb,var(--ink),transparent_30%)]">
              The same primitives compose into a flagship TritonAI architecture map and a speaking
              topics network — proposed for those currently text-only pages.
            </p>
          </Reveal>

          <Reveal className="mt-8">
            <figure className="editorial-panel p-6">
              <figcaption className="rule-label mb-4">TritonAI — system architecture</figcaption>
              <TritonAISystemMap />
            </figure>
          </Reveal>

          <Reveal className="mt-8">
            <figure className="editorial-panel p-6">
              <figcaption className="rule-label mb-4">Speaking — topics network</figcaption>
              <SpeakingTopicsMap />
            </figure>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
