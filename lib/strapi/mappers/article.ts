import type { NewsCardProps } from "@/components/ui/NewsCard";
import type { ArticleDetailContent, ArticleSection } from "@/types/article";
import type { RichContentBlock } from "@/types/rich-content";
import { mapImageUrl, formatFileSize, extensionLabel, type StrapiMedia } from "@/lib/strapi/mappers/media";

// --- Formes brutes renvoyées par l'API Strapi (api::article.article) ---

interface StrapiLink {
  label: string;
  href: string;
}

interface StrapiListItem {
  text: string;
  label: string | null;
  href: string | null;
}

interface StrapiRichContentBlock {
  __component:
    | "content.paragraph"
    | "content.list"
    | "content.ordered-list"
    | "content.definition-list"
    | "content.gallery"
    | "content.paragraph-with-link"
    | "content.document";
  text?: string;
  items?: StrapiListItem[];
  definitions?: { term: string; description: string }[];
  images?: StrapiMedia[];
  before?: string;
  linkText?: string;
  href?: string;
  after?: string;
  title?: string;
  file?: StrapiMedia;
}

interface StrapiArticleSection {
  id: number;
  title: string;
  blocks: StrapiRichContentBlock[];
}

interface StrapiActionsBox {
  title: string;
  links: StrapiLink[];
}

export interface StrapiArticle {
  documentId: string;
  slug: string;
  title: string;
  category: "evenement" | "communique";
  date: string;
  excerpt: string;
  image: StrapiMedia;
  seo: { metaTitle: string; metaDescription: string };
  sections?: StrapiArticleSection[];
  actionsBox?: StrapiActionsBox | null;
  relatedArticles?: { title: string; slug: string }[];
}

// --- Mapping des valeurs qui divergent entre Strapi et le front ---

const CATEGORY_LABELS = {
  evenement: "événement",
  communique: "communiqué",
} as const;

export function mapCategory(category: StrapiArticle["category"]): "événement" | "communiqué" {
  return CATEGORY_LABELS[category];
}

const DATE_FORMATTER = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatArticleDate(isoDate: string): string {
  // new Date("2026-06-30") est interprété en UTC minuit — on force midi pour
  // éviter qu'un fuseau négatif fasse reculer la date affichée d'un jour.
  return DATE_FORMATTER.format(new Date(`${isoDate}T12:00:00`));
}

const BLOCK_TYPE_MAP: Record<StrapiRichContentBlock["__component"], RichContentBlock["type"]> = {
  "content.paragraph": "paragraph",
  "content.list": "list",
  "content.ordered-list": "orderedList",
  "content.definition-list": "definitionList",
  "content.gallery": "gallery",
  "content.paragraph-with-link": "paragraphWithLink",
  "content.document": "document",
};

function mapBlock(block: StrapiRichContentBlock): RichContentBlock {
  return {
    type: BLOCK_TYPE_MAP[block.__component],
    text: block.text,
    items: block.items?.map((item) => ({
      text: item.text,
      label: item.label ?? undefined,
      href: item.href ?? undefined,
    })),
    definitions: block.definitions,
    images: block.images?.map((image) => ({
      url: mapImageUrl(image),
      alt: image.alternativeText ?? "",
    })),
    before: block.before,
    linkText: block.linkText,
    href: block.href,
    after: block.after,
    document:
      block.__component === "content.document" && block.title && block.file
        ? {
            title: block.title,
            url: mapImageUrl(block.file),
            fileName: block.file.name,
            extensionLabel: extensionLabel(block.file.name),
            sizeLabel: formatFileSize(block.file.size),
            mimeType: block.file.mime,
          }
        : undefined,
  };
}

function mapSection(section: StrapiArticleSection): ArticleSection {
  return {
    id: String(section.id),
    title: section.title,
    blocks: section.blocks.map(mapBlock),
  };
}

// --- Mappers publics : forme Strapi -> forme attendue par les pages/composants ---

export function mapArticleToNewsCard(article: StrapiArticle): NewsCardProps {
  return {
    image: mapImageUrl(article.image),
    category: mapCategory(article.category),
    date: formatArticleDate(article.date),
    title: article.title,
    excerpt: article.excerpt,
    href: `/actualites/${article.slug}`,
  };
}

export function mapArticleToDetail(article: StrapiArticle): ArticleDetailContent {
  return {
    slug: article.slug,
    seo: article.seo,
    title: article.title,
    category: mapCategory(article.category),
    date: formatArticleDate(article.date),
    heroImage: {
      url: mapImageUrl(article.image),
      alt: article.image.alternativeText ?? article.title,
    },
    sections: (article.sections ?? []).map(mapSection),
    actionsBox: article.actionsBox ?? undefined,
    recentArticles: (article.relatedArticles ?? []).map((related) => ({
      title: related.title,
      href: `/actualites/${related.slug}`,
    })),
  };
}
