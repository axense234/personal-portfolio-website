// Shared
import { SendEmailOptions } from "@personal-portfolio-website/shared";

export type GeneralThunks = {
  sendEmailWithContactForm: (dto: SendEmailOptions) => void;
};
