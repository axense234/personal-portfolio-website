// Data
import { websiteLogoPlaceholder } from "@/data";
// Types
import { CardProps } from "@/core/interfaces";
import { ProjectWithImages } from "@personal-portfolio-website/shared";
import { ExternalMediaIconType } from "@/core/types";

export const adaptProjectToCard = (
  project: ProjectWithImages,
  buttonColor: "warning" | "success" | "delete",
): CardProps => {
  const externals: ExternalMediaIconType[] = [];

  if (project.github_url) {
    externals.push({
      dest: project.github_url,
      id: project.github_url,
      label: `${project.name} Source Code`,
      rel: "https://res.cloudinary.com/birthdayreminder/image/upload/v1772997441/Personal%20Website/tech-icons/other/github_haotje.png",
    });
  }

  if (project.website_url) {
    externals.push({
      dest: project.website_url,
      id: project.website_url,
      label: `${project.name} Website`,
      rel: project.website_logo_url
        ? project.website_logo_url
        : websiteLogoPlaceholder,
    });
  }

  if (project.docs_url) {
    externals.push({
      dest: project.docs_url,
      id: project.docs_url,
      label: `${project.name} API Docs`,
      rel: "/misc/swagger.png",
    });
  }

  const cardProps: CardProps = {
    image:
      project.images?.thumb ||
      (process.env.NEXT_PUBLIC_CARD_COMPONENT_IMAGE_PLACEHOLDER as string),
    label: project.name,
    desc: project.short_desc,
    button: {
      colorSpecifier: buttonColor,
      dest: "/projects",
      label: "See More",
      size: "medium",
    },
    externals,
  };

  return cardProps;
};
