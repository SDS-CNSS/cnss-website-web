import Image from "next/image";
import { Button } from "@/components/ui/Button";

type ImpactCtaProps = {
  title: string;
  description: string;
  image: { url: string; alt: string };
  button: { label: string; href: string };
};

export function ImpactCta({ title, description, image, button }: ImpactCtaProps) {
  return (
    <section className="flex w-full items-stretch bg-primary-900 p-6 sm:p-10 lg:p-20">
      <div className="relative flex w-full items-stretch overflow-hidden rounded-2xl shadow-[4px_4px_200px_0px_rgba(229,241,255,0.3)]">
        <Image src={image.url} alt={image.alt} fill className="object-cover" />
        <div className="relative flex w-full items-center justify-end bg-gradient-to-l from-[rgba(0,45,102,0.9)] via-[rgba(0,45,102,0.5)] to-transparent px-6 py-12 sm:px-10 md:px-16 lg:px-20 lg:py-20">
          <div className="flex max-w-[500px] flex-col items-stretch gap-6">
            <div className="flex flex-col items-start gap-4">
              <h2 className="font-heading text-h3 font-bold text-surface-light md:text-h2">
                {title}
              </h2>
              <p className="text-paragraph-lg font-medium text-white">{description}</p>
            </div>
            <div>
              <Button href={button.href} variant="outline" className="px-8 py-2 text-paragraph-lg">
                {button.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
