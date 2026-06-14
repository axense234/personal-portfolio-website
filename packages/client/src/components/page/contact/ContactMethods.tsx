"use client";
// SCSS
import contactMethodsStyles from "@/scss/components/page/contact/ContactMethods.module.scss";
// Data
import {
  contactMethodResumeButtonDest,
  contactMethodResumeButtonDownloadFilename,
  contactPageContactMethodsSectionData,
  proEmail,
} from "@/data";
// Components
import LinkButton from "@/components/shared/LinkButton";
import SocialIcons from "@/components/shared/SocialIcons";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";
// Hooks
import { useGetWindowWidth } from "@/hooks";
// Translations
import { useTranslations } from "next-intl";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";

const ContactMethodsContent = () => {
  const windowWidth = useGetWindowWidth();
  const translations = useTranslations("contact.sections.methods");
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
        <h4>{translations("labels.email")}</h4>
        <h5>{proEmail}</h5>
      </div>
      <div className={contactMethodsStyles.method}>
        <h4>{translations("labels.externals")}</h4>
        <SocialIcons iconHeight={iconSize} focus="contact" />
      </div>
      <div className={contactMethodsStyles.method}>
        <h4>{translations("labels.resume")}</h4>
        <LinkButton
          colorSpecifier={"warning"}
          dest={contactMethodResumeButtonDest}
          label={translations("labels.button")}
          size={linkButtonSize}
          download
          downloadFilename={contactMethodResumeButtonDownloadFilename}
          buttonType="download"
        />
      </div>
    </div>
  );
};

const ContactMethods = () => {
  const translations = useTranslations("contact.sections.methods");

  const translatedData = translateGivenSectionDataType(
    translations,
    contactPageContactMethodsSectionData,
  );

  return (
    <PageSectionWrapper pageSectionData={translatedData}>
      <ContactMethodsContent />
    </PageSectionWrapper>
  );
};

export default ContactMethods;
