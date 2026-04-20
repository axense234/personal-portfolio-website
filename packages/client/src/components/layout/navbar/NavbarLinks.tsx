// React
import { FC } from "react";
// SCSS
import navbarLinksStyles from "@/scss/components/layout/navbar/NavbarLinks.module.scss";
// Nav Link
import { Link } from "@/i18n/navigation";
// Data
import { navLinks } from "@/data";
// Translations
import { useTranslations } from "next-intl";

const NavbarLinks: FC = () => {
  const translations = useTranslations("layout.navigation.pageLinks");

  return (
    <nav className={navbarLinksStyles.container}>
      <ul className={navbarLinksStyles.links}>
        {navLinks.map((navLink) => {
          const translatedLabel = translations(navLink.dest);

          return (
            <li
              key={navLink.id}
              title={translatedLabel}
              aria-label={translatedLabel}
            >
              <Link href={navLink.dest}>{translatedLabel}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavbarLinks;
