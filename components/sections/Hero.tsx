import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[700px] w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-section.gif"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(0,67,153,0.4)]" />
      <div className="relative flex max-w-[1280px] flex-col items-center justify-center px-10 py-32 text-center">
        <div className="flex max-w-[768px] flex-col items-center gap-8">
          <h1 className="bg-gradient-to-r from-primary-200 to-white bg-clip-text font-heading text-h1-lg font-bold whitespace-nowrap text-transparent drop-shadow-[0px_4px_8px_rgba(0,0,0,0.2)]">
            <span className="block">La CNSS, l&rsquo;assurance d&rsquo;une</span>
            <span className="block">meilleure protection pour la vie</span>
          </h1>
          <p className="max-w-[700px] text-paragraph-lg font-semibold text-white opacity-90">
            Depuis 1956, la CNSS accompagne les travailleurs à chaque étape de
            leur vie : maternité, famille, retraite, accidents du travail, à
            travers une protection sociale solide et accessible sur tout le
            territoire.
          </p>
        </div>
      </div>
    </section>
  );
}
