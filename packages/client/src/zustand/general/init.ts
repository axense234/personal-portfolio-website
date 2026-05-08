// Types
import { GeneralState } from "@/core/types";
// Data
import {
  defaultColorTheme,
  defaultContactFormData,
  defaultCurrentMealPrepId,
  defaultCurrentMealPrepImage,
  defaultCurrentOngoingProjectId,
  defaultCurrentOngoingProjectImage,
  defaultCurrentProjectId,
  defaultCurrentProjectImage,
  defaultCurrentTechSkill,
  defaultCurrentTechSkillCategory,
  defaultGetMealPrepsData,
  defaultGetProjectsData,
  defaultGetTechData,
  defaultGetWeeklyMealPrepsData,
  defaultMealPrepsQueryData,
  defaultProjectsQueryData,
  defaultTechSkills,
  defaultWeeklyMealPrepCurrentImageIndex,
} from "@/data";

export const defaultInitState: GeneralState = {
  colorTheme: defaultColorTheme,

  weeklyMealPrepCurrentImageIndex: defaultWeeklyMealPrepCurrentImageIndex,

  currentTechSkillCategory: defaultCurrentTechSkillCategory,
  currentTechSkill: defaultCurrentTechSkill,

  techSkills: defaultTechSkills,

  getProjectsData: defaultGetProjectsData,
  getTechData: defaultGetTechData,
  getMealPrepsData: defaultGetMealPrepsData,
  getWeeklyMealPrepData: defaultGetWeeklyMealPrepsData,

  currentProjectId: defaultCurrentProjectId,
  currentOngoingProjectId: defaultCurrentOngoingProjectId,

  currentProjectImage: defaultCurrentProjectImage,
  currentOngoingProjectImage: defaultCurrentOngoingProjectImage,

  currentMealPrepId: defaultCurrentMealPrepId,
  currentMealPrepImage: defaultCurrentMealPrepImage,

  contactFormData: defaultContactFormData,

  projectsQueryData: defaultProjectsQueryData,
  mealPrepsQueryData: defaultMealPrepsQueryData,
};
