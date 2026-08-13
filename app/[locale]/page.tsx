import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Decouvrir } from "@/components/sections/Decouvrir";
import { Services } from "@/components/sections/Services";
import { NosChiffres } from "@/components/sections/NosChiffres";
import { Agencies } from "@/components/sections/Agencies";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ActualitesCarousel } from "@/components/sections/ActualitesCarousel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <Hero />
        <Decouvrir />
        <Services />
        <NosChiffres />
        <Agencies />
        <CtaBanner />
        <ActualitesCarousel />
      </main>
      <Footer />
    </>
  );
}
