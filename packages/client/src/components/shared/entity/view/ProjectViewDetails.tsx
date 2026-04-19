"use client";
// SCSS
import projectViewDetailsStyles from "@/scss/components/shared/entity/view/ProjectViewDetails.module.scss";
// Components
import LinkButton from "../../LinkButton";
import IconComponent from "../../IconComponent";
import ProjectExternals from "../project/ProjectExternals";
// React
import { FC } from "react";
// Interfaces
import { ProjectViewDetailsProps } from "@/core/interfaces";
// Hooks
import { useGetWindowWidth } from "@/hooks";
// Data
import {
  projectViewDetailsAwardsLabel,
  projectViewDetailsCTADest,
  projectViewDetailsCTALabel,
  projectViewDetailsProjectDescriptionLabel,
  projectViewDetailsProjectTechUsedLabel,
} from "@/data";

const ProjectViewDetails: FC<ProjectViewDetailsProps> = ({
  project,
  viewType,
  index,
}) => {
  const projectSkillsShown = project?.skills?.filter(
    (skill) => skill.tech_id !== "ts-backend",
  );
  const windowWidth = useGetWindowWidth();
  const iconSize = windowWidth && windowWidth <= 900 ? 32 : 40;

  let linkButtonSize: "large" | "small" | "medium" = "large";

  if (windowWidth && windowWidth <= 1200) {
    linkButtonSize = "medium";
  } else if (windowWidth && windowWidth <= 1500) {
    linkButtonSize = "large";
  } else {
    linkButtonSize = "large";
  }

  return (
    <div className={projectViewDetailsStyles.container}>
      <div className={projectViewDetailsStyles.header}>
        <h4>{project.name}</h4>
        {project.project_phase && <h6>{project.project_phase}</h6>}
      </div>
      <div className={projectViewDetailsStyles.content}>
        {viewType === "awards" && (
          <div className={projectViewDetailsStyles.awards}>
            <h6>{projectViewDetailsAwardsLabel}</h6>
            <ul className={projectViewDetailsStyles.awardsWrapper}>
              {project.awards.map((award) => {
                return (
                  <li key={award.id}>
                    <p>{award.desc}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className={projectViewDetailsStyles.desc}>
          <h6>{projectViewDetailsProjectDescriptionLabel}</h6>
          <p>{project.short_desc}</p>
        </div>
        <div className={projectViewDetailsStyles.tech}>
          <h6>{projectViewDetailsProjectTechUsedLabel}</h6>
          <ul className={projectViewDetailsStyles.techWrapper}>
            {projectSkillsShown.map((skill) => {
              return (
                <li key={skill.id}>
                  <IconComponent {...skill.tech} height={iconSize} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={projectViewDetailsStyles.buttons}>
        <LinkButton
          colorSpecifier={index}
          dest={projectViewDetailsCTADest}
          label={projectViewDetailsCTALabel}
          size={linkButtonSize}
        />
        <ProjectExternals {...project} />
      </div>
    </div>
  );
};

export default ProjectViewDetails;
