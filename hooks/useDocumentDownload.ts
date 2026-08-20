"use client";

import { useState } from "react";

/**
 * Force le téléchargement d'un fichier hébergé sur une autre origine
 * (Strapi). L'attribut HTML `download` d'un <a> est ignoré par le
 * navigateur pour une URL cross-origin — sans ce détour, le clic ouvre
 * juste le fichier au lieu de le télécharger. On récupère les octets via
 * fetch() puis on déclenche le téléchargement depuis une URL blob:, qui
 * est toujours same-origin du point de vue du navigateur.
 */
export function useDocumentDownload() {
  const [isDownloading, setIsDownloading] = useState(false);

  async function download(url: string, fileName: string) {
    setIsDownloading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = window.document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      window.document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Échec du téléchargement, ouverture directe en repli", error);
      window.open(url, "_blank", "noopener,noreferrer");
    } finally {
      setIsDownloading(false);
    }
  }

  return { download, isDownloading };
}
