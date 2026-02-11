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
  }));
}

export async function addPodcast(podcast: {
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

  const docRef = await addDoc(collection(db, 'podcasts'), {
    ...podcast,
    featured: false,
    upvotes: 0,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function upvotePodcast(podcastId: string): Promise<void> {
  const db = getDb();
  if (!db) throw new Error('Firebase is not configured');

  const docRef = doc(db, 'podcasts', podcastId);
  await updateDoc(docRef, { upvotes: increment(1) });
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
    });
  }
}
