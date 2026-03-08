import { TechCategory, TechSkill } from "@personal-portfolio-website/shared";

export type GeneralState = {
  colorTheme: "dark" | "light";
  weeklyMealPrepCurrentImageIndex: number;

  currentTechSkillCategory: TechCategory;
  currentTechSkill: string;

  techSkills: TechSkill[];
};
