"use client";
// Components
import ViewBasedPageHero from "@/components/shared/ViewBasedPageHero";
// Data
import { awardsPageHeroContentData } from "@/data";
// Zustand
import { useGeneralStore } from "@/zustand/general/context";

const AwardsPageHero = () => {
  const { currentProjectId, setCurrentProjectId, getProjectsData } =
    useGeneralStore((state) => state);

  return (
    <ViewBasedPageHero
      heroData={awardsPageHeroContentData}
      page="awards"
      currentEntityId={currentProjectId}
      setCurrentEntityId={setCurrentProjectId}
      entityIds={getProjectsData?.projects.map((project) => project.id)}
    />
  );
};

export default AwardsPageHero;
