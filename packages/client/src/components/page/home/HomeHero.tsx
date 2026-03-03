// Data
import { homePageHeroSectionData } from "@/data";
// Components
import CommonPageHero from "@/components/shared/CommonPageHero";

const HomeHero = () => {
  return <CommonPageHero {...homePageHeroSectionData} />;
};

export default HomeHero;
