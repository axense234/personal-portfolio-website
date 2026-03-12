// Nestjs
import { Injectable, NotFoundException } from '@nestjs/common';
// Shared
import {
  GetProjectsQueryParams,
  GetProjectsResponse,
  ProjectFindManyArgs,
  ProjectWhereInput,
} from '@personal-portfolio-website/shared';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class GetProjectsService {
  constructor(private prisma: PrismaService) {}

  async getProjects(
    params: GetProjectsQueryParams,
  ): Promise<GetProjectsResponse> {
    try {
      const queryObject: ProjectWhereInput = {
        topics: { hasEvery: JSON.parse(params?.topics) || [] },
      };

      const foundProjects = await this.prisma.project.findMany({
        include: {
          images: true,
          awards: true,
          skills: { include: { tech: true } },
        },
        where: queryObject,
      });

      if (foundProjects.length < 1) {
        throw new NotFoundException('No projects found.');
      }

      return {
        status: StatusCodes.OK,
        message: `Successfully found ${foundProjects.length} projects.`,
        projects: foundProjects,
      };
    } catch (error) {
      throw error;
    }
  }
}
