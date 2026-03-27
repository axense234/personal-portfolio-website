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

const ProjectViewDetails: FC<ProjectViewDetailsProps> = ({
  project,
  viewType,
  index,
}) => {
  const projectSkillsShown = project?.skills?.filter(
    (skill) => skill.tech_id !== "ts-backend",
  );

  return (
    <div className={projectViewDetailsStyles.container}>
      <div className={projectViewDetailsStyles.header}>
        <h4>{project.name}</h4>
        {project.project_phase && <h6>{project.project_phase}</h6>}
      </div>
      <div className={projectViewDetailsStyles.content}>
        {viewType === "awards" && (
          <div className={projectViewDetailsStyles.awards}>
            <h6>Project Awards</h6>
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
          <h6>Project Description</h6>
          <p>{project.short_desc}</p>
        </div>
        <div className={projectViewDetailsStyles.tech}>
          <h6>Technologies Used</h6>
          <ul className={projectViewDetailsStyles.techWrapper}>
            {projectSkillsShown.map((skill) => {
              return (
                <li key={skill.id}>
                  <IconComponent {...skill.tech} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={projectViewDetailsStyles.buttons}>
        <LinkButton
          colorSpecifier={index}
          dest="/projects"
          label="See More"
          size="large"
        />
        <ProjectExternals {...project} />
      </div>
    </div>
  );
};

export default ProjectViewDetails;
