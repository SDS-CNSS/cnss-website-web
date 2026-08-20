"use client";

import { useState } from "react";
import { MediaCard } from "@/components/ui/MediaCard";
import { MediaLightbox } from "@/components/ui/MediaLightbox";
import type { MediaItem } from "@/lib/content/mediatheque";

type MediaGridProps = {
  items: MediaItem[];
};

export function MediaGrid({ items }: MediaGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <MediaCard key={item.title} {...item} onOpen={() => setOpenIndex(index)} />
        ))}
      </div>

      {openIndex !== null && (
        <MediaLightbox
          items={items}
          initialIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}
