// Nest
import { BadRequestException, Injectable } from '@nestjs/common';
// Shared package
import {
  CreateTechSkillResponse,
  TechSkillCreateInput,
} from '@personal-portfolio-website/shared';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class CreateTechSkillService {
  constructor(private prisma: PrismaService) {}

  async createTechSkill(
    dto: TechSkillCreateInput,
  ): Promise<CreateTechSkillResponse> {
    try {
      if (!dto || Object.keys(dto).length == 0) {
        throw new BadRequestException('No body found.');
      }

      const createdTechSkill = await this.prisma.techSkill.create({
        data: { ...dto },
      });

      if (!createdTechSkill) {
        throw new BadRequestException(
          'Could not create TechSkill with the data provided.',
        );
      }

      return {
        status: StatusCodes.CREATED,
        message: `Successfully created TechSkill: ${createdTechSkill.label}.`,
        techSkill: createdTechSkill,
      };
    } catch (error) {
      if (error.name === 'PrismaClientValidationError') {
        throw new BadRequestException('Invalid body.');
      } else {
        throw error;
      }
    }
  }
}
