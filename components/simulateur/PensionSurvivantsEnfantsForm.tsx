"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { SimulateurInfoBox } from "@/components/simulateur/SimulateurInfoBox";
import { SimulateurResultCard } from "@/components/simulateur/SimulateurResultCard";
import { formatFCFA } from "@/lib/format";
import {
  calculerPensionSurvivantsEnfantsMultiples,
  calculerPensionSurvivantsEnfantsUnique,
  type PensionSurvivantsEnfantsResult,
} from "@/lib/simulateurs/pension-survivants-enfants";
import type { PensionSurvivantsEnfantsPageContent } from "@/types/simulateur";

type PensionSurvivantsEnfantsFormProps = {
  title: string;
  infoBox: PensionSurvivantsEnfantsPageContent["infoBox"];
  pensionVieillesseField: PensionSurvivantsEnfantsPageContent["pensionVieillesseField"];
  nombreOrphelinsMineursField: PensionSurvivantsEnfantsPageContent["nombreOrphelinsMineursField"];
  orphelinPereMereLabel: string;
  orphelinPereMereOptions: PensionSurvivantsEnfantsPageContent["orphelinPereMereOptions"];
  nombreOrphelinsPrisEnCompteField: PensionSurvivantsEnfantsPageContent["nombreOrphelinsPrisEnCompteField"];
  submitLabel: string;
  disclaimer: string;
};

