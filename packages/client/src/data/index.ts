// Types
import { CardProps } from "@/core/interfaces";
import {
  CommonPageHeroSectionDataType,
  LangFlagImageType,
  NavLinkType,
  SectionDataType,
  ExternalMediaIconType,
  AboutJourneyDataType,
} from "@/core/types";
// Shared
import { SendEmailOptions } from "@personal-portfolio-website/shared";
import { FaAward, FaHome, FaInfoCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { SiMealie } from "react-icons/si";
// React Icons

export const proEmail = "contact@comanescuandrei.com";

export const projectCardsNoProjectsFoundMessage = "No Projects Found. >:(";

export const websiteLogoPlaceholder =
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1773597808/Personal%20Website/minimalist-white-browser-icon-free-png_rqywrt.png";

export const bronzeMedalImageSrc =
  "https://res.cloudinary.com/birthdayreminder/image/upload/v1773335277/Personal%20Website/vitalprep/bronze_modeal_ct7b4p.jpg";

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
    icon: FaHome({}),
  },
  {
    id: 2,
    label: "Projects",
    dest: "/projects",
    icon: GrProjects({}),
  },
  {
    id: 3,
    label: "Meal Preps",
    dest: "/meal-prep",
    icon: SiMealie({}),
  },
  {
    id: 4,
    label: "Awards",
    dest: "/awards",
    icon: FaAward({}),
  },
  {
    id: 5,
    label: "About",
    dest: "/about",
    icon: FaInfoCircle({}),
  },
  {
    id: 6,
    label: "Contact",
    dest: "/contact",
    icon: IoMdContact({}),
  },
  {
    id: 7,
    label: "Dashboard",
    dest: "/dashboard",
    icon: MdDashboard({}),
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

export const footerCopyright = "© 2026 Comănescu Andrei. All rights reserved.";

export const socialMediaIcons: ExternalMediaIconType[] = [
  {
    id: 1,
    dest: "https://github.com/axense234",
    rel: "https://res.cloudinary.com/birthdayreminder/image/upload/v1772997441/Personal%20Website/tech-icons/other/github_haotje.png",
    label: "My Github",
  },
  {
    id: 2,
    dest: "https://www.linkedin.com/in/comanescu-andrei-22b13a3b0/",
    rel: "https://res.cloudinary.com/birthdayreminder/image/upload/v1773141484/Personal%20Website/tech-icons/other/InBug-White_gmf1ll.png",
    label: "My LinkedIn",
  },
  {
    id: 3,
    dest: "https://www.figma.com/design/4TLlvNOEJWRHBXNOBwTSVG/Personal-Portfolio-Website?node-id=178-236&p=f",
    rel: "https://res.cloudinary.com/birthdayreminder/image/upload/v1773073257/Personal%20Website/tech-icons/other/Figma-Logo-PNG-Cutout_vmzpdw.png",
    label: "Project Design",
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
      colorSpecifier: "warning",
      dest: "/projects",
      label: "My Projects",
      size: "large",
    },
    {
      id: 2,
      colorSpecifier: "success",
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
      colorSpecifier: "warning",
      dest: "/projects",
      label: "My Projects",
      size: "large",
    },
    {
      id: 2,
      colorSpecifier: "success",
      dest: "/about",
      label: "My Journey",
      size: "large",
    },
    {
      id: 3,
      colorSpecifier: "delete",
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
      colorSpecifier: "delete",
      dest: "/about",
      label: "Read More",
      size: "large",
    },
  ],
};

export const aboutPageAboutMeSectionData: SectionDataType = {
  title: "Who am I?",
  paragraphs: [
    "My name is Comănescu Andrei, I am a romanian student currently attending the Faculty of Mathematics and Computer Science at Babes-Bolyai University, studying Computer Science in English as an undergraduate.",
    "In my free time, I usually like doing web development, learning any technologies.  I also like cooking, long walks and playing some games when im free.",
  ],
  buttons: [
    {
      id: 1,
      colorSpecifier: "warning",
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
      colorSpecifier: "warning",
      dest: "/projects",
      label: "More Projects",
      size: "large",
    },
  ],
};

