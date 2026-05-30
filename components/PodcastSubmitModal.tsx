'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { searchPodcasts, ITunesResult } from '@/lib/itunesSearch';

interface PodcastSubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (podcast: {
    name: string;
    hosts: string;
    coverImage: string | null;
    category: string;
    summary: string;
    listenUrl: string;
    submittedBy: string;
  }) => Promise<void>;
}

const CATEGORIES = ['AI & Tech', 'Technology', 'Economics & Data', 'Science', 'Business', 'Culture', 'Other'];

export default function PodcastSubmitModal({
  isOpen,
  onClose,
  onSubmit,
}: PodcastSubmitModalProps) {
  const [name, setName] = useState('');
  const [hosts, setHosts] = useState('');
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [category, setCategory] = useState('Technology');
  const [summary, setSummary] = useState('');
  const [listenUrl, setListenUrl] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // iTunes search state
  const [searchResults, setSearchResults] = useState<ITunesResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Close results when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (resultsRef.current && !resultsRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNameChange = useCallback((value: string) => {
    setName(value);
    setShowResults(true);

    if (searchTimeout.current) clearTimeout(searchTimeout.current);

    if (value.length >= 3) {
      setSearching(true);
      searchTimeout.current = setTimeout(async () => {
        const results = await searchPodcasts(value);
        setSearchResults(results);
        setSearching(false);
      }, 400);
    } else {
      setSearchResults([]);
      setSearching(false);
    }
  }, []);

  const selectResult = useCallback((result: ITunesResult) => {
    setName(result.trackName);
    setHosts(result.artistName);
    setCoverImage(result.artworkUrl600 || null);
    setListenUrl(result.collectionViewUrl || '');
    setSearchResults([]);
    setShowResults(false);
  }, []);

  const resetForm = useCallback(() => {
    setName('');
    setHosts('');
    setCoverImage(null);
    setCategory('Technology');
    setSummary('');
    setListenUrl('');
    setSubmittedBy('');
    setError('');
    setSuccess(false);
    setSearchResults([]);
  }, []);

  const handleClose = useCallback(() => {
    resetForm();
    onClose();
  }, [resetForm, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !hosts.trim() || !summary.trim() || !listenUrl.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit({
        name: name.trim(),
        hosts: hosts.trim(),
        coverImage,
        category,
        summary: summary.trim(),
        listenUrl: listenUrl.trim(),
        submittedBy: submittedBy.trim() || 'Anonymous',
      });
      setSuccess(true);
    } catch (err) {
      const message = err instanceof Error && err.message.includes('timed out')
        ? 'Request timed out. Please check your connection and try again.'
        : 'Failed to submit podcast. Please try again.';
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-paper border-2 border-ink shadow-hard max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-paper border-b-2 border-ink px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-xl font-bold text-ink">
              Share a Podcast
            </h2>
            <p className="text-sm text-muted mt-0.5">
              Start typing to search or fill in manually
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-accent border-2 border-ink transition-colors"
          >
            <svg className="w-5 h-5 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {success ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-accent border-2 border-ink flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-ink mb-2">Submission Received</h3>
            <p className="text-muted mb-6">
              Thanks for sharing your recommendation. It&apos;s now pending moderator review.
            </p>
            <button
              onClick={handleClose}
              className="btn-bold px-6 py-3 uppercase tracking-wide"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Podcast Name with iTunes Search */}
            <div className="relative" ref={resultsRef}>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                Podcast Name <span className="text-accent">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  onFocus={() => searchResults.length > 0 && setShowResults(true)}
                  placeholder="Start typing to search..."
                  className="w-full px-4 py-2.5 border-2 border-ink rounded-none bg-paper text-ink placeholder-muted focus:ring-2 focus:ring-ink focus:outline-none transition-colors"
                  required
                />
                {searching && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-5 h-5 border-2 border-ink/30 border-t-accent rounded-full animate-spin" />
                  </div>
                )}
              </div>

              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-paper border-2 border-ink shadow-hard z-20 overflow-hidden">
                  {searchResults.map((result, i) => (
                    <button
                      key={`${result.trackName}-${i}`}
                      type="button"
                      onClick={() => selectResult(result)}
                      className="w-full flex items-center gap-3 p-3 hover:bg-accent transition-colors text-left border-b-2 border-ink last:border-0"
                    >
                      {result.artworkUrl600 ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={result.artworkUrl600}
                          alt={result.trackName}
                          className="w-12 h-12 border-2 border-ink object-cover flex-shrink-0"
                        />
                      ) : (
                        <div className="w-12 h-12 border-2 border-ink bg-paper-2 flex-shrink-0" />
                      )}
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-ink truncate">
                          {result.trackName}
                        </div>
                        <div className="text-xs text-muted truncate">
                          {result.artistName}
                        </div>
                        <div className="text-[10px] text-muted uppercase tracking-wide mt-0.5 font-[family-name:var(--font-geist-mono)]">
                          {result.primaryGenreName}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cover image preview */}
            {coverImage && (
              <div className="flex items-center gap-3 p-3 bg-paper-2 border-2 border-ink">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverImage}
                  alt="Cover preview"
                  className="w-16 h-16 border-2 border-ink object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-ink truncate">{name}</p>
                  <p className="text-xs text-accent font-medium">Artwork found</p>
                </div>
                <button
                  type="button"
                  onClick={() => setCoverImage(null)}
                  className="p-1 hover:bg-accent border-2 border-ink text-ink transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}

            {/* Hosts */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                Host(s) <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                value={hosts}
                onChange={(e) => setHosts(e.target.value)}
                placeholder="e.g. Kevin Roose & Casey Newton"
                className="w-full px-4 py-2.5 border-2 border-ink rounded-none bg-paper text-ink placeholder-muted focus:ring-2 focus:ring-ink focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 border-2 border-ink rounded-none bg-paper text-ink focus:ring-2 focus:ring-ink focus:outline-none transition-colors"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Summary */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                Why do you recommend it? <span className="text-accent">*</span>
              </label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="What makes this podcast great..."
                rows={3}
                maxLength={300}
                className="w-full px-4 py-2.5 border-2 border-ink rounded-none bg-paper text-ink placeholder-muted focus:ring-2 focus:ring-ink focus:outline-none transition-colors resize-none"
                required
              />
              <p className="text-xs text-muted mt-1 text-right">
                {summary.length}/300
              </p>
            </div>

            {/* Listen URL */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                Podcast Link <span className="text-accent">*</span>
              </label>
              <input
                type="url"
                value={listenUrl}
                onChange={(e) => setListenUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-4 py-2.5 border-2 border-ink rounded-none bg-paper text-ink placeholder-muted focus:ring-2 focus:ring-ink focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Your Name */}
            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5">
                Your Name <span className="text-muted font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={submittedBy}
                onChange={(e) => setSubmittedBy(e.target.value)}
                placeholder="Anonymous"
                className="w-full px-4 py-2.5 border-2 border-ink rounded-none bg-paper text-ink placeholder-muted focus:ring-2 focus:ring-ink focus:outline-none transition-colors"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="p-3 bg-paper-2 border-2 border-accent text-sm text-ink">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="btn-bold w-full py-3 uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : (
                'Share Podcast'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
