// React
import { FC } from "react";
// SCSS
import navbarStyles from "@/scss/components/layout/navbar/Navbar.module.scss";
// Components
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarUtils from "./utils/NavbarUtils";
import NavbarMenu from "./NavbarMenu";
// Hooks
import useGetWindowWidth from "@/hooks/general/useGetWindowWidth";

const Navbar: FC = () => {
  const windowWidth = useGetWindowWidth();

  return (
    <header className={navbarStyles.container}>
      <NavbarLogo />
      {windowWidth > 1200 && <NavbarLinks />}
      <NavbarUtils />
      {windowWidth <= 1200 && <NavbarMenu />}
    </header>
  );
};

export default Navbar;
