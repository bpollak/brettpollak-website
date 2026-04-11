import fs from 'node:fs';
import path from 'node:path';

function getArg(name, fallback = null) {
  const prefix = `--${name}=`;
  const found = process.argv.find((arg) => arg.startsWith(prefix));
  return found ? found.slice(prefix.length) : fallback;
}

function formatLongDateParts(date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/Los_Angeles',
  }).formatToParts(date);

  const month = parts.find((part) => part.type === 'month')?.value ?? '';
  const day = parts.find((part) => part.type === 'day')?.value ?? '';
  const year = parts.find((part) => part.type === 'year')?.value ?? '';

  return { month, day, year };
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'America/Los_Angeles',
  }).format(date);
}

function formatShortDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Los_Angeles',
  }).format(date);
}

function getWeekLabel(start, end) {
  const startParts = formatLongDateParts(start);
  const endParts = formatLongDateParts(end);

  if (startParts.month === endParts.month && startParts.year === endParts.year) {
    return `Week of ${startParts.month} ${startParts.day}–${endParts.day}, ${startParts.year}`;
  }

  if (startParts.year === endParts.year) {
    return `Week of ${startParts.month} ${startParts.day} – ${endParts.month} ${endParts.day}, ${startParts.year}`;
  }

  return `Week of ${startParts.month} ${startParts.day}, ${startParts.year} – ${endParts.month} ${endParts.day}, ${endParts.year}`;
}

function parseIsoFromFilename(filename) {
  const match = filename.match(/^ucsd-ai-newsletter-(\d{4}-\d{2}-\d{2})\.md$/);
  return match ? match[1] : null;
}

function countSectionBullets(markdown, sectionHeading) {
  const lines = markdown.split('\n');
  const startIdx = lines.findIndex((line) => line.trim() === sectionHeading);
  if (startIdx === -1) return 0;
  let count = 0;
  for (let i = startIdx + 1; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (trimmed.startsWith('## ')) break;
    // Count bullets that start with "• **", calendar "📅 **" (upcoming events),
    // or videotape "📼 **" (recent recordings used as fallback in the trainings section).
    if (/^(•|📅|📼)\s+\*\*/.test(trimmed)) {
      count++;
    }
  }
  return count;
}

const sourceDir = getArg('source-dir', '/Users/brettpollak/.openclaw/workspace/docs');
const outputPath = getArg('output', path.resolve(process.cwd(), 'lib/ucsdAiNewsletterData.ts'));
const todayArg = getArg('today', null);
const today = todayArg ? new Date(`${todayArg}T12:00:00`) : new Date();

if (Number.isNaN(today.getTime())) {
  throw new Error(`Invalid --today value: ${todayArg}`);
}

// Section headings the newsletter template uses (load-bearing; match exactly)
const SECTION_TOOL_UPDATES = "## What's New in Your AI Tools";
const SECTION_TRITONAI_NEWS = '## TritonAI News';
const SECTION_UPCOMING_TRAININGS = '## Coming Up: Trainings & Workshops';

// Discover every ucsd-ai-newsletter-*.md file in the source dir
const files = fs.existsSync(sourceDir) ? fs.readdirSync(sourceDir) : [];
const editions = [];

for (const filename of files) {
  const isoDate = parseIsoFromFilename(filename);
  if (!isoDate) continue;

  const filePath = path.join(sourceDir, filename);
  const raw = fs.readFileSync(filePath, 'utf8');

  // A published edition must contain at least the tool updates section; otherwise skip
  if (!raw.includes(SECTION_TOOL_UPDATES)) continue;

  const editionDate = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(editionDate.getTime())) continue;

  const toolUpdatesCount = countSectionBullets(raw, SECTION_TOOL_UPDATES);
  const tritonAiNewsCount = countSectionBullets(raw, SECTION_TRITONAI_NEWS);
  const upcomingTrainingsCount = countSectionBullets(raw, SECTION_UPCOMING_TRAININGS);

  editions.push({
    isoDate,
    displayDate: formatShortDate(editionDate),
    sourceFile: filename,
    toolUpdatesCount,
    tritonAiNewsCount,
    upcomingTrainingsCount,
    raw,
  });
}

// Sort newest first
editions.sort((a, b) => b.isoDate.localeCompare(a.isoDate));

const latest = editions[0] ?? null;
const latestDate = latest ? new Date(`${latest.isoDate}T12:00:00`) : null;
const latestWeekEnd = latestDate ? new Date(latestDate) : null;
if (latestWeekEnd) latestWeekEnd.setDate(latestWeekEnd.getDate() + 6);

const data = {
  generatedAt: new Date().toISOString(),
  weekLabel: latest && latestDate && latestWeekEnd
    ? getWeekLabel(latestDate, latestWeekEnd)
    : 'Awaiting first edition',
  weekOf: latest ? latest.isoDate : '',
  weekEnding: latestWeekEnd
    ? `${latestWeekEnd.getFullYear()}-${String(latestWeekEnd.getMonth() + 1).padStart(2, '0')}-${String(latestWeekEnd.getDate()).padStart(2, '0')}`
    : '',
  publishedThrough: latestDate ? formatLongDate(latestDate) : '',
  editionCount: editions.length,
  itemCount: editions.reduce(
    (total, e) => total + e.toolUpdatesCount + e.tritonAiNewsCount + e.upcomingTrainingsCount,
    0,
  ),
  editions,
};

const fileContent = `export type UcsdAiNewsletterEdition = {
  isoDate: string;
  displayDate: string;
  sourceFile: string;
  toolUpdatesCount: number;
  tritonAiNewsCount: number;
  upcomingTrainingsCount: number;
  raw: string;
};

export type UcsdAiNewsletterData = {
  generatedAt: string;
  weekLabel: string;
  weekOf: string;
  weekEnding: string;
  publishedThrough: string;
  editionCount: number;
  itemCount: number;
  editions: UcsdAiNewsletterEdition[];
};

export const ucsdAiNewsletterData: UcsdAiNewsletterData = ${JSON.stringify(data, null, 2)};
`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, fileContent);

console.log(`Wrote ${outputPath}`);
console.log(`Editions: ${data.editionCount}`);
console.log(`Items total: ${data.itemCount}`);
console.log(`Latest: ${data.weekLabel}`);
