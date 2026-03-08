// Types
import { GeneralState, GeneralStore } from "@/core/types";
import { TechCategory, TechSkill } from "@personal-portfolio-website/shared";
// Zustand
import { createStore } from "zustand/vanilla";
// Default Data
import { defaultInitState } from "./init";
// Actions
import {
  toggleColorTheme,
  handleWeeklyMealPrepImagesCarousel,
  setCurrentTechCategory,
  setCurrentTechSkill,
  setTechSkills,
  handleOnTechSkillCategoryTabClick,
} from "./actions";

export const createGeneralStore = (
  initState: GeneralState = defaultInitState,
) => {
  return createStore<GeneralStore>()((set) => ({
    ...initState,
    toggleColorTheme: () => toggleColorTheme(set),

    handleWeeklyMealPrepImagesCarousel: (index: number) =>
      handleWeeklyMealPrepImagesCarousel(set, index),

    setCurrentTechSkillCategory: (category: TechCategory) =>
      setCurrentTechCategory(set, category),

    setCurrentTechSkill: (skill: string) => setCurrentTechSkill(set, skill),

    setTechSkills: (techSkills: TechSkill[]) => setTechSkills(set, techSkills),

    handleOnTechSkillCategoryTabClick: (category: TechCategory) =>
      handleOnTechSkillCategoryTabClick(set, category),
  }));
};
