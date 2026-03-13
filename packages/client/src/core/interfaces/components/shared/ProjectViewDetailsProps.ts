// Shared
import { ProjectWithEverything } from "@personal-portfolio-website/shared";

export interface ProjectViewDetailsProps {
  project: ProjectWithEverything;
  viewType: "awards" | "normal";
  index: number;
}
