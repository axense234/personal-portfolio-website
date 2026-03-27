import { TechCategory } from "@personal-portfolio-website/shared";

export interface TechSkillsTabNavProps {
  categories: Set<TechCategory>;
  currentCategory: TechCategory;
  onTabClickFunc: (category: TechCategory) => void;
}
