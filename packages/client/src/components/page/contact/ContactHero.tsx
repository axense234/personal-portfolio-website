// Components
import CommonPageHero from "@/components/shared/heros/CommonPageHero";
// Helpers
import { translateGivenCommonPageHeroSectionDataType } from "@/helpers";
// Data
import { contactPageHeroSectionData } from "@/data";
// Translations
import { useTranslations } from "next-intl";

const ContactHero = () => {
  const translations = useTranslations("contact.sections.hero");

  const translatedData = translateGivenCommonPageHeroSectionDataType(
    translations,
    contactPageHeroSectionData,
  );

  return <CommonPageHero {...translatedData} />;
};

export default ContactHero;
