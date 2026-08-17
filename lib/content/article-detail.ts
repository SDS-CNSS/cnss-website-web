import type { Locale } from "@/i18n/routing";
import type { ArticleDetailContent } from "@/types/article";

const LOREM =
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.";

const articles: Record<string, ArticleDetailContent> = {
  "lancement-nouvelle-plateforme-declaration-simplifiee": {
    slug: "lancement-nouvelle-plateforme-declaration-simplifiee",
    seo: {
      metaTitle: "Lancement de la nouvelle plateforme de déclaration simplifiée en ligne | CNSS Bénin",
      metaDescription:
        "La CNSS lance une nouvelle plateforme de déclaration simplifiée en ligne pour les employeurs.",
    },
    title: "Lancement de la nouvelle plateforme de déclaration simplifiée en ligne",
    category: "événement",
    date: "30 Juin 2026",
    heroImage: {
      url: "/images/actu-comptes-cotisants.png",
      alt: "Public assistant au lancement de la nouvelle plateforme de déclaration simplifiée",
    },
    sections: [
      {
        id: "distinction-employeur-travailleur",
        title: "Distinction employeur / travailleur",
        blocks: [
          { type: "paragraph", text: LOREM },
          { type: "paragraph", text: LOREM },
          { type: "paragraph", text: LOREM },
          { type: "paragraph", text: LOREM },
        ],
      },
      {
        id: "immatriculation-employeur",
        title: "Immatriculation de l'employeur",
        blocks: [
          { type: "paragraph", text: LOREM },
          {
            type: "gallery",
            images: [
              { url: "/images/actu-comptes-cotisants.png", alt: "Illustration de la déclaration en ligne" },
              { url: "/images/actu-comptes-cotisants.png", alt: "Illustration de la déclaration en ligne" },
            ],
          },
          { type: "paragraph", text: LOREM },
        ],
      },
      {
        id: "affiliation-travailleur",
        title: "Affiliation du travailleur (embauchage)",
        blocks: [
          { type: "paragraph", text: LOREM },
          { type: "paragraph", text: LOREM },
          { type: "paragraph", text: LOREM },
        ],
      },
    ],
    actionsBox: {
      title: "Autres actions",
      links: [
        { label: "Immatriculer un employeur de gens de maison", href: "/recouvrement/immatriculation" },
        { label: "Affilier un nouveau travailleur", href: "/recouvrement/declaration-paiement-cotisations" },
      ],
    },
    recentArticles: [
      {
        title: "Recensement des bénéficiaires de prestations : la CNSS lance une nouvelle phase",
        href: "/actualites/recensement-beneficiaires-prestations",
      },
      {
        title: "Employeurs de gens de maison : la déclaration devient obligatoire",
        href: "/actualites/employeurs-gens-de-maison-declaration-obligatoire",
      },
      {
        title: "Comment savoir si mon employeur m'a bien déclaré à la CNSS ?",
        href: "/actualites/comment-savoir-si-mon-employeur-ma-declare",
      },
    ],
  },
};

const contentByLocale: Record<Locale, Record<string, ArticleDetailContent>> = {
  fr: articles,
};

export async function getArticleDetailContent(
  locale: string,
  slug: string,
): Promise<ArticleDetailContent | undefined> {
  const localeArticles = contentByLocale[locale as Locale] ?? contentByLocale.fr;
  return localeArticles[slug];
}

export async function getAllArticleSlugs(locale: string): Promise<string[]> {
  const localeArticles = contentByLocale[locale as Locale] ?? contentByLocale.fr;
  return Object.keys(localeArticles);
}
