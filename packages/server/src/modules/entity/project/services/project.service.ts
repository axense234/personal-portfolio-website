// Nest
import { Injectable } from '@nestjs/common';
// Shared package <3
import {
  CreateProjectResponse,
  GetProjectsQueryParams,
  GetProjectsResponse,
  InjectProjectsQueryParams,
  InjectProjectsResponse,
  ProjectCreateInput,
} from '@personal-portfolio-website/shared';
// Services
import { CreateProjectService } from './createProject.service';
import { GetProjectsService } from './getProjects.service';
import { InjectProjectsService } from './injectProjects.service';

@Injectable()
export class ProjectServices {
  constructor(
    private createProjectService: CreateProjectService,
    private getProjectsService: GetProjectsService,
    private insertProjectsService: InjectProjectsService,
  ) {}

  async getProjects(
    params: GetProjectsQueryParams,
  ): Promise<GetProjectsResponse> {
    return await this.getProjectsService.getProjects(params);
  }

  async createProject(dto: ProjectCreateInput): Promise<CreateProjectResponse> {
    return await this.createProjectService.createProject(dto);
  }

  async insertProjects(
    params: InjectProjectsQueryParams,
  ): Promise<InjectProjectsResponse> {
    return await this.insertProjectsService.injectProjects(params);
  }
}
