import type { NewsCardProps } from "@/components/ui/NewsCard";

export interface ActualitesContent {
  articles: NewsCardProps[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

const articles: NewsCardProps[] = [
  {
    image: "/images/actu-comptes-cotisants.png",
    category: "événement",
    date: "30 Juin 2026",
    title: "Deux projets pour moderniser la gestion des comptes cotisants",
    excerpt:
      "La CNSS a lancé deux chantiers majeurs : la mise à jour des comptes individuels des travailleurs sur près de 30 ans d'historique, et l'assainissement des comptes des employeurs cotisants, pour une gestion plus fiable des dossiers.",
    href: "/actualites/deux-projets-modernisation-comptes-cotisants",
  },
  {
    image: "/images/agence-siege.png",
    category: "communiqué",
    date: "10 Juin 2020",
    title: "Recensement des bénéficiaires de prestations : la CNSS lance une nouvelle phase",
    excerpt:
      "La CNSS invite les bénéficiaires de prestations à se faire recenser dans le cadre d'une nouvelle campagne, une démarche destinée à fiabiliser le suivi de leurs droits.",
    href: "/actualites/recensement-beneficiaires-prestations",
  },
  {
    image: "/images/actu-gens-de-maison.png",
    category: "communiqué",
    date: "25 mai 2023",
    title: "Employeurs de gens de maison : la déclaration devient obligatoire",
    excerpt:
      "Tout employeur de personnel de maison est désormais tenu de déclarer ses employés via la plateforme service-public.bj, une mesure destinée à étendre la couverture sociale à cette catégorie de travailleurs.",
    href: "/actualites/employeurs-gens-de-maison-declaration-obligatoire",
  },
  {
    image: "/images/actu-comptes-cotisants.png",
    category: "événement",
    date: "25 mai 2023",
    title: "Lancement du PACIT et du PACCE pour fiabiliser les comptes",
    excerpt:
      "La CNSS engage deux chantiers de fond : la mise à jour des comptes individuels des travailleurs et l'assainissement des comptes des employeurs cotisants, pour des données fiables et à jour.",
    href: "/actualites/lancement-pacit-pacce",
  },
  {
    image: "/images/agence-siege.png",
    category: "communiqué",
    date: "25 mai 2023",
    title: "Cinq nouvelles agences en construction",
    excerpt:
      "La CNSS lance les travaux de construction de cinq nouvelles agences régionales, une extension qui rapproche ses services des assurés sur l'ensemble du territoire.",
    href: "/actualites/cinq-nouvelles-agences-construction",
  },
  {
    image: "/images/agence-siege.png",
    category: "communiqué",
    date: "25 mai 2023",
    title: "Revalorisation du montant des rentes minima",
    excerpt:
      "La CNSS annonce une revalorisation du montant plancher des rentes versées, une mesure qui améliore la protection des bénéficiaires les plus vulnérables.",
    href: "/actualites/revalorisation-rentes-minima",
  },
];

export async function getActualitesContent(): Promise<ActualitesContent> {
  return {
    articles,
    totalCount: 120,
    totalPages: 8,
    currentPage: 1,
  };
}
