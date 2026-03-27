// Data
import { aboutPageJourneySectionData } from "@/data";
// Components
import AboutJourneyContent from "./AboutJourneyContent";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";

const AboutJourney = () => {
  return (
    <PageSectionWrapper pageSectionData={aboutPageJourneySectionData}>
      <AboutJourneyContent />
    </PageSectionWrapper>
  );
};

export default AboutJourney;
