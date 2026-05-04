// Components
import AboutHero from "./AboutHero";
import AboutJourney from "./AboutJourney";
import AboutMe from "./AboutMe";
import AboutTechnicalSkills from "./AboutTechnicalSkills";
import AboutHobbies from "./AboutHobbies";
import StandardPageWrapper from "../StandardPageWrapper";
// Hooks
import { useGetTech } from "@/hooks";

const AboutPage = () => {
  useGetTech();

  return (
    <StandardPageWrapper>
      <AboutHero />
      <AboutMe />
      <AboutTechnicalSkills />
      <AboutJourney />
      <AboutHobbies />
    </StandardPageWrapper>
  );
};

export default AboutPage;
