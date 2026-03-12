"use client";
// Components
import EntityViewImages from "./EntityViewImages";
import ProjectViewDetails from "./ProjectViewDetails";
// SCSS
import projectViewStyles from "@/scss/components/shared/ProjectView.module.scss";
// React
import { FC, useEffect, useMemo, useState } from "react";
// zusstradn
import { useGeneralStore } from "@/zustand/general/context";
// Interfaces
import { ProjectViewProps } from "@/core/interfaces";
// Helpers
import { getProjectViewData } from "@/helpers";

// TODO: create 2 custom hooks for this boy
const ProjectView: FC<ProjectViewProps> = ({
  viewType,
  displayMode,
  project,
}) => {
  const {
    currentProjectId,
    getProjectsData,
    currentProjectImage,
    setCurrentProjectImage,
  } = useGeneralStore((state) => state);

  const usedProjectsData = useMemo(
    () =>
      displayMode === "static" && project
        ? [project]
        : getProjectsData?.projects,
    [displayMode, project, getProjectsData?.projects],
  );
  const { currentProject, viewImages } = getProjectViewData(
    usedProjectsData,
    currentProjectId,
    viewType,
  );

  useEffect(() => {
    if (displayMode === "dynamic") {
      setCurrentProjectImage(viewImages[0]);
    }
  }, [currentProjectId]);

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

  return (
    <div className={projectViewStyles.container}>
      <ProjectViewDetails project={currentProject} viewType={viewType} />
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
