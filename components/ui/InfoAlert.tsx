import { Info } from "lucide-react";

type InfoAlertProps = {
  title?: string;
  description: string;
  variant?: "info" | "warning" | "primary";
};

const variantStyles = {
  info: "bg-alert-info-bg text-alert-info-text",
  warning: "border border-warning bg-surface text-badge-warning-text",
  primary: "border border-primary bg-surface text-primary-800",
} as const;

export function InfoAlert({ title, description, variant = "info" }: InfoAlertProps) {
  return (
    <div
      className={`flex flex-1 items-start gap-4 rounded-lg p-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] ${variantStyles[variant]}`}
    >
      <Info className="size-6 shrink-0" />
      <div className="flex flex-col gap-1">
        {title && <p className="text-lg font-semibold">{title}</p>}
        <p className="text-base font-medium">{description}</p>
      </div>
    </div>
  );
}
