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
    <section className="flex w-full items-stretch gap-2.5 bg-surface-light-2 p-20">
      <div className="w-[502px] shrink-0 p-2.5">
        <div className="flex h-full w-full flex-col items-start justify-between rounded-2xl border border-primary-200 bg-surface p-10">
          <div className="flex flex-col items-start gap-4">
            <h2 className="font-heading text-h2 font-bold text-primary-800">
              {title}
            </h2>
            <p className="text-paragraph-lg font-medium text-black">{description}</p>
          </div>
          <div className="relative h-[374px] w-full overflow-hidden rounded-xl">
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
