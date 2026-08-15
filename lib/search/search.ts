import type { SearchEntry } from "@/types/search";

function normalize(value: string): string {
  return value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

export function searchEntries(
  index: SearchEntry[],
  query: string,
): SearchEntry[] {
  const q = normalize(query.trim());
  if (!q) return [];

  return index
    .map((entry) => {
      const title = normalize(entry.title);
      const description = normalize(entry.description);
      let score = 0;
      if (title === q) score += 100;
      else if (title.startsWith(q)) score += 60;
      else if (title.includes(q)) score += 40;
      if (description.includes(q)) score += 10;
      return { entry, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ entry }) => entry);
}
