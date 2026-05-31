// Shared palette tokens for the "living system map" diagram kit.
// Mirrors the signal palette defined in app/globals.css :root.

export type Tone = 'blue' | 'gold' | 'green' | 'coral' | 'ink';

export const TONE_HEX: Record<Tone, string> = {
  blue: '#1f5a8a',
  gold: '#c97712',
  green: '#366c5a',
  coral: '#b8503f',
  ink: '#17201b',
};

export const PAPER = '#fffef9';
export const PAPER_BASE = '#f7f9f5';
export const LINE = '#d9dfd3';
export const INK = '#17201b';
export const SUBTEXT = '#5c665e';
