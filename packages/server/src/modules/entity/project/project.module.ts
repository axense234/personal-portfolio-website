// NestJS
import { Module } from '@nestjs/common';
// Services
import {
  CreateProjectService,
  GetProjectsService,
  InjectProjectsService,
  ProjectServices,
} from './services';
// Controllers
import { ProjectController } from './project.controller';

@Module({
  providers: [
    ProjectServices,
    GetProjectsService,
    CreateProjectService,
    InjectProjectsService,
  ],
  controllers: [ProjectController],
})
export class ProjectModule {}
