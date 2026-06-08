export type WeeklyDigestDay = {
  isoDate: string;
  displayDate: string;
  sourceFile: string;
  headlines: string[];
  raw: string;
};

export type WeeklyDigestData = {
  generatedAt: string;
  weekOf: string;
  weekEnding: string;
  weekLabel: string;
  publishedThrough: string;
  digestCount: number;
  headlineCount: number;
  days: WeeklyDigestDay[];
};

export const weeklyAiDigestData: WeeklyDigestData = {
  "generatedAt": "2026-06-08T13:37:12.797Z",
  "weekOf": "2026-06-08",
  "weekEnding": "2026-06-14",
  "weekLabel": "Week of June 8–14, 2026",
  "publishedThrough": "June 8, 2026",
  "digestCount": 0,
  "headlineCount": 0,
  "days": []
};
