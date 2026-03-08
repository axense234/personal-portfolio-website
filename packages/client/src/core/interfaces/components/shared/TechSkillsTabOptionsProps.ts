// Shared
import { TechSkill } from "@personal-portfolio-website/shared";

export interface TechSkillsTabOptionsProps {
  skills: TechSkill[];
  currentSkill: string;
  onTabOptionClickFunc: (skill: string) => void;
}
