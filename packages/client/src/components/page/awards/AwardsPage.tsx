// SCSS
import awardsPageStyles from "@/scss/components/page/awards/AwardsPage.module.scss";
// Components
import AwardsPageHero from "./AwardsPageHero";
import AwardsBronzeMedal from "./AwardsBronzeMedal";
import HighschoolAwards from "./HighschoolAwards";

const AwardsPage = () => {
  return (
    <section className={awardsPageStyles.container}>
      <AwardsPageHero />
      <AwardsBronzeMedal />
      <HighschoolAwards />
    </section>
  );
};

export default AwardsPage;
