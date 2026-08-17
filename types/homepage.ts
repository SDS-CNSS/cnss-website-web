export interface ServiceItem {
  href: string;
  icon: string;
  title: string;
  description: string;
}

export interface AgencyItem {
  image: string;
  city: string;
  region: string;
  address: string;
  phone: string;
  postalBox: string;
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}
