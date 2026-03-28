// React
import { FC } from "react";
// SCSS
import navbarLogoStyles from "@/scss/components/layout/navbar/NavbarLogo.module.scss";
// Link
import { Link } from "@/i18n/navigation";

const NavbarLogo: FC = () => {
  return (
    <div className={navbarLogoStyles.container}>
      <Link href={"/"}>
        <h6 title="Comănescu Andrei" aria-label="Comănescu Andrei">
          Comănescu Andrei
        </h6>
      </Link>
    </div>
  );
};

export default NavbarLogo;
