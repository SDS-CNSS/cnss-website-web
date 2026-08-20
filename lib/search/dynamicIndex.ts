import { strapiFetch } from "@/lib/strapi/client";
import { mapImageUrl } from "@/lib/strapi/mappers/media";
import type { StrapiDocument } from "@/lib/strapi/mappers/document";
import type { SearchEntry } from "@/types/search";

// Plafond par collection — largement suffisant à l'échelle du site CNSS ;
// à revoir (pagination multi-appels) si un jour une collection dépasse 100 entrées.
const MAX_ENTRIES = 100;

interface StrapiArticleEntry {
  slug: string;
  title: string;
  excerpt: string;
}

interface StrapiMediaAlbumEntry {
  slug: string;
  title: string;
  description: string | null;
}

/**
 * Contenu éditorial (articles, documents, albums média) indexé individuellement
 * pour /recherche, en plus des pages statiques de `searchIndex.ts`. Les médias
 * solo (hors album) sont exclus : ils n'ont pas d'URL propre (accessibles
 * uniquement via la lightbox de /mediatheque).
 */
export async function getDynamicSearchEntries(locale: string): Promise<SearchEntry[]> {
  const [articlesRes, documentsRes, albumsRes] = await Promise.all([
    strapiFetch<StrapiArticleEntry[]>(
      `/articles?locale=${locale}&fields[0]=slug&fields[1]=title&fields[2]=excerpt` +
        `&pagination[pageSize]=${MAX_ENTRIES}`,
    ),
    strapiFetch<StrapiDocument[]>(
      `/documents?locale=${locale}&fields[0]=title&populate[file]=true&populate[tags]=true` +
        `&pagination[pageSize]=${MAX_ENTRIES}`,
    ),
    strapiFetch<StrapiMediaAlbumEntry[]>(
      `/media-albums?locale=${locale}&fields[0]=slug&fields[1]=title&fields[2]=description` +
        `&pagination[pageSize]=${MAX_ENTRIES}`,
    ),
  ]);

  const articles: SearchEntry[] = articlesRes.data.map((article) => ({
    title: article.title,
    description: article.excerpt,
    href: `/actualites/${article.slug}`,
    category: "Actualités",
  }));

  const documents: SearchEntry[] = documentsRes.data.map((document) => {
    const tags = (document.tags ?? []).map((tag) => tag.value);
    return {
      title: document.title,
      description: tags.length > 0 ? tags.join(", ") : "Document — Bibliothèque",
      href: mapImageUrl(document.file),
      category: "Bibliothèque",
    };
  });

  const albums: SearchEntry[] = albumsRes.data.map((album) => ({
    title: album.title,
    description: album.description ?? "Album — Médiathèque",
    href: `/mediatheque/${album.slug}`,
    category: "Médiathèque",
  }));

  return [...articles, ...documents, ...albums];
}
