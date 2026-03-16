"use client";
// SCSS
import homePageStyles from "@/scss/components/page/home/HomePage.module.scss";
// Components
import WeeklyMealPrep from "@/components/shared/WeeklyMealPrep";
import HomeAboutTeaser from "./HomeAboutTeaser";
import HomeContactTeaser from "./HomeContactTeaser";
import HomeFeaturedProjects from "./HomeFeaturedProjects";
import HomeHero from "./HomeHero";
import HomeTechnicalSkills from "./HomeTechnicalSkills";
// Zustandy and Hooks
import { useGetWeeklyMealPrep } from "@/hooks";
import { useGeneralStore } from "@/zustand/general";

const HomePage = () => {
  useGetWeeklyMealPrep();

  const { getWeeklyMealPrepData } = useGeneralStore((state) => state);

  const { isError, isLoading, mealPrep } = getWeeklyMealPrepData;

  return (
    <section className={homePageStyles.container}>
      <HomeHero />
      <HomeAboutTeaser />
      <HomeFeaturedProjects />
      <HomeTechnicalSkills />
      <WeeklyMealPrep
        isError={isError}
        isLoading={isLoading}
        weeklyMealPrep={mealPrep}
      />
      <HomeContactTeaser />
    </section>
  );
};

export default HomePage;
