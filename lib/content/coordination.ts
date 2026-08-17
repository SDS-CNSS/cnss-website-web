import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const coordinationContent: MetierPageContent = {
  id: "coordination",
  slug: "coordination",
  updatedAt: "2026-08-15",
  seo: {
    metaTitle: "Coordination entre caisses de sécurité sociale | CNSS Bénin",
    metaDescription:
      "Conventions internationales, accords inter-caisses et coordination avec le FNRB : comment la CNSS garantit les droits à pension des travailleurs migrants et des carrières mixtes.",
  },
  banner: {
    title: "Coordination",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Coordination" }],
  },
  sidebarNav: [
    { id: "definition", label: "Qu'est-ce que la coordination entre caisses ?" },
    { id: "instruments", label: "Les instruments de coordination" },
    { id: "qui-est-concerne", label: "Qui est concerné ?" },
    { id: "prestations", label: "Quelles prestations sont concernées ?" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "definition",
      number: "1",
      title: "Qu'est-ce que la coordination entre caisses de sécurité sociale ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Un travailleur migrant est toute personne ayant accompli ses périodes d'activité professionnelle dans un ou plusieurs pays, y compris ou non le Bénin. Sans accord entre les pays concernés, un travailleur qui quitte définitivement son pays d'emploi ne peut pas « exporter » la pension qu'il y a acquise : son versement est alors suspendu par l'institution de sécurité sociale de ce pays.",
            },
            {
              type: "paragraph",
              text: "Pour éviter cette situation, la CNSS a signé des conventions et des accords de coordination avec plusieurs pays et caisses de sécurité sociale, afin que les travailleurs migrants puissent faire valoir, où qu'ils résident, l'ensemble des droits acquis au cours de leur carrière.",
            },
          ],
        },
        {
          title: "Coordination avec le FNRB",
          blocks: [
            {
              type: "paragraph",
              text: "Au niveau national, la CNSS assure également la coordination des droits à pension des agents ayant eu une carrière mixte entre le secteur privé, couvert par la CNSS, et la fonction publique, couverte par le Fonds National des Retraites du Bénin (FNRB) — afin que les périodes cotisées auprès de chaque régime soient prises en compte lors de la liquidation de la pension.",
            },
          ],
        },
      ],
    },
    {
      id: "instruments",
      number: "2",
      title: "Les instruments de coordination",
      variant: "white",
      subsections: [
        {
          title: "Conventions et accords internationaux",
          blocks: [
            {
              type: "list",
              items: [
                "Convention de sécurité sociale France – Bénin",
                "Convention Ex-OCAM, ratifiée par le Bénin, le Burkina Faso, le Niger, le Togo, le Tchad et la République Centrafricaine",
                "Convention de sécurité sociale du personnel Air Afrique",
                "Accords de coordination inter-caisses, notamment avec le Niger, la Côte d'Ivoire, le Burkina Faso, le Sénégal et le Togo",
              ],
            },
          ],
        },
        {
          title: "Deux systèmes de liquidation de la pension",
          blocks: [
            {
              type: "definitionList",
              definitions: [
                {
                  term: "Liquidation séparée",
                  description:
                    "Chaque pays calcule et verse sa propre part de pension, pour les seules périodes accomplies sur son territoire. C'est le système appliqué, par exemple, dans l'accord de coordination avec la CNPS de Côte d'Ivoire.",
                },
                {
                  term: "Liquidation par totalisation",
                  description:
                    "Les périodes d'assurance accomplies dans les différents pays sont additionnées pour déterminer l'ouverture du droit à pension, qui est ensuite calculée au prorata des périodes effectivement accomplies dans chaque pays. C'est le système appliqué avec les conventions Ex-OCAM et Air Afrique.",
                },
              ],
            },
          ],
          alerts: [
            {
              description:
                "Avec la convention France – Bénin, les deux systèmes sont possibles : liquidation séparée ou liquidation par totalisation des périodes d'assurance.",
              variant: "info",
            },
          ],
        },
      ],
    },
    {
      id: "qui-est-concerne",
      number: "3",
      title: "Qui est concerné ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "list",
              items: [
                "Vous avez exercé une activité salariée exclusivement dans un ou plusieurs pays liés au Bénin par une convention ou un accord de coordination",
                "Vous avez eu une carrière mixte : une partie de votre carrière au Bénin, une autre dans un ou plusieurs pays conventionnés",
              ],
            },
          ],
          alerts: [
            {
              description:
                "Le pays de résidence du travailleur au moment de sa demande détermine en général l'institution chargée d'instruire et de payer le dossier.",
              variant: "primary",
            },
          ],
        },
      ],
    },
    {
      id: "prestations",
      number: "4",
      title: "Quelles prestations sont concernées ?",
      variant: "white",
      subsections: [
        {
          title: "Prestations à long terme",
          blocks: [
            {
              type: "list",
              items: ["Pensions de vieillesse", "Pensions d'invalidité", "Pensions de survivants"],
            },
          ],
        },
        {
          title: "Prestations à court terme",
          blocks: [
            {
              type: "paragraph",
              text: "Les prestations familiales peuvent être servies lorsque la famille du travailleur réside au Bénin pendant que celui-ci exerce son activité dans un pays conventionné, selon les termes de la convention applicable.",
            },
          ],
        },
        {
          title: "Exemple illustratif — liquidation par totalisation",
          blocks: [
            {
              type: "paragraph",
              text: "Un travailleur ayant cotisé 11 ans et 4 mois au Togo puis 18 ans et 10 mois au Bénin totalise 30 ans et 2 mois de périodes d'assurance entre les deux pays — suffisant pour ouvrir droit à une pension béninoise, alors qu'il n'aurait pas rempli seul cette condition. La pension théorique, calculée sur l'ensemble de la carrière, est ensuite proratisée selon la part des périodes effectuées au Bénin.",
            },
          ],
          rates: [
            {
              value: "30 ans 2 mois",
              label: "Périodes totalisées",
              description: "Somme des périodes d'assurance accomplies au Togo et au Bénin",
            },
            {
              value: "18/30",
              label: "Part béninoise",
              description: "Proportion des périodes effectuées au Bénin, utilisée pour calculer la pension effective",
            },
            {
              value: "50%",
              label: "Taux obtenu",
              description: "Taux de pension résultant de la totalisation des périodes d'assurance",
            },
          ],
          alerts: [
            {
              description:
                "Chaque caisse notifie et prend en charge la part de pension qui lui incombe ; le versement est généralement assuré par l'institution du pays où réside le bénéficiaire.",
              variant: "primary",
            },
          ],
        },
      ],
    },
  ],
  linksBox: {
    title: "Liens",
    links: [
      { label: "Pensions et allocations de vieillesse", href: "/prestations/pensions" },
      { label: "Pensions et allocations de survivants", href: "/prestations/pension-survivants" },
    ],
  },
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: coordinationContent,
};

export async function getCoordinationContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
