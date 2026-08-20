/**
 * Majoration de retard (art. 27 Code de Sécurité Sociale).
 * Majoration = cotisations dues × 1,5% × nombre de mois (ou fraction de
 * mois) de retard.
 *
 * ⚠️ Hypothèse non confirmée : la date d'échéance retenue ici est le
 * **dernier jour du mois/trimestre dû lui-même** (pas de délai de grâce
 * ajouté, ex. "15 du mois suivant") — aucune source disponible au moment
 * de l'implémentation ne précise le délai de grâce exact accordé avant le
 * déclenchement de la majoration (voir `docs/Recouvrement des cotisations
 * FAQ.docx`, qui ne l'indique pas). Toute portion de mois entamée après
 * cette échéance compte pour un mois de retard complet, conformément à la
 * formule ("ou fraction de mois"). À vérifier contre le site CNSS réel —
 * si un délai de grâce existe (ex. jusqu'au 15 du mois suivant), le
 * montant calculé ici sera surestimé d'autant.
 */

export const TAUX_MAJORATION_RETARD_PAR_MOIS = 1.5;

export interface MajorationRetardResult {
  cotisationDue: number;
  moisEcheance: number;
  anneeEcheance: number;
  moisRetard: number;
  tauxApplique: number;
  montantMajoration: number;
  montantTotalDu: number;
}

export interface MajorationRetardIneligible {
  type: "inéligible";
  motif: string;
}

function dernierJourDuMois(annee: number, mois1Based: number): Date {
  return new Date(annee, mois1Based, 0);
}

/** Parse un champ "MM/YYYY" (période mensuelle due). */
export function parseMoisAnnee(value: string): { mois: number; annee: number } | null {
  const match = value.trim().match(/^(\d{1,2})\/(\d{4})$/);
  if (!match) return null;
  const mois = Number(match[1]);
  const annee = Number(match[2]);
  if (mois < 1 || mois > 12) return null;
  return { mois, annee };
}

/** Parse un champ "DD/MM/YYYY" (date de paiement effective). */
export function parseDateJJMMAAAA(value: string): Date | null {
  const match = value.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) return null;
  const jour = Number(match[1]);
  const mois = Number(match[2]);
  const annee = Number(match[3]);
  const date = new Date(annee, mois - 1, jour);
  if (date.getFullYear() !== annee || date.getMonth() !== mois - 1 || date.getDate() !== jour) return null;
  return date;
}

export function calculerMajorationRetard(
  cotisationDue: number,
  moisEcheance: number,
  anneeEcheance: number,
  datePaiement: Date,
): MajorationRetardResult | MajorationRetardIneligible {
  const dateEcheance = dernierJourDuMois(anneeEcheance, moisEcheance);

  if (datePaiement < dateEcheance) {
    return {
      type: "inéligible",
      motif: "La date de paiement renseignée est antérieure à l'échéance : aucune majoration de retard ne s'applique.",
    };
  }

  const indexEcheance = anneeEcheance * 12 + (moisEcheance - 1);
  const indexPaiement = datePaiement.getFullYear() * 12 + datePaiement.getMonth();
  const moisRetard = datePaiement <= dateEcheance ? 0 : indexPaiement - indexEcheance;
  const tauxApplique = moisRetard * TAUX_MAJORATION_RETARD_PAR_MOIS;
  const montantMajoration = Math.round(cotisationDue * (tauxApplique / 100));
  const montantTotalDu = cotisationDue + montantMajoration;

  return {
    cotisationDue,
    moisEcheance,
    anneeEcheance,
    moisRetard,
    tauxApplique,
    montantMajoration,
    montantTotalDu,
  };
}
