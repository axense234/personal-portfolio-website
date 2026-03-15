// Types
import { SetGeneralStoreFunctionType } from "@/core/interfaces";
import { GeneralState, GetProjectsDataType } from "@/core/types";
import {
  TechCategory,
  TechSkillWithTechWithContent,
} from "@personal-portfolio-website/shared";

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

export const setCurrentTechCategory = (
  set: SetGeneralStoreFunctionType,
  category: TechCategory,
) =>
  set((state: GeneralState) => ({
    currentTechSkillCategory: category,
  }));

export const setCurrentTechSkill = (
  set: SetGeneralStoreFunctionType,
  skill: TechSkillWithTechWithContent,
) =>
  set((state: GeneralState) => ({
    currentTechSkill: skill,
  }));

export const setTechSkills = (
  set: SetGeneralStoreFunctionType,
  techSkills: TechSkillWithTechWithContent[],
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
      (skill) => skill.tech.category == category,
    )[0],
  }));

export const setGetProjectsData = (
  set: SetGeneralStoreFunctionType,
  data: GetProjectsDataType,
) =>
  set((state: GeneralState) => ({
    getProjectsData: data,
  }));

export const setCurrentProjectId = (
  set: SetGeneralStoreFunctionType,
  id: string,
) =>
  set((state: GeneralState) => ({
    currentProjectId: id,
  }));

export const setCurrentOngoingProjectId = (
  set: SetGeneralStoreFunctionType,
  id: string,
) =>
  set((state: GeneralState) => ({
    currentOngoingProjectId: id,
  }));

export const setCurrentProjectImage = (
  set: SetGeneralStoreFunctionType,
  image: string,
) =>
  set((state: GeneralState) => ({
    currentProjectImage: image,
  }));

export const setCurrentOngoingProjectImage = (
  set: SetGeneralStoreFunctionType,
  image: string,
) =>
  set((state: GeneralState) => ({
    currentOngoingProjectImage: image,
  }));

export const setContactFormDataKeyValue = (
  set: SetGeneralStoreFunctionType,
  key: string,
  value: string,
) =>
  set((state: GeneralState) => ({
    contactFormData: { ...state.contactFormData, [key]: value },
  }));

export const setProjectsQueryDataKeyValue = (
  set: SetGeneralStoreFunctionType,
  key: string,
  value: string,
) =>
  set((state: GeneralState) => ({
    projectsQueryData: { ...state.projectsQueryData, [key]: value },
  }));

export const setProjectsQueryDataSearch = (
  set: SetGeneralStoreFunctionType,
  value: string,
) =>
  set((state: GeneralState) => ({
    projectsQueryData: {
      ...state.projectsQueryData,
      search: { ...state.projectsQueryData.search, current: value },
    },
  }));
