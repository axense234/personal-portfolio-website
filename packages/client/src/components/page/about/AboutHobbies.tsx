// Data
import { aboutPageHobbiesSectionData } from "@/data";
// Components
import Hobbies from "./Hobbies";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Translations
import { useTranslations } from "next-intl";
// Types
import { SectionDataType } from "@/core/types";

const AboutHobbies = () => {
  const translations = useTranslations("about.sections.hobbies");

  const translatedData: SectionDataType = {
    ...aboutPageHobbiesSectionData,
    title: translations("title"),
    paragraphs: translations.raw("paragraphs"),
    buttons: aboutPageHobbiesSectionData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <Hobbies />
    </PageSectionWrapper>
  );
};

export default AboutHobbies;
