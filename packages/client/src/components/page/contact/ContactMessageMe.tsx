// SCSS
import contactMessageMeStyles from "@/scss/components/page/contact/ContactMessageMe.module.scss";
// Data
import { contactPageContactMessageMeSectionData } from "@/data";
// Components
import ContactForm from "./ContactForm";

const ContactMessageMe = () => {
  const { title, paragraphs } = contactPageContactMessageMeSectionData;
  return (
    <section className={contactMessageMeStyles.container}>
      <div className={contactMessageMeStyles.intro}>
        <h2 title={title} aria-label={title}>
          {title}
        </h2>
        {paragraphs?.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactMessageMe;
