// SCSS
import contactPageStyles from "@/scss/components/page/contact/ContactPage.module.scss";
// Components
import ContactHero from "./ContactHero";
import ContactMessageMe from "./ContactMessageMe";
import ContactMethods from "./ContactMethods";

const ContactPage = () => {
  return (
    <section className={contactPageStyles.container}>
      <ContactHero />
      <ContactMethods />
      <ContactMessageMe />
    </section>
  );
};

export default ContactPage;
