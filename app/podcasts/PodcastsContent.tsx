'use client';

import Image from 'next/image';
import { useState, useMemo } from 'react';
import { podcasts, Podcast } from '@/lib/podcastData';

type CategoryFilter = 'all' | 'AI & Tech' | 'Technology' | 'Economics & Data';

export default function PodcastsContent() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredPodcasts = useMemo(() =>
    activeFilter === 'all'
      ? podcasts
      : podcasts.filter(p => p.category === activeFilter),
    [activeFilter]
  );

  const categories = useMemo(() => {
    const unique = [...new Set(podcasts.map(p => p.category))];
    return unique;
  }, []);

  const filterButtons: { value: CategoryFilter; label: string; count: number }[] = [
    { value: 'all', label: 'All', count: podcasts.length },
    ...categories.map(cat => ({
      value: cat as CategoryFilter,
      label: cat,
      count: podcasts.filter(p => p.category === cat).length,
    })),
  ];

  const colorCycle = [
    {
      border: 'hover:border-blue-700',
      badge: 'bg-blue-50 text-blue-900',
      hoverBg: 'hover:bg-blue-50/30',
      accent: 'from-blue-800 to-indigo-700',
    },
    {
      border: 'hover:border-amber-500',
      badge: 'bg-amber-50 text-amber-800',
      hoverBg: 'hover:bg-amber-50/30',
      accent: 'from-amber-500 to-orange-600',
    },
    {
      border: 'hover:border-rose-700',
      badge: 'bg-rose-50 text-rose-900',
      hoverBg: 'hover:bg-rose-50/30',
      accent: 'from-rose-800 to-red-900',
    },
    {
      border: 'hover:border-cyan-600',
      badge: 'bg-cyan-50 text-cyan-800',
      hoverBg: 'hover:bg-cyan-50/30',
      accent: 'from-cyan-600 to-blue-600',
    },
    {
      border: 'hover:border-indigo-600',
      badge: 'bg-indigo-50 text-indigo-900',
      hoverBg: 'hover:bg-indigo-50/30',
      accent: 'from-indigo-700 to-violet-800',
    },
    {
      border: 'hover:border-slate-600',
      badge: 'bg-slate-100 text-slate-800',
      hoverBg: 'hover:bg-slate-50/50',
      accent: 'from-slate-700 to-slate-900',
    },
  ];

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12">
        {filterButtons.map(({ value, label, count }) => (
          <button
            key={value}
            onClick={() => setActiveFilter(value)}
            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 ${
              activeFilter === value
                ? 'bg-gradient-to-r from-slate-800 to-blue-900 text-white shadow-lg'
                : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-slate-400 hover:text-slate-900'
            }`}
          >
            {label}
            <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
              activeFilter === value
                ? 'bg-white/20 text-white'
                : 'bg-slate-100 text-slate-500'
            }`}>
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Podcast Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPodcasts.map((podcast, index) => {
          const color = colorCycle[index % colorCycle.length];

          return (
            <a
              key={podcast.name}
              href={podcast.listenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-white rounded-2xl border-2 border-slate-100 ${color.border} ${color.hoverBg} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 card-3d overflow-hidden animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Cover Art */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={podcast.coverImage}
                  alt={`${podcast.name} podcast cover art`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                {/* Listen badge on hover */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/95 backdrop-blur-sm text-slate-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                    Listen
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category badge */}
                <div className={`inline-block px-3 py-1 ${color.badge} text-[10px] font-black rounded-full mb-3 uppercase tracking-widest border border-current border-opacity-10`}>
                  {podcast.category}
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors leading-tight">
                  {podcast.name}
                </h2>

                <p className="text-sm text-slate-500 font-medium mb-3">
                  {podcast.hosts}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {podcast.summary}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
