"use client";
// Components
import WeeklyMealPrep from "@/components/shared/sections/WeeklyMealPrep";
import HomeAboutTeaser from "./HomeAboutTeaser";
import HomeContactTeaser from "./HomeContactTeaser";
import HomeFeaturedProjects from "./HomeFeaturedProjects";
import HomeHero from "./HomeHero";
import HomeTechnicalSkills from "./HomeTechnicalSkills";
import StandardPageWrapper from "../StandardPageWrapper";
// Zustandy and Hooks
import { useGetTech, useGetWeeklyMealPrep } from "@/hooks";
import { useGeneralStore } from "@/zustand/general";

const HomePage = () => {
  useGetWeeklyMealPrep();
  useGetTech();

  const { getWeeklyMealPrepData } = useGeneralStore((state) => state);

  const { isError, isLoading, mealPrep } = getWeeklyMealPrepData;

  return (
    <StandardPageWrapper>
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
    </StandardPageWrapper>
  );
};

export default HomePage;
