import type { MetierPageContent } from "@/types/metier-page";

const declarationPaiementCotisationsContent: MetierPageContent = {
  id: "declaration-paiement-cotisations",
  slug: "declaration-paiement-cotisations",
  updatedAt: "2026-08-13",
  seo: {
    metaTitle: "Déclaration et paiement des cotisations | CNSS Bénin",
    metaDescription:
      "Fréquence de paiement, taux de cotisation, modalités de déclaration et majoration de retard applicables aux employeurs auprès de la CNSS.",
  },
  banner: {
    title: "Déclaration et paiement des cotisations",
    breadcrumbs: [
      { label: "Accueil", href: "/" },
      { label: "Déclaration et paiement des cotisations" },
    ],
  },
  heroImage: {
    url: "/images/decouvrir-cnss.png",
    alt: "Une employeuse consulte sa déclaration de cotisations sur son ordinateur",
  },
  sidebarNav: [
    { id: "obligations-legales", label: "Obligations légales" },
    { id: "frequence-taux-cotisation", label: "Fréquence de paiement et taux de cotisation" },
    { id: "modalites-paiement", label: "Modalités de paiement selon le type d'entreprise" },
    { id: "majoration-retard", label: "Majoration de retard" },
  ],
  helpCard: {
    title: "Besoin d'aide ?",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  sections: [
    {
      id: "obligations-legales",
      number: "1",
      title: "Obligations légales",
      variant: "tinted",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "L'employeur est débiteur envers la Caisse de la cotisation totale, y compris la part mise à la charge du travailleur, qu'il précompte sur sa rémunération à chaque paie.",
            },
            {
              type: "paragraph",
              text: "Aucun travailleur n'a le droit de s'opposer au prélèvement de sa cotisation. Les cotisations sont portables et non quérables : c'est à l'employeur de les verser, la Caisse ne les réclame pas activement.",
            },
          ],
        },
      ],
    },
    {
      id: "frequence-taux-cotisation",
      number: "2",
      title: "Fréquence de paiement et taux de cotisation",
      variant: "white",
      subsections: [
        {
          blocks: [
            {
              type: "paragraph",
              text: "Le versement des cotisations est mensuel pour tous les employeurs, quelle que soit la taille de l'entreprise.",
            },
          ],
        },
        {
          alerts: [
            {
              title: "Date limite de paiement",
              description:
                "Les cotisations sont versées par l'employeur à la CNSS au plus tard le 10 du mois suivant celui auquel se rapporte la déclaration. En cas de cessation d'activité ou de cession de l'entreprise, les cotisations sont immédiatement exigibles.",
              variant: "warning",
            },
          ],
        },
        {
          title: "Taux de cotisation en vigueur",
          rates: [
            {
              value: "9%",
              label: "Prestations familiales",
              description: "À la charge exclusive de l'employeur.",
            },
            {
              value: "1 - 4%",
              label: "Risques professionnels",
              description: "Selon le secteur, à la charge exclusive de l'employeur.",
            },
            {
              value: "10%",
              label: "Pensions",
              description: "6,4% employeur / 3,6% travailleur.",
            },
          ],
          blocks: [
            {
              type: "paragraph",
              text: "NB : L'assiette de cotisation est l'ensemble des rémunérations perçues par le travailleur y compris les primes indemnités et autre avantages en nature et / ou en espèces. En ce qui concerne les apprentis et les élèves des écoles professionnelles, seule la cotisation des Risques Professionnels est versée.",
            },
          ],
        },
      ],
    },
    {
      id: "modalites-paiement",
      number: "3",
      title: "Modalités de paiement selon le type d'entreprise",
      variant: "tinted",
      subsections: [
        {
          title: "Déclaration unique en ligne — DGI/CNSS",
          blocks: [
            {
              type: "paragraph",
              text: "Pour les entreprises éligibles aux télé-procédures fiscales, à savoir :",
            },
            {
              type: "list",
              items: [
                "les entreprises relevant de la Direction des Grandes Entreprises (DGE)",
                "les entreprises relevant des Centres des Impôts des Moyennes Entreprises (CIME)",
                "les entreprises relevant des Centres des Impôts des Petites Entreprises (CIPE) de Cotonou, Abomey-Calavi et Ouidah",
              ],
            },
            {
              type: "paragraph",
              text: "Un formulaire unique DGI-CNSS permet de déclarer et payer en une seule opération impôts sur salaires et cotisations sociales, via eservices.impots.bj, avant le 10 du mois suivant.",
            },
          ],
          link: {
            label: "Voir la procédure de télédéclaration sur e-services",
            href: "https://e-services.impots.bj/",
          },
        },
        {
          title: "Autres entreprises — dépôt physique",
          blocks: [
            {
              type: "paragraph",
              text: "Pour les employeurs hors télé-procédures :",
            },
            {
              type: "list",
              items: [
                "l'employeur se rend au siège ou dans l'une des agences de la CNSS et remplit le formulaire de déclaration des salaires et des cotisations",
                "déclaration nominative, à fournir trimestriellement",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "majoration-retard",
      number: "4",
      title: "Majoration de retard",
      variant: "white",
      subsections: [
        {
          alerts: [
            {
              title: "Majoration de retard",
              description:
                "« Lorsque les cotisations dues par un employeur n'ont pas été acquittées dans le délai prescrit, il est appliqué une majoration de retard dont le taux et le mode de calcul sont fixés par décret pris en Conseil des Ministres. »",
              variant: "info",
            },
          ],
        },
        {
          alerts: [
            {
              title: "Taux appliqué",
              description:
                "1,5% par mois ou fraction de mois de retard, payable en même temps que les cotisations.",
              variant: "warning",
            },
          ],
        },
        {
          title: "Recours gracieux",
          blocks: [
            {
              type: "paragraph",
              text: "Les employeurs peuvent, en cas de force majeure ou de bonne foi dûment prouvée, formuler auprès du Conseil d'Administration de la Caisse une demande gracieuse en réduction des majorations de retard.",
            },
            {
              type: "paragraph",
              text: "La requête n'est recevable qu'après règlement total des cotisations principales ayant généré la majoration.",
            },
          ],
        },
      ],
    },
  ],
  linksBox: {
    title: "Liens",
    links: [{ label: "https://e-services.impots.bj/", href: "https://e-services.impots.bj/" }],
  },
};

export async function getDeclarationPaiementCotisationsContent(): Promise<MetierPageContent> {
  return declarationPaiementCotisationsContent;
}
