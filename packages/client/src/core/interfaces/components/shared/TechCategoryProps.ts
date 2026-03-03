import { TechSkillProps } from "./TechSkillProps";

export interface TechCategoryProps {
  id?: number;
  label: string;
  skills: TechSkillProps[];
}
