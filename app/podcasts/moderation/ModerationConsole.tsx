'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { User } from 'firebase/auth';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { isAdminEmail } from '@/lib/admin';
import { getFirebaseAuth, isFirebaseConfigured } from '@/lib/firebase';
import {
  approveSubmission,
  CommunityPodcast,
  getPodcasts,
  getSubmissionsByStatus,
  PodcastSubmission,
  rejectSubmission,
  removePodcastFromPage,
} from '@/lib/firestore';

type ModerationTab = 'pending' | 'approved' | 'rejected' | 'published' | 'removed';

type BusyAction = 'approve' | 'reject' | 'remove' | null;

interface ReviewDraft {
  name: string;
  hosts: string;
  coverImage: string;
  category: string;
  summary: string;
  listenUrl: string;
  submittedBy: string;
}

function getMillis(
  value:
    | {
      toMillis?: () => number;
      toDate?: () => Date;
    }
    | null
    | undefined
): number {
  if (!value) return 0;
  if (typeof value.toMillis === 'function') return value.toMillis();
  if (typeof value.toDate === 'function') return value.toDate().getTime();
  return 0;
}

function formatTimestamp(
  value:
    | {
      toDate?: () => Date;
      toMillis?: () => number;
    }
    | null
    | undefined
): string {
  const timestampMs = getMillis(value);
  if (!timestampMs) return 'Unknown time';
  return new Date(timestampMs).toLocaleString();
}

function toReviewDraft(submission: PodcastSubmission): ReviewDraft {
  return {
    name: submission.name,
    hosts: submission.hosts,
    coverImage: submission.coverImage ?? '',
    category: submission.category,
    summary: submission.summary,
    listenUrl: submission.listenUrl,
    submittedBy: submission.submittedBy,
  };
}

function asErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof Error && error.message) return error.message;
  return fallback;
}

function validateReviewDraft(draft: ReviewDraft): string | null {
  if (!draft.name.trim()) return 'Podcast name is required.';
  if (!draft.hosts.trim()) return 'Host(s) is required.';
  if (!draft.category.trim()) return 'Category is required.';
  if (!draft.summary.trim()) return 'Summary is required.';
  if (!draft.listenUrl.trim()) return 'Podcast link is required.';

  try {
    // Basic URL validation.
    new URL(draft.listenUrl.trim());
  } catch {
    return 'Podcast link must be a valid URL.';
  }

  if (draft.coverImage.trim()) {
    try {
      new URL(draft.coverImage.trim());
    } catch {
      return 'Cover image URL must be valid when provided.';
    }
  }

  return null;
}

