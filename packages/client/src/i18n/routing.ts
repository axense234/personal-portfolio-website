import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ro", "fr", "de"],
  defaultLocale: "en",
  localePrefix: "always",
  pathnames: {
    "/": { ro: "/", en: "/", fr: "/", de: "/" },
    "/home": {
      ro: "/acasa",
      en: "/home",
      fr: "/maison",
      de: "/heim",
    },

    "/about": {
      ro: "/despre",
      en: "/about",
      fr: "/environ",
      de: "/um",
    },

    "/awards": {
      ro: "/premii",
      en: "/awards",
      fr: "/realisations",
      de: "/auszeichnungen",
    },

    "/contact": {
      ro: "/contact",
      en: "/contact",
      fr: "/contact",
      de: "/kontakt",
    },

    "/dashboard": {
      ro: "/bord",
      en: "/dashboard",
      fr: "/dashboard",
      de: "/armaturenbrett",
    },

    "/meal-prep": {
      ro: "/meal-prep",
      en: "/meal-prep",
      fr: "/preparation-repas",
      de: "/meal-prep",
    },

    "/projects": {
      ro: "/proitecte",
      en: "/projects",
      fr: "/projets",
      de: "/projekte",
    },
  },
});
