"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type StickyNavBarProps = {
  children: ReactNode;
  className?: string;
  // Ignore le masquage au scroll (ex: menu mobile ouvert) — la barre reste
  // visible tant que forceVisible est vrai, même si l'utilisateur scrolle.
  forceVisible?: boolean;
};

// Se fixe en haut du viewport une fois que le bandeau au-dessus a défilé
// hors champ, et se cache au scroll vers le bas / réapparaît au scroll vers
// le haut. Implémenté en `position: fixed` piloté par IntersectionObserver
// plutôt qu'en `position: sticky` : `sticky` combiné à un layout flex-column
// s'est révélé peu fiable (la barre restait bloquée hors-écran sans se
// recoller), alors que `fixed` + observer est le pattern robuste standard
// pour un header qui doit en plus se cacher/réapparaître au scroll.
export function StickyNavBar({
  children,
  className,
  forceVisible = false,
}: StickyNavBarProps) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const [pinned, setPinned] = useState(false);
  const [barHeight, setBarHeight] = useState(0);
  const [hidden, setHidden] = useState(false);

  // Détecte quand le bandeau au-dessus a fini de défiler hors champ.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPinned(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Mesure la hauteur de la barre pour réserver l'espace qu'elle occupait
  // dans le flux une fois qu'elle passe en `fixed` (sinon le contenu en
  // dessous saute vers le haut).
  useEffect(() => {
    if (barRef.current) {
      setBarHeight(barRef.current.getBoundingClientRect().height);
    }
  }, [pinned]);

  useEffect(() => {
    if (!pinned) setHidden(false);
  }, [pinned]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (Math.abs(delta) < 4) return;

      setHidden(delta > 0 && currentScrollY > 80);
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHidden = pinned && hidden && !forceVisible;

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-0 w-full" />
      {pinned && <div style={{ height: barHeight }} aria-hidden />}
      <div
        ref={barRef}
        className={`w-full ${pinned ? "fixed top-0 right-0 left-0" : "relative"} z-40`}
      >
        {/* Le fond/style (bg, padding...) vit ici, sur l'élément qui glisse,
            pas sur le conteneur fixe au-dessus : sinon seul le contenu se
            cache et le fond reste affiché comme une bande vide. */}
        <div
          className={`transition-transform duration-300 ease-in-out ${isHidden ? "-translate-y-full" : "translate-y-0"} ${className ?? ""}`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
