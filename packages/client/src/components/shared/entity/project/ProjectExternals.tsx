"use client";
// Shared
import { Project } from "@personal-portfolio-website/shared";
// React
import { FC } from "react";
// Components
import IconComponent from "../../IconComponent";
// SCSS
import projectExternalsStyles from "@/scss/components/shared/entity/project/ProjectExternals.module.scss";
// Data
import { websiteLogoPlaceholder } from "@/data";
// Hooks
import { useGetWindowWidth } from "@/hooks";

const ProjectExternals: FC<Project> = ({
  github_url,
  name,
  website_logo_url,
  website_url,
  docs_url,
}) => {
  const windowWidth = useGetWindowWidth();
  const iconSize = windowWidth && windowWidth <= 900 ? 24 : 32;

  return (
    <div className={projectExternalsStyles.container}>
      {github_url && (
        <IconComponent
          dest={github_url}
          icon_src="https://res.cloudinary.com/birthdayreminder/image/upload/v1772997441/Personal%20Website/tech-icons/other/github_haotje.png"
          label={`${name} Source Code`}
          height={iconSize}
          id=""
        />
      )}
      {website_url && (
        <IconComponent
          dest={website_url}
          icon_src={
            website_logo_url ? website_logo_url : websiteLogoPlaceholder
          }
          label={`${name} Website`}
          height={iconSize}
          id=""
        />
      )}
      {docs_url && (
        <IconComponent
          dest={docs_url}
          icon_src="/misc/swagger.png"
          label={`${name} Swagger Api Docs`}
          height={iconSize}
          id=""
        />
      )}
    </div>
  );
};

export default ProjectExternals;
