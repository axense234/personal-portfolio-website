"use client";
import { useGeneralStore } from "@/zustand/general/context";
// Shared Types
import { GetMealPrepsResponse } from "@personal-portfolio-website/shared";
// Ky
import ky from "ky";
// React
import { useEffect } from "react";

export const useGetMealPreps = () => {
  const { setGetMealPrepsData } = useGeneralStore((state) => state);

  useEffect(() => {
    const getMealPreps = async () => {
      try {
        const res = (await ky(`/api/meal-prep`, {
          method: "get",
        }).json()) as GetMealPrepsResponse;

        setGetMealPrepsData({
          isError: false,
          isLoading: false,
          mealPreps: res?.mealPreps,
        });
      } catch (error) {
        setGetMealPrepsData({
          isError: true,
          isLoading: false,
          mealPreps: [],
        });
      }
    };
    getMealPreps();
  }, []);
};
