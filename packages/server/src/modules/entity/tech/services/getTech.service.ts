// Nestjs
import { Injectable, NotFoundException } from '@nestjs/common';
// Shared
import { GetTechResponse } from '@personal-portfolio-website/shared';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class GetTechService {
  constructor(private prisma: PrismaService) {}

  async getTech(): Promise<GetTechResponse> {
    try {
      const foundTech = await this.prisma.tech.findMany({});

      if (foundTech.length < 1) {
        throw new NotFoundException('No tech found.');
      }

      return {
        status: StatusCodes.OK,
        message: `Successfully found ${foundTech.length} Tech.`,
        tech: foundTech,
      };
    } catch (error) {
      throw error;
    }
  }
}
