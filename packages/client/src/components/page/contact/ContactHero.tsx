// Components
import CommonPageHero from "@/components/shared/heros/CommonPageHero";
// Types
import { CommonPageHeroSectionDataType } from "@/core/types";
// Data
import { contactPageHeroSectionData } from "@/data";
// Translations
import { useTranslations } from "next-intl";

const ContactHero = () => {
  const translations = useTranslations("contact.sections.hero");

  const translatedData: CommonPageHeroSectionDataType = {
    ...contactPageHeroSectionData,
    title: translations("title"),
    subtitle: translations("subtitle"),
    desc: translations("desc"),
    buttons: contactPageHeroSectionData.buttons.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

  return <CommonPageHero {...translatedData} />;
};

export default ContactHero;
