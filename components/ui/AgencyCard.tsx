import Image from "next/image";
import { MapPin, Navigation, Phone, Inbox } from "lucide-react";

type AgencyCardProps = {
  image: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  postalBox: string;
};

export function AgencyCard({
  image,
  city,
  region,
  address,
  phone,
  postalBox,
}: AgencyCardProps) {
  return (
    <div className="flex w-full flex-col items-start overflow-hidden rounded-2xl border border-line bg-surface shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-[border-color,box-shadow] hover:border-primary hover:shadow-[0px_10px_10px_0px_rgba(0,0,0,0.03)]">
      <div className="relative h-[250px] w-full bg-[#d9dade]">
        <Image src={image} alt={city} fill className="object-cover" />
      </div>
      <div className="flex w-full flex-col items-start gap-2 p-6">
        <div className="flex w-full items-center gap-2">
          <MapPin className="size-4 text-ink-soft" />
          <h3 className="font-heading text-h5 font-semibold text-ink">
            {city}
          </h3>
        </div>
        <p className="w-full text-sm font-bold text-ink-soft">{region}</p>
        <div className="flex w-full flex-col items-start gap-[7.5px] pt-2">
          <div className="flex w-full items-center gap-2">
            <Navigation className="size-4 shrink-0 text-ink-soft" />
            <p className="text-base text-ink-soft">{address}</p>
          </div>
          <div className="flex w-full items-center gap-2">
            <Phone className="size-4 shrink-0 text-body" />
            <p className="text-base text-body">{phone}</p>
          </div>
          <div className="flex w-full items-center gap-2">
            <Inbox className="size-4 shrink-0 text-ink-soft" />
            <p className="text-base text-ink-soft">{postalBox}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
