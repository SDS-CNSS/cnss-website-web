import { strapiFetch } from "@/lib/strapi/client";
import { mapDocumentToCard, type StrapiDocument } from "@/lib/strapi/mappers/document";

export interface DocumentItem {
  title: string;
  tags: string[];
  fileType: string;
  fileSize: string;
  viewHref: string;
  downloadHref: string;
  fileName: string;
  mimeType: string;
}

export interface BibliothequeContent {
  documents: DocumentItem[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

const PER_PAGE = 6;

export async function getBibliothequeContent(locale: string, page = 1): Promise<BibliothequeContent> {
  const requestedPage = Math.max(1, page);

  const { data, meta } = await strapiFetch<StrapiDocument[]>(
    `/documents?locale=${locale}&sort=title:asc&populate[tags]=true&populate[file]=true` +
      `&pagination[page]=${requestedPage}&pagination[pageSize]=${PER_PAGE}`,
  );

  const totalPages = Math.max(1, meta.pagination?.pageCount ?? 1);
  const totalCount = meta.pagination?.total ?? data.length;

  if (requestedPage > totalPages) {
    return getBibliothequeContent(locale, totalPages);
  }

  return {
    documents: data.map(mapDocumentToCard),
    currentPage: requestedPage,
    totalPages,
    totalCount,
  };
}
