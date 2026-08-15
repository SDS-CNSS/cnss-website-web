import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const congeMaterniteContent: MetierPageContent = {
  id: "conge-maternite",
  slug: "conge-maternite",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Indemnités de congé de maternité | CNSS Bénin",
    metaDescription:
      "Conditions, pièces à fournir et montant de l'indemnité de congé de maternité versée par la CNSS aux femmes salariées du Bénin.",
  },
  banner: {
    title: "Indemnités de congé de maternité",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Indemnités de congé de maternité" }],
  },
  sidebarNav: [
    { id: "definition", label: "Qu'est-ce que l'indemnité de congé de maternité ?" },
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
      title: "Qu'est-ce que l'indemnité de congé de maternité ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "L'indemnité de congé de maternité constitue une indemnité journalière destinée à compenser la perte de salaire pendant la durée du congé de maternité. Elle est due à la femme salariée en congé de maternité.",
            },
            {
              type: "paragraph",
              text: "La durée du congé de maternité est de quatorze (14) semaines, dont six (06) avant la date présumée de l'accouchement et huit (08) après l'accouchement. Cette durée peut être prolongée jusqu'à quatre (04) semaines au plus, en cas de complications liées à l'accouchement.",
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
              type: "list",
              items: [
                "Être femme salariée",
                "Être déclarée à la CNSS",
                "Être en état de grossesse",
                "Suspendre effectivement l'activité professionnelle",
                "Que l'employeur soit à jour du versement des cotisations sociales",
              ],
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
              text: "L'indemnité journalière est versée par l'employeur à la salariée durant son congé de maternité. Pour se faire rembourser par la CNSS, l'employeur doit constituer un dossier de demande de remboursement comprenant les pièces suivantes :",
            },
            {
              type: "list",
              items: [
                "Demande d'indemnité de congé de maternité (à retirer à la CNSS)",
                "Un certificat de travail qui justifie la qualité de travailleur salarié de la femme",
                "Le titre de congé de maternité précisant le début du congé",
                "Un certificat de cessation de travail délivré par l'employeur",
                "Un certificat d'examen prénatal ou certificat de grossesse délivré par un médecin ou une sage-femme",
                "Un certificat d'accouchement délivré par un médecin ou une sage-femme",
                "Un certificat de reprise de service de la femme salariée",
                "Une copie des fiches de paie de la femme salariée de la période de suspension",
              ],
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
              text: "L'indemnité journalière de congé de maternité est égale à la totalité du salaire perçu par la femme salariée au moment de la suspension de travail. Elle est versée par l'employeur durant toute la durée du congé de maternité.",
            },
          ],
          alerts: [
            {
              description: "La CNSS rembourse cette indemnité à l'employeur dans la limite de 50%.",
              variant: "info",
            },
          ],
        },
        {
          blocks: [
            {
              type: "paragraph",
              text: "Délai de prescription pour la demande de remboursement : 6 mois après la date de reprise du congé de maternité.",
            },
          ],
        },
      ],
    },
  ],
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: congeMaterniteContent,
};

export async function getCongeMaterniteContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
