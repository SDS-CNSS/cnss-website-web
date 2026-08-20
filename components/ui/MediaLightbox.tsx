"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import type { MediaItem } from "@/lib/content/mediatheque";

type MediaLightboxProps = {
  items: MediaItem[];
  initialIndex: number;
  onClose: () => void;
};

export function MediaLightbox({ items, initialIndex, onClose }: MediaLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const item = items[index];
  const hasMultiple = items.length > 1;

  function showPrevious() {
    setIndex((current) => (current - 1 + items.length) % items.length);
  }

  function showNext() {
    setIndex((current) => (current + 1) % items.length);
  }

  useEffect(() => {
    closeButtonRef.current?.focus();

    const previousOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && hasMultiple) showPrevious();
      if (event.key === "ArrowRight" && hasMultiple) showNext();
    }
    window.document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.document.body.style.overflow = previousOverflow;
      window.document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- showPrevious/showNext ferment sur items.length, stable pour la durée de vie de la modale
  }, [onClose, hasMultiple]);

  if (!item) return null;

  const hasVideoSrc = item.type === "video" && item.href && item.href !== "#";

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        onClick={(event) => event.stopPropagation()}
        className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-surface shadow-xl"
      >
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-4 py-3">
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-ink">{item.title}</p>
            {hasMultiple && (
              <p className="text-sm text-ink-soft">
                {index + 1} / {items.length}
              </p>
            )}
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

        <div className="relative flex flex-1 items-center justify-center overflow-auto bg-black">
          {item.type === "photo" ? (
            // eslint-disable-next-line @next/next/no-img-element -- URL Strapi arbitraire, pas de bénéfice à next/image dans une lightbox
            <img
              src={item.href}
              alt={item.title}
              className="max-h-full max-w-full object-contain"
            />
          ) : hasVideoSrc ? (
            <iframe
              src={item.href}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video h-full max-h-full w-full max-w-full border-0"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 p-10 text-center text-on-primary">
              <ImageOff className="size-10" />
              <p className="text-base font-medium">Vidéo indisponible.</p>
            </div>
          )}

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Média précédent"
                className="absolute left-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-ink shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)] hover:bg-surface"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Média suivant"
                className="absolute right-4 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-ink shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)] hover:bg-surface"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>,
    window.document.body,
  );
}
