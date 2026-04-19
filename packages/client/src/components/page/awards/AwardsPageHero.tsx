"use client";
// Components
import ViewBasedPageHero from "@/components/shared/heros/ViewBasedPageHero";
// Types
import { SectionDataType } from "@/core/types";
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

  const translatedData: SectionDataType = {
    ...awardsPageHeroContentData,
    title: translations("title"),
    paragraphs: translations.has("paragraphs")
      ? translations.raw("paragraphs")
      : undefined,
    subtitle: translations.has("subtitle")
      ? translations.raw("subtitle")
      : undefined,
    buttons: awardsPageHeroContentData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

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
