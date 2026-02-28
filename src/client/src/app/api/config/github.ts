import ky from "ky";

const githubKyInstance = ky.create({
  prefixUrl: "https://api.github.com",
  headers: {
    Authorization: process.env.GITHUB_FGPAT,
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "personal-portfolio-website",
  },
});

export default githubKyInstance;