export function PensionSurvivantsEnfantsForm({
  title,
  infoBox,
  pensionVieillesseField,
  nombreOrphelinsMineursField,
  orphelinPereMereLabel,
  orphelinPereMereOptions,
  nombreOrphelinsPrisEnCompteField,
  submitLabel,
  disclaimer,
}: PensionSurvivantsEnfantsFormProps) {
  const [pensionVieillesse, setPensionVieillesse] = useState("");
  const [nombreOrphelinsMineurs, setNombreOrphelinsMineurs] = useState("");
  const [orphelinPereMere, setOrphelinPereMere] = useState<
    "oui" | "non" | undefined
  >(undefined);
  const [nombreOrphelinsPrisEnCompte, setNombreOrphelinsPrisEnCompte] =
    useState("");
  const [result, setResult] = useState<PensionSurvivantsEnfantsResult | null>(
    null,
  );

  const nombreMineurs = Number(nombreOrphelinsMineurs || 0);
  const showTauxMineursMultiples = nombreMineurs > 1;
  const showOrphelinPereMere = nombreMineurs === 1;
  const showNombreOrphelinsPrisEnCompte = nombreMineurs !== 1;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const pension = Number(pensionVieillesse);
    if (!Number.isFinite(pension) || pension <= 0) {
      setResult(null);
      return;
    }

    if (showOrphelinPereMere) {
      if (!orphelinPereMere) {
        setResult(null);
        return;
      }
      setResult(
        calculerPensionSurvivantsEnfantsUnique(
          pension,
          orphelinPereMere === "oui",
        ),
      );
      return;
    }

    if (nombreMineurs <= 0) {
      setResult(null);
      return;
    }

    const nombrePrisEnCompte = Number(nombreOrphelinsPrisEnCompte);
    if (
      !Number.isFinite(nombrePrisEnCompte) ||
      nombrePrisEnCompte <= 0 ||
      nombrePrisEnCompte > nombreMineurs
    ) {
      setResult(null);
      return;
    }

    setResult(
      calculerPensionSurvivantsEnfantsMultiples(
        pension,
        nombreMineurs,
        nombrePrisEnCompte,
      ),
    );
  }

  return (
    <div className="flex w-full flex-1 flex-col items-start gap-6">
      <h2 className="font-heading text-h3 font-bold text-primary-800 lg:text-h2">
        {title}
      </h2>

      <SimulateurInfoBox {...infoBox} />

      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-6 rounded-2xl bg-surface-light-2 p-4 sm:p-6"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="pensionVieillesse"
              className="text-base font-semibold text-ink"
            >
              {pensionVieillesseField.label}
            </label>
            <input
              id="pensionVieillesse"
              type="number"
              inputMode="numeric"
              placeholder={pensionVieillesseField.placeholder}
              value={pensionVieillesse}
              onChange={(event) => setPensionVieillesse(event.target.value)}
              className="h-12 w-full rounded-md border border-line bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="nombreOrphelinsMineurs"
              className="text-base font-semibold text-ink"
            >
              {nombreOrphelinsMineursField.label}
            </label>
            <input
              id="nombreOrphelinsMineurs"
              type="number"
              inputMode="numeric"
              placeholder={nombreOrphelinsMineursField.placeholder}
              value={nombreOrphelinsMineurs}
              onChange={(event) =>
                setNombreOrphelinsMineurs(event.target.value)
              }
              className="h-12 w-full rounded-md border border-line bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-primary focus:outline-none"
            />
            {showTauxMineursMultiples && (
              <p className="text-base font-semibold text-primary-800">
                Le taux appliqué est de : 40%
              </p>
            )}
          </div>

          {showOrphelinPereMere && (
            <div className="flex flex-col gap-2">
              <span className="text-base font-semibold text-ink">
                {orphelinPereMereLabel}
              </span>
              <div className="flex flex-wrap gap-6">
                {orphelinPereMereOptions.map((option) => (
                  <label
                    key={option.id}
                    htmlFor={option.id}
                    className="flex items-center gap-2"
                  >
                    <input
                      id={option.id}
                      type="radio"
                      name="orphelin_pere_mere"
                      value={option.value}
                      checked={orphelinPereMere === option.value}
                      onChange={() => setOrphelinPereMere(option.value)}
                      className="size-4 accent-primary"
                    />
                    <span className="text-base text-ink">{option.label}</span>
                  </label>
                ))}
              </div>
              {orphelinPereMere && (
                <p className="text-base font-semibold text-primary-800">
                  Le taux appliqué est de :{" "}
                  {orphelinPereMere === "oui" ? "30%" : "20%"}
                </p>
              )}
            </div>
          )}

          {showNombreOrphelinsPrisEnCompte && (
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="nombreOrphelinsPrisEnCompte"
                className="text-base font-semibold text-ink"
              >
                {nombreOrphelinsPrisEnCompteField.label}
              </label>
              <input
                id="nombreOrphelinsPrisEnCompte"
                type="number"
                inputMode="numeric"
                min={1}
                max={nombreMineurs || undefined}
                placeholder={nombreOrphelinsPrisEnCompteField.placeholder}
                value={nombreOrphelinsPrisEnCompte}
                onChange={(event) =>
                  setNombreOrphelinsPrisEnCompte(event.target.value)
                }
                className="h-12 w-full rounded-md border border-line bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary text-base font-medium text-on-primary transition-colors hover:bg-primary-hover"
        >
          {submitLabel}
          <ArrowRight className="size-4" />
        </button>

        <p className="text-center text-sm font-medium text-muted">
          {disclaimer}
        </p>
      </form>

      {result && (
        <SimulateurResultCard
          label={
            nombreMineurs === 1
              ? "Montant estimé de la pension de l'orphelin"
              : result.nombreOrphelinsPrisEnCompte === 1
                ? `Chacun des ${nombreMineurs} enfants a droit à une pension de survivants égale à`
                : `Pour le compte des ${result.nombreOrphelinsPrisEnCompte} enfants, vous avez droit à une pension de survivants égale à`
          }
          montant={result.montantTotal}
          details={[
            { label: "Pension de vieillesse du décédé", value: formatFCFA(result.pensionAssure) },
            { label: "Taux appliqué", value: `${result.tauxApplique}%` },
            ...(nombreMineurs > 1
              ? [{ label: "Nombre d'orphelins pris en compte", value: `${result.nombreOrphelinsPrisEnCompte}` }]
              : []),
          ]}
        />
      )}
    </div>
  );
}
