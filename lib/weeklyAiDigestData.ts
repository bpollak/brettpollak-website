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
  "generatedAt": "2026-04-07T16:01:30.660Z",
  "weekOf": "2026-04-06",
  "weekEnding": "2026-04-12",
  "weekLabel": "Week of April 6–12, 2026",
  "publishedThrough": "April 7, 2026",
  "digestCount": 0,
  "headlineCount": 0,
  "days": []
};
