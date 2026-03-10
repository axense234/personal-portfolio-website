// SCSS
import projectViewDetailsStyles from "@/scss/components/shared/ProjectViewDetails.module.scss";
// Components
import LinkButton from "./LinkButton";
import IconComponent from "./IconComponent";
// React
import { FC } from "react";
// Interfaces
import { ProjectViewDetailsProps } from "@/core/interfaces";

const ProjectViewDetails: FC<ProjectViewDetailsProps> = ({ project }) => {
  return (
    <div className={projectViewDetailsStyles.container}>
      <div className={projectViewDetailsStyles.header}>
        <h4>{project.name}</h4>
        {project.project_phase && <h6>{project.project_phase}</h6>}
      </div>
      <div className={projectViewDetailsStyles.content}>
        <div className={projectViewDetailsStyles.awards}></div>
        <div className={projectViewDetailsStyles.desc}></div>
        <div className={projectViewDetailsStyles.tech}></div>
      </div>
      <div className={projectViewDetailsStyles.buttons}>
        <LinkButton
          color="warning"
          dest="/projects"
          label="See More"
          size="large"
        />
        <div className={projectViewDetailsStyles.externals}>
          {project.github_url && (
            <IconComponent
              dest={project.github_url}
              icon_src="https://res.cloudinary.com/birthdayreminder/image/upload/v1772997441/Personal%20Website/tech-icons/other/github_haotje.png"
              label={`${project.name} Source Code`}
              height={32}
            />
          )}
          {project.website_url && (
            <IconComponent
              dest={project.website_url}
              icon_src={project.website_logo_url as string}
              label={`${project.name} Website`}
              height={32}
            />
          )}
          {project.docs_url && (
            <IconComponent
              dest={project.docs_url}
              icon_src="/misc/swagger.png"
              label={`${project.name} Swagger Api Docs`}
              height={32}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectViewDetails;
