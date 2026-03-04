import { StatusCodes } from "http-status-codes";
import { Project } from "../../../../prisma/client";

export interface CreateProjectResponse {
  status: StatusCodes;
  message: string;
  project: Project;
}
