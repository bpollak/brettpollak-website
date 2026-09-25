'use client';

import { useState, type FormEvent } from 'react';

const BUTTONDOWN_ID = 'pollak';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

type SubscribeFormProps = {
  /** Match the surrounding outline — the homepage nests this under an h3. */
  headingLevel?: 'h2' | 'h3' | 'h4';
  /** Tighter padding for use inside a column rather than as a standalone panel. */
  compact?: boolean;
};

export default function SubscribeForm({ headingLevel = 'h2', compact = false }: SubscribeFormProps) {
  const Heading = headingLevel;
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    try {
      const res = await fetch(
        `https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ email, tag: 'ai-digest' }),
          mode: 'no-cors',
        },
      );

      // With no-cors the response is opaque — treat as success
      if (res.type === 'opaque' || res.ok) {
        setFormState('success');
        setEmail('');
      } else {
        throw new Error('Subscription request failed. Please try again.');
      }
    } catch (err) {
      if (formState !== 'success') {
        setFormState('error');
        setErrorMessage(
          err instanceof Error ? err.message : 'Something went wrong. Please try again.',
        );
      }
    }
  }

  return (
    <div className={`editorial-panel ${compact ? 'p-6' : 'p-8'}`} data-tone="green">
      <Heading className="font-[family-name:var(--font-display)] text-xl font-bold text-ink mb-2">
        Get the digest in your inbox
      </Heading>
      <p className={`text-body text-sm ${compact ? 'mb-4' : 'mb-6'}`}>
        One email each morning, a few minutes to read. Free, and you can unsubscribe anytime.
      </p>

      {formState === 'success' ? (
        <div className="rounded-xl bg-wash-blue border border-line px-5 py-4 text-sm font-medium text-signal-blue">
          You&rsquo;re subscribed! Check your inbox to confirm.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <label htmlFor="subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="subscribe-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={formState === 'submitting'}
            aria-describedby={formState === 'error' ? 'subscribe-error' : undefined}
            className="flex-1 rounded-sm border border-line bg-paper-strong px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-signal-blue focus:border-signal-blue disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={formState === 'submitting'}
            aria-busy={formState === 'submitting'}
            className="rounded-sm bg-[#17201b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1f5a8a] focus:outline-none focus:ring-2 focus:ring-signal-blue focus:ring-offset-2 disabled:opacity-60 transition-colors"
          >
            {formState === 'submitting' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      )}

      {formState === 'error' && (
        <p id="subscribe-error" role="alert" className="mt-3 text-sm text-signal-coral-ink">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
