// NestJS
import { Body, Controller, Post } from '@nestjs/common';
// Services
import { MailerServices } from './services';
// Shared
import { type SendEmailOptions } from '@personal-portfolio-website/shared';

@Controller('mail')
export class MailerController {
  constructor(private mailerServices: MailerServices) {}

  @Post('send-email')
  sendEmail(@Body() dto: SendEmailOptions) {
    return this.mailerServices.sendEmail(dto);
  }
}
