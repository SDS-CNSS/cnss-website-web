import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { RichContent } from "@/components/ui/RichContent";
import { Container } from "@/components/layout/Container";
import type { RichContentBlock } from "@/types/rich-content";

type MissionGouvernanceProps = {
  mission: {
    title: string;
    content: RichContentBlock[];
    image: { url: string; alt: string };
  };
  gouvernance: {
    title: string;
    content: RichContentBlock[];
    cta: { label: string; href: string };
  };
};

export function MissionGouvernance({
  mission,
  gouvernance,
}: MissionGouvernanceProps) {
  return (
    <section className="flex w-full flex-col items-stretch bg-surface p-6 sm:p-10 lg:p-20">
      <Container className="flex flex-col items-stretch gap-8 md:flex-row md:gap-6 lg:gap-24">
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] md:aspect-auto md:w-auto md:flex-1">
          <Image
            src={mission.image.url}
            alt={mission.image.alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col items-stretch gap-6">
          <div className="flex flex-col items-stretch gap-2">
            <h2 className="font-heading text-h3 font-bold text-primary-800 md:text-h2">
              {mission.title}
            </h2>
            <RichContent
              blocks={mission.content}
              className="py-2.5"
              paragraphClassName="text-base font-medium text-body"
              listItemClassName="text-base font-medium text-primary-800"
            />
          </div>
          <div className="flex flex-col items-stretch gap-2 rounded-2xl bg-primary-800 p-4">
            <h2 className="font-heading text-h3 font-bold text-[#EFF7FF] md:text-h2">
              {gouvernance.title}
            </h2>
            <RichContent
              blocks={gouvernance.content}
              className="py-2.5"
              paragraphClassName="text-base font-medium text-on-primary"
              listItemClassName="text-base font-medium text-on-primary"
            />
            <div>
              <Button href={gouvernance.cta.href} variant="outline">
                {gouvernance.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
