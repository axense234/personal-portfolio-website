// Data
import { homePageHeroSectionData } from "@/data";
// Components
import CommonPageHero from "@/components/shared/heros/CommonPageHero";
// Translations
import { useTranslations } from "next-intl";
// Types
import { CommonPageHeroSectionDataType } from "@/core/types";

const HomeHero = () => {
  const translations = useTranslations("home.sections.hero");

  const translatedData: CommonPageHeroSectionDataType = {
    ...homePageHeroSectionData,
    title: translations("title"),
    subtitle: translations("subtitle"),
    desc: translations("desc"),
    buttons: homePageHeroSectionData.buttons.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

  return <CommonPageHero {...translatedData} titleHeadingUsed="h2" />;
};

export default HomeHero;
