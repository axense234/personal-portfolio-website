"use client";
// Components
import ViewBasedPageHero from "@/components/shared/heros/ViewBasedPageHero";
// Helpers
import { translateGivenSectionDataType } from "@/helpers";
// Data
import { mealPrepsPageHeroContentData } from "@/data";
// Zustand
import { useGeneralStore } from "@/zustand/general";
// Translations
import { useTranslations } from "next-intl";

const MealPrepsPageHero = () => {
  const {
    currentMealPrepId,
    setCurrentMealPrepId,
    currentMealPrepImage,
    setCurrentMealPrepImage,
    getMealPrepsData,
  } = useGeneralStore((state) => state);

  const translations = useTranslations("mealPreps.sections.hero");

  const translatedData = translateGivenSectionDataType(
    translations,
    mealPrepsPageHeroContentData,
  );

  return (
    <ViewBasedPageHero
      heroData={translatedData}
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
