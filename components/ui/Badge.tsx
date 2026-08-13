import type { ReactNode } from "react";

export type BadgeVariant = "neutral" | "warning" | "info" | "primary";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
};

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  neutral: "bg-badge-neutral-bg text-badge-neutral-text",
  warning: "bg-badge-warning-bg text-badge-warning-text",
  info: "bg-alert-info-bg text-alert-info-text",
  primary: "bg-primary-100 text-primary-800",
};

export function Badge({ children, variant = "neutral" }: BadgeProps) {
  return (
    <span
      className={`flex items-center justify-center rounded-xl px-3 py-1 text-[10px] font-bold ${VARIANT_STYLES[variant]}`}
    >
      {children}
    </span>
  );
}
