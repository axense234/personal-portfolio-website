// NestJS
import { Body, Controller, Get, Post } from '@nestjs/common';
// Services
import { ProjectServices } from './services';
// E
import { type ProjectCreateInput } from '@personal-portfolio-website/shared';

@Controller('projects')
export class ProjectController {
  constructor(private projectServices: ProjectServices) {}

  @Get()
  getProjects() {
    return this.projectServices.getProjects();
  }

  @Post('create')
  createProject(@Body() dto: ProjectCreateInput) {
    return this.projectServices.createProject(dto);
  }
}
