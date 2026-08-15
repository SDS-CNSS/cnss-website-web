import type { Locale } from "@/i18n/routing";
import type { AProposContent } from "@/types/a-propos";

const aProposContent: AProposContent = {
  id: "a-propos",
  slug: "a-propos",
  updatedAt: "2026-08-12",
  seo: {
    metaTitle: "Qui sommes-nous ? | CNSS Bénin",
    metaDescription:
      "Découvrez la mission, la gouvernance et l'histoire de la Caisse Nationale de Sécurité Sociale du Bénin, depuis sa création en 1956.",
  },
  banner: {
    title: "Qui sommes-nous ?",
    breadcrumbs: [
      { label: "Accueil", href: "/" },
      { label: "Qui sommes-nous ?" },
    ],
  },
  mission: {
    title: "Notre mission",
    image: {
      url: "/images/a-propos-mission.png",
      alt: "Agents de la CNSS au service des assurés",
    },
    content: [
      {
        type: "paragraph",
        text: "La Caisse Nationale de Sécurité Sociale est un établissement public à caractère social, doté de la personnalité civile et de l'autonomie financière. Elle gère le régime général de sécurité sociale en faveur des travailleurs du secteur structuré soumis aux dispositions du code de travail, à travers trois (03) branches :",
      },
      {
        type: "list",
        items: [
          "la branche des prestations familiales",
          "la branche des risques professionnels",
          "la branche des pensions",
        ],
      },
    ],
  },
  gouvernance: {
    title: "Notre gouvernance",
    cta: { label: "En savoir plus", href: "/organes-de-gouvernance" },
    content: [
      {
        type: "paragraph",
        text: "La CNSS est administrée par un Conseil d'Administration tripartite constitué de 9 membres :",
      },
      {
        type: "list",
        items: [
          "trois (3) représentants des employeurs",
          "trois (3) représentants des travailleurs",
          "trois (3) représentants de l'État émanant des ministres chargés des finances, de la sécurité sociale et de la santé",
        ],
      },
      {
        type: "paragraph",
        text: "La gestion quotidienne est assurée par la Direction générale à laquelle sont rattachées cinq (05) Cellules spécialisées, sept (07) Directions techniques et six (6) Agences régionales.",
      },
    ],
  },
  histoire: {
    title: "Notre histoire",
    description: "Près de 70 ans au service des assurés sociaux",
    image: {
      url: "/images/a-propos-histoire.png",
      alt: "Emblème de la CNSS",
    },
    timeline: [
      {
        id: "ccpf",
        year: "1956",
        title: "CCPF",
        description:
          "Caisse de Compensation des Prestations Familiales. Institution des prestations familiales (charges de famille, maternité), financées entièrement par les employeurs.",
      },
      {
        id: "ccpfat",
        year: "1959",
        title: "CCPFAT",
        description:
          "Caisse de Compensation des Prestations Familiales et des Accidents du Travail, au lendemain de l'institution d'un système de réparation des accidents du travail et des maladies professionnelles.",
      },
      {
        id: "cdss",
        year: "1970",
        title: "CDSS",
        description:
          "Caisse Dahoméenne de Sécurité Sociale, après transformation profonde de la CCPFAT (scindée en 1971, réunifiée sous ce même nom en 1973).",
      },
      {
        id: "obss",
        year: "1976",
        title: "OBSS",
        description: "Office Béninois de Sécurité Sociale.",
      },
      {
        id: "cnss",
        year: "2003",
        title: "CNSS",
        description:
          "la loi n°98-019 du 21 mars 2003 portant Code de Sécurité Sociale transforme l'OBSS en Caisse Nationale de Sécurité Sociale, dénomination et texte fondateur toujours en vigueur aujourd'hui.",
      },
    ],
  },
  cta: {
    title: "70 ans à vos côtés, une équipe prête à vous accompagner demain.",
    description: "Contactez-nous pour toute question sur votre protection sociale.",
    image: {
      url: "/images/a-propos-cta-gens-de-maison.png",
      alt: "Une famille accompagnée par la CNSS",
    },
    button: { label: "Contactez-nous", href: "/contact" },
  },
};

const contentByLocale: Record<Locale, AProposContent> = {
  fr: aProposContent,
};

export async function getAProposContent(locale: string): Promise<AProposContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
