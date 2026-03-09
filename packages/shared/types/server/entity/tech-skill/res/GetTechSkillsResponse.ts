import { StatusCodes } from "http-status-codes";
import { TechSkillWithTechWithContent } from "../extra";

export interface GetTechSkillsResponse {
  status: StatusCodes;
  message: string;
  techSkills: TechSkillWithTechWithContent[];
}
