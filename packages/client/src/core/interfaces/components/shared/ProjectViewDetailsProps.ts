// Shared
import { ProjectWithImagesWithAwards } from "@personal-portfolio-website/shared";

export interface ProjectViewDetailsProps {
  project: ProjectWithImagesWithAwards;
  viewType: "awards" | "normal";
}