export const homePageTechnicalSkillsSectionData: SectionDataType = {
  title: "Technical Skills",
  paragraphs: [
    "A list of the most important technologies I know. Frontend technologies, backend technologies and other tools.",
  ],
  buttons: [
    {
      id: 1,
      colorSpecifier: "success",
      dest: "/about",
      label: "More Details",
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
      colorSpecifier: "delete",
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
      colorSpecifier: "warning",
      dest: "/contact",
      label: "Contact Me",
      size: "large",
    },
    {
      id: 2,
      colorSpecifier: "success",
      dest: "/misc/resume.pdf",
      label: "My Resume",
      size: "large",
      download: true,
      downloadFilename: "ca-resume.pdf",
      buttonType: "download",
    },
  ],
};

export const aboutPageTechnicalSkillsSectionData: SectionDataType = {
  title: "Technical Skils",
  paragraphs: [
    "Here are all the technologies I know with some varying level of expertise.",
  ],
};

export const aboutPageJourneySectionData: SectionDataType = {
  title: "My Journey",
  paragraphs: [
    "My programming journey at large, starting from Python in 2020.",
  ],
  buttons: [
    {
      id: 1,
      colorSpecifier: "success",
      dest: "/projects",
      label: "My Projects",
      size: "large",
    },
  ],
};

export const aboutPageHobbiesSectionData: SectionDataType = {
  title: "My Hobbies",
  paragraphs: [
    "I don’t really have a lot of hobbies, but I really focus on the ones that I have.",
  ],
};

