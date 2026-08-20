"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { SimulateurInfoBox } from "@/components/simulateur/SimulateurInfoBox";
import { Select } from "@/components/ui/Select";
import type { SimulateurFieldContent } from "@/types/simulateur";

type SimulateurFormProps = {
  title: string;
  infoBox: {
    title: string;
    text: string;
    linkLabel: string;
    linkHref: string;
  };
  fields: SimulateurFieldContent[];
  submitLabel: string;
  disclaimer: string;
  onCalculate?: (values: Record<string, string>) => void;
  // Zone de résultat affichée sous le formulaire, gérée par le composant
  // appelant (ex. PensionForm) qui recalcule et fournit ce nœud à chaque
  // soumission — SimulateurForm reste agnostique du calcul métier.
  result?: ReactNode;
};

export function SimulateurForm({
  title,
  infoBox,
  fields,
  submitLabel,
  disclaimer,
  onCalculate,
  result,
}: SimulateurFormProps) {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(fields.map((field) => [field.id, ""])),
  );

  function updateField(id: string, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onCalculate?.(values);
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
          {fields.map((field) => (
            <div key={field.id} className="flex flex-col gap-1.5">
              <label
                htmlFor={field.id}
                className="text-base font-semibold text-ink"
              >
                {field.label}
              </label>
              {field.type === "select" ? (
                <Select
                  label={field.label}
                  options={field.options}
                  value={values[field.id]}
                  onValueChange={(value) => updateField(field.id, value)}
                  className="h-12"
                />
              ) : (
                <input
                  id={field.id}
                  type={field.type}
                  inputMode={field.type === "number" ? "numeric" : undefined}
                  placeholder={field.placeholder}
                  value={values[field.id]}
                  onChange={(event) =>
                    updateField(field.id, event.target.value)
                  }
                  className="h-12 w-full rounded-md border border-line bg-surface px-4 text-base text-ink placeholder:text-muted focus:border-primary focus:outline-none"
                />
              )}
            </div>
          ))}
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

      {result}
    </div>
  );
}
