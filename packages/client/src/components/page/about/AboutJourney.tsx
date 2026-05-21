"use client";
// Data
import { aboutPageJourneySectionData } from "@/data";
// Components
import AboutJourneyContent from "./AboutJourneyContent";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Translations
import { useTranslations } from "next-intl";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";
// Hooks
import { useGetTech } from "@/hooks";

const AboutJourney = () => {
  useGetTech();

  const translations = useTranslations("about.sections.journey");

  const translatedData = translateGivenSectionDataType(
    translations,
    aboutPageJourneySectionData,
  );

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <AboutJourneyContent />
    </PageSectionWrapper>
  );
};

export default AboutJourney;
