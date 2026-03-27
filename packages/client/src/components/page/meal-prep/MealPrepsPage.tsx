"use client";
// Components
import WeeklyMealPrep from "@/components/shared/sections/WeeklyMealPrep";
import MealPrepsPageHero from "./MealPrepsPageHero";
import MealPrepsGallery from "./MealPrepsGallery";
import StandardPageWrapper from "../StandardPageWrapper";
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
    <StandardPageWrapper>
      <MealPrepsPageHero />
      <WeeklyMealPrep
        weeklyMealPrep={weeklyMealPrep}
        isError={getMealPrepsData?.isError}
        isLoading={getMealPrepsData?.isLoading}
      />
      <MealPrepsGallery />
    </StandardPageWrapper>
  );
};

export default MealPrepsPage;
