'use client';

import { useMemo, useState } from 'react';
import { mediaItems, MediaItem } from '@/lib/mediaData';

type CategoryFilter = 'all' | 'article' | 'interview' | 'whitepaper' | 'speaking' | 'award';

const categoryLabels: Record<CategoryFilter, string> = {
  all: 'All',
  article: 'Articles',
  interview: 'Interviews',
  whitepaper: 'Whitepapers',
  speaking: 'Speaking',
  award: 'Awards',
};

function formatDate(dateString: string) {
  const [year, month, day] = dateString.split('-').map(Number);
  const localDate = new Date(year, month - 1, day);

  return localDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function groupByYear(items: MediaItem[]) {
  return items.reduce((acc, item) => {
    const year = Number(item.date.slice(0, 4));
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as Record<number, MediaItem[]>);
}

export default function MediaContent() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const sortedItems = useMemo(
    () => [...mediaItems].sort((a, b) => b.date.localeCompare(a.date)),
    []
  );

  const filterButtons = useMemo(
    () => (Object.keys(categoryLabels) as CategoryFilter[]).map((value) => ({
      value,
      label: categoryLabels[value],
      count: value === 'all'
        ? sortedItems.length
        : sortedItems.filter((item) => item.category === value).length,
    })),
    [sortedItems]
  );

  const filteredItems = useMemo(
    () => activeFilter === 'all'
      ? sortedItems
      : sortedItems.filter((item) => item.category === activeFilter),
    [activeFilter, sortedItems]
  );

  const itemsByYear = useMemo(() => groupByYear(filteredItems), [filteredItems]);
  const years = Object.keys(itemsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div>
      <div className="mb-10 border-y border-[#d9dfd3] py-4">
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          {filterButtons.map(({ value, label, count }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`rounded-sm border-b-2 px-1 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 ${
                activeFilter === value
                  ? 'border-[#c97712] text-[#17201b]'
                  : 'border-transparent text-[#485248] hover:border-[#9eb7aa] hover:text-[#17201b]'
              }`}
            >
              {label}
              <span className="ml-2 font-mono text-xs text-[#7a8479]">{count}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
        <p className="text-[#485248]">
          Showing <span className="font-semibold text-[#17201b]">{filteredItems.length}</span> item{filteredItems.length !== 1 ? 's' : ''}
          {activeFilter !== 'all' ? ` in ${categoryLabels[activeFilter].toLowerCase()}` : ''}.
        </p>
        <p className="rule-label">Publication index</p>
      </div>

      {years.length === 0 ? (
        <div className="border-y border-[#d9dfd3] py-14 text-center text-[#485248]">
          No publications found in this category.
        </div>
      ) : (
        <div className="space-y-14">
          {years.map((year) => (
            <section key={year} className="grid gap-5 lg:grid-cols-[9rem_1fr]">
              <div>
                <h2 className="font-mono text-3xl text-[#17201b]">{year}</h2>
                <p className="mt-2 text-sm text-[#7a8479]">
                  {itemsByYear[Number(year)].length} item{itemsByYear[Number(year)].length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="border-y border-[#d9dfd3]">
                {itemsByYear[Number(year)].map((item) => (
                  <a
                    key={`${item.date}-${item.title}`}
                    href={item.url}
                    target={item.url === '#' ? undefined : '_blank'}
                    rel={item.url === '#' ? undefined : 'noopener noreferrer'}
                    className="index-row grid gap-3 py-5 md:grid-cols-[8.5rem_8rem_1fr_10rem_auto] md:items-start"
                  >
                    <span className="font-mono text-xs uppercase text-[#7a8479]">{formatDate(item.date)}</span>
                    <span className="w-fit rounded-sm border border-[#d9dfd3] px-2 py-1 text-xs font-semibold uppercase text-[#485248]">
                      {item.category}
                    </span>
                    <span className="text-lg font-medium leading-7 text-[#17201b]">{item.title}</span>
                    <span className="text-sm leading-6 text-[#485248]">{item.publication}</span>
                    <span className="font-mono text-xs text-[#1f5a8a]">{item.url === '#' ? 'record' : 'open'}</span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
