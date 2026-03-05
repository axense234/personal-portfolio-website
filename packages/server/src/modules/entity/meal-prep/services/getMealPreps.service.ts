// Nestjs
import { Injectable, NotFoundException } from '@nestjs/common';
// Shared
import { GetMealPrepsResponse } from '@personal-portfolio-website/shared';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class GetMealPrepsService {
  constructor(private prisma: PrismaService) {}

  async getMealPreps(): Promise<GetMealPrepsResponse> {
    try {
      const foundMealPreps = await this.prisma.mealPrep.findMany({
        include: { ingredients: true },
      });

      if (foundMealPreps.length < 1) {
        throw new NotFoundException('No meal preps found.');
      }

      return {
        status: StatusCodes.OK,
        message: `Successfully found ${foundMealPreps.length} meal preps.`,
        mealPreps: foundMealPreps,
      };
    } catch (error) {
      throw error;
    }
  }
}
