"use client";

import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { NewsCard, type NewsCardProps } from "@/components/ui/NewsCard";
import { NewsListItem } from "@/components/ui/NewsListItem";
import { ResultsBar } from "@/components/ui/ResultsBar";

type ActualitesGridProps = {
  articles: NewsCardProps[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
};

export function ActualitesGrid({
  articles,
  totalCount,
  currentPage,
  totalPages,
}: ActualitesGridProps) {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="flex w-full flex-col gap-8">
      <ResultsBar
        label={`${totalCount} Articles | Page ${currentPage} sur ${totalPages}`}
        action={
          <div className="flex items-center gap-1 rounded-lg bg-surface p-1 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <button
              type="button"
              aria-label="Vue grille"
              aria-pressed={view === "grid"}
              onClick={() => setView("grid")}
              className={`flex size-9 items-center justify-center rounded-md transition-colors ${
                view === "grid"
                  ? "bg-surface-light-2 text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              <LayoutGrid className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Vue liste"
              aria-pressed={view === "list"}
              onClick={() => setView("list")}
              className={`flex size-9 items-center justify-center rounded-md transition-colors ${
                view === "list"
                  ? "bg-surface-light-2 text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              <List className="size-4" />
            </button>
          </div>
        }
      />

      {view === "grid" ? (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <NewsCard key={article.href} {...article} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col divide-y divide-line-soft">
          {articles.map((article) => (
            <NewsListItem key={article.href} {...article} />
          ))}
        </div>
      )}
    </div>
  );
}
