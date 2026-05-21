// Data
import { contactPageContactMessageMeSectionData } from "@/data";
// Components
import ContactForm from "./ContactForm";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Translations
import { useTranslations } from "next-intl";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";

const ContactMessageMe = () => {
  const translations = useTranslations("contact.sections.messageMe");

  const translatedData = translateGivenSectionDataType(
    translations,
    contactPageContactMessageMeSectionData,
  );

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <ContactForm />
    </PageSectionWrapper>
  );
};

export default ContactMessageMe;
