import { ProjectWithEverything } from "@personal-portfolio-website/shared";

export const getProjectViewData = (
  projectsData: ProjectWithEverything[],
  currentProjectId: string,
  viewType: "awards" | "normal",
) => {
  let currentProject: ProjectWithEverything = projectsData[0];

  if (projectsData.length == 1) {
    currentProject = projectsData[0];
  } else {
    currentProject =
      projectsData?.find((project) => project.id === currentProjectId) ||
      projectsData[0];
  }

  const viewImages =
    viewType == "awards"
      ? currentProject?.awards.map((award) => award.image_src) || []
      : currentProject?.images?.screenshots || [];

  return { currentProject, viewImages };
};
