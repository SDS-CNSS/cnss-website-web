import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const remboursementCotisationsContent: MetierPageContent = {
  id: "remboursement-cotisations",
  slug: "remboursement-cotisations",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Remboursement des cotisations | CNSS Bénin",
    metaDescription:
      "Conditions et montant du remboursement des cotisations personnelles versées par la CNSS aux travailleurs étrangers quittant le Bénin et aux assurés ayant cotisé après 60 ans.",
  },
  banner: {
    title: "Remboursement des cotisations",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Remboursement des cotisations" }],
  },
  sidebarNav: [
    { id: "definition", label: "Qu'est-ce que le remboursement des cotisations ?" },
    { id: "qui-beneficie", label: "Qui peut en bénéficier ?" },
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
      title: "Qu'est-ce que le remboursement des cotisations ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Le code de sécurité sociale prévoit, pour certains assurés, le remboursement de leurs cotisations personnelles versées à la CNSS.",
            },
          ],
        },
      ],
    },
    {
      id: "qui-beneficie",
      number: "2",
      title: "Qui peut en bénéficier ?",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "Les travailleurs étrangers qui quittent définitivement le Bénin pour regagner leur pays d'origine avant d'atteindre l'âge normal de la retraite, en l'absence de convention ou d'accord de sécurité sociale",
                "Les assurés qui ont continué à cotiser après l'âge de 60 ans, à leur cessation d'activité",
              ],
            },
          ],
          alerts: [
            {
              description: "Au-delà de 65 ans, aucun remboursement de cotisations ne peut être effectué.",
              variant: "warning",
            },
          ],
        },
      ],
    },
    {
      id: "droits",
      number: "3",
      title: "À quoi avez-vous droit ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Seules les cotisations personnelles (part salariale) sont remboursées. La part patronale reste acquise aux institutions de sécurité sociale.",
            },
          ],
        },
      ],
    },
  ],
  linksBox: {
    title: "Liens",
    links: [{ label: "Pensions et allocations de vieillesse", href: "/prestations/pensions" }],
  },
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: remboursementCotisationsContent,
};

export async function getRemboursementCotisationsContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
