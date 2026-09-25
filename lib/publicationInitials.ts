// 1–2 letter monogram for a publication tile, e.g. "Campus Technology"
// -> "CT". Used wherever a row has no favicon (media page, homepage press list).
export function publicationInitials(name: string): string {
  const tokens = name.split(/[\s:&,\-–—./]+/);
  // Prefer alphabetic words so "NACUBO 2026 Annual Meeting" -> "NA", not "N2"
  const alpha = tokens.filter((w) => /^[A-Za-z]/.test(w));
  const words = alpha.length > 0 ? alpha : tokens.filter((w) => /^[A-Za-z0-9]/.test(w));
  if (words.length === 0) return name.slice(0, 2).toUpperCase();
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}
