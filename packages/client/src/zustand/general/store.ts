// Types
import { GeneralState, GeneralStore, GetProjectsDataType } from "@/core/types";
import {
  SendEmailOptions,
  TechCategory,
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
  setContactFormDataKeyValue,
  setProjectsQueryDataKeyValue,
  setProjectsQueryDataSearch,
  setCurrentOngoingProjectId,
  setCurrentOngoingProjectImage,
} from "./actions";
// Thunks
import { sendEmailWithContactForm } from "./thunks";

export const createGeneralStore = (
  initState: GeneralState = defaultInitState,
) => {
  return createStore<GeneralStore>()((set, get) => ({
    ...initState,

    setProjectsQueryDataSearch: (value: string) =>
      setProjectsQueryDataSearch(set, value),

    setProjectsQueryDataKeyValue: (key: string, value: string) =>
      setProjectsQueryDataKeyValue(set, key, value),

    setContactFormDataKeyValue: (key: string, value: string) =>
      setContactFormDataKeyValue(set, key, value),

    setCurrentProjectImage: (img: string) => setCurrentProjectImage(set, img),
    setCurrentOngoingProjectImage: (img: string) =>
      setCurrentOngoingProjectImage(set, img),

    setCurrentProjectId: (id: string) => setCurrentProjectId(set, id),
    setCurrentOngoingProjectId: (id: string) =>
      setCurrentOngoingProjectId(set, id),

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

    sendEmailWithContactForm: (dto: SendEmailOptions) =>
      sendEmailWithContactForm(dto),
  }));
};
