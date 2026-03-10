// Nest
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
// Services
import { PrismaService } from 'src/modules/db';
// Data
import { featuredProjectsCreateData } from '../data';
// Status Codes
import { StatusCodes } from 'http-status-codes';
import { InjectFeaturedProjectsResponse } from '@personal-portfolio-website/shared';

@Injectable()
export class InjectFeaturedProjectsService {
  constructor(private prisma: PrismaService) {}

  async injectFeaturedProjects(): Promise<InjectFeaturedProjectsResponse> {
    try {
      const injectedFeaturedProjects = await this.prisma.$transaction(
        featuredProjectsCreateData.map((projectData) =>
          this.prisma.project.create({
            data: projectData,
            include: { images: true, awards: true },
          }),
        ),
      );

      if (!injectedFeaturedProjects || injectedFeaturedProjects.length < 1) {
        throw new InternalServerErrorException(
          'Something is wrong with inserting featured projects. Check it out.',
        );
      }

      return {
        status: StatusCodes.CREATED,
        message: `Successfully inserted ${injectedFeaturedProjects.length} featured projects. Yay.`,
        projects: injectedFeaturedProjects,
      };
    } catch (error) {
      if (error.code === 'P2002') {
        console.log(error);
        throw new ConflictException(
          'Already have some featured projects in the data base which match the provided data.',
        );
      } else {
        throw error;
      }
    }
  }
}
