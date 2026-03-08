import {
  TechCreateInput,
  TechSkillCreateInput,
} from '@personal-portfolio-website/shared';

export const frontendTechCreateData: TechCreateInput[] = [
  {
    category: 'FRONTEND',
    icon_src:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1772997337/Personal%20Website/tech-icons/frontend/html_vxeyai.png',
    label: 'HTML5',
    short_desc: 'hypertext markup language',
    dest: 'https://www.geeksforgeeks.org/html/html5-introduction/',
    id: 'html',
  },
  {
    category: 'FRONTEND',
    icon_src:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1772997337/Personal%20Website/tech-icons/frontend/css_biw8by.png',
    label: 'CSS3',
    short_desc: 'cascading style sheets',
    dest: 'https://www.w3schools.com/css/',
    id: 'css',
  },
  {
    category: 'FRONTEND',
    icon_src:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1772997337/Personal%20Website/tech-icons/frontend/javascript_daceak.png',
    label: 'JS',
    short_desc: 'javascript',
    dest: 'https://www.w3schools.com/js/',
    id: 'js',
  },
  {
    category: 'FRONTEND',
    icon_src:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1772997338/Personal%20Website/tech-icons/frontend/react_wyvco1.png',
    label: 'React',
    short_desc: 'javascript library',
    dest: 'https://react.dev/',
    id: 'react',
  },
  {
    category: 'FRONTEND',
    icon_src:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1772997337/Personal%20Website/tech-icons/frontend/nextjs_acav93.png',
    label: 'NextJS',
    short_desc: 'full-stack react based framework',
    dest: 'https://nextjs.org/',
    id: 'next',
  },
  {
    category: 'FRONTEND',
    icon_src:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1772997338/Personal%20Website/tech-icons/frontend/redux_u6jwd0.webp',
    label: 'Redux',
    short_desc: '& redux toolkit, state management',
    dest: 'https://redux.js.org/',
    id: 'redux',
  },
  {
    category: 'FRONTEND',
    icon_src:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1772997339/Personal%20Website/tech-icons/frontend/sass_rx4hro.png',
    label: 'Scss',
    short_desc: 'css superset',
    dest: 'https://sass-lang.com/',
    id: 'scss',
  },
  {
    category: 'FRONTEND',
    icon_src:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1772997339/Personal%20Website/tech-icons/frontend/typescript_h702px.pngg',
    label: 'Typescript',
    short_desc: '',
    dest: 'https://www.typescriptlang.org/',
    id: 'ts-frontend',
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
