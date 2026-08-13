import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[url(/images/parallax-pattern.png)] bg-scroll bg-center bg-cover bg-no-repeat px-10 py-20 md:bg-fixed">
      <div className="absolute inset-0 bg-primary-800/90" />
      <div className="relative flex max-w-[1200px] flex-col items-center gap-4 px-6">
        <h2 className="font-heading text-h2 font-bold text-white">
          Avez-vous des questions ?
        </h2>
        <p className="max-w-[672px] text-center text-paragraph-lg font-medium text-white opacity-90">
          Nos équipes sont à votre disposition pour vous orienter dans vos
          démarches et répondre à vos interrogations sur la sécurité sociale.
        </p>
        <Button href="/contact" variant="outline" className="px-12 py-4 text-paragraph-lg uppercase">
          Contactez-nous
        </Button>
      </div>
    </section>
  );
}
