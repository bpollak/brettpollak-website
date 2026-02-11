import { initializeApp, getApps, FirebaseApp, FirebaseOptions } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';

function sanitizeFirebaseEnv(value: string | undefined): string | undefined {
  if (!value) return undefined;

  let sanitized = value.trim();

  // Common copy/paste issues from docs and UIs.
  if (
    (sanitized.startsWith('"') && sanitized.endsWith('"')) ||
    (sanitized.startsWith("'") && sanitized.endsWith("'"))
  ) {
    sanitized = sanitized.slice(1, -1).trim();
  }
  if (sanitized.startsWith('<') && sanitized.endsWith('>')) {
    sanitized = sanitized.slice(1, -1).trim();
  }

  // Firebase config values should not contain whitespace.
  sanitized = sanitized.replace(/\s+/g, '');
  return sanitized || undefined;
}

const firebaseConfig: FirebaseOptions = {
  apiKey: sanitizeFirebaseEnv(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
  authDomain: sanitizeFirebaseEnv(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
  projectId: sanitizeFirebaseEnv(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
  storageBucket: sanitizeFirebaseEnv(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: sanitizeFirebaseEnv(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
  appId: sanitizeFirebaseEnv(process.env.NEXT_PUBLIC_FIREBASE_APP_ID),
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let auth: Auth | null = null;
let firebaseDisabledByInitError = false;

export function isFirebaseConfigured(): boolean {
  if (firebaseDisabledByInitError) return false;
  return !!(
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
  );
}

function getFirebaseApp(): FirebaseApp | null {
  if (!isFirebaseConfigured()) return null;
  if (!app) {
    try {
      app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    } catch (error) {
      // Do not break rendering if Firebase config is malformed.
      console.error('Firebase initialization failed. Falling back to static podcast mode.', error);
      firebaseDisabledByInitError = true;
      return null;
    }
  }
  return app;
}

export function getDb(): Firestore | null {
  if (!db) {
    const firebaseApp = getFirebaseApp();
    if (!firebaseApp) return null;
    db = getFirestore(firebaseApp);
  }
  return db;
}

export function getFirebaseAuth(): Auth | null {
  if (!auth) {
    const firebaseApp = getFirebaseApp();
    if (!firebaseApp) return null;
    auth = getAuth(firebaseApp);
  }
  return auth;
}
