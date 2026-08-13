type RateCardProps = {
  value: string;
  label: string;
  description: string;
};

export function RateCard({ value, label, description }: RateCardProps) {
  return (
    <div className="flex flex-col gap-1 rounded-lg bg-surface-light-2 p-4">
      <p className="font-heading text-h4 font-bold text-primary">{value}</p>
      <p className="text-base font-semibold text-ink">{label}</p>
      <p className="text-sm text-body">{description}</p>
    </div>
  );
}
