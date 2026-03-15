// Shared
import { Project } from "@personal-portfolio-website/shared";
// React
import { FC } from "react";
// Components
import IconComponent from "./IconComponent";
// SCSS
import projectExternalsStyles from "@/scss/components/shared/ProjectExternals.module.scss";
// Data
import { websiteLogoPlaceholder } from "@/data";

const ProjectExternals: FC<Project> = ({
  github_url,
  name,
  website_logo_url,
  website_url,
  docs_url,
}) => {
  return (
    <div className={projectExternalsStyles.container}>
      {github_url && (
        <IconComponent
          dest={github_url}
          icon_src="https://res.cloudinary.com/birthdayreminder/image/upload/v1772997441/Personal%20Website/tech-icons/other/github_haotje.png"
          label={`${name} Source Code`}
          height={32}
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
          height={32}
          id=""
        />
      )}
      {docs_url && (
        <IconComponent
          dest={docs_url}
          icon_src="/misc/swagger.png"
          label={`${name} Swagger Api Docs`}
          height={32}
          id=""
        />
      )}
    </div>
  );
};

export default ProjectExternals;
