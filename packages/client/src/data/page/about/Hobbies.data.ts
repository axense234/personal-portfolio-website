import { CardProps } from "@/core/interfaces";

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
