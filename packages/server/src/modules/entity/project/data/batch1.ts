// Shared
import { ProjectCreateInput } from '@personal-portfolio-website/shared';
// More injectable data
import { featuredProjectsCreateData } from './featured-projects';
// Utils
import { connectProjectTech } from 'src/utils';

/**
 * BATCH 1
 * ========================================================================================================
 * Batch 1 of Projects created around 15.03.2026 - Sunday
 * Batch includes: 1 + 4 projects, (also includes some featured projects)
 * All projects here are mostly highschool practice projects besides my personal portfolio website
 * Expect this file to be big
 * ========================================================================================================
 */

export const batch1: ProjectCreateInput[] = [
  ...featuredProjectsCreateData,
  {
    name: 'Personal Portfolio Website',
    topics: ['PRACTICE'],
    project_phase: 'DEVELOPMENT',
    short_desc: 'My personal portfolio website.',
    long_desc:
      'My personal portfolio website. Wanted a personal portfolio website so I created one on my own.',
    overview_desc:
      'Personal Portfolio Website - my personal portfolio website, duh.',
    github_url: 'https://github.com/axense234/personal-portfolio-website.git',
    website_url: 'https://comanescuandrei.com',
    skills: {
      connect: connectProjectTech([
        'next',
        'scss',
        'ts-frontend',
        'node',
        'express',
        'ts-backend',
        'postgresql',
        'prisma',
        'redis',
        'nest',
      ]),
    },
    images: {
      create: {
        screenshots: [
          'https://res.cloudinary.com/birthdayreminder/image/upload/v1773598066/Personal%20Website/projects/ppw-code_vvhghl.png',
        ],
        thumb:
          'https://res.cloudinary.com/birthdayreminder/image/upload/v1773596841/Personal%20Website/projects/ppw-figma_faa1gv.png',
      },
    },
  },
];
