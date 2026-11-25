import Image from 'next/image';
import { featuredAppearance } from '@/lib/featuredAppearance';

// Decorative waveform under the artwork. Heights are fixed (not random) so the
// static export is identical on every build.
const WAVE = [
  5, 9, 14, 8, 12, 20, 11, 7, 16, 24, 13, 9, 18, 28, 15, 10, 22, 30, 17, 12,
  26, 19, 9, 14, 23, 32, 18, 11, 20, 27, 14, 8, 16, 22, 12, 7, 13, 19, 10, 6,
  11, 17, 25, 14, 9, 15, 21, 12, 7, 10, 16, 9, 6, 12, 8, 5,
];

function secondsFor(time: string): number {
  const [minutes, seconds] = time.split(':').map(Number);
  return minutes * 60 + seconds;
}

function formatDate(iso: string): string {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });
}

export default function FeaturedEpisode() {
  const episode = featuredAppearance;
  const watchUrl = `https://www.youtube.com/watch?v=${episode.youtubeId}`;

  return (
    <section className="border-b border-line bg-ink text-white" aria-labelledby="featured-episode-heading">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <a href={watchUrl} target="_blank" rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-sm border border-white/15">
            <Image src={episode.image} alt={episode.imageAlt} width={1280} height={720}
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              sizes="(min-width: 1024px) 540px, 100vw" />
            <span aria-hidden="true"
              className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink shadow-lg transition-colors group-hover:bg-signal-gold-lift">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span className="sr-only">Watch the episode on YouTube (opens in a new tab)</span>
          </a>
          <svg aria-hidden="true" viewBox={`0 0 ${WAVE.length * 6} 34`} preserveAspectRatio="none"
            className="mt-4 h-8 w-full text-signal-gold-lift">
            {WAVE.map((height, index) => (
              <rect key={index} x={index * 6 + 1.5} y={(34 - height) / 2} width="3" height={height} rx="1.5"
                fill="currentColor" opacity={index % 3 === 0 ? 0.95 : 0.55} />
            ))}
          </svg>
        </div>

        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-signal-gold-lift">
            New podcast episode · {episode.show}
          </p>
          <h2 id="featured-episode-heading" className="mt-4 text-3xl font-normal leading-tight sm:text-4xl">
            {episode.title}
          </h2>
          <p className="mt-3 font-mono text-xs text-on-dark-muted">
            {episode.episodeLabel} · {formatDate(episode.date)} · {episode.duration}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-on-dark">
            I joined {episode.host}, to talk through the work. {episode.summary}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href={episode.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-wash-blue">
              Listen to the episode ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={watchUrl} target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-white underline underline-offset-4">
              Watch on YouTube ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <div className="mt-9">
            <p className="border-b border-white/25 pb-2.5 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-on-dark-muted">
              Jump to a moment
            </p>
            <ol className="grid sm:grid-cols-2 sm:gap-x-8">
              {episode.chapters.map(chapter => (
                <li key={chapter.time} className="border-b border-white/12">
                  <a href={`${watchUrl}&t=${secondsFor(chapter.time)}s`} target="_blank" rel="noopener noreferrer"
                    className="group grid grid-cols-[3.25rem_1fr_auto] items-baseline gap-2 py-3">
                    <span className="font-mono text-xs text-signal-gold-lift">{chapter.time}</span>
                    <span className="text-sm font-medium text-white group-hover:underline group-hover:underline-offset-4">{chapter.title}</span>
                    <span aria-hidden="true" className="font-mono text-xs text-on-dark-muted">↗</span>
                    <span className="sr-only"> (opens YouTube at {chapter.time} in a new tab)</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
