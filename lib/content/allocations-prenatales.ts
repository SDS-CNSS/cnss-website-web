import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const allocationsPrenatalesContent: MetierPageContent = {
  id: "allocations-prenatales",
  slug: "allocations-prenatales",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Allocations prénatales | CNSS Bénin",
    metaDescription:
      "Conditions, pièces à fournir et montant des allocations prénatales versées par la CNSS aux femmes salariées enceintes du Bénin.",
  },
  banner: {
    title: "Allocations prénatales",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Allocations prénatales" }],
  },
  heroImage: {
    url: "/images/decouvrir-cnss.png",
    alt: "Une femme enceinte en consultation avec une sage-femme",
  },
  sidebarNav: [
    { id: "definition", label: "Qu'est-ce que les allocations prénatales ?" },
    { id: "conditions", label: "Quelles sont les conditions à remplir pour en bénéficier ?" },
    { id: "pieces-a-fournir", label: "Quelles pièces faut-il fournir ?" },
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
      title: "Qu'est-ce que les allocations prénatales ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Les allocations prénatales sont une prestation familiale destinée à assurer la surveillance médicale de la grossesse, en contrepartie de la réalisation des trois examens prénataux obligatoires.",
            },
          ],
        },
      ],
    },
    {
      id: "conditions",
      number: "2",
      title: "Quelles sont les conditions à remplir pour en bénéficier ?",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "Être femme salariée ou conjointe d'un travailleur salarié, en état de grossesse",
                "Subir les trois (03) examens médicaux prénataux obligatoires : le 1er avant la fin du 3ème mois de grossesse, le 2ème au cours du 6ème mois, le 3ème au cours du 8ème mois",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "pieces-a-fournir",
      number: "3",
      title: "Quelles pièces faut-il fournir ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "Les volets des différents examens prénataux",
                "Les certificats médicaux de grossesse des 3ème, 6ème et 8ème mois, à déposer à compter des dates des visites",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "droits",
      number: "4",
      title: "À quoi avez-vous droit ?",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Le montant total des allocations prénatales est de 4 500 francs CFA, versé en trois fractions correspondant aux trois examens médicaux :",
            },
            {
              type: "list",
              items: [
                "1ère fraction, due après le 1er examen (avant la fin du 3ème mois) : 1 000 F",
                "2ème fraction, due après le 2ème examen (au cours du 6ème mois) : 2 000 F",
                "3ème fraction, due après le 3ème examen (au cours du 8ème mois) : 1 500 F",
              ],
            },
          ],
          alerts: [
            {
              description: "Tout examen non subi fait perdre le droit à la fraction correspondante.",
              variant: "warning",
            },
            {
              description: "Le bénéficiaire a la possibilité de cumuler le paiement des trois fractions.",
              variant: "info",
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
  fr: allocationsPrenatalesContent,
};

export async function getAllocationsPrenatalesContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
