"use client";

import { useState } from "react";
import { SimulateurForm } from "@/components/simulateur/SimulateurForm";
import { SimulateurResultCard } from "@/components/simulateur/SimulateurResultCard";
import {
  calculerAllocationSurvivants,
  type AllocationSurvivantsResult,
} from "@/lib/simulateurs/allocation-survivants";
import type { SimulateurFieldContent, SimulateurInfoBoxContent } from "@/types/simulateur";

type AllocationSurvivantsFormProps = {
  title: string;
  infoBox: SimulateurInfoBoxContent;
  fields: SimulateurFieldContent[];
  submitLabel: string;
  disclaimer: string;
};

export function AllocationSurvivantsForm({
  title,
  infoBox,
  fields,
  submitLabel,
  disclaimer,
}: AllocationSurvivantsFormProps) {
  const [result, setResult] = useState<AllocationSurvivantsResult | null>(null);

  function handleCalculate(values: Record<string, string>) {
    const rmm = Number(values.rmm);
    const moisAssurance = Number(values.nombre_mois_assurance);

    if (!Number.isFinite(rmm) || rmm <= 0 || !Number.isFinite(moisAssurance) || moisAssurance <= 0) {
      setResult(null);
      return;
    }

    setResult(calculerAllocationSurvivants(rmm, moisAssurance));
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
            label="Montant total estimé de l'allocation de survivants"
            montant={result.montantTotal}
            suffix="en une fois"
            details={[
              { label: "Durée d'assurance", value: `${result.moisAssurance} mois` },
              { label: "Périodes de 6 mois accomplies", value: `${result.periodesAccomplies}` },
              { label: "Taux appliqué", value: `${result.tauxApplique}%` },
            ]}
          />
        )
      }
    />
  );
}
