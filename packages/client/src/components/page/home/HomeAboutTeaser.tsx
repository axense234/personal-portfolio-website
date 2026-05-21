// Data
import { homePageAboutTeaserSectionData } from "@/data";
// Components
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Translations
import { useTranslations } from "next-intl";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";

const HomeAboutTeaser = () => {
  const translations = useTranslations("home.sections.aboutTeaser");

  const translatedData = translateGivenSectionDataType(
    translations,
    homePageAboutTeaserSectionData,
  );

  return <PageSectionWrapper pageSectionData={translatedData} />;
};

export default HomeAboutTeaser;
