// Nestjs
import { Injectable, NotFoundException } from '@nestjs/common';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class GetMealPrepsService {
  constructor(private prisma: PrismaService) {}

  async getMealPreps() {
    try {
      const foundMealPreps = await this.prisma.mealPrep.findMany();

      if (foundMealPreps.length < 1) {
        throw new NotFoundException('No meal preps found.');
      }

      return {
        status: StatusCodes.OK,
        message: `Successfully found ${foundMealPreps.length} meal preps.`,
        projects: foundMealPreps,
      };
    } catch (error) {
      throw error;
    }
  }
}
