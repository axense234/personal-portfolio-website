// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// DTO
import {
  CreateMealPrepResponse,
  MealPrepCreateInput,
} from '@personal-portfolio-website/shared';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class CreateMealPrepService {
  constructor(private prisma: PrismaService) {}

  async createMealPrep(
    dto: MealPrepCreateInput,
  ): Promise<CreateMealPrepResponse> {
    try {
      if (!dto || Object.keys(dto).length == 0) {
        throw new BadRequestException('No body found.');
      }

      const createdMealPrep = await this.prisma.mealPrep.create({
        data: { ...dto },
        include: { ingredients: true },
      });

      if (!createdMealPrep) {
        throw new BadRequestException(
          'Could not create MealPrep with the input provided.',
        );
      }

      return {
        status: StatusCodes.CREATED,
        message: `Successfully created MealPrep: ${createdMealPrep.name} at ${createdMealPrep.cookedAt}.`,
        mealPrep: createdMealPrep,
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
