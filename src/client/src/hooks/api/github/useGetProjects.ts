// Interfaces
import { GithubRepository, GitHubSearchResponse } from "@/core/interfaces";
// ky
import ky from "ky";
// React
import { useEffect, useState } from "react";

const useGetProjects = ({ topicsCSV }: { topicsCSV: string }) => {
  const [projects, setProjects] = useState<GithubRepository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const topics = topicsCSV
          .split(", ")
          .map((topic) => `topic:${topic} `)
          .join(" ");

        const query = `user:axense234 ${topics}`;
        const url = `/api/github/projects?${query}`;

        const res = (await ky(url, {
          searchParams: { q: query },
        }).json()) as GitHubSearchResponse;

        setProjects(res.items);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };
    getProjects();
  }, []);

  return { projects, isLoading };
};

export default useGetProjects;
