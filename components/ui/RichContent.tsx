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
              <li key={item} className={listItemClassName ?? paragraphClassName}>
                – {item}
              </li>
            ))}
          </ul>
        ) : (
          <p key={index} className={paragraphClassName}>
            {block.text}
          </p>
        ),
      )}
    </div>
  );
}
