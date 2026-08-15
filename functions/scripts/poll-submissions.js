#!/usr/bin/env node
/**
 * Polls Firestore for new pending podcast submissions and sends email notification.
 * Designed to run as a cron job every 5 minutes.
 *
 * Uses firebase-admin with the service account key.
 * Sends email via gmail_send.py (--text-file for safe body passing).
 */

const path = require('path');
const { execSync } = require('child_process');
const fs = require('fs');
const os = require('os');

const KEY_PATH = path.resolve(os.homedir(), '.openclaw/credentials/podcast-submitter-key.json');
const GMAIL_SCRIPT = path.resolve(os.homedir(), '.openclaw/workspace/scripts/gmail_send.py');
const MODERATION_URL = 'https://brettcpollak.com/podcasts/moderation';
const STATE_DIR = path.resolve(os.homedir(), '.openclaw/workspace/data');
const STATE_FILE = path.join(STATE_DIR, 'podcast-notification-state.json');

let admin;
try {
  admin = require('firebase-admin');
} catch (e) {
  console.error('firebase-admin not found. Run: cd functions && npm install');
  process.exit(1);
}

// Initialize Firebase Admin
if (!admin.apps.length) {
  process.env.GOOGLE_APPLICATION_CREDENTIALS = KEY_PATH;
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

const db = admin.firestore();

// Track already-notified IDs locally (belt-and-suspenders with Firestore field)
let notifiedIds = new Set();
try {
  if (fs.existsSync(STATE_FILE)) {
    const state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
    if (state.notifiedIds) notifiedIds = new Set(state.notifiedIds);
  }
} catch (e) {
  // Ignore state file errors
}

function saveState() {
  try {
    fs.mkdirSync(STATE_DIR, { recursive: true });
    fs.writeFileSync(STATE_FILE, JSON.stringify({
      notifiedIds: [...notifiedIds],
      updatedAt: new Date().toISOString(),
    }));
  } catch (e) {
    console.error('Failed to save state:', e.message);
  }
}

async function poll() {
  const now = new Date().toISOString();
  console.log(`[${now}] Checking for new podcast submissions...`);

  // Clean up old state entries (>24h)
  for (const id of notifiedIds) {
    // We'll just let the set grow and auto-prune on restart
  }

  // Query for pending submissions
  const snapshot = await db
    .collection('podcast_submissions')
    .where('status', '==', 'pending')
    .get();

  if (snapshot.empty) {
    console.log(`[${now}] No pending submissions.`);
    return { checked: true, sent: 0 };
  }

  let sent = 0;
  for (const doc of snapshot.docs) {
    const submissionId = doc.id;

    // Skip if already notified this run
    if (notifiedIds.has(submissionId)) continue;

    const freshDoc = await doc.ref.get();
    if (!freshDoc.exists) continue;
    if (freshDoc.get('notificationSentAt')) continue;

    const data = freshDoc.data();
    const name = (data.name || 'Unknown').toString();
    const hosts = (data.hosts || 'Unknown').toString();
    const submittedBy = (data.submittedBy || 'Anonymous').toString();
    const category = (data.category || 'Uncategorized').toString();
    const listenUrl = (data.listenUrl || '').toString();
    const summary = (data.summary || '').toString();

    const subject = `New podcast submission: ${truncate(name, 80)}`;

    const textBody = [
      'A new podcast submission is waiting for review on brettcpollak.com.',
      '',
      `Podcast: ${name}`,
      `Hosts: ${hosts}`,
      `Category: ${category}`,
      `Submitted by: ${submittedBy}`,
      `Link: ${listenUrl || 'Not provided'}`,
      `Submission ID: ${submissionId}`,
      '',
      summary ? `Summary:\n${summary}` : '',
      '',
      `Review at: ${MODERATION_URL}`,
      '',
      '— Henry',
    ]
      .filter(Boolean)
      .join('\n');

    // Write body to temp file for safe passing
    const tmpFile = path.join(os.tmpdir(), `podcast-notif-${submissionId}.txt`);
    fs.writeFileSync(tmpFile, textBody, 'utf-8');

    try {
      const result = execSync(
        `python3 "${GMAIL_SCRIPT}" --to "brettcpollak@gmail.com" --subject "${subject.replace(/"/g, '\\"')}" --text-file "${tmpFile}"`,
        { timeout: 30000, encoding: 'utf-8' }
      );
      console.log(`  ✅ Sent notification for ${submissionId}: ${name}`);

      // Mark as notified
      await doc.ref.update({
        notificationSentAt: admin.firestore.FieldValue.serverTimestamp(),
        notificationProvider: 'gmail-cron',
        notificationTarget: 'brettcpollak@gmail.com',
      });

      notifiedIds.add(submissionId);
      sent++;
    } catch (emailErr) {
      console.error(`  ❌ Failed to send email for ${submissionId}:`, emailErr.message);
    } finally {
      try { fs.unlinkSync(tmpFile); } catch (e) { /* ignore */ }
    }
  }

  saveState();
  console.log(`[${new Date().toISOString()}] Done. Sent ${sent} notification(s).`);
  return { checked: true, sent };
}

function truncate(value, max) {
  if (!value || value.length <= max) return value;
  return value.slice(0, Math.max(0, max - 3)) + '...';
}

poll()
  .then((result) => process.exit(0))
  .catch((err) => {
    console.error('Poll error:', err);
    process.exit(1);
  });
