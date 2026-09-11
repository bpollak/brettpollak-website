/**
 * Source of truth for TritonAI and TritonGPT institutional metrics.
 * 
 * Used across https://brettcpollak.com/tritongpt for:
 * - Gateway usage stat cards (animated CountUp)
 * - Harness developer environment early usage metrics
 * - Roadmap delivery narrative descriptions
 * 
 * Update Cadence:
 * - Monthly or quarterly following ITS / AP team gateway usage rollups.
 * - Managed via Hermes automation (tritonai-roadmap-auto-review) or manual update.
 */

export interface TritonAiMetrics {
  lastUpdated: string;
  reportingPeriod: string;
  gateway: {
    tokensBillions: number;
    tokensSuffix: string;
    tokensPeriodLabel: string;
    tokensPeakNote: string;
    requestsMillions: number;
    requestsSuffix: string;
    requestsRouteNote: string;
    selfHostedPercent: number;
    selfHostedSuffix: string;
    selfHostedNote: string;
  };
  harness: {
    tokensBillions: number;
    tokensSuffix: string;
    mergedPullRequests: number;
    aiReviews: number;
    timeframeNote: string;
  };
}

export const tritonAiMetrics: TritonAiMetrics = {
  lastUpdated: '2026-07-01',
  reportingPeriod: 'First half of 2026 (January–June)',
  gateway: {
    tokensBillions: 309.4,
    tokensSuffix: 'B',
    tokensPeriodLabel: 'January–June 2026',
    tokensPeakNote: 'peaking at 73.2B in June',
    requestsMillions: 105.1,
    requestsSuffix: 'M',
    requestsRouteNote: 'Across self-hosted and approved cloud routes',
    selfHostedPercent: 95.3,
    selfHostedSuffix: '%',
    selfHostedNote: 'UC-controlled hosting rather than commercial providers',
  },
  harness: {
    tokensBillions: 22.5,
    tokensSuffix: 'B',
    mergedPullRequests: 119,
    aiReviews: 1139,
    timeframeNote: 'in first weeks',
  },
};
