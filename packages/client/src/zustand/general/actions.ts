// Types
import {
  SelectFormControlProps,
  SetGeneralStoreFunctionType,
  SortByFormControlProps,
} from "@/core/interfaces";
import {
  GeneralState,
  GetMealPrepsDataType,
  GetProjectsDataType,
  GetTechDataType,
  GetWeeklyMealPrepDataType,
} from "@/core/types";
import {
  TechCategory,
  TechSkillWithTechWithContent,
} from "@personal-portfolio-website/shared";

export const toggleColorTheme = (set: SetGeneralStoreFunctionType) =>
  set((state: GeneralState) => ({
    colorTheme: state?.colorTheme === "dark" ? "light" : "dark",
  }));

export const setColorTheme = (
  set: SetGeneralStoreFunctionType,
  theme: "dark" | "light",
) =>
  set((state: GeneralState) => ({
    colorTheme: theme,
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

export const setGetTechData = (
  set: SetGeneralStoreFunctionType,
  data: GetTechDataType,
) =>
  set((state: GeneralState) => ({
    getTechData: data,
  }));

export const setGetMealPrepsData = (
  set: SetGeneralStoreFunctionType,
  data: GetMealPrepsDataType,
) =>
  set((state: GeneralState) => ({
    getMealPrepsData: data,
  }));

export const setGetWeeklyMealPrepData = (
  set: SetGeneralStoreFunctionType,
  data: GetWeeklyMealPrepDataType,
) =>
  set((state: GeneralState) => ({
    getWeeklyMealPrepData: data,
  }));

export const setCurrentProjectId = (
  set: SetGeneralStoreFunctionType,
  id: string,
) =>
  set((state: GeneralState) => ({
    currentProjectId: id,
  }));

export const setCurrentMealPrepId = (
  set: SetGeneralStoreFunctionType,
  id: string,
) =>
  set((state: GeneralState) => ({
    currentMealPrepId: id,
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

export const setCurrentMealPrepImage = (
  set: SetGeneralStoreFunctionType,
  image: string,
) =>
  set((state: GeneralState) => ({
    currentMealPrepImage: image,
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

export const setProjectsQueryDataSortByOptions = (
  set: SetGeneralStoreFunctionType,
  value: SelectFormControlProps,
  specifier: "remove" | "add",
) =>
  set((state: GeneralState) => {
    const currentMap = state.projectsQueryData.sortBy.sortingOptions as Map<
      number,
      SelectFormControlProps
    >;
    const newMap = new Map(currentMap);

    if (specifier === "add") {
      newMap.set(Number(value.id), { ...value });
    } else if (specifier === "remove") {
      newMap.delete(Number(value.id));
    }

    return {
      projectsQueryData: {
        ...state.projectsQueryData,
        sortBy: {
          ...state.projectsQueryData.sortBy,
          sortingOptions: newMap,
        },
      },
    };
  });

export const setProjectsQueryDataSortByOption = (
  set: SetGeneralStoreFunctionType,
  value: SelectFormControlProps,
) =>
  set((state: GeneralState) => {
    const currentMap = state.projectsQueryData.sortBy.sortingOptions as Map<
      number,
      SelectFormControlProps
    >;
    const newMap = new Map(currentMap);

    const existingValue = newMap.get(value.id);
    newMap.set(value.id, { ...existingValue, ...value });

    return {
      projectsQueryData: {
        ...state.projectsQueryData,
        sortBy: {
          ...state.projectsQueryData.sortBy,
          sortingOptions: newMap,
        },
      },
    };
  });

export const setProjectsQueryDataSortBy = (
  set: SetGeneralStoreFunctionType,
  value: SortByFormControlProps,
) =>
  set((state: GeneralState) => ({
    projectsQueryData: {
      ...state.projectsQueryData,
      sortBy: {
        ...value,
      },
    },
  }));

export const setMealPrepsQueryDataSearch = (
  set: SetGeneralStoreFunctionType,
  value: string,
) =>
  set((state: GeneralState) => ({
    mealPrepsQueryData: {
      ...state.mealPrepsQueryData,
      search: { ...state.mealPrepsQueryData.search, current: value },
    },
  }));

export const setMealPrepsQueryDataSortByOptions = (
  set: SetGeneralStoreFunctionType,
  value: SelectFormControlProps,
  specifier: "remove" | "add",
) =>
  set((state: GeneralState) => {
    const currentMap = state.mealPrepsQueryData.sortBy.sortingOptions as Map<
      number,
      SelectFormControlProps
    >;
    const newMap = new Map(currentMap);

    if (specifier === "add") {
      newMap.set(Number(value.id), { ...value });
    } else if (specifier === "remove") {
      newMap.delete(Number(value.id));
    }

    return {
      mealPrepsQueryData: {
        ...state.mealPrepsQueryData,
        sortBy: {
          ...state.mealPrepsQueryData.sortBy,
          sortingOptions: newMap,
        },
      },
    };
  });

export const setMealPrepsQueryDataSortByOption = (
  set: SetGeneralStoreFunctionType,
  value: SelectFormControlProps,
) =>
  set((state: GeneralState) => {
    const currentMap = state.mealPrepsQueryData.sortBy.sortingOptions as Map<
      number,
      SelectFormControlProps
    >;
    const newMap = new Map(currentMap);

    const existingValue = newMap.get(value.id);
    newMap.set(value.id, { ...existingValue, ...value });

    return {
      mealPrepsQueryData: {
        ...state.mealPrepsQueryData,
        sortBy: {
          ...state.mealPrepsQueryData.sortBy,
          sortingOptions: newMap,
        },
      },
    };
  });

export const setMealPrepsQueryDataSortBy = (
  set: SetGeneralStoreFunctionType,
  value: SortByFormControlProps,
) =>
  set((state: GeneralState) => ({
    mealPrepsQueryData: {
      ...state.mealPrepsQueryData,
      sortBy: {
        ...value,
      },
    },
  }));
