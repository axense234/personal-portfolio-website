import { StatusCodes } from "http-status-codes";
import { Tech } from "../../../../prisma/client";

export interface CreateTechResponse {
  status: StatusCodes;
  message: string;
  tech: Tech;
}
