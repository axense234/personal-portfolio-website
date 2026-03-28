"use client";
// Components
import ProjectViewDetails from "./ProjectViewDetails";
import EntityViewImages from "../EntityViewImages";
// SCSS
import projectViewStyles from "@/scss/components/shared/entity/view/ProjectView.module.scss";
// React
import { FC, useEffect } from "react";
// Interfaces
import { ProjectViewProps } from "@/core/interfaces";
// Hooks
import { useGetProjectViewDetails } from "@/hooks";
import useGetWindowWidth from "@/hooks/general/useGetWindowWidth";
// Shared
import { ProjectWithEverything } from "@personal-portfolio-website/shared";

const ProjectView: FC<ProjectViewProps> = ({
  viewType,
  displayMode,
  project,
  index,
  currentProjectId,
  currentProjectImage,
  projects,
  setCurrentProjectImage,
  isError,
  isLoading,
}) => {
  const usedProjects =
    displayMode === "dynamic" && projects
      ? projects
      : ([project] as ProjectWithEverything[]);

  const specificEntityImagesType =
    viewType === "awards" ? "project-awards" : "project-images";

  const windowWidth = useGetWindowWidth();
  const projectImagesPosition = windowWidth <= 1500 ? "top" : "bottom";

  const {
    viewImages,
    currentProject,
    currentProjectImageUsed,
    currentProjectImageUsedSetter,
  } = useGetProjectViewDetails(
    displayMode,
    viewType,
    usedProjects,
    currentProjectId,
    currentProjectImage,
    setCurrentProjectImage,
  );

  useEffect(() => {
    if (displayMode === "dynamic" && setCurrentProjectImage) {
      setCurrentProjectImage(viewImages[0]);
    }
  }, [currentProjectId]);

  if (isError) {
    return <div>is error</div>;
  }

  if (isLoading) {
    return <div>is loading</div>;
  }

  if (!usedProjects || usedProjects.length < 1) {
    return <div>not found</div>;
  }

  return (
    <div className={projectViewStyles.container}>
      {projectImagesPosition === "top" && (
        <EntityViewImages
          images={viewImages}
          entityType={specificEntityImagesType}
          currentEntityImage={currentProjectImageUsed}
          setCurrentEntityImage={currentProjectImageUsedSetter}
        />
      )}
      <ProjectViewDetails
        project={currentProject}
        viewType={viewType}
        index={index}
      />
      {projectImagesPosition === "bottom" && (
        <EntityViewImages
          images={viewImages}
          entityType={specificEntityImagesType}
          currentEntityImage={currentProjectImageUsed}
          setCurrentEntityImage={currentProjectImageUsedSetter}
        />
      )}
    </div>
  );
};

export default ProjectView;
