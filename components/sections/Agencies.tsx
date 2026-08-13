import { AgencyCard } from "@/components/ui/AgencyCard";

const AGENCIES = [
  {
    image: "/images/agence-cotonou.png",
    city: "Cotonou",
    region: "Littoral - Atlantique",
    address: "Akpakpa, en face du stade René Pleven",
    phone: "+229 01 21 33 11 33 / +229 01 21 33 11 16",
    postalBox: "-",
  },
  {
    image: "/images/agence-lokossa.png",
    city: "Lokossa",
    region: "Mono - Couffo",
    address: "Quartier Guinkomey",
    phone: "+229 01 22 41 11 41",
    postalBox: "BP 52",
  },
  {
    image: "/images/agence-porto-novo.png",
    city: "Porto-Novo",
    region: "Ouémé - Plateau",
    address: "En face de BIBE",
    phone: "+229 01 20 21 11 33",
    postalBox: "BP 87",
  },
  {
    image: "/images/agence-siege.png",
    city: "Abomey",
    region: "Zou - Collines",
    address: "Place GOHO",
    phone: "+229 01 22 50 03 98",
    postalBox: "BP 140",
  },
  {
    image: "/images/agence-parakou.png",
    city: "Parakou",
    region: "Borghou - Alibori",
    address: "Quartier Tranza, route de Kandi",
    phone: "+229 01 23 61 03 74",
    postalBox: "BP 159",
  },
  {
    image: "/images/agence-siege.png",
    city: "Natitingou",
    region: "Atacora - Donga",
    address: "Non loin de la poste Natitingou",
    phone: "+229 01 23 82 13 04",
    postalBox: "BP 29",
  },
];

export function Agencies() {
  return (
    <section className="flex w-full flex-col items-start gap-10 bg-surface-light-2 p-6 sm:p-10 lg:p-20">
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-h3 font-bold text-primary-800 md:text-h2">
          Nos Agences
        </h2>
        <p className="w-[700px] max-w-full text-paragraph-lg text-black">
          Une agence proche de chez vous, pour un accompagnement simple et
          rapide.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {AGENCIES.map((agency) => (
          <AgencyCard key={agency.city} {...agency} />
        ))}
      </div>
    </section>
  );
}
