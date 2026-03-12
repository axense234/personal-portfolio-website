import { ProjectWithEverything } from "@personal-portfolio-website/shared";

export type GetProjectsDataType = {
  isError: boolean;
  isLoading: boolean;
  projects: ProjectWithEverything[];
};
