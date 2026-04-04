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

function toIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function startOfWeekMonday(date) {
  const copy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = copy.getDay();
  const diff = (day + 6) % 7;
  copy.setDate(copy.getDate() - diff);
  return copy;
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

function extractHeadlines(markdown) {
  return markdown
    .split('\n')
    .map((line) => line.trim())
    .map((line) => {
      const match = line.match(/^• \*\*(.+?)\*\*/);
      return match ? match[1].trim() : null;
    })
    .filter(Boolean);
}

const sourceDir = getArg('source-dir', '/Users/brettpollak/.openclaw/workspace/docs');
const outputPath = getArg('output', path.resolve(process.cwd(), 'lib/weeklyAiDigestData.ts'));
const todayArg = getArg('today', null);
const today = todayArg ? new Date(`${todayArg}T12:00:00`) : new Date();

if (Number.isNaN(today.getTime())) {
  throw new Error(`Invalid --today value: ${todayArg}`);
}

const weekStart = startOfWeekMonday(today);
const weekEnd = new Date(weekStart);
weekEnd.setDate(weekEnd.getDate() + 6);

const days = [];
for (let current = new Date(weekStart); current <= today; current.setDate(current.getDate() + 1)) {
  const isoDate = toIsoDate(current);
  const filename = `ai-news-digest-${isoDate}.md`;
  const filePath = path.join(sourceDir, filename);

  if (!fs.existsSync(filePath)) {
    continue;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const headlines = extractHeadlines(raw);

  if (!headlines.length) {
    continue;
  }

  days.push({
    isoDate,
    displayDate: formatShortDate(current),
    sourceFile: filename,
    headlines,
    raw,
  });
}

const headlineCount = days.reduce((total, day) => total + day.headlines.length, 0);
const data = {
  generatedAt: new Date().toISOString(),
  weekOf: toIsoDate(weekStart),
  weekEnding: toIsoDate(weekEnd),
  weekLabel: getWeekLabel(weekStart, weekEnd),
  publishedThrough: formatLongDate(today),
  digestCount: days.length,
  headlineCount,
  days,
};

const fileContent = `export type WeeklyDigestDay = {\n  isoDate: string;\n  displayDate: string;\n  sourceFile: string;\n  headlines: string[];\n  raw: string;\n};\n\nexport type WeeklyDigestData = {\n  generatedAt: string;\n  weekOf: string;\n  weekEnding: string;\n  weekLabel: string;\n  publishedThrough: string;\n  digestCount: number;\n  headlineCount: number;\n  days: WeeklyDigestDay[];\n};\n\nexport const weeklyAiDigestData: WeeklyDigestData = ${JSON.stringify(data, null, 2)};\n`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, fileContent);

console.log(`Wrote ${outputPath}`);
console.log(`Week: ${data.weekLabel}`);
console.log(`Digests: ${data.digestCount}`);
console.log(`Headlines: ${data.headlineCount}`);
