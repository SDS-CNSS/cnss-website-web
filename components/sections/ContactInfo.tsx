"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Select } from "@/components/ui/Select";
import type { ContactLocation } from "@/types/contact";

type ContactInfoProps = {
  title: string;
  locations: ContactLocation[];
};

const CARDS = [
  { key: "address", icon: MapPin } as const,
  { key: "email", icon: Mail } as const,
  { key: "phone", icon: Phone } as const,
  { key: "postalBox", icon: Send } as const,
];

export function ContactInfo({ title, locations }: ContactInfoProps) {
  const [selectedId, setSelectedId] = useState(locations[0]?.id);
  const location = locations.find((loc) => loc.id === selectedId) ?? locations[0];

  if (!location) return null;

  const cardLabels: Record<(typeof CARDS)[number]["key"], string> = {
    address: location.isSiege ? "Siège social" : "Adresse",
    email: "Adresse mail",
    phone: "Téléphone",
    postalBox: "Boîte Postale",
  };

  return (
    <div className="flex w-full flex-1 flex-col items-start gap-6">
      <h2 className="font-heading text-h3 font-bold text-primary-800 lg:text-h2">{title}</h2>

      <Select
        label="Direction Générale"
        options={locations.map((loc) => loc.label)}
        value={location.label}
        onValueChange={(label) => {
          const next = locations.find((loc) => loc.label === label);
          if (next) setSelectedId(next.id);
        }}
        className="h-12"
      />

      <div className="flex w-full flex-col gap-4">
        {CARDS.map(({ key, icon: Icon }) => (
          <div
            key={key}
            className="flex w-full items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.05)]"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-[5px] border border-primary-100 bg-surface-light-2">
              <Icon className="size-5 text-primary-800" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="font-heading text-lg font-bold text-primary-800">{cardLabels[key]}</p>
              <p className="text-base text-body">{location[key]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
