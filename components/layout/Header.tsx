import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/ui/NavLink";
import { MetiersMegaMenu } from "@/components/layout/MetiersMegaMenu";
import { SimulateursMegaMenu } from "@/components/layout/SimulateursMegaMenu";
import { RessourcesMegaMenu } from "@/components/layout/RessourcesMegaMenu";
import { MegaMenuProvider } from "@/components/layout/MegaMenuContext";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const t = useTranslations("nav");

  return (
    <header className="flex w-full flex-col items-start">
      <MobileNav />

      <div className="hidden w-full items-center justify-between bg-surface px-20 py-4 lg:flex">
        <Logo />
        <label className="flex h-10 w-[300px] items-center gap-3 rounded-md border border-line bg-surface px-3 py-2">
          <input
            type="search"
            placeholder={t("search")}
            className="w-full flex-1 text-base text-ink placeholder:text-muted focus:outline-none"
          />
          <Search className="size-4 text-muted" />
        </label>
      </div>
      <div className="relative hidden w-full items-center justify-between bg-subtle px-20 py-4 lg:flex">
        <nav className="flex items-center gap-8">
          <NavLink label={t("accueil")} href="/" />
          <NavLink label={t("aPropos")} href="/a-propos" />
          <MegaMenuProvider>
            <MetiersMegaMenu />
            <SimulateursMegaMenu />
            <NavLink label={t("actualites")} href="/actualites" />
            <RessourcesMegaMenu />
          </MegaMenuProvider>
        </nav>
        <Button href="/contact">{t("contact")}</Button>
      </div>
    </header>
  );
}
