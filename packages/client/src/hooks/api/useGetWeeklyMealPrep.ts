"use client";
// Zustand
import { useGeneralStore } from "@/zustand/general";
// Shared Types
import { GetWeeklyMealPrepResponse } from "@personal-portfolio-website/shared";
// Ky
import ky from "ky";
// React
import { useEffect } from "react";

export const useGetWeeklyMealPrep = () => {
  const { setGetWeeklyMealPrepData } = useGeneralStore((state) => state);

  useEffect(() => {
    const getWeeklyMealPrep = async () => {
      try {
        const res = (await ky("/api/meal-prep/weekly", {
          method: "get",
        }).json()) as GetWeeklyMealPrepResponse;

        setGetWeeklyMealPrepData({
          isError: false,
          isLoading: false,
          mealPrep: res?.mealPrep,
        });
      } catch (error) {
        setGetWeeklyMealPrepData({
          isError: true,
          isLoading: false,
          mealPrep: undefined,
        });
      }
    };
    getWeeklyMealPrep();
  }, []);
};
