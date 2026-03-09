"use client";
// Shared Types
import { GetTechResponse, Tech } from "@personal-portfolio-website/shared";
// Ky
import ky from "ky";
// React
import { useEffect, useState } from "react";

export const useGetTech = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tech, setTech] = useState<Tech[]>([]);

  useEffect(() => {
    const getTech = async () => {
      try {
        const res = (await ky("/api/tech", {
          method: "get",
        }).json()) as GetTechResponse;
        setTech(res.tech);

        setIsError(false);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    getTech();
  }, []);

  return {
    tech,
    isError,
    isLoading,
  };
};
