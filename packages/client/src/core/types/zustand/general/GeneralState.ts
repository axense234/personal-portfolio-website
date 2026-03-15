import {
  SendEmailOptions,
  TechCategory,
  TechSkillWithTechWithContent,
} from "@personal-portfolio-website/shared";
import { GetProjectsDataType, ProjectsQueryDataType } from "../entity";

export type GeneralState = {
  colorTheme: "dark" | "light";
  weeklyMealPrepCurrentImageIndex: number;

  currentTechSkillCategory: TechCategory;
  currentTechSkill: TechSkillWithTechWithContent | undefined;

  techSkills: TechSkillWithTechWithContent[];

  getProjectsData: GetProjectsDataType;

  currentProjectId: string;
  currentOngoingProjectId: string;
  currentProjectImage: string;
  currentOngoingProjectImage: string;

  contactFormData: SendEmailOptions;

  projectsQueryData: ProjectsQueryDataType;
};