export default function ModerationConsole() {
  const firebaseEnabled = isFirebaseConfigured();

  const [authReady, setAuthReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState<ModerationTab>('pending');
  const [loadingData, setLoadingData] = useState(false);
  const [dataError, setDataError] = useState('');

  const [pendingSubmissions, setPendingSubmissions] = useState<PodcastSubmission[]>([]);
  const [approvedSubmissions, setApprovedSubmissions] = useState<PodcastSubmission[]>([]);
  const [rejectedSubmissions, setRejectedSubmissions] = useState<PodcastSubmission[]>([]);
  const [removedSubmissions, setRemovedSubmissions] = useState<PodcastSubmission[]>([]);
  const [publishedCommunityPodcasts, setPublishedCommunityPodcasts] = useState<CommunityPodcast[]>([]);

  const [selectedSubmissionId, setSelectedSubmissionId] = useState<string | null>(null);
  const [reviewDraft, setReviewDraft] = useState<ReviewDraft | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  const [busyAction, setBusyAction] = useState<BusyAction>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [actionError, setActionError] = useState('');
  const [actionMessage, setActionMessage] = useState('');

  const adminEmail = user?.email ?? null;
  const isAdmin = isAdminEmail(adminEmail);

  const selectedSubmission = useMemo(
    () => pendingSubmissions.find((submission) => submission.id === selectedSubmissionId) ?? null,
    [pendingSubmissions, selectedSubmissionId]
  );

  const tabOptions = useMemo(
    () => [
      { id: 'pending' as const, label: 'Pending', count: pendingSubmissions.length },
      { id: 'approved' as const, label: 'Approved', count: approvedSubmissions.length },
      { id: 'rejected' as const, label: 'Rejected', count: rejectedSubmissions.length },
      { id: 'published' as const, label: 'Published', count: publishedCommunityPodcasts.length },
      { id: 'removed' as const, label: 'Removed', count: removedSubmissions.length },
    ],
    [
      pendingSubmissions.length,
      approvedSubmissions.length,
      rejectedSubmissions.length,
      publishedCommunityPodcasts.length,
      removedSubmissions.length,
    ]
  );

  const loadModerationData = useCallback(async () => {
    if (!isAdmin) return;

    setLoadingData(true);
    setDataError('');

    try {
      const [pending, approved, rejected, removed, podcasts] = await Promise.all([
        getSubmissionsByStatus('pending'),
        getSubmissionsByStatus('approved'),
        getSubmissionsByStatus('rejected'),
        getSubmissionsByStatus('removed'),
        getPodcasts(),
      ]);

      setPendingSubmissions(pending);
      setApprovedSubmissions(approved);
      setRejectedSubmissions(rejected);
      setRemovedSubmissions(removed);

      const publishedCommunity = podcasts
        .filter((podcast) => !podcast.featured)
        .sort((a, b) => getMillis(b.publishedAt ?? b.createdAt) - getMillis(a.publishedAt ?? a.createdAt));

      setPublishedCommunityPodcasts(publishedCommunity);
    } catch (error) {
      setDataError(asErrorMessage(error, 'Failed to load moderation data.'));
    } finally {
      setLoadingData(false);
    }
  }, [isAdmin]);

  useEffect(() => {
    if (!firebaseEnabled) {
      setAuthReady(true);
      return;
    }

    const auth = getFirebaseAuth();
    if (!auth) {
      setAuthError('Firebase authentication is unavailable. Check your Firebase configuration.');
      setAuthReady(true);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setAuthReady(true);
    });

    return () => unsubscribe();
  }, [firebaseEnabled]);

  useEffect(() => {
    if (!isAdmin) return;
    void loadModerationData();
  }, [isAdmin, loadModerationData]);

  useEffect(() => {
    if (!selectedSubmission) {
      setReviewDraft(null);
      setRejectionReason('');
      return;
    }

    setReviewDraft(toReviewDraft(selectedSubmission));
    setRejectionReason('');
    setActionError('');
    setActionMessage('');
  }, [selectedSubmission]);

  const handleSignIn = useCallback(async () => {
    const auth = getFirebaseAuth();
    if (!auth) {
      setAuthError('Firebase authentication is unavailable.');
      return;
    }

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    setAuthError('');

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setAuthError(asErrorMessage(error, 'Failed to sign in with Google.'));
    }
  }, []);

  const handleSignOut = useCallback(async () => {
    const auth = getFirebaseAuth();
    if (!auth) return;

    try {
      await signOut(auth);
      setSelectedSubmissionId(null);
      setActionMessage('');
      setActionError('');
    } catch (error) {
      setAuthError(asErrorMessage(error, 'Failed to sign out.'));
    }
  }, []);

  const handleApprove = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedSubmission || !reviewDraft || !adminEmail) return;

    const validationError = validateReviewDraft(reviewDraft);
    if (validationError) {
      setActionError(validationError);
      return;
    }

    setBusyAction('approve');
    setBusyId(selectedSubmission.id);
    setActionError('');
    setActionMessage('');

    try {
      await approveSubmission(
        selectedSubmission.id,
        {
          name: reviewDraft.name.trim(),
          hosts: reviewDraft.hosts.trim(),
          coverImage: reviewDraft.coverImage.trim() || null,
          category: reviewDraft.category.trim(),
          summary: reviewDraft.summary.trim(),
          listenUrl: reviewDraft.listenUrl.trim(),
          submittedBy: reviewDraft.submittedBy.trim() || 'Anonymous',
        },
        adminEmail
      );

      setSelectedSubmissionId(null);
      setReviewDraft(null);
      setRejectionReason('');
      setActiveTab('published');
      setActionMessage(`Approved and published "${reviewDraft.name.trim()}".`);

      await loadModerationData();
    } catch (error) {
      setActionError(asErrorMessage(error, 'Failed to approve submission.'));
    } finally {
      setBusyAction(null);
      setBusyId(null);
    }
  }, [adminEmail, loadModerationData, reviewDraft, selectedSubmission]);

  const handleReject = useCallback(async () => {
    if (!selectedSubmission || !adminEmail) return;

    const trimmedReason = rejectionReason.trim();
    if (!trimmedReason) {
      setActionError('Rejection reason is required.');
      return;
    }

    setBusyAction('reject');
    setBusyId(selectedSubmission.id);
    setActionError('');
    setActionMessage('');

    try {
      await rejectSubmission(selectedSubmission.id, adminEmail, trimmedReason);
      setSelectedSubmissionId(null);
      setReviewDraft(null);
      setRejectionReason('');
      setActiveTab('rejected');
      setActionMessage(`Rejected "${selectedSubmission.name}".`);

      await loadModerationData();
    } catch (error) {
      setActionError(asErrorMessage(error, 'Failed to reject submission.'));
    } finally {
      setBusyAction(null);
      setBusyId(null);
    }
  }, [adminEmail, loadModerationData, rejectionReason, selectedSubmission]);

  const handleRemoveFromPage = useCallback(async (podcast: CommunityPodcast) => {
    if (!adminEmail) return;

    const confirmRemove = window.confirm(
      `Remove "${podcast.name}" from the public podcast page? This can only be restored by approving again.`
    );
    if (!confirmRemove) return;

    setBusyAction('remove');
    setBusyId(podcast.id);
    setActionError('');
    setActionMessage('');

    try {
      await removePodcastFromPage(podcast.id, adminEmail);
      setActionMessage(`Removed "${podcast.name}" from the public page.`);
      await loadModerationData();
    } catch (error) {
      setActionError(asErrorMessage(error, 'Failed to remove podcast from the page.'));
    } finally {
      setBusyAction(null);
      setBusyId(null);
    }
  }, [adminEmail, loadModerationData]);

  if (!firebaseEnabled) {
    return (
      <div className="bg-paper border-2 border-accent p-6 text-ink">
        Firebase is not configured. Moderation console is unavailable.
      </div>
    );
  }

  if (!authReady) {
    return (
      <div className="card-hard p-8 flex items-center gap-3 text-muted">
        <div className="w-5 h-5 border-2 border-ink/30 border-t-accent rounded-full animate-spin" />
        Loading moderation console...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="card-hard p-8">
        <h2 className="text-2xl font-bold text-ink mb-2">Podcast Moderation</h2>
        <p className="text-muted mb-6">
          Sign in with Google to review submissions and control what is published on the podcast page.
        </p>
        <button
          onClick={() => void handleSignIn()}
          className="btn-bold px-5 py-2.5 uppercase tracking-wide"
        >
          Sign in with Google
        </button>
        {authError && (
          <p className="mt-4 text-sm text-ink bg-paper-2 border-2 border-accent px-3 py-2">
            {authError}
          </p>
        )}
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="card-hard p-8">
        <h2 className="text-2xl font-bold text-ink mb-2">Access Restricted</h2>
        <p className="text-ink mb-2">
          Signed in as <span className="font-semibold">{user.email}</span>.
        </p>
        <p className="text-muted mb-6">
          This account is not on the moderation allowlist.
        </p>
        <button
          onClick={() => void handleSignOut()}
          className="btn-bold-outline px-5 py-2.5 uppercase tracking-wide"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="card-hard p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-ink">Podcast Moderation</h2>
            <p className="text-sm text-muted mt-1">
              Signed in as {adminEmail}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => void loadModerationData()}
              disabled={loadingData || busyAction !== null}
              className="btn-bold-outline px-4 py-2 uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Refresh
            </button>
            <button
              onClick={() => void handleSignOut()}
              className="btn-bold-outline px-4 py-2 uppercase tracking-wide text-sm"
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {tabOptions.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 border-2 border-ink uppercase tracking-wide font-[family-name:var(--font-geist-mono)] text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-ink text-paper'
                  : 'bg-paper text-ink hover:bg-accent'
              }`}
            >
              {tab.label}
              <span
                className={`ml-2 px-2 py-0.5 text-xs ${
                  activeTab === tab.id
                    ? 'bg-paper/20 text-paper'
                    : 'bg-ink/10 text-ink'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {actionMessage && (
          <p className="mt-4 text-sm text-ink bg-paper-2 border-2 border-ink px-3 py-2">
            {actionMessage}
          </p>
        )}

        {actionError && (
          <p className="mt-4 text-sm text-ink bg-paper-2 border-2 border-accent px-3 py-2">
            {actionError}
          </p>
        )}

        {dataError && (
          <p className="mt-4 text-sm text-ink bg-paper-2 border-2 border-accent px-3 py-2">
            {dataError}
          </p>
        )}
      </div>

      {loadingData && (
        <div className="card-hard p-6 flex items-center gap-3 text-muted">
          <div className="w-5 h-5 border-2 border-ink/30 border-t-accent rounded-full animate-spin" />
          Loading moderation data...
        </div>
      )}

      {activeTab === 'pending' && !loadingData && (
        <div className="space-y-6">
          <div className="space-y-4">
            {pendingSubmissions.length === 0 && (
              <div className="card-hard p-6 text-muted">
                No pending submissions.
              </div>
            )}

            {pendingSubmissions.map((submission) => (
              <article
                key={submission.id}
                className={`card-hard p-5 ${
                  selectedSubmissionId === submission.id
                    ? 'border-accent'
                    : ''
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-ink">{submission.name}</h3>
                    <p className="text-sm text-muted">{submission.hosts}</p>
                  </div>
                  <button
                    onClick={() => setSelectedSubmissionId(submission.id)}
                    className="btn-bold px-4 py-2 uppercase tracking-wide text-sm"
                  >
                    {selectedSubmissionId === submission.id ? 'Reviewing' : 'Review'}
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 text-xs mb-3 font-[family-name:var(--font-geist-mono)] uppercase tracking-wide">
                  <span className="px-2 py-1 bg-paper-2 border-2 border-ink text-ink font-semibold">
                    {submission.category}
                  </span>
                  <span className="px-2 py-1 bg-paper-2 border-2 border-ink text-muted">
                    Submitted by {submission.submittedBy}
                  </span>
                  <span className="px-2 py-1 bg-paper-2 border-2 border-ink text-muted">
                    {formatTimestamp(submission.submittedAt)}
                  </span>
                </div>

                <p className="text-sm text-ink leading-relaxed mb-3">{submission.summary}</p>

                <a
                  href={submission.listenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-ink underline underline-offset-2 decoration-accent decoration-2 hover:text-accent transition-colors"
                >
                  Open podcast link
                </a>
              </article>
            ))}
          </div>

          {selectedSubmission && reviewDraft && (
            <section className="card-hard p-6">
              <h3 className="text-xl font-bold text-ink mb-1">Review Submission</h3>
              <p className="text-sm text-muted mb-5">
                Edit any fields before approving and publishing.
              </p>

              <form className="space-y-4" onSubmit={handleApprove}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Podcast Name</label>
                    <input
                      type="text"
                      value={reviewDraft.name}
                      onChange={(event) =>
                        setReviewDraft((prev) => (prev ? { ...prev, name: event.target.value } : prev))
                      }
                      className="w-full px-3 py-2.5 border-2 border-ink rounded-none bg-paper text-ink text-sm focus:ring-2 focus:ring-ink focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Host(s)</label>
                    <input
                      type="text"
                      value={reviewDraft.hosts}
                      onChange={(event) =>
                        setReviewDraft((prev) => (prev ? { ...prev, hosts: event.target.value } : prev))
                      }
                      className="w-full px-3 py-2.5 border-2 border-ink rounded-none bg-paper text-ink text-sm focus:ring-2 focus:ring-ink focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Category</label>
                    <input
                      type="text"
                      value={reviewDraft.category}
                      onChange={(event) =>
                        setReviewDraft((prev) => (prev ? { ...prev, category: event.target.value } : prev))
                      }
                      className="w-full px-3 py-2.5 border-2 border-ink rounded-none bg-paper text-ink text-sm focus:ring-2 focus:ring-ink focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Submitted By</label>
                    <input
                      type="text"
                      value={reviewDraft.submittedBy}
                      onChange={(event) =>
                        setReviewDraft((prev) => (prev ? { ...prev, submittedBy: event.target.value } : prev))
                      }
                      className="w-full px-3 py-2.5 border-2 border-ink rounded-none bg-paper text-ink text-sm focus:ring-2 focus:ring-ink focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Summary</label>
                  <textarea
                    value={reviewDraft.summary}
                    onChange={(event) =>
                      setReviewDraft((prev) => (prev ? { ...prev, summary: event.target.value } : prev))
                    }
                    rows={4}
                    className="w-full px-3 py-2.5 border-2 border-ink rounded-none bg-paper text-ink text-sm focus:ring-2 focus:ring-ink focus:outline-none resize-none"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Podcast Link</label>
                    <input
                      type="url"
                      value={reviewDraft.listenUrl}
                      onChange={(event) =>
                        setReviewDraft((prev) => (prev ? { ...prev, listenUrl: event.target.value } : prev))
                      }
                      className="w-full px-3 py-2.5 border-2 border-ink rounded-none bg-paper text-ink text-sm focus:ring-2 focus:ring-ink focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Cover Image URL (optional)</label>
                    <input
                      type="url"
                      value={reviewDraft.coverImage}
                      onChange={(event) =>
                        setReviewDraft((prev) => (prev ? { ...prev, coverImage: event.target.value } : prev))
                      }
                      className="w-full px-3 py-2.5 border-2 border-ink rounded-none bg-paper text-ink text-sm focus:ring-2 focus:ring-ink focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="submit"
                    disabled={busyAction === 'reject'}
                    className="btn-bold px-5 py-2.5 uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {busyAction === 'approve' && busyId === selectedSubmission.id
                      ? 'Approving...'
                      : 'Approve & Publish'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSubmissionId(null)}
                    className="btn-bold-outline px-5 py-2.5 uppercase tracking-wide text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t-2 border-ink">
                <label className="block text-sm font-semibold text-ink mb-1.5">
                  Rejection Reason <span className="text-accent">*</span>
                </label>
                <textarea
                  value={rejectionReason}
                  onChange={(event) => setRejectionReason(event.target.value)}
                  rows={3}
                  className="w-full px-3 py-2.5 border-2 border-ink rounded-none bg-paper text-ink text-sm focus:ring-2 focus:ring-ink focus:outline-none resize-none"
                  placeholder="Required for rejected submissions"
                  required
                />
                <button
                  type="button"
                  onClick={() => void handleReject()}
                  disabled={busyAction === 'approve'}
                  className="btn-bold-outline mt-3 px-5 py-2.5 uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {busyAction === 'reject' && busyId === selectedSubmission.id
                    ? 'Rejecting...'
                    : 'Reject Submission'}
                </button>
              </div>
            </section>
          )}
        </div>
      )}

      {activeTab === 'approved' && !loadingData && (
        <div className="space-y-4">
          {approvedSubmissions.length === 0 && (
            <div className="card-hard p-6 text-muted">
              No approved submissions yet.
            </div>
          )}

          {approvedSubmissions.map((submission) => (
            <article key={submission.id} className="card-hard p-5">
              <h3 className="text-lg font-bold text-ink">{submission.name}</h3>
              <p className="text-sm text-muted mb-2">{submission.hosts}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-3 font-[family-name:var(--font-geist-mono)] uppercase tracking-wide">
                <span className="px-2 py-1 bg-accent border-2 border-ink text-ink font-semibold">Approved</span>
                <span className="px-2 py-1 bg-paper-2 border-2 border-ink text-muted">
                  Moderated by {submission.moderatedBy ?? 'Unknown'}
                </span>
                <span className="px-2 py-1 bg-paper-2 border-2 border-ink text-muted">
                  {formatTimestamp(submission.moderatedAt)}
                </span>
              </div>
              {submission.publishedPodcastId && (
                <p className="text-xs text-muted">Published Podcast ID: {submission.publishedPodcastId}</p>
              )}
            </article>
          ))}
        </div>
      )}

      {activeTab === 'rejected' && !loadingData && (
        <div className="space-y-4">
          {rejectedSubmissions.length === 0 && (
            <div className="card-hard p-6 text-muted">
              No rejected submissions.
            </div>
          )}

          {rejectedSubmissions.map((submission) => (
            <article key={submission.id} className="card-hard p-5">
              <h3 className="text-lg font-bold text-ink">{submission.name}</h3>
              <p className="text-sm text-muted mb-2">{submission.hosts}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-3 font-[family-name:var(--font-geist-mono)] uppercase tracking-wide">
                <span className="px-2 py-1 bg-paper-2 border-2 border-accent text-ink font-semibold">Rejected</span>
                <span className="px-2 py-1 bg-paper-2 border-2 border-ink text-muted">
                  Moderated by {submission.moderatedBy ?? 'Unknown'}
                </span>
                <span className="px-2 py-1 bg-paper-2 border-2 border-ink text-muted">
                  {formatTimestamp(submission.moderatedAt)}
                </span>
              </div>
              <p className="text-sm text-ink">
                <span className="font-semibold">Reason:</span>{' '}
                {submission.rejectionReason ?? 'No reason stored.'}
              </p>
            </article>
          ))}
        </div>
      )}

      {activeTab === 'published' && !loadingData && (
        <div className="space-y-4">
          {publishedCommunityPodcasts.length === 0 && (
            <div className="card-hard p-6 text-muted">
              No community submissions are currently published.
            </div>
          )}

          {publishedCommunityPodcasts.map((podcast) => (
            <article key={podcast.id} className="card-hard p-5">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-ink">{podcast.name}</h3>
                  <p className="text-sm text-muted">{podcast.hosts}</p>
                </div>
                <button
                  onClick={() => void handleRemoveFromPage(podcast)}
                  disabled={busyAction === 'remove' && busyId === podcast.id}
                  className="btn-bold-outline px-4 py-2 uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {busyAction === 'remove' && busyId === podcast.id ? 'Removing...' : 'Remove from Page'}
                </button>
              </div>

              <div className="flex flex-wrap gap-2 text-xs mb-3 font-[family-name:var(--font-geist-mono)] uppercase tracking-wide">
                <span className="px-2 py-1 bg-paper-2 border-2 border-ink text-ink font-semibold">
                  {podcast.category}
                </span>
                <span className="px-2 py-1 bg-paper-2 border-2 border-ink text-muted">
                  Upvotes: {podcast.upvotes}
                </span>
                <span className="px-2 py-1 bg-paper-2 border-2 border-ink text-muted">
                  Published: {formatTimestamp(podcast.publishedAt ?? podcast.createdAt)}
                </span>
              </div>

              <p className="text-sm text-ink mb-3 leading-relaxed">{podcast.summary}</p>

              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href={podcast.listenUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline underline-offset-2 decoration-accent decoration-2 hover:text-accent transition-colors"
                >
                  Open podcast link
                </a>
                {podcast.sourceSubmissionId && (
                  <span className="text-muted">Submission ID: {podcast.sourceSubmissionId}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {activeTab === 'removed' && !loadingData && (
        <div className="space-y-4">
          {removedSubmissions.length === 0 && (
            <div className="card-hard p-6 text-muted">
              No removed submissions.
            </div>
          )}

          {removedSubmissions.map((submission) => (
            <article key={submission.id} className="card-hard p-5">
              <h3 className="text-lg font-bold text-ink">{submission.name}</h3>
              <p className="text-sm text-muted mb-2">{submission.hosts}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-3 font-[family-name:var(--font-geist-mono)] uppercase tracking-wide">
                <span className="px-2 py-1 bg-ink text-paper border-2 border-ink font-semibold">Removed</span>
                <span className="px-2 py-1 bg-paper-2 border-2 border-ink text-muted">
                  Moderated by {submission.moderatedBy ?? 'Unknown'}
                </span>
                <span className="px-2 py-1 bg-paper-2 border-2 border-ink text-muted">
                  {formatTimestamp(submission.moderatedAt)}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
