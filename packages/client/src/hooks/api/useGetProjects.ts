"use client";
import { useGeneralStore } from "@/zustand/general/context";
// Shared Types
import {
  GetProjectsResponse,
  ProjectTopic,
} from "@personal-portfolio-website/shared";
// Ky
import ky from "ky";
// React
import { useEffect } from "react";

export const useGetProjects = (topics: ProjectTopic[]) => {
  const { setGetProjectsData } = useGeneralStore((state) => state);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = (await ky(`/api/projects`, {
          method: "get",
          searchParams: { topics: JSON.stringify(topics) },
        }).json()) as GetProjectsResponse;

        setGetProjectsData({
          isError: false,
          isLoading: false,
          projects: res?.projects,
        });
      } catch (error) {
        setGetProjectsData({
          isError: true,
          isLoading: false,
          projects: [],
        });
      }
    };
    getProjects();
  }, []);
};
