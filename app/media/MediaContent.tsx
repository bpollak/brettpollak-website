'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { mediaItems, MediaItem } from '@/lib/mediaData';

type CategoryFilter = 'all' | 'article' | 'interview' | 'whitepaper' | 'speaking';

export default function MediaContent() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  // Sort by date (most recent first)
  const sortedItems = useMemo(
    () => [...mediaItems].sort((a, b) => b.date.localeCompare(a.date)),
    []
  );

  // Filter items based on active filter
  const filteredItems = useMemo(() =>
    activeFilter === 'all'
      ? sortedItems
      : sortedItems.filter(item => item.category === activeFilter),
    [sortedItems, activeFilter]
  );

  // Group by year
  const itemsByYear = useMemo(() =>
    filteredItems.reduce((acc, item) => {
      const year = Number(item.date.slice(0, 4));
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(item);
      return acc;
    }, {} as Record<number, MediaItem[]>),
    [filteredItems]
  );

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-').map(Number);
    const localDate = new Date(year, month - 1, day);

    return localDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filterButtons: { value: CategoryFilter; label: string; count: number }[] = [
    { value: 'all', label: 'All', count: sortedItems.length },
    { value: 'article', label: 'Articles', count: sortedItems.filter(i => i.category === 'article').length },
    { value: 'interview', label: 'Interviews', count: sortedItems.filter(i => i.category === 'interview').length },
    { value: 'whitepaper', label: 'Whitepapers', count: sortedItems.filter(i => i.category === 'whitepaper').length },
    { value: 'speaking', label: 'Speaking', count: sortedItems.filter(i => i.category === 'speaking').length },
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

      {/* Results count */}
      <div className="mb-8 text-slate-500">
        Showing {filteredItems.length} publication{filteredItems.length !== 1 ? 's' : ''}
        {activeFilter !== 'all' && ` in ${activeFilter}`}
      </div>

      {/* Timeline visualization */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 transform md:-translate-x-1/2 hidden sm:block"></div>

        {Object.keys(itemsByYear).length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            <p className="text-xl">No publications found in this category.</p>
          </div>
        ) : (
          Object.keys(itemsByYear)
            .sort((a, b) => Number(b) - Number(a))
            .map((year, yearIdx) => {
              const yearGradients = [
                'from-slate-800 to-blue-900',
                'from-amber-500 to-orange-600',
                'from-rose-800 to-red-900',
                'from-blue-700 to-indigo-800',
                'from-cyan-600 to-blue-700'
              ];
              const yearGradient = yearGradients[yearIdx % yearGradients.length];

              return (
                <div key={year} className="mb-16 relative">
                  {/* Year marker on timeline */}
                  <div className="flex items-center justify-center mb-12">
                    <div className="relative z-10">
                      <div className={`relative bg-gradient-to-r ${yearGradient} text-white px-10 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-transform cursor-default`}>
                        <h2 className="text-4xl font-bold tracking-tight">{year}</h2>
                        <div className="text-xs uppercase font-bold tracking-widest opacity-80 mt-1">{itemsByYear[Number(year)].length} publication{itemsByYear[Number(year)].length !== 1 ? 's' : ''}</div>
                      </div>
                    </div>
                  </div>

                  {/* Publications for this year */}
                  <div className="space-y-12">
                    {itemsByYear[Number(year)].map((item, index) => {
                      const isLeft = index % 2 === 0;

                      // Vibrant color cycle for items
                      const colorCycle = [
                        {
                          from: 'from-blue-800',
                          to: 'to-indigo-700',
                          text: 'text-blue-800',
                          headingHover: 'group-hover:text-blue-800',
                          border: 'hover:border-blue-700',
                          badge: 'bg-blue-50 text-blue-900',
                          hoverBg: 'hover:bg-blue-50/30',
                          connectorLeft: 'from-blue-800 to-transparent',
                          connectorRight: 'from-transparent to-indigo-700',
                        },
                        {
                          from: 'from-amber-500',
                          to: 'to-orange-600',
                          text: 'text-amber-700',
                          headingHover: 'group-hover:text-amber-700',
                          border: 'hover:border-amber-500',
                          badge: 'bg-amber-50 text-amber-800',
                          hoverBg: 'hover:bg-amber-50/30',
                          connectorLeft: 'from-amber-500 to-transparent',
                          connectorRight: 'from-transparent to-orange-600',
                        },
                        {
                          from: 'from-rose-800',
                          to: 'to-red-900',
                          text: 'text-rose-800',
                          headingHover: 'group-hover:text-rose-800',
                          border: 'hover:border-rose-700',
                          badge: 'bg-rose-50 text-rose-900',
                          hoverBg: 'hover:bg-rose-50/30',
                          connectorLeft: 'from-rose-800 to-transparent',
                          connectorRight: 'from-transparent to-red-900',
                        },
                        {
                          from: 'from-cyan-600',
                          to: 'to-blue-600',
                          text: 'text-cyan-700',
                          headingHover: 'group-hover:text-cyan-700',
                          border: 'hover:border-cyan-600',
                          badge: 'bg-cyan-50 text-cyan-800',
                          hoverBg: 'hover:bg-cyan-50/30',
                          connectorLeft: 'from-cyan-600 to-transparent',
                          connectorRight: 'from-transparent to-blue-600',
                        },
                        {
                          from: 'from-slate-700',
                          to: 'to-slate-900',
                          text: 'text-slate-700',
                          headingHover: 'group-hover:text-slate-700',
                          border: 'hover:border-slate-600',
                          badge: 'bg-slate-100 text-slate-800',
                          hoverBg: 'hover:bg-slate-50/50',
                          connectorLeft: 'from-slate-700 to-transparent',
                          connectorRight: 'from-transparent to-slate-900',
                        },
                        {
                          from: 'from-indigo-700',
                          to: 'to-violet-800',
                          text: 'text-indigo-800',
                          headingHover: 'group-hover:text-indigo-800',
                          border: 'hover:border-indigo-600',
                          badge: 'bg-indigo-50 text-indigo-900',
                          hoverBg: 'hover:bg-indigo-50/30',
                          connectorLeft: 'from-indigo-700 to-transparent',
                          connectorRight: 'from-transparent to-violet-800',
                        },
                      ];
                      const color = colorCycle[(index + yearIdx) % colorCycle.length];

                      return (
                        <div
                          key={index}
                          className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 group/item`}
                        >
                          {/* Timeline dot */}
                          <div className="hidden sm:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                            <div className="relative">
                              <div className={`w-5 h-5 bg-gradient-to-br ${color.from} ${color.to} rounded-full ring-4 ring-white shadow-lg group-hover/item:scale-125 transition-transform duration-300`}></div>
                              <div className={`absolute inset-0 bg-gradient-to-br ${color.from} ${color.to} rounded-full animate-ping opacity-20`}></div>
                            </div>
                          </div>

                          {/* Content card */}
                          <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                            <div className={`group relative bg-white p-8 rounded-2xl border-2 border-slate-100 ${color.border} ${color.hoverBg} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 card-3d`}>
                              {/* Connector line to timeline */}
                              <div className={`hidden md:block absolute top-1/2 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-10 h-0.5 bg-gradient-to-r ${isLeft ? color.connectorLeft : color.connectorRight} opacity-30 group-hover/item:opacity-100 transition-opacity`}></div>

                              {/* Category badge */}
                              <div className={`inline-block px-4 py-1 ${color.badge} text-[10px] font-black rounded-full mb-4 uppercase tracking-widest border border-current border-opacity-10`}>
                                {item.category}
                              </div>

                              <h3 className={`text-2xl font-bold text-slate-900 mb-4 ${color.headingHover} transition-colors leading-tight`}>
                                {item.url !== '#' ? (
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 group/link"
                                  >
                                    <span className="relative">
                                      {item.title}
                                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover/link:w-full opacity-30`}></span>
                                    </span>
                                    <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </a>
                                ) : (
                                  item.title
                                )}
                              </h3>

                              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                                <div className="flex items-center gap-2">
                                  <div className={`p-1.5 rounded-lg ${color.badge.split(' ')[0]} bg-opacity-50`}>
                                    <svg className={`w-4 h-4 ${color.text}`} fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <span className="font-semibold tracking-wide uppercase text-[11px] text-slate-400">{formatDate(item.date)}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <div className={`p-1.5 rounded-lg ${color.badge.split(' ')[0]} bg-opacity-50`}>
                                    <svg className={`w-4 h-4 ${color.text}`} fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                    </svg>
                                  </div>
                                  <span className="font-bold text-slate-700">{item.publication}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Spacer for alternating layout */}
                          <div className="hidden md:block w-[calc(50%-2.5rem)]"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
        )}
      </div>

      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-2xl p-12 text-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200 bg-clip-text text-transparent mb-6">Speaking Engagements</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Available for keynotes, panels, and workshops on AI in higher education, digital transformation, and technology leadership.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-10 py-4 font-bold hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl rounded-lg group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Inquire About Speaking
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
