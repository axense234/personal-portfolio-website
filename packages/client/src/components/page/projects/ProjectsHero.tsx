"use client";
// Components
import ViewBasedPageHero from "@/components/shared/ViewBasedPageHero";
// Data
import { projectsPageHeroContentData } from "@/data";
// Zustand
import { useGeneralStore } from "@/zustand/general";

const ProjectsHero = () => {
  const { currentProjectId, setCurrentProjectId, getProjectsData } =
    useGeneralStore((state) => state);

  return (
    <ViewBasedPageHero
      heroData={projectsPageHeroContentData}
      page="projects"
      currentEntityId={currentProjectId}
      entityIds={getProjectsData?.projects.map((project) => project.id)}
      setCurrentEntityId={setCurrentProjectId}
    />
  );
};

export default ProjectsHero;
