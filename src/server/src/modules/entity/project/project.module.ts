// NestJS
import { Module } from '@nestjs/common';
// Services
import {
  CreateProjectService,
  GetProjectsService,
  ProjectServices,
} from './services';
// Controllers
import { ProjectController } from './project.controller';

@Module({
  providers: [ProjectServices, GetProjectsService, CreateProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
