"use client";
// Components
import ViewBasedPageHero from "@/components/shared/heros/ViewBasedPageHero";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";
// Data
import { projectsPageHeroContentData } from "@/data";
// Zustand
import { useGeneralStore } from "@/zustand/general";
// Translations
import { useTranslations } from "next-intl";

const ProjectsHero = () => {
  const {
    currentProjectId,
    setCurrentProjectId,
    getProjectsData,
    currentProjectImage,
    setCurrentProjectImage,
  } = useGeneralStore((state) => state);

  const translations = useTranslations("projects.sections.hero");

  const translatedData = translateGivenSectionDataType(
    translations,
    projectsPageHeroContentData,
  );

  return (
    <ViewBasedPageHero
      heroData={translatedData}
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
