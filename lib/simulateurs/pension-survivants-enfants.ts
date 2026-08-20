/**
 * Pension de survivants — cas des enfants orphelins (art. 96 Code de
 * Sécurité Sociale). Règles et décisions de modélisation détaillées dans
 * CLAUDE.md (repo cnss-website-cms, section 5ter).
 */

export const TAUX_ORPHELIN_UNIQUE_UN_PARENT = 20; // % — orphelin unique de père OU de mère
export const TAUX_ORPHELIN_UNIQUE_DEUX_PARENTS = 30; // % — orphelin unique de père ET de mère
export const TAUX_PENSION_ORPHELINS_TOTAL = 40; // % — enveloppe totale, plusieurs orphelins
export const AGE_LIMITE_ORPHELIN_ANS = 21; // seuil d'âge du champ "nombre d'orphelins mineurs" (cas "plusieurs orphelins")

export interface PensionSurvivantsEnfantsResult {
  pensionAssure: number;
  tauxApplique: number;
  montantTotal: number;
  nombreOrphelinsPrisEnCompte: number;
}

export function calculerPensionSurvivantsEnfantsUnique(
  pensionAssure: number,
  orphelinPereEtMere: boolean,
): PensionSurvivantsEnfantsResult {
  const tauxApplique = orphelinPereEtMere
    ? TAUX_ORPHELIN_UNIQUE_DEUX_PARENTS
    : TAUX_ORPHELIN_UNIQUE_UN_PARENT;
  const montantTotal = Math.round(pensionAssure * (tauxApplique / 100));

  return {
    pensionAssure,
    tauxApplique,
    montantTotal,
    nombreOrphelinsPrisEnCompte: 1,
  };
}

/**
 * `nombreOrphelinsMineurs` doit déjà être filtré en amont aux orphelins de
 * moins de AGE_LIMITE_ORPHELIN_ANS (21) ans — cette fonction ne fait pas ce
 * filtrage elle-même, le formulaire ne collectant pas l'âge par enfant.
 * `nombreOrphelinsPrisEnCompte` doit être ≤ `nombreOrphelinsMineurs`.
 *
 * Le montant du groupe se calcule en une seule fois — enveloppe × (pris en
 * compte / mineurs) — puis arrondi à la centaine de FCFA **supérieure**.
 * Il ne faut PAS calculer une part par enfant arrondie puis la multiplier
 * par le nombre pris en compte : ça compose l'arrondi et sur-estime le
 * total dès que le nombre d'enfants grandit (vérifié contre le site CNSS
 * Bénin en production — ex. pension 346 000, 32 mineurs, 15 pris en compte
 * → 64 900 FCFA attendu ; part-par-enfant-puis-×15 donnerait 66 000, faux).
 */
export function calculerPensionSurvivantsEnfantsMultiples(
  pensionAssure: number,
  nombreOrphelinsMineurs: number,
  nombreOrphelinsPrisEnCompte: number,
): PensionSurvivantsEnfantsResult {
  const enveloppeTotale = pensionAssure * (TAUX_PENSION_ORPHELINS_TOTAL / 100);
  const montantTotal =
    Math.ceil(((enveloppeTotale * nombreOrphelinsPrisEnCompte) / nombreOrphelinsMineurs) / 100) * 100;

  return {
    pensionAssure,
    tauxApplique: TAUX_PENSION_ORPHELINS_TOTAL,
    montantTotal,
    nombreOrphelinsPrisEnCompte,
  };
}
