import { StatusCodes } from "http-status-codes";
import { ProjectWithImages } from "../extra";

export interface GetProjectsResponse {
  status: StatusCodes;
  message: string;
  projects: ProjectWithImages[];
}
