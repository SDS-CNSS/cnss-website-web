"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { SimulateurInfoBox } from "@/components/simulateur/SimulateurInfoBox";
import type { PensionVieillesseAnticipeePageContent } from "@/types/simulateur";

type PensionVieillesseAnticipeeFormProps = {
  title: string;
  infoBox: PensionVieillesseAnticipeePageContent["infoBox"];
  ageLabel: string;
  ageOptions: PensionVieillesseAnticipeePageContent["ageOptions"];
  rmmField: PensionVieillesseAnticipeePageContent["rmmField"];
  moisAssuranceField: PensionVieillesseAnticipeePageContent["moisAssuranceField"];
  submitLabel: string;
  disclaimer: string;
};

const AGE_LEGAL_DEPART = 60;
const TAUX_ABATTEMENT_PAR_AN = 5;

export function PensionVieillesseAnticipeeForm({
  title,
  infoBox,
  ageLabel,
  ageOptions,
  rmmField,
  moisAssuranceField,
  submitLabel,
  disclaimer,
}: PensionVieillesseAnticipeeFormProps) {
  const [age, setAge] = useState<number | undefined>(undefined);
  const [rmm, setRmm] = useState("");
  const [moisAssurance, setMoisAssurance] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const anneesAnticipation =
    age !== undefined ? AGE_LEGAL_DEPART - age : undefined;

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
            <span className="text-base font-semibold text-ink">{ageLabel}</span>
            <div className="flex flex-wrap gap-6">
              {ageOptions.map((option) => (
                <label
                  key={option.id}
                  htmlFor={option.id}
                  className="flex items-center gap-2"
                >
                  <input
                    id={option.id}
                    type="radio"
                    name="age_assure"
                    value={option.value}
                    checked={age === option.value}
                    onChange={() => setAge(option.value)}
                    className="size-4 accent-primary"
                  />
                  <span className="text-base text-ink">{option.label}</span>
                </label>
              ))}
            </div>

            {anneesAnticipation !== undefined && (
              <p className="text-base font-semibold text-primary-800">
                Nombre d&apos;années d&apos;anticipation est de :{" "}
                {anneesAnticipation} {anneesAnticipation === 1 ? "an" : "ans"}{" "}
                et le taux d&apos;abattement est de :{" "}
                {TAUX_ABATTEMENT_PAR_AN * anneesAnticipation} %
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="rmm" className="text-base font-semibold text-ink">
              {rmmField.label}
            </label>
            <input
              id="rmm"
              type="number"
              inputMode="numeric"
              placeholder={rmmField.placeholder}
              value={rmm}
              onChange={(event) => setRmm(event.target.value)}
              className="h-12 w-full rounded-md border border-line bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-primary focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="moisAssurance"
              className="text-base font-semibold text-ink"
            >
              {moisAssuranceField.label}
            </label>
            <input
              id="moisAssurance"
              type="number"
              inputMode="numeric"
              placeholder={moisAssuranceField.placeholder}
              value={moisAssurance}
              onChange={(event) => setMoisAssurance(event.target.value)}
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
    </div>
  );
}
