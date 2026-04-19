// React
import { FC, useState } from "react";
// SCSS
import navbarMenuStyles from "@/scss/components/layout/navbar/NavbarMenu.module.scss";
// React Icons
import { TiDelete } from "react-icons/ti";
import { LuSquareMenu } from "react-icons/lu";
// Data
import {
  navbarMenuOnCloseOverlayTitle,
  navbarMenuOnOpenOverlayTitle,
  navLinks,
} from "@/data";
// Link
import { Link } from "@/i18n/navigation";

const NavbarMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isOpen) {
    return (
      <div className={navbarMenuStyles.overlay}>
        <TiDelete
          title={navbarMenuOnCloseOverlayTitle}
          aria-label={navbarMenuOnCloseOverlayTitle}
          onClick={() => setIsOpen(false)}
        />
        <ul className={navbarMenuStyles.pages}>
          {navLinks.map((navLink, index) => {
            return (
              <li key={index} onClick={() => setIsOpen(false)}>
                {navLink.icon}
                <Link
                  href={navLink.dest}
                  title={navLink.label}
                  aria-label={navLink.label}
                >
                  {navLink.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className={navbarMenuStyles.menu}>
      <LuSquareMenu
        title={navbarMenuOnOpenOverlayTitle}
        aria-label={navbarMenuOnOpenOverlayTitle}
        onClick={() => setIsOpen(true)}
      />
    </div>
  );
};

export default NavbarMenu;
