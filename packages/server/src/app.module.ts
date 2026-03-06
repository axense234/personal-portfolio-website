// Nest
import { Module } from '@nestjs/common';
// Config Module
import { ConfigModule } from '@nestjs/config';
// Rate Limiter
import { ThrottlerModule } from '@nestjs/throttler';
// Modules
import {
  ProjectModule,
  TechSkillModule,
  MealPrepModule,
  PrismaModule,
} from './modules';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: Number(process.env.RATE_TTL),
          limit: Number(process.env.RATE_LIMIT),
        },
      ],
    }),
    PrismaModule,
    ProjectModule,
    MealPrepModule,
    TechSkillModule,
  ],
})
export class AppModule {}
