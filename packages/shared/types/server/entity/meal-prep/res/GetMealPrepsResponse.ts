import { StatusCodes } from "http-status-codes";
import { MealPrepWithIngredients } from "../extra";

export interface GetMealPrepsResponse {
  status: StatusCodes;
  message: string;
  mealPreps: MealPrepWithIngredients[];
}
