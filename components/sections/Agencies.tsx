import { AgencyCard } from "@/components/ui/AgencyCard";
import { Container } from "@/components/layout/Container";
import { getAgenciesContent } from "@/lib/content/agencies";

export async function Agencies({ locale }: { locale: string }) {
  const agencies = await getAgenciesContent(locale);

  return (
    <section className="flex w-full flex-col items-start bg-surface-light-2 p-6 sm:p-10 lg:p-20">
      <Container className="flex flex-col items-start gap-10">
        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-h3 font-bold text-primary-800 md:text-h2">
            Nos Agences
          </h2>
          <p className="w-[43.75rem] max-w-full text-paragraph-lg text-black">
            Une agence proche de chez vous, pour un accompagnement simple et
            rapide.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agencies.map((agency) => (
            <AgencyCard key={agency.city} {...agency} />
          ))}
        </div>
      </Container>
    </section>
  );
}
