import { TechCategory, TechSkill } from "@personal-portfolio-website/shared";

export type GeneralActions = {
  toggleColorTheme: () => void;
  handleWeeklyMealPrepImagesCarousel: (index: number) => void;
  setCurrentTechSkillCategory: (category: TechCategory) => void;
  setCurrentTechSkill: (skill: string) => void;

  setTechSkills: (techSkills: TechSkill[]) => void;
  handleOnTechSkillCategoryTabClick: (category: TechCategory) => void;
};
