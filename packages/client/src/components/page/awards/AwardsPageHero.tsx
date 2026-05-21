"use client";
// Components
import ViewBasedPageHero from "@/components/shared/heros/ViewBasedPageHero";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";
// Data
import { awardsPageHeroContentData } from "@/data";
// Zustand
import { useGeneralStore } from "@/zustand/general/context";
// Translations
import { useTranslations } from "next-intl";

const AwardsPageHero = () => {
  const {
    currentProjectId,
    setCurrentProjectId,
    currentProjectImage,
    setCurrentProjectImage,
    getProjectsData,
  } = useGeneralStore((state) => state);

  const translations = useTranslations("awards.sections.hero");

  const translatedData = translateGivenSectionDataType(
    translations,
    awardsPageHeroContentData,
  );

  return (
    <ViewBasedPageHero
      heroData={translatedData}
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
