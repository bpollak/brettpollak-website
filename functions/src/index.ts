import { initializeApp } from 'firebase-admin/app';
import { FieldValue } from 'firebase-admin/firestore';
import { logger } from 'firebase-functions';
import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { defineSecret, defineString } from 'firebase-functions/params';

initializeApp();

const resendApiKey = defineSecret('RESEND_API_KEY');

const notificationTo = defineString('PODCAST_NOTIFICATION_TO', {
  default: 'brettcpollak@gmail.com',
});

const notificationFrom = defineString('PODCAST_NOTIFICATION_FROM', {
  default: 'Podcast Moderation <onboarding@resend.dev>',
});

const moderationUrl = defineString('PODCAST_MODERATION_URL', {
  default: 'https://brettcpollak.com/podcasts/moderation',
});

interface SubmissionData {
  name?: unknown;
  hosts?: unknown;
  category?: unknown;
  listenUrl?: unknown;
  summary?: unknown;
  submittedBy?: unknown;
  status?: unknown;
}

function asTrimmedString(value: unknown, fallback = 'Unknown'): string {
  if (typeof value !== 'string') return fallback;
  const trimmed = value.trim();
  return trimmed || fallback;
}

function truncate(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, Math.max(0, maxLength - 3))}...`;
}

function escapeHtml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function buildNotification(submissionId: string, data: SubmissionData) {
  const name = truncate(asTrimmedString(data.name), 140);
  const hosts = truncate(asTrimmedString(data.hosts), 160);
  const submittedBy = truncate(asTrimmedString(data.submittedBy, 'Anonymous'), 120);
  const category = truncate(asTrimmedString(data.category), 80);
  const listenUrl = asTrimmedString(data.listenUrl, '');
  const summary = truncate(asTrimmedString(data.summary), 1000);
  const moderationLink = moderationUrl.value();

  const subject = `New podcast submission: ${name}`;

  const text = [
    'A new podcast submission is waiting for review.',
    '',
    `Podcast: ${name}`,
    `Hosts: ${hosts}`,
    `Category: ${category}`,
    `Submitted by: ${submittedBy}`,
    `Link: ${listenUrl || 'Not provided'}`,
    `Submission ID: ${submissionId}`,
    '',
    'Summary:',
    summary,
    '',
    `Moderation console: ${moderationLink}`,
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.45;">
      <h2 style="margin: 0 0 12px;">New podcast submission</h2>
      <p style="margin: 0 0 12px;">A new podcast submission is waiting for review.</p>
      <table style="border-collapse: collapse; margin: 0 0 14px;">
        <tr><td style="padding: 4px 8px 4px 0; font-weight: 600;">Podcast:</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding: 4px 8px 4px 0; font-weight: 600;">Hosts:</td><td>${escapeHtml(hosts)}</td></tr>
        <tr><td style="padding: 4px 8px 4px 0; font-weight: 600;">Category:</td><td>${escapeHtml(category)}</td></tr>
        <tr><td style="padding: 4px 8px 4px 0; font-weight: 600;">Submitted by:</td><td>${escapeHtml(submittedBy)}</td></tr>
        <tr><td style="padding: 4px 8px 4px 0; font-weight: 600;">Submission ID:</td><td>${escapeHtml(submissionId)}</td></tr>
      </table>
      <p style="margin: 0 0 10px;"><strong>Link:</strong> ${
        listenUrl
          ? `<a href="${escapeHtml(listenUrl)}" target="_blank" rel="noreferrer">Open podcast</a>`
          : 'Not provided'
      }</p>
      <p style="margin: 0 0 6px;"><strong>Summary:</strong></p>
      <p style="margin: 0 0 14px;">${escapeHtml(summary)}</p>
      <a
        href="${escapeHtml(moderationLink)}"
        style="display: inline-block; background: #0f172a; color: #ffffff; text-decoration: none; padding: 10px 14px; border-radius: 9999px; font-weight: 600;"
        target="_blank"
        rel="noreferrer"
      >
        Open moderation console
      </a>
    </div>
  `;

  return { subject, text, html };
}

export const notifyNewPodcastSubmission = onDocumentCreated(
  {
    document: 'podcast_submissions/{submissionId}',
    region: 'us-central1',
    timeoutSeconds: 30,
    memory: '256MiB',
    secrets: [resendApiKey],
  },
  async (event) => {
    if (!event.data) {
      logger.warn('Missing event data for submission notification', { eventId: event.id });
      return;
    }

    const submissionId = event.params.submissionId;
    const submissionData = event.data.data() as SubmissionData;

    if (submissionData.status !== 'pending') {
      logger.info('Skipping notification for non-pending submission', {
        submissionId,
        status: submissionData.status,
      });
      return;
    }

    const current = await event.data.ref.get();
    if (!current.exists) {
      logger.warn('Submission document no longer exists', { submissionId });
      return;
    }

    if (current.get('notificationSentAt')) {
      logger.info('Notification already sent for submission', { submissionId });
      return;
    }

    const email = buildNotification(submissionId, submissionData);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey.value()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: notificationFrom.value(),
        to: [notificationTo.value()],
        subject: email.subject,
        text: email.text,
        html: email.html,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      logger.error('Failed to send new submission notification', {
        submissionId,
        statusCode: response.status,
        errorBody,
      });
      throw new Error(`Resend API error (${response.status})`);
    }

    const result = (await response.json()) as { id?: string };

    await event.data.ref.update({
      notificationSentAt: FieldValue.serverTimestamp(),
      notificationProvider: 'resend',
      notificationMessageId: result.id ?? null,
      notificationTarget: notificationTo.value(),
    });

    logger.info('Sent podcast submission notification', {
      submissionId,
      notificationMessageId: result.id ?? null,
    });
  }
);
