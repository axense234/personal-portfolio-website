import ky from "ky";

const customKy = ky.create({
  prefixUrl: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "personal-portfolio-website",
  },
});

export default customKy;
