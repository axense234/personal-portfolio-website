// Data
import { homePageHeroSectionData } from "@/data";
// Components
import CommonPageHero from "@/components/shared/heros/CommonPageHero";
// Translations
import { useTranslations } from "next-intl";
// Helpers
import { translateGivenCommonPageHeroSectionDataType } from "@/helpers";

const HomeHero = () => {
  const translations = useTranslations("home.sections.hero");

  const translatedData = translateGivenCommonPageHeroSectionDataType(
    translations,
    homePageHeroSectionData,
  );

  return <CommonPageHero {...translatedData} titleHeadingUsed="h2" />;
};

export default HomeHero;
