// SCSS
import contactMethodsStyles from "@/scss/components/page/contact/ContactMethods.module.scss";
// Data
import { contactPageContactMethodsSectionData, proEmail } from "@/data";
// Components
import LinkButton from "@/components/shared/LinkButton";
import SocialIcons from "@/components/shared/SocialIcons";

const ContactMethodsContent = () => {
  return (
    <div className={contactMethodsStyles.content}>
      <div className={contactMethodsStyles.method}>
        <h4>Professional Email:</h4>
        <h5>{proEmail}</h5>
      </div>
      <div className={contactMethodsStyles.method}>
        <h4>Externals:</h4>
        <SocialIcons iconHeight={48} />
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
        />
      </div>
    </div>
  );
};

const ContactMethods = () => {
  const { title, paragraphs } = contactPageContactMethodsSectionData;
  return (
    <section className={contactMethodsStyles.container}>
      <div className={contactMethodsStyles.intro}>
        <h2 title={title} aria-label={title}>
          {title}
        </h2>
        {paragraphs?.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
      <ContactMethodsContent />
    </section>
  );
};

export default ContactMethods;
