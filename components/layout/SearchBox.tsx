"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { useRouter } from "@/i18n/navigation";

type SearchBoxProps = {
  className?: string;
  onSubmitNavigate?: () => void;
};

export function SearchBox({ className, onSubmitNavigate }: SearchBoxProps) {
  const t = useTranslations("nav");
  const router = useRouter();
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = value.trim();
    if (!query) return;
    router.push(`/recherche?q=${encodeURIComponent(query)}`);
    onSubmitNavigate?.();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex h-10 items-center gap-3 rounded-md border border-line bg-surface px-3 py-2 ${className ?? ""}`}
    >
      <input
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={t("search")}
        className="w-full flex-1 text-base text-ink placeholder:text-muted focus:outline-none"
      />
      <button
        type="submit"
        aria-label={t("search")}
        className="flex shrink-0 items-center justify-center text-muted transition-colors hover:text-primary"
      >
        <Search className="size-4" />
      </button>
    </form>
  );
}
