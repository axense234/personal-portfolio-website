// Shared Types
import { ProjectCreateInput } from '@personal-portfolio-website/shared';

export const featuredProjectsCreateData: ProjectCreateInput[] = [
  {
    name: 'Vital Prep - Meal Prep Helper',
    topics: ['AWARDED', 'BRONZE_MEDAL', 'HIGHSCHOOL', 'FEATURED'],
    short_desc:
      'A full-stack project about managing meal prepping as an activity.',
    long_desc:
      'A full-stack website about managing meal prepping as an activity in a methodical and organized way. The whole system revolves around Meal Prep Plans, containing all the information necessary for a successful meal prep.',
    overview_desc:
      'VitalPrep - Meal Prep Helper is a full-stack web application designed to help users learn and practice meal prepping more often, in a methodical and organized way. The whole system is centered around Meal Prep Plans, which contains all the information an user needs to meal prep, while being reminded about said plans through push notifications.',
    github_url: 'https://github.com/axense234/VitalPrep',
    website_url: 'https://vitalprep-meal.com',
    website_logo_url:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1716209021/VitalPrep/brandmark-design-256x256_zdzu6z.png',
    awards: {
      createMany: {
        data: [
          {
            image_src:
              'https://res.cloudinary.com/birthdayreminder/image/upload/v1773144335/Personal%20Website/vitalprep/oncs_2024_vital_prep_jud_n5u9sg.jpg',
            desc: 'First place at “Olimpiada Nationala de Creativitate Stiintifica 2024”, county stage',
          },
          {
            image_src:
              'https://res.cloudinary.com/birthdayreminder/image/upload/r_0/a_90/v1773144334/Personal%20Website/vitalprep/medalie_de_bronz_diploma_r0bi4f.jpg',
            desc: 'Bronze Medal at “Olimpiada Nationala de Creativitate Stiintifica 2024”, national stage',
          },
          {
            image_src:
              'https://res.cloudinary.com/birthdayreminder/image/upload/v1773144335/Personal%20Website/vitalprep/vital_prep_infoed_loc_1_pjcfei.jpg',
            desc: 'First Place at “Olimpiada de Inovare si Creatie Digitala - Infoeducatie 2024”, county stage',
          },
        ],
      },
    },
    images: {
      create: {
        screenshots: [],
        thumb:
          'https://res.cloudinary.com/birthdayreminder/image/upload/v1772639410/Personal%20Website/projects/Screenshot_from_2025-12-23_15-46-29_2_skfreg.png',
      },
    },
  },
  {
    name: 'Highschool Site App',
    topics: ['AWARDED', 'HIGHSCHOOL', 'FEATURED'],
    short_desc:
      'A full-stack project about recreating my highschool’s site with modern technologies and complex functionalities.',
    long_desc:
      'A full-stack project about recreating my highschool’s site with modern technologies and complex functionalities.',
    overview_desc:
      'A full-stack project about recreating my highschool’s site with modern technologies and complex functionalities.',
    github_url: 'https://github.com/axense234/Highschool-Site-App',
    website_url: 'https://highschool-site-app-ca.com/',
    website_logo_url:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1689691850/Highschool%20Site%20App/ltibp_logo_ptonmd_oirhs1.png',
    docs_url:
      'https://highschool-site-app-server-ca.onrender.com/api/1.0.0/en/docs/',
    awards: {
      createMany: {
        data: [
          {
            image_src:
              'https://res.cloudinary.com/birthdayreminder/image/upload/v1773144629/Personal%20Website/hsa/scoala_intre_viziune_si_misiune_premiul_2_tcl0ff.jpg',
            desc: 'Second Place at “Scoala Intre Viziune si Misiune - 10th edition - web section 2023”, county stage ',
          },
          {
            image_src:
              'https://res.cloudinary.com/birthdayreminder/image/upload/a_-90/v1773144628/Personal%20Website/hsa/infoed_2023_epefwe.jpg',
            desc: 'First Place at “Olimpiada de Inovare si Creatie Digitala - Infoeducatie 2023”, county stage',
          },
          {
            image_src:
              'https://res.cloudinary.com/birthdayreminder/image/upload/a_-90/v1773144629/Personal%20Website/hsa/scoala_intre_viziune_si_misiune_premiul_1_bvj0wz.jpg',
            desc: 'First place at “Scoala Intre Viziune si Misiune - 11th edition - web section 2024”, county stage (refactored project)',
          },
        ],
      },
    },
    images: {
      create: {
        screenshots: [],
        thumb:
          'https://res.cloudinary.com/birthdayreminder/image/upload/v1772639410/Personal%20Website/projects/Screenshot_from_2025-12-23_15-37-21_2_r6k0zj.png',
      },
    },
  },
  {
    name: 'Research Manager',
    topics: ['AWARDED', 'HIGHSCHOOL', 'FEATURED'],
    short_desc:
      'A full-stack project about handling researching activities in a methodical way.',
    long_desc:
      'A full-stack project about handling researching activities in a methodical way.',
    overview_desc:
      'A full-stack project about handling researching activities in a methodical way.',
    github_url: 'https://github.com/axense234/ResearchManager',
    website_url: 'https://researchmanager-ca.com/',
    website_logo_url:
      'https://res.cloudinary.com/birthdayreminder/image/upload/v1742642023/Research%20Manager/brandmark-design-1024x0g1_ekxcnm.png',
    awards: {
      createMany: {
        data: [
          {
            image_src:
              'https://res.cloudinary.com/birthdayreminder/image/upload/v1773144873/Personal%20Website/researchmanager/oncs_2025_jud_loc_1_uq5fno.jpg',
            desc: 'First place at “Olimpiada Nationala de Creativitate Stiintifica 2025”, county stage',
          },
          {
            image_src:
              'https://res.cloudinary.com/birthdayreminder/image/upload/v1773144874/Personal%20Website/researchmanager/infoeducatie_2025_gfgdro.jpg',
            desc: 'First Place at “Olimpiada de Inovare si Creatie Digitala - Infoeducatie 2025”, county stage ',
          },
        ],
      },
    },
    images: {
      create: {
        screenshots: [],
        thumb:
          'https://res.cloudinary.com/birthdayreminder/image/upload/v1772639410/Personal%20Website/projects/Screenshot_from_2025-12-23_15-52-13_2_lzbop3.png',
      },
    },
  },
  {
    name: 'NOTES NETPPR API',
    topics: ['HIGHSCHOOL', 'FEATURED'],
    short_desc: 'A backend project about authors, notes, folders and such.',
    long_desc: 'A backend project about authors, notes, folders and such.',
    overview_desc: 'A backend project about authors, notes, folders and such.',
    github_url: 'https://github.com/axense234/Notes-NETPPR-API',
    docs_url: 'https://notes-api-netppr-ca.onrender.com/api/1.0.0/docs',
    images: {
      create: {
        screenshots: [],
        thumb:
          'https://res.cloudinary.com/birthdayreminder/image/upload/v1772639410/Personal%20Website/projects/Screenshot_from_2025-12-23_16-34-38_2_dqzyuw.png',
      },
    },
  },
];
