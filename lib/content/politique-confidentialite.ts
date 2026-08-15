import type { Locale } from "@/i18n/routing";
import type { LegalPageContent } from "@/types/legal-page";

const politiqueConfidentialiteContent: LegalPageContent = {
  id: "politique-confidentialite",
  slug: "politique-confidentialite",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Politiques de confidentialité | CNSS Bénin",
    metaDescription:
      "Politique de confidentialité du site cnss.bj : données collectées, finalités, base légale, droits des utilisateurs et sécurité.",
  },
  banner: {
    title: "Politiques de confidentialité",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Politiques de confidentialité" }],
  },
  sidebarNav: [
    { id: "collecte-donnees-personnelles", label: "Collecte des données personnelles" },
    { id: "finalite-traitement", label: "Finalité du traitement" },
    { id: "base-legale", label: "Base légale" },
    { id: "duree-conservation", label: "Durée de conservation" },
    { id: "droits-utilisateurs", label: "Droits des utilisateurs" },
    { id: "securite", label: "Sécurité" },
  ],
  sections: [
    {
      id: "collecte-donnees-personnelles",
      title: "Collecte des données personnelles",
      blocks: [
        {
          type: "paragraph",
          text: "Dans le cadre de l'utilisation du site (formulaire de contact, newsletter, espace en ligne), la CNSS peut être amenée à collecter des données à caractère personnel : nom, prénom, email, téléphone, numéro d'immatriculation ou d'affiliation.",
        },
      ],
    },
    {
      id: "finalite-traitement",
      title: "Finalité du traitement",
      blocks: [
        {
          type: "paragraph",
          text: "Ces données sont utilisées uniquement pour :",
        },
        {
          type: "list",
          items: [
            { text: "répondre à vos demandes de contact" },
            { text: "vous envoyer la newsletter, si vous y avez souscrit" },
            { text: "assurer le suivi de vos démarches administratives (immatriculation, prestations)" },
          ],
        },
      ],
    },
    {
      id: "base-legale",
      title: "Base légale",
      blocks: [
        {
          type: "paragraph",
          text: "Le traitement des données à caractère personnel collectées sur ce site est encadré par la loi n°2017-20 du 20 avril 2018 portant Code du Numérique en République du Bénin, notamment son Livre V relatif à la protection des données à caractère personnel.",
        },
        {
          type: "paragraph",
          text: "L'autorité compétente en la matière est l'Autorité de Protection des Données Personnelles (APDP), autorité administrative indépendante chargée de veiller à ce que les traitements de données personnelles soient effectués conformément à la loi, et habilitée à conduire des investigations ou engager des poursuites en cas de non-respect.",
        },
      ],
    },
    {
      id: "duree-conservation",
      title: "Durée de conservation",
      blocks: [
        {
          type: "paragraph",
          text: "[À définir avec le service juridique/DSI — durée standard souvent 3 à 5 ans pour ce type de données]",
        },
      ],
    },
    {
      id: "droits-utilisateurs",
      title: "Droits des utilisateurs",
      blocks: [
        {
          type: "paragraphWithLink",
          before:
            "Conformément au Code du Numérique, vous disposez d'un droit d'accès, de rectification et de suppression de vos données, ainsi que du droit de retirer à tout moment votre consentement — défini par la loi comme « toute manifestation de volonté expresse, non équivoque, libre, spécifique et informée ». Pour exercer ces droits, contactez-nous à ",
          linkText: "info@cnss.bj",
          href: "mailto:info@cnss.bj",
          after: ", ou saisissez directement l'APDP en cas de litige non résolu.",
        },
      ],
    },
    {
      id: "securite",
      title: "Sécurité",
      blocks: [
        {
          type: "paragraph",
          text: "La CNSS met en œuvre des mesures techniques et organisationnelles pour protéger vos données contre tout accès non autorisé, perte ou divulgation.",
        },
      ],
    },
  ],
};

const contentByLocale: Record<Locale, LegalPageContent> = {
  fr: politiqueConfidentialiteContent,
};

export async function getPolitiqueConfidentialiteContent(locale: string): Promise<LegalPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
