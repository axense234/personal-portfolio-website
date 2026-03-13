// Nest
import { Injectable } from '@nestjs/common';
// Shared
import { SendEmailOptions } from '@personal-portfolio-website/shared';
// Node mailer
import * as nodemailer from 'nodemailer';
import type { MailOptions } from 'nodemailer/lib/json-transport';

@Injectable()
export class NodeMailerService {
  public transporter: nodemailer.Transporter;
  public getMailOptionsTemplate: (dto: SendEmailOptions) => MailOptions;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    this.getMailOptionsTemplate = (dto: SendEmailOptions) => {
      return {
        from: {
          name: 'Personal Portfolio Website - Contact Form',
          address: `${process.env.USER_EMAIL}`,
        },
        to: process.env.USER_EMAIL,
        replyTo: dto.email,
        subject: `Contact Form PPW: ${dto.subject}`,
        text: `From: ${dto.name} (${dto.email})\n\nMessage:\n${dto.message}`,
        html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${dto.name}</p>
      <p><strong>Email:</strong> ${dto.email}</p>
      <p><strong>Subject:</strong> ${dto.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${dto.message.replace(/\n/g, '<br>')}</p>`,
      };
    };
  }
}
