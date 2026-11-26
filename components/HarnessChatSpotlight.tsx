import Image from 'next/image';
import Link from 'next/link';
import { projectWalkthroughs } from '@/lib/projectWalkthroughs';

// Featured-experiment panel for TritonAI Harness Chat, shown on the homepage
// (inside the TritonAI section) and at the top of /products. Screens and the
// App Store link come from the case study in lib/projectWalkthroughs.ts, so
// both placements stay in step with it. Keep the beta framing: UC San Diego
// employees only, an experiment that may or may not go further.
const SLUG = 'tritonai-harness-chat';
export const HARNESS_CHAT_HREF = `/products/${SLUG}`;

const STEPS = [
  { title: 'Ask from your phone', note: 'In your own words, typed or spoken.' },
  { title: 'Your computer does the work', note: 'The Harness uses the files, calendar, and campus tools it already has.' },
  { title: 'You stay in charge', note: 'Approve steps when asked; drafts come back for you to send.' },
];

export default function HarnessChatSpotlight({ headingLevel = 'h2' }: { headingLevel?: 'h2' | 'h3' }) {
  const project = projectWalkthroughs.find(item => item.slug === SLUG);
  if (!project) return null;
  const Heading = headingLevel;
  const screens = (project.gallery ?? []).slice(0, 3);

  return (
    <div className="overflow-hidden rounded-sm bg-ink text-white">
      <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12 lg:p-12">
        <div>
          <p className="inline-flex flex-wrap items-center gap-x-2 rounded-full border border-white/20 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-signal-gold-lift">
            <span>Experimental beta</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>UC San Diego employees</span>
          </p>
          <Heading id="harness-chat-heading" className="mt-5 font-[family-name:var(--font-display)] text-3xl font-normal leading-tight text-white md:text-[2.5rem]">
            Your work computer, in your pocket
          </Heading>
          <p className="mt-4 max-w-xl text-base leading-7 text-on-dark">
            TritonAI Harness Chat is an experiment in reaching the TritonAI Harness from an iPhone.
            Ask in your own words, and the Harness on your Mac or PC does the work. The answer comes
            back to your phone in one running conversation.
          </p>

          <ol className="mt-7 grid gap-px overflow-hidden rounded-sm border border-white/15 bg-white/15 sm:grid-cols-3">
            {STEPS.map((step, index) => (
              <li key={step.title} className="bg-ink p-4">
                <span className="font-mono text-xs text-signal-gold-lift">{String(index + 1).padStart(2, '0')}</span>
                <span className="mt-1.5 block text-sm font-semibold text-white">{step.title}</span>
                <span className="mt-1 block text-sm leading-6 text-on-dark-muted">{step.note}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={HARNESS_CHAT_HREF}
              className="inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-wash-blue">
              See how it works →
            </Link>
            {project.creditUrl && (
              <a href={project.creditUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white">
                Beta listing on the App Store ↗<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-on-dark-muted">
            A test of the idea for staff who already use the TritonAI Harness. It is not a supported
            service, and it may or may not go further.
          </p>
        </div>

        {/* Phone screens: a swipeable row on small screens, three across from sm up. */}
        <ul className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0"
          aria-label="TritonAI Harness Chat screens from the built-in demo">
          {screens.map((screen, index) => (
            <li key={screen.image} className={`w-[58%] shrink-0 snap-center sm:w-auto ${index === 1 ? 'sm:-translate-y-4' : 'sm:translate-y-3'}`}>
              <Image src={screen.image} alt={screen.alt} width={screen.width} height={screen.height}
                className="h-auto w-full rounded-xl shadow-2xl shadow-black/40"
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 30vw, 58vw" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
