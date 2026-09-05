import { SITE_URL } from '@/lib/seoDates';
import { editionDate } from '@/lib/editions';
export default function EditionIndexSchema({ path, title, dates }: { path: string; title: string; dates: string[] }) {
  const schema = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', name: title,
    url: `${SITE_URL}/${path}`, isPartOf: { '@id': `${SITE_URL}/#website` },
    author: { '@id': `${SITE_URL}/#person` },
    mainEntity: { '@type': 'ItemList', itemListElement: dates.map((date, index) => ({
      '@type': 'ListItem', position: index + 1,
      item: { '@type': 'Article', name: `${title} · ${editionDate(date)}`, url: `${SITE_URL}/${path}/${date}`, datePublished: date },
    })) },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
