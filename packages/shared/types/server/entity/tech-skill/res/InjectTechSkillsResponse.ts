import { StatusCodes } from "http-status-codes";
import { TechSkill } from "../../../../prisma/client";

export interface InjectTechSkillsResponse {
  status: StatusCodes;
  message: string;
  techSkills: TechSkill[];
}
