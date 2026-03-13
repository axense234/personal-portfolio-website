// Shared
import { SendEmailOptions } from "@personal-portfolio-website/shared";
// Ky
import ky from "ky";

export const sendEmailWithContactForm = async (dto: SendEmailOptions) => {
  try {
    const res = await ky("/api/mail/send-email", {
      method: "post",
      json: dto,
    }).json();

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
