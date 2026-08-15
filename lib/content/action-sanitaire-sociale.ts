import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const actionSanitaireSocialeContent: MetierPageContent = {
  id: "action-sanitaire-sociale",
  slug: "action-sanitaire-sociale",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Action sanitaire et sociale | CNSS Bénin",
    metaDescription:
      "Les prestations en nature de l'action sanitaire et sociale de la CNSS : services couverts et bénéficiaires, dans les Centres Médico-Sociaux du Bénin.",
  },
  banner: {
    title: "Action sanitaire et sociale",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Action sanitaire et sociale" }],
  },
  sidebarNav: [
    { id: "definition", label: "Qu'est-ce que l'action sanitaire et sociale ?" },
    { id: "qui-beneficie", label: "Qui peut en bénéficier ?" },
    { id: "services-couverts", label: "Quels services sont couverts ?" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "definition",
      number: "1",
      title: "Qu'est-ce que l'action sanitaire et sociale ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "L'action sanitaire et sociale est constituée essentiellement par les prestations en nature que la Caisse sert à ses assurés dans ses Centres Médico-Sociaux (CMS).",
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
                "Les femmes des travailleurs",
                "Les femmes salariées en état de grossesse, ou ayant donné naissance sous contrôle médical à un enfant",
                "Les enfants de ces femmes, régulièrement inscrits au livret familial d'allocataire",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "services-couverts",
      number: "3",
      title: "Quels services sont couverts ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "Les consultations médicales",
                "Les soins médicaux",
                "Les expertises médicales",
                "La fourniture des produits pharmaceutiques",
                "Les analyses médicales",
                "Les vaccinations",
                "Les séances de formation et d'information sur l'hygiène nutritionnelle et familiale",
                "Tout autre service ayant un intérêt pour l'amélioration de la santé des bénéficiaires",
              ],
            },
          ],
          alerts: [
            {
              description: "Ces services sont assurés par la CNSS dans ses Centres Médico-Sociaux (CMS).",
              variant: "primary",
            },
          ],
        },
      ],
    },
  ],
  linksBox: {
    title: "Liens",
    links: [{ label: "https://cnss.bj/imprimes-cnss/", href: "https://cnss.bj/imprimes-cnss/" }],
  },
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: actionSanitaireSocialeContent,
};

export async function getActionSanitaireSocialeContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
