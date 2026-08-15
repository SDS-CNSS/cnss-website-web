import Image from "next/image";
import type { RichContentBlock } from "@/types/rich-content";

type RichContentProps = {
  blocks: RichContentBlock[];
  className?: string;
  paragraphClassName?: string;
  listItemClassName?: string;
};

export function RichContent({
  blocks,
  className,
  paragraphClassName,
  listItemClassName,
}: RichContentProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      {blocks.map((block, index) =>
        block.type === "list" ? (
          <ul key={index} className="flex flex-col gap-1.5">
            {block.items?.map((item) => (
              <li
                key={item}
                className={listItemClassName ?? paragraphClassName}
              >
                – {item}
              </li>
            ))}
          </ul>
        ) : block.type === "orderedList" ? (
          <ol key={index} className="flex flex-col gap-1.5 list-decimal pl-5">
            {block.items?.map((item) => (
              <li
                key={item}
                className={listItemClassName ?? paragraphClassName}
              >
                {item}
              </li>
            ))}
          </ol>
        ) : block.type === "definitionList" ? (
          <div key={index} className="flex flex-col gap-4">
            {block.definitions?.map((definition) => (
              <div key={definition.term} className="flex flex-col gap-1">
                <p className="flex items-center gap-2 text-base font-bold text-ink md:text-lg">
                  <span className="text-2xl leading-none text-primary md:text-3xl">
                    •
                  </span>
                  {definition.term}
                </p>
                <p className={paragraphClassName}>{definition.description}</p>
              </div>
            ))}
          </div>
        ) : block.type === "gallery" ? (
          <div key={index} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {block.images?.map((image) => (
              <div
                key={image.url}
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <p key={index} className={paragraphClassName}>
            {block.text}
          </p>
        ),
      )}
    </div>
  );
}
