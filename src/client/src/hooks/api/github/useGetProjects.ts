// Interfaces
import { GithubRepository, GitHubSearchResponse } from "@/core/interfaces";
// ky
import { KyResponse } from "ky";
import customKy from "@/config/ky";
// React
import { useEffect, useState } from "react";

const useGetProjects = ({ rawTopics = [] }: { rawTopics: string[] }) => {
  const [projects, setProjects] = useState<GithubRepository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const topics =
          rawTopics.length > 0
            ? `${rawTopics.map((rt: string) => `topic:${rt}`).join(" ")}`
            : "";

        const res: KyResponse<GitHubSearchResponse> = await customKy.get(
          "search/repositories",
          { searchParams: { q: `user:axense234 ${topics}` } },
        );

        console.log(res);

        const projects = (await res.json())?.items;

        setProjects(projects);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };
    getProjects();
  }, [rawTopics]);

  return { projects, isLoading };
};

export default useGetProjects;
