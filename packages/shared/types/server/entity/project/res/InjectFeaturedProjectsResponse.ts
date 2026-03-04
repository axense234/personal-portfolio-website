import { StatusCodes } from "http-status-codes";
import { Project } from "../../../../prisma/client";

export interface InjectFeaturedProjectsResponse {
  status: StatusCodes;
  message: string;
  projects: Project[];
}
