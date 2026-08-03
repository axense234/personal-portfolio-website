// Nest
import { Global, Module } from '@nestjs/common';
// Controllers
import { HealthController } from './health.controller';
// Services
import { HealthService } from './health.service';

@Global()
@Module({
  providers: [HealthService],
  controllers: [HealthController],
})
export class HealthModule {}
