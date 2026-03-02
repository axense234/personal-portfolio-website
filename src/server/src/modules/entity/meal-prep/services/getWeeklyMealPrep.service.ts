// NextJS
import { Injectable, NotFoundException } from '@nestjs/common';
// The shared packed which i don't know if it's implemented correctly or if it's even necessary but idk man ya know just yapping
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class GetWeeklyMealPrepService {
  constructor(private prisma: PrismaService) {}

  async getWeeklyMealPrepService() {
    try {
      const foundWeeklyMealPrep = await this.prisma.mealPrep.findFirst({
        orderBy: {
          cookedAt: 'desc',
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
