"use client";

import { useState } from "react";
import { SimulateurForm } from "@/components/simulateur/SimulateurForm";
import { SimulateurResultCard } from "@/components/simulateur/SimulateurResultCard";
import { formatFCFA } from "@/lib/format";
import {
  calculerChargesSocialesEmbauche,
  type ChargesSocialesEmbaucheResult,
} from "@/lib/simulateurs/charges-sociales-embauche";
import type { SimulateurFieldContent, SimulateurInfoBoxContent } from "@/types/simulateur";

type ChargesSocialesEmbaucheFormProps = {
  title: string;
  infoBox: SimulateurInfoBoxContent;
  fields: SimulateurFieldContent[];
  submitLabel: string;
  disclaimer: string;
};

export function ChargesSocialesEmbaucheForm({
  title,
  infoBox,
  fields,
  submitLabel,
  disclaimer,
}: ChargesSocialesEmbaucheFormProps) {
  const [result, setResult] = useState<ChargesSocialesEmbaucheResult | null>(null);

  function handleCalculate(values: Record<string, string>) {
    const salaireBrut = Number(values.salaire_brut);
    const tauxRisque = Number((values.taux_risque_secteur_activite || "").replace("%", ""));

    if (
      !Number.isFinite(salaireBrut) ||
      salaireBrut <= 0 ||
      !Number.isFinite(tauxRisque) ||
      tauxRisque <= 0
    ) {
      setResult(null);
      return;
    }

    setResult(calculerChargesSocialesEmbauche(salaireBrut, tauxRisque));
  }

  return (
    <SimulateurForm
      title={title}
      infoBox={infoBox}
      fields={fields}
      submitLabel={submitLabel}
      disclaimer={disclaimer}
      onCalculate={handleCalculate}
      result={
        result && (
          <SimulateurResultCard
            label="Charges sociales totales estimées"
            montant={result.totalGlobal}
            details={[
              { label: "Prestations familiales (9%, employeur)", value: formatFCFA(result.montantPrestationsFamiliales) },
              { label: `Risques professionnels (${result.tauxRisqueProfessionnel}%, employeur)`, value: formatFCFA(result.montantRisquesProfessionnels) },
              { label: "Pension — part employeur (6,4%)", value: formatFCFA(result.montantPensionEmployeur) },
              { label: "Pension — part travailleur (3,6%)", value: formatFCFA(result.montantPensionTravailleur) },
              { label: "Total à la charge de l'employeur", value: formatFCFA(result.totalEmployeur) },
              { label: "Total à la charge du travailleur", value: formatFCFA(result.totalTravailleur) },
              { label: "Taux global", value: `${result.tauxGlobal}%` },
            ]}
          />
        )
      }
    />
  );
}
