// Data
import { buttonColors, projectCardsNoProjectsFoundMessage } from "@/data";
// Helpers
import { adaptProjectToCard } from "@/helpers";
// Components
import Card from "../Card";
// SCSS
import projectCardsStyles from "@/scss/components/shared/entity/project/ProjectCards.module.scss";
// Interfaces
import { ProjectCardsProps } from "@/core/interfaces";
// React
import { FC } from "react";

const ProjectCards: FC<ProjectCardsProps> = ({ projects }) => {
  if (projects.length < 1) {
    return (
      <div className={projectCardsStyles.zeroProjects}>
        <p title="Hello" aria-label="Hello">
          {projectCardsNoProjectsFoundMessage}
        </p>
      </div>
    );
  }

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
