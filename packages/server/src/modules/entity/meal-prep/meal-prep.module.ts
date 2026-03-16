// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { MealPrepController } from './meal-prep.controller';
// Services
import {
  CreateMealPrepService,
  GetMealPrepsService,
  GetWeeklyMealPrepService,
  InjectMealPrepsService,
  MealPrepServices,
} from './services';

@Module({
  providers: [
    MealPrepServices,
    CreateMealPrepService,
    GetWeeklyMealPrepService,
    GetMealPrepsService,
    InjectMealPrepsService,
  ],
  controllers: [MealPrepController],
})
export class MealPrepModule {}
