import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[32.5rem] w-full items-center justify-center overflow-hidden md:min-h-[43.75rem]">
      <Image
        src="/images/hero-section.gif"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(0,67,153,0.4)]" />
      <div className="relative flex max-w-[80rem] flex-col items-center justify-center px-6 py-16 text-center sm:px-10 md:py-32">
        <div className="flex max-w-[48rem] flex-col items-center gap-6 md:gap-8">
          <h1 className="bg-gradient-to-r from-primary-200 to-white bg-clip-text font-heading text-h3 font-bold text-transparent drop-shadow-[0px_4px_8px_rgba(0,0,0,0.2)] sm:text-h2 lg:text-h1-lg lg:whitespace-nowrap">
            <span className="block">
              La CNSS, l&rsquo;assurance d&rsquo;une
            </span>
            <span className="block">meilleure protection pour la vie</span>
          </h1>
          <p className="max-w-[43.75rem] text-base font-semibold text-white opacity-90 sm:text-paragraph-lg">
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
