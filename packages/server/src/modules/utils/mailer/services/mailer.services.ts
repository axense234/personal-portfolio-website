// Nest
import { Injectable } from '@nestjs/common';
// Services
import { SendEmailService } from './sendEmail.service';
// Shared
import { SendEmailOptions } from '@personal-portfolio-website/shared';

@Injectable()
export class MailerServices {
  constructor(private sendEmailService: SendEmailService) {}

  async sendEmail(dto: SendEmailOptions) {
    return await this.sendEmailService.sendEmail(dto);
  }
}
