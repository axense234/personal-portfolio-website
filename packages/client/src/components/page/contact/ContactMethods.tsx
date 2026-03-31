"use client";
// SCSS
import contactMethodsStyles from "@/scss/components/page/contact/ContactMethods.module.scss";
// Data
import { contactPageContactMethodsSectionData, proEmail } from "@/data";
// Components
import LinkButton from "@/components/shared/LinkButton";
import SocialIcons from "@/components/shared/SocialIcons";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Hooks
import { useGetWindowWidth } from "@/hooks";

const ContactMethodsContent = () => {
  const windowWidth = useGetWindowWidth();
  const iconSize = windowWidth && windowWidth <= 900 ? 32 : 48;

  let linkButtonSize: "large" | "small" | "medium" = "large";
  if (windowWidth && windowWidth <= 900) {
    linkButtonSize = "medium";
  } else {
    linkButtonSize = "large";
  }

  return (
    <div className={contactMethodsStyles.content}>
      <div className={contactMethodsStyles.method}>
        <h4>Professional Email:</h4>
        <h5>{proEmail}</h5>
      </div>
      <div className={contactMethodsStyles.method}>
        <h4>Externals:</h4>
        <SocialIcons iconHeight={iconSize} focus="contact" />
      </div>
      <div className={contactMethodsStyles.method}>
        <h4>Resume (PDF): </h4>
        <LinkButton
          colorSpecifier={"warning"}
          dest="/misc/resume.pdf"
          label="My Resume"
          size={linkButtonSize}
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
