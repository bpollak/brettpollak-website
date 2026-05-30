'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { mediaItems, MediaItem } from '@/lib/mediaData';

type CategoryFilter = 'all' | 'article' | 'interview' | 'whitepaper' | 'speaking' | 'award';

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
    { value: 'award', label: 'Awards', count: sortedItems.filter(i => i.category === 'award').length },
  ];

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12">
        {filterButtons.map(({ value, label, count }) => (
          <button
            key={value}
            onClick={() => setActiveFilter(value)}
            className={`px-5 py-2.5 text-sm uppercase tracking-wide font-[family-name:var(--font-geist-mono)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink border-2 border-ink ${
              activeFilter === value
                ? 'bg-ink text-paper'
                : 'bg-paper text-ink hover:bg-accent'
            }`}
          >
            {label}
            <span className={`ml-2 px-2 py-0.5 text-xs border-2 border-current ${
              activeFilter === value
                ? 'text-paper'
                : 'text-ink'
            }`}>
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="mb-8 text-muted font-[family-name:var(--font-geist-mono)] uppercase tracking-wide text-sm">
        Showing {filteredItems.length} publication{filteredItems.length !== 1 ? 's' : ''}
        {activeFilter !== 'all' && ` in ${activeFilter}`}
      </div>

      {/* Timeline visualization */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-ink transform md:-translate-x-1/2 hidden sm:block"></div>

        {Object.keys(itemsByYear).length === 0 ? (
          <div className="text-center py-16 text-muted">
            <p className="text-xl">No publications found in this category.</p>
          </div>
        ) : (
          Object.keys(itemsByYear)
            .sort((a, b) => Number(b) - Number(a))
            .map((year, yearIdx) => {
              return (
                <div key={year} className="mb-16 relative">
                  {/* Year marker on timeline */}
                  <div className="flex items-center justify-center mb-12">
                    <div className="relative z-10">
                      <div className="relative bg-ink text-paper px-10 py-4 border-2 border-ink shadow-hard cursor-default">
                        <h2 className="text-4xl font-bold tracking-tight">{year}</h2>
                        <div className="text-xs uppercase font-bold tracking-widest text-paper/70 mt-1 font-[family-name:var(--font-geist-mono)]">{itemsByYear[Number(year)].length} publication{itemsByYear[Number(year)].length !== 1 ? 's' : ''}</div>
                      </div>
                    </div>
                  </div>

                  {/* Publications for this year */}
                  <div className="space-y-12">
                    {itemsByYear[Number(year)].map((item, index) => {
                      const isLeft = index % 2 === 0;
                      void yearIdx;

                      return (
                        <div
                          key={index}
                          className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 group/item`}
                        >
                          {/* Timeline dot */}
                          <div className="hidden sm:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10">
                            <div className="relative">
                              <div className="w-5 h-5 bg-accent border-2 border-ink ring-4 ring-paper group-hover/item:scale-125 transition-transform duration-300"></div>
                            </div>
                          </div>

                          {/* Content card */}
                          <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                            <div className="group relative card-hard p-8">
                              {/* Connector line to timeline */}
                              <div className={`hidden md:block absolute top-1/2 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-10 h-0.5 bg-ink opacity-30 group-hover/item:opacity-100 transition-opacity`}></div>

                              {/* Category badge */}
                              <div className="inline-block px-4 py-1 border-2 border-ink text-ink text-[10px] font-black mb-4 uppercase tracking-widest font-[family-name:var(--font-geist-mono)]">
                                {item.category}
                              </div>

                              <h3 className="text-2xl font-bold text-ink mb-4 group-hover:text-accent transition-colors leading-tight">
                                {item.url !== '#' ? (
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 group/link"
                                  >
                                    <span className="relative">
                                      {item.title}
                                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/link:w-full"></span>
                                    </span>
                                    <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </a>
                                ) : (
                                  item.title
                                )}
                              </h3>

                              <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
                                <div className="flex items-center gap-2">
                                  <div className="p-1.5 bg-paper-2 border-2 border-ink">
                                    <svg className="w-4 h-4 text-ink" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <span className="font-semibold tracking-wide uppercase text-[11px] text-muted font-[family-name:var(--font-geist-mono)]">{formatDate(item.date)}</span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <div className="p-1.5 bg-paper-2 border-2 border-ink">
                                    <svg className="w-4 h-4 text-ink" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                    </svg>
                                  </div>
                                  <span className="font-bold text-ink">{item.publication}</span>
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

      <div className="relative section-dark border-2 border-ink p-12 text-center overflow-hidden mt-20">
        <div className="relative">
          <h2 className="display-title display-title--lg text-paper mb-6">Want to Compare Notes?</h2>
          <p className="text-xl text-paper/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you&apos;re working through similar questions in higher education, I&apos;d be glad to hear what your institution is learning.
          </p>
          <Link
            href="/contact"
            className="btn-bold px-10 py-4 uppercase tracking-wide group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink"
          >
            Start a Conversation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
