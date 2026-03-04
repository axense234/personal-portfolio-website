"use client";
// Shared Types
import {
  GetProjectsResponse,
  ProjectWithImages,
} from "@personal-portfolio-website/shared";
// Ky
import ky from "ky";
// React
import { useEffect, useState } from "react";

export const useGetProjects = () => {
  const [projects, setProjects] = useState<ProjectWithImages[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = (await ky("/api/projects", {
          method: "get",
        }).json()) as GetProjectsResponse;
        setProjects(res.projects);

        setIsError(false);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };
    getProjects();
  }, []);

  return {
    projects,
    isError,
    isLoading,
  };
};
