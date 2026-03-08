// Nest
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
// Shared package
import {
  CreateTechResponse,
  TechCreateInput,
} from '@personal-portfolio-website/shared';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class CreateTechService {
  constructor(private prisma: PrismaService) {}

  async createTech(dto: TechCreateInput): Promise<CreateTechResponse> {
    try {
      if (!dto || Object.keys(dto).length == 0) {
        throw new BadRequestException('No body found.');
      }

      const createdTech = await this.prisma.tech.create({
        data: { ...dto },
      });

      if (!createdTech) {
        throw new BadRequestException(
          'Could not create Tech with the data provided.',
        );
      }

      return {
        status: StatusCodes.CREATED,
        message: `Successfully created Tech: ${createdTech.label}.`,
        tech: createdTech,
      };
    } catch (error) {
      if (error.name === 'PrismaClientValidationError') {
        throw new BadRequestException('Invalid body.');
      } else if (error.code === 'P2002') {
        throw new ConflictException(
          'Tech entities have an unique constraint: scope + label.',
        );
      } else {
        throw error;
      }
    }
  }
}
