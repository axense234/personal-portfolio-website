// Data
import { homePageHeroSectionData } from "@/data";
// Components
import CommonPageHero from "@/components/shared/heros/CommonPageHero";

const HomeHero = () => {
  return <CommonPageHero {...homePageHeroSectionData} titleHeadingUsed="h2" />;
};

export default HomeHero;
