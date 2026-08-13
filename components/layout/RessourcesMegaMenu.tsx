"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useMegaMenu } from "@/components/layout/MegaMenuContext";
import { RESSOURCES_ITEMS as ITEMS } from "@/components/layout/navData";

function isPathActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function RessourcesMegaMenu() {
  const t = useTranslations("megaMenu.ressources");
  const pathname = usePathname();
  const isRouteActive = useMemo(() => ITEMS.some((item) => isPathActive(pathname, item.href)), [pathname]);

  const { open, setOpen } = useMegaMenu("ressources");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, setOpen]);

  return (
    <div ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-current={isRouteActive ? "page" : undefined}
        className={
          open || isRouteActive
            ? "flex items-center gap-1.5 border-b border-primary-hover pb-[3px] text-base font-medium text-primary-hover"
            : "flex items-center gap-1.5 border-b border-transparent pb-[3px] text-base font-medium text-body"
        }
      >
        {t("trigger")}
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2.5">
          <div className="relative flex w-[1250px] max-w-[calc(100vw-2.5rem)] items-center gap-8 overflow-hidden rounded-2xl bg-surface p-5 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)]">
            <Image
              src="/images/watermark-logo.png"
              alt=""
              width={180}
              height={177}
              className="pointer-events-none absolute -top-16 -right-14 opacity-5"
            />

            {ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group relative z-10 flex items-center gap-4"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-[5px] border border-primary-100 bg-surface-light-2">
                  <item.icon className="size-5 text-ink" />
                </div>
                <p className="text-paragraph-lg font-semibold whitespace-nowrap text-body transition-colors group-hover:text-ink group-hover:underline">
                  {t(item.labelKey)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
