import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { SearchEntry } from "@/types/search";

type SearchResultItemProps = {
  entry: SearchEntry;
};

export function SearchResultItem({ entry }: SearchResultItemProps) {
  return (
    <article className="flex flex-col gap-1 border-b border-line-soft py-6 first:pt-0 last:border-b-0 last:pb-0">
      <p className="text-sm text-body">
        cnss.bj <span className="mx-1 text-muted">›</span> {entry.category}
      </p>
      <Link
        href={entry.href}
        className="group inline-flex w-fit items-center gap-1 font-heading text-xl font-semibold text-link hover:underline"
      >
        {entry.title}
        <ChevronRight className="size-4 shrink-0 text-link/70 transition-transform group-hover:translate-x-0.5" />
      </Link>
      <p className="text-base text-body">{entry.description}</p>
    </article>
  );
}
