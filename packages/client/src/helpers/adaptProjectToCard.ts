import { CardProps } from "@/core/interfaces";
import { ExternalMediaIconType } from "@/core/types";
import { ProjectWithImages } from "@personal-portfolio-website/shared";

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
      rel: "/social/github-logo-transparent-background-free-png.png",
    });
  }

  if (project.website_url) {
    externals.push({
      dest: project.website_url,
      id: project.website_url,
      label: `${project.name} Website`,
      rel: project.website_logo_url as string,
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
      color: buttonColor,
      dest: "/projects",
      label: "See More",
      size: "medium",
    },
    externals,
  };

  return cardProps;
};
