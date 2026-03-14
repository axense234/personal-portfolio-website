// React
import { useState } from "react";
// Shared
import { ProjectWithEverything } from "@personal-portfolio-website/shared";

export const useGetProjectViewDetails = (
  displayMode: "dynamic" | "static",
  viewType: "awards" | "normal",
  projects: ProjectWithEverything[],
  currentProjectId: string,
  currentProjectImage: string,
  setCurrentProjectImage: (image: string) => void,
) => {
  let currentProject: ProjectWithEverything = projects[0];

  if (projects.length == 1) {
    currentProject = projects[0];
  } else {
    currentProject =
      projects?.find((project) => project.id === currentProjectId) ||
      projects[0];
  }

  const viewImages =
    viewType == "awards"
      ? currentProject?.awards.map((award) => award.image_src) || []
      : currentProject?.images?.thumb && currentProject?.images?.screenshots
        ? [currentProject?.images?.thumb].concat(
            currentProject?.images?.screenshots,
          )
        : [];

  const [currentEntityImageLocal, setCurrentEntityImageLocal] =
    useState<string>(viewImages[0]);

  const currentProjectImageWithDefault =
    currentProjectImage?.length === 0 ? viewImages[0] : currentProjectImage;

  const currentProjectImageLocalWithDefault =
    currentEntityImageLocal?.length === 0
      ? viewImages[0]
      : currentEntityImageLocal;

  const currentProjectImageUsed =
    displayMode === "dynamic"
      ? currentProjectImageWithDefault
      : currentProjectImageLocalWithDefault;

  const currentProjectImageUsedSetter =
    displayMode === "dynamic"
      ? setCurrentProjectImage
      : setCurrentEntityImageLocal;

  return {
    viewImages,
    currentProject,
    currentProjectImageUsed,
    currentProjectImageUsedSetter,
  };
};
