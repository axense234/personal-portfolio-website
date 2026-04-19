// React
import { FC } from "react";
// SCSS
import navbarLogoStyles from "@/scss/components/layout/navbar/NavbarLogo.module.scss";
// Link
import { Link } from "@/i18n/navigation";
// Data
import { navbarLogoHref, navbarLogoTitle } from "@/data";

const NavbarLogo: FC = () => {
  return (
    <div className={navbarLogoStyles.container}>
      <Link href={navbarLogoHref}>
        <h6 title={navbarLogoTitle} aria-label={navbarLogoTitle}>
          {navbarLogoTitle}
        </h6>
      </Link>
    </div>
  );
};

export default NavbarLogo;
