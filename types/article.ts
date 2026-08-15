import type { RichContentBlock } from "@/types/rich-content";

export interface ArticleSection {
  id: string;
  title: string;
  blocks: RichContentBlock[];
}

export interface ArticleActionsBox {
  title: string;
  links: { label: string; href: string }[];
}

export interface ArticleRelatedLink {
  title: string;
  href: string;
}

export interface ArticleDetailContent {
  slug: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  title: string;
  category: "événement" | "communiqué";
  date: string;
  heroImage: { url: string; alt: string };
  sections: ArticleSection[];
  actionsBox?: ArticleActionsBox;
  recentArticles: ArticleRelatedLink[];
}
