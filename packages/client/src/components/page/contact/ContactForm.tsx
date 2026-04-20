"use client";
// SCSS
import contactFormStyles from "@/scss/components/page/contact/ContactForm.module.scss";
// Components
import TextFormControl from "@/components/shared/form/TextFormControl";
import TextAreaFormControl from "@/components/shared/form/TextAreaFormControl";
import LinkButton from "@/components/shared/LinkButton";
// Zustand
import { useGeneralStore } from "@/zustand/general/context";
// Data
import {
  contactFormMessageLabel,
  contactFormNameLabel,
  contactFormOnSubmitButtonLabel,
  contactFormSubjectLabel,
  defaultContactFormEmail,
  defaultContactFormMessage,
  defaultContactFormName,
  defaultContactFormSubject,
} from "@/data";
// Hooks
import { useGetWindowWidth } from "@/hooks";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const {
    contactFormData,
    setContactFormDataKeyValue,
    sendEmailWithContactForm,
  } = useGeneralStore((state) => state);

  const translations = useTranslations("contact.sections.contactForm");

  const windowWidth = useGetWindowWidth();

  let linkButtonSize: "large" | "small" | "medium" = "large";
  if (windowWidth && windowWidth <= 1200) {
    linkButtonSize = "medium";
  } else if (windowWidth && windowWidth <= 1500) {
    linkButtonSize = "large";
  } else {
    linkButtonSize = "large";
  }

  return (
    <article className={contactFormStyles.container}>
      <form className={contactFormStyles.controls}>
        <div className={contactFormStyles.personal}>
          <TextFormControl
            label={translations("labels.nameLabel")}
            inputPlaceholder={translations("defaults.name")}
            inputType="text"
            onChange={(name: string) =>
              setContactFormDataKeyValue("name", name)
            }
            value={contactFormData.name}
            flow="column"
          />
          <TextFormControl
            label={translations("labels.emailLabel")}
            inputPlaceholder={translations("defaults.email")}
            inputType="email"
            onChange={(email: string) =>
              setContactFormDataKeyValue("email", email)
            }
            value={contactFormData.email}
            flow="column"
          />
        </div>
        <TextFormControl
          label={translations("labels.subjectLabel")}
          inputPlaceholder={translations("defaults.subject")}
          inputType="text"
          onChange={(subject: string) =>
            setContactFormDataKeyValue("subject", subject)
          }
          value={contactFormData.subject}
          flow="column"
        />
        <TextAreaFormControl
          label={translations("labels.messageLabel")}
          inputPlaceholder={translations("defaults.message")}
          onChange={(message: string) =>
            setContactFormDataKeyValue("message", message)
          }
          value={contactFormData.message}
        />
      </form>
      <LinkButton
        colorSpecifier={"warning"}
        label={translations("labels.onSubmitButtonLabel")}
        size={linkButtonSize}
        buttonType="submit"
        onClick={() => sendEmailWithContactForm(contactFormData)}
      />
    </article>
  );
};

export default ContactForm;
