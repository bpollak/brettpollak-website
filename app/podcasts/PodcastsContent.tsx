'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { podcasts as staticPodcasts } from '@/lib/podcastData';
import { isFirebaseConfigured } from '@/lib/firebase';
import {
  getPodcasts,
  submitPodcastForReview,
  upvotePodcast,
  seedPodcasts,
  CommunityPodcast,
} from '@/lib/firestore';
import PodcastCard, { PodcastCardData } from '@/components/PodcastCard';
import PodcastSubmitModal from '@/components/PodcastSubmitModal';

const COLOR_CYCLE = [
  {
    border: '',
    badge: 'bg-paper-2 text-ink',
    hoverBg: '',
    accent: '',
  },
  {
    border: '',
    badge: 'bg-paper-2 text-ink',
    hoverBg: '',
    accent: '',
  },
  {
    border: '',
    badge: 'bg-paper-2 text-ink',
    hoverBg: '',
    accent: '',
  },
  {
    border: '',
    badge: 'bg-paper-2 text-ink',
    hoverBg: '',
    accent: '',
  },
  {
    border: '',
    badge: 'bg-paper-2 text-ink',
    hoverBg: '',
    accent: '',
  },
  {
    border: '',
    badge: 'bg-paper-2 text-ink',
    hoverBg: '',
    accent: '',
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

      // Race Firestore against a timeout so the page never spins forever
      const TIMEOUT_MS = 5000;
      const timeout = new Promise<'timeout'>((resolve) =>
        setTimeout(() => resolve('timeout'), TIMEOUT_MS)
      );

      try {
        const result = await Promise.race([getPodcasts(), timeout]);

        if (cancelled) return;

        if (result === 'timeout') {
          console.warn('Firestore timed out — falling back to static podcasts');
          setLoading(false);
          return;
        }

        const data = result;

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
      await submitPodcastForReview(podcast);
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
            className={`px-5 py-2.5 border-2 border-ink uppercase tracking-wide font-[family-name:var(--font-geist-mono)] text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink ${
              activeFilter === value
                ? 'bg-ink text-paper'
                : 'bg-paper text-ink hover:bg-accent'
            }`}
          >
            {label}
            <span
              className={`ml-2 px-2 py-0.5 text-xs ${
                activeFilter === value
                  ? 'bg-paper/20 text-paper'
                  : 'bg-ink/10 text-ink'
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
            className="btn-bold ml-auto px-5 py-2.5 uppercase tracking-wide flex items-center gap-2"
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
          <div className="flex items-center gap-3 text-muted">
            <div className="w-6 h-6 border-2 border-ink/30 border-t-accent rounded-full animate-spin" />
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
          <p className="text-muted text-lg">
            No podcasts found in this category.
          </p>
          {firebaseEnabled && (
            <button
              onClick={() => setModalOpen(true)}
              className="mt-4 text-ink font-bold uppercase tracking-wide hover:text-accent transition-colors"
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
