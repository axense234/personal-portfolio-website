// Nest
import { BadRequestException, Injectable } from '@nestjs/common';
// Node Mailer
import { NodeMailerService } from '../../nodemailer';
// Shared
import { SendEmailOptions } from '@personal-portfolio-website/shared';
import { StatusCodes } from 'http-status-codes';

@Injectable()
export class SendEmailService {
  constructor(private nodemailerService: NodeMailerService) {}

  async sendEmail(dto: SendEmailOptions) {
    try {
      if (!dto || Object.keys(dto).length == 0) {
        throw new BadRequestException('No body found.');
      }

      const sendEmailOptions =
        this.nodemailerService.getMailOptionsTemplate(dto);

      await this.nodemailerService.transporter.sendMail(sendEmailOptions);

      return {
        status: StatusCodes.OK,
        message: `Successfully sent email. (from: ${dto.name} with subject: ${dto.subject}.)`,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
