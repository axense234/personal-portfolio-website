"use client";
// Shared Types
import {
  GetTechSkillsResponse,
  TechSkill,
} from "@personal-portfolio-website/shared";
// Ky
import ky from "ky";
// React
import { useEffect, useState } from "react";

export const useGetTechSkills = () => {
  const [techSkills, setTechSkills] = useState<TechSkill[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTechSkills = async () => {
      try {
        const res = (await ky("/api/tech-skills", {
          method: "get",
        }).json()) as GetTechSkillsResponse;
        setTechSkills(res.techSkills);

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
