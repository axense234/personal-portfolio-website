import {
  TechCategory,
  TechSkillWithTechWithContent,
} from "@personal-portfolio-website/shared";

export type GeneralState = {
  colorTheme: "dark" | "light";
  weeklyMealPrepCurrentImageIndex: number;

  currentTechSkillCategory: TechCategory;
  currentTechSkill: TechSkillWithTechWithContent | undefined;

  techSkills: TechSkillWithTechWithContent[];
};
