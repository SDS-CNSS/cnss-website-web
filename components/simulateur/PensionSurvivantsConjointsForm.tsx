"use client";

import { useState } from "react";
import { SimulateurForm } from "@/components/simulateur/SimulateurForm";
import { SimulateurResultCard } from "@/components/simulateur/SimulateurResultCard";
import { formatFCFA } from "@/lib/format";
import {
  calculerPensionSurvivantsConjoints,
  type PensionSurvivantsConjointsResult,
} from "@/lib/simulateurs/pension-survivants-conjoints";
import type { SimulateurFieldContent, SimulateurInfoBoxContent } from "@/types/simulateur";

type PensionSurvivantsConjointsFormProps = {
  title: string;
  infoBox: SimulateurInfoBoxContent;
  fields: SimulateurFieldContent[];
  submitLabel: string;
  disclaimer: string;
};

export function PensionSurvivantsConjointsForm({
  title,
  infoBox,
  fields,
  submitLabel,
  disclaimer,
}: PensionSurvivantsConjointsFormProps) {
  const [result, setResult] = useState<PensionSurvivantsConjointsResult | null>(null);

  function handleCalculate(values: Record<string, string>) {
    const pensionAssure = Number(values.pension_vieillesse_decede);
    const nombreConjoints = Number(values.nombre_conjoints_decede);

    if (
      !Number.isFinite(pensionAssure) ||
      pensionAssure <= 0 ||
      !Number.isFinite(nombreConjoints) ||
      nombreConjoints <= 0
    ) {
      setResult(null);
      return;
    }

    setResult(calculerPensionSurvivantsConjoints(pensionAssure, nombreConjoints));
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
            label={
              result.nombreConjoints > 1
                ? "Montant estimé de la pension par conjoint survivant"
                : "Montant estimé de la pension du conjoint survivant"
            }
            montant={result.montantParConjoint}
            details={[
              { label: "Pension de vieillesse du décédé", value: formatFCFA(result.pensionAssure) },
              { label: "Taux appliqué", value: `${result.tauxApplique}%` },
              { label: "Nombre de conjoints", value: `${result.nombreConjoints}` },
            ]}
          />
        )
      }
    />
  );
}
