"use client";

import { useState } from "react";
import { FileText, Eye, Download, Loader2 } from "lucide-react";
import type { RichContentDocument } from "@/types/rich-content";
import { DocumentPreviewModal } from "@/components/ui/DocumentPreviewModal";
import { useDocumentDownload } from "@/hooks/useDocumentDownload";

type DocumentAttachmentProps = {
  document: RichContentDocument;
};

export function DocumentAttachment({ document: doc }: DocumentAttachmentProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { download, isDownloading } = useDocumentDownload();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-base font-semibold text-ink">Pièce jointe</p>
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-line bg-surface-light-2 p-4">
        <div className="flex min-w-0 items-center gap-3">
          <FileText className="size-8 shrink-0 text-primary" />
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-base font-semibold text-ink">
              {doc.title}
            </span>
            <span className="text-sm text-ink-soft">
              {doc.extensionLabel} · {doc.sizeLabel}
            </span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="flex h-10 items-center gap-2 rounded-md border border-line bg-surface px-3 text-sm font-medium text-ink hover:bg-surface-light-2"
          >
            <Eye className="size-4" />
            Voir
          </button>
          <button
            type="button"
            onClick={() => download(doc.url, doc.fileName)}
            disabled={isDownloading}
            className="flex h-10 items-center gap-2 rounded-md bg-primary px-3 text-sm font-medium text-on-primary hover:bg-primary-hover disabled:opacity-60"
          >
            {isDownloading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Download className="size-4" />
            )}
            Télécharger
          </button>
        </div>
      </div>

      {isPreviewOpen && (
        <DocumentPreviewModal
          document={doc}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}
    </div>
  );
}
