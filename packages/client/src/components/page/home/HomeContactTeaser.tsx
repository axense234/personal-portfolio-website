// Components
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Data
import { homePageContactTeaserSectionData } from "@/data";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";
// Translations
import { useTranslations } from "next-intl";

const HomeContactTeaser = () => {
  const translations = useTranslations("home.sections.contactTeaser");

  const translatedData = translateGivenSectionDataType(
    translations,
    homePageContactTeaserSectionData,
  );

  return <PageSectionWrapper pageSectionData={translatedData} />;
};

export default HomeContactTeaser;
