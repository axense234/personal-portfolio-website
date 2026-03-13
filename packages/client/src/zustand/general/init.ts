// Types
import { GeneralState } from "@/core/types";
// Data
import { defaultContactFormData } from "@/data";

export const defaultInitState: GeneralState = {
  colorTheme: "dark",

  weeklyMealPrepCurrentImageIndex: 0,

  currentTechSkillCategory: "FRONTEND",
  currentTechSkill: undefined,

  techSkills: [],

  getProjectsData: { isError: false, isLoading: true, projects: [] },

  currentProjectId: "",

  currentProjectImage: "",

  contactFormData: defaultContactFormData,
};
