import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Decouvrir() {
  return (
    <section className="flex w-full items-center gap-24 bg-surface p-20">
      <div className="relative isolate w-[531px] shrink-0">
        <div className="absolute inset-0 -z-10 -rotate-5 rounded-2xl bg-primary-100" />
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/images/decouvrir-cnss.png"
            alt="Agent CNSS accompagnant un assuré"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start gap-2">
        <h2 className="font-heading text-h2 font-bold text-primary-800">
          Découvrir la CNSS
        </h2>
        <p className="py-2.5 text-paragraph-lg font-medium text-body">
          Créée en 1956, la CNSS est l&rsquo;organisme public en charge de la
          protection sociale des travailleurs salariés au Bénin. Elle est
          chargée de recouvrer les cotisations auprès des employeurs et de
          servir diverses prestations aux assurés.
        </p>
        <Button href="/a-propos" variant="outline" className="px-12 py-4 text-paragraph-lg">
          En savoir plus
        </Button>
      </div>
    </section>
  );
}
