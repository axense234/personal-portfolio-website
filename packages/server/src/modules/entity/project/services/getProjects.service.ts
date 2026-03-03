// Nestjs
import { Injectable, NotFoundException } from '@nestjs/common';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class GetProjectsService {
  constructor(private prisma: PrismaService) {}

  async getProjects() {
    try {
      const foundProjects = await this.prisma.project.findMany();

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
