"use client";
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
// Zus
import { useGeneralStore } from "@/zustand/general/context";

const ViewContent: FC<ViewContentProps> = ({ page, isError, isLoading }) => {
  if (isError) {
    return <div>is error</div>;
  }

  if (isLoading) {
    return <div>is loading</div>;
  }

  return (
    <ProjectView
      viewType={page == "awards" ? "awards" : "normal"}
      displayMode="dynamic"
      index={0}
    />
  );
};

const ViewBasedPageHero: FC<ViewBasedPageHeroProps> = ({
  heroData,
  currentEntityId,
  setCurrentEntityId,
  entityIds,
  page,
}) => {
  const { getProjectsData } = useGeneralStore((state) => state);

  return (
    <section className={viewBasedPageHeroStyles.container}>
      <div className={viewBasedPageHeroStyles.header}>
        <h1>{heroData.title}</h1>
        <h4>{heroData.subtitle}</h4>
      </div>
      <ViewContent
        page={page}
        isError={getProjectsData.isError}
        isLoading={getProjectsData.isLoading}
      />
      <EntityNavigationDots
        currentEntityId={currentEntityId}
        setCurrentEntityId={setCurrentEntityId}
        entityIds={entityIds}
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