export const aboutPageJourneyContentData: AboutJourneyDataType[] = [
  {
    id: 1,
    title: "The Beginnings",
    tech_ids: ["python"],
    paragraphs: [
      "Focusing on my programming journey at large, I started programming by learning Python in January-February of 2020. Watched a few tutorials on youtube and eventually found a good one that also recommended doing projects, and even sugested one: Blackjack. Keep in mind those 2 projects are made by me in my teens, so they might have some cringe elements.",
      "Well, to clarify, I have done a few more smaller Python projects like a text-based, console-based login / signup system, and a few other smaller ones that I have not made a github repo for them so I cannot remember them. So it’s safe to say that Blackjack in Python was my very first “big” project I guess.",
    ],
    external_links: [
      {
        id: 1,
        label: "Python Login System",
        link: "https://github.com/axense234/Python-Login-System",
      },
      {
        id: 2,
        label: "Python Blackjack",
        link: "https://github.com/axense234/Python-Blackjack-Game",
      },
    ],
  },
  {
    id: 2,
    title: "Django Checkpoint",
    tech_ids: ["python", "django"],
    paragraphs: [
      "Still Python related, I have also made a calculator website using the Django framework close to when I started learning web development seriously.",
    ],
    external_links: [
      {
        id: 1,
        label: "Django Math Site",
        link: "https://github.com/axense234/Django-Math-Site",
      },
    ],
  },
  {
    id: 3,
    title: "Web Dev Basics",
    tech_ids: ["html", "css", "js"],
    paragraphs: [
      "Web Dev BasicsAfter playing around with Python for a bit, I wanted to actually go deeper in a “programming branch”, so I picked at random and started learning web development.",
      "In the summer of 2020 I started learning web development, or it might be earlier than that, I don’t really remember. Started learning the basics: HTML, CSS, JS. In order to learn HTML, I watched a tutorial on Youtube then did some projects, same process applied when learning CSS and JS.",
    ],
    external_links: [
      {
        id: 1,
        label: "Beginner Projects",
        link: "https://github.com/axense234?tab=repositories&q=html&type=&language=&sort=",
      },
    ],
  },
  {
    id: 4,
    title: "C++ in Highschool",
    tech_ids: ["c++"],
    paragraphs: [
      "I also went to a highschool that had an intensive mathematical and computer science program, where I really liked doing stuff in C++. I even went to some competitions during that time, but sadly I really didn’t get far, competitive programming was and still is not my cup of tea.",
    ],
    external_links: [
      {
        id: 1,
        label: "Some C++ Projects",
        link: "https://github.com/axense234?tab=repositories&q=&type=&language=c%2B%2B&sort=",
      },
    ],
  },
  {
    id: 5,
    title: "Serious Web Dev Stuff",
    tech_ids: ["react", "scss", "ts-frontend", "node", "express", "mongodb"],
    paragraphs: [
      "On the web development side, I started learning technologies very slowly, one at a time, using them with other technologies as I began to understand them more. I believe I have dabbled and even got to an intermediate level on the following technologies, in chronological order: Bootstrap, React, Sass/SCSS, Node, Express, MongoDB with Mongoose, Typescript, PostgreSQL, Prisma, Redis, Redux with Redux Toolkit, NextJS, NestJS and others I might have forgot to mention here.",
    ],
    external_links: [
      {
        id: 1,
        label: "Some React Projects",
        link: "https://github.com/axense234?tab=repositories&q=react&type=&language=&sort=",
      },
    ],
  },
  {
    id: 6,
    title: "Big Projects, More Fun",
    icons: [
      {
        id: 1,
        icon_src:
          "https://res.cloudinary.com/birthdayreminder/image/upload/v1689691850/Highschool%20Site%20App/ltibp_logo_ptonmd_oirhs1.png",
        dest: "https://highschool-site-app-ca.com",
        label: "Highschool Site App Website",
      },
      {
        id: 2,
        icon_src:
          "https://res.cloudinary.com/birthdayreminder/image/upload/v1716209021/VitalPrep/brandmark-design-256x256_zdzu6z.png",
        label: "Vital Prep - Meal Prep Website Website",
        dest: "https://vitalprep-meal.com",
      },
      {
        id: 3,
        icon_src:
          "https://res.cloudinary.com/birthdayreminder/image/upload/v1742642023/Research%20Manager/brandmark-design-1024x0g1_ekxcnm.png",
        label: "Research Manager Website",
        dest: "https://researchmanager-ca.com",
      },
    ],
    paragraphs: [
      "In the process of learning said technologies, I also went to quite a few web development related highschool level competitions if I do say so myself, where I, in my honest opinion, did pretty great. Won a few county level competitions / olympiads and even got a bronze medal at one of the national olympiads. I know im not at the level of gold medals and stuff, but that bronze medal, even tho it’s only bronze, made me pretty proud of myself, more specifically proud of my hard consistent learning of web development and project work.",
    ],
    external_links: [
      {
        id: 1,
        label: "Highschool Site App (First Big Practice Project)",
        link: "https://highschool-site-app-ca.com",
      },
      {
        id: 2,
        label: "VitalPrep - Meal Prep Helper (Second Big Practice Project)",
        link: "https://vitalprep-meal.com",
      },
      {
        id: 3,
        label: "Research Manager (Third Big Practice Project)",
        link: "https://researchmanager-ca.com",
      },
    ],
  },
  {
    id: 7,
    title: "I Suck at Web Design",
    tech_ids: ["figma"],
    paragraphs: [
      "Still during my highschool years, I have soaked my feet in web design (I believe in October of 2022 or 2021) since my web design skills sucked, like I was designing my websites on the fly in my head then coding said design into reality. It was not a fun time when I had to scale up my projects without an actual design.",
      "I watched a few tutorials on figma and typography and web design and all of that stuff, and then practiced designing some old projects. And guess what, after a bit this web design journey made me understand more about web development in general. It also made me realize I really suck at web design and web development in general.",
    ],
  },
  {
    id: 8,
    title: "Dabbling with DevOps",
    tech_ids: ["docker", "kubernetes", "jenkins"],
    paragraphs: [
      "Once again, during my highschool years, I have dipped my toes in DevOps (docker, jenkins, prometheus even kubernetes or however it is spelled), tho as a one man team not doing complicated stuff, I kinda forgot how to use said technologies (except docker), but still remember what they are about, which is useful to some degree I guess.",
      "That’s the gist of my programming journey, probably missed some stuff but ehh if I forgot to mention said stuff it’s probably not as important. Now for the future, I guess il continue learning stuff at university and building an even stronger foundation of web development, and who knows, I might even get a job in something that is not web development related in the future. You really never know what life throws at you I guess.",
    ],
  },
];

export const aboutPageHobbiesContentData: CardProps[] = [
  {
    label: "Web Development",
    image: "/hobbies/webdev.png",
    desc: "The main thing I like about web development that some might dislike is the “gluing together” technologies part. Also it is kinda relaxing in a wierd way.",
    button: {
      colorSpecifier: "warning",
      dest: "/projects",
      label: "My Projects",
      size: "large",
    },
    externals: [
      {
        id: 1,
        dest: "https://github.com/axense234",
        label: "My Github Account",
        rel: "https://res.cloudinary.com/birthdayreminder/image/upload/v1772997441/Personal%20Website/tech-icons/other/github_haotje.png",
      },
    ],
  },
  {
    label: "Meal Prepping ",
    image: "/hobbies/mealprep.png",
    desc: "I only cook 1-2 times a week to prepare meals in advance. Cooking is relaxing asf, the reliability and the nutritional value of the meals is really appreciated.",
    button: {
      colorSpecifier: "success",
      dest: "/meal-prep",
      label: "My Meal Preps",
      size: "large",
    },
  },
  {
    label: "Relatively Long Walks",
    image: "/hobbies/walking.jpg",
    desc: "I like walking for about 1-2 hours around the neighborhood / parks about 3 times or more a week.",
  },
  {
    label: "Playing Games",
    image: "/hobbies/ror2.jpg",
    desc: "In my free time I do indeed like playing games. My current favorites are Risk of Rain 2, Terraria, Stardew Valley, Noita, Limbus Company, Brotato, Mewgenics.",
  },
];

