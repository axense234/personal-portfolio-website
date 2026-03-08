// Types
import { SetGeneralStoreFunctionType } from "@/core/interfaces";
import { GeneralState } from "@/core/types";
import { TechCategory, TechSkill } from "@personal-portfolio-website/shared";

export const toggleColorTheme = (set: SetGeneralStoreFunctionType) =>
  set((state: GeneralState) => ({
    colorTheme: state?.colorTheme === "dark" ? "light" : "dark",
  }));

export const handleWeeklyMealPrepImagesCarousel = (
  set: SetGeneralStoreFunctionType,
  index: number,
) =>
  set((state: GeneralState) => ({
    weeklyMealPrepCurrentImageIndex: index,
  }));

export const getTechSkillsOfCurrentCategory = (
  state: GeneralState,
  techSkills: TechSkill[],
) => {
  const skillsBasedOnCategory = techSkills?.filter(
    (skill) => skill.category == state.currentTechSkillCategory,
  );
  return skillsBasedOnCategory;
};

export const setCurrentTechCategory = (
  set: SetGeneralStoreFunctionType,
  category: TechCategory,
) =>
  set((state: GeneralState) => ({
    currentTechSkillCategory: category,
  }));

export const setCurrentTechSkill = (
  set: SetGeneralStoreFunctionType,
  skill: string,
) =>
  set((state: GeneralState) => ({
    currentTechSkill: skill,
  }));

export const setTechSkills = (
  set: SetGeneralStoreFunctionType,
  techSkills: TechSkill[],
) =>
  set((state: GeneralState) => ({
    techSkills,
  }));

export const handleOnTechSkillCategoryTabClick = (
  set: SetGeneralStoreFunctionType,
  category: TechCategory,
) =>
  set((state: GeneralState) => ({
    currentTechSkillCategory: category,
    currentTechSkill: state.techSkills.filter(
      (skill) => skill.category == category,
    )[0].label,
  }));
