import { StatusCodes } from "http-status-codes";
import { MealPrepWithIngredients } from "../extra";

export interface CreateMealPrepResponse {
  status: StatusCodes;
  message: string;
  mealPrep: MealPrepWithIngredients;
}
