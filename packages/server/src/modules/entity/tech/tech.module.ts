// NestJS
import { Module } from '@nestjs/common';
// Controller
import { TechController } from './tech.controller';
// Services
import {
  CreateTechService,
  GetTechService,
  InjectTechService,
  TechServices,
} from './services';

@Module({
  providers: [
    TechServices,
    GetTechService,
    CreateTechService,
    InjectTechService,
  ],
  controllers: [TechController],
})
export class TechModule {}
