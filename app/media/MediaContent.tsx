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

const categoryStyles: Record<MediaItem['category'], string> = {
  article: 'border-[#9db8c8] bg-[#edf5f7] text-[#1f5a8a]',
  interview: 'border-[#dfbf8b] bg-[#fff5e7] text-[#9b5a06]',
  whitepaper: 'border-[#a9c2ae] bg-[#eef5ee] text-[#366c5a]',
  speaking: 'border-[#e6ad9f] bg-[#fff0ed] text-[#b8503f]',
  award: 'border-[#b7add4] bg-[#f2eff9] text-[#5b4a86]',
};

// Solid accent color per category (matches the chart palette in page.tsx),
// used for the hover rail on each index row.
const categoryAccents: Record<MediaItem['category'], string> = {
  article: '#1f5a8a',
  interview: '#c97712',
  whitepaper: '#366c5a',
  speaking: '#b8503f',
  award: '#5b4a86',
};

// 1–2 letter monogram for the publication tile, e.g. "Campus Technology"
// -> "CT". Awards get a star instead (see the row markup).
function publicationInitials(name: string): string {
  const tokens = name.split(/[\s:&,\-–—./]+/);
  // Prefer alphabetic words so "NACUBO 2026 Annual Meeting" -> "NA", not "N2"
  const alpha = tokens.filter((w) => /^[A-Za-z]/.test(w));
  const words = alpha.length > 0 ? alpha : tokens.filter((w) => /^[A-Za-z0-9]/.test(w));
  if (words.length === 0) return name.slice(0, 2).toUpperCase();
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

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
      <div className="mb-10 border border-[#d9dfd3] bg-white/80 p-4 shadow-[8px_8px_0_rgba(54,108,90,0.08)]">
        <div className="mb-4 grid gap-2 border-b border-[#d9dfd3] pb-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="rule-label mb-2">Archive controls</p>
            <p className="text-sm leading-6 text-[#485248]">Filter the public record by format, then follow each item back to its original source.</p>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#1f5a8a]">
            {filteredItems.length} visible
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filterButtons.map(({ value, label, count }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`rounded-sm border px-3 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#1f5a8a] focus:ring-offset-2 ${
                activeFilter === value
                  ? 'border-[#17201b] bg-[#17201b] text-white'
                  : 'border-[#d9dfd3] bg-[#fffef9] text-[#485248] hover:border-[#9eb7aa] hover:text-[#17201b]'
              }`}
            >
              {label}
              <span className={`ml-2 font-mono text-xs ${activeFilter === value ? 'text-white/65' : 'text-[#7a8479]'}`}>{count}</span>
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
                    className="index-row group relative flex items-start gap-4 py-5 pl-4 pr-2 md:gap-5"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-2 left-0 w-[3px] opacity-30 transition-opacity duration-150 group-hover:opacity-100"
                      style={{ background: categoryAccents[item.category] }}
                    />
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border font-mono text-sm font-bold ${categoryStyles[item.category]}`}
                    >
                      {item.category === 'award' ? '★' : publicationInitials(item.publication)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-medium leading-7 text-[#17201b] transition-colors group-hover:text-[#1f5a8a]">
                        {item.title}
                      </span>
                      <span className="mt-1 block font-mono text-xs uppercase tracking-[0.08em] text-[#7a8479]">
                        <span className="whitespace-nowrap">{formatDate(item.date)}</span>
                        <span className="mx-2 text-[#d9dfd3]">/</span>
                        <span className="text-[#485248] normal-case tracking-normal font-sans text-sm font-medium">{item.publication}</span>
                      </span>
                    </span>
                    <span className="flex shrink-0 flex-col items-end gap-2">
                      <span className={`rounded-sm border px-2 py-1 text-xs font-semibold uppercase ${categoryStyles[item.category]}`}>
                        {item.category}
                      </span>
                      <span className="hidden font-mono text-xs text-[#1f5a8a] sm:inline-flex sm:items-center sm:gap-1">
                        {item.url === '#' ? 'record' : 'open'}
                        {item.url !== '#' && (
                          <span aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            &#8599;
                          </span>
                        )}
                      </span>
                    </span>
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
