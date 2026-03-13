"use client";
// SCSS
import contactFormStyles from "@/scss/components/page/contact/ContactForm.module.scss";
// Components
import TextFormControl from "@/components/shared/TextFormControl";
import TextAreaFormControl from "@/components/shared/TextAreaFormControl";
// Components
import LinkButton from "@/components/shared/LinkButton";
// Zustand
import { useGeneralStore } from "@/zustand/general/context";
// Data
import {
  defaultContactFormEmail,
  defaultContactFormMessage,
  defaultContactFormName,
  defaultContactFormSubject,
} from "@/data";

const ContactForm = () => {
  const {
    contactFormData,
    setContactFormDataKeyValue,
    sendEmailWithContactForm,
  } = useGeneralStore((state) => state);

  return (
    <article className={contactFormStyles.container}>
      <form className={contactFormStyles.controls}>
        <div className={contactFormStyles.personal}>
          <TextFormControl
            label="Your Name"
            inputPlaceholder={defaultContactFormName}
            inputType="text"
            onChange={(name: string) =>
              setContactFormDataKeyValue("name", name)
            }
            value={contactFormData.name}
          />
          <TextFormControl
            label="Your Email"
            inputPlaceholder={defaultContactFormEmail}
            inputType="email"
            onChange={(email: string) =>
              setContactFormDataKeyValue("email", email)
            }
            value={contactFormData.email}
          />
        </div>
        <TextFormControl
          label="Subject"
          inputPlaceholder={defaultContactFormSubject}
          inputType="text"
          onChange={(subject: string) =>
            setContactFormDataKeyValue("subject", subject)
          }
          value={contactFormData.subject}
        />
        <TextAreaFormControl
          label="Message"
          inputPlaceholder={defaultContactFormMessage}
          onChange={(message: string) =>
            setContactFormDataKeyValue("message", message)
          }
          value={contactFormData.message}
        />
      </form>
      <LinkButton
        colorSpecifier={"warning"}
        label="Send the Message"
        size="large"
        buttonType="submit"
        onClick={() => sendEmailWithContactForm(contactFormData)}
      />
    </article>
  );
};

export default ContactForm;
