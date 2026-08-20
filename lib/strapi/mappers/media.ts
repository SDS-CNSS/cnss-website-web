const STRAPI_API_URL = process.env.STRAPI_API_URL;

// --- Forme brute d'un fichier média renvoyé par Strapi (plugin upload) ---

export interface StrapiMediaFormat {
  url: string;
}

export interface StrapiMedia {
  url: string;
  name: string;
  mime: string;
  size: number;
  alternativeText: string | null;
  formats?: Record<string, StrapiMediaFormat>;
}

export function mapImageUrl(media: StrapiMedia): string {
  if (/^https?:\/\//.test(media.url)) return media.url;
  return `${STRAPI_API_URL ?? ""}${media.url}`;
}

// Strapi stocke `size` en kilo-octets (convention historique du plugin upload).
export function formatFileSize(sizeKb: number): string {
  if (sizeKb < 1000) return `${Math.round(sizeKb)} Ko`;
  return `${(sizeKb / 1000).toLocaleString("fr-FR", { maximumFractionDigits: 1 })} Mo`;
}

export function extensionLabel(fileName: string): string {
  const ext = fileName.split(".").pop();
  return ext ? ext.toUpperCase() : "";
}
