import ky from "ky";

export const customKy = ky.create({
  prefixUrl: process.env.SERVER,
});
