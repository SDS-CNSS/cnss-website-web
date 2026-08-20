import Image from "next/image";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import type { RichContentBlock, RichContentListItem } from "@/types/rich-content";
import { DocumentAttachment } from "@/components/ui/DocumentAttachment";

type RichContentProps = {
  blocks: RichContentBlock[];
  className?: string;
  paragraphClassName?: string;
  listItemClassName?: string;
};

function markdownComponents(paragraphClassName?: string): Components {
  return {
    p: ({ children }) => <p className={paragraphClassName}>{children}</p>,
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    del: ({ children }) => <del className="line-through">{children}</del>,
    a: ({ href, children }) => (
      <a href={href} className="text-link underline">
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className={`list-disc pl-5 ${paragraphClassName ?? ""}`}>
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className={`list-decimal pl-5 ${paragraphClassName ?? ""}`}>
        {children}
      </ol>
    ),
    li: ({ children }) => <li>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-line pl-4 italic">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-surface-muted px-1 py-0.5 text-sm">
        {children}
      </code>
    ),
  };
}

function renderListItem(item: string | RichContentListItem) {
  if (typeof item === "string") {
    return item;
  }

  const text = item.href ? (
    <a href={item.href} className="text-link underline">
      {item.text}
    </a>
  ) : (
    item.text
  );

  return item.label ? (
    <>
      <span className="font-semibold text-ink">{item.label} : </span>
      {text}
    </>
  ) : (
    text
  );
}

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
            {block.items?.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={listItemClassName ?? paragraphClassName}
              >
                – {renderListItem(item)}
              </li>
            ))}
          </ul>
        ) : block.type === "orderedList" ? (
          <ol key={index} className="flex flex-col gap-1.5 list-decimal pl-5">
            {block.items?.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className={listItemClassName ?? paragraphClassName}
              >
                {renderListItem(item)}
              </li>
            ))}
          </ol>
        ) : block.type === "paragraphWithLink" ? (
          <p key={index} className={paragraphClassName}>
            {block.before}
            <a href={block.href} className="text-link underline">
              {block.linkText}
            </a>
            {block.after}
          </p>
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
        ) : block.type === "document" && block.document ? (
          <DocumentAttachment key={index} document={block.document} />
        ) : (
          <ReactMarkdown
            key={index}
            remarkPlugins={[remarkGfm]}
            components={markdownComponents(paragraphClassName)}
          >
            {block.text ?? ""}
          </ReactMarkdown>
        ),
      )}
    </div>
  );
}
