// Nest
import { Injectable } from '@nestjs/common';
// Shared package <3
import {
  CreateProjectResponse,
  GetProjectsResponse,
  InjectFeaturedProjectsResponse,
  ProjectCreateInput,
} from '@personal-portfolio-website/shared';
// Services
import { CreateProjectService } from './createProject.service';
import { GetProjectsService } from './getProjects.service';
import { InjectFeaturedProjectsService } from './injectFeaturedProjects.service';

@Injectable()
export class ProjectServices {
  constructor(
    private createProjectService: CreateProjectService,
    private getProjectsService: GetProjectsService,
    private insertFeaturedProjectsService: InjectFeaturedProjectsService,
  ) {}

  async getProjects(): Promise<GetProjectsResponse> {
    return await this.getProjectsService.getProjects();
  }

  async createProject(dto: ProjectCreateInput): Promise<CreateProjectResponse> {
    return await this.createProjectService.createProject(dto);
  }

  async insertFeaturedProjects(): Promise<InjectFeaturedProjectsResponse> {
    return await this.insertFeaturedProjectsService.injectFeaturedProjects();
  }
}
