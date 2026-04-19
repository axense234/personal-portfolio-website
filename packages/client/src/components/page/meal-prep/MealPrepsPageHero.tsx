"use client";
// Components
import ViewBasedPageHero from "@/components/shared/heros/ViewBasedPageHero";
// Types
import { SectionDataType } from "@/core/types";
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

  const translatedData: SectionDataType = {
    ...mealPrepsPageHeroContentData,
    title: translations("title"),
    paragraphs: translations.has("paragraphs")
      ? translations.raw("paragraphs")
      : undefined,
    subtitle: translations.has("subtitle")
      ? translations.raw("subtitle")
      : undefined,
    buttons: mealPrepsPageHeroContentData?.buttons?.map((button) => ({
      ...button,
      label: translations(`buttons.button-${button.id}.label`),
    })),
  };

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
