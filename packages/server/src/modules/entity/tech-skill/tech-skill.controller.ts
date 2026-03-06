// NestJS
import { Body, Controller, Get, Post } from '@nestjs/common';
// Services
import { TechSkillServices } from './services';
// Shared
import type { TechSkillCreateInput } from '@personal-portfolio-website/shared';

@Controller('tech-skills')
export class TechSkillController {
  constructor(private techSkillServices: TechSkillServices) {}

  @Get()
  getTechSkills() {
    return this.techSkillServices.getTechSkills();
  }

  @Post('create')
  createTechSkill(@Body() dto: TechSkillCreateInput) {
    return this.techSkillServices.createTechSkill(dto);
  }

  @Post('basics')
  injectTechSkills() {
    return this.techSkillServices.injectTechSkills();
  }
}
