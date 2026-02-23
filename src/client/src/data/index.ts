// Types
import { LangFlagImageType, NavLinkType } from "@/core/types";

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
