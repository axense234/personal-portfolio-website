// NextJS
import { Injectable } from '@nestjs/common';
// Shared package of doom and despair
import { MealPrepCreateInput } from '@personal-portfolio-website/shared';
// Services
import { CreateMealPrepService } from './createMealPrep.service';
import { GetWeeklyMealPrepService } from './getWeeklyMealPrep.service';

@Injectable()
export class MealPrepServices {
  constructor(
    private createMealPrepService: CreateMealPrepService,
    private getWeeklyMealPrepService: GetWeeklyMealPrepService,
  ) {}

  async getWeeklyMealPrep() {
    return await this.getWeeklyMealPrepService.getWeeklyMealPrepService();
  }

  async createMealPrep(dto: MealPrepCreateInput) {
    return await this.createMealPrepService.createMealPrep(dto);
  }
}
