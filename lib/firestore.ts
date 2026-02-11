import { getDb } from './firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  increment,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
  where,
  writeBatch,
  deleteDoc,
  getDoc,
} from 'firebase/firestore';

export interface CommunityPodcast {
  id: string;
  name: string;
  hosts: string;
  coverImage: string | null;
  category: string;
  summary: string;
  listenUrl: string;
  featured: boolean;
  upvotes: number;
  submittedBy: string;
  createdAt: Timestamp | null;
  sourceSubmissionId?: string | null;
  publishedBy?: string | null;
  publishedAt?: Timestamp | null;
}

export type SubmissionStatus = 'pending' | 'approved' | 'rejected' | 'removed';

export interface PodcastSubmission {
  id: string;
  name: string;
  hosts: string;
  coverImage: string | null;
  category: string;
  summary: string;
  listenUrl: string;
  submittedBy: string;
  status: SubmissionStatus;
  submittedAt: Timestamp | null;
  moderatedBy: string | null;
  moderatedAt: Timestamp | null;
  rejectionReason: string | null;
  publishedPodcastId: string | null;
}

export async function getPodcasts(): Promise<CommunityPodcast[]> {
  const db = getDb();
  if (!db) return [];

  const q = query(collection(db, 'podcasts'), orderBy('upvotes', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({
    id: d.id,
    name: d.data().name ?? '',
    hosts: d.data().hosts ?? '',
    coverImage: d.data().coverImage ?? null,
    category: d.data().category ?? 'Technology',
    summary: d.data().summary ?? '',
    listenUrl: d.data().listenUrl ?? '',
    featured: d.data().featured ?? false,
    upvotes: d.data().upvotes ?? 0,
    submittedBy: d.data().submittedBy ?? 'Anonymous',
    createdAt: d.data().createdAt ?? null,
    sourceSubmissionId: d.data().sourceSubmissionId ?? null,
    publishedBy: d.data().publishedBy ?? null,
    publishedAt: d.data().publishedAt ?? null,
  }));
}

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(`${label} timed out after ${ms / 1000}s`)), ms)
    ),
  ]);
}

export async function submitPodcastForReview(podcast: {
  name: string;
  hosts: string;
  coverImage: string | null;
  category: string;
  summary: string;
  listenUrl: string;
  submittedBy: string;
}): Promise<string> {
  const db = getDb();
  if (!db) throw new Error('Firebase is not configured');

  const docRef = await withTimeout(
    addDoc(collection(db, 'podcast_submissions'), {
      ...podcast,
      status: 'pending',
      submittedAt: serverTimestamp(),
      moderatedBy: null,
      moderatedAt: null,
      rejectionReason: null,
      publishedPodcastId: null,
    }),
    10000,
    'Submitting podcast'
  );
  return docRef.id;
}

export async function upvotePodcast(podcastId: string): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase is not configured');

  const docRef = doc(db, 'podcasts', podcastId);
  await withTimeout(
    updateDoc(docRef, { upvotes: increment(1) }),
    10000,
    'Upvoting podcast'
  );
}

export async function getSubmissionsByStatus(status: SubmissionStatus): Promise<PodcastSubmission[]> {
  const db = getDb();
  if (!db) return [];

  const q = query(collection(db, 'podcast_submissions'), where('status', '==', status));
  const snapshot = await getDocs(q);
  const submissions = snapshot.docs.map((d) => ({
    id: d.id,
    name: d.data().name ?? '',
    hosts: d.data().hosts ?? '',
    coverImage: d.data().coverImage ?? null,
    category: d.data().category ?? 'Technology',
    summary: d.data().summary ?? '',
    listenUrl: d.data().listenUrl ?? '',
    submittedBy: d.data().submittedBy ?? 'Anonymous',
    status: d.data().status ?? 'pending',
    submittedAt: d.data().submittedAt ?? null,
    moderatedBy: d.data().moderatedBy ?? null,
    moderatedAt: d.data().moderatedAt ?? null,
    rejectionReason: d.data().rejectionReason ?? null,
    publishedPodcastId: d.data().publishedPodcastId ?? null,
  }));

  // Sort newest first without requiring composite indexes.
  submissions.sort((a, b) => {
    const ta = a.submittedAt?.toMillis?.() ?? 0;
    const tb = b.submittedAt?.toMillis?.() ?? 0;
    return tb - ta;
  });

  return submissions;
}

