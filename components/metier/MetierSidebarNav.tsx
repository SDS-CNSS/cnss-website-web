"use client";

import { useEffect, useState } from "react";
import type { SidebarNavItem } from "@/types/metier-page";

type MetierSidebarNavProps = {
  items: SidebarNavItem[];
};

export function MetierSidebarNav({ items }: MetierSidebarNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Sommaire de la page" className="flex flex-col">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center border-l px-0 py-3 text-lg font-medium transition-colors ${
              isActive ? "border-primary text-primary" : "border-line text-ink hover:border-primary-200"
            }`}
          >
            <span className="pl-4">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
