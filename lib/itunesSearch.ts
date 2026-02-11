export interface ITunesResult {
  trackName: string;
  artistName: string;
  artworkUrl600: string;
  collectionViewUrl: string;
  primaryGenreName: string;
}

export async function searchPodcasts(term: string): Promise<ITunesResult[]> {
  if (!term || term.length < 2) return [];

  const response = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=podcast&limit=5`
  );

  if (!response.ok) return [];

  const data = await response.json();
  return (data.results ?? []).map((r: Record<string, unknown>) => ({
    trackName: r.trackName ?? '',
    artistName: r.artistName ?? '',
    artworkUrl600: r.artworkUrl600 ?? '',
    collectionViewUrl: r.collectionViewUrl ?? '',
    primaryGenreName: r.primaryGenreName ?? '',
  }));
}
