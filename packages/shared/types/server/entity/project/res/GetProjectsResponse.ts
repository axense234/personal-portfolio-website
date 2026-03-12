import { StatusCodes } from "http-status-codes";
import { ProjectWithEverything } from "../extra";

export interface GetProjectsResponse {
  status: StatusCodes;
  message: string;
  projects: ProjectWithEverything[];
}
