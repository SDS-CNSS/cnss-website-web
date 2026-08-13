import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { RichContent } from "@/components/ui/RichContent";
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

export function MissionGouvernance({ mission, gouvernance }: MissionGouvernanceProps) {
  return (
    <section className="flex w-full items-stretch gap-24 bg-surface p-20">
      <div className="relative w-full flex-1 overflow-hidden rounded-2xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)]">
        <Image src={mission.image.url} alt={mission.image.alt} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col items-stretch gap-6">
        <div className="flex flex-col items-stretch gap-2">
          <h2 className="font-heading text-h2 font-bold text-primary-800">
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
          <h2 className="font-heading text-h2 font-bold text-[#EFF7FF]">
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
    </section>
  );
}
