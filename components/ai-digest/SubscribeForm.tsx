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
    <div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm p-8">
      <h2 className="text-xl font-bold text-slate-900 mb-2">
        Get the digest in your inbox
      </h2>
      <p className="text-slate-600 text-sm mb-6">
        A curated AI briefing delivered every morning — real sources, no hallucinated links.
      </p>

      {formState === 'success' ? (
        <div className="rounded-xl bg-blue-50 border border-blue-100 px-5 py-4 text-sm font-medium text-blue-800">
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
            className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={formState === 'submitting'}
            aria-busy={formState === 'submitting'}
            className="rounded-xl bg-gradient-to-r from-slate-900 to-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-slate-800 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60 transition-all"
          >
            {formState === 'submitting' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      )}

      {formState === 'error' && (
        <p id="subscribe-error" role="alert" className="mt-3 text-sm text-red-600">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
