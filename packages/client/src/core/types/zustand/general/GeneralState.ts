import {
  TechCategory,
  TechSkillWithTechWithContent,
} from "@personal-portfolio-website/shared";
import { GetProjectsDataType } from "../entity";

export type GeneralState = {
  colorTheme: "dark" | "light";
  weeklyMealPrepCurrentImageIndex: number;

  currentTechSkillCategory: TechCategory;
  currentTechSkill: TechSkillWithTechWithContent | undefined;

  techSkills: TechSkillWithTechWithContent[];

  getProjectsData: GetProjectsDataType;

  currentProjectId: string;

  currentProjectImage: string;
};
