import { GithubRepository } from "./GithubRepository";

export interface GitHubSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GithubRepository[];
}
