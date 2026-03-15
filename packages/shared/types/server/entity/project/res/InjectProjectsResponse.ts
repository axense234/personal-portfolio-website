import { StatusCodes } from "http-status-codes";
import { ProjectWithEverything } from "../extra";

export interface InjectProjectsResponse {
  status: StatusCodes;
  message: string;
  projects: ProjectWithEverything[];
}
