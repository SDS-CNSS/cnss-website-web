import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Decouvrir } from "@/components/sections/Decouvrir";
import { Services } from "@/components/sections/Services";
import { NosChiffres } from "@/components/sections/NosChiffres";
import { Agencies } from "@/components/sections/Agencies";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ActualitesCarousel } from "@/components/sections/ActualitesCarousel";

type Props = PageProps<"/[locale]">;

export default async function Home({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center">
        <Hero />
        <Decouvrir />
        <Services locale={locale} />
        <NosChiffres locale={locale} />
        <Agencies locale={locale} />
        <CtaBanner />
        <ActualitesCarousel />
      </main>
      <Footer />
    </>
  );
}
