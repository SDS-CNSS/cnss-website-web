import { getLocale, getTranslations } from "next-intl/server";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NavLink } from "@/components/ui/NavLink";
import { MetiersMegaMenu } from "@/components/layout/MetiersMegaMenu";
import { SimulateursMegaMenu } from "@/components/layout/SimulateursMegaMenu";
import { RessourcesMegaMenu } from "@/components/layout/RessourcesMegaMenu";
import { MegaMenuProvider } from "@/components/layout/MegaMenuContext";
import { MobileNav } from "@/components/layout/MobileNav";
import { StickyNavBar } from "@/components/layout/StickyNavBar";
import { Container } from "@/components/layout/Container";
import { SearchBox } from "@/components/layout/SearchBox";
import { getNavigationContent } from "@/lib/content/navigation";

export async function Header() {
  const t = await getTranslations("nav");
  const locale = await getLocale();
  const { metiersTabs, simulateursTabs, ressourcesItems } = await getNavigationContent(locale);

  return (
    <header className="flex w-full flex-col items-start">
      <MobileNav
        metiersTabs={metiersTabs}
        simulateursTabs={simulateursTabs}
        ressourcesItems={ressourcesItems}
      />

      <div className="hidden w-full bg-surface px-20 lg:block">
        <Container className="hidden items-center justify-between py-4 lg:flex">
          <Logo />
          <SearchBox className="w-[18.75rem]" />
        </Container>
      </div>
      <StickyNavBar className="hidden w-full bg-subtle px-20 lg:block">
        <Container className="hidden items-center justify-between py-4 lg:flex">
          <nav className="flex items-center gap-8">
            <NavLink label={t("accueil")} href="/" />
            <NavLink label={t("aPropos")} href="/a-propos" />
            <MegaMenuProvider>
              <MetiersMegaMenu tabs={metiersTabs} />
              <SimulateursMegaMenu tabs={simulateursTabs} />
              <NavLink label={t("actualites")} href="/actualites" />
              <RessourcesMegaMenu items={ressourcesItems} />
            </MegaMenuProvider>
          </nav>
          <Button href="/contact">{t("contact")}</Button>
        </Container>
      </StickyNavBar>
    </header>
  );
}
