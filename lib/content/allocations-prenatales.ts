import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const allocationsPrenatalesContent: MetierPageContent = {
  id: "allocations-prenatales",
  slug: "allocations-prenatales",
  updatedAt: "2026-08-13",
  seo: {
    metaTitle: "Allocations prénatales | CNSS Bénin",
    metaDescription:
      "Conditions, pièces à fournir et droits liés aux allocations prénatales versées par la CNSS aux travailleuses salariées du Bénin.",
  },
  banner: {
    title: "Allocations prénatales",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Allocations prénatales" }],
  },
  heroImage: {
    url: "/images/decouvrir-cnss.png",
    alt: "Une femme enceinte en consultation avec une sage-femme",
  },
  sidebarNav: [
    { id: "definition", label: "Qu'est-ce que l'allocations prénatales ?" },
    { id: "conditions", label: "Quelles sont les conditions à remplir pour en bénéficier ?" },
    { id: "pieces-a-fournir", label: "Quelles pièces faut-il fournir ?" },
    { id: "droits", label: "À quoi avez-vous droit ?" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "definition",
      number: "1",
      title: "Qu'est-ce que l'allocations prénatales ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            },
          ],
        },
      ],
    },
    {
      id: "conditions",
      number: "2",
      title: "Quelles sont les conditions à remplir pour en bénéficier ?",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            },
          ],
        },
      ],
    },
    {
      id: "pieces-a-fournir",
      number: "3",
      title: "Quelles pièces faut-il fournir ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
            },
          ],
        },
      ],
    },
    {
      id: "droits",
      number: "4",
      title: "À quoi avez-vous droit ?",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
            },
          ],
        },
      ],
    },
  ],
  linksBox: {
    title: "Liens",
    links: [{ label: "https://cnss.bj/imprimes-cnss/", href: "https://cnss.bj/imprimes-cnss/" }],
  },
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: allocationsPrenatalesContent,
};

export async function getAllocationsPrenatalesContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
