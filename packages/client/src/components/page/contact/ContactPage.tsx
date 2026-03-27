// Components
import ContactHero from "./ContactHero";
import ContactMessageMe from "./ContactMessageMe";
import ContactMethods from "./ContactMethods";
import StandardPageWrapper from "../StandardPageWrapper";

const ContactPage = () => {
  return (
    <StandardPageWrapper>
      <ContactHero />
      <ContactMethods />
      <ContactMessageMe />
    </StandardPageWrapper>
  );
};

export default ContactPage;
