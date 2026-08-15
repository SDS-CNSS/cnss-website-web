import { Info } from "lucide-react";
import { Link } from "@/i18n/navigation";

type SimulateurInfoBoxProps = {
  title: string;
  text: string;
  linkLabel: string;
  linkHref: string;
};

export function SimulateurInfoBox({
  title,
  text,
  linkLabel,
  linkHref,
}: SimulateurInfoBoxProps) {
  return (
    <div className="flex w-full items-start gap-3 rounded-lg border border-primary-200 bg-alert-info-bg p-4">
      <Info className="size-6 shrink-0 text-alert-info-text" />
      <div className="flex flex-col gap-1">
        <p className="text-lg font-semibold text-alert-info-text">{title}</p>
        <p className="text-base font-medium text-alert-info-text">
          {text}{" "}
          <Link href={linkHref} className="underline">
            {linkLabel}
          </Link>
        </p>
      </div>
    </div>
  );
}
