/**
 * Charges sociales liées à l'embauche (art. 24-25 Code de Sécurité
 * Sociale). Cotisation totale = 20 à 23% du salaire brut, répartie en 3
 * branches :
 *   - Prestations familiales : 9% du salaire brut, employeur seul
 *   - Risques professionnels : 1 à 4% selon le secteur d'activité (choisi
 *     par l'utilisateur), employeur seul
 *   - Pension : 10% du salaire brut, réparti 6,4% employeur + 3,6% travailleur
 */

export const TAUX_PRESTATIONS_FAMILIALES = 9; // % — employeur seul
export const TAUX_COTISATION_EMPLOYEUR_PENSION = 6.4; // % — part employeur de la pension
export const TAUX_COTISATION_TRAVAILLEUR_PENSION = 3.6; // % — part travailleur de la pension

export interface ChargesSocialesEmbaucheResult {
  salaireBrut: number;
  tauxRisqueProfessionnel: number;
  montantPrestationsFamiliales: number;
  montantRisquesProfessionnels: number;
  montantPensionEmployeur: number;
  montantPensionTravailleur: number;
  totalEmployeur: number;
  totalTravailleur: number;
  totalGlobal: number;
  tauxGlobal: number;
}

export function calculerChargesSocialesEmbauche(
  salaireBrut: number,
  tauxRisqueProfessionnel: number,
): ChargesSocialesEmbaucheResult {
  const montantPrestationsFamiliales = Math.round(salaireBrut * (TAUX_PRESTATIONS_FAMILIALES / 100));
  const montantRisquesProfessionnels = Math.round(salaireBrut * (tauxRisqueProfessionnel / 100));
  const montantPensionEmployeur = Math.round(salaireBrut * (TAUX_COTISATION_EMPLOYEUR_PENSION / 100));
  const montantPensionTravailleur = Math.round(salaireBrut * (TAUX_COTISATION_TRAVAILLEUR_PENSION / 100));

  const totalEmployeur = montantPrestationsFamiliales + montantRisquesProfessionnels + montantPensionEmployeur;
  const totalTravailleur = montantPensionTravailleur;
  const totalGlobal = totalEmployeur + totalTravailleur;
  const tauxGlobal =
    TAUX_PRESTATIONS_FAMILIALES + tauxRisqueProfessionnel + TAUX_COTISATION_EMPLOYEUR_PENSION + TAUX_COTISATION_TRAVAILLEUR_PENSION;

  return {
    salaireBrut,
    tauxRisqueProfessionnel,
    montantPrestationsFamiliales,
    montantRisquesProfessionnels,
    montantPensionEmployeur,
    montantPensionTravailleur,
    totalEmployeur,
    totalTravailleur,
    totalGlobal,
    tauxGlobal,
  };
}
