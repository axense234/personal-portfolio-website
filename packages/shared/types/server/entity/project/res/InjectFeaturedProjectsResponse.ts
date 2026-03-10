import { StatusCodes } from "http-status-codes";
import { ProjectWithImagesWithAwards } from "../extra";

export interface InjectFeaturedProjectsResponse {
  status: StatusCodes;
  message: string;
  projects: ProjectWithImagesWithAwards[];
}
