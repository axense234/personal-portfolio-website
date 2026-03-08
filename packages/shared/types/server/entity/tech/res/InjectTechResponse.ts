import { StatusCodes } from "http-status-codes";
import { Tech } from "../../../../prisma/client";

export interface InjectTechResponse {
  status: StatusCodes;
  message: string;
  tech: Tech[];
}
