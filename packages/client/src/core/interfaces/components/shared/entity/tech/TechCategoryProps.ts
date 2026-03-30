import { Tech } from "@personal-portfolio-website/shared";

export interface TechCategoryProps {
  id?: number;
  label: string;
  skills: Tech[];

  isFunctional: boolean;
  onTechIconClick?: (techId: string) => void;

  selectedTech?: string[];

  iconHeight?: number;
}
