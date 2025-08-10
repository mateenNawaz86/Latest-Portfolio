import { StaticImageData } from "next/image";

export interface NavItem {
  id: string;
  name: string;
}

export interface ExperienceType {
  title: string;
  company_name: string;
  icon: string | StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
}

export interface ExperienceCardProps {
  experience: ExperienceType;
}
