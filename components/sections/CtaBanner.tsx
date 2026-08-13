import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[url(/images/parallax-pattern.png)] bg-scroll bg-center bg-cover bg-no-repeat px-6 py-14 sm:px-10 md:bg-fixed md:py-20">
      <div className="absolute inset-0 bg-primary-800/90" />
      <div className="relative flex max-w-[1200px] flex-col items-center gap-4 px-2 sm:px-6">
        <h2 className="font-heading text-h3 font-bold text-white md:text-h2">
          Avez-vous des questions ?
        </h2>
        <p className="max-w-[672px] text-center text-base font-medium text-white opacity-90 sm:text-paragraph-lg">
          Nos équipes sont à votre disposition pour vous orienter dans vos
          démarches et répondre à vos interrogations sur la sécurité sociale.
        </p>
        <Button href="/contact" variant="outline" className="px-8 py-3 text-paragraph-lg uppercase sm:px-12 sm:py-4">
          Contactez-nous
        </Button>
      </div>
    </section>
  );
}
