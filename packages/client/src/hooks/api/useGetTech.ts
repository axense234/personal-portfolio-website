"use client";
import { useGeneralStore } from "@/zustand/general";
// Shared Types
import { GetTechResponse } from "@personal-portfolio-website/shared";
// Ky
import ky from "ky";
// React
import { useEffect } from "react";

export const useGetTech = () => {
  const { setGetTechData } = useGeneralStore((state) => state);

  useEffect(() => {
    const getTech = async () => {
      try {
        const res = (await ky("/api/tech", {
          method: "get",
        }).json()) as GetTechResponse;

        setGetTechData({
          isError: false,
          isLoading: false,
          tech: res?.tech,
        });
      } catch (error) {
        setGetTechData({
          isError: true,
          isLoading: false,
          tech: [],
        });
      }
    };
    getTech();
  }, []);
};
