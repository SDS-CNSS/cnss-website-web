import type { MediaItem } from "@/lib/content/mediatheque";
import { mapImageUrl, type StrapiMedia } from "@/lib/strapi/mappers/media";

// --- Forme brute renvoyée par l'API Strapi (api::media-item.media-item) ---

export interface StrapiMediaItem {
  title: string;
  type: "photo" | "video";
  thumbnail: StrapiMedia;
  file?: StrapiMedia | null;
  videoUrl?: string | null;
}

// CLAUDE.md section 3 prévoit `videoUrl` "pour un embed YouTube/Vimeo" sans
// imposer de format — un agent CNSS collera plus naturellement l'URL de
// partage habituelle (watch?v=, youtu.be/, vimeo.com/123) que l'URL /embed/
// directement. On normalise ici pour que la lightbox reçoive toujours une
// URL directement utilisable en <iframe>.
function normalizeVideoEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname.startsWith("/embed/")) return url;
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (parsed.hostname === "youtu.be") {
      const id = parsed.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (parsed.hostname.includes("vimeo.com")) {
      if (parsed.hostname.startsWith("player.")) return url;
      const id = parsed.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : url;
    }

    return url;
  } catch {
    return url;
  }
}

export function mapMediaItem(item: StrapiMediaItem): MediaItem {
  const fullImageUrl = item.file ? mapImageUrl(item.file) : mapImageUrl(item.thumbnail);
  const href =
    item.type === "photo" ? fullImageUrl : normalizeVideoEmbedUrl(item.videoUrl ?? "");

  return {
    title: item.title,
    type: item.type,
    thumbnail: mapImageUrl(item.thumbnail),
    href,
  };
}
