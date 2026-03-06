// NestJS
import { Module } from '@nestjs/common';
// Controller
import { TechSkillController } from './tech-skill.controller';
// Services
import {
  CreateTechSkillService,
  GetTechSkillsService,
  InjectTechSkillsService,
  TechSkillServices,
} from './services';

@Module({
  providers: [
    TechSkillServices,
    GetTechSkillsService,
    CreateTechSkillService,
    InjectTechSkillsService,
  ],
  controllers: [TechSkillController],
})
export class TechSkillModule {}
