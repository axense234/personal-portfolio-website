// NestJS
import { Body, Controller, Get, Post } from '@nestjs/common';
// Shared
import type { TechCreateInput } from '@personal-portfolio-website/shared';
// Services
import { TechServices } from './services';

@Controller('tech')
export class TechController {
  constructor(private techServices: TechServices) {}

  @Get()
  getTech() {
    return this.techServices.getTech();
  }

  @Post('create')
  createTech(@Body() dto: TechCreateInput) {
    return this.techServices.createTech(dto);
  }

  @Post('basics')
  injectTech() {
    return this.techServices.injectTech();
  }
}
