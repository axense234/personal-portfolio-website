import { ProjectWithEverything } from "@personal-portfolio-website/shared";

export interface ProjectViewProps {
  viewType: "awards" | "normal";

  displayMode: "dynamic" | "static";

  project?: ProjectWithEverything;
}
