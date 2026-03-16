// Interfaces
import { ViewBasedPageHeroProps, ViewContentProps } from "@/core/interfaces";
// React
import { FC } from "react";
// SCSS
import viewBasedPageHeroStyles from "@/scss/components/shared/ViewBasedPageHero.module.scss";
// Components
import LinkButton from "./LinkButton";
import ProjectView from "./ProjectView";
import EntityNavigationDots from "./EntityNavigationDots";
import MealPrepView from "./MealPrepView";
// Shared
import {
  MealPrepWithIngredients,
  ProjectWithEverything,
} from "@personal-portfolio-website/shared";

const ViewContent: FC<ViewContentProps> = ({
  page,
  isError,
  isLoading,
  currentEntityId,
  currentEntityImage,
  setCurrentEntityImage,
  entities,
}) => {
  if (page === "meal-prep") {
    return (
      <MealPrepView
        currentMealPrepId={currentEntityId}
        currentMealPrepImage={currentEntityImage}
        mealPreps={entities as MealPrepWithIngredients[]}
        setCurrentMealPrepImage={setCurrentEntityImage}
        displayMode="dynamic"
        isError={isError}
        isLoading={isLoading}
      />
    );
  }

  return (
    <ProjectView
      viewType={page == "awards" ? "awards" : "normal"}
      displayMode="dynamic"
      index={0}
      currentProjectId={currentEntityId}
      currentProjectImage={currentEntityImage}
      setCurrentProjectImage={setCurrentEntityImage}
      projects={entities as ProjectWithEverything[]}
      isError={isError}
      isLoading={isLoading}
    />
  );
};

const ViewBasedPageHero: FC<ViewBasedPageHeroProps> = ({
  heroData,
  page,
  sectionType,
  currentEntityId,
  setCurrentEntityId,
  currentEntityImage,
  setCurrentEntityImage,
  entities,
  isError,
  isLoading,
}) => {
  const titleShown =
    sectionType === "hero" ? (
      <h1>{heroData.title}</h1>
    ) : (
      <h2>{heroData.title}</h2>
    );

  return (
    <section className={viewBasedPageHeroStyles.container}>
      <div className={viewBasedPageHeroStyles.header}>
        {titleShown}
        <h4>{heroData.subtitle}</h4>
      </div>
      <ViewContent
        page={page}
        isError={isError}
        isLoading={isLoading}
        currentEntityId={currentEntityId}
        currentEntityImage={currentEntityImage}
        setCurrentEntityImage={setCurrentEntityImage}
        entities={entities}
      />
      <EntityNavigationDots
        currentEntityId={currentEntityId}
        setCurrentEntityId={setCurrentEntityId}
        entityIds={entities.map((entity: { id: string }) => entity.id)}
        useCase="entities"
      />
      <div className={viewBasedPageHeroStyles.buttons}>
        {heroData.buttons?.map((button) => {
          return <LinkButton {...button} key={button.id} />;
        })}
      </div>
    </section>
  );
};

export default ViewBasedPageHero;
