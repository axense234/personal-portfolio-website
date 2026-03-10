// Components
import ViewBasedPageHero from "@/components/shared/ViewBasedPageHero";
// Data
import { awardsPageHeroContentData } from "@/data";

const AwardsPageHero = () => {
  return (
    <ViewBasedPageHero heroData={awardsPageHeroContentData} page="awards" />
  );
};

export default AwardsPageHero;
