"use client";
// Components
import ViewBasedPageHero from "@/components/shared/heros/ViewBasedPageHero";
// Types
import { SectionDataType } from "@/core/types";
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

  const translatedData: SectionDataType = {
    ...projectsPageHeroContentData,
    title: translations("title"),
    paragraphs: translations.has("paragraphs")
      ? translations.raw("paragraphs")
      : undefined,
    subtitle: translations.has("subtitle")
      ? translations.raw("subtitle")
      : undefined,
    buttons: projectsPageHeroContentData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

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
