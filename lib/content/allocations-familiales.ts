import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const allocationsFamilialesContent: MetierPageContent = {
  id: "allocations-familiales",
  slug: "allocations-familiales",
  updatedAt: "2026-08-13",
  seo: {
    metaTitle: "Allocations familiales | CNSS Bénin",
    metaDescription:
      "Conditions, pièces à fournir et montant des allocations familiales versées par la CNSS aux travailleurs salariés du Bénin.",
  },
  banner: {
    title: "Allocations familiales",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Allocations familiales" }],
  },
  heroImage: {
    url: "/images/decouvrir-cnss.png",
    alt: "Une famille béninoise réunie autour d'un repas",
  },
  sidebarNav: [
    { id: "definition", label: "Qu'est-ce que les allocations familiales ?" },
    { id: "conditions", label: "Quelles sont les conditions à remplir pour en bénéficier ?" },
    { id: "pieces-a-fournir", label: "Quelles pièces faut-il fournir ?" },
    { id: "droits", label: "À quoi avez-vous droit ?" },
    { id: "maintien-droit", label: "Comment maintenir votre droit ?" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "definition",
      number: "1",
      title: "Qu'est-ce que les allocations familiales ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Les allocations familiales ont pour but d'apporter un complément de ressources aux familles, d'encourager la surveillance médicale systématique des enfants et la fréquentation scolaire. Elles aident les familles à appliquer à leurs enfants les conseils d'hygiène et d'éducation qui leur sont donnés par les personnes compétentes.",
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
                "Être travailleur salarié",
                "Être affilié à la CNSS",
                "Justifier de 6 mois de cotisations consécutives à la date de la 1ère demande",
                "Avoir des enfants à charge âgés de 0 à 21 ans, se trouvant dans l'une de ces situations :",
                "Il est placé en apprentissage (doit être âgé de moins 14 ans)",
                "Il poursuit ses études (scolarité)",
                "Il est, par suite d'infirmité ou de maladie incurable, dans l'impossibilité de se livrer à un travail salarié",
              ],
            },
          ],
          alerts: [
            {
              description: "Un seul des deux parents peut être bénéficiaire, pas les deux à la fois.",
              variant: "info",
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
              text: "Deux groupes de documents sont nécessaires : des formulaires à retirer directement aux guichets de la CNSS, et des pièces d'état civil que vous devez fournir vous-même.",
            },
          ],
        },
        {
          title: "À retirer aux guichets de la CNSS :",
          blocks: [
            {
              type: "list",
              items: [
                "Demande de prestations familiales, à remplir et signer",
                "Certificat de travail chaque trimestre",
                "Certificat de vie et de charge de famille (au cours du premier trimestre), signé par une autorité d'état-civil",
                "Certificat de scolarité pour chaque enfant âgé d'au moins 6 ans (chaque début d'année scolaire), signé par l'établissement",
                "Engagement de paiement par mobile money",
              ],
            },
          ],
        },
        {
          title: "À fournir par l'assuré(e) :",
          blocks: [
            {
              type: "list",
              items: [
                "2 photos d'identité du demandeur",
                "Copie de la carte d'assurance de l'assuré",
                "Copies légalisées des actes de naissance de l'assuré, son ou ses conjoint(s) et de chacun des enfants à charge",
                "Copie légalisée de l'acte de mariage (facultatif)",
                "Certificat d'apprentissage pour chaque enfant en apprentissage âgé de moins 14 ans (chaque début d'année)",
                "Certificat médical pour chaque enfant infirme ou atteint de maladie incurable en âge scolaire",
                "Certificat médical de visite périodique pour chaque enfant âgé de moins de 6 ans (les visites peuvent s'effectuer dans les CMS de la CNSS auprès des Agences Régionales)",
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
          alerts: [
            {
              description:
                "Les allocations familiales se paient à terme échu et par trimestre au taux de 2500 FCFA par mois et par enfant. Le paiement s'effectue par virement ou par mobile money.",
              variant: "info",
            },
          ],
        },
        {
          blocks: [
            {
              type: "paragraph",
              text: "Le nombre d'enfants ouvrant droit aux allocations familiales est fixé à 6 au maximum, mais remplaçable progressivement en cas de majorité ou décès",
            },
          ],
        },
        {
          alerts: [
            {
              description:
                "En cas de retard dans la remise de vos pièces, les trimestres non réclamés restent dus : vous pouvez percevoir jusqu'à 4 trimestres en retard cumulés en une seule fois.",
              variant: "primary",
            },
          ],
        },
      ],
    },
    {
      id: "maintien-droit",
      number: "5",
      title: "Comment maintenir votre droit ?",
      variant: "tinted",
      subsections: [
        {
          title: "Conditions de maintien",
          blocks: [
            {
              type: "list",
              items: [
                "Justifier d'une activité salariée d'au moins 18 jours ou 120 heures dans le mois, pour un salaire au moins égal au SMIG",
                "Fournir chaque année les pièces périodiques : certificat de vie et de charge de famille, certificats de scolarité (6-21 ans), visites médicales (0-6 ans), certificats d'apprentissage (14 ans et +)",
                "Déclarer à la CNSS tout événement nouveau survenu dans la famille (naissance, décès)",
              ],
            },
          ],
        },
        {
          alerts: [
            {
              title: "Cas particulier – Décès de l'allocataire",
              description:
                "En cas de décès de l'allocataire, les allocations continuent d'être versées tant que la pension de survivant orphelin n'est pas liquidée.",
              variant: "primary",
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
  fr: allocationsFamilialesContent,
};

export async function getAllocationsFamilialesContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
