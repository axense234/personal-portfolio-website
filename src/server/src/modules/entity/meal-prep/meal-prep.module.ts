// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { MealPrepController } from './meal-prep.controller';
// Services
import {
  CreateMealPrepService,
  GetWeeklyMealPrepService,
  MealPrepServices,
} from './services';

@Module({
  providers: [
    MealPrepServices,
    CreateMealPrepService,
    GetWeeklyMealPrepService,
  ],
  controllers: [MealPrepController],
})
export class MealPrepModule {}
