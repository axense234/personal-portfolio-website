"use client";
// Components
import { useGetWeeklyMealPrep } from "@/hooks";
import MealPrepDetails from "./MealPrepDetails";
import MealPrepImages from "./MealPrepImages";
// SCSS
import mealPrepViewStyles from "@/scss/components/shared/MealPrepView.module.scss";
// Shared
import { MealPrepWithIngredients } from "@personal-portfolio-website/shared";

const MealPrepView = () => {
  const { isError, isLoading, weeklyMealPrep } = useGetWeeklyMealPrep();

  if (isError) {
    return <div>iserror</div>;
  }

  if (isLoading) {
    return <div>isloading</div>;
  }

  const mealPrep = weeklyMealPrep as MealPrepWithIngredients;

  return (
    <div className={mealPrepViewStyles.container}>
      <MealPrepDetails {...mealPrep} />
      <MealPrepImages images={mealPrep?.images} mealPrepName={mealPrep?.name} />
    </div>
  );
};

export default MealPrepView;
