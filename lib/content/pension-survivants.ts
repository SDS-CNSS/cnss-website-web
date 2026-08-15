import type { Locale } from "@/i18n/routing";
import type { MetierPageContent } from "@/types/metier-page";

const pensionSurvivantsContent: MetierPageContent = {
  id: "pension-survivants",
  slug: "pension-survivants",
  updatedAt: "2026-08-14",
  seo: {
    metaTitle: "Pensions et allocations de survivants | CNSS Bénin",
    metaDescription:
      "Conditions, pièces à fournir et montant des pensions et allocations de survivants versées par la CNSS aux ayants droit d'un assuré décédé du Bénin.",
  },
  banner: {
    title: "Pensions et allocations de survivants",
    breadcrumbs: [{ label: "Accueil", href: "/" }, { label: "Pensions et allocations de survivants" }],
  },
  heroImage: {
    url: "/images/decouvrir-cnss.png",
    alt: "Une famille béninoise accompagnée par un agent de la CNSS",
  },
  sidebarNav: [
    { id: "definition", label: "Qu'est-ce que la pension de survivants ?" },
    { id: "qui-beneficie", label: "Qui peut en bénéficier ?" },
    { id: "pieces-a-fournir", label: "Quelles pièces faut-il fournir ?" },
    { id: "droits", label: "À quoi avez-vous droit ?" },
    { id: "allocation-survivants", label: "Allocation de survivants" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "definition",
      number: "1",
      title: "Qu'est-ce que la pension de survivants ?",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Le décès du soutien de famille se définit comme la perte des moyens de subsistance subie par les personnes à sa charge. Les prestations attribuées dans ce cas sont les pensions de survivants, garanties aux ayants droit d'un bénéficiaire de pension décédé, ou d'un assuré décédé en activité remplissant les conditions pour prétendre à une pension d'invalidité ou justifiant d'au moins 180 mois d'assurance.",
            },
            {
              type: "paragraph",
              text: "Il existe trois catégories de survivants :",
            },
            {
              type: "list",
              items: ["Le conjoint survivant (veuve ou veuf)", "Les enfants à charge", "Les ascendants"],
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
          title: "Conjoint survivant",
          blocks: [
            {
              type: "paragraph",
              text: "Le conjoint survivant n'est considéré comme ayant droit que lorsque le mariage avec le défunt a été légalement contracté et inscrit à l'état civil au moins un an avant le décès du soutien de famille. Toutefois, un mariage de moins d'un an est accepté si un enfant est issu de l'union, ou si la conjointe est en état de grossesse.",
            },
            {
              type: "paragraph",
              text: "Le veuf doit en outre être invalide, ou avoir été à la charge de son épouse salariée décédée.",
            },
          ],
          link: {
            label: "Simuler la pension de survivants (cas des conjoints)",
            href: "/simulateurs/pension-survivants-conjoints",
          },
        },
        {
          title: "Enfants à charge",
          blocks: [
            {
              type: "paragraph",
              text: "Il s'agit des enfants de l'assuré décédé, âgés de moins de 21 ans, remplissant les conditions exigées pour l'ouverture du droit aux prestations familiales.",
            },
          ],
          link: {
            label: "Simuler la pension de survivants (cas des enfants)",
            href: "/simulateurs/pension-survivants-enfants",
          },
        },
        {
          title: "Ascendants",
          blocks: [
            {
              type: "paragraph",
              text: "Être un ascendant direct de l'assuré décédé qui, à la date de son décès, n'a ni époux ni enfant.",
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
          title: "À retirer aux guichets de la CNSS :",
          blocks: [
            {
              type: "list",
              items: ["La demande de pension de survivant, à remplir et signer"],
            },
          ],
        },
        {
          title: "À fournir par le conjoint survivant :",
          blocks: [
            {
              type: "list",
              items: [
                "Acte de décès du pensionné ou de l'assuré",
                "Copie légalisée de l'acte de naissance (ou jugement supplétif) du demandeur",
                "Copie légalisée de l'acte de mariage",
                "Certificat de non-divorce, de non-remariage, de non-séparation de corps et de non-concubinage notoire",
                "3 photos d'identité",
                "Photocopie d'une pièce d'identité",
                "Si l'assuré était encore en activité (non pensionné) : livret ou carte d'assurance (ou attestation d'immatriculation) et toute pièce justificative de sa carrière professionnelle",
              ],
            },
          ],
        },
        {
          title: "À fournir par les orphelins (via leur tuteur) :",
          blocks: [
            {
              type: "list",
              items: [
                "Acte de décès du pensionné ou de l'assuré",
                "Copie légalisée de l'acte de naissance (ou jugement supplétif) du tuteur",
                "Une ordonnance du tribunal désignant le tuteur des enfants, ou une attestation de garde délivrée par un centre de promotion sociale",
                "Les actes de naissance des enfants",
                "Un certificat de vie et de charge de famille",
                "Les certificats de scolarité, d'apprentissage ou d'infirmité des enfants",
                "3 photos d'identité",
                "Photocopie d'une pièce d'identité",
                "Si l'assuré était encore en activité (non pensionné) : livret ou carte d'assurance (ou attestation d'immatriculation) et toute pièce justificative de sa carrière professionnelle",
              ],
            },
          ],
          alerts: [
            {
              description:
                "Lorsque la veuve ou le veuf est aussi le tuteur des orphelins, la pension de survivant orphelin devient une majoration de sa propre pension de survivant : seules les pièces relatives aux enfants sont alors à compléter en plus.",
              variant: "primary",
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
              text: "Les pensions de survivant sont calculées en pourcentage du montant de la pension de vieillesse ou d'invalidité que percevait ou qu'aurait dû percevoir le soutien de famille au moment de son décès :",
            },
            {
              type: "list",
              items: [
                "40% pour le conjoint survivant (veuve ou veuf) — partagé à parts égales entre les veuves si elles sont plusieurs",
                "20% pour chaque orphelin de père ou de mère",
                "30% pour chaque orphelin de père et de mère",
              ],
            },
          ],
        },
        {
          alerts: [
            {
              description:
                "L'ensemble des pensions de survivants ne peut excéder 80% de la pension du soutien de famille décédé. En cas de dépassement, le montant de chaque pension est réduit proportionnellement.",
              variant: "primary",
            },
          ],
        },
        {
          alerts: [
            {
              description:
                "La pension prend effet le premier jour du mois suivant le décès, à condition que le dossier soit déposé à la CNSS dans les six (06) mois qui suivent le décès du soutien de famille.",
              variant: "info",
            },
          ],
        },
      ],
    },
    {
      id: "allocation-survivants",
      number: "5",
      title: "Allocation de survivants",
      variant: "tinted",
      subsections: [
        {
          title: "Qu'est-ce que l'allocation de survivants ?",
          blocks: [
            {
              type: "paragraph",
              text: "Lorsque l'assuré décédé n'avait pas atteint les 180 mois d'assurance requis pour la pension de vieillesse, mais totalisait au moins six (06) mois d'assurance, ses survivants ont droit à une allocation de survivants, versée en une seule fois.",
            },
          ],
        },
        {
          title: "Répartition",
          blocks: [
            {
              type: "list",
              items: [
                "50% pour le veuf ou la (les) veuve(s), 50% pour les orphelins",
                "En l'absence d'orphelin, les 100% reviennent aux veuves, à parts égales",
                "En l'absence de conjoint, les 100% reviennent aux orphelins",
                "En l'absence de conjoint et d'orphelins, les 100% reviennent aux ascendants",
              ],
            },
          ],
          link: {
            label: "Simuler l'allocation de survivants",
            href: "/simulateurs/allocation-survivants",
          },
        },
      ],
    },
  ],
  linksBox: {
    title: "Liens",
    links: [
      { label: "Allocation de remariage", href: "/prestations/allocation-remariage" },
      { label: "Pensions et allocations de vieillesse", href: "/prestations/pensions" },
    ],
  },
};

const contentByLocale: Record<Locale, MetierPageContent> = {
  fr: pensionSurvivantsContent,
};

export async function getPensionSurvivantsContent(locale: string): Promise<MetierPageContent> {
  return contentByLocale[locale as Locale] ?? contentByLocale.fr;
}
