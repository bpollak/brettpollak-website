import { weeklyAiDigestData } from './weeklyAiDigestData';
import { ucsdAiNewsletterData } from './ucsdAiNewsletterData';

function mergeEditions<T extends { isoDate: string }>(archive: T[], current: T[]): T[] {
  return [...new Map([...archive, ...current].map(edition => [edition.isoDate, edition])).values()]
    .sort((a, b) => b.isoDate.localeCompare(a.isoDate));
}
export const digestEditions = mergeEditions(weeklyAiDigestData.archive ?? [], weeklyAiDigestData.days);
export const newsletterEditions = mergeEditions(ucsdAiNewsletterData.archive ?? [], ucsdAiNewsletterData.editions);
export function editionDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}