export const awardsPageHeroContentData: SectionDataType = {
  title: "Awards",
  subtitle: "shiny stuff",
  buttons: [
    {
      id: 1,
      colorSpecifier: "warning",
      dest: "/awards",
      label: "Bronze Medal Award",
      size: "large",
    },
    {
      id: 2,
      colorSpecifier: "success",
      dest: "/awards",
      label: "Highschool Awards",
      size: "large",
    },
  ],
};

export const awardsPageBronzeMedalSectionData: SectionDataType = {
  title: "Bronze Medal Award",
  subtitle: "shiny round thing",
};

export const awardsPageHighschoolAwardsSectionData: SectionDataType = {
  title: "Highschool Awards",
  paragraphs: [
    "All my programming (mostly web dev) related highschool awards in chronological order.",
  ],
};

export const contactPageHeroSectionData: CommonPageHeroSectionDataType = {
  title: "Contact Me",
  subtitle: "communication",
  desc: "I am a romanian student passionate about web development. Feel free to contact me for any type of project related reason or just for the fun of it I guess.",
  image: "/misc/placeholder.jpg",
  buttons: [
    {
      id: 1,
      colorSpecifier: "warning",
      dest: "/contact",
      label: "Contact Me",
      size: "large",
    },
    {
      id: 2,
      colorSpecifier: "success",
      dest: "/contact",
      label: "Message Me",
      size: "large",
    },
    {
      id: 3,
      colorSpecifier: "delete",
      dest: "/contact",
      label: "My Resume",
      size: "large",
    },
  ],
};

export const contactPageContactMethodsSectionData: SectionDataType = {
  title: "Methods & Resume",
  paragraphs: [
    "Here are all the methods you can contact me. Also my resume is available for download as a PDF.",
  ],
};

export const contactPageContactMessageMeSectionData: SectionDataType = {
  title: "Message Me",
  paragraphs: [
    "Through this form you can send me a message through email. I usually respond within 24 hours.",
  ],
};

export const defaultContactFormEmail = "johnlikescheese@gmail.com";
export const defaultContactFormName = "John Cheese";
export const defaultContactFormMessage = "I am watching.";
export const defaultContactFormSubject = "I Like Cheese";

export const defaultContactFormData: SendEmailOptions = {
  email: "",
  name: "",
  message: "",
  subject: "",
};

export const projectsPageHeroContentData: SectionDataType = {
  title: "My Projects",
  subtitle: "effloresced passion",
  buttons: [
    {
      id: 1,
      colorSpecifier: "warning",
      dest: "/projects",
      label: "All Projects",
      size: "large",
    },
    {
      id: 2,
      colorSpecifier: "success",
      dest: "/projects",
      label: "Ongoing Projects",
      size: "large",
    },
  ],
};

export const projectsPageProjectsSectionData: SectionDataType = {
  title: "Projects",
  paragraphs: [
    "All the projects that I have worked on so far. Through those projects I have learned quite a lot about modern web development, yet I feel like I still don’t know anything. Curious how that works huh.",
  ],
};

export const projectsPageOngoingProjectsContentData: SectionDataType = {
  title: "Ongoing Projects",
  subtitle: "the ones and only",
};

export const mealPrepsPageHeroContentData: SectionDataType = {
  title: "Meal Preps",
  subtitle: "unfathomable meals",
  buttons: [
    {
      id: 1,
      colorSpecifier: "warning",
      dest: "/meal-prep",
      label: "Weekly Meal Prep",
      size: "large",
    },
    {
      id: 2,
      colorSpecifier: "success",
      dest: "/meal-prep",
      label: "Meals Gallery",
      size: "large",
    },
  ],
};
