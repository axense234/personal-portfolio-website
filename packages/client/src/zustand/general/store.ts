// Types
import { GeneralState, GeneralStore, GetProjectsDataType } from "@/core/types";
import {
  TechCategory,
  TechSkill,
  TechSkillWithTechWithContent,
} from "@personal-portfolio-website/shared";
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
  setGetProjectsData,
  setCurrentProjectId,
  setCurrentProjectImage,
} from "./actions";

export const createGeneralStore = (
  initState: GeneralState = defaultInitState,
) => {
  return createStore<GeneralStore>()((set) => ({
    ...initState,

    setCurrentProjectImage: (img: string) => setCurrentProjectImage(set, img),

    setCurrentProjectId: (id: string) => setCurrentProjectId(set, id),

    setGetProjectsData: (data: GetProjectsDataType) =>
      setGetProjectsData(set, data),

    toggleColorTheme: () => toggleColorTheme(set),

    handleWeeklyMealPrepImagesCarousel: (index: number) =>
      handleWeeklyMealPrepImagesCarousel(set, index),

    setCurrentTechSkillCategory: (category: TechCategory) =>
      setCurrentTechCategory(set, category),

    setCurrentTechSkill: (skill: TechSkillWithTechWithContent) =>
      setCurrentTechSkill(set, skill),

    setTechSkills: (techSkills: TechSkillWithTechWithContent[]) =>
      setTechSkills(set, techSkills),

    handleOnTechSkillCategoryTabClick: (category: TechCategory) =>
      handleOnTechSkillCategoryTabClick(set, category),
  }));
};
