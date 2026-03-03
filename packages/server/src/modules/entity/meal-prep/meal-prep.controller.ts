// NextJS
import { Body, Controller, Get, Post } from '@nestjs/common';
// Services
import { MealPrepServices } from './services/meal-prep.service';
// Shared packageeeee
import { type MealPrepCreateInput } from '@personal-portfolio-website/shared';

@Controller('meal-preps')
export class MealPrepController {
  constructor(private mealPrepServices: MealPrepServices) {}

  @Get()
  getMealPreps() {
    return this.mealPrepServices.getMealPreps();
  }

  @Get('weekly')
  getWeeklyMealPrep() {
    return this.mealPrepServices.getWeeklyMealPrep();
  }

  @Post('create')
  createMealPrep(@Body() dto: MealPrepCreateInput) {
    return this.mealPrepServices.createMealPrep(dto);
  }
}
