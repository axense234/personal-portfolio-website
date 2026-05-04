import { Tech } from "@personal-portfolio-website/shared";

export type GetTechDataType = {
  isError: boolean;
  isLoading: boolean;
  tech: Tech[];
};
