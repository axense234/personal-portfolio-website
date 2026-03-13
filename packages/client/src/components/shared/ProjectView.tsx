"use client";
// Components
import EntityViewImages from "./EntityViewImages";
import ProjectViewDetails from "./ProjectViewDetails";
// SCSS
import projectViewStyles from "@/scss/components/shared/ProjectView.module.scss";
// React
import { FC, useEffect } from "react";
// zusstradn
import { useGeneralStore } from "@/zustand/general/context";
// Interfaces
import { ProjectViewProps } from "@/core/interfaces";
// Hooks
import { useGetProjectViewDetails } from "@/hooks";
// Shared
import { ProjectWithEverything } from "@personal-portfolio-website/shared";

const ProjectView: FC<ProjectViewProps> = ({
  viewType,
  displayMode,
  project,
  index,
}) => {
  const {
    currentProjectId,
    getProjectsData,
    currentProjectImage,
    setCurrentProjectImage,
  } = useGeneralStore((state) => state);

  const projects =
    displayMode === "static"
      ? ([project] as ProjectWithEverything[])
      : getProjectsData?.projects;

  const {
    viewImages,
    currentProject,
    currentProjectImageUsed,
    currentProjectImageUsedSetter,
  } = useGetProjectViewDetails(
    displayMode,
    viewType,
    projects,
    currentProjectId,
    currentProjectImage,
    setCurrentProjectImage,
  );

  useEffect(() => {
    if (displayMode === "dynamic") {
      setCurrentProjectImage(viewImages[0]);
    }
  }, [currentProjectId]);

  return (
    <div className={projectViewStyles.container}>
      <ProjectViewDetails
        project={currentProject}
        viewType={viewType}
        index={index}
      />
      <EntityViewImages
        images={viewImages}
        entityType="project"
        currentEntityImage={currentProjectImageUsed}
        setCurrentEntityImage={currentProjectImageUsedSetter}
      />
    </div>
  );
};

export default ProjectView;
