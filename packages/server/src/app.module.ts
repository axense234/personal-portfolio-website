// Nest
import { Module, UseGuards } from '@nestjs/common';
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
  TechModule,
  NodeMailerModule,
  MailerModule,
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
    NodeMailerModule,
    MailerModule,
    ProjectModule,
    MealPrepModule,
    TechSkillModule,
    TechModule,
  ],
})
export class AppModule {}
