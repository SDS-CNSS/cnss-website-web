"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useMegaMenu } from "@/components/layout/MegaMenuContext";

type SimulateurItem = {
  icon: string;
  labelKey: string;
  href: string;
};

type SimulateurTab = {
  key: string;
  labelKey: string;
  items: SimulateurItem[];
};

const TABS: SimulateurTab[] = [
  {
    key: "cotisations",
    labelKey: "tabs.cotisations.label",
    items: [
      {
        icon: "/images/icon-charges-sociales-embauche.png",
        labelKey: "tabs.cotisations.chargesSociales",
        href: "/simulateurs/charges-sociales-embauche",
      },
      {
        icon: "/images/icon-majoration-retard.png",
        labelKey: "tabs.cotisations.majorationRetard",
        href: "/simulateurs/majoration-retard",
      },
    ],
  },
  {
    key: "pension",
    labelKey: "tabs.pension.label",
    items: [
      {
        icon: "/images/icon-pension-vieillesse.png",
        labelKey: "tabs.pension.vieillesse",
        href: "/simulateurs/pension",
      },
      {
        icon: "/images/icon-pension-vieillesse-anticipee.png",
        labelKey: "tabs.pension.vieillesseAnticipee",
        href: "/simulateurs/pension-vieillesse-anticipee",
      },
      {
        icon: "/images/icon-pension-survivants-conjoints.png",
        labelKey: "tabs.pension.survivantsConjoints",
        href: "/simulateurs/pension-survivants-conjoints",
      },
      {
        icon: "/images/icon-pension-survivants-enfants.png",
        labelKey: "tabs.pension.survivantsEnfants",
        href: "/simulateurs/pension-survivants-enfants",
      },
      {
        icon: "/images/icon-allocation-survivants.png",
        labelKey: "tabs.pension.allocationSurvivants",
        href: "/simulateurs/allocation-survivants",
      },
    ],
  },
];

function isPathActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function findTabKeyForPath(pathname: string): string | undefined {
  return TABS.find((t) => t.items.some((item) => isPathActive(pathname, item.href)))?.key;
}

export function SimulateursMegaMenu() {
  const t = useTranslations("megaMenu.simulateurs");
  const pathname = usePathname();
  const activeRouteTabKey = useMemo(() => findTabKeyForPath(pathname), [pathname]);
  const isRouteActive = !!activeRouteTabKey;

  const { open, setOpen } = useMegaMenu("simulateurs");
  const [activeTab, setActiveTab] = useState(activeRouteTabKey ?? TABS[0].key);
  const containerRef = useRef<HTMLDivElement>(null);

  const tab = TABS.find((tabItem) => tabItem.key === activeTab) ?? TABS[0];

  function toggleMenu() {
    if (open) {
      setOpen(false);
      return;
    }
    setActiveTab(activeRouteTabKey ?? TABS[0].key);
    setOpen(true);
  }

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
        onClick={toggleMenu}
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
          <div className="relative flex w-[1250px] max-w-[calc(100vw-2.5rem)] items-stretch gap-0 overflow-hidden rounded-2xl bg-surface p-5 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)]">
            <div className="flex w-[238px] shrink-0 flex-col gap-3 rounded-md bg-primary-800 px-4 py-7.5 shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)]">
              {TABS.map((tabItem) => (
                <button
                  key={tabItem.key}
                  type="button"
                  onMouseEnter={() => setActiveTab(tabItem.key)}
                  onClick={() => setActiveTab(tabItem.key)}
                  className={
                    tabItem.key === activeTab
                      ? "flex items-center justify-between rounded-lg bg-surface-light/20 p-2 text-left text-paragraph-xl font-semibold text-on-primary"
                      : "flex items-center justify-between rounded-lg p-2 text-left text-paragraph-xl font-semibold text-on-primary/90 transition-colors hover:bg-white/10"
                  }
                >
                  {t(tabItem.labelKey)}
                  {tabItem.key === activeTab && <ChevronRight className="size-5 shrink-0" />}
                </button>
              ))}
            </div>

            <div className="relative grid min-h-[240px] flex-1 auto-rows-min grid-cols-2 content-start gap-6 p-7.5">
              <Image
                src="/images/watermark-logo.png"
                alt=""
                width={554}
                height={539}
                className="pointer-events-none absolute top-[-184px] left-[802px] opacity-5"
              />

              {tab.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-4"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-[5px] border border-primary-100 bg-surface-light-2">
                    <Image src={item.icon} alt="" width={32} height={32} />
                  </div>
                  <p className="text-paragraph-lg font-semibold text-body transition-colors group-hover:text-ink group-hover:underline">
                    {t(item.labelKey)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
