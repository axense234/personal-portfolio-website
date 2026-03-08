import { StatusCodes } from "http-status-codes";
import { Tech } from "../../../../prisma/client";

export interface GetTechResponse {
  status: StatusCodes;
  message: string;
  tech: Tech[];
}
