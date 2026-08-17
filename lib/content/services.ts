import type { Locale } from "@/i18n/routing";
import type { ServiceItem } from "@/types/homepage";

const services: ServiceItem[] = [
  {
    href: "/recouvrement/immatriculation",
    icon: "/images/icon-immatriculation.png",
    title: "Immatriculation",
    description:
      "Enregistrement des employeurs et des travailleurs pour l'ouverture et la gestion de leurs droits sociaux.",
  },
  {
    href: "/recouvrement/declaration-paiement-cotisations",
    icon: "/images/icon-declaration-cotisations.png",
    title: "Déclaration et paiement des cotisations",
    description:
      "Allocations prénatales, allocations familiales et congés de maternité pour accompagner les familles des travailleurs salariés.",
  },
  {
    href: "/prestations/allocations-familiales",
    icon: "/images/icon-prestations-familiales.png",
    title: "Prestations familiales",
    description:
      "Allocations prénatales, allocations familiales et congés de maternité pour accompagner les familles des travailleurs salariés.",
  },
  {
    href: "/prestations/accident-travail",
    icon: "/images/icon-accidents-travail.png",
    title: "Accidents du travail & maladies professionnelles",
    description:
      "Prise en charge médicale, indemnités journalières et rentes en cas d'accident ou de maladie liée au travail.",
  },
  {
    href: "/prestations/pensions",
    icon: "/images/icon-pensions.png",
    title: "Pensions",
    description:
      "Une retraite garantie dès 60 ans (ou 55 ans en cas de pension anticipée) après 180 mois d'assurance effective.",
  },
  {
    href: "#",
    icon: "/images/icon-assurance-volontaire.png",
    title: "Assurance volontaire",
    description:
      "Une continuité de couverture pour les assurés ayant perdu leur emploi, sous certaines conditions.",
  },
];

const contentByLocale: Record<Locale, ServiceItem[]> = {
  fr: services,
};

export async function getServicesContent(locale: string): Promise<ServiceItem[]> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
