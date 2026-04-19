// Data
import { contactPageContactMessageMeSectionData } from "@/data";
// Components
import ContactForm from "./ContactForm";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Translations
import { useTranslations } from "next-intl";
// Types
import { SectionDataType } from "@/core/types";

const ContactMessageMe = () => {
  const translations = useTranslations("contact.sections.messageMe");

  const translatedData: SectionDataType = {
    ...contactPageContactMessageMeSectionData,
    title: translations("title"),
    paragraphs: translations.raw("paragraphs"),
    buttons: contactPageContactMessageMeSectionData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <ContactForm />
    </PageSectionWrapper>
  );
};

export default ContactMessageMe;
