import { strapiFetch } from "@/lib/strapi/client";
import { mapMediaItem, type StrapiMediaItem } from "@/lib/strapi/mappers/media-item";
import { mapMediaAlbum, type StrapiMediaAlbum, type MediaAlbum } from "@/lib/strapi/mappers/media-album";

export interface MediaItem {
  title: string;
  type: "photo" | "video";
  thumbnail: string;
  href: string;
}

export interface MediathequeContent {
  albums: MediaAlbum[];
  albumsPage: number;
  albumsTotalPages: number;
  items: MediaItem[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
}

const PER_PAGE = 6;
const ALBUMS_PER_PAGE = 6;

export async function getMediathequeContent(
  locale: string,
  page = 1,
  albumsPage = 1,
): Promise<MediathequeContent> {
  const requestedPage = Math.max(1, page);
  const requestedAlbumsPage = Math.max(1, albumsPage);

  const [itemsRes, albumsRes] = await Promise.all([
    // Seuls les médias sans album sont affichés ici — ceux rattachés à un
    // album n'apparaissent que dans la page de détail de cet album.
    strapiFetch<StrapiMediaItem[]>(
      `/media-items?locale=${locale}&sort=createdAt:desc&filters[album][id][$null]=true` +
        `&populate[thumbnail]=true&populate[file]=true` +
        `&pagination[page]=${requestedPage}&pagination[pageSize]=${PER_PAGE}`,
    ),
    strapiFetch<StrapiMediaAlbum[]>(
      `/media-albums?locale=${locale}&sort=date:desc` +
        `&populate[coverImage]=true&populate[mediaItems][fields][0]=title` +
        `&pagination[page]=${requestedAlbumsPage}&pagination[pageSize]=${ALBUMS_PER_PAGE}`,
    ),
  ]);

  const totalPages = Math.max(1, itemsRes.meta.pagination?.pageCount ?? 1);
  const totalCount = itemsRes.meta.pagination?.total ?? itemsRes.data.length;
  const albumsTotalPages = Math.max(1, albumsRes.meta.pagination?.pageCount ?? 1);

  if (requestedPage > totalPages || requestedAlbumsPage > albumsTotalPages) {
    return getMediathequeContent(
      locale,
      Math.min(requestedPage, totalPages),
      Math.min(requestedAlbumsPage, albumsTotalPages),
    );
  }

  return {
    albums: albumsRes.data.map(mapMediaAlbum),
    albumsPage: requestedAlbumsPage,
    albumsTotalPages,
    items: itemsRes.data.map(mapMediaItem),
    currentPage: requestedPage,
    totalPages,
    totalCount,
  };
}
