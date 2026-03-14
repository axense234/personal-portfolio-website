// Data
import { buttonColors } from "@/data";
// Helpers
import { adaptProjectToCard } from "@/helpers";
// Components
import Card from "./Card";
// SCSS
import projectCardsStyles from "@/scss/components/shared/ProjectCards.module.scss";
// Interfaces
import { ProjectCardsProps } from "@/core/interfaces";
import { FC } from "react";

const ProjectCards: FC<ProjectCardsProps> = ({ projects }) => {
  return (
    <ul className={projectCardsStyles.projects}>
      {projects?.map((project, index) => {
        const buttonColorsCurrentColorIndex = index % buttonColors.length;
        const buttonColor = buttonColors[buttonColorsCurrentColorIndex];

        const cardProps = adaptProjectToCard(project, buttonColor);
        return (
          <li key={project.id}>
            <Card {...cardProps} />;
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectCards;
