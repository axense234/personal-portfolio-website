import { StatusCodes } from "http-status-codes";
import { TechSkill } from "../../../../prisma/client";

export interface GetTechSkillsResponse {
  status: StatusCodes;
  message: string;
  techSkills: TechSkill[];
}
