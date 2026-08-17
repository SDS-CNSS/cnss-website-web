import { ServiceCard } from "@/components/ui/ServiceCard";
import { Container } from "@/components/layout/Container";
import { getServicesContent } from "@/lib/content/services";

export async function Services({ locale }: { locale: string }) {
  const services = await getServicesContent(locale);

  return (
    <section className="relative flex w-full flex-col items-start overflow-hidden bg-surface-light-2 p-6 sm:p-10 lg:p-20">
      <Container className="relative flex flex-col items-start gap-10">
        <div className="relative flex w-full flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-h3 font-bold text-primary-800 md:text-h2">
            Nos services
          </h2>
          <p className="w-[43.75rem] max-w-full text-paragraph-lg text-black">
            Des solutions adaptées à chaque situation, du premier emploi
            jusqu&rsquo;à la retraite.
          </p>
        </div>
        <div className="relative grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
