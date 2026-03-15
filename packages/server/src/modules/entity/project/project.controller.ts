// NestJS
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
// Services
import { ProjectServices } from './services';
// E
import type {
  GetProjectsQueryParams,
  InjectProjectsQueryParams,
  ProjectCreateInput,
} from '@personal-portfolio-website/shared';

@Controller('projects')
export class ProjectController {
  constructor(private projectServices: ProjectServices) {}

  @Get()
  getProjects(@Query() params: GetProjectsQueryParams) {
    return this.projectServices.getProjects(params);
  }

  @Post('create')
  createProject(@Body() dto: ProjectCreateInput) {
    return this.projectServices.createProject(dto);
  }

  @Post('inject')
  injectProjects(@Query() params: InjectProjectsQueryParams) {
    return this.projectServices.insertProjects(params);
  }
}
