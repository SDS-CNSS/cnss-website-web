"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

type SelectProps = {
  label: string;
  options: string[];
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

export function Select({
  label,
  options,
  className,
  value,
  onValueChange,
}: SelectProps) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        aria-label={label}
        className={`flex h-12 w-full items-center justify-between gap-2 rounded-md border border-line bg-surface px-4 text-base text-ink outline-none transition-colors data-[placeholder]:text-muted data-[state=open]:border-primary ${className ?? ""}`}
      >
        <SelectPrimitive.Value placeholder={label} />
        <SelectPrimitive.Icon>
          <ChevronDown className="size-4 shrink-0 text-muted" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          position="popper"
          sideOffset={8}
          className="z-50 overflow-hidden rounded-md border border-line bg-surface shadow-[0px_10px_30px_0px_rgba(0,0,0,0.08)]"
        >
          <SelectPrimitive.Viewport className="w-[var(--radix-select-trigger-width)] p-1">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option}
                value={option}
                className="relative flex h-10 cursor-pointer items-center rounded-md px-3 pr-8 text-base text-ink outline-none select-none data-[highlighted]:bg-surface-light data-[highlighted]:text-primary-hover data-[state=checked]:font-semibold data-[state=checked]:text-primary-hover"
              >
                <SelectPrimitive.ItemText>{option}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute right-3 flex items-center">
                  <Check className="size-4" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
