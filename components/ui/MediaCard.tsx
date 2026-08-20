import Image from "next/image";
import { Play } from "lucide-react";

type MediaCardProps = {
  title: string;
  type: "photo" | "video";
  thumbnail: string;
  onOpen: () => void;
};

export function MediaCard({ title, type, thumbnail, onOpen }: MediaCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line-soft text-left"
    >
      <Image
        src={thumbnail}
        alt=""
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-surface/90 text-primary shadow-[0px_4px_10px_0px_rgba(0,0,0,0.2)] transition-transform group-hover:scale-110">
            <Play className="size-6 fill-primary text-primary" />
          </div>
        </div>
      )}

      <p className="absolute inset-x-0 bottom-0 line-clamp-2 p-4 font-heading text-paragraph-lg font-semibold text-on-primary">
        {title}
      </p>
    </button>
  );
}
