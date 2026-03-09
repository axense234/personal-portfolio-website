import { StatusCodes } from "http-status-codes";
import { TechSkillWithTechWithContent } from "../extra";

export interface CreateTechSkillResponse {
  status: StatusCodes;
  message: string;
  techSkill: TechSkillWithTechWithContent;
}
