import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const allocationRemariageContent: MetierPageContent = {
  id: "allocation-remariage",
  slug: "allocation-remariage",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Allocation de remariage | CNSS Bénin",
    metaDescription:
      "Conditions et montant de l'allocation de remariage versée par la CNSS à la veuve titulaire d'une pension de survivant qui se remarie.",
  },
  banner: {
    title: "Allocation de remariage",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Allocation de remariage" }],
  },
  sidebarNav: [
    { id: "definition", label: "Qu'est-ce que l'allocation de remariage ?" },
    { id: "droits", label: "À quoi avez-vous droit ?" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "definition",
      number: "1",
      title: "Qu'est-ce que l'allocation de remariage ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Lorsque la veuve titulaire d'une pension de survivant se remarie, elle perd le droit à cette pension. En contrepartie, elle bénéficie d'une allocation de remariage, versée en une seule fois.",
            },
          ],
        },
      ],
    },
    {
      id: "droits",
      number: "2",
      title: "À quoi avez-vous droit ?",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Le montant de l'allocation de remariage est égal à six (06) fois le montant de la pension mensuelle de veuve.",
            },
          ],
          alerts: [
            {
              description:
                "Exemple : pour une pension mensuelle de veuve de 16 000 francs, l'allocation de remariage est égale à 16 000 × 6 = 96 000 francs.",
              variant: "info",
            },
          ],
        },
      ],
    },
  ],
  linksBox: {
    title: "Liens",
    links: [{ label: "Pensions et allocations de survivants", href: "/prestations/pension-survivants" }],
  },
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: allocationRemariageContent,
};

export async function getAllocationRemariageContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
