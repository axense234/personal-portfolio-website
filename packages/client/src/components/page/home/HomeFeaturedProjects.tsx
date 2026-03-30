"use client";
// Components
import ProjectCards from "@/components/shared/entity/project/ProjectCards";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Data
import { homePageFeaturedProjectsSectionData } from "@/data";
// Hooks
import { useGetProjects, useGetWindowWidth } from "@/hooks";
// zus
import { useGeneralStore } from "@/zustand/general/context";

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
  return (
    <PageSectionWrapper pageSectionData={homePageFeaturedProjectsSectionData}>
      <FeaturedProjects />
    </PageSectionWrapper>
  );
};

export default HomeFeaturedProjects;
