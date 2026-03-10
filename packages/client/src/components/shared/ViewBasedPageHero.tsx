// Interfaces
import { ViewBasedPageHeroProps } from "@/core/interfaces";
// React
import { FC } from "react";
// SCSS
import viewBasedPageHeroStyles from "@/scss/components/shared/ViewBasedPageHero.module.scss";
// Components
import LinkButton from "./LinkButton";
import ProjectView from "./ProjectView";
import EntityNavigationDots from "./EntityNavigationDots";

const ViewBasedPageHero: FC<ViewBasedPageHeroProps> = ({ heroData, page }) => {
  return (
    <section className={viewBasedPageHeroStyles.container}>
      <div className={viewBasedPageHeroStyles.header}>
        <h1>{heroData.title}</h1>
        <h4>{heroData.subtitle}</h4>
      </div>
      {/* content (view) based on page */}
      <ProjectView />
      <EntityNavigationDots />
      <div className={viewBasedPageHeroStyles.buttons}>
        {heroData.buttons?.map((button) => {
          return <LinkButton {...button} key={button.id} />;
        })}
      </div>
    </section>
  );
};

export default ViewBasedPageHero;
