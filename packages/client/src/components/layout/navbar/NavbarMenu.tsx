// React
import { FC, useState } from "react";
// SCSS
import navbarMenuStyles from "@/scss/components/layout/navbar/NavbarMenu.module.scss";
// React Icons
import { TiDelete } from "react-icons/ti";
import { LuSquareMenu } from "react-icons/lu";
// Data
import { navLinks } from "@/data";
// Link
import { Link } from "@/i18n/navigation";

const NavbarMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isOpen) {
    return (
      <div className={navbarMenuStyles.overlay}>
        <TiDelete
          title="Close Overlay"
          aria-label="Close Overlay"
          onClick={() => setIsOpen(false)}
        />
        <ul className={navbarMenuStyles.pages}>
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
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
        title="Open Overlay"
        aria-label="Open Overlay"
        onClick={() => setIsOpen(true)}
      />
    </div>
  );
};

export default NavbarMenu;
