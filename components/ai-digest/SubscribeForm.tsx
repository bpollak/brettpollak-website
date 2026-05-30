'use client';

import { useState, type FormEvent } from 'react';

const BUTTONDOWN_ID = 'pollak';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function SubscribeForm() {
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
    <div className="card-hard p-8">
      <h2 className="text-xl font-bold text-ink mb-2">
        Get the digest in your inbox
      </h2>
      <p className="text-muted text-sm mb-6">
        A curated AI briefing delivered every morning — real sources, no hallucinated links.
      </p>

      {formState === 'success' ? (
        <div className="border-2 border-ink bg-paper-2 px-5 py-4 text-sm font-medium text-ink">
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
            className="flex-1 border-2 border-ink rounded-none bg-paper px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ink disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={formState === 'submitting'}
            aria-busy={formState === 'submitting'}
            className="btn-bold px-6 py-3 text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ink disabled:opacity-60"
          >
            {formState === 'submitting' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      )}

      {formState === 'error' && (
        <p id="subscribe-error" role="alert" className="mt-3 text-sm text-accent">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
