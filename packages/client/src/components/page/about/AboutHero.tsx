// Components
import CommonPageHero from "@/components/shared/heros/CommonPageHero";
// Helpers
import { translateGivenCommonPageHeroSectionDataType } from "@/helpers";
// Data
import { aboutPageHeroSectionData } from "@/data";
// Translations
import { useTranslations } from "next-intl";

const AboutHero = () => {
  const translations = useTranslations("about.sections.hero");

  const translatedData = translateGivenCommonPageHeroSectionDataType(
    translations,
    aboutPageHeroSectionData,
  );
  return <CommonPageHero {...translatedData} />;
};

export default AboutHero;
