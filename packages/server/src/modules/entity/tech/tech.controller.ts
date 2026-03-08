// NestJS
import { Body, Controller, Get, Post } from '@nestjs/common';
// Shared
import type { TechSkillCreateInput } from '@personal-portfolio-website/shared';

@Controller('tech')
export class TechController {
  constructor(private techServices: TechSkillServices) {}

  @Get()
  getTech() {
    return this.techSkillServices.getTechSkills();
  }

  @Post('create')
  createTech(@Body() dto: TechSkillCreateInput) {
    return this.techSkillServices.createTechSkill(dto);
  }

  @Post('basics')
  injectTech() {
    return this.techSkillServices.injectTechSkills();
  }
}
