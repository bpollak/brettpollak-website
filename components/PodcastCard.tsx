'use client';

import Image from 'next/image';
import GeneratedThumbnail from './GeneratedThumbnail';

export interface PodcastCardData {
  id?: string;
  name: string;
  hosts: string;
  coverImage: string | null;
  category: string;
  summary: string;
  listenUrl: string;
  featured: boolean;
  upvotes?: number;
}

interface PodcastCardProps {
  podcast: PodcastCardData;
  index: number;
  colorStyle: {
    border: string;
    badge: string;
    hoverBg: string;
    accent: string;
  };
  hasUpvoted: boolean;
  onUpvote?: (id: string) => void;
  firebaseEnabled: boolean;
}

export default function PodcastCard({
  podcast,
  index,
  colorStyle,
  hasUpvoted,
  onUpvote,
  firebaseEnabled,
}: PodcastCardProps) {
  const isExternalImage =
    podcast.coverImage &&
    (podcast.coverImage.startsWith('http://') ||
      podcast.coverImage.startsWith('https://'));
  const isLocalImage = podcast.coverImage && !isExternalImage;
  const hasImage = !!podcast.coverImage;

  return (
    <div
      className={`group relative bg-white rounded-2xl border-2 border-slate-100 ${colorStyle.border} ${colorStyle.hoverBg} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 card-3d overflow-hidden animate-slide-up flex flex-col`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Cover Art */}
      <a
        href={podcast.listenUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-square overflow-hidden"
      >
        {isLocalImage && (
          <Image
            src={podcast.coverImage!}
            alt={`${podcast.name} podcast cover art`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        {isExternalImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={podcast.coverImage!}
            alt={`${podcast.name} podcast cover art`}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        {!hasImage && <GeneratedThumbnail name={podcast.name} />}

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Listen badge on hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/95 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
            Listen
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>

        {/* Featured badge */}
        {podcast.featured && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-amber-400/95 backdrop-blur-sm text-amber-950 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-md">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Brett&apos;s Pick
            </div>
          </div>
        )}
      </a>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category badge */}
        <div
          className={`inline-block self-start px-3 py-1 ${colorStyle.badge} text-[10px] font-black rounded-full mb-3 uppercase tracking-widest border border-current/10`}
        >
          {podcast.category}
        </div>

        <a
          href={podcast.listenUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <h2 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors leading-tight">
            {podcast.name}
          </h2>
        </a>

        <p className="text-sm text-slate-500 font-medium mb-3">
          {podcast.hosts}
        </p>

        <p className="text-slate-600 text-sm leading-relaxed flex-1">
          {podcast.summary}
        </p>

        {/* Upvote bar */}
        {firebaseEnabled && podcast.id && (
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (!hasUpvoted && onUpvote && podcast.id) {
                  onUpvote(podcast.id);
                }
              }}
              disabled={hasUpvoted}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                hasUpvoted
                  ? 'bg-rose-50 text-rose-600 cursor-default'
                  : 'bg-slate-50 text-slate-500 hover:bg-rose-50 hover:text-rose-600 active:scale-95'
              }`}
            >
              <svg
                className="w-4 h-4"
                fill={hasUpvoted ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {podcast.upvotes ?? 0}
            </button>

            {!podcast.featured && (
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                Community
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
