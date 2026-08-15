import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const pensionsContent: MetierPageContent = {
  id: "pensions",
  slug: "pensions",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Pensions et allocations de vieillesse | CNSS Bénin",
    metaDescription:
      "Conditions, pièces à fournir et montant de la pension de vieillesse, de l'allocation de vieillesse et de la pension d'invalidité versées par la CNSS du Bénin.",
  },
  banner: {
    title: "Pensions et allocations de vieillesse",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Pensions et allocations de vieillesse" }],
  },
  heroImage: {
    url: "/images/decouvrir-cnss.png",
    alt: "Un assuré accueilli au guichet pension d'une agence CNSS",
  },
  sidebarNav: [
    { id: "definition", label: "Qu'est-ce que une pension de vieillesse ?" },
    { id: "qui-beneficie", label: "Qui peut en bénéficier ?" },
    { id: "pieces-a-fournir", label: "Quelles pièces faut-il fournir ?" },
    { id: "droits", label: "À quoi avez-vous droit ?" },
    { id: "allocation-vieillesse", label: "Allocation de vieillesse" },
    { id: "pension-invalidite", label: "Pension d'invalidité" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "definition",
      number: "1",
      title: "Qu'est-ce qu'une pension de vieillesse ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "La pension de vieillesse est un revenu de remplacement qui correspond à une certaine proportion du salaire du travailleur, versé chaque mois jusqu'à son décès.",
            },
          ],
        },
      ],
    },
    {
      id: "qui-beneficie",
      number: "2",
      title: "Qui peut en bénéficier ?",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "L'assuré qui atteint l'âge de 60 ans a droit à une pension de vieillesse s'il remplit ses conditions :",
            },
            {
              type: "list",
              items: [
                "Avoir totalisé au moins 180 mois d'assurance effective à la CNSS",
                "Avoir cessé toute activité salariée",
              ],
            },
          ],
        },
        {
          title: "Départ anticipé",
          blocks: [
            {
              type: "paragraph",
              text: "Un départ anticipé est possible dès 55 ans — soit 5 ans avant l'âge légal — avec un abattement de 5% par année d'anticipation. Cet abattement disparaît définitivement une fois l'âge de 60 ans atteint.",
            },
          ],
          link: {
            label: "Simuler ma pension de vieillesse anticipée",
            href: "/simulateurs/pension-vieillesse-anticipee",
          },
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
              text: "Deux groupes de documents sont nécessaires : des formulaires à retirer directement aux guichets CNSS, et des pièces d'état civil et de carrière que vous devez fournir vous-même.",
            },
          ],
        },
        {
          title: "À retirer aux guichets de la CNSS :",
          blocks: [
            {
              type: "list",
              items: [
                "Demande de pension de vieillesse, à remplir et signer",
                "Attestation d'immatriculation (en cas de perte du livret ou de la carte d'assurance)",
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
                "Livret ou carte d'assurance",
                "Copie légalisée de l'acte de naissance (ou jugement supplétif)",
                "3 photos d'identité",
                "Photocopie d'une pièce d'identité",
                "Toute pièce justificative de carrière professionnelle",
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
              text: "Le montant de la pension dépend de deux éléments : votre salaire moyen des 5 dernières années, et votre nombre d'années de cotisation. Plus vous avez cotisé longtemps, plus votre pension est élevée.",
            },
          ],
          link: {
            label: "Simuler ma pension de vieillesse",
            href: "/simulateurs/pension",
          },
        },
        {
          alerts: [
            {
              description:
                "En cas de départ anticipé (dès 55 ans), la pension est réduite de 5% par année d'avance par rapport à 60 ans — cette réduction disparaît une fois l'âge de 60 ans atteint.",
              variant: "primary",
            },
          ],
          link: {
            label: "Simuler ma pension de vieillesse anticipée",
            href: "/simulateurs/pension-vieillesse-anticipee",
          },
        },
      ],
    },
    {
      id: "allocation-vieillesse",
      number: "5",
      title: "Allocation de vieillesse",
      variant: "tinted",
      subsections: [
        {
          title: "Qu'est-ce qu'une allocation de vieillesse ?",
          blocks: [
            {
              type: "paragraph",
              text: "L'allocation de vieillesse est octroyée à l'assuré qui a accompli au moins douze (12) mois d'assurance et qui, ayant atteint l'âge de soixante (60) ans, cesse toute activité salariée, alors qu'il ne satisfait pas à la condition de 180 mois d'assurance pour avoir droit à une pension de vieillesse.",
            },
          ],
          alerts: [
            {
              description: "Cette allocation est versée sous la forme d'un versement unique.",
              variant: "primary",
            },
          ],
        },
        {
          title: "Mode de calcul",
          blocks: [
            {
              type: "paragraph",
              text: "Le montant de l'allocation de vieillesse en versement unique est égal au produit de la rémunération mensuelle moyenne par le nombre de mois d'assurance accomplis par l'assuré.",
            },
          ],
          link: {
            label: "Simuler mon allocation de vieillesse",
            href: "/simulateurs/pension",
          },
        },
      ],
    },
    {
      id: "pension-invalidite",
      number: "6",
      title: "Pension d'invalidité",
      variant: "white",
      subsections: [
        {
          title: "Conditions",
          blocks: [
            {
              type: "paragraph",
              text: "La pension d'invalidité est attribuée à l'assuré qui, avant l'âge de la retraite, est atteint d'une invalidité réduisant considérablement sa capacité de travail et de gain. Au Bénin, la qualité de travailleur invalide est attribuée à un assuré atteint d'un taux d'incapacité au moins égal à 66%.",
            },
            {
              type: "list",
              items: [
                "Être un travailleur en activité",
                "Perdre au moins 2/3 de ses capacités physiques et intellectuelles des suites d'un accident ou d'une maladie non professionnelle",
                "Avoir totalisé au moins soixante (60) mois effectifs de cotisations sociales",
                "Avoir cotisé obligatoirement six (06) mois au cours des douze (12) derniers mois précédant le début de l'incapacité conduisant à l'invalidité",
              ],
            },
          ],
        },
        {
          title: "Quelles pièces faut-il fournir ?",
          blocks: [
            {
              type: "list",
              items: [
                "Demande de pension d'invalidité, à remplir et signer",
                "Attestation d'immatriculation (en cas de perte du livret ou de la carte d'assurance)",
                "Livret ou carte d'assurance",
                "Certificat médical d'invalidité délivré par le médecin traitant",
                "Copie légalisée de l'acte de naissance (ou jugement supplétif)",
                "3 photos d'identité",
                "Photocopie d'une pièce d'identité",
                "Toute pièce justificative de carrière professionnelle",
              ],
            },
          ],
        },
        {
          title: "Mode de calcul",
          blocks: [
            {
              type: "paragraph",
              text: "Le mode de calcul du taux de validation et de la rémunération mensuelle moyenne de la pension d'invalidité est identique à celui de la pension de vieillesse. Une période d'assurance gratuite supplémentaire est toutefois accordée, calculée sur le nombre d'années restant jusqu'à l'âge de 60 ans.",
            },
          ],
          alerts: [
            {
              description:
                "La pension d'invalidité est toujours accordée à titre temporaire : elle peut être révisée en cas d'évolution de l'état de santé, et elle est remplacée par la pension de vieillesse dès que l'assuré atteint l'âge de 60 ans.",
              variant: "info",
            },
          ],
        },
      ],
    },
  ],
  linksBox: {
    title: "Liens",
    links: [
      { label: "Coordinations", href: "/prestations/coordination" },
      {
        label: "https://cnss.bj/services/public/pension-allocation-vieillesse",
        href: "https://cnss.bj/services/public/pension-allocation-vieillesse",
      },
    ],
  },
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: pensionsContent,
};

export async function getPensionsContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
