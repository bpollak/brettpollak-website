'use client';

const BACKGROUNDS = [
  'bg-ink',
  'bg-accent',
  'bg-ink-2',
  'bg-ink',
  'bg-accent',
  'bg-ink-2',
  'bg-ink',
  'bg-accent',
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function getInitials(name: string): string {
  return name
    .split(/[\s:&,\-]+/)
    .filter((w) => w.length > 0 && w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase() || name.slice(0, 2).toUpperCase();
}

export default function GeneratedThumbnail({ name }: { name: string }) {
  const background = BACKGROUNDS[hashString(name) % BACKGROUNDS.length];
  const initials = getInitials(name);

  return (
    <div
      className={`absolute inset-0 ${background} flex flex-col items-center justify-center p-6`}
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-paper" />
        <div className="absolute bottom-8 right-6 w-24 h-24 border-2 border-paper" />
        <div className="absolute top-1/3 right-4 w-8 h-8 border-2 border-paper" />
      </div>

      {/* Microphone icon */}
      <svg
        className="w-10 h-10 text-paper/30 mb-3"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5z" />
        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
      </svg>

      {/* Initials */}
      <div className="text-paper text-4xl font-black tracking-wider">
        {initials}
      </div>

      {/* Podcast name */}
      <div className="text-paper/70 text-xs font-semibold mt-2 text-center leading-tight max-w-[80%] line-clamp-2 font-[family-name:var(--font-geist-mono)] uppercase tracking-wide">
        {name}
      </div>
    </div>
  );
}
