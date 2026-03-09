// Nest
import { Injectable } from '@nestjs/common';
// Shared
import {
  CreateTechResponse,
  GetTechResponse,
  InjectTechResponse,
  TechCreateInput,
} from '@personal-portfolio-website/shared';
// SServices
import { GetTechService } from './getTech.service';
import { CreateTechService } from './createTech.service';
import { InjectTechService } from './injectTech.service';

@Injectable()
export class TechServices {
  constructor(
    private getTechService: GetTechService,
    private createTechService: CreateTechService,
    private injectTechService: InjectTechService,
  ) {}

  async getTech(): Promise<GetTechResponse> {
    return await this.getTechService.getTech();
  }

  async createTech(dto: TechCreateInput): Promise<CreateTechResponse> {
    return await this.createTechService.createTech(dto);
  }

  async injectTech(): Promise<InjectTechResponse> {
    return await this.injectTechService.injectTech();
  }
}
