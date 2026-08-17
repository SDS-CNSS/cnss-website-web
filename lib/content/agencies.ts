import type { Locale } from "@/i18n/routing";
import type { AgencyItem } from "@/types/homepage";

const agencies: AgencyItem[] = [
  {
    image: "/images/agence-cotonou.png",
    city: "Cotonou",
    region: "Littoral - Atlantique",
    address: "Akpakpa, en face du stade René Pleven",
    phone: "+229 01 21 33 11 33 / +229 01 21 33 11 16",
    postalBox: "-",
  },
  {
    image: "/images/agence-lokossa.png",
    city: "Lokossa",
    region: "Mono - Couffo",
    address: "Quartier Guinkomey",
    phone: "+229 01 22 41 11 41",
    postalBox: "BP 52",
  },
  {
    image: "/images/agence-porto-novo.png",
    city: "Porto-Novo",
    region: "Ouémé - Plateau",
    address: "En face de BIBE",
    phone: "+229 01 20 21 11 33",
    postalBox: "BP 87",
  },
  {
    image: "/images/agence-siege.png",
    city: "Abomey",
    region: "Zou - Collines",
    address: "Place GOHO",
    phone: "+229 01 22 50 03 98",
    postalBox: "BP 140",
  },
  {
    image: "/images/agence-parakou.png",
    city: "Parakou",
    region: "Borghou - Alibori",
    address: "Quartier Tranza, route de Kandi",
    phone: "+229 01 23 61 03 74",
    postalBox: "BP 159",
  },
  {
    image: "/images/agence-siege.png",
    city: "Natitingou",
    region: "Atacora - Donga",
    address: "Non loin de la poste Natitingou",
    phone: "+229 01 23 82 13 04",
    postalBox: "BP 29",
  },
];

const contentByLocale: Record<Locale, AgencyItem[]> = {
  fr: agencies,
};

export async function getAgenciesContent(locale: string): Promise<AgencyItem[]> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
