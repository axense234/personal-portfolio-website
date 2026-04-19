// Data
import { homePageAboutTeaserSectionData } from "@/data";
// Components
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Translations
import { useTranslations } from "next-intl";
// Types
import { SectionDataType } from "@/core/types";

const HomeAboutTeaser = () => {
  const translations = useTranslations("home.sections.aboutTeaser");

  const translatedData: SectionDataType = {
    ...homePageAboutTeaserSectionData,
    title: translations("title"),
    paragraphs: translations.raw("paragraphs"),
    buttons: homePageAboutTeaserSectionData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

  return <PageSectionWrapper pageSectionData={translatedData} />;
};

export default HomeAboutTeaser;
