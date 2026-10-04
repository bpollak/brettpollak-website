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
  lastUpdated: '2026-10-04',
  reportingPeriod: 'First eight months of 2026 (January–August)',
  gateway: {
    tokensBillions: 455.3,
    tokensSuffix: 'B',
    tokensPeriodLabel: 'January–August 2026',
    tokensPeakNote: 'peaking at 78.9B in August',
    requestsMillions: 143.9,
    requestsSuffix: 'M',
    requestsRouteNote: 'Across self-hosted and approved cloud routes',
    selfHostedPercent: 92.6,
    selfHostedSuffix: '%',
    selfHostedNote: 'Self-hosted and internal routes rather than commercial cloud',
  },
  harness: {
    tokensBillions: 22.5,
    tokensSuffix: 'B',
    mergedPullRequests: 119,
    aiReviews: 1139,
    timeframeNote: 'in first weeks',
  },
};
