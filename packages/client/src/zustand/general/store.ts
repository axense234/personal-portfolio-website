// Types
import {
  GeneralState,
  GeneralStore,
  GetMealPrepsDataType,
  GetProjectsDataType,
  GetTechDataType,
  GetWeeklyMealPrepDataType,
} from "@/core/types";
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
  setCurrentMealPrepId,
  setCurrentMealPrepImage,
  setGetMealPrepsData,
  setGetWeeklyMealPrepData,
  setColorTheme,
  setProjectsQueryDataSortBy,
  setProjectsQueryDataSortByOptions,
  setProjectsQueryDataSortByOption,
  setGetTechData,
  setMealPrepsQueryDataSortBy,
  setMealPrepsQueryDataSortByOption,
  setMealPrepsQueryDataSortByOptions,
  setMealPrepsQueryDataSearch,
} from "./actions";
// Thunks
import { sendEmailWithContactForm } from "./thunks";
// Interfaces
import {
  SelectFormControlProps,
  SortByFormControlProps,
} from "@/core/interfaces";

export const createGeneralStore = (
  initState: GeneralState = defaultInitState,
) => {
  return createStore<GeneralStore>()((set, get) => ({
    ...initState,

    setCurrentMealPrepId: (id: string) => setCurrentMealPrepId(set, id),
    setCurrentMealPrepImage: (img: string) => setCurrentMealPrepImage(set, img),

    setProjectsQueryDataSearch: (value: string) =>
      setProjectsQueryDataSearch(set, value),

    setMealPrepsQueryDataSearch: (value: string) =>
      setMealPrepsQueryDataSearch(set, value),

    setProjectsQueryDataSortByOptions: (
      value: SelectFormControlProps,
      specifier: "remove" | "add",
    ) => setProjectsQueryDataSortByOptions(set, value, specifier),

    setProjectsQueryDataSortByOption: (value: SelectFormControlProps) =>
      setProjectsQueryDataSortByOption(set, value),

    setProjectsQueryDataSortBy: (value: SortByFormControlProps) =>
      setProjectsQueryDataSortBy(set, value),

    setMealPrepsQueryDataSortByOptions: (
      value: SelectFormControlProps,
      specifier: "remove" | "add",
    ) => setMealPrepsQueryDataSortByOptions(set, value, specifier),

    setMealPrepsQueryDataSortByOption: (value: SelectFormControlProps) =>
      setMealPrepsQueryDataSortByOption(set, value),

    setMealPrepsQueryDataSortBy: (value: SortByFormControlProps) =>
      setMealPrepsQueryDataSortBy(set, value),

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

    setGetTechData: (data: GetTechDataType) => setGetTechData(set, data),

    setGetMealPrepsData: (data: GetMealPrepsDataType) =>
      setGetMealPrepsData(set, data),

    setGetWeeklyMealPrepData: (data: GetWeeklyMealPrepDataType) =>
      setGetWeeklyMealPrepData(set, data),

    toggleColorTheme: () => toggleColorTheme(set),

    setColorTheme: (theme: "dark" | "light") => setColorTheme(set, theme),

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
