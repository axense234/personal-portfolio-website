// SCSS
import aboutJourneyStyles from "@/scss/components/page/about/AboutJourney.module.scss";
// Data
import { aboutPageJourneySectionData } from "@/data";
// Components
import LinkButton from "@/components/shared/LinkButton";
import AboutJourneyContent from "./AboutJourneyContent";

const AboutJourney = () => {
  const { title, paragraphs, buttons } = aboutPageJourneySectionData;
  return (
    <section className={aboutJourneyStyles.container}>
      <div className={aboutJourneyStyles.content}>
        <div className={aboutJourneyStyles.intro}>
          <h2 title={title} aria-label={title}>
            {title}
          </h2>
          {paragraphs.map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
        </div>
        <AboutJourneyContent />
      </div>
      {buttons?.map((button) => {
        return <LinkButton {...button} key={button.id} />;
      })}
    </section>
  );
};

export default AboutJourney;
