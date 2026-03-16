import { ProjectWithEverything } from "@personal-portfolio-website/shared";

export interface ProjectViewProps {
  viewType: "awards" | "normal";

  displayMode: "dynamic" | "static";

  project?: ProjectWithEverything;

  index: number;

  currentProjectId?: string;
  currentProjectImage?: string;
  setCurrentProjectImage?: (value: string) => void;
  projects?: ProjectWithEverything[];

  isError: boolean;
  isLoading: boolean;
}
