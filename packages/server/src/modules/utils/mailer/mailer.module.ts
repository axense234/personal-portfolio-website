// NestJS
import { Module } from '@nestjs/common';
// Services
import { MailerServices, SendEmailService } from './services';
// Controller
import { MailerController } from './mailer.controller';

@Module({
  providers: [MailerServices, SendEmailService],
  controllers: [MailerController],
})
export class MailerModule {}
