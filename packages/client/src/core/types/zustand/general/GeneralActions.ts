import {
  TechCategory,
  TechSkillWithTechWithContent,
} from "@personal-portfolio-website/shared";
import {
  GetMealPrepsDataType,
  GetProjectsDataType,
  GetTechDataType,
  GetWeeklyMealPrepDataType,
} from "../entity";
import {
  SelectFormControlProps,
  SortByFormControlProps,
} from "@/core/interfaces";

export type GeneralActions = {
  toggleColorTheme: () => void;
  setColorTheme: (theme: "dark" | "light") => void;

  handleWeeklyMealPrepImagesCarousel: (index: number) => void;

  setCurrentTechSkillCategory: (category: TechCategory) => void;
  setCurrentTechSkill: (skill: TechSkillWithTechWithContent) => void;

  setTechSkills: (techSkills: TechSkillWithTechWithContent[]) => void;
  handleOnTechSkillCategoryTabClick: (category: TechCategory) => void;

  setGetProjectsData: (data: GetProjectsDataType) => void;
  setGetTechData: (data: GetTechDataType) => void;
  setGetMealPrepsData: (data: GetMealPrepsDataType) => void;
  setGetWeeklyMealPrepData: (data: GetWeeklyMealPrepDataType) => void;

  setCurrentProjectId: (id: string) => void;
  setCurrentOngoingProjectId: (id: string) => void;

  setCurrentProjectImage: (img: string) => void;
  setCurrentOngoingProjectImage: (img: string) => void;

  setCurrentMealPrepId: (id: string) => void;
  setCurrentMealPrepImage: (img: string) => void;

  setContactFormDataKeyValue: (key: string, value: string) => void;

  setProjectsQueryDataKeyValue: (key: string, value: any) => void;

  setProjectsQueryDataSearch: (value: string) => void;

  setProjectsQueryDataSortByOptions: (
    value: SelectFormControlProps,
    specifier: "remove" | "add",
  ) => void;

  setProjectsQueryDataSortByOption: (value: SelectFormControlProps) => void;

  setProjectsQueryDataSortBy: (value: SortByFormControlProps) => void;
};
