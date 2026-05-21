// Data
import { aboutPageHobbiesSectionData } from "@/data";
// Components
import Hobbies from "./Hobbies";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Translations
import { useTranslations } from "next-intl";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";

const AboutHobbies = () => {
  const translations = useTranslations("about.sections.hobbies");

  const translatedData = translateGivenSectionDataType(
    translations,
    aboutPageHobbiesSectionData,
  );

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <Hobbies />
    </PageSectionWrapper>
  );
};

export default AboutHobbies;
