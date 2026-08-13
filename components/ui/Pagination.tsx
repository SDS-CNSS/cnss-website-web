import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

function getPageItems(current: number, total: number): (number | "ellipsis")[] {
  const items: (number | "ellipsis")[] = [1];
  if (current > 3) items.push("ellipsis");
  for (let page = Math.max(2, current - 1); page <= Math.min(total - 1, current + 1); page++) {
    items.push(page);
  }
  if (current < total - 2) items.push("ellipsis");
  if (total > 1) items.push(total);
  return items;
}

// Présentationnel pour l'instant (page 1 statique) — à brancher sur une vraie source
// de données (CMS/API) une fois la pagination réelle disponible.
export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const items = getPageItems(currentPage, totalPages);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2">
      <button
        type="button"
        disabled={currentPage === 1}
        aria-label="Page précédente"
        className="flex size-10 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
      >
        <ChevronLeft className="size-4" />
      </button>
      {items.map((item, index) =>
        item === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="flex size-10 items-center justify-center text-muted">
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            aria-current={item === currentPage ? "page" : undefined}
            className={`flex size-10 items-center justify-center rounded-md border text-base font-medium transition-colors ${
              item === currentPage
                ? "border-primary text-primary"
                : "border-line text-ink hover:border-primary-200"
            }`}
          >
            {item}
          </button>
        ),
      )}
      <button
        type="button"
        disabled={currentPage === totalPages}
        aria-label="Page suivante"
        className="flex size-10 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  );
}
