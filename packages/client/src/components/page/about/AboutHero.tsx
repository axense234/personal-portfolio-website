// Components
import CommonPageHero from "@/components/shared/heros/CommonPageHero";
// Types
import { CommonPageHeroSectionDataType } from "@/core/types";
// Data
import { aboutPageHeroSectionData } from "@/data";
// Translations
import { useTranslations } from "next-intl";

const AboutHero = () => {
  const translations = useTranslations("about.sections.hero");

  const translatedData: CommonPageHeroSectionDataType = {
    ...aboutPageHeroSectionData,
    title: translations("title"),
    subtitle: translations("subtitle"),
    desc: translations("desc"),
    buttons: aboutPageHeroSectionData.buttons.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

  return <CommonPageHero {...translatedData} />;
};

export default AboutHero;
