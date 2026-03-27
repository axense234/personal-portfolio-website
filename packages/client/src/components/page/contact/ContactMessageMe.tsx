// Data
import { contactPageContactMessageMeSectionData } from "@/data";
// Components
import ContactForm from "./ContactForm";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";

const ContactMessageMe = () => {
  return (
    <PageSectionWrapper
      pageSectionData={contactPageContactMessageMeSectionData}
    >
      <ContactForm />
    </PageSectionWrapper>
  );
};

export default ContactMessageMe;
