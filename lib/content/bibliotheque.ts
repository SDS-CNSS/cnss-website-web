export interface DocumentItem {
  title: string;
  tags: string[];
  fileType: string;
  fileSize: string;
  viewHref: string;
  downloadHref: string;
}

export interface BibliothequeContent {
  documents: DocumentItem[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

const documents: DocumentItem[] = [
  {
    title: "Demande de prestations familiales",
    tags: ["Formulaire de demande", "Allocations familiales"],
    fileType: "PDF",
    fileSize: "1.24 Mo",
    viewHref: "/documents/demande-prestations-familiales.pdf",
    downloadHref: "/documents/demande-prestations-familiales.pdf",
  },
  {
    title: "Attestation de non-paiement des AF",
    tags: ["Attestation", "Allocations familiales"],
    fileType: "PDF",
    fileSize: "1.24 Mo",
    viewHref: "/documents/attestation-non-paiement-af.pdf",
    downloadHref: "/documents/attestation-non-paiement-af.pdf",
  },
  {
    title: "Demande de transfert de dossier allocataire",
    tags: ["Formulaire de demande", "Allocations familiales"],
    fileType: "PDF",
    fileSize: "1.24 Mo",
    viewHref: "/documents/demande-transfert-dossier-allocataire.pdf",
    downloadHref: "/documents/demande-transfert-dossier-allocataire.pdf",
  },
  {
    title: "Demande d'indemnités de congés maternité",
    tags: ["Indemnités de congés de maternité", "Formulaire de demande"],
    fileType: "PDF",
    fileSize: "1.24 Mo",
    viewHref: "/documents/demande-indemnites-conges-maternite.pdf",
    downloadHref: "/documents/demande-indemnites-conges-maternite.pdf",
  },
  {
    title: "Déclaration d'accident du travail",
    tags: ["Accident du travail", "Formulaire de demande"],
    fileType: "PDF",
    fileSize: "1.24 Mo",
    viewHref: "/documents/declaration-accident-travail.pdf",
    downloadHref: "/documents/declaration-accident-travail.pdf",
  },
  {
    title: "Demande de pension de vieillesse",
    tags: ["Pensions", "Formulaire de demande"],
    fileType: "PDF",
    fileSize: "1.24 Mo",
    viewHref: "/documents/demande-pension-vieillesse.pdf",
    downloadHref: "/documents/demande-pension-vieillesse.pdf",
  },
];

export async function getBibliothequeContent(): Promise<BibliothequeContent> {
  return {
    documents,
    totalCount: 45,
    totalPages: 4,
    currentPage: 1,
  };
}
