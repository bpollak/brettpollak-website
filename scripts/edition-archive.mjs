import fs from 'node:fs';

/** Read the JSON payload of a generated data module without executing code. */
export function readGeneratedData(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, 'utf8');
  const match = source.match(/export const \w+: \w+ = (\{[\s\S]*\});\s*$/);
  if (!match) throw new Error(`Cannot preserve editions: unexpected data format in ${filePath}`);
  return JSON.parse(match[1]);
}

/** Retain older editions in the same generated file that the publishing job already commits. */
export function preserveEditions(previous, current, key) {
  const retained = new Map();
  for (const entry of [...(previous?.archive ?? []), ...(previous?.[key] ?? []), ...current]) {
    retained.set(entry.isoDate, entry);
  }
  for (const entry of current) retained.delete(entry.isoDate);
  return [...retained.values()].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
}
