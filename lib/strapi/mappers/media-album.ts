import { mapImageUrl, type StrapiMedia } from "@/lib/strapi/mappers/media";

// --- Forme brute renvoyée par l'API Strapi (api::media-album.media-album) ---

export interface StrapiMediaAlbum {
  slug: string;
  title: string;
  date: string | null;
  coverImage: StrapiMedia | null;
  mediaItems?: unknown[];
}

export interface MediaAlbum {
  slug: string;
  title: string;
  date: string | null;
  coverImage: string | null;
  itemCount: number;
}

export function mapMediaAlbum(album: StrapiMediaAlbum): MediaAlbum {
  return {
    slug: album.slug,
    title: album.title,
    date: album.date,
    coverImage: album.coverImage ? mapImageUrl(album.coverImage) : null,
    itemCount: album.mediaItems?.length ?? 0,
  };
}
