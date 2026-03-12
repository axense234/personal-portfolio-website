// Nest
import { Injectable } from '@nestjs/common';
// Shared package <3
import {
  CreateProjectResponse,
  GetProjectsQueryParams,
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

  async getProjects(
    params: GetProjectsQueryParams,
  ): Promise<GetProjectsResponse> {
    return await this.getProjectsService.getProjects(params);
  }

  async createProject(dto: ProjectCreateInput): Promise<CreateProjectResponse> {
    return await this.createProjectService.createProject(dto);
  }

  async insertFeaturedProjects(): Promise<InjectFeaturedProjectsResponse> {
    return await this.insertFeaturedProjectsService.injectFeaturedProjects();
  }
}
