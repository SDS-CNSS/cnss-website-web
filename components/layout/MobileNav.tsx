"use client";

import { useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { AlignJustify, X, ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { SearchBox } from "@/components/layout/SearchBox";
import { isNavPathActive } from "@/components/layout/navData";
import type { MegaMenuTab, SimulateurTab, RessourceItem } from "@/types/navigation";

function Collapse({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <div
      inert={!open}
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
    >
      <div
        className={`overflow-hidden transition-opacity duration-300 ease-in-out ${open ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}

function MobileNavLink({
  label,
  href,
  active,
  onNavigate,
}: {
  label: string;
  href: string;
  active: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`flex items-center justify-between border-b border-line px-4 py-4 text-base ${active ? "font-medium text-primary-hover" : "text-ink"}`}
    >
      {label}
    </Link>
  );
}

function MobileAccordion({
  label,
  active,
  children,
}: {
  label: string;
  active: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between px-4 py-4 text-base ${active ? "font-medium text-primary-hover" : "text-ink"}`}
      >
        {label}
        <ChevronDown
          className={`size-4 shrink-0 text-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <Collapse open={open}>{children}</Collapse>
    </div>
  );
}

function MobileSubLink({
  href,
  onNavigate,
  children,
}: {
  href: string;
  onNavigate: () => void;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="rounded-md px-2 py-2 text-paragraph-md font-medium text-ink transition-colors hover:bg-primary-100 hover:text-primary-800"
    >
      {children}
    </Link>
  );
}

function MobileNestedAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between bg-primary-800 px-4 py-3.5 text-left text-base font-semibold text-on-primary"
      >
        {label}
        <ChevronDown
          className={`size-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <Collapse open={open}>
        <div className="flex flex-col gap-1 bg-surface px-4 py-2">
          {children}
        </div>
      </Collapse>
    </div>
  );
}

type MobileNavProps = {
  metiersTabs: MegaMenuTab[];
  simulateursTabs: SimulateurTab[];
  ressourcesItems: RessourceItem[];
};

export function MobileNav({
  metiersTabs: METIERS_TABS,
  simulateursTabs: SIMULATEURS_TABS,
  ressourcesItems: RESSOURCES_ITEMS,
}: MobileNavProps) {
  const t = useTranslations("nav");
  const tMetiers = useTranslations("megaMenu.metiers");
  const tSimulateurs = useTranslations("megaMenu.simulateurs");
  const tRessources = useTranslations("megaMenu.ressources");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMetiersTab, setOpenMetiersTab] = useState<string | null>(null);
  const [openSimulateurTab, setOpenSimulateurTab] = useState<string | null>(
    null,
  );

  function close() {
    setOpen(false);
  }

  const metiersActive = METIERS_TABS.some((tab) =>
    tab.columns.some(
      (column) =>
        (column.href && isNavPathActive(pathname, column.href)) ||
        column.links?.some((link) => isNavPathActive(pathname, link.href)),
    ),
  );
  const simulateursActive = SIMULATEURS_TABS.some((tab) =>
    tab.items.some((item) => isNavPathActive(pathname, item.href)),
  );
  const ressourcesActive = RESSOURCES_ITEMS.some((item) =>
    isNavPathActive(pathname, item.href),
  );

  return (
    <div className="w-full lg:hidden">
      <div className="flex items-center justify-between bg-surface px-4 py-4">
        <Logo />
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
          className="flex size-10 shrink-0 items-center justify-center rounded-md text-primary"
        >
          {open ? (
            <X className="size-6" />
          ) : (
            <AlignJustify className="size-6" />
          )}
        </button>
      </div>

      <Collapse open={open}>
        <div className="flex flex-col bg-surface">
          <div className="px-4 pb-4">
            <SearchBox className="w-full" onSubmitNavigate={close} />
          </div>

          <nav className="flex flex-col border-t border-line bg-subtle">
            <MobileNavLink
              label={t("accueil")}
              href="/"
              active={isNavPathActive(pathname, "/")}
              onNavigate={close}
            />
            <MobileNavLink
              label={t("aPropos")}
              href="/a-propos"
              active={isNavPathActive(pathname, "/a-propos")}
              onNavigate={close}
            />

            <MobileAccordion label={tMetiers("trigger")} active={metiersActive}>
              <div className="flex flex-col">
                {METIERS_TABS.map((tab) => (
                  <MobileNestedAccordion
                    key={tab.key}
                    label={tMetiers(tab.labelKey)}
                    open={openMetiersTab === tab.key}
                    onToggle={() =>
                      setOpenMetiersTab((current) =>
                        current === tab.key ? null : tab.key,
                      )
                    }
                  >
                    {tab.columns.map((column, index) =>
                      column.links ? (
                        <div
                          key={column.titleKey}
                          className={`flex flex-col gap-1 pb-2 ${index > 0 ? "mt-3" : ""}`}
                        >
                          <p className="px-2 pt-2 pb-1 text-xs font-bold tracking-wider text-primary-800 uppercase">
                            {tMetiers(column.titleKey)}
                          </p>
                          {column.links.map((link) => (
                            <MobileSubLink
                              key={link.href}
                              href={link.href}
                              onNavigate={close}
                            >
                              {tMetiers(link.labelKey)}
                            </MobileSubLink>
                          ))}
                        </div>
                      ) : (
                        <MobileSubLink
                          key={column.titleKey}
                          href={column.href ?? "#"}
                          onNavigate={close}
                        >
                          {tMetiers(column.titleKey)}
                        </MobileSubLink>
                      ),
                    )}
                  </MobileNestedAccordion>
                ))}
              </div>
            </MobileAccordion>

            <MobileAccordion
              label={tSimulateurs("trigger")}
              active={simulateursActive}
            >
              <div className="flex flex-col">
                {SIMULATEURS_TABS.map((tab) => (
                  <MobileNestedAccordion
                    key={tab.key}
                    label={tSimulateurs(tab.labelKey)}
                    open={openSimulateurTab === tab.key}
                    onToggle={() =>
                      setOpenSimulateurTab((current) =>
                        current === tab.key ? null : tab.key,
                      )
                    }
                  >
                    {tab.items.map((item) => (
                      <MobileSubLink
                        key={item.href}
                        href={item.href}
                        onNavigate={close}
                      >
                        {tSimulateurs(item.labelKey)}
                      </MobileSubLink>
                    ))}
                  </MobileNestedAccordion>
                ))}
              </div>
            </MobileAccordion>

            <MobileNavLink
              label={t("actualites")}
              href="/actualites"
              active={isNavPathActive(pathname, "/actualites")}
              onNavigate={close}
            />

            <MobileAccordion
              label={tRessources("trigger")}
              active={ressourcesActive}
            >
              <div className="flex flex-col gap-1 px-4 pb-4">
                {RESSOURCES_ITEMS.map((item) => (
                  <MobileSubLink
                    key={item.href}
                    href={item.href}
                    onNavigate={close}
                  >
                    {tRessources(item.labelKey)}
                  </MobileSubLink>
                ))}
              </div>
            </MobileAccordion>
          </nav>

          <div className="px-4 py-5">
            <Button
              href="/contact"
              onClick={close}
              className="w-full justify-center"
            >
              {t("contact")}
            </Button>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
