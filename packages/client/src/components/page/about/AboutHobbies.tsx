// Data
import { aboutPageHobbiesSectionData } from "@/data";
// Components
import Hobbies from "./Hobbies";
import PageSectionWrapper from "@/components/shared/sections/PageSectionWrapper";

const AboutHobbies = () => {
  return (
    <PageSectionWrapper pageSectionData={aboutPageHobbiesSectionData}>
      <Hobbies />
    </PageSectionWrapper>
  );
};

export default AboutHobbies;
