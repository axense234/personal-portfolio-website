// SCSS
import aboutPageStyles from "@/scss/components/page/about/AboutPage.module.scss";
// Components
import AboutHero from "./AboutHero";
import AboutJourney from "./AboutJourney";
import AboutMe from "./AboutMe";
import AboutTechnicalSkills from "./AboutTechnicalSkills";
import AboutHobbies from "./AboutHobbies";

const AboutPage = () => {
  return (
    <section className={aboutPageStyles.container}>
      <AboutHero />
      <AboutMe />
      <AboutTechnicalSkills />
      <AboutJourney />
      <AboutHobbies />
    </section>
  );
};

export default AboutPage;
