import { NavLinkType } from "@/core/types";
import { FaHome, FaAward, FaInfoCircle } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { SiMealie } from "react-icons/si";

export const buttonColors: ("warning" | "success" | "delete")[] = [
  "warning",
  "success",
  "delete",
];

export const imagePlaceholderTextTitle = "Placeholder Image for Now";
export const imagePlaceholderTextAlt = "An Image of a Man";
export const imagePlaceholderTextSrc = "/misc/placeholder.jpg";

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
  // {
  //   id: 7,
  //   label: "Dashboard",
  //   dest: "/dashboard",
  //   icon: MdDashboard({}),
  // },
];
