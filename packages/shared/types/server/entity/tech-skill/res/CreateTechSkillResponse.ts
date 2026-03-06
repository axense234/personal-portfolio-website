import { StatusCodes } from "http-status-codes";
import { TechSkill } from "../../../../prisma/client";

export interface CreateTechSkillResponse {
  status: StatusCodes;
  message: string;
  techSkill: TechSkill;
}
