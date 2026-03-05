// NextJS
import { Injectable } from '@nestjs/common';
// Shared package of doom and despair
import {
  CreateMealPrepResponse,
  GetMealPrepsResponse,
  GetWeeklyMealPrepResponse,
  MealPrepCreateInput,
} from '@personal-portfolio-website/shared';
// Services
import { CreateMealPrepService } from './createMealPrep.service';
import { GetWeeklyMealPrepService } from './getWeeklyMealPrep.service';
import { GetMealPrepsService } from './getMealPreps.service';

@Injectable()
export class MealPrepServices {
  constructor(
    private createMealPrepService: CreateMealPrepService,
    private getWeeklyMealPrepService: GetWeeklyMealPrepService,
    private getMealPrepsService: GetMealPrepsService,
  ) {}

  async getWeeklyMealPrep(): Promise<GetWeeklyMealPrepResponse> {
    return await this.getWeeklyMealPrepService.getWeeklyMealPrepService();
  }

  async createMealPrep(
    dto: MealPrepCreateInput,
  ): Promise<CreateMealPrepResponse> {
    return await this.createMealPrepService.createMealPrep(dto);
  }

  async getMealPreps(): Promise<GetMealPrepsResponse> {
    return await this.getMealPrepsService.getMealPreps();
  }
}
