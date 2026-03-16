"use client";
// SCSS
import mealPrepsPageStyles from "@/scss/components/page/meal-prep/MealPrepsPage.module.scss";
// Components
import WeeklyMealPrep from "@/components/shared/WeeklyMealPrep";
import MealPrepsPageHero from "./MealPrepsPageHero";
import MealPrepsGallery from "./MealPrepsGallery";
// Zustand
import { useGeneralStore } from "@/zustand/general";
// Hooks
import { useSetCurrentEntityIdBasedOnData } from "@/hooks";
import { useGetMealPreps } from "@/hooks/api/useGetMealPreps";

const MealPrepsPage = () => {
  useGetMealPreps();

  const { currentMealPrepId, setCurrentMealPrepId, getMealPrepsData } =
    useGeneralStore((state) => state);

  useSetCurrentEntityIdBasedOnData(
    { ...getMealPrepsData, entities: getMealPrepsData?.mealPreps },
    currentMealPrepId,
    setCurrentMealPrepId,
  );

  const weeklyMealPrep = getMealPrepsData?.mealPreps?.sort(
    (a, b) => new Date(b?.cookedAt).getTime() - new Date(a?.cookedAt).getTime(),
  )[0];

  return (
    <section className={mealPrepsPageStyles.container}>
      <MealPrepsPageHero />
      <WeeklyMealPrep
        weeklyMealPrep={weeklyMealPrep}
        isError={getMealPrepsData?.isError}
        isLoading={getMealPrepsData?.isLoading}
      />
      <MealPrepsGallery />
    </section>
  );
};

export default MealPrepsPage;
