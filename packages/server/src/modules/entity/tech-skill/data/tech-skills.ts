import { TechSkillCreateInput } from '@personal-portfolio-website/shared';

export const frontendTechSkillsCreateData: TechSkillCreateInput[] = [
  {
    category: 'FRONTEND',
    local_rel: '/skills/frontend/html.png',
    label: 'HTML5',
    dest: 'https://www.geeksforgeeks.org/html/html5-introduction/',
  },
  {
    category: 'FRONTEND',
    local_rel: '/skills/frontend/css.png',
    label: 'CSS3',
    dest: 'https://www.w3schools.com/css/',
  },
  {
    category: 'FRONTEND',
    local_rel: '/skills/frontend/javascript.png',
    label: 'Javascript',
    dest: 'https://www.w3schools.com/js/',
  },
  {
    category: 'FRONTEND',
    local_rel: '/skills/frontend/react.png',
    label: 'React',
    dest: 'https://react.dev/',
  },
  {
    category: 'FRONTEND',
    local_rel: '/skills/frontend/nextjs.png',
    label: 'NextJS',
    dest: 'https://nextjs.org/',
  },
  {
    category: 'FRONTEND',
    local_rel: '/skills/frontend/redux.webp',
    label: 'Redux',
    dest: 'https://redux.js.org/',
  },
  {
    category: 'FRONTEND',
    local_rel: '/skills/frontend/sass.png',
    label: 'Sass',
    dest: 'https://sass-lang.com/',
  },
  {
    category: 'FRONTEND',
    local_rel: '/skills/frontend/typescript.png',
    label: 'Typescript',
    dest: 'https://www.typescriptlang.org/',
  },
];

export const backendTechSkillsCreateData: TechSkillCreateInput[] = [
  {
    category: 'BACKEND',
    local_rel: '/skills/backend/nodejs.png',
    label: 'NodeJS',
    dest: 'https://nodejs.org/en',
  },
  {
    category: 'BACKEND',
    local_rel: '/skills/backend/express.png',
    label: 'ExpressJS',
    dest: 'https://expressjs.com/',
  },
  {
    category: 'BACKEND',
    local_rel: '/skills/backend/mongo-db.png',
    label: 'Mongo DB',
    dest: 'https://www.mongodb.com/',
  },
  {
    category: 'BACKEND',
    local_rel: '/skills/backend/mongoose.png',
    label: 'Mongoose',
    dest: 'https://mongoosejs.com/docs/',
  },
  {
    category: 'BACKEND',
    local_rel: '/skills/backend/nestjs.png',
    label: 'NestJS',
    dest: 'https://nestjs.com/',
  },
  {
    category: 'BACKEND',
    local_rel: '/skills/backend/postgresql.png',
    label: 'PostgreSQL',
    dest: 'https://www.postgresql.org/',
  },
  {
    category: 'BACKEND',
    local_rel: '/skills/backend/redis.png',
    label: 'Redis',
    dest: 'https://redis.io/',
  },
  {
    category: 'BACKEND',
    local_rel: '/skills/backend/prisma.png',
    label: 'Prisma',
    dest: 'https://www.prisma.io/',
  },
  {
    category: 'BACKEND',
    local_rel: '/skills/backend/typescript.png',
    label: 'Typescript',
    dest: 'https://www.typescriptlang.org/',
  },
];

export const otherTechSkillsCreateData: TechSkillCreateInput[] = [
  {
    category: 'OTHER',
    local_rel: '/skills/tools/github.png',
    label: 'Github',
    dest: 'https://github.com/',
  },
  {
    category: 'OTHER',
    local_rel: '/skills/tools/netlify.png',
    label: 'Netlify',
    dest: 'https://www.netlify.com/blog/2019/10/07/complete-intro-to-netlify-in-3.5-hours/',
  },
  {
    category: 'OTHER',
    local_rel: '/skills/tools/render.png',
    label: 'Render',
    dest: 'https://render.com/docs/render-dashboard',
  },
  {
    category: 'OTHER',
    local_rel: '/skills/tools/cloudinary.png',
    label: 'Cloudinary',
    dest: 'https://cloudinary.com/documentation',
  },
];

export const techSkillsCreateData: TechSkillCreateInput[] =
  frontendTechSkillsCreateData
    .concat(backendTechSkillsCreateData)
    .concat(otherTechSkillsCreateData);
