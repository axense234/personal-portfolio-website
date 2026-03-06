// Nest
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
// Services
import { PrismaService } from 'src/modules/db';
// Data
import { techSkillsCreateData } from '../data';
// Status Codes
import { StatusCodes } from 'http-status-codes';
import { InjectTechSkillsResponse } from '@personal-portfolio-website/shared';

@Injectable()
export class InjectTechSkillsService {
  constructor(private prisma: PrismaService) {}

  async injectTechSkills(): Promise<InjectTechSkillsResponse> {
    try {
      const injectedTechSkills = await this.prisma.$transaction(
        techSkillsCreateData.map((techSkillData) =>
          this.prisma.techSkill.create({
            data: techSkillData,
          }),
        ),
      );

      if (!injectedTechSkills || injectedTechSkills.length < 1) {
        throw new InternalServerErrorException(
          'Something is wrong with inserting tech skills. Check it out.',
        );
      }

      return {
        status: StatusCodes.CREATED,
        message: `Successfully inserted ${injectedTechSkills.length} tech skills. Yay.`,
        techSkills: injectedTechSkills,
      };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException(
          'Already have some tech skills in the db which match the provided data.',
        );
      } else {
        throw error;
      }
    }
  }
}
