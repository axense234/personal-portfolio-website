import { MealPrepWithIngredients } from "@personal-portfolio-website/shared";

export type GetWeeklyMealPrepDataType = {
  isError: boolean;
  isLoading: boolean;
  mealPrep: MealPrepWithIngredients | undefined;
};
