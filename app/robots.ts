import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ROUTES.home,
      disallow: ROUTES.recherche,
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
