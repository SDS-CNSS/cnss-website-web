"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { useMegaMenu } from "@/components/layout/MegaMenuContext";

type MegaMenuColumn = {
  icon: string;
  title: string;
  href?: string;
  links?: { label: string; href: string }[];
};

type MegaMenuTab = {
  key: string;
  label: string;
  columns: MegaMenuColumn[];
};

const TABS: MegaMenuTab[] = [
  {
    key: "recouvrement",
    label: "Recouvrement",
    columns: [
      {
        icon: "/images/icon-immatriculation.png",
        title: "Immatriculation",
        href: "/recouvrement/immatriculation",
      },
      {
        icon: "/images/icon-declaration-cotisations.png",
        title: "Déclaration et paiement des cotisations",
        href: "/recouvrement/declaration-paiement-cotisations",
      },
      {
        icon: "/images/icon-controle-employeur.png",
        title: "Contrôle employeur",
        href: "/recouvrement/controle-employeur",
      },
    ],
  },
  {
    key: "prestations",
    label: "Prestations",
    columns: [
      {
        icon: "/images/icon-prestations-familiales.png",
        title: "Prestations familiales et\nde maternité",
        links: [
          { label: "Allocations familiales", href: "/prestations/allocations-familiales" },
          { label: "Allocations prénatales", href: "/prestations/allocations-prenatales" },
          { label: "Indemnités de congé de maternité", href: "/prestations/conge-maternite" },
          { label: "Action sanitaire et sociale", href: "/prestations/action-sanitaire-sociale" },
        ],
      },
      {
        icon: "/images/icon-pensions.png",
        title: "Prestations de vieillesse",
        links: [
          { label: "Pensions et allocations de vieillesse", href: "/prestations/pensions" },
          { label: "Pensions et allocations de survivants", href: "/prestations/pension-survivants" },
          { label: "Remboursement des cotisations", href: "/prestations/remboursement-cotisations" },
          { label: "Allocation de remariage", href: "/prestations/allocation-remariage" },
        ],
      },
      {
        icon: "/images/icon-accidents-travail.png",
        title: "Risques professionnels",
        links: [
          { label: "Accident du travail", href: "/prestations/accident-travail" },
          { label: "Maladies professionnelles", href: "/prestations/maladies-professionnelles" },
        ],
      },
    ],
  },
];

function IconChip({ src }: { src: string }) {
  return (
    <div className="flex size-11 shrink-0 items-center justify-center rounded-[5px] border border-primary-100 bg-surface-light-2">
      <Image src={src} alt="" width={32} height={32} />
    </div>
  );
}

function isPathActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function findTabKeyForPath(pathname: string): string | undefined {
  return TABS.find((t) =>
    t.columns.some((column) => {
      if (column.href && isPathActive(pathname, column.href)) return true;
      return column.links?.some((link) => isPathActive(pathname, link.href)) ?? false;
    })
  )?.key;
}

export function MetiersMegaMenu() {
  const pathname = usePathname();
  const activeRouteTabKey = useMemo(() => findTabKeyForPath(pathname), [pathname]);
  const isRouteActive = !!activeRouteTabKey;

  const { open, setOpen } = useMegaMenu("metiers");
  const [activeTab, setActiveTab] = useState(activeRouteTabKey ?? TABS[0].key);
  const containerRef = useRef<HTMLDivElement>(null);

  const tab = TABS.find((t) => t.key === activeTab) ?? TABS[0];

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
        Métiers
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2.5">
          <div className="relative flex w-[1250px] max-w-[calc(100vw-2.5rem)] items-start overflow-hidden rounded-2xl bg-surface p-5 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)]">
            <div className="flex min-h-[260px] w-[238px] shrink-0 flex-col gap-3 self-stretch rounded-md bg-primary-800 px-4 py-7.5 shadow-[0px_1px_10px_0px_rgba(0,0,0,0.1)]">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onMouseEnter={() => setActiveTab(t.key)}
                  onClick={() => setActiveTab(t.key)}
                  className={
                    t.key === activeTab
                      ? "flex items-center justify-between rounded-lg bg-surface-light/20 p-2 text-left text-paragraph-xl font-semibold text-on-primary"
                      : "flex items-center justify-between rounded-lg p-2 text-left text-paragraph-xl font-semibold text-on-primary/90 transition-colors hover:bg-white/10"
                  }
                >
                  {t.label}
                  {t.key === activeTab && <ChevronRight className="size-4 shrink-0" />}
                </button>
              ))}
            </div>

            <div className="relative flex-1">
              <Image
                src="/images/watermark-logo.png"
                alt=""
                width={554}
                height={539}
                className="pointer-events-none absolute top-[-184px] left-[802px] opacity-5"
              />

              {tab.columns.some((column) => column.links) ? (
                <div className="relative flex items-stretch gap-[30px] p-[30px]">
                  {tab.columns.map((column, index) => (
                    <Fragment key={column.title}>
                      {index > 0 && <div className="w-px shrink-0 self-stretch bg-line" />}
                      <div className="flex shrink-0 flex-col gap-5">
                        <div className="flex items-center gap-4">
                          <IconChip src={column.icon} />
                          <p className="whitespace-pre-line text-paragraph-lg font-medium text-black">
                            {column.title}
                          </p>
                        </div>

                        {column.links && (
                          <div className="flex flex-col gap-2.5">
                            {column.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-paragraph-md font-medium text-body transition-colors hover:text-ink hover:underline"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </Fragment>
                  ))}
                </div>
              ) : (
                <div className="relative flex items-center gap-[30px] p-[30px]">
                  {tab.columns.map((column) => (
                    <Link
                      key={column.title}
                      href={column.href ?? "#"}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4"
                    >
                      <IconChip src={column.icon} />
                      <p className="text-paragraph-lg font-semibold text-body transition-colors group-hover:text-ink group-hover:underline">
                        {column.title}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
