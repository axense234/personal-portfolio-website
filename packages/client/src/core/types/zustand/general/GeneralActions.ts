import {
  TechCategory,
  TechSkillWithTechWithContent,
} from "@personal-portfolio-website/shared";
import { GetProjectsDataType } from "../entity";

export type GeneralActions = {
  toggleColorTheme: () => void;

  handleWeeklyMealPrepImagesCarousel: (index: number) => void;

  setCurrentTechSkillCategory: (category: TechCategory) => void;
  setCurrentTechSkill: (skill: TechSkillWithTechWithContent) => void;

  setTechSkills: (techSkills: TechSkillWithTechWithContent[]) => void;
  handleOnTechSkillCategoryTabClick: (category: TechCategory) => void;

  setGetProjectsData: (data: GetProjectsDataType) => void;

  setCurrentProjectId: (id: string) => void;

  setCurrentProjectImage: (img: string) => void;

  setContactFormDataKeyValue: (key: string, value: string) => void;
};