export async function approveSubmission(
  submissionId: string,
  approvedPodcast: {
    name: string;
    hosts: string;
    coverImage: string | null;
    category: string;
    summary: string;
    listenUrl: string;
    submittedBy: string;
  },
  moderatorEmail: string
): Promise<string> {
  const db = getDb();
  if (!db) throw new Error('Firebase is not configured');

  const submissionRef = doc(db, 'podcast_submissions', submissionId);
  const podcastRef = doc(collection(db, 'podcasts'));
  const batch = writeBatch(db);

  batch.set(podcastRef, {
    ...approvedPodcast,
    featured: false,
    upvotes: 0,
    createdAt: serverTimestamp(),
    publishedAt: serverTimestamp(),
    publishedBy: moderatorEmail,
    sourceSubmissionId: submissionId,
  });

  batch.update(submissionRef, {
    status: 'approved',
    moderatedBy: moderatorEmail,
    moderatedAt: serverTimestamp(),
    rejectionReason: null,
    publishedPodcastId: podcastRef.id,
  });

  await withTimeout(batch.commit(), 10000, 'Approving submission');
  return podcastRef.id;
}

export async function rejectSubmission(
  submissionId: string,
  moderatorEmail: string,
  rejectionReason: string
): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase is not configured');
  const trimmedReason = rejectionReason.trim();
  if (!trimmedReason) {
    throw new Error('Rejection reason is required');
  }

  const submissionRef = doc(db, 'podcast_submissions', submissionId);
  await withTimeout(
    updateDoc(submissionRef, {
      status: 'rejected',
      moderatedBy: moderatorEmail,
      moderatedAt: serverTimestamp(),
      rejectionReason: trimmedReason,
      publishedPodcastId: null,
    }),
    10000,
    'Rejecting submission'
  );
}

export async function removePodcastFromPage(
  podcastId: string,
  moderatorEmail: string
): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase is not configured');

  const podcastRef = doc(db, 'podcasts', podcastId);
  const podcastSnap = await withTimeout(getDoc(podcastRef), 10000, 'Loading podcast');
  if (!podcastSnap.exists()) {
    await withTimeout(deleteDoc(podcastRef), 10000, 'Removing podcast');
    return;
  }

  const sourceSubmissionId = podcastSnap.data().sourceSubmissionId as string | undefined;
  if (!sourceSubmissionId) {
    await withTimeout(deleteDoc(podcastRef), 10000, 'Removing podcast');
    return;
  }

  const submissionRef = doc(db, 'podcast_submissions', sourceSubmissionId);
  const batch = writeBatch(db);
  batch.delete(podcastRef);
  batch.update(submissionRef, {
    status: 'removed',
    moderatedBy: moderatorEmail,
    moderatedAt: serverTimestamp(),
    publishedPodcastId: null,
  });

  await withTimeout(batch.commit(), 10000, 'Removing podcast');
}

export async function seedPodcasts(
  podcasts: {
    name: string;
    hosts: string;
    coverImage: string | null;
    category: string;
    summary: string;
    listenUrl: string;
  }[]
): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase is not configured');

  const existing = await getPodcasts();
  const existingNames = new Set(existing.map((p) => p.name));

  for (const podcast of podcasts) {
    if (existingNames.has(podcast.name)) continue;
    await addDoc(collection(db, 'podcasts'), {
      ...podcast,
      featured: true,
      upvotes: 0,
      submittedBy: 'Brett Pollak',
      createdAt: serverTimestamp(),
      sourceSubmissionId: null,
      publishedBy: 'Brett Pollak',
      publishedAt: serverTimestamp(),
    });
  }
}
