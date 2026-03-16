"use client";
// Components
import ViewBasedPageHero from "@/components/shared/ViewBasedPageHero";
// Data
import { mealPrepsPageHeroContentData } from "@/data";
// Zustand
import { useGeneralStore } from "@/zustand/general";

const MealPrepsPageHero = () => {
  const {
    currentMealPrepId,
    setCurrentMealPrepId,
    currentMealPrepImage,
    setCurrentMealPrepImage,
    getMealPrepsData,
  } = useGeneralStore((state) => state);

  return (
    <ViewBasedPageHero
      heroData={mealPrepsPageHeroContentData}
      sectionType="hero"
      page="meal-prep"
      currentEntityId={currentMealPrepId}
      setCurrentEntityId={setCurrentMealPrepId}
      currentEntityImage={currentMealPrepImage}
      setCurrentEntityImage={setCurrentMealPrepImage}
      isError={getMealPrepsData.isError}
      isLoading={getMealPrepsData.isLoading}
      entities={getMealPrepsData?.mealPreps}
    />
  );
};

export default MealPrepsPageHero;
