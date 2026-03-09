// Nest
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
// Services
import { PrismaService } from 'src/modules/db';
// Data
import { techCreateData } from '../data';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Shared
import { InjectTechResponse } from '@personal-portfolio-website/shared';

@Injectable()
export class InjectTechService {
  constructor(private prisma: PrismaService) {}

  async injectTech(): Promise<InjectTechResponse> {
    try {
      const injectedTech = await this.prisma.$transaction(
        techCreateData.map((techData) =>
          this.prisma.tech.create({
            data: techData,
          }),
        ),
      );

      if (!injectedTech || injectedTech.length < 1) {
        throw new InternalServerErrorException(
          'Something is wrong with inserting Tech. Check it out.',
        );
      }

      return {
        status: StatusCodes.CREATED,
        message: `Successfully inserted ${injectedTech.length} Tech. Yay.`,
        tech: injectedTech,
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(
          'Already have some Tech in the db which match the provided data.',
        );
      } else {
        throw error;
      }
    }
  }
}
