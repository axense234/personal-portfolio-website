// Nest
import { Injectable } from '@nestjs/common';
// Services
import { GetTechSkillsService } from './getTechSkills.service';
import { CreateTechSkillService } from './createTechSkill.service';
import { InjectTechSkillsService } from './injectTechSkills.service';
// Shared
import {
  CreateTechSkillResponse,
  GetTechSkillsResponse,
  InjectTechSkillsResponse,
  TechSkillCreateInput,
} from '@personal-portfolio-website/shared';

@Injectable()
export class TechSkillServices {
  constructor(
    private getTechSkillsService: GetTechSkillsService,
    private createTechSkillService: CreateTechSkillService,
    private injectTechSkillsService: InjectTechSkillsService,
  ) {}

  async getTechSkills(): Promise<GetTechSkillsResponse> {
    return await this.getTechSkillsService.getTechSkills();
  }

  async createTechSkill(
    dto: TechSkillCreateInput,
  ): Promise<CreateTechSkillResponse> {
    return await this.createTechSkillService.createTechSkill(dto);
  }

  async injectTechSkills(): Promise<InjectTechSkillsResponse> {
    return await this.injectTechSkillsService.injectTechSkills();
  }
}
