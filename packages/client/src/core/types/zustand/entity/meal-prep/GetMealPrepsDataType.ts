import { MealPrepWithIngredients } from "@personal-portfolio-website/shared";

export type GetMealPrepsDataType = {
  isError: boolean;
  isLoading: boolean;
  mealPreps: MealPrepWithIngredients[];
};
