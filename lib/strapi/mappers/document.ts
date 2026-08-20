import type { DocumentItem } from "@/lib/content/bibliotheque";
import { mapImageUrl, formatFileSize, extensionLabel, type StrapiMedia } from "@/lib/strapi/mappers/media";

// --- Forme brute renvoyée par l'API Strapi (api::document.document) ---

export interface StrapiDocument {
  title: string;
  tags?: { value: string }[];
  file: StrapiMedia;
}

export function mapDocumentToCard(document: StrapiDocument): DocumentItem {
  const url = mapImageUrl(document.file);

  return {
    title: document.title,
    tags: (document.tags ?? []).map((tag) => tag.value),
    fileType: extensionLabel(document.file.name),
    fileSize: formatFileSize(document.file.size),
    viewHref: url,
    downloadHref: url,
    fileName: document.file.name,
    mimeType: document.file.mime,
  };
}
