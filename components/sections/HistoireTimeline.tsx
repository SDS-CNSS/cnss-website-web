import Image from "next/image";
import { TimelineItem } from "@/components/ui/TimelineItem";
import type { TimelineEvent } from "@/types/timeline";

type HistoireTimelineProps = {
  title: string;
  description: string;
  image: { url: string; alt: string };
  timeline: TimelineEvent[];
};

export function HistoireTimeline({ title, description, image, timeline }: HistoireTimelineProps) {
  return (
    <section className="flex w-full flex-col items-stretch gap-6 bg-surface-light-2 p-6 sm:p-10 lg:flex-row lg:items-start lg:gap-2.5 lg:p-20">
      <div className="w-full shrink-0 lg:w-[502px] lg:p-2.5">
        <div className="flex w-full flex-col items-start gap-6 rounded-2xl border border-primary-200 bg-surface p-6 lg:p-10">
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-heading text-h3 font-bold text-primary-800 lg:text-h2">
              {title}
            </h2>
            <p className="text-paragraph-lg font-medium text-black">{description}</p>
          </div>
          <div className="relative h-[240px] w-full overflow-hidden rounded-xl sm:h-[300px] lg:h-[374px]">
            <Image src={image.url} alt={image.alt} fill className="object-contain" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-stretch">
        {timeline.map((event) => (
          <TimelineItem key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
