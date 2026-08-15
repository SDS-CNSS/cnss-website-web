import type { Locale } from "@/i18n/routing";
import type { LegalPageContent } from "@/types/legal-page";

const mentionsLegalesContent: LegalPageContent = {
  id: "mentions-legales",
  slug: "mentions-legales",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Mentions légales | CNSS Bénin",
    metaDescription: "Mentions légales du site cnss.bj : éditeur, hébergement et propriété intellectuelle.",
  },
  banner: {
    title: "Mentions légales",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Mentions légales" }],
  },
  sidebarNav: [
    { id: "editeur-du-site", label: "Éditeur du site" },
    { id: "conception-developpement-hebergement", label: "Conception, développement et hébergement" },
    { id: "propriete-intellectuelle", label: "Propriété intellectuelle" },
  ],
  sections: [
    {
      id: "editeur-du-site",
      title: "Éditeur du site",
      blocks: [
        {
          type: "paragraph",
          text: "Le site cnss.bj est édité par la Caisse Nationale de Sécurité Sociale (CNSS), établissement public à caractère social, doté de la personnalité civile et de l'autonomie financière, régi par la loi n°98-019 du 21 mars 2003 portant Code de Sécurité Sociale en République du Bénin.",
        },
        {
          type: "list",
          items: [
            { label: "Siège social", text: "390, Avenue Jean-Paul II, 01 BP 374, Cadjèhoun, Cotonou, Bénin" },
            { label: "Téléphone", text: "+229 01 90 19 00 00" },
            { label: "Email", text: "info@cnss.bj", href: "mailto:info@cnss.bj" },
            { label: "Directeur de publication", text: "[Nom du Directeur Général — à compléter]" },
          ],
        },
      ],
    },
    {
      id: "conception-developpement-hebergement",
      title: "Conception, développement et hébergement",
      blocks: [
        {
          type: "paragraph",
          text: "Le site cnss.bj est conçu, développé et hébergé en interne par les services techniques de la Caisse Nationale de Sécurité Sociale.",
        },
      ],
    },
    {
      id: "propriete-intellectuelle",
      title: "Propriété intellectuelle",
      blocks: [
        {
          type: "paragraph",
          text: "L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) est la propriété exclusive de la CNSS, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite.",
        },
      ],
    },
  ],
};

const contentByLocale: Record<Locale, LegalPageContent> = {
  fr: mentionsLegalesContent,
};

export async function getMentionsLegalesContent(locale: string): Promise<LegalPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
