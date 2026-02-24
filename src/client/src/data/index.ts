// Types
import {
  CommonPageHeroSectionDataType,
  LangFlagImageType,
  NavLinkType,
  SocialMediaIconType,
} from "@/core/types";

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

export const footerCopyright = "© 2026 Comanescu Andrei. All rights reserved.";

export const socialMediaIcons: SocialMediaIconType[] = [
  {
    id: 1,
    dest: "https://github.com/axense234",
    rel: "/social/github-logo-transparent-background-free-png.png",
    label: "My Github",
  },
  {
    id: 2,
    dest: "https://www.linkedin.com/in/comanescu-andrei-22b13a3b0/", // this might not be the right link but ehh
    rel: "/social/linkedin-logo-linkedin-icon-transparent-free-png.png",
    label: "My LinkedIn",
  },
];

export const homePageHeroSectionData: CommonPageHeroSectionDataType = {
  title: "Comănescu Andrei",
  subtitle: "Web Developer",
  desc: "Full-stack web developer passionate about building websites. Currently studying Computer Science at UBB.",
  image: "/misc/placeholder.jpg",
  buttons: [
    { id: 1, color: "warning", dest: "/projects", label: "My Projects" },
    { id: 2, color: "success", dest: "/about", label: "My Journey" },
  ],
};
