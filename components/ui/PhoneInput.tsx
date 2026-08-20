"use client";

import { useState } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, Phone } from "lucide-react";

// Bénin en priorité (pays du site), puis pays limitrophes/diaspora les plus
// probables pour un usager de la CNSS Bénin — pas une liste exhaustive des
// indicatifs mondiaux, volontairement restreinte à ce qui est pertinent ici.
const COUNTRIES = [
  { code: "BJ", name: "Bénin", dial: "+229", flag: "🇧🇯" },
  { code: "TG", name: "Togo", dial: "+228", flag: "🇹🇬" },
  { code: "NE", name: "Niger", dial: "+227", flag: "🇳🇪" },
  { code: "NG", name: "Nigeria", dial: "+234", flag: "🇳🇬" },
  { code: "BF", name: "Burkina Faso", dial: "+226", flag: "🇧🇫" },
  { code: "GH", name: "Ghana", dial: "+233", flag: "🇬🇭" },
  { code: "CI", name: "Côte d'Ivoire", dial: "+225", flag: "🇨🇮" },
  { code: "SN", name: "Sénégal", dial: "+221", flag: "🇸🇳" },
  { code: "ML", name: "Mali", dial: "+223", flag: "🇲🇱" },
  { code: "FR", name: "France", dial: "+33", flag: "🇫🇷" },
] as const;

const DEFAULT_DIAL = COUNTRIES[0].dial;

type PhoneInputProps = {
  id: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function PhoneInput({ id, onChange, placeholder }: PhoneInputProps) {
  const [dial, setDial] = useState<string>(DEFAULT_DIAL);
  const [number, setNumber] = useState("");

  function emit(nextDial: string, nextNumber: string) {
    const trimmed = nextNumber.trim();
    onChange(trimmed ? `${nextDial} ${trimmed}` : "");
  }

  return (
    <div className="flex h-12 w-full items-stretch overflow-hidden rounded-md border border-line bg-surface focus-within:border-primary">
      <SelectPrimitive.Root
        value={dial}
        onValueChange={(nextDial) => {
          setDial(nextDial);
          emit(nextDial, number);
        }}
      >
        <SelectPrimitive.Trigger
          aria-label="Indicatif pays"
          className="flex shrink-0 items-center gap-1 border-r border-line px-3 text-base text-ink outline-none"
        >
          <SelectPrimitive.Value>
            {COUNTRIES.find((country) => country.dial === dial)?.flag} {dial}
          </SelectPrimitive.Value>
          <SelectPrimitive.Icon>
            <ChevronDown className="size-3.5 shrink-0 text-muted" />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            sideOffset={8}
            className="z-50 overflow-hidden rounded-md border border-line bg-surface shadow-[0px_10px_30px_0px_rgba(0,0,0,0.08)]"
          >
            <SelectPrimitive.Viewport className="p-1">
              {COUNTRIES.map((country) => (
                <SelectPrimitive.Item
                  key={country.code}
                  value={country.dial}
                  className="relative flex h-10 cursor-pointer items-center rounded-md px-3 pr-8 text-base text-ink outline-none select-none data-[highlighted]:bg-surface-light data-[highlighted]:text-primary-hover data-[state=checked]:font-semibold data-[state=checked]:text-primary-hover"
                >
                  <SelectPrimitive.ItemText>
                    {country.flag} {country.name} ({country.dial})
                  </SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="absolute right-3 flex items-center">
                    <Check className="size-4" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>

      <label htmlFor={id} className="flex flex-1 items-center gap-3 px-3">
        <Phone className="size-4 shrink-0 text-muted" />
        <input
          id={id}
          type="tel"
          placeholder={placeholder}
          value={number}
          onChange={(event) => {
            setNumber(event.target.value);
            emit(dial, event.target.value);
          }}
          className="w-full text-base text-ink placeholder:text-muted focus:outline-none"
        />
      </label>
    </div>
  );
}
