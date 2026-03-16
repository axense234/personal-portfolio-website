// Nest
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
// Services
import { PrismaService } from 'src/modules/db';
// Data
import { batch1 } from '../data';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Shared
import {
  InjectMealPrepsQueryParams,
  InjectMealPrepsResponse,
} from '@personal-portfolio-website/shared';

@Injectable()
export class InjectMealPrepsService {
  constructor(private prisma: PrismaService) {}

  async injectMealPreps(
    params: InjectMealPrepsQueryParams,
  ): Promise<InjectMealPrepsResponse> {
    try {
      const specifier = params.specifier;

      let batchUsed = batch1;

      switch (specifier) {
        case '1':
          batchUsed = batch1;
          break;
        default:
          batchUsed = batch1;
          break;
      }

      const injectedMealPreps = await this.prisma.$transaction(
        batchUsed.map((mealPrepData) =>
          this.prisma.mealPrep.create({
            data: mealPrepData,
            include: {
              ingredients: true,
            },
          }),
        ),
      );

      if (!injectedMealPreps || injectedMealPreps.length < 1) {
        throw new InternalServerErrorException(
          'Something is wrong with inserting meal preps. Check it out.',
        );
      }

      return {
        status: StatusCodes.CREATED,
        message: `Successfully inserted ${injectedMealPreps.length} meal preps. Yay.`,
        mealPreps: injectedMealPreps,
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(
          'Already have some meal preps in the data base which match the provided data.',
        );
      } else {
        throw error;
      }
    }
  }
}
