// Types
import { TechCategoryProps } from "@/core/interfaces";
import {
  CommonPageHeroSectionDataType,
  LangFlagImageType,
  NavLinkType,
  SectionDataType,
  ExternalMediaIconType,
} from "@/core/types";

export const technicalSkillsViewsData = [
  {
    id: 1,
    matcher: "HTML5",
    subtitle: "hypertext markup language",
    articles: [
      {
        id: 1,
        title: "My Experience",
        paragraphs: [
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
        ],
      },
    ],
  },
];

export const buttonColors: ("warning" | "success" | "delete")[] = [
  "warning",
  "success",
  "delete",
];

export const navLinks: NavLinkType[] = [
  {
    id: 1,
    label: "Home",
    dest: "/",
  },
  {
    id: 2,
    label: "Projects",
    dest: "/projects",
  },
  {
    id: 3,
    label: "Meal Preps",
    dest: "/meal-prep",
  },
  {
    id: 4,
    label: "Awards",
    dest: "/awards",
  },
  {
    id: 5,
    label: "About",
    dest: "/about",
  },
  {
    id: 6,
    label: "Contact",
    dest: "/contact",
  },
  {
    id: 7,
    label: "Dashboard",
    dest: "/dashboard",
  },
];

export const languageFlagsImages: LangFlagImageType[] = [
  {
    id: 1,
    rel: "/flags/Flag_of_Romania_bcoghi.png",
    label: "Romanian",
    value: "ro",
  },
  {
    id: 2,
    rel: "/flags/USA_Flag.jpg",
    label: "English",
    value: "en",
  },
  {
    id: 3,
    rel: "/flags/Flag_of_France_wl0boq.png",
    label: "French",
    value: "fr",
  },
  {
    id: 4,
    rel: "/flags/Flag_of_Germany__3-2_.svg_jxwz7r.png",
    label: "German",
    value: "de",
  },
];

export const footerCopyright = "© 2026 Comanescu Andrei. All rights reserved.";

export const socialMediaIcons: ExternalMediaIconType[] = [
  {
    id: 1,
    dest: "https://github.com/axense234",
    rel: "/social/github-logo-transparent-background-free-png.png",
    label: "My Github",
  },
  {
    id: 2,
    dest: "https://www.linkedin.com/in/comanescu-andrei-22b13a3b0/", // this might not be the right link but ehh
    rel: "/social/linkedin-logo-linkedin-icon-transparent-free-png.png",
    label: "My LinkedIn",
  },
];

export const homePageHeroSectionData: CommonPageHeroSectionDataType = {
  title: "Comănescu Andrei",
  subtitle: "Web Developer",
  desc: "Full-stack web developer passionate about building websites. Currently studying Computer Science at UBB.",
  image: "/misc/placeholder.jpg",
  buttons: [
    {
      id: 1,
      color: "warning",
      dest: "/projects",
      label: "My Projects",
      size: "large",
    },
    {
      id: 2,
      color: "success",
      dest: "/about",
      label: "My Journey",
      size: "large",
    },
  ],
};

export const aboutPageHeroSectionData: CommonPageHeroSectionDataType = {
  title: "About Me",
  subtitle: "mischevious information",
  desc: "I am a romanian student passionate about web development. Check out my projects, my programing journey and my hobbies.",
  image: "/misc/placeholder.jpg",
  buttons: [
    {
      id: 1,
      color: "warning",
      dest: "/projects",
      label: "My Projects",
      size: "large",
    },
    {
      id: 2,
      color: "success",
      dest: "/about",
      label: "My Journey",
      size: "large",
    },
    {
      id: 3,
      color: "delete",
      dest: "/about",
      label: "My Hobbies",
      size: "large",
    },
  ],
};

export const homePageAboutTeaserSectionData: SectionDataType = {
  title: "A Bit About Me",
  paragraphs: [
    "As a Computer Science student at UBB and full-stack web developer I work on my projects out of a combination of self-satisfaction and pure enjoyment of the craft.",
    "Also won a few county level web dev competitions and even got a bronze medal at a national one during my high school years.",
  ],
  buttons: [
    {
      id: 1,
      color: "delete",
      dest: "/about",
      label: "Read More",
      size: "large",
    },
  ],
};

export const aboutPageAboutMeSectionData: SectionDataType = {
  title: "Who am I?",
  paragraphs: [
    "My name is Comanescu Andrei, I am a romanian student currently attending the Faculty of Mathematics and Computer Science at Babes-Bolyai University, studying Computer Science in English as an undergraduate.",
    "In my free time, I usually like doing web development, learning any technologies.  I also like cooking, long walks and playing some games when im free.",
  ],
  buttons: [
    {
      id: 1,
      color: "warning",
      dest: "/contact",
      label: "Contact Me",
      size: "large",
    },
  ],
};

