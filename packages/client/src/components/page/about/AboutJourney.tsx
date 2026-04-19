// Data
import { aboutPageJourneySectionData } from "@/data";
// Components
import AboutJourneyContent from "./AboutJourneyContent";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Translations
import { useTranslations } from "next-intl";
// Types
import { SectionDataType } from "@/core/types";

const AboutJourney = () => {
  const translations = useTranslations("about.sections.journey");

  const translatedData: SectionDataType = {
    ...aboutPageJourneySectionData,
    title: translations("title"),
    paragraphs: translations.raw("paragraphs"),
    buttons: aboutPageJourneySectionData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <AboutJourneyContent />
    </PageSectionWrapper>
  );
};

export default AboutJourney;
