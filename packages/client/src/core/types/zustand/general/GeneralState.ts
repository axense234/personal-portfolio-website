// Shared
import {
  SendEmailOptions,
  TechCategory,
  TechSkillWithTechWithContent,
} from "@personal-portfolio-website/shared";
// Entity
import {
  GetMealPrepsDataType,
  GetProjectsDataType,
  GetWeeklyMealPrepDataType,
  ProjectsQueryDataType,
} from "../entity";

export type GeneralState = {
  colorTheme: "dark" | "light";
  weeklyMealPrepCurrentImageIndex: number;

  currentTechSkillCategory: TechCategory;
  currentTechSkill: TechSkillWithTechWithContent | undefined;

  techSkills: TechSkillWithTechWithContent[];

  getProjectsData: GetProjectsDataType;
  getMealPrepsData: GetMealPrepsDataType;
  getWeeklyMealPrepData: GetWeeklyMealPrepDataType;

  currentProjectId: string;
  currentOngoingProjectId: string;

  currentProjectImage: string;
  currentOngoingProjectImage: string;

  currentMealPrepId: string;
  currentMealPrepImage: string;

  contactFormData: SendEmailOptions;

  projectsQueryData: ProjectsQueryDataType;
};
