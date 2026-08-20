/**
 * Formules de calcul de la pension/allocation de vieillesse CNSS — logique
 * métier fournie par la maîtrise d'ouvrage. Vit ici (Next.js), pas dans
 * Strapi : Strapi ne porte que le contenu éditorial et, à terme, les
 * paramètres réglementaires (voir CLAUDE.md section 4). Les constantes
 * ci-dessous sont pour l'instant en dur.
 *
 * Deux issues possibles selon la durée d'assurance :
 *
 * 1. Pension (≥ 180 mois d'assurance) — versement mensuel récurrent.
 *    Exemple de référence : RMM 50 000, 270 mois (= 180 + 90) :
 *      - 180 premiers mois → 30%
 *      - 90 mois restants → 90 ÷ 12 = 7 années complètes → 7 × 2% = 14%
 *      - Taux total : 30% + 14% = 44% → pension = 50 000 × 44% = 22 000 FCFA/mois
 *    Départ anticipé à 58 ans (âge légal 60) :
 *      - n = 60 − 58 = 2 ans → abattement = 2 × 5% = 10%
 *      - Pension anticipée = 22 000 − (22 000 × 10%) = 19 800 FCFA/mois
 *
 * 2. Allocation de vieillesse (< 180 mois d'assurance, ≥ 12 mois) — versement
 *    unique. Montant = RMM × nombre de périodes de 12 mois d'assurance
 *    accomplies (années incomplètes ignorées, mêmes règles d'arrondi que pour
 *    la pension). Le texte réglementaire conditionne cette allocation à un
 *    départ à 60 ans révolus ; les deux simulateurs (normal et anticipé)
 *    exposent malgré tout ce montant comme résultat informatif dans tous les
 *    cas où la durée le permet — y compris pour un départ anticipé — plutôt
 *    que de bloquer l'affichage sur ce seul critère d'âge.
 *
 * En dessous de 12 mois d'assurance : ni pension ni allocation (aucune
 * formule ne s'applique).
 */

export const DUREE_MIN_ASSURANCE_PENSION_MOIS = 180; // 15 ans — seuil pension vs allocation
export const DUREE_MIN_ASSURANCE_ALLOCATION_MOIS = 12; // condition minimale pour l'allocation
export const TAUX_BASE_PENSION = 30; // % pour les 180 premiers mois
export const TAUX_PAR_ANNEE_SUPPLEMENTAIRE = 2; // % par année complète au-delà du minimum
export const AGE_LEGAL_DEPART = 60; // âge requis pour la pension normale ET pour l'allocation
export const TAUX_ABATTEMENT_ANTICIPATION_PAR_AN = 5; // % par année d'anticipation

export interface PensionResult {
  type: "pension";
  moisAssurance: number;
  anneesSupplementairesCompletes: number;
  tauxBase: number;
  tauxSupplementaire: number;
  tauxTotal: number;
  montantMensuel: number;
}

export interface AllocationResult {
  type: "allocation";
  moisAssurance: number;
  anneesCompletes: number;
  montant: number;
}

export interface IneligibleResult {
  type: "inéligible";
  moisAssurance: number;
  motif: string;
}

export type PensionCalculResult = PensionResult | AllocationResult | IneligibleResult;

function calculerPension(rmm: number, moisAssurance: number): PensionResult {
  // Seules les années complètes au-delà du minimum comptent (90 mois → 7 ans,
  // pas 7,5 — les 6 mois restants ne donnent pas de taux additionnel).
  const moisSupplementaires = moisAssurance - DUREE_MIN_ASSURANCE_PENSION_MOIS;
  const anneesSupplementairesCompletes = Math.floor(moisSupplementaires / 12);
  const tauxSupplementaire = anneesSupplementairesCompletes * TAUX_PAR_ANNEE_SUPPLEMENTAIRE;
  const tauxTotal = TAUX_BASE_PENSION + tauxSupplementaire;
  const montantMensuel = Math.round(rmm * (tauxTotal / 100));

  return {
    type: "pension",
    moisAssurance,
    anneesSupplementairesCompletes,
    tauxBase: TAUX_BASE_PENSION,
    tauxSupplementaire,
    tauxTotal,
    montantMensuel,
  };
}

export function calculerPensionOuAllocation(rmm: number, moisAssurance: number): PensionCalculResult {
  if (moisAssurance >= DUREE_MIN_ASSURANCE_PENSION_MOIS) {
    return calculerPension(rmm, moisAssurance);
  }

  if (moisAssurance < DUREE_MIN_ASSURANCE_ALLOCATION_MOIS) {
    return {
      type: "inéligible",
      moisAssurance,
      motif: `L'allocation de vieillesse requiert au moins ${DUREE_MIN_ASSURANCE_ALLOCATION_MOIS} mois d'assurance. Avec ${moisAssurance} mois, vous n'êtes éligible ni à une pension ni à une allocation de vieillesse.`,
    };
  }

  const anneesCompletes = Math.floor(moisAssurance / 12);
  return {
    type: "allocation",
    moisAssurance,
    anneesCompletes,
    montant: rmm * anneesCompletes,
  };
}

export interface PensionAnticipeeResult extends PensionResult {
  ageDepart: number;
  anneesAnticipation: number;
  tauxAbattement: number;
  montantAbattement: number;
  montantMensuelAnticipe: number;
}

export type PensionAnticipeeCalculResult = PensionAnticipeeResult | IneligibleResult;

/**
 * Contrairement à `calculerPensionOuAllocation` (simulateur "Pension et
 * allocation de vieillesse" normal), ce simulateur ne retombe jamais sur
 * l'allocation de vieillesse en dessous de 180 mois — confirmé contre le
 * site CNSS Bénin en production : sous 180 mois, la page anticipée affiche
 * un message bloquant, pas un montant d'allocation. L'abattement pour
 * anticipation n'a de sens que pour une pension mensuelle récurrente, pas
 * pour un versement unique.
 */
export function calculerPensionAnticipee(
  rmm: number,
  moisAssurance: number,
  ageDepart: number,
): PensionAnticipeeCalculResult {
  if (moisAssurance < DUREE_MIN_ASSURANCE_PENSION_MOIS) {
    return {
      type: "inéligible",
      moisAssurance,
      motif: `Le nombre de mois d'assurance doit être supérieur ou égale à ${DUREE_MIN_ASSURANCE_PENSION_MOIS} mois.`,
    };
  }

  const base = calculerPension(rmm, moisAssurance);
  const anneesAnticipation = Math.max(0, AGE_LEGAL_DEPART - ageDepart);
  const tauxAbattement = anneesAnticipation * TAUX_ABATTEMENT_ANTICIPATION_PAR_AN;
  const montantAbattement = Math.round(base.montantMensuel * (tauxAbattement / 100));
  const montantMensuelAnticipe = base.montantMensuel - montantAbattement;

  return {
    ...base,
    ageDepart,
    anneesAnticipation,
    tauxAbattement,
    montantAbattement,
    montantMensuelAnticipe,
  };
}
