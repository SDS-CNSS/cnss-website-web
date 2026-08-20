import { strapiFetch } from "@/lib/strapi/client";
import { mapMediaItem, type StrapiMediaItem } from "@/lib/strapi/mappers/media-item";
import { mapImageUrl, type StrapiMedia } from "@/lib/strapi/mappers/media";
import type { MediaItem } from "@/lib/content/mediatheque";

interface StrapiMediaAlbumDetail {
  title: string;
  date: string | null;
  description: string | null;
  coverImage: StrapiMedia | null;
  mediaItems: StrapiMediaItem[];
}

export interface MediaAlbumDetail {
  title: string;
  date: string | null;
  description: string | null;
  coverImage: string | null;
  items: MediaItem[];
}

export async function getMediaAlbumDetailContent(
  locale: string,
  slug: string,
): Promise<MediaAlbumDetail | null> {
  const { data } = await strapiFetch<StrapiMediaAlbumDetail[]>(
    `/media-albums?locale=${locale}&filters[slug][$eq]=${encodeURIComponent(slug)}` +
      `&populate[coverImage]=true` +
      `&populate[mediaItems][populate][thumbnail]=true&populate[mediaItems][populate][file]=true`,
  );

  const album = data[0];
  if (!album) return null;

  return {
    title: album.title,
    date: album.date,
    description: album.description,
    coverImage: album.coverImage ? mapImageUrl(album.coverImage) : null,
    items: (album.mediaItems ?? []).map(mapMediaItem),
  };
}
