import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  getHref?: (page: number) => string;
};

function getPageItems(current: number, total: number): (number | "ellipsis")[] {
  const items: (number | "ellipsis")[] = [1];
  if (current > 3) items.push("ellipsis");
  for (
    let page = Math.max(2, current - 1);
    page <= Math.min(total - 1, current + 1);
    page++
  ) {
    items.push(page);
  }
  if (current < total - 2) items.push("ellipsis");
  if (total > 1) items.push(total);
  return items;
}

// Sans `getHref`, reste présentationnel (page 1 statique) — utile tant qu'une
// vraie source de données paginée (CMS/API) n'est pas branchée sur la liste.
// Avec `getHref`, la pagination est fonctionnelle et navigue réellement.
export function Pagination({
  currentPage,
  totalPages,
  getHref,
}: PaginationProps) {
  const items = getPageItems(currentPage, totalPages);

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === totalPages;

  const navButtonClassName =
    "flex size-10 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-primary hover:text-primary disabled:opacity-40";

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-2"
    >
      {getHref && !prevDisabled ? (
        <Link
          href={getHref(currentPage - 1)}
          aria-label="Page précédente"
          className={navButtonClassName}
        >
          <ChevronLeft className="size-4" />
        </Link>
      ) : (
        <button
          type="button"
          disabled={prevDisabled}
          aria-label="Page précédente"
          className={navButtonClassName}
        >
          <ChevronLeft className="size-4" />
        </button>
      )}
      {items.map((item, index) => {
        if (item === "ellipsis") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="flex size-10 items-center justify-center text-muted"
            >
              …
            </span>
          );
        }

        const isCurrent = item === currentPage;
        const pageClassName = `flex size-10 items-center justify-center rounded-md border text-base font-medium transition-colors ${
          isCurrent
            ? "border-primary text-primary"
            : "border-line text-ink hover:border-primary-200"
        }`;

        return getHref ? (
          <Link
            key={item}
            href={getHref(item)}
            aria-current={isCurrent ? "page" : undefined}
            className={pageClassName}
          >
            {item}
          </Link>
        ) : (
          <button
            key={item}
            type="button"
            aria-current={isCurrent ? "page" : undefined}
            className={pageClassName}
          >
            {item}
          </button>
        );
      })}
      {getHref && !nextDisabled ? (
        <Link
          href={getHref(currentPage + 1)}
          aria-label="Page suivante"
          className={navButtonClassName}
        >
          <ChevronRight className="size-4" />
        </Link>
      ) : (
        <button
          type="button"
          disabled={nextDisabled}
          aria-label="Page suivante"
          className={navButtonClassName}
        >
          <ChevronRight className="size-4" />
        </button>
      )}
    </nav>
  );
}
