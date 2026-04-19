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
import { projectExternalsDocsIconSrc, websiteLogoPlaceholder } from "@/data";
// Hooks
import { useGetWindowWidth } from "@/hooks";
// Translations
import { useTranslations } from "next-intl";

const ProjectExternals: FC<Project> = ({
  github_url,
  name,
  website_logo_url,
  website_url,
  docs_url,
}) => {
  const translations = useTranslations("common.projectExternals");

  const windowWidth = useGetWindowWidth();
  const iconSize = windowWidth && windowWidth <= 900 ? 24 : 32;

  return (
    <div className={projectExternalsStyles.container}>
      {github_url && (
        <IconComponent
          dest={github_url}
          icon_src={projectExternalsDocsIconSrc}
          label={translations("githubLabel", { name })}
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
          label={translations("websiteLabel", { name })}
          height={iconSize}
          id=""
        />
      )}
      {docs_url && (
        <IconComponent
          dest={docs_url}
          icon_src={projectExternalsDocsIconSrc}
          label={translations("swaggerApiDocsLabel", { name })}
          height={iconSize}
          id=""
        />
      )}
    </div>
  );
};

export default ProjectExternals;