export const homePageFeaturedProjectsSectionData: SectionDataType = {
  title: "Featured Projects",
  paragraphs: [
    "Here are displayed some of my best / favorite web dev projects. Had a lot of fun working on them even tho I most likely consumed a bit too much pepsi max.",
  ],
  buttons: [
    {
      id: 1,
      color: "warning",
      dest: "/projects",
      label: "More Projects",
      size: "large",
    },
  ],
};

export const weeklyMealPrepSectionData: SectionDataType = {
  title: "Weekly Meal Prep",
  paragraphs: [
    "I do indeed like cooking up some meals in advance at least once a week. It tastes even better than it looks. Yummy. Very Yummy Yes.",
  ],
  buttons: [
    {
      id: 1,
      color: "delete",
      dest: "/meal-prep",
      label: "Meals Gallery",
      size: "large",
    },
  ],
};

export const homePageContactTeaserSectionData: SectionDataType = {
  title: "Mayhaps Contact Me?",
  paragraphs: [
    "If there is a will there is a way as they say.",
    "Also open to internships or other types of work. Also also, I wouldn’t mind collaborating on web dev / python projects.",
  ],
  buttons: [
    {
      id: 1,
      color: "warning",
      dest: "/contact",
      label: "Contact Me",
      size: "large",
    },
    {
      id: 2,
      color: "success",
      dest: "/home",
      label: "My Resume",
      size: "large",
    },
  ],
};

export const aboutPageTechnicalSkillsSectionData: SectionDataType = {
  title: "Technical Skils",
  paragraphs: [
    "Here are all the technologies I know with some varying level of expertise.",
  ],
};

export const technicalSkillsData: TechCategoryProps[] = [
  {
    id: 1,
    label: "Frontend",
    skills: [
      {
        id: 1,
        rel: "/skills/frontend/html.png",
        label: "HTML5",
        dest: "https://www.geeksforgeeks.org/html/html5-introduction/",
      },
      {
        id: 2,
        rel: "/skills/frontend/css.png",
        label: "CSS3",
        dest: "https://www.w3schools.com/css/",
      },
      {
        id: 3,
        rel: "/skills/frontend/javascript.png",
        label: "Javascript",
        dest: "https://www.w3schools.com/js/",
      },
      {
        id: 4,
        rel: "/skills/frontend/react.png",
        label: "React",
        dest: "https://react.dev/",
      },
      {
        id: 5,
        rel: "/skills/frontend/nextjs.png",
        label: "NextJS",
        dest: "https://nextjs.org/",
      },
      {
        id: 6,
        rel: "/skills/frontend/redux.webp",
        label: "Redux",
        dest: "https://redux.js.org/",
      },
      {
        id: 7,
        rel: "/skills/frontend/sass.png",
        label: "Sass",
        dest: "https://sass-lang.com/",
      },
      {
        id: 8,
        rel: "/skills/frontend/typescript.png",
        label: "Typescript",
        dest: "https://www.typescriptlang.org/",
      },
    ],
  },
  {
    id: 2,
    label: "Backend",
    skills: [
      {
        id: 1,
        rel: "/skills/backend/nodejs.png",
        label: "NodeJS",
        dest: "https://nodejs.org/en",
      },
      {
        id: 2,
        rel: "/skills/backend/express.png",
        label: "ExpressJS",
        dest: "https://expressjs.com/",
      },
      {
        id: 3,
        rel: "/skills/backend/mongo-db.png",
        label: "Mongo DB",
        dest: "https://www.mongodb.com/",
      },
      {
        id: 4,
        rel: "/skills/backend/mongoose.png",
        label: "Mongoose",
        dest: "https://mongoosejs.com/docs/",
      },
      {
        id: 5,
        rel: "/skills/backend/nestjs.png",
        label: "NestJS",
        dest: "https://nestjs.com/",
      },
      {
        id: 6,
        rel: "/skills/backend/postgresql.png",
        label: "PostgreSQL",
        dest: "https://www.postgresql.org/",
      },
      {
        id: 7,
        rel: "/skills/backend/redis.png",
        label: "Redis",
        dest: "https://redis.io/",
      },
      {
        id: 8,
        rel: "/skills/backend/prisma.png",
        label: "Prisma",
        dest: "https://www.prisma.io/",
      },
      {
        id: 9,
        rel: "/skills/backend/typescript.png",
        label: "Typescript",
        dest: "https://www.typescriptlang.org/",
      },
    ],
  },
  {
    id: 3,
    label: "Tools",
    skills: [
      {
        id: 1,
        rel: "/skills/tools/github.png",
        label: "Github",
        dest: "https://github.com/",
      },
      {
        id: 2,
        rel: "/skills/tools/netlify.png",
        label: "Netlify",
        dest: "https://www.netlify.com/blog/2019/10/07/complete-intro-to-netlify-in-3.5-hours/",
      },
      {
        id: 3,
        rel: "/skills/tools/render.png",
        label: "Render",
        dest: "https://render.com/docs/render-dashboard",
      },
      {
        id: 4,
        rel: "/skills/tools/cloudinary.png",
        label: "Cloudinary",
        dest: "https://cloudinary.com/documentation",
      },
    ],
  },
];
