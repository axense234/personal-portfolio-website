"use client";
// ZZZZZustand
import { useGeneralStore } from "@/zustand/general/context";
// Shared Types
import { GetTechSkillsResponse } from "@personal-portfolio-website/shared";
// Ky
import ky from "ky";
// React
import { useEffect, useState } from "react";

export const useGetTechSkills = () => {
  const { setTechSkills, techSkills, setCurrentTechSkill } = useGeneralStore(
    (state) => state,
  );

  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTechSkills = async () => {
      try {
        const res = (await ky("/api/tech-skills", {
          method: "get",
        }).json()) as GetTechSkillsResponse;
        setTechSkills(res.techSkills);

        if (res.techSkills) {
          setCurrentTechSkill(res.techSkills[0]);
        }

        setIsError(false);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    getTechSkills();
  }, []);

  return {
    techSkills,
    isError,
    isLoading,
  };
};
