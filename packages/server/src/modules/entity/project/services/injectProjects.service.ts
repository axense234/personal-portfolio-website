// Nest
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
// Services
import { PrismaService } from 'src/modules/db';
// Data
import { batch1, featuredProjectsCreateData } from '../data';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Types
import {
  InjectProjectsQueryParams,
  InjectProjectsResponse,
} from '@personal-portfolio-website/shared';

@Injectable()
export class InjectProjectsService {
  constructor(private prisma: PrismaService) {}

  async injectProjects(
    params: InjectProjectsQueryParams,
  ): Promise<InjectProjectsResponse> {
    try {
      const specifier = params.specifier;

      let batchUsed = featuredProjectsCreateData;

      switch (specifier) {
        case 'f':
          batchUsed = featuredProjectsCreateData;
          break;
        case '1':
          batchUsed = batch1;
          break;
        default:
          batchUsed = batch1;
          break;
      }

      const injectedProjects = await this.prisma.$transaction(
        batchUsed.map((projectData) =>
          this.prisma.project.create({
            data: projectData,
            include: {
              images: true,
              awards: true,
              skills: { include: { tech: true } },
            },
          }),
        ),
      );

      if (!injectedProjects || injectedProjects.length < 1) {
        throw new InternalServerErrorException(
          'Something is wrong with inserting projects. Check it out.',
        );
      }

      return {
        status: StatusCodes.CREATED,
        message: `Successfully inserted ${injectedProjects.length} projects. Yay.`,
        projects: injectedProjects,
      };
    } catch (error) {
      if (error.code === 'P2002') {
        console.log(error);
        throw new ConflictException(
          'Already have some projects in the data base which match the provided data.',
        );
      } else {
        throw error;
      }
    }
  }
}
