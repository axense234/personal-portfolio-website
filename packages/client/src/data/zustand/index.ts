import {
  GetMealPrepsDataType,
  GetProjectsDataType,
  GetTechDataType,
  GetWeeklyMealPrepDataType,
  ProjectsQueryDataType,
} from "@/core/types";
import {
  SendEmailOptions,
  TechCategory,
  TechSkillWithTechWithContent,
} from "@personal-portfolio-website/shared";

export const defaultColorTheme: "dark" | "light" = "dark";
export const defaultWeeklyMealPrepCurrentImageIndex: number = 0;

export const defaultCurrentTechSkillCategory: TechCategory = "FRONTEND";

export const defaultCurrentTechSkill: TechSkillWithTechWithContent | undefined =
  undefined;

export const defaultTechSkills: TechSkillWithTechWithContent[] = [];

export const defaultGetProjectsData: GetProjectsDataType = {
  isError: false,
  isLoading: true,
  projects: [],
};

export const defaultGetTechData: GetTechDataType = {
  isError: false,
  isLoading: true,
  tech: [],
};

export const defaultGetMealPrepsData: GetMealPrepsDataType = {
  isError: false,
  isLoading: true,
  mealPreps: [],
};

export const defaultGetWeeklyMealPrepsData: GetWeeklyMealPrepDataType = {
  isError: false,
  isLoading: true,
  mealPrep: undefined,
};

export const defaultCurrentProjectId: string = "";
export const defaultCurrentOngoingProjectId: string = "";
export const defaultCurrentProjectImage: string = "";
export const defaultCurrentOngoingProjectImage: string = "";

export const defaultCurrentMealPrepId: string = "";
export const defaultCurrentMealPrepImage: string = "";

export const defaultContactFormData: SendEmailOptions = {
  email: "",
  name: "",
  message: "",
  subject: "",
};

export const defaultProjectsQueryData: ProjectsQueryDataType = {
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
  sortBy: {
    scope: "sort",
    label: "Sort",
    sortingOptions: new Map(),
    onAddSortingOption: () => {},
    onRemoveSortingOption: () => {},
  },
  filterValues: [],
};
