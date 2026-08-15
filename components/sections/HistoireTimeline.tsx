import Image from "next/image";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { Container } from "@/components/layout/Container";
import type { TimelineEvent } from "@/types/timeline";

type HistoireTimelineProps = {
  title: string;
  description: string;
  image: { url: string; alt: string };
  timeline: TimelineEvent[];
};

export function HistoireTimeline({
  title,
  description,
  image,
  timeline,
}: HistoireTimelineProps) {
  return (
    <section className="flex w-full flex-col items-stretch bg-surface-light-2 p-6 sm:p-10 lg:p-20">
      <Container className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-stretch lg:gap-2.5">
        <div className="w-full shrink-0 lg:w-[31.375rem] lg:p-2.5">
          <div className="flex h-full w-full flex-col items-start gap-6 rounded-2xl border border-primary-200 bg-surface p-6 md:flex-row md:items-stretch lg:flex-col lg:items-start lg:p-10">
            <div className="flex flex-col items-start gap-4 md:flex-1 lg:flex-none">
              <h2 className="font-heading text-h3 font-bold text-primary-800 lg:text-h2">
                {title}
              </h2>
              <p className="text-paragraph-lg font-medium text-black">
                {description}
              </p>
            </div>
            <div className="flex w-full flex-1 items-center justify-center lg:items-end lg:min-h-[23.375rem]">
              <div className="relative h-[15rem] w-full overflow-hidden rounded-xl sm:h-[18.75rem] lg:h-[23.375rem]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-stretch">
          {timeline.map((event) => (
            <TimelineItem key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
