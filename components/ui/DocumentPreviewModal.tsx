"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Download, FileWarning } from "lucide-react";
import type { RichContentDocument } from "@/types/rich-content";

type DocumentPreviewModalProps = {
  document: RichContentDocument;
  onClose: () => void;
};

export function DocumentPreviewModal({
  document: doc,
  onClose,
}: DocumentPreviewModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const previousOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.document.body.style.overflow = previousOverflow;
      window.document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const isPdf = doc.mimeType === "application/pdf";
  const isImage = doc.mimeType.startsWith("image/");

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={doc.title}
        onClick={(event) => event.stopPropagation()}
        className="flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-surface shadow-xl"
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-ink">
              {doc.title}
            </p>
            <p className="text-sm text-ink-soft">
              {doc.extensionLabel} · {doc.sizeLabel}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="flex size-9 shrink-0 items-center justify-center rounded-md border border-line hover:bg-surface-light-2"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center overflow-auto bg-surface-muted">
          {isPdf ? (
            <iframe
              src={doc.url}
              title={doc.title}
              className="h-full w-full border-0"
            />
          ) : isImage ? (
            // eslint-disable-next-line @next/next/no-img-element -- URL Strapi arbitraire, pas de bénéfice à next/image dans une modale
            <img
              src={doc.url}
              alt={doc.title}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 p-10 text-center">
              <FileWarning className="size-10 text-ink-soft" />
              <p className="text-base font-medium text-ink">
                Aperçu non disponible pour ce type de fichier ({doc.extensionLabel}).
              </p>
              <a
                href={doc.url}
                download={doc.fileName}
                className="flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-on-primary hover:bg-primary-hover"
              >
                <Download className="size-4" />
                Télécharger le fichier
              </a>
            </div>
          )}
        </div>
      </div>
    </div>,
    window.document.body,
  );
}
