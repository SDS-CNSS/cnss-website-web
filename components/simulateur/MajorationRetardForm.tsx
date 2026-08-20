"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { SimulateurInfoBox } from "@/components/simulateur/SimulateurInfoBox";
import { SimulateurResultCard } from "@/components/simulateur/SimulateurResultCard";
import { InfoAlert } from "@/components/ui/InfoAlert";
import { Select } from "@/components/ui/Select";
import { formatFCFA } from "@/lib/format";
import {
  calculerMajorationRetard,
  parseDateJJMMAAAA,
  parseMoisAnnee,
  type MajorationRetardResult,
  type MajorationRetardIneligible,
} from "@/lib/simulateurs/majoration-retard";
import type { MajorationRetardPageContent } from "@/types/simulateur";

type MajorationRetardFormProps = {
  title: string;
  infoBox: MajorationRetardPageContent["infoBox"];
  periodeLabel: string;
  periodeOptions: MajorationRetardPageContent["periodeOptions"];
  moisAnneeField: MajorationRetardPageContent["moisAnneeField"];
  trimestreField: MajorationRetardPageContent["trimestreField"];
  anneeField: MajorationRetardPageContent["anneeField"];
  cotisationDueField: MajorationRetardPageContent["cotisationDueField"];
  datePaiementField: MajorationRetardPageContent["datePaiementField"];
  submitLabel: string;
  disclaimer: string;
};

type FormState = {
  periode: "mensuel" | "trimestriel" | "";
  moisAnnee: string;
  trimestre: string;
  annee: string;
  cotisationDue: string;
  datePaiement: string;
};

const INITIAL_STATE: FormState = {
  periode: "",
  moisAnnee: "",
  trimestre: "",
  annee: "",
  cotisationDue: "",
  datePaiement: "",
};

export function MajorationRetardForm({
  title,
  infoBox,
  periodeLabel,
  periodeOptions,
  moisAnneeField,
  trimestreField,
  anneeField,
  cotisationDueField,
  datePaiementField,
  submitLabel,
  disclaimer,
}: MajorationRetardFormProps) {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [result, setResult] = useState<
    MajorationRetardResult | MajorationRetardIneligible | null
  >(null);

  function updateField<K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cotisationDue = Number(form.cotisationDue);
    if (!Number.isFinite(cotisationDue) || cotisationDue <= 0) {
      setResult(null);
      return;
    }

    let moisEcheance: number;
    let anneeEcheance: number;

    if (form.periode === "mensuel") {
      const parsed = parseMoisAnnee(form.moisAnnee);
      if (!parsed) {
        setResult(null);
        return;
      }
      moisEcheance = parsed.mois;
      anneeEcheance = parsed.annee;
    } else if (form.periode === "trimestriel") {
      const annee = Number(form.annee);
      if (!form.trimestre || !Number.isFinite(annee)) {
        setResult(null);
        return;
      }
      moisEcheance = Number(form.trimestre);
      anneeEcheance = annee;
    } else {
      setResult(null);
      return;
    }

    const datePaiement = parseDateJJMMAAAA(form.datePaiement);
    if (!datePaiement) {
      setResult(null);
      return;
    }

    setResult(calculerMajorationRetard(cotisationDue, moisEcheance, anneeEcheance, datePaiement));
  }

  const cotisationSuffix =
    form.periode === "mensuel"
      ? cotisationDueField.labelSuffixMensuel
      : form.periode === "trimestriel"
        ? cotisationDueField.labelSuffixTrimestriel
        : "";

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
          <div className="flex flex-col gap-2">
            <span className="text-base font-semibold text-ink">
              {periodeLabel}
            </span>
            <div className="flex flex-wrap gap-6">
              {periodeOptions.map((option) => (
                <label
                  key={option.id}
                  htmlFor={option.id}
                  className="flex items-center gap-2"
                >
                  <input
                    id={option.id}
                    type="radio"
                    name="periode"
                    value={option.value}
                    checked={form.periode === option.value}
                    onChange={() => updateField("periode", option.value)}
                    className="size-4 accent-primary"
                  />
                  <span className="text-base text-ink">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {form.periode === "mensuel" && (
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="moisAnnee"
                className="text-base font-semibold text-ink"
              >
                {moisAnneeField.label}
              </label>
              <input
                id="moisAnnee"
                type="text"
                placeholder={moisAnneeField.placeholder}
                value={form.moisAnnee}
                onChange={(event) =>
                  updateField("moisAnnee", event.target.value)
                }
                className="h-12 w-full rounded-md border border-line bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-primary focus:outline-none"
              />
            </div>
          )}

          {form.periode === "trimestriel" && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="trimestre"
                  className="text-base font-semibold text-ink"
                >
                  {trimestreField.label}
                </label>
                <Select
                  label={trimestreField.label}
                  options={trimestreField.options.map((option) => option.label)}
                  value={
                    trimestreField.options.find(
                      (option) => option.value === form.trimestre,
                    )?.label
                  }
                  onValueChange={(label) => {
                    const match = trimestreField.options.find(
                      (option) => option.label === label,
                    );
                    updateField("trimestre", match?.value ?? "");
                  }}
                  className="h-12"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="annee"
                  className="text-base font-semibold text-ink"
                >
                  {anneeField.label}
                </label>
                <input
                  id="annee"
                  type="text"
                  placeholder={anneeField.placeholder}
                  value={form.annee}
                  onChange={(event) => updateField("annee", event.target.value)}
                  className="h-12 w-full rounded-md border border-line bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="cotisationDue"
              className="text-base font-semibold text-ink"
            >
              {cotisationDueField.label} {cotisationSuffix}
            </label>
            <input
              id="cotisationDue"
              type="number"
              inputMode="numeric"
              placeholder={cotisationDueField.placeholder}
              value={form.cotisationDue}
              onChange={(event) =>
                updateField("cotisationDue", event.target.value)
              }
              className="h-12 w-full rounded-md border border-line bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="datePaiement"
              className="text-base font-semibold text-ink"
            >
              {datePaiementField.label}
            </label>
            <input
              id="datePaiement"
              type="text"
              placeholder={datePaiementField.placeholder}
              value={form.datePaiement}
              onChange={(event) =>
                updateField("datePaiement", event.target.value)
              }
              className="h-12 w-full rounded-md border border-line bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-primary focus:outline-none"
            />
          </div>
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

      {result &&
        ("type" in result ? (
          <InfoAlert variant="info" title="Aucune majoration" description={result.motif} />
        ) : (
          <SimulateurResultCard
            label="Majoration de retard estimée"
            montant={result.montantMajoration}
            suffix=""
            details={[
              { label: "Mois de retard", value: `${result.moisRetard} mois` },
              { label: "Cotisation due", value: formatFCFA(result.cotisationDue) },
              { label: "Taux appliqué (1,5% × mois de retard)", value: `${result.tauxApplique}%` },
              { label: "Montant total dû (cotisation + majoration)", value: formatFCFA(result.montantTotalDu) },
            ]}
          />
        ))}
    </div>
  );
}
