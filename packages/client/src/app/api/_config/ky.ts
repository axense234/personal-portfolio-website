import ky from "ky";

export const customKy = ky.create({
  prefixUrl: process.env.SERVER,
  headers: {
    "x-api-key": `"${process.env.SECRET_API_KEY}"`,
  },
});
