import type { TimelineEvent } from "@/types/timeline";

type TimelineItemProps = {
  event: TimelineEvent;
};

export function TimelineItem({ event }: TimelineItemProps) {
  return (
    <div className="flex items-stretch gap-5">
      <div className="flex w-[19px] shrink-0 flex-col items-center gap-1.5 self-stretch">
        <span className="flex items-center justify-center rounded-full border-[0.5px] border-primary-800 bg-primary-800 p-[5px]">
          <span className="size-[5px] rounded-full bg-surface-light-2" />
        </span>
        <span className="w-0.5 flex-1 bg-primary-800" />
      </div>
      <div className="flex flex-1 flex-col items-stretch gap-1.5 pb-8">
        <p className="text-sm font-semibold text-primary-800">{event.year}</p>
        <h3 className="font-heading text-h3 font-semibold text-ink">
          {event.title}
        </h3>
        <p className="text-paragraph-lg font-medium text-black">
          {event.description}
        </p>
      </div>
    </div>
  );
}
