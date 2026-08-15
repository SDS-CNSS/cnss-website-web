import { ServiceCard } from "@/components/ui/ServiceCard";
import { Container } from "@/components/layout/Container";

const SERVICES = [
  {
    href: "/recouvrement/immatriculation",
    icon: "/images/icon-immatriculation.png",
    title: "Immatriculation",
    description:
      "Enregistrement des employeurs et des travailleurs pour l'ouverture et la gestion de leurs droits sociaux.",
  },
  {
    href: "/recouvrement/declaration-paiement-cotisations",
    icon: "/images/icon-declaration-cotisations.png",
    title: "Déclaration et paiement des cotisations",
    description:
      "Allocations prénatales, allocations familiales et congés de maternité pour accompagner les familles des travailleurs salariés.",
  },
  {
    href: "/prestations/allocations-familiales",
    icon: "/images/icon-prestations-familiales.png",
    title: "Prestations familiales",
    description:
      "Allocations prénatales, allocations familiales et congés de maternité pour accompagner les familles des travailleurs salariés.",
  },
  {
    href: "/prestations/accident-travail",
    icon: "/images/icon-accidents-travail.png",
    title: "Accidents du travail & maladies professionnelles",
    description:
      "Prise en charge médicale, indemnités journalières et rentes en cas d'accident ou de maladie liée au travail.",
  },
  {
    href: "/prestations/pensions",
    icon: "/images/icon-pensions.png",
    title: "Pensions",
    description:
      "Une retraite garantie dès 60 ans (ou 55 ans en cas de pension anticipée) après 180 mois d'assurance effective.",
  },
  {
    href: "#",
    icon: "/images/icon-assurance-volontaire.png",
    title: "Assurance volontaire",
    description:
      "Une continuité de couverture pour les assurés ayant perdu leur emploi, sous certaines conditions.",
  },
];

export function Services() {
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
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
