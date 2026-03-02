// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// DTO
import { MealPrepCreateInput } from '@personal-portfolio-website/shared';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class CreateMealPrepService {
  constructor(private prisma: PrismaService) {}

  async createMealPrep(dto: MealPrepCreateInput) {
    try {
      const createdMealPrep = await this.prisma.mealPrep.create({
        data: { ...dto },
      });

      if (!createdMealPrep) {
        throw new BadRequestException(
          'Could not create MealPrep with the input provided.',
        );
      }

      return {
        status: StatusCodes.OK,
        message: `Successfully created MealPrep: ${createdMealPrep.name} at ${createdMealPrep.cookedAt}.`,
        mealPrep: createdMealPrep,
      };
    } catch (error) {
      throw error;
    }
  }
}
