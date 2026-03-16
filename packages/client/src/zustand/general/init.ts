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
  getMealPrepsData: { isError: false, isLoading: true, mealPreps: [] },
  getWeeklyMealPrepData: {
    isError: false,
    isLoading: true,
    mealPrep: undefined,
  },

  currentProjectId: "",
  currentOngoingProjectId: "",

  currentProjectImage: "",
  currentOngoingProjectImage: "",

  currentMealPrepId: "",
  currentMealPrepImage: "",

  contactFormData: defaultContactFormData,

  projectsQueryData: {
    search: {
      current: "",
      searchFormControlData: (
        current: string,
        setter: (value: string) => void,
      ) => ({
        inputPlaceholder: "VitalPrep",
        label: "Search",
        inputType: "text",
        flow: "row",
        value: current,
        onChange: setter,
      }),
    },
    sortByTest: "",
    filterValues: [],
  },
};
