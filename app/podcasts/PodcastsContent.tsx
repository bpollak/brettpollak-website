'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { podcasts as staticPodcasts } from '@/lib/podcastData';
import { isFirebaseConfigured } from '@/lib/firebase';
import {
  getPodcasts,
  addPodcast,
  upvotePodcast,
  seedPodcasts,
  CommunityPodcast,
} from '@/lib/firestore';
import PodcastCard, { PodcastCardData } from '@/components/PodcastCard';
import PodcastSubmitModal from '@/components/PodcastSubmitModal';

const COLOR_CYCLE = [
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

type CategoryFilter = string;

function getUpvotedIds(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem('podcast-upvotes');
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function saveUpvotedId(id: string) {
  const ids = getUpvotedIds();
  ids.add(id);
  try {
    localStorage.setItem('podcast-upvotes', JSON.stringify([...ids]));
  } catch {
    // localStorage unavailable
  }
}

export default function PodcastsContent() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [upvotedIds, setUpvotedIds] = useState<Set<string>>(new Set());
  const [firestorePodcasts, setFirestorePodcasts] = useState<CommunityPodcast[]>([]);
  const [loading, setLoading] = useState(true);

  const firebaseEnabled = isFirebaseConfigured();

  // Load upvoted IDs from localStorage on mount
  useEffect(() => {
    setUpvotedIds(getUpvotedIds());
  }, []);

  // Load podcasts from Firestore (or fall back to static data)
  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!firebaseEnabled) {
        setLoading(false);
        return;
      }

      try {
        const data = await getPodcasts();
        if (!cancelled) {
          // Seed Brett's picks if Firestore is empty
          if (data.length === 0) {
            await seedPodcasts(
              staticPodcasts.map((p) => ({
                name: p.name,
                hosts: p.hosts,
                coverImage: p.coverImage,
                category: p.category,
                summary: p.summary,
                listenUrl: p.listenUrl,
              }))
            );
            const seeded = await getPodcasts();
            if (!cancelled) setFirestorePodcasts(seeded);
          } else {
            setFirestorePodcasts(data);
          }
        }
      } catch (err) {
        console.error('Failed to load podcasts from Firestore:', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, [firebaseEnabled]);

  // Build unified podcast list
  const allPodcasts: PodcastCardData[] = useMemo(() => {
    if (firebaseEnabled && firestorePodcasts.length > 0) {
      // Use Firestore data — Brett's picks (featured) first, then community sorted by upvotes
      const featured = firestorePodcasts.filter((p) => p.featured);
      const community = firestorePodcasts.filter((p) => !p.featured);
      return [...featured, ...community];
    }

    // Fallback: show static data when Firebase is not configured
    return staticPodcasts.map((p) => ({
      ...p,
      featured: true,
      upvotes: 0,
    }));
  }, [firebaseEnabled, firestorePodcasts]);

  // Derive categories from the full list
  const categories = useMemo(() => {
    const unique = [...new Set(allPodcasts.map((p) => p.category))];
    return unique;
  }, [allPodcasts]);

  // Filtered list
  const filteredPodcasts = useMemo(
    () =>
      activeFilter === 'all'
        ? allPodcasts
        : allPodcasts.filter((p) => p.category === activeFilter),
    [activeFilter, allPodcasts]
  );

  const filterButtons = useMemo(
    () => [
      { value: 'all' as const, label: 'All', count: allPodcasts.length },
      ...categories.map((cat) => ({
        value: cat,
        label: cat,
        count: allPodcasts.filter((p) => p.category === cat).length,
      })),
    ],
    [allPodcasts, categories]
  );

  const handleUpvote = useCallback(
    async (id: string) => {
      if (upvotedIds.has(id)) return;

      // Optimistic update
      setFirestorePodcasts((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p
        )
      );
      setUpvotedIds((prev) => new Set([...prev, id]));
      saveUpvotedId(id);

      try {
        await upvotePodcast(id);
      } catch (err) {
        console.error('Failed to upvote:', err);
        // Revert on failure
        setFirestorePodcasts((prev) =>
          prev.map((p) =>
            p.id === id ? { ...p, upvotes: p.upvotes - 1 } : p
          )
        );
        setUpvotedIds((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }
    },
    [upvotedIds]
  );

  const handleSubmit = useCallback(
    async (podcast: {
      name: string;
      hosts: string;
      coverImage: string | null;
      category: string;
      summary: string;
      listenUrl: string;
      submittedBy: string;
    }) => {
      const id = await addPodcast(podcast);

      // Add to local state immediately
      setFirestorePodcasts((prev) => [
        ...prev,
        {
          id,
          ...podcast,
          featured: false,
          upvotes: 0,
          createdAt: null,
        },
      ]);
    },
    []
  );

  return (
    <>
      {/* Filter + Add Podcast bar */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
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
            <span
              className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeFilter === value
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {count}
            </span>
          </button>
        ))}

        {/* Add Podcast button */}
        {firebaseEnabled && (
          <button
            onClick={() => setModalOpen(true)}
            className="ml-auto px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center gap-2 hover:shadow-xl active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Share a Podcast
          </button>
        )}
      </div>

      {/* Loading state */}
      {loading && firebaseEnabled && (
        <div className="flex justify-center py-16">
          <div className="flex items-center gap-3 text-slate-500">
            <div className="w-6 h-6 border-2 border-slate-300 border-t-blue-500 rounded-full animate-spin" />
            Loading podcasts...
          </div>
        </div>
      )}

      {/* Podcast Grid */}
      {!loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPodcasts.map((podcast, index) => (
            <PodcastCard
              key={podcast.id ?? podcast.name}
              podcast={podcast}
              index={index}
              colorStyle={COLOR_CYCLE[index % COLOR_CYCLE.length]}
              hasUpvoted={!!podcast.id && upvotedIds.has(podcast.id)}
              onUpvote={handleUpvote}
              firebaseEnabled={firebaseEnabled}
            />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && filteredPodcasts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-500 text-lg">
            No podcasts found in this category.
          </p>
          {firebaseEnabled && (
            <button
              onClick={() => setModalOpen(true)}
              className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Be the first to share one!
            </button>
          )}
        </div>
      )}

      {/* Submit Modal */}
      {firebaseEnabled && (
        <PodcastSubmitModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}
