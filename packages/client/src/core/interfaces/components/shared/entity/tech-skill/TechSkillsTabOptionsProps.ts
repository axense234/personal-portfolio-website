// Shared
import { TechSkillWithTechWithContent } from "@personal-portfolio-website/shared";

export interface TechSkillsTabOptionsProps {
  skills: TechSkillWithTechWithContent[];
  currentSkill: TechSkillWithTechWithContent | undefined;
  onTabOptionClickFunc: (skill: TechSkillWithTechWithContent) => void;
}
