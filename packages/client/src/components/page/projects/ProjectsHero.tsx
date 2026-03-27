"use client";
// Components
import ViewBasedPageHero from "@/components/shared/heros/ViewBasedPageHero";
// Data
import { projectsPageHeroContentData } from "@/data";
// Zustand
import { useGeneralStore } from "@/zustand/general";

const ProjectsHero = () => {
  const {
    currentProjectId,
    setCurrentProjectId,
    getProjectsData,
    currentProjectImage,
    setCurrentProjectImage,
  } = useGeneralStore((state) => state);

  return (
    <ViewBasedPageHero
      heroData={projectsPageHeroContentData}
      page="projects"
      sectionType="hero"
      currentEntityId={currentProjectId}
      setCurrentEntityId={setCurrentProjectId}
      currentEntityImage={currentProjectImage}
      setCurrentEntityImage={setCurrentProjectImage}
      entities={getProjectsData?.projects}
      isError={getProjectsData.isError}
      isLoading={getProjectsData.isLoading}
    />
  );
};

export default ProjectsHero;
