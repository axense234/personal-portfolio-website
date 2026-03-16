import { MealPrepWithIngredients } from "@personal-portfolio-website/shared";

export interface WeeklyMealPrepProps {
  weeklyMealPrep?: MealPrepWithIngredients;

  isError: boolean;
  isLoading: boolean;
}
