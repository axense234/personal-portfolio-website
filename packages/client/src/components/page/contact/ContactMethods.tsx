// SCSS
import contactMethodsStyles from "@/scss/components/page/contact/ContactMethods.module.scss";
// Data
import { contactPageContactMethodsSectionData, proEmail } from "@/data";
// Components
import LinkButton from "@/components/shared/LinkButton";
import SocialIcons from "@/components/shared/SocialIcons";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";

const ContactMethodsContent = () => {
  return (
    <div className={contactMethodsStyles.content}>
      <div className={contactMethodsStyles.method}>
        <h4>Professional Email:</h4>
        <h5>{proEmail}</h5>
      </div>
      <div className={contactMethodsStyles.method}>
        <h4>Externals:</h4>
        <SocialIcons iconHeight={48} focus="contact" />
      </div>
      <div className={contactMethodsStyles.method}>
        <h4>Resume (PDF): </h4>
        <LinkButton
          colorSpecifier={"warning"}
          dest="/misc/resume.pdf"
          label="My Resume"
          size="large"
          download
          downloadFilename="ca-resume.pdf"
          buttonType="download"
        />
      </div>
    </div>
  );
};

const ContactMethods = () => {
  return (
    <PageSectionWrapper pageSectionData={contactPageContactMethodsSectionData}>
      <ContactMethodsContent />
    </PageSectionWrapper>
  );
};

export default ContactMethods;
