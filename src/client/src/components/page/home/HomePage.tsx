// SCSS
import homePageStyles from "@/scss/components/page/HomePage.module.scss";
// Components
import WeeklyMealPrep from "@/components/shared/WeeklyMealPrep";
import HomeAboutTeaser from "./HomeAboutTeaser";
import HomeContactTeaser from "./HomeContactTeaser";
import HomeFeaturedProjects from "./HomeFeaturedProjects";
import HomeHero from "./HomeHero";
import HomeTechnicalSkills from "./HomeTechnicalSkills";

const HomePage = () => {
  return (
    <section className={homePageStyles.container}>
      <HomeHero />
      <HomeAboutTeaser />
      <HomeFeaturedProjects />
      <HomeTechnicalSkills />
      <WeeklyMealPrep />
      <HomeContactTeaser />
    </section>
  );
};

export default HomePage;
