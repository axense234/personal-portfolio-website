// NestJS
import { Module } from '@nestjs/common';
// Services
import {
  CreateProjectService,
  GetProjectsService,
  InjectFeaturedProjectsService,
  ProjectServices,
} from './services';
// Controllers
import { ProjectController } from './project.controller';

@Module({
  providers: [
    ProjectServices,
    GetProjectsService,
    CreateProjectService,
    InjectFeaturedProjectsService,
  ],
  controllers: [ProjectController],
})
export class ProjectModule {}
