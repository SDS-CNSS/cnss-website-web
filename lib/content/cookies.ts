import type { Locale } from "@/i18n/routing";
import type { LegalPageContent } from "@/types/legal-page";

const cookiesContent: LegalPageContent = {
  id: "cookies",
  slug: "cookies",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Gestion des cookies | CNSS Bénin",
    metaDescription: "Informations sur les cookies utilisés sur le site cnss.bj et comment gérer vos préférences.",
  },
  banner: {
    title: "Gestion des cookies",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Gestion des cookies" }],
  },
  sidebarNav: [
    { id: "quest-ce-quun-cookie", label: "Qu'est-ce qu'un cookie ?" },
    { id: "cookies-utilises", label: "Cookies utilisés sur ce site" },
    { id: "gestion-preferences", label: "Gestion de vos préférences" },
  ],
  sections: [
    {
      id: "quest-ce-quun-cookie",
      title: "Qu'est-ce qu'un cookie ?",
      blocks: [
        {
          type: "paragraph",
          text: "Un cookie est un petit fichier déposé sur votre appareil lors de votre navigation, permettant de mémoriser certaines informations (préférences, statistiques de visite).",
        },
      ],
    },
    {
      id: "cookies-utilises",
      title: "Cookies utilisés sur ce site",
      blocks: [
        {
          type: "list",
          items: [
            {
              label: "Cookies essentiels",
              text: "Nécessaires au fonctionnement du site (navigation, sécurité)",
            },
            {
              label: "Cookies de mesure d'audience",
              text: "Statistiques de fréquentation (ex. Google Analytics — à confirmer si utilisé)",
            },
            {
              label: "Cookies de préférence",
              text: "Mémorisation de vos choix (langue, filtres)",
            },
          ],
        },
      ],
    },
    {
      id: "gestion-preferences",
      title: "Gestion de vos préférences",
      blocks: [
        {
          type: "paragraph",
          text: "Vous pouvez à tout moment accepter, refuser ou paramétrer les cookies via le bandeau affiché lors de votre première visite, ou depuis les paramètres de votre navigateur.",
        },
      ],
    },
  ],
};

const contentByLocale: Record<Locale, LegalPageContent> = {
  fr: cookiesContent,
};

export async function getCookiesContent(locale: string): Promise<LegalPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
