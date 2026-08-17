import { StatCard } from "@/components/ui/StatCard";
import { Container } from "@/components/layout/Container";
import { getNosChiffresContent } from "@/lib/content/nos-chiffres";

export async function NosChiffres({ locale }: { locale: string }) {
  const stats = await getNosChiffresContent(locale);

  return (
    <section className="flex w-full flex-col items-center bg-surface p-6 sm:p-10 lg:p-20">
      <Container className="flex flex-col items-center gap-6">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-h3 font-bold text-primary-800 md:text-h2">
            Nos chiffres clés
          </h2>
          <p className="w-[43.75rem] max-w-full text-paragraph-lg font-medium text-black">
            Une institution solide, dont l&rsquo;expérience et la présence sur
            le terrain parlent d&rsquo;elles-mêmes.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 items-stretch gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}
