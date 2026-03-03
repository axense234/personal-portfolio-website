// Nest
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
// Shared package
import { ProjectCreateInput } from '@personal-portfolio-website/shared';
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class CreateProjectService {
  constructor(private prisma: PrismaService) {}

  async createProject(dto: ProjectCreateInput) {
    try {
      if (!dto || Object.keys(dto).length == 0) {
        throw new BadRequestException('No body found.');
      }

      const createdProject = await this.prisma.project.create({
        data: { ...dto },
      });

      if (!createdProject) {
        throw new BadRequestException(
          'Could not create Project with the data provided.',
        );
      }

      return {
        status: StatusCodes.CREATED,
        message: `Successfully created Project: ${createdProject.name}.`,
        project: createdProject,
      };
    } catch (error) {
      if (error.name === 'PrismaClientValidationError') {
        throw new BadRequestException('Invalid body.');
      } else if (error.code === 'P2002') {
        throw new ConflictException('Projects must have unique names.');
      } else {
        throw error;
      }
    }
  }
}
