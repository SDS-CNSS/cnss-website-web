"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { SimulateurSidebarItem } from "@/types/simulateur";

type SimulateurSidebarNavProps = {
  items: SimulateurSidebarItem[];
};

export function SimulateurSidebarNav({ items }: SimulateurSidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Simulateurs" className="flex flex-col">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`flex items-center border-l px-0 py-3 text-lg font-medium transition-colors ${
              isActive
                ? "border-primary text-primary"
                : "border-line text-ink hover:border-primary-200"
            }`}
          >
            <span className="pl-4">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
