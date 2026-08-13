"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NewsCard } from "@/components/ui/NewsCard";
import { Button } from "@/components/ui/Button";

const NEWS = [
  {
    image: "/images/actu-comptes-cotisants.png",
    category: "événement" as const,
    date: "30 Juin 2026",
    title: "Deux projets pour moderniser la gestion des comptes cotisants",
    excerpt:
      "La CNSS a lancé deux chantiers majeurs : la mise à jour des comptes individuels des travailleurs sur près de 30 ans d'historique, et l'assainissement des comptes des employeurs cotisants, pour une gestion plus fiable des dossiers.",
    href: "/actualites/deux-projets-modernisation-comptes-cotisants",
  },
  {
    image: "/images/actu-recensement.jpg",
    category: "communiqué" as const,
    date: "10 Juin 2020",
    title:
      "Recensement des bénéficiaires de prestations : la CNSS lance une nouvelle phase",
    excerpt:
      "La CNSS invite les bénéficiaires de prestations à se faire recenser dans le cadre d'une nouvelle campagne, une démarche destinée à fiabiliser le suivi de leurs droits.",
    href: "/actualites/recensement-beneficiaires-prestations",
  },
  {
    image: "/images/actu-gens-de-maison.png",
    category: "communiqué" as const,
    date: "25 mai 2023",
    title: "Employeurs de gens de maison : la déclaration devient obligatoire",
    excerpt:
      "Tout employeur de personnel de maison est désormais tenu de déclarer ses employés via la plateforme service-public.bj, une mesure destinée à étendre la couverture sociale à cette catégorie de travailleurs.",
    href: "/actualites/employeurs-gens-de-maison-declaration-obligatoire",
  },
];

export function ActualitesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="flex w-full flex-col items-start gap-10 bg-surface p-6 sm:p-10 lg:gap-16 lg:p-20">
      <div className="flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-2.5">
        <div className="flex flex-1 flex-col items-start gap-4">
          <h2 className="font-heading text-h3 font-bold text-primary-800 md:text-h2">
            Actualités
          </h2>
          <p className="text-paragraph-lg text-body">
            Restez informé en temps réel sur les dernières réformes,
            communiqués officiels et activités de la CNSS.
          </p>
        </div>
        <div className="flex items-start gap-4">
          <button
            type="button"
            aria-label="Actualité précédente"
            onClick={() => scrollByCard(-1)}
            className="flex size-12 items-center justify-center rounded-xl border-2 border-line-soft p-0.5 transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Actualité suivante"
            onClick={() => scrollByCard(1)}
            className="flex size-12 items-center justify-center rounded-xl border-2 border-line-soft p-0.5 transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        className="flex w-full max-w-[1280px] snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {NEWS.map((item) => (
          <div
            key={item.title}
            className="w-full max-w-[410.667px] shrink-0 snap-start"
          >
            <NewsCard {...item} />
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col items-center">
        <Button href="/actualites" className="px-8 py-3 text-paragraph-lg">
          Voir toutes les actualités
        </Button>
      </div>
    </section>
  );
}
