"use client";

import { useState } from "react";
import { SimulateurForm } from "@/components/simulateur/SimulateurForm";
import { SimulateurResultCard } from "@/components/simulateur/SimulateurResultCard";
import { InfoAlert } from "@/components/ui/InfoAlert";
import {
  calculerPensionOuAllocation,
  type PensionCalculResult,
} from "@/lib/simulateurs/pension";
import type { SimulateurFieldContent, SimulateurInfoBoxContent } from "@/types/simulateur";

type PensionFormProps = {
  title: string;
  infoBox: SimulateurInfoBoxContent;
  fields: SimulateurFieldContent[];
  submitLabel: string;
  disclaimer: string;
};

export function PensionForm({ title, infoBox, fields, submitLabel, disclaimer }: PensionFormProps) {
  const [result, setResult] = useState<PensionCalculResult | null>(null);

  function handleCalculate(values: Record<string, string>) {
    const rmm = Number(values.rmm);
    const moisAssurance = Number(values.moisAssurance);

    if (!Number.isFinite(rmm) || rmm <= 0 || !Number.isFinite(moisAssurance) || moisAssurance <= 0) {
      setResult(null);
      return;
    }

    setResult(calculerPensionOuAllocation(rmm, moisAssurance));
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
        result &&
        (result.type === "pension" ? (
          <SimulateurResultCard
            label="Montant estimé de votre pension"
            montant={result.montantMensuel}
            details={[
              { label: "Durée d'assurance", value: `${result.moisAssurance} mois` },
              { label: "Taux de base (180 premiers mois)", value: `${result.tauxBase}%` },
              {
                label: `Années supplémentaires complètes (${result.anneesSupplementairesCompletes} an${result.anneesSupplementairesCompletes > 1 ? "s" : ""})`,
                value: `+${result.tauxSupplementaire}%`,
              },
              { label: "Taux de pension total", value: `${result.tauxTotal}%` },
            ]}
          />
        ) : result.type === "allocation" ? (
          <SimulateurResultCard
            label="Montant estimé de votre allocation de vieillesse (versement unique)"
            montant={result.montant}
            suffix="en une fois"
            details={[
              { label: "Durée d'assurance", value: `${result.moisAssurance} mois` },
              {
                label: "Années complètes accomplies",
                value: `${result.anneesCompletes} an${result.anneesCompletes > 1 ? "s" : ""}`,
              },
            ]}
          />
        ) : (
          <InfoAlert variant="warning" title="Non éligible" description={result.motif} />
        ))
      }
    />
  );
}
