import type { LegalSectionContent } from "@/types/legal-page";

type LegalSectionProps = LegalSectionContent;

export function LegalSection({ id, title, blocks }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 flex flex-col gap-4">
      <h2 className="font-heading text-h4 font-bold text-primary-800 md:text-h3">
        {title}
      </h2>
      <div className="flex flex-col gap-4">
        {blocks.map((block, index) =>
          block.type === "list" ? (
            <ul key={index} className="flex flex-col gap-2">
              {block.items?.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-start gap-2 text-base font-medium text-body md:text-lg"
                >
                  <span className="text-primary">•</span>
                  <span>
                    {item.label && (
                      <span className="font-semibold text-ink">
                        {item.label} :{" "}
                      </span>
                    )}
                    {item.href ? (
                      <a href={item.href} className="text-link underline">
                        {item.text}
                      </a>
                    ) : (
                      item.text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          ) : block.type === "paragraphWithLink" ? (
            <p
              key={index}
              className="text-base font-medium text-body md:text-lg"
            >
              {block.before}
              <a href={block.href} className="text-link underline">
                {block.linkText}
              </a>
              {block.after}
            </p>
          ) : (
            <p
              key={index}
              className="text-base font-medium text-body md:text-lg"
            >
              {block.text}
            </p>
          ),
        )}
      </div>
    </section>
  );
}
