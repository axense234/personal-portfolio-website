"use client";
// Shared Types
import {
  GetWeeklyMealPrepResponse,
  MealPrepWithIngredients,
} from "@personal-portfolio-website/shared";
// Ky
import ky from "ky";
// React
import { useEffect, useState } from "react";

export const useGetWeeklyMealPrep = () => {
  const [weeklyMealPrep, setWeeklyMealPrep] =
    useState<MealPrepWithIngredients>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getWeeklyMealPrep = async () => {
      try {
        const res = (await ky("/api/meal-preps/weekly", {
          method: "get",
        }).json()) as GetWeeklyMealPrepResponse;
        setWeeklyMealPrep(res.mealPrep);

        setIsError(false);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    getWeeklyMealPrep();
  }, []);

  return {
    weeklyMealPrep,
    isError,
    isLoading,
  };
};
