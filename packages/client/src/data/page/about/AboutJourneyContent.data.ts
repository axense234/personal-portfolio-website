import { AboutJourneyDataType } from "@/core/types";

export const aboutPageJourneyContentLinkLabel = "Check out";

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
