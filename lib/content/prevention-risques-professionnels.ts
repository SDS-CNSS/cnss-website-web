import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const preventionRisquesProfessionnelsContent: MetierPageContent = {
  id: "prevention-risques-professionnels",
  slug: "prevention-risques-professionnels",
  updatedAt: "2026-08-15",
  seo: {
    metaTitle: "Prévention des risques professionnels | CNSS Bénin",
    metaDescription:
      "Contrôle réglementaire, technique et médical, comités d'hygiène et de sécurité : découvrez comment la CNSS agit pour prévenir les accidents du travail et les maladies professionnelles au Bénin.",
  },
  banner: {
    title: "Prévention des risques professionnels",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Prévention des risques professionnels" }],
  },
  heroImage: {
    url: "/images/decouvrir-cnss.png",
    alt: "Contrôle des conditions de travail sur un lieu de travail au Bénin",
  },
  sidebarNav: [
    { id: "mission", label: "Quelle est la mission de la CNSS en prévention ?" },
    { id: "axes", label: "Les trois axes de contrôle" },
    { id: "actions", label: "Les actions menées sur le terrain" },
    { id: "obligations", label: "Les obligations des employeurs" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "mission",
      number: "1",
      title: "Quelle est la mission de la CNSS en matière de prévention ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Au-delà de la réparation des accidents du travail et des maladies professionnelles déjà survenus, la CNSS agit en amont pour les prévenir. Cette mission de prévention s'exerce à travers trois formes de contrôle complémentaires : réglementaire, technique et médical.",
            },
          ],
        },
      ],
    },
    {
      id: "axes",
      number: "2",
      title: "Les trois axes de contrôle",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "definitionList",
              definitions: [
                {
                  term: "Contrôle réglementaire",
                  description:
                    "Vérification du respect, par les employeurs, des textes régissant l'hygiène et la sécurité au travail.",
                },
                {
                  term: "Contrôle technique",
                  description:
                    "Inspection des conditions matérielles de travail (installations, équipements, postes de travail) pour identifier et réduire les situations à risque.",
                },
                {
                  term: "Contrôle médical",
                  description:
                    "Surveillance de l'état de santé des travailleurs exposés à un risque professionnel, en lien avec les services médicaux du travail.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "actions",
      number: "3",
      title: "Les actions menées sur le terrain",
      variant: "tinted",
      subsections: [
        {
          title: "Ce que met en œuvre la CNSS",
          blocks: [
            {
              type: "list",
              items: [
                "Mise en place de Comités d'Hygiène et de Sécurité (CHS) au sein des entreprises",
                "Formation des membres de ces comités",
                "Campagnes de sensibilisation des travailleurs et des employeurs",
                "Surveillance et contrôle des conditions de travail",
                "Enquêtes après chaque accident du travail déclaré",
                "Tenue de statistiques sur les accidents du travail et les maladies professionnelles",
              ],
            },
          ],
          alerts: [
            {
              description:
                "Les statistiques recueillies servent notamment à faire évoluer la liste officielle des maladies professionnelles.",
              variant: "info",
            },
          ],
        },
      ],
    },
    {
      id: "obligations",
      number: "4",
      title: "Les obligations des employeurs en matière de prévention",
      variant: "white",
      subsections: [
        {
          title: "Avant le début des travaux",
          blocks: [
            {
              type: "list",
              items: [
                "Déclarer à la CNSS et à l'inspection du travail l'utilisation de tout produit susceptible de provoquer une maladie professionnelle, avant le début des travaux concernés",
              ],
            },
          ],
        },
        {
          title: "En cours d'activité",
          blocks: [
            {
              type: "list",
              items: [
                "Déclarer à la CNSS et à l'inspecteur du travail toute maladie qu'il estime avoir un caractère professionnel, même si elle ne figure pas encore sur la liste officielle",
                "Participer à la mise en place et au bon fonctionnement du Comité d'Hygiène et de Sécurité (CHS) de l'entreprise",
              ],
            },
          ],
          alerts: [
            {
              description:
                "Un employeur qui ne respecte pas ses obligations de déclaration s'expose aux sanctions prévues par la loi.",
              variant: "warning",
            },
          ],
        },
      ],
    },
  ],
  linksBox: {
    title: "Liens",
    links: [
      { label: "L'accident du travail", href: "/prestations/accident-travail" },
      { label: "Les maladies professionnelles", href: "/prestations/maladies-professionnelles" },
    ],
  },
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: preventionRisquesProfessionnelsContent,
};

export async function getPreventionRisquesProfessionnelsContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
