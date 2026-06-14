"use client";
// Components
import ProjectCards from "@/components/shared/entity/project/ProjectCards";
import ErrorInterface from "@/components/shared/sections/ErrorInterface";
import LoadingInterface from "@/components/shared/sections/LoadingInterface";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";
// Data
import { homePageFeaturedProjectsSectionData } from "@/data";
// Hooks
import { useGetProjects, useGetWindowWidth } from "@/hooks";
// zus
import { useGeneralStore } from "@/zustand/general/context";
// Translations
import { useTranslations } from "next-intl";

const FeaturedProjects = () => {
  useGetProjects(["FEATURED"]);

  const windowWidth = useGetWindowWidth();
  const shouldProjectCardsUseGrid =
    windowWidth && windowWidth <= 900 ? false : true;

  const { isError, isLoading, projects } = useGeneralStore(
    (state) => state.getProjectsData,
  );

  if (isError) {
    return <ErrorInterface isError={true} />;
  }

  if (isLoading) {
    return (
      <LoadingInterface
        isLoading={true}
        message="Loading Featured Projects..."
      />
    );
  }

  return (
    <ProjectCards projects={projects} useGrid={shouldProjectCardsUseGrid} />
  );
};

const HomeFeaturedProjects = () => {
  const translations = useTranslations("home.sections.featuredProjects");

  const translatedData = translateGivenSectionDataType(
    translations,
    homePageFeaturedProjectsSectionData,
  );

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <FeaturedProjects />
    </PageSectionWrapper>
  );
};

export default HomeFeaturedProjects;
