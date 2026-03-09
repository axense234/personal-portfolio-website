import { StatusCodes } from "http-status-codes";
import { TechSkillWithTechWithContent } from "../extra";

export interface InjectTechSkillsResponse {
  status: StatusCodes;
  message: string;
  techSkills: TechSkillWithTechWithContent[];
}
