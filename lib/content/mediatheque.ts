import type { Locale } from "@/i18n/routing";

export interface MediaItem {
  title: string;
  type: "photo" | "video";
  thumbnail: string;
  href: string;
}

export interface MediathequeContent {
  items: MediaItem[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

const items: MediaItem[] = [
  {
    title: "Lancement de la nouvelle plateforme de déclaration simplifiée en ligne",
    type: "video",
    thumbnail: "/images/actu-comptes-cotisants.png",
    href: "#",
  },
  {
    title: "Cinq nouvelles agences en construction",
    type: "photo",
    thumbnail: "/images/agence-siege.png",
    href: "#",
  },
  {
    title: "Campagne de sensibilisation sur la prévention des risques professionnels",
    type: "photo",
    thumbnail: "/images/decouvrir-cnss.png",
    href: "#",
  },
  {
    title: "Employeurs de gens de maison : la déclaration devient obligatoire",
    type: "video",
    thumbnail: "/images/actu-gens-de-maison.png",
    href: "#",
  },
  {
    title: "Journée portes ouvertes au siège de la CNSS",
    type: "photo",
    thumbnail: "/images/agence-siege.png",
    href: "#",
  },
  {
    title: "Présentation du bilan annuel de la CNSS",
    type: "video",
    thumbnail: "/images/actu-comptes-cotisants.png",
    href: "#",
  },
];

const contentByLocale: Record<Locale, MediathequeContent> = {
  fr: {
    items,
    totalCount: 32,
    totalPages: 3,
    currentPage: 1,
  },
};

export async function getMediathequeContent(locale: string): Promise<MediathequeContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
