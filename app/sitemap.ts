import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SITEMAP_ROUTES, actualiteDetailRoute } from "@/lib/routes";
import { getAllArticleSlugs } from "@/lib/content/article-detail";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = SITEMAP_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));

  // Seuls les articles ayant un vrai contenu de détail (voir lib/content/article-detail.ts)
  // sont inclus — pas la liste de /actualites, dont la majorité des liens 404 encore (cf. audit).
  const articleSlugs = await getAllArticleSlugs("fr");
  const articleEntries: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${SITE_URL}${actualiteDetailRoute(slug)}`,
    lastModified,
  }));

  return [...staticEntries, ...articleEntries];
}
