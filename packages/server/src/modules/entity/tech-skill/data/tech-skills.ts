import {
  TechSkillContentCreateNestedOneWithoutSkillInput,
  TechSkillCreateInput,
} from '@personal-portfolio-website/shared';

export const mockLoremIpsum: string[] = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar sem tristique, convallis neque in, euismod ex. In a scelerisque libero. Morbi at enim dapibus, dignissim metus nec, feugiat dui. Donec risus diam, sodales et lorem vel, mollis euismod urna. Etiam nec enim non leo fermentum vehicula. Maecenas vulputate, odio sit amet sodales imperdiet, justo augue finibus felis, quis volutpat nulla erat eget arcu. In sollicitudin sem in erat viverra, ut imperdiet erat suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas dictum malesuada semper.',
  'Pellentesque tempor augue vel luctus tristique. Donec suscipit felis vitae odio porta vestibulum. Donec nisl elit, lacinia sed nunc quis, hendrerit mattis velit. Quisque magna purus, scelerisque ut mi quis, vestibulum fermentum tortor. Cras lobortis ex sed justo consectetur mattis. Nullam dignissim risus eu diam malesuada, ac posuere risus suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer ac posuere erat, id malesuada erat. Donec vulputate aliquam libero vitae ultricies. Integer ut arcu nec dui fringilla feugiat.',
  'Fusce semper sapien in neque egestas tincidunt. Vestibulum sit amet euismod diam. Mauris nunc est, rutrum non congue eu, ultrices at nulla. Nulla feugiat semper magna nec sodales. Aenean sit amet lacus elit. Nunc viverra luctus mi vulputate commodo. Proin accumsan ante justo, nec varius est venenatis non. Mauris libero libero, pellentesque a nunc et, accumsan luctus est. Nullam ullamcorper orci mauris, id hendrerit tellus aliquet vel.',
];

export const mockContent: TechSkillContentCreateNestedOneWithoutSkillInput = {
  create: {
    sections: {
      createMany: {
        data: [
          {
            title: 'My Experience',
            paragraphs: mockLoremIpsum,
          },
        ],
      },
    },
  },
};

export const frontendTechSkillsCreateData: TechSkillCreateInput[] = [
  {
    tech: { connect: { id: 'html' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'css' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'js' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'react' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'next' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'redux' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'scss' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'ts-frontend' } },
    scope: 'GENERAL',
    content: mockContent,
  },
];

export const backendTechSkillsCreateData: TechSkillCreateInput[] = [
  {
    tech: { connect: { id: 'node' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'express' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'mongodb' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'mongoose' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'nest' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'postgresql' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'redis' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'prisma' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'ts-backend' } },
    scope: 'GENERAL',
    content: mockContent,
  },
];

export const otherTechSkillsCreateData: TechSkillCreateInput[] = [
  {
    tech: { connect: { id: 'github' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'netlify' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'render' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'cloudinary' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  // Probably want another category but for now il throw those like this
  {
    tech: { connect: { id: 'python' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'django' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'c++' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'figma' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'docker' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'kubernetes' } },
    scope: 'GENERAL',
    content: mockContent,
  },
  {
    tech: { connect: { id: 'jenkins' } },
    scope: 'GENERAL',
    content: mockContent,
  },
];

export const techSkillsCreateData: TechSkillCreateInput[] =
  frontendTechSkillsCreateData
    .concat(backendTechSkillsCreateData)
    .concat(otherTechSkillsCreateData);
