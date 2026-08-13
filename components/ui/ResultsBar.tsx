import type { ReactNode } from "react";

type ResultsBarProps = {
  label: string;
  action?: ReactNode;
};

export function ResultsBar({ label, action }: ResultsBarProps) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-surface-light-2 p-3">
      <p className="text-base text-body">{label}</p>
      {action}
    </div>
  );
}
