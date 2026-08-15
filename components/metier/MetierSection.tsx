import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { RichContent } from "@/components/ui/RichContent";
import { InfoAlert } from "@/components/ui/InfoAlert";
import { RateCard } from "@/components/ui/RateCard";
import type { MetierPageSection } from "@/types/metier-page";

type MetierSectionProps = MetierPageSection;

const variantStyles = {
  tinted: "bg-surface-light-2",
  white: "border border-line bg-surface",
} as const;

export function MetierSection({
  id,
  number,
  title,
  variant,
  subsections,
}: MetierSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 flex flex-col gap-6 rounded-lg p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.02)] md:p-6 ${variantStyles[variant]}`}
    >
      <div className="flex items-center gap-4 border-b border-primary-800 pb-3">
        <div className="flex size-[3.125rem] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary-hover to-primary-900">
          <span className="font-heading text-h3 font-semibold text-on-primary">
            {number}
          </span>
        </div>
        <h2 className="font-heading text-h4 font-semibold text-primary-800 md:text-h3">
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-10">
        {subsections.map((subsection, index) => (
          <div key={index} className="flex flex-col gap-2.5">
            {subsection.title && (
              <h3 className="font-heading text-h6 font-semibold text-primary-800 md:text-h5">
                {subsection.title}
              </h3>
            )}
            {subsection.rates && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {subsection.rates.map((rate) => (
                  <RateCard key={rate.label} {...rate} />
                ))}
              </div>
            )}
            {subsection.blocks && (
              <RichContent
                blocks={subsection.blocks}
                paragraphClassName="text-base font-medium text-black md:text-lg"
                listItemClassName="text-base font-medium text-black md:text-lg"
              />
            )}
            {subsection.alerts && (
              <div className="mt-2 flex flex-col gap-5 sm:flex-row">
                {subsection.alerts.map((alert) => (
                  <InfoAlert
                    key={alert.title ?? alert.description}
                    title={alert.title}
                    description={alert.description}
                    variant={alert.variant}
                  />
                ))}
              </div>
            )}
            {subsection.link &&
              (subsection.link.href.startsWith("/") ? (
                <Link
                  href={subsection.link.href}
                  className="mt-1 inline-flex items-center gap-1 self-start border-b border-link text-sm font-bold text-link"
                >
                  {subsection.link.label}
                  <ArrowRight className="size-4" />
                </Link>
              ) : (
                <a
                  href={subsection.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 self-start border-b border-link text-sm font-bold text-link"
                >
                  {subsection.link.label}
                  <ArrowRight className="size-4" />
                </a>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
