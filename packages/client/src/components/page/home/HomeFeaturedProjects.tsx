"use client";
// Components
import ProjectCards from "@/components/shared/entity/project/ProjectCards";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
import { SectionDataType } from "@/core/types";
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
    return <div>iserror</div>;
  }

  if (isLoading) {
    return <div>isloading</div>;
  }

  return (
    <ProjectCards projects={projects} useGrid={shouldProjectCardsUseGrid} />
  );
};

const HomeFeaturedProjects = () => {
  const translations = useTranslations("home.sections.featuredProjects");

  const translatedData: SectionDataType = {
    ...homePageFeaturedProjectsSectionData,
    title: translations("title"),
    paragraphs: translations.raw("paragraphs"),
    buttons: homePageFeaturedProjectsSectionData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <FeaturedProjects />
    </PageSectionWrapper>
  );
};

export default HomeFeaturedProjects;
