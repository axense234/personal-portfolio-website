import { MealPrepWithIngredients } from "@personal-portfolio-website/shared";

export interface MealPrepViewProps {
  displayMode: "dynamic" | "static";
  mealPrep?: MealPrepWithIngredients;

  currentMealPrepId?: string;
  currentMealPrepImage?: string;
  setCurrentMealPrepImage?: (value: string) => void;
  mealPreps?: MealPrepWithIngredients[];

  isError: boolean;
  isLoading: boolean;
}
