import { strapiFetch } from "@/lib/strapi/client";
import { mapArticleToNewsCard, type StrapiArticle } from "@/lib/strapi/mappers/article";
import type { NewsCardProps } from "@/components/ui/NewsCard";

export interface ActualitesContent {
  articles: NewsCardProps[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

const PER_PAGE = 6;

export async function getActualitesContent(locale: string, page = 1): Promise<ActualitesContent> {
  const requestedPage = Math.max(1, page);

  const { data, meta } = await strapiFetch<StrapiArticle[]>(
    `/articles?locale=${locale}&sort=date:desc&populate[image]=true` +
      `&pagination[page]=${requestedPage}&pagination[pageSize]=${PER_PAGE}`,
  );

  const totalPages = Math.max(1, meta.pagination?.pageCount ?? 1);
  const totalCount = meta.pagination?.total ?? data.length;

  // La page demandée dépasse le nombre de pages réel (ex. lien obsolète) :
  // on retombe sur la dernière page plutôt que de renvoyer une liste vide.
  if (requestedPage > totalPages) {
    return getActualitesContent(locale, totalPages);
  }

  return {
    articles: data.map(mapArticleToNewsCard),
    currentPage: requestedPage,
    totalPages,
    totalCount,
  };
}
