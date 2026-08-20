import { formatMontant } from "@/lib/format";

type ResultDetail = { label: string; value: string };

type SimulateurResultCardProps = {
  label: string;
  montant: number;
  suffix?: string;
  details?: ResultDetail[];
};

export function SimulateurResultCard({
  label,
  montant,
  suffix = "/ mois",
  details,
}: SimulateurResultCardProps) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl border border-primary-200 bg-primary-100/50 p-5 sm:p-6">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold text-primary-800">{label}</p>
        <p className="font-heading text-h3 font-bold text-primary-800">
          {formatMontant(montant)} FCFA
          {suffix && <span className="ml-1 text-base font-medium text-body">{suffix}</span>}
        </p>
      </div>

      {details && details.length > 0 && (
        <div className="flex flex-col gap-2 border-t border-primary-200 pt-4">
          {details.map((item) => (
            <div key={item.label} className="flex items-center justify-between gap-4">
              <span className="text-sm text-body">{item.label}</span>
              <span className="text-sm font-semibold text-ink">{item.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
