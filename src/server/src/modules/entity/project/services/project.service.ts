// Nest
import { Injectable } from '@nestjs/common';
// Shared package <3
import { ProjectCreateInput } from '@personal-portfolio-website/shared';
// Services
import { CreateProjectService } from './createProject.service';
import { GetProjectsService } from './getProjects.service';

@Injectable()
export class ProjectServices {
  constructor(
    private createProjectService: CreateProjectService,
    private getProjectsService: GetProjectsService,
  ) {}

  async getProjects() {
    return await this.getProjectsService.getProjects();
  }

  async createProject(dto: ProjectCreateInput) {
    return await this.createProjectService.createProject(dto);
  }
}
