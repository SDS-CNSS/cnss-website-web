import { strapiFetch } from "@/lib/strapi/client";
import { mapArticleToDetail, type StrapiArticle } from "@/lib/strapi/mappers/article";
import type { ArticleDetailContent } from "@/types/article";

const DETAIL_POPULATE =
  "populate[image]=true" +
  "&populate[seo]=true" +
  "&populate[sections][populate][blocks][populate]=*" +
  "&populate[actionsBox][populate]=links" +
  "&populate[relatedArticles][fields][0]=title" +
  "&populate[relatedArticles][fields][1]=slug";

export async function getArticleDetailContent(
  locale: string,
  slug: string,
): Promise<ArticleDetailContent | undefined> {
  const { data } = await strapiFetch<StrapiArticle[]>(
    `/articles?locale=${locale}&filters[slug][$eq]=${encodeURIComponent(slug)}&${DETAIL_POPULATE}`,
  );

  const article = data[0];
  return article ? mapArticleToDetail(article) : undefined;
}

export async function getAllArticleSlugs(locale: string): Promise<string[]> {
  const { data } = await strapiFetch<{ slug: string }[]>(
    `/articles?locale=${locale}&fields[0]=slug&pagination[pageSize]=100`,
  );

  return data.map((article) => article.slug);
}
