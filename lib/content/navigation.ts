import type { Locale } from "@/i18n/routing";
import type { NavigationContent } from "@/types/navigation";
import { ROUTES } from "@/lib/routes";

const navigationContent: NavigationContent = {
  metiersTabs: [
    {
      key: "recouvrement",
      labelKey: "tabs.recouvrement.label",
      columns: [
        {
          icon: "/images/icon-immatriculation.png",
          titleKey: "tabs.recouvrement.immatriculation",
          href: ROUTES.recouvrement.immatriculation,
        },
        {
          icon: "/images/icon-declaration-cotisations.png",
          titleKey: "tabs.recouvrement.declaration",
          href: ROUTES.recouvrement.declarationPaiementCotisations,
        },
        {
          icon: "/images/icon-controle-employeur.png",
          titleKey: "tabs.recouvrement.controle",
          href: ROUTES.recouvrement.controleEmployeur,
        },
      ],
    },
    {
      key: "prestations",
      labelKey: "tabs.prestations.label",
      columns: [
        {
          icon: "/images/icon-prestations-familiales.png",
          titleKey: "tabs.prestations.familialesTitle",
          links: [
            { labelKey: "tabs.prestations.allocationsFamiliales", href: ROUTES.prestations.allocationsFamiliales },
            { labelKey: "tabs.prestations.allocationsPrenatales", href: ROUTES.prestations.allocationsPrenatales },
            { labelKey: "tabs.prestations.congeMaternite", href: ROUTES.prestations.congeMaternite },
            { labelKey: "tabs.prestations.actionSanitaire", href: ROUTES.prestations.actionSanitaireSociale },
          ],
        },
        {
          icon: "/images/icon-pensions.png",
          titleKey: "tabs.prestations.vieillesseTitle",
          links: [
            { labelKey: "tabs.prestations.pensions", href: ROUTES.prestations.pensions },
            { labelKey: "tabs.prestations.pensionSurvivants", href: ROUTES.prestations.pensionSurvivants },
            { labelKey: "tabs.prestations.remboursement", href: ROUTES.prestations.remboursementCotisations },
            { labelKey: "tabs.prestations.remariage", href: ROUTES.prestations.allocationRemariage },
          ],
        },
        {
          icon: "/images/icon-accidents-travail.png",
          titleKey: "tabs.prestations.risquesTitle",
          links: [
            { labelKey: "tabs.prestations.accidentTravail", href: ROUTES.prestations.accidentTravail },
            { labelKey: "tabs.prestations.maladiesPro", href: ROUTES.prestations.maladiesProfessionnelles },
          ],
        },
      ],
    },
  ],
  simulateursTabs: [
    {
      key: "cotisations",
      labelKey: "tabs.cotisations.label",
      items: [
        {
          icon: "/images/icon-charges-sociales-embauche.png",
          labelKey: "tabs.cotisations.chargesSociales",
          href: ROUTES.simulateurs.chargesSocialesEmbauche,
        },
        {
          icon: "/images/icon-majoration-retard.png",
          labelKey: "tabs.cotisations.majorationRetard",
          href: ROUTES.simulateurs.majorationRetard,
        },
      ],
    },
    {
      key: "pension",
      labelKey: "tabs.pension.label",
      items: [
        {
          icon: "/images/icon-pension-vieillesse.png",
          labelKey: "tabs.pension.vieillesse",
          href: ROUTES.simulateurs.pension,
        },
        {
          icon: "/images/icon-pension-vieillesse-anticipee.png",
          labelKey: "tabs.pension.vieillesseAnticipee",
          href: ROUTES.simulateurs.pensionVieillesseAnticipee,
        },
        {
          icon: "/images/icon-pension-survivants-conjoints.png",
          labelKey: "tabs.pension.survivantsConjoints",
          href: ROUTES.simulateurs.pensionSurvivantsConjoints,
        },
        {
          icon: "/images/icon-pension-survivants-enfants.png",
          labelKey: "tabs.pension.survivantsEnfants",
          href: ROUTES.simulateurs.pensionSurvivantsEnfants,
        },
        {
          icon: "/images/icon-allocation-survivants.png",
          labelKey: "tabs.pension.allocationSurvivants",
          href: ROUTES.simulateurs.allocationSurvivants,
        },
      ],
    },
  ],
  ressourcesItems: [
    { icon: "file", labelKey: "bibliotheque", href: ROUTES.bibliotheque },
    { icon: "fileImage", labelKey: "mediatheque", href: ROUTES.mediatheque },
  ],
};

const contentByLocale: Record<Locale, NavigationContent> = {
  fr: navigationContent,
};

export async function getNavigationContent(locale: string): Promise<NavigationContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
