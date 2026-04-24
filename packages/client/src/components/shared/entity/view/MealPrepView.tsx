"use client";
// Components
import MealPrepViewDetails from "./MealPrepViewDetails";
import EntityViewImages from "../EntityViewImages";
import ErrorInterface from "../../sections/ErrorInterface";
import LoadingInterface from "../../sections/LoadingInterface";
// SCSS
import mealPrepViewStyles from "@/scss/components/shared/entity/view/MealPrepView.module.scss";
// React
import { FC, useEffect } from "react";
// Props
import { MealPrepViewProps } from "@/core/interfaces";
// Hooks
import { useGetMealPrepViewDetails, useGetWindowWidth } from "@/hooks";
// Shared
import { MealPrepWithIngredients } from "@personal-portfolio-website/shared";

const MealPrepView: FC<MealPrepViewProps> = ({
  currentMealPrepId,
  currentMealPrepImage,
  setCurrentMealPrepImage,
  mealPreps,
  displayMode,
  mealPrep,
  isError,
  isLoading,
}) => {
  const usedMealPreps =
    displayMode === "dynamic" && mealPreps
      ? mealPreps
      : ([mealPrep] as MealPrepWithIngredients[]);

  const windowWidth = useGetWindowWidth();
  const mealPrepImagesPosition =
    windowWidth && windowWidth <= 900 ? "top" : "bottom";

  const {
    currentMealPrep,
    viewImages,
    currentMealPrepImageUsed,
    currentMealPrepImageUsedSetter,
  } = useGetMealPrepViewDetails(
    displayMode,
    usedMealPreps,
    currentMealPrepId,
    currentMealPrepImage,
    setCurrentMealPrepImage,
  );

  useEffect(() => {
    if (displayMode === "dynamic" && setCurrentMealPrepImage) {
      setCurrentMealPrepImage(viewImages[0]);
    }
  }, [currentMealPrepId]);

  if (isError) {
    return <ErrorInterface isError={isError} />;
  }

  if (isLoading) {
    return (
      <LoadingInterface isLoading={isLoading} message="Loading Meal Prep..." />
    );
  }

  if (!usedMealPreps || usedMealPreps.length < 1) {
    return <div>not found</div>;
  }

  return (
    <div className={mealPrepViewStyles.container}>
      {mealPrepImagesPosition === "top" && (
        <EntityViewImages
          images={viewImages}
          entityType="meal-prep"
          currentEntityImage={currentMealPrepImageUsed}
          setCurrentEntityImage={currentMealPrepImageUsedSetter}
        />
      )}
      <MealPrepViewDetails currentMealPrep={currentMealPrep} />
      {mealPrepImagesPosition === "bottom" && (
        <EntityViewImages
          images={viewImages}
          entityType="meal-prep"
          currentEntityImage={currentMealPrepImageUsed}
          setCurrentEntityImage={currentMealPrepImageUsedSetter}
        />
      )}
    </div>
  );
};

export default MealPrepView;
