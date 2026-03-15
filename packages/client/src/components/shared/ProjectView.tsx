// Components
import EntityViewImages from "./EntityViewImages";
import ProjectViewDetails from "./ProjectViewDetails";
// SCSS
import projectViewStyles from "@/scss/components/shared/ProjectView.module.scss";
// React
import { FC, useEffect } from "react";
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
  currentProjectId,
  currentProjectImage,
  projects,
  setCurrentProjectImage,
}) => {
  const usedProjects =
    displayMode === "static"
      ? ([project] as ProjectWithEverything[])
      : projects;

  const specificEntityImagesType =
    viewType === "awards" ? "project-awards" : "project-images";

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
        entityType={specificEntityImagesType}
        currentEntityImage={currentProjectImageUsed}
        setCurrentEntityImage={currentProjectImageUsedSetter}
      />
    </div>
  );
};

export default ProjectView;
