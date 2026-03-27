// Interfaces
import { ViewBasedPageHeroProps, ViewContentProps } from "@/core/interfaces";
// React
import { FC } from "react";
// Components
import ProjectView from "../entity/view/ProjectView";
import EntityNavigationDots from "../entity/EntityNavigationDots";
import MealPrepView from "../entity/view/MealPrepView";
import PageSectionWrapper from "../sections/PageSectionWrapper";
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
  return (
    <PageSectionWrapper
      pageSectionData={heroData}
      titleHeadingUsed={sectionType === "hero" ? "h1" : "h2"}
    >
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
    </PageSectionWrapper>
  );
};

export default ViewBasedPageHero;
