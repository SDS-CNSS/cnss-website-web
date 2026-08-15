import { Search, Filter } from "lucide-react";
import { Select } from "@/components/ui/Select";

type ListFiltersProps = {
  searchPlaceholder?: string;
  filters: { label: string; options: string[] }[];
};

export function ListFilters({
  searchPlaceholder = "Rechercher par mot-clé",
  filters,
}: ListFiltersProps) {
  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-h6 font-bold text-ink">Filtrer par</h2>
      <form className="flex flex-col gap-3 md:flex-row">
        <label className="flex h-12 flex-1 items-center gap-3 rounded-md border border-line bg-surface px-4">
          <Search className="size-4 shrink-0 text-muted" />
          <input
            type="search"
            placeholder={searchPlaceholder}
            className="w-full text-base text-ink placeholder:text-muted focus:outline-none"
          />
        </label>
        {filters.map((filter) => (
          <Select
            key={filter.label}
            label={filter.label}
            options={filter.options}
            className="md:w-[12.5rem]"
          />
        ))}
        <button
          type="submit"
          className="flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-base font-medium text-on-primary transition-colors hover:bg-primary-hover"
        >
          <Filter className="size-4" />
          Filtrer
        </button>
      </form>
    </section>
  );
}
