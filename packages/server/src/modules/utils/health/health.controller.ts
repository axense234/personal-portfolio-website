// Nest
import { Controller, Get, SetMetadata } from '@nestjs/common';
// Health
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @SetMetadata('public', 'yes')
  @Get()
  getHealth() {
    return this.healthService.getHealth();
  }
}
