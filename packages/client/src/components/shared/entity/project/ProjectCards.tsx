// Data
import {
  buttonColors,
  projectCardsNoProjectsFoundMessage,
  projectCardsNoProjectsFoundTitle,
} from "@/data";
// Helpers
import { adaptProjectToCard } from "@/helpers";
// Components
import Card from "../Card";
// SCSS
import projectCardsStyles from "@/scss/components/shared/entity/project/ProjectCards.module.scss";
// Interfaces
import {
  CardProps,
  LinkButtonProps,
  ProjectCardsProps,
} from "@/core/interfaces";
// React
import { FC } from "react";
import { useTranslations } from "next-intl";

const ProjectCards: FC<ProjectCardsProps> = ({ projects, useGrid }) => {
  const translations = useTranslations("common.projectExternals");

  if (projects.length < 1) {
    return (
      <div className={projectCardsStyles.zeroProjects}>
        <p
          title={projectCardsNoProjectsFoundTitle}
          aria-label={projectCardsNoProjectsFoundTitle}
        >
          {projectCardsNoProjectsFoundMessage}
        </p>
      </div>
    );
  }

  return (
    <ul
      className={
        useGrid ? projectCardsStyles.grid : projectCardsStyles.projects
      }
    >
      {projects?.map((project, index) => {
        const buttonColorsCurrentColorIndex = index % buttonColors.length;
        const buttonColor = buttonColors[buttonColorsCurrentColorIndex];

        const cardProps = adaptProjectToCard(project, buttonColor);

        const translatedCardProps: CardProps = {
          ...cardProps,
          externals: cardProps.externals?.map((external) => ({
            ...external,
            label: translations("githubLabel", { name: project.name }),
          })),
          button: {
            ...(cardProps.button as LinkButtonProps),
            label: translations("buttonLabel"),
          },
        };

        return (
          <li key={project.id}>
            <Card {...translatedCardProps} />;
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectCards;
