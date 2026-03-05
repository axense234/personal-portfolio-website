// NextJS
import { Injectable, NotFoundException } from '@nestjs/common';
// Shared
import { GetWeeklyMealPrepResponse } from '@personal-portfolio-website/shared';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class GetWeeklyMealPrepService {
  constructor(private prisma: PrismaService) {}

  async getWeeklyMealPrepService(): Promise<GetWeeklyMealPrepResponse> {
    try {
      const foundWeeklyMealPrep = await this.prisma.mealPrep.findFirst({
        orderBy: {
          cookedAt: 'desc',
        },
        include: {
          ingredients: true,
        },
      });

      if (!foundWeeklyMealPrep) {
        throw new NotFoundException(
          'Could not find the wanted Weekly Meal Prep.',
        );
      }

      return {
        status: StatusCodes.OK,
        message: `Successfully found Weekly Meal Prep: ${foundWeeklyMealPrep.name}.`,
        mealPrep: foundWeeklyMealPrep,
      };
    } catch (error) {
      throw error;
    }
  }
}
