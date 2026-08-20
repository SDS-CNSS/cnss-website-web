import { normalize } from "@/lib/search/search";

// Les positions se calculent sur le texte normalisé (accents/casse ignorés)
// mais on découpe le texte ORIGINAL aux mêmes indices, pour garder l'accent/la
// casse d'origine dans l'affichage — valable car chaque caractère accentué
// français (é, è, à...) se décompose en NFD en exactement 1 lettre de base +
// 1 marque combinante, donc la longueur normalisée == longueur d'origine.
function getMatchRanges(text: string, query: string): [number, number][] {
  const normalizedText = normalize(text);
  const normalizedQuery = normalize(query.trim());
  if (!normalizedQuery) return [];

  const ranges: [number, number][] = [];
  let fromIndex = 0;
  while (fromIndex <= normalizedText.length) {
    const index = normalizedText.indexOf(normalizedQuery, fromIndex);
    if (index === -1) break;
    ranges.push([index, index + normalizedQuery.length]);
    fromIndex = index + normalizedQuery.length;
  }
  return ranges;
}

type HighlightMatchProps = {
  text: string;
  query: string;
};

export function HighlightMatch({ text, query }: HighlightMatchProps) {
  const ranges = getMatchRanges(text, query);
  if (ranges.length === 0) return <>{text}</>;

  const segments: { text: string; matched: boolean }[] = [];
  let cursor = 0;
  for (const [start, end] of ranges) {
    if (start > cursor) segments.push({ text: text.slice(cursor, start), matched: false });
    segments.push({ text: text.slice(start, end), matched: true });
    cursor = end;
  }
  if (cursor < text.length) segments.push({ text: text.slice(cursor), matched: false });

  return (
    <>
      {segments.map((segment, index) =>
        segment.matched ? (
          <mark key={index} className="rounded-sm bg-primary-100 text-primary-800">
            {segment.text}
          </mark>
        ) : (
          <span key={index}>{segment.text}</span>
        ),
      )}
    </>
  );
}
