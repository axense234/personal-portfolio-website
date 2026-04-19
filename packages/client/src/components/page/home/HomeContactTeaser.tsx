// Components
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Types
import { SectionDataType } from "@/core/types";
// Data
import { homePageContactTeaserSectionData } from "@/data";
// Translations
import { useTranslations } from "next-intl";

const HomeContactTeaser = () => {
  const translations = useTranslations("home.sections.contactTeaser");

  const translatedData: SectionDataType = {
    ...homePageContactTeaserSectionData,
    title: translations("title"),
    paragraphs: translations.raw("paragraphs"),
    buttons: homePageContactTeaserSectionData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };
  return <PageSectionWrapper pageSectionData={translatedData} />;
};

export default HomeContactTeaser;
