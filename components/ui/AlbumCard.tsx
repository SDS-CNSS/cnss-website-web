import Image from "next/image";
import { Images } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { MediaAlbum } from "@/lib/strapi/mappers/media-album";

type AlbumCardProps = {
  album: MediaAlbum;
};

export function AlbumCard({ album }: AlbumCardProps) {
  return (
    <Link
      href={`/mediatheque/${album.slug}`}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line-soft"
    >
      {album.coverImage ? (
        <Image
          src={album.coverImage}
          alt=""
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0 bg-surface-light-2" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-on-primary">
        <Images className="size-3.5" />
        {album.itemCount}
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="line-clamp-2 font-heading text-paragraph-lg font-semibold text-on-primary">
          {album.title}
        </p>
        {album.date && <p className="text-xs text-on-primary/80">{album.date}</p>}
      </div>
    </Link>
  );
}
