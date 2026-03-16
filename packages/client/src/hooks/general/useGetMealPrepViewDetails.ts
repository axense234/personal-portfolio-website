// Shared
import { MealPrepWithIngredients } from "@personal-portfolio-website/shared";
// React
import { useState } from "react";

export const useGetMealPrepViewDetails = (
  displayMode: "dynamic" | "static",
  mealPreps: MealPrepWithIngredients[],
  currentMealPrepId?: string,
  currentMealPrepImage?: string,
  setCurrentMealPrepImage?: (image: string) => void,
) => {
  let currentMealPrep: MealPrepWithIngredients = mealPreps[0];

  if (mealPreps.length == 1) {
    currentMealPrep = mealPreps[0];
  } else {
    currentMealPrep =
      mealPreps?.find((mealPrep) => mealPrep.id === currentMealPrepId) ||
      mealPreps[0];
  }

  const viewImages = currentMealPrep?.images || [];

  const [currentEntityImageLocal, setCurrentEntityImageLocal] =
    useState<string>(viewImages[0]);

  const currentMealPrepImageWithDefault =
    !currentMealPrepImage || currentMealPrepImage?.length === 0
      ? viewImages[0]
      : currentMealPrepImage;

  const currentMealPrepImageUsed =
    displayMode === "dynamic"
      ? currentMealPrepImageWithDefault
      : currentEntityImageLocal;

  const currentMealPrepImageUsedSetter =
    displayMode === "dynamic" && setCurrentMealPrepImage
      ? setCurrentMealPrepImage
      : setCurrentEntityImageLocal;

  return {
    viewImages,
    currentMealPrep,
    currentMealPrepImageUsed,
    currentMealPrepImageUsedSetter,
  };
};
