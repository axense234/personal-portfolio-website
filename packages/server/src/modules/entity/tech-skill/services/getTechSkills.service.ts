// Nestjs
import { Injectable, NotFoundException } from '@nestjs/common';
// Shared
import { GetTechSkillsResponse } from '@personal-portfolio-website/shared';
// Status Codes
import { StatusCodes } from 'http-status-codes';
// Services
import { PrismaService } from 'src/modules/db';

@Injectable()
export class GetTechSkillsService {
  constructor(private prisma: PrismaService) {}

  async getTechSkills(): Promise<GetTechSkillsResponse> {
    try {
      const foundTechSkills = await this.prisma.techSkill.findMany({});

      if (foundTechSkills.length < 1) {
        throw new NotFoundException('No tech skills found.');
      }

      return {
        status: StatusCodes.OK,
        message: `Successfully found ${foundTechSkills.length} tech skills.`,
        techSkills: foundTechSkills,
      };
    } catch (error) {
      throw error;
    }
  }
}
