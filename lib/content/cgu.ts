import type { Locale } from "@/i18n/routing";
import type { LegalPageContent } from "@/types/legal-page";

const cguContent: LegalPageContent = {
  id: "cgu",
  slug: "cgu",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Conditions Générales d'Utilisation | CNSS Bénin",
    metaDescription: "Conditions Générales d'Utilisation du site cnss.bj : accès, utilisation des services en ligne et responsabilité.",
  },
  banner: {
    title: "Conditions Générales d'Utilisation",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Conditions Générales d'Utilisation" }],
  },
  sidebarNav: [
    { id: "objet", label: "Objet" },
    { id: "acces-au-site", label: "Accès au site" },
    { id: "utilisation-services-en-ligne", label: "Utilisation des services en ligne" },
    { id: "responsabilite", label: "Responsabilité" },
    { id: "modification-des-cgu", label: "Modification des CGU" },
  ],
  sections: [
    {
      id: "objet",
      title: "Objet",
      blocks: [
        {
          type: "paragraph",
          text: "Les présentes CGU définissent les règles d'utilisation du site cnss.bj, accessible à toute personne souhaitant s'informer sur les services de la CNSS ou effectuer certaines démarches en ligne.",
        },
      ],
    },
    {
      id: "acces-au-site",
      title: "Accès au site",
      blocks: [
        {
          type: "paragraph",
          text: "Le site est accessible gratuitement à tout utilisateur disposant d'un accès à internet. La CNSS met tout en œuvre pour assurer un accès continu, mais ne peut garantir une disponibilité sans interruption.",
        },
      ],
    },
    {
      id: "utilisation-services-en-ligne",
      title: "Utilisation des services en ligne",
      blocks: [
        {
          type: "paragraph",
          text: "Certaines fonctionnalités (simulateurs, formulaires, espace personnel) nécessitent la saisie d'informations exactes par l'utilisateur. La CNSS ne saurait être tenue responsable des conséquences d'une saisie erronée par l'utilisateur.",
        },
      ],
    },
    {
      id: "responsabilite",
      title: "Responsabilité",
      blocks: [
        {
          type: "paragraph",
          text: "Les informations diffusées sur ce site sont fournies à titre indicatif. Elles ne sauraient se substituer aux textes légaux et réglementaires en vigueur (Code de Sécurité Sociale) en cas de divergence.",
        },
      ],
    },
    {
      id: "modification-des-cgu",
      title: "Modification des CGU",
      blocks: [
        {
          type: "paragraph",
          text: "La CNSS se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs sont invités à les consulter régulièrement.",
        },
      ],
    },
  ],
};

const contentByLocale: Record<Locale, LegalPageContent> = {
  fr: cguContent,
};

export async function getCguContent(locale: string): Promise<LegalPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
