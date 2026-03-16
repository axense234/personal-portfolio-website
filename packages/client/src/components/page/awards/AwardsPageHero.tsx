"use client";
// Components
import ViewBasedPageHero from "@/components/shared/ViewBasedPageHero";
// Data
import { awardsPageHeroContentData } from "@/data";
// Zustand
import { useGeneralStore } from "@/zustand/general/context";

const AwardsPageHero = () => {
  const {
    currentProjectId,
    setCurrentProjectId,
    currentProjectImage,
    setCurrentProjectImage,
    getProjectsData,
  } = useGeneralStore((state) => state);

  return (
    <ViewBasedPageHero
      heroData={awardsPageHeroContentData}
      sectionType="hero"
      page="awards"
      currentEntityId={currentProjectId}
      setCurrentEntityId={setCurrentProjectId}
      currentEntityImage={currentProjectImage}
      setCurrentEntityImage={setCurrentProjectImage}
      isError={getProjectsData.isError}
      isLoading={getProjectsData.isLoading}
      entities={getProjectsData?.projects}
    />
  );
};

export default AwardsPageHero;
