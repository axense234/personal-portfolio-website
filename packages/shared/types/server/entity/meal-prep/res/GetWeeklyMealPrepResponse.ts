import { StatusCodes } from "http-status-codes";
import { MealPrepWithIngredients } from "../extra";

export interface GetWeeklyMealPrepResponse {
  status: StatusCodes;
  message: string;
  mealPrep: MealPrepWithIngredients;
}
