import { StatCard } from "@/components/ui/StatCard";

const STATS = [
  { value: 70, prefix: "+ ", suffix: " ans", label: "Au service de la société" },
  { value: 6, label: "Agences régionales sur le territoire national" },
  { value: 60000, prefix: "+ ", label: "Pensionnés" },
  { value: 100000, prefix: "+ ", label: "Travailleurs" },
];

export function NosChiffres() {
  return (
    <section className="flex w-full flex-col items-center gap-6 bg-surface p-20">
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-h2 font-bold text-primary-800">
          Nos chiffres clés
        </h2>
        <p className="w-[700px] max-w-full text-paragraph-lg font-medium text-black">
          Une institution solide, dont l&rsquo;expérience et la présence sur
          le terrain parlent d&rsquo;elles-mêmes.
        </p>
      </div>
      <div className="flex w-full items-stretch gap-6">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
