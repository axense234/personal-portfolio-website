// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { MealPrepController } from './meal-prep.controller';
// Services
import {
  CreateMealPrepService,
  GetMealPrepsService,
  GetWeeklyMealPrepService,
  MealPrepServices,
} from './services';

@Module({
  providers: [
    MealPrepServices,
    CreateMealPrepService,
    GetWeeklyMealPrepService,
    GetMealPrepsService,
  ],
  controllers: [MealPrepController],
})
export class MealPrepModule {}
